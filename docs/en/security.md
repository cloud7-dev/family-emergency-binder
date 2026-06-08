# Security Model

This project is designed around a local-first default: no account, no server upload, and encrypted vault export.

Current release-candidate caveats:

- The current browser implementation uses PBKDF2 and AES-GCM through WebCrypto.
- It has not received a security audit.
- Users should not enter real secrets until the cryptography, storage, and export paths are reviewed.
- Raw passwords, private keys, seed phrases, and full ID numbers should be discouraged by default.
- Attachments are encrypted inside the vault, but scans and files often contain more sensitive data than text hints. Prefer small, redacted files and keep independent backups.
- Attachment download and deletion require an unlocked vault, and import replacement prompts for a current backup first.
- Backup verification decrypts a selected vault file without replacing the current unlocked vault.
- Structured fields and inline edit panels render user-controlled text as text, not HTML.
- Redacted packets include structured fields only for safe-to-print records.

Planned review areas:

- KDF parameters and Argon2id support.
- Decrypted data lifetime in memory.
- Export redaction.
- Clipboard and logging behavior.
- XSS hardening.
- Attachment restore and deletion hardening.
- Backup-before-import and backup verification flow.
- Accessibility and localization coverage.
