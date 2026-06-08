const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.webmanifest"), "utf8"));

const requiredLocales = ["ko", "en", "ja", "zh-Hans", "de", "fr", "it", "hi"];
const requiredStrings = [
  "importVault",
  "downloadPacket",
  "downloadRecovery",
  "printPacket",
  "attachmentLimits",
  "migratedVault",
  "PBKDF2-SHA256-250000",
  "AES-GCM-256",
  "vaultSchemaVersion = 3",
  "migrateVaultSchema",
  "fields: normalizeRecordFields",
  "checksumSha256",
  "sha256Hex",
  "renderAttachmentPreview",
  "structuredFieldDefinitions",
  "categoryRequiredFields",
  "readStructuredFields",
  "markRecordReviewed",
  "renderRecordEditPanel",
  "saveRecordEdits",
  "editingRecordId",
  "getReadinessSummary",
  "lastReviewedAt",
  "activePreviewAttachmentId",
  "revealedPreviewIds",
  "previewObjectUrls",
  "maxPreviewTextBytes = 64 * 1024",
  "downloadAttachment",
  "removeAttachmentFromRecord",
  "deleteRecord",
  "downloadCurrentBackup",
  "verifyBackupFile",
  "renderBackupCheck",
  "lastVerifiedAt",
  "isValidEncryptedEnvelope",
  "serializeEncryptedEnvelope",
  "markRecoveryTest",
  "ReadyBinder",
  "recordSearch",
  "recordCategoryFilter",
  "recordSensitivityFilter",
  "renderDashboard",
  "setupNavigation",
  "validateAttachment",
  "decodeBase64Strict",
  "normalizeAttachmentFilename",
  "maxAttachmentBytes = 5 * 1024 * 1024",
  "maxTotalAttachmentBytes = 20 * 1024 * 1024",
  "maxAttachmentNameLength = 160",
];
const requiredFiles = ["index.html", "styles.css", "app.js", "sw.js", "manifest.webmanifest", "README.md", "LICENSE"];

const failures = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`Missing ${file}`);
}

for (const locale of requiredLocales) {
  if (!app.includes(`"${locale}"`) && !app.includes(`translations.${locale}`)) {
    failures.push(`Missing locale ${locale}`);
  }
}

for (const value of requiredStrings) {
  if (!app.includes(value)) failures.push(`Missing app string ${value}`);
}

for (const id of [
  "importVaultInput",
  "verifyBackupInput",
  "backupStatus",
  "downloadPacketButton",
  "downloadRecoveryButton",
  "markRecoveryTestButton",
  "downloadCurrentBackupButton",
  "printPacketButton",
  "recordAttachment",
  "recordDetails",
  "mark-reviewed-button",
  "edit-record-button",
  "recordSearch",
  "recordCategoryFilter",
  "recordSensitivityFilter",
  "importStatus",
  "delete-record-button",
]) {
  if (!html.includes(id)) failures.push(`Missing HTML control ${id}`);
}

for (const attachmentType of ["application/pdf", "image/png", "image/jpeg", "image/webp", "text/plain"]) {
  if (!app.includes(attachmentType) || !html.includes(attachmentType)) {
    failures.push(`Missing attachment type ${attachmentType}`);
  }
}

if (!manifest.name || manifest.display !== "standalone") {
  failures.push("Manifest is incomplete");
}

if (manifest.name !== "ReadyBinder") failures.push("Manifest name must be ReadyBinder");
if (pkg.version !== "0.9.0") failures.push("Package version must be 0.9.0");
if (!pkg.scripts["security:test"]) failures.push("Missing security:test script");
if (!sw.includes("family-emergency-binder-v9")) failures.push("Service worker cache must be v9");

const unsafeInnerHtmlWrites = [...app.matchAll(/innerHTML\s*=\s*([^;\n]+)/g)]
  .map((match) => match[0])
  .filter((line) => !line.includes('innerHTML = ""'));
if (unsafeInnerHtmlWrites.length) failures.push(`Unsafe innerHTML writes: ${unsafeInnerHtmlWrites.join(", ")}`);

if (!html.includes('id="exportPreview" class="export-preview" aria-live="polite"')) {
  failures.push("Export preview must be aria-live");
}
if (!html.includes('id="backupStatus" class="backup-status" tabindex="-1"')) {
  failures.push("Backup status must be focusable");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Static checks passed");
