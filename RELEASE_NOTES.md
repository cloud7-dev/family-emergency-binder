# ReadyBinder v1.0.0 Release Notes

ReadyBinder v1.0.0 is the first stable local-first release for organizing a family emergency binder in one encrypted browser vault without server upload.

## Highlights

- Structured records for documents, medical notes, insurance references, emergency contacts, and account recovery hints.
- Inline record editing, review status, stale/expired readiness signals, and searchable structured fields.
- Small encrypted attachments with TXT/image/PDF preview, checksum validation, download, remove, and record-delete pruning.
- Backup-first import assistant and replacement-free encrypted backup verification.
- Redacted emergency packet and recovery worksheet downloads.
- PWA manifest and offline app shell cache.

## From v0.6 to v1.0

- v0.7 added inline structured record editing.
- v0.8 added backup verification and backup status summaries.
- v0.9 added accessibility, envelope validation, and security hardening checks.
- v1.0 finalizes documentation, contribution guidance, release positioning, and public launch readiness.

## Security Status

ReadyBinder v1.0.0 is not externally security audited. It uses browser WebCrypto with PBKDF2-SHA256 and AES-GCM, keeps data local by default, and stores small attachments inside the encrypted vault file. Do not store raw passwords, seed phrases, private keys, or catastrophic secrets.

## Demo Scenario

1. Create or unlock a vault.
2. Add safe-to-print medical/contact records with structured fields.
3. Add a trusted document or insurance record with a small TXT/PDF/image attachment.
4. Preview the attachment while unlocked.
5. Mark records reviewed and verify readiness.
6. Save/download the encrypted vault.
7. Verify the downloaded backup without replacing the current vault.
8. Export the redacted emergency packet and recovery worksheet.
