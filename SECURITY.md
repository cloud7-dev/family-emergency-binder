# Security Policy / 보안 정책

This project handles sensitive household metadata. Please report security issues privately when possible and avoid posting real personal data in public issues.

이 프로젝트는 민감한 가정 메타데이터를 다룹니다. 보안 문제는 가능하면 비공개로 제보하고, 공개 issue에 실제 개인정보를 올리지 마세요.

## Current status / 현재 상태

- Early MVP.
- Not security audited.
- Uses browser WebCrypto with PBKDF2-SHA256 and AES-GCM.
- No server upload by default.
- Decrypted data is intended to stay in memory while the vault is unlocked.
- Small attachments are encrypted in the same vault file, but they increase vault size and sensitive-data impact.
- Attachment download and deletion require an unlocked vault.
- Import replacement is guarded by a backup-first prompt when an existing vault is present.

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
