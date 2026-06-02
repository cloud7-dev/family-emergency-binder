const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const debugPort = 9300 + Math.floor(Math.random() * 400);
const appPort = 8765;
const profile = `/private/tmp/feb-qa-profile-${Date.now()}`;
const appRoot = path.resolve(__dirname, "..");
const screenshotPath = "/private/tmp/family-emergency-binder-qa.png";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let serverExit = null;
let serverError = "";
let chromeExit = null;
const getJSON = async (target, options) => {
  const response = await fetch(target, options);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

async function waitForHttp(url) {
  for (let i = 0; i < 40; i += 1) {
    if (serverExit) throw new Error(`Server exited before responding: ${JSON.stringify(serverExit)} ${serverError}`);
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await sleep(150);
    }
  }
  throw new Error(`Server did not respond: ${url}`);
}

async function main() {
  const isMobile = process.argv.includes("--mobile");
  const useExternalServer = process.env.FEB_QA_EXTERNAL_SERVER === "1";
  const server = useExternalServer
    ? null
    : spawn("python3", ["-m", "http.server", String(appPort), "--bind", "127.0.0.1"], {
        cwd: appRoot,
        stdio: ["ignore", "ignore", "pipe"],
      });
  if (server) {
    server.stderr.on("data", (chunk) => {
      serverError += chunk.toString();
    });
    server.on("exit", (code, signal) => {
      serverExit = { code, signal };
    });
  }
  const chromeProcess = spawn(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${profile}`,
      "about:blank",
    ],
    { stdio: "ignore" },
  );
  chromeProcess.on("exit", (code, signal) => {
    chromeExit = { code, signal };
  });

  try {
    await waitForHttp(`http://127.0.0.1:${appPort}/`);
    let chromeReady = false;
    for (let i = 0; i < 100; i += 1) {
      if (chromeExit) throw new Error(`Chrome exited before CDP was ready: ${JSON.stringify(chromeExit)}`);
      try {
        await getJSON(`http://127.0.0.1:${debugPort}/json/version`);
        chromeReady = true;
        break;
      } catch {
        await sleep(200);
      }
    }
    if (!chromeReady) throw new Error(`Chrome CDP did not respond on port ${debugPort}`);

    const page = await getJSON(`http://127.0.0.1:${debugPort}/json/new?http://127.0.0.1:${appPort}/`, {
      method: "PUT",
    });
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    const pending = new Map();
    let id = 0;

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) {
        const { resolve, reject } = pending.get(message.id);
        pending.delete(message.id);
        message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result);
      }
    };

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    const send = (method, params = {}) =>
      new Promise((resolve, reject) => {
        const callId = ++id;
        pending.set(callId, { resolve, reject });
        ws.send(JSON.stringify({ id: callId, method, params }));
      });

    await send("Page.enable");
    await send("Runtime.enable");
    await send("Emulation.setDeviceMetricsOverride", {
      width: isMobile ? 390 : 1440,
      height: isMobile ? 860 : 960,
      deviceScaleFactor: isMobile ? 2 : 1,
      mobile: isMobile,
    });
    await send("Page.navigate", { url: `http://127.0.0.1:${appPort}/` });
    await sleep(800);

    const result = await send("Runtime.evaluate", {
      awaitPromise: true,
      returnByValue: true,
      expression: `
        (async () => {
          localStorage.clear();
          const setValue = (selector, value) => {
            const node = document.querySelector(selector);
            node.value = value;
            node.dispatchEvent(new Event('input', { bubbles: true }));
            node.dispatchEvent(new Event('change', { bubbles: true }));
          };
          setValue('#familyName', 'Kim family');
          setValue('#passphrase', 'correct horse battery staple');
          document.querySelector('#seedDemoButton').click();
          await new Promise((resolve) => setTimeout(resolve, 80));
          setValue('#recordCategory', 'documents');
          setValue('#recordTitle', 'Emergency card scan');
          setValue('#recordDetail', 'Tiny QA note attached; original file must stay out of the packet');
          setValue('#recordSensitivity', 'safe');
          const qaFile = new File(['tiny attachment contents'], 'qa-note.txt', { type: 'text/plain' });
          const recordTransfer = new DataTransfer();
          recordTransfer.items.add(qaFile);
          document.querySelector('#recordAttachment').files = recordTransfer.files;
          document.querySelector('#recordForm').requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 200));
          document.querySelector('#saveVaultButton').click();
          await new Promise((resolve) => setTimeout(resolve, 700));
          const encrypted = localStorage.getItem('family-emergency-binder.encryptedVault');
          document.querySelector('#lockButton').click();
          await new Promise((resolve) => setTimeout(resolve, 80));
          localStorage.removeItem('family-emergency-binder.encryptedVault');
          setValue('#passphrase', 'correct horse battery staple');
          const importFile = new File([encrypted], 'qa.emergencyvault.json', { type: 'application/json' });
          const importTransfer = new DataTransfer();
          importTransfer.items.add(importFile);
          const importInput = document.querySelector('#importVaultInput');
          importInput.files = importTransfer.files;
          importInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 700));
          setValue('#languageSelect', 'ja');
          await new Promise((resolve) => setTimeout(resolve, 80));
          const japaneseTitle = document.querySelector('h1').textContent;
          setValue('#languageSelect', 'hi');
          await new Promise((resolve) => setTimeout(resolve, 80));
          const envelope = encrypted ? JSON.parse(encrypted) : null;
          const packet = document.querySelector('#exportPreview').textContent;
          return {
            title: document.title,
            h1: document.querySelector('h1').textContent,
            unlocked: document.querySelector('#vaultStateBadge').textContent,
            score: document.querySelector('#readinessScore').textContent,
            records: document.querySelectorAll('.record-card').length,
            attachmentChips: document.querySelectorAll('.attachment-chip').length,
            packetMentionsAttachment: packet.includes('qa-note.txt') || packet.includes('demo-medical-note.txt'),
            packetLeaksAttachmentData: packet.includes('tiny attachment contents') || packet.includes('dataBase64'),
            encryptedEnvelope: envelope ? {
              app: envelope.app,
              version: envelope.version,
              schemaVersion: envelope.schemaVersion,
              kdf: envelope.kdf,
              cipher: envelope.cipher,
              hasCiphertext: Boolean(envelope.ciphertext)
            } : null,
            japaneseTitle,
            bodyWidth: document.body.scrollWidth,
            viewportWidth: window.innerWidth,
            isMobile: ${isMobile}
          };
        })()
      `,
    });

    const offlineResult = await send("Runtime.evaluate", {
      awaitPromise: true,
      returnByValue: true,
      expression: `
        (async () => {
          if (!('serviceWorker' in navigator) || !('caches' in window)) return { ready: false, cacheNames: [] };
          await navigator.serviceWorker.ready;
          const cacheNames = await caches.keys();
          return { ready: true, cacheNames };
        })()
      `,
    });
    await send("Network.enable");
    await send("Network.emulateNetworkConditions", {
      offline: true,
      latency: 0,
      downloadThroughput: 0,
      uploadThroughput: 0,
    });
    await send("Page.navigate", { url: `http://127.0.0.1:${appPort}/` });
    await sleep(1000);
    const offlineShell = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `
        ({
          title: document.title,
          hasShell: Boolean(document.querySelector('#vaultForm') && document.querySelector('#recordForm')),
          bodyWidth: document.body.scrollWidth,
          viewportWidth: window.innerWidth
        })
      `,
    });
    await send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 0,
      downloadThroughput: -1,
      uploadThroughput: -1,
    });

    const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
    fs.writeFileSync(screenshotPath, Buffer.from(screenshot.data, "base64"));
    ws.close();
    const qa = result.result?.value;
    qa.offline = offlineResult.result?.value;
    qa.offlineShell = offlineShell.result?.value;
    if (!qa || result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails || result));
    if (qa.bodyWidth > qa.viewportWidth) throw new Error(`Horizontal overflow: ${qa.bodyWidth} > ${qa.viewportWidth}`);
    if (qa.offlineShell?.bodyWidth > qa.offlineShell?.viewportWidth) {
      throw new Error(`Offline horizontal overflow: ${qa.offlineShell.bodyWidth} > ${qa.offlineShell.viewportWidth}`);
    }
    if (
      !qa.encryptedEnvelope?.hasCiphertext ||
      qa.encryptedEnvelope.schemaVersion !== 2 ||
      qa.records < 5 ||
      qa.attachmentChips < 2 ||
      !qa.packetMentionsAttachment ||
      qa.packetLeaksAttachmentData ||
      !qa.offline?.ready ||
      !qa.offline.cacheNames?.includes("family-emergency-binder-v2") ||
      !qa.offlineShell?.hasShell ||
      qa.score !== "60%"
    ) {
      throw new Error(`Unexpected QA result: ${JSON.stringify(qa)}`);
    }
    console.log(JSON.stringify({ qa, screenshotPath }, null, 2));
  } finally {
    chromeProcess.kill("SIGTERM");
    if (server) server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
