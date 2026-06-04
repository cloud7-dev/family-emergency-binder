# Security Policy / 보안 정책

This project handles sensitive household metadata. Please report security issues privately when possible and avoid posting real personal data in public issues.

이 프로젝트는 민감한 가정 메타데이터를 다룹니다. 보안 문제는 가능하면 비공개로 제보하고, 공개 issue에 실제 개인정보를 올리지 마세요.

## Current status / 현재 상태

- v0.4 MVP.
- Not externally security audited.
- Uses browser WebCrypto with PBKDF2-SHA256 and AES-GCM.
- No server upload by default.
- Decrypted data is intended to stay in memory while the vault is unlocked.
- Small attachments are encrypted in the same vault file, but they increase vault size and sensitive-data impact.
- Attachment download and deletion require an unlocked vault.
- Import replacement is guarded by a backup-first prompt when an existing vault is present.
- Import validates attachment base64 decoding, decoded size matching, per-file size, decoded total size, filename length, non-empty IDs/names, and supported metadata before replacing the current vault.
- Attachment download filenames are normalized before being passed to the browser download API.
- Redacted emergency packets must not include raw attachment bytes or `dataBase64`.

## v0.4 test scope / v0.4 테스트 범위

`npm run security:test` currently checks:

- Corrupt attachment base64 is rejected.
- Attachment decoded size mismatch is rejected.
- Negative size and excessive filename metadata are rejected.
- Decoded attachment total above 20MB is rejected.
- Unsafe download filenames are normalized.
- Encrypted import with invalid attachment metadata does not replace the current vault.
- XSS-like record payloads are rendered as text, not HTML.

This test scope is not a replacement for a professional cryptography or browser security audit.

## Do not store yet / 아직 저장하지 말 것

- Raw passwords.
- Private keys.
- Seed phrases.
- Full national ID numbers.
- Any secret whose loss would be catastrophic.
- Unredacted scans that expose more data than a helper would need in an emergency.

## Review checklist / 검토 체크리스트

- KDF parameters and passphrase guidance.
- XSS hardening.
- Decrypted data lifetime.
- Export redaction.
- Clipboard behavior.
- Service worker cache scope.
- Attachment restore and deletion hardening.
- Backup-before-migrate flow.
