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
          window.confirm = () => true;
          const capturedDownloads = [];
          const originalCreateObjectURL = URL.createObjectURL.bind(URL);
          URL.createObjectURL = (blob) => {
            window.__lastDownloadBlob = blob;
            return originalCreateObjectURL(blob);
          };
          const originalAnchorClick = HTMLAnchorElement.prototype.click;
          HTMLAnchorElement.prototype.click = function qaClick() {
            if (this.download && window.__lastDownloadBlob) {
              capturedDownloads.push({ name: this.download, type: window.__lastDownloadBlob.type, blob: window.__lastDownloadBlob });
            }
            return originalAnchorClick.call(this);
          };
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
          setValue('[data-field-key="documentType"]', 'Emergency scan');
          setValue('[data-field-key="location"]', 'Shelter folder');
          setValue('[data-field-key="owner"]', 'QA owner');
          setValue('[data-field-key="expiryDate"]', '2029-12-31');
          setValue('#recordSensitivity', 'trusted');
          const qaFile = new File(['tiny attachment contents'], 'qa-note.txt', { type: 'text/plain' });
          const recordTransfer = new DataTransfer();
          recordTransfer.items.add(qaFile);
          document.querySelector('#recordAttachment').files = recordTransfer.files;
          document.querySelector('#recordForm').requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 200));
          document.querySelector('.preview-attachment-button').click();
          await new Promise((resolve) => setTimeout(resolve, 250));
          const trustedPreviewText = document.querySelector('.attachment-preview')?.textContent || '';
          const previewButtonAfterReveal = document.querySelector('.preview-attachment-button')?.textContent || '';
          const previewButtonShowsHide =
            previewButtonAfterReveal.includes('Hide') ||
            previewButtonAfterReveal.includes('닫기') ||
            previewButtonAfterReveal.includes('Hide preview');
          const fieldSummaryText = document.querySelector('.field-summary')?.textContent || '';
          document.querySelector('.edit-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          document.querySelector('.record-edit-panel [name="title"]').value = 'Edited emergency card scan';
          document.querySelector('.record-edit-panel [name="title"]').dispatchEvent(new Event('input', { bubbles: true }));
          document.querySelector('.cancel-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          const cancelKeptOriginalTitle = vault.records.some((record) => record.title === 'Emergency card scan');
          document.querySelector('.edit-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          setValue('.record-edit-panel [name="title"]', 'Edited emergency card scan');
          setValue('.record-edit-panel [name="detail"]', 'Edited trusted detail must stay out of packet');
          setValue('.record-edit-panel [name="category"]', 'insurance');
          await new Promise((resolve) => setTimeout(resolve, 80));
          setValue('.record-edit-panel [data-edit-field-key="provider"]', 'Edited insurer');
          setValue('.record-edit-panel [data-edit-field-key="policyType"]', 'Emergency policy');
          setValue('.record-edit-panel [data-edit-field-key="policyNumberHint"]', 'Do not print this policy hint');
          document.querySelector('.save-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 180));
          const editedRecord = vault.records.find((record) => record.title === 'Edited emergency card scan');
          const editSaved =
            editedRecord?.category === 'insurance' &&
            editedRecord?.detail === 'Edited trusted detail must stay out of packet' &&
            editedRecord?.fields?.provider === 'Edited insurer' &&
            editedRecord?.fields?.policyType === 'Emergency policy' &&
            !('location' in editedRecord.fields) &&
            !editedRecord.fields?.lastReviewedAt;
          document.querySelector('#saveVaultButton').click();
          await new Promise((resolve) => setTimeout(resolve, 700));
          const encrypted = localStorage.getItem('family-emergency-binder.encryptedVault');
          const currentVaultShape = {
            version: vault.version,
            recordsHaveFields: vault.records.every((record) => record.fields && typeof record.fields === 'object'),
            recordsHaveStructuredValues: vault.records.some((record) => record.fields?.provider === 'Edited insurer'),
            attachmentsHaveChecksums: vault.attachments.every((attachment) => /^[a-f0-9]{64}$/.test(attachment.checksumSha256 || '')),
          };
          const verifyInput = document.querySelector('#verifyBackupInput');
          const verifyTransfer = new DataTransfer();
          verifyTransfer.items.add(new File([encrypted], 'verify.emergencyvault.json', { type: 'application/json' }));
          verifyInput.files = verifyTransfer.files;
          verifyInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 700));
          const verifySuccess =
            /^\\d{4}-\\d{2}-\\d{2}T/.test(vault.backup?.lastVerifiedAt || '') &&
            document.querySelector('#backupStatus').textContent.includes('Kim family') &&
            document.querySelector('#backupStatus').textContent.includes('Schema') &&
            document.querySelectorAll('.record-card').length === 5;
          const lastVerifiedAfterSuccess = vault.backup.lastVerifiedAt;
          setValue('#passphrase', 'wrong passphrase');
          const verifyWrongTransfer = new DataTransfer();
          verifyWrongTransfer.items.add(new File([encrypted], 'verify.emergencyvault.json', { type: 'application/json' }));
          verifyInput.files = verifyWrongTransfer.files;
          verifyInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 700));
          const verifyWrongPreservedVault =
            document.querySelectorAll('.record-card').length === 5 &&
            vault.backup.lastVerifiedAt === lastVerifiedAfterSuccess &&
            (document.querySelector('#backupStatus').textContent.includes('failed') ||
              document.querySelector('#backupStatus').textContent.includes('실패'));
          setValue('#passphrase', 'correct horse battery staple');
          document.querySelector('.mark-reviewed-button').click();
          await new Promise((resolve) => setTimeout(resolve, 140));
          const reviewedRecordHasTimestamp = vault.records.some((record) => record.title === 'Edited emergency card scan' && /^\\d{4}-\\d{2}-\\d{2}T/.test(record.fields?.lastReviewedAt || ''));
          document.querySelector('.download-attachment-button').click();
          await new Promise((resolve) => setTimeout(resolve, 150));
          const attachmentDownload = capturedDownloads.at(-1);
          const attachmentDownloadText = attachmentDownload ? await attachmentDownload.blob.text() : '';
          const importFilePrompt = new File([encrypted], 'qa.emergencyvault.json', { type: 'application/json' });
          const promptTransfer = new DataTransfer();
          promptTransfer.items.add(importFilePrompt);
          const promptInput = document.querySelector('#importVaultInput');
          promptInput.files = promptTransfer.files;
          promptInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 700));
          const backupButtonVisible = !document.querySelector('#downloadCurrentBackupButton').classList.contains('hidden');
          const recordsBeforeBackup = document.querySelectorAll('.record-card').length;
          document.querySelector('#downloadCurrentBackupButton').click();
          await new Promise((resolve) => setTimeout(resolve, 250));
          const backupDownload = capturedDownloads.at(-1);
          const importFileAfterBackup = new File([encrypted], 'qa.emergencyvault.json', { type: 'application/json' });
          const afterBackupTransfer = new DataTransfer();
          afterBackupTransfer.items.add(importFileAfterBackup);
          promptInput.files = afterBackupTransfer.files;
          promptInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 700));
          const recordsAfterBackupImport = document.querySelectorAll('.record-card').length;
          setValue('#passphrase', 'wrong passphrase');
          const wrongTransfer = new DataTransfer();
          wrongTransfer.items.add(new File([encrypted], 'qa.emergencyvault.json', { type: 'application/json' }));
          promptInput.files = wrongTransfer.files;
          promptInput.dispatchEvent(new Event('change', { bubbles: true }));
          await new Promise((resolve) => setTimeout(resolve, 700));
          const recordsAfterWrongImport = document.querySelectorAll('.record-card').length;
          setValue('#passphrase', 'correct horse battery staple');
          document.querySelector('[data-section="medical"]').click();
          await new Promise((resolve) => setTimeout(resolve, 160));
          const navMedicalFilter = document.querySelector('#recordCategoryFilter').value === 'medical';
          const medicalFilteredCount = document.querySelectorAll('.record-card').length;
          setValue('#recordCategoryFilter', 'all');
          setValue('#recordSensitivityFilter', 'safe');
          await new Promise((resolve) => setTimeout(resolve, 80));
          const safeFilteredCount = document.querySelectorAll('.record-card').length;
          setValue('#recordSensitivityFilter', 'all');
          await new Promise((resolve) => setTimeout(resolve, 80));
          setValue('#recordSearch', 'Edited insurer');
          await new Promise((resolve) => setTimeout(resolve, 80));
          const searchFilteredCount = document.querySelectorAll('.record-card').length;
          const searchFilteredTitle = document.querySelector('.record-card h3')?.textContent || '';
          setValue('#recordSearch', '');
          await new Promise((resolve) => setTimeout(resolve, 80));
          document.querySelector('.remove-attachment-button').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          const attachmentChipsAfterRemove = document.querySelectorAll('.attachment-chip').length;
          document.querySelector('.delete-record-button').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          const recordsAfterDelete = document.querySelectorAll('.record-card').length;
          document.querySelector('#markRecoveryTestButton').click();
          await new Promise((resolve) => setTimeout(resolve, 120));
          const recoveryMarked = document.querySelector('#exportPreview').textContent.includes('Recovery test') || document.querySelector('#exportPreview').textContent.includes('복구 테스트');
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
          const unnamedControls = [...document.querySelectorAll('button, input, select')]
            .filter((control) => {
            if (control.type === 'hidden') return false;
            const hasText = control.tagName === 'BUTTON' && control.textContent.trim();
            const hasAria = control.getAttribute('aria-label');
            const hasLabel = Boolean(control.closest('label') || (control.id && document.querySelector('label[for="' + control.id + '"]')));
            return !Boolean(hasText || hasAria || hasLabel);
          })
          .map((control) => control.tagName.toLowerCase() + '#' + (control.id || control.name || control.className || 'unnamed'));
          const controlsNamed = unnamedControls.length === 0;
          return {
            title: document.title,
            h1: document.querySelector('h1').textContent,
            unlocked: document.querySelector('#vaultStateBadge').textContent,
            score: document.querySelector('#readinessScore').textContent,
            records: document.querySelectorAll('.record-card').length,
            attachmentChips: document.querySelectorAll('.attachment-chip').length,
            attachmentDownloadName: attachmentDownload?.name || '',
            attachmentDownloadText,
            trustedPreviewText,
            previewButtonAfterReveal,
            previewButtonShowsHide,
            currentVaultShape,
            verifySuccess,
            verifyWrongPreservedVault,
            reviewedRecordHasTimestamp,
            cancelKeptOriginalTitle,
            editSaved,
            dashboardReviewCounts: document.querySelector('#dashboardReviewCounts')?.textContent || '',
            fieldSummaryText,
            backupButtonVisible,
            backupDownloadName: backupDownload?.name || '',
            recordsBeforeBackup,
            recordsAfterBackupImport,
            recordsAfterWrongImport,
            navMedicalFilter,
            medicalFilteredCount,
            safeFilteredCount,
            searchFilteredCount,
            searchFilteredTitle,
            attachmentChipsAfterRemove,
            recordsAfterDelete,
            recoveryMarked,
            packetMentionsAttachment: packet.includes('qa-note.txt') || packet.includes('demo-medical-note.txt'),
            packetIncludesSafeFields: packet.includes('Provider: Seoul Central Hospital') || packet.includes('기관/제공자: Seoul Central Hospital'),
            packetLeaksTrustedFields: packet.includes('Shelter folder') || packet.includes('Edited insurer') || packet.includes('Do not print this policy hint') || packet.includes('Password manager'),
            packetLeaksAttachmentData: packet.includes('tiny attachment contents') || packet.includes('dataBase64'),
            controlsNamed,
            unnamedControls,
            exportPreviewLive: document.querySelector('#exportPreview')?.getAttribute('aria-live') === 'polite',
            backupStatusFocusable: document.querySelector('#backupStatus')?.tabIndex === -1,
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
      qa.encryptedEnvelope.schemaVersion !== 3 ||
      qa.currentVaultShape?.version !== 3 ||
      !qa.currentVaultShape?.recordsHaveFields ||
      !qa.currentVaultShape?.recordsHaveStructuredValues ||
      !qa.currentVaultShape?.attachmentsHaveChecksums ||
      !qa.reviewedRecordHasTimestamp ||
      !qa.cancelKeptOriginalTitle ||
      !qa.editSaved ||
      !qa.dashboardReviewCounts ||
      !qa.fieldSummaryText.includes("Shelter folder") ||
      qa.records < 5 ||
      qa.attachmentChips < 2 ||
      qa.attachmentDownloadName !== "qa-note.txt" ||
      qa.attachmentDownloadText !== "tiny attachment contents" ||
      !qa.trustedPreviewText.includes("tiny attachment contents") ||
      !qa.previewButtonShowsHide ||
      !qa.backupButtonVisible ||
      !qa.backupDownloadName.endsWith(".before-import.emergencyvault.json") ||
      qa.recordsBeforeBackup !== 5 ||
      qa.recordsAfterBackupImport !== 5 ||
      qa.recordsAfterWrongImport !== 5 ||
      qa.attachmentChipsAfterRemove !== 1 ||
      qa.recordsAfterDelete !== 4 ||
      !qa.recoveryMarked ||
      !qa.packetMentionsAttachment ||
      !qa.packetIncludesSafeFields ||
      qa.packetLeaksTrustedFields ||
      qa.packetLeaksAttachmentData ||
      !qa.controlsNamed ||
      !qa.exportPreviewLive ||
      !qa.backupStatusFocusable ||
      !qa.offline?.ready ||
      !qa.verifySuccess ||
      !qa.verifyWrongPreservedVault ||
      !qa.offline.cacheNames?.includes("family-emergency-binder-v10") ||
      !qa.offlineShell?.hasShell ||
      Number.parseInt(qa.score, 10) < 20 ||
      qa.title !== "ReadyBinder" ||
      !qa.navMedicalFilter ||
      qa.medicalFilteredCount < 1 ||
      qa.safeFilteredCount < 1 ||
      qa.searchFilteredCount !== 1 ||
      qa.searchFilteredTitle !== "Edited emergency card scan"
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
