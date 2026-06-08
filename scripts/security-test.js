const { spawn } = require("child_process");
const path = require("path");

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const debugPort = 9700 + Math.floor(Math.random() * 200);
const appPort = 8766;
const profile = `/private/tmp/feb-security-profile-${Date.now()}`;
const appRoot = path.resolve(__dirname, "..");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getJSON = async (target, options) => {
  const response = await fetch(target, options);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

async function waitForHttp(url, getServerExit, getServerError) {
  for (let i = 0; i < 50; i += 1) {
    const serverExit = getServerExit();
    if (serverExit) throw new Error(`Server exited early: ${JSON.stringify(serverExit)} ${getServerError()}`);
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await sleep(120);
    }
  }
  throw new Error(`Server did not respond: ${url}`);
}

async function main() {
  let serverExit = null;
  let serverError = "";
  let chromeExit = null;
  const server = spawn("python3", ["-m", "http.server", String(appPort), "--bind", "127.0.0.1"], {
    cwd: appRoot,
    stdio: ["ignore", "ignore", "pipe"],
  });
  server.stderr.on("data", (chunk) => {
    serverError += chunk.toString();
  });
  server.on("exit", (code, signal) => {
    serverExit = { code, signal };
  });

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
    await waitForHttp(`http://127.0.0.1:${appPort}/`, () => serverExit, () => serverError);
    let chromeReady = false;
    for (let i = 0; i < 100; i += 1) {
      if (chromeExit) throw new Error(`Chrome exited early: ${JSON.stringify(chromeExit)}`);
      try {
        await getJSON(`http://127.0.0.1:${debugPort}/json/version`);
        chromeReady = true;
        break;
      } catch {
        await sleep(150);
      }
    }
    if (!chromeReady) throw new Error(`Chrome CDP did not respond on ${debugPort}`);

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
    await send("Page.navigate", { url: `http://127.0.0.1:${appPort}/` });
    await sleep(800);

    const result = await send("Runtime.evaluate", {
      awaitPromise: true,
      returnByValue: true,
      expression: `
        (async () => {
          localStorage.clear();
          window.confirm = () => true;
          const passphrase = 'security passphrase';
          const setValue = (selector, value) => {
            const node = document.querySelector(selector);
            node.value = value;
            node.dispatchEvent(new Event('input', { bubbles: true }));
            node.dispatchEvent(new Event('change', { bubbles: true }));
          };
          const expectReject = async (label, fn) => {
            try {
              await fn();
              throw new Error(label + ' accepted');
            } catch (error) {
              if (String(error.message).includes('accepted')) throw error;
              return true;
            }
          };
          setValue('#familyName', 'Security QA');
          setValue('#passphrase', passphrase);
          document.querySelector('#seedDemoButton').click();
          await new Promise((resolve) => setTimeout(resolve, 120));

          const baseAttachment = {
            id: 'att-1',
            name: 'scan.txt',
            type: 'text/plain',
            size: 1,
            createdAt: new Date().toISOString(),
            redaction: 'safe',
            dataBase64: btoa('x'),
          };
          const baseVault = {
            version: 2,
            familyName: 'Security QA',
            checklist: {},
            records: [{
              id: 'rec-1',
              category: 'documents',
              title: 'Doc',
              detail: 'Hint',
              sensitivity: 'safe',
              attachmentIds: ['att-1'],
            }],
            attachments: [baseAttachment],
            backup: {},
            updatedAt: new Date().toISOString(),
          };

          const migratedV2 = await migrateVaultSchema(baseVault);
          const v2MigrationAddsV3Foundation =
            migratedV2.version === 3 &&
            migratedV2.records.every((record) => record.fields && typeof record.fields === 'object') &&
            migratedV2.attachments.every((attachment) => /^[a-f0-9]{64}$/.test(attachment.checksumSha256 || ''));

          const corruptBase64Rejected = await expectReject('corrupt base64', () =>
            migrateVaultSchema({ ...baseVault, attachments: [{ ...baseAttachment, dataBase64: '!!!!' }] })
          );
          const sizeMismatchRejected = await expectReject('size mismatch', () =>
            migrateVaultSchema({ ...baseVault, attachments: [{ ...baseAttachment, size: 2 }] })
          );
          const negativeSizeRejected = await expectReject('negative size', () =>
            migrateVaultSchema({ ...baseVault, attachments: [{ ...baseAttachment, size: -1 }] })
          );
          const longNameRejected = await expectReject('long filename', () =>
            migrateVaultSchema({ ...baseVault, attachments: [{ ...baseAttachment, name: 'a'.repeat(170) + '.txt' }] })
          );
          const checksumMismatchRejected = await expectReject('checksum mismatch', () =>
            migrateVaultSchema({ ...baseVault, attachments: [{ ...baseAttachment, checksumSha256: '0'.repeat(64) }] })
          );

          const chunk = new Uint8Array(4300000);
          const largeAttachments = Array.from({ length: 5 }, (_, index) => ({
            ...baseAttachment,
            id: 'large-' + index,
            name: 'large-' + index + '.txt',
            size: chunk.byteLength,
            dataBase64: toBase64(chunk),
          }));
          const totalLimitRejected = await expectReject('total attachment limit', () =>
            migrateVaultSchema({ ...baseVault, records: [], attachments: largeAttachments })
          );

          const unsafeName = normalizeAttachmentFilename('../bad:name?.txt');
          const filenameNormalized =
            unsafeName === 'bad-name-.txt' &&
            !unsafeName.includes('/') &&
            !unsafeName.includes('\\\\') &&
            !unsafeName.includes(':') &&
            !unsafeName.includes('?');

          setValue('#recordTitle', '<img src=x onerror=window.__xss=1>');
          setValue('#recordDetail', '<script>window.__xss=1<\\/script>');
          setValue('[data-field-key="location"]', '<svg onload=window.__fieldXss=1>');
          const xssFile = new File(['<script>window.__previewXss=1<\\/script>'], 'xss.txt', { type: 'text/plain' });
          const xssTransfer = new DataTransfer();
          xssTransfer.items.add(xssFile);
          document.querySelector('#recordAttachment').files = xssTransfer.files;
          document.querySelector('#recordForm').requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 220));
          document.querySelector('.preview-attachment-button').click();
          await new Promise((resolve) => setTimeout(resolve, 220));
          const xssTextOnly =
            window.__xss !== 1 &&
            window.__fieldXss !== 1 &&
            window.__previewXss !== 1 &&
            document.querySelector('.record-card h3').textContent.includes('<img') &&
            !document.querySelector('.record-card h3 img') &&
            document.querySelector('.field-summary').textContent.includes('<svg') &&
            !document.querySelector('.field-summary svg') &&
            document.querySelector('.attachment-preview').textContent.includes('<script>') &&
            !document.querySelector('.attachment-preview script');

          document.querySelector('.edit-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          setValue('.record-edit-panel [name="title"]', '<b>edited title<\\/b>');
          setValue('.record-edit-panel [data-edit-field-key="location"]', '<iframe src=x>');
          document.querySelector('.save-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 160));
          const editXssTextOnly =
            document.querySelector('.record-card h3').textContent.includes('<b>edited title') &&
            !document.querySelector('.record-card h3 b') &&
            document.querySelector('.field-summary').textContent.includes('<iframe') &&
            !document.querySelector('.field-summary iframe');

          const rawEncrypt = async (data) => {
            const salt = crypto.getRandomValues(new Uint8Array(16));
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const key = await deriveKey(passphrase, salt);
            const plaintext = new TextEncoder().encode(JSON.stringify(data));
            const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext);
            return {
              app: 'family-emergency-binder',
              version: 2,
              schemaVersion: 2,
              kdf: 'PBKDF2-SHA256-250000',
              cipher: 'AES-GCM-256',
              salt: toBase64(salt),
              iv: toBase64(iv),
              ciphertext: toBase64(new Uint8Array(ciphertext)),
            };
          };
          const badEnvelope = await rawEncrypt({ ...baseVault, attachments: [{ ...baseAttachment, size: 2 }] });
          const encryptedBadFile = new File([JSON.stringify(badEnvelope)], 'bad.emergencyvault.json', { type: 'application/json' });
          const transfer = new DataTransfer();
          transfer.items.add(encryptedBadFile);
          const importInput = document.querySelector('#importVaultInput');
          const beforeCards = document.querySelectorAll('.record-card').length;
          importInput.files = transfer.files;
          importInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 650));
          const invalidImportRejected =
            document.querySelectorAll('.record-card').length === beforeCards &&
            document.querySelector('#exportPreview').textContent.includes('ReadyBinder vault');

          const packetRedacted =
            !document.querySelector('#exportPreview').textContent.includes('dataBase64') &&
            !document.querySelector('#exportPreview').textContent.includes(baseAttachment.dataBase64) &&
            !document.querySelector('#exportPreview').textContent.includes('Small black case') &&
            !document.querySelector('#exportPreview').textContent.includes('Password manager');

          return {
            title: document.title,
            corruptBase64Rejected,
            sizeMismatchRejected,
            negativeSizeRejected,
            longNameRejected,
            checksumMismatchRejected,
            totalLimitRejected,
            v2MigrationAddsV3Foundation,
            filenameNormalized,
            xssTextOnly,
            editXssTextOnly,
            invalidImportRejected,
            packetRedacted,
          };
        })();
      `,
    });
    ws.close();
    const value = result.result.value;
    const failures = Object.entries(value).filter(([key, pass]) => key !== "title" && pass !== true);
    if (value.title !== "ReadyBinder") failures.push(["title", value.title]);
    if (failures.length) throw new Error(`Security test failures: ${JSON.stringify(failures, null, 2)}`);
    console.log("Security tests passed");
  } finally {
    chromeProcess.kill("SIGTERM");
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
