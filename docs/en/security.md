# Security Model

This project is designed around a local-first default: no account, no server upload, and encrypted vault export.

Early MVP caveats:

- The current browser implementation uses PBKDF2 and AES-GCM through WebCrypto.
- It has not received a security audit.
- Users should not enter real secrets until the cryptography, storage, and export paths are reviewed.
- Raw passwords, private keys, seed phrases, and full ID numbers should be discouraged by default.

Planned review areas:

- KDF parameters and Argon2id support.
- Decrypted data lifetime in memory.
- Export redaction.
- Clipboard and logging behavior.
- XSS hardening.
- Attachment encryption.
