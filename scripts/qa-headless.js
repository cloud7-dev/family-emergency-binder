const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const debugPort = 9337;
const appPort = 8765;
const profile = `/private/tmp/feb-qa-profile-${Date.now()}`;
const appRoot = path.resolve(__dirname, "..");
const screenshotPath = "/private/tmp/family-emergency-binder-qa.png";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getJSON = async (target, options) => {
  const response = await fetch(target, options);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

async function waitForHttp(url) {
  for (let i = 0; i < 40; i += 1) {
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
  const server = spawn("python3", ["-m", "http.server", String(appPort)], {
    cwd: appRoot,
    stdio: "ignore",
  });
  const chromeProcess = spawn(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      `--remote-debugging-port=${debugPort}`,
      `--user-data-dir=${profile}`,
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    await waitForHttp(`http://127.0.0.1:${appPort}/`);
    for (let i = 0; i < 50; i += 1) {
      try {
        await getJSON(`http://127.0.0.1:${debugPort}/json/version`);
        break;
      } catch {
        await sleep(150);
      }
    }

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
          document.querySelector('#saveVaultButton').click();
          await new Promise((resolve) => setTimeout(resolve, 700));
          const encrypted = localStorage.getItem('family-emergency-binder.encryptedVault');
          document.querySelector('#lockButton').click();
          await new Promise((resolve) => setTimeout(resolve, 80));
          setValue('#passphrase', 'correct horse battery staple');
          document.querySelector('#vaultForm').requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 700));
          setValue('#languageSelect', 'ja');
          await new Promise((resolve) => setTimeout(resolve, 80));
          const japaneseTitle = document.querySelector('h1').textContent;
          setValue('#languageSelect', 'hi');
          await new Promise((resolve) => setTimeout(resolve, 80));
          const envelope = encrypted ? JSON.parse(encrypted) : null;
          return {
            title: document.title,
            h1: document.querySelector('h1').textContent,
            unlocked: document.querySelector('#vaultStateBadge').textContent,
            score: document.querySelector('#readinessScore').textContent,
            records: document.querySelectorAll('.record-card').length,
            encryptedEnvelope: envelope ? {
              app: envelope.app,
              version: envelope.version,
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

    const screenshot = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
    fs.writeFileSync(screenshotPath, Buffer.from(screenshot.data, "base64"));
    ws.close();
    const qa = result.result?.value;
    if (!qa || result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails || result));
    if (qa.bodyWidth > qa.viewportWidth) throw new Error(`Horizontal overflow: ${qa.bodyWidth} > ${qa.viewportWidth}`);
    if (!qa.encryptedEnvelope?.hasCiphertext || qa.records < 4 || qa.score !== "60%") {
      throw new Error(`Unexpected QA result: ${JSON.stringify(qa)}`);
    }
    console.log(JSON.stringify({ qa, screenshotPath }, null, 2));
  } finally {
    chromeProcess.kill("SIGTERM");
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
