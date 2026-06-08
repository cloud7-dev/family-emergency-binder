# Security Policy / 보안 정책

This project handles sensitive household metadata. Please report security issues privately when possible and avoid posting real personal data in public issues.

이 프로젝트는 민감한 가정 메타데이터를 다룹니다. 보안 문제는 가능하면 비공개로 제보하고, 공개 issue에 실제 개인정보를 올리지 마세요.

## Current status / 현재 상태

- v0.6 MVP.
- Not externally security audited.
- Uses browser WebCrypto with PBKDF2-SHA256 and AES-GCM.
- No server upload by default.
- Decrypted data is intended to stay in memory while the vault is unlocked.
- Small attachments are encrypted in the same vault file, but they increase vault size and sensitive-data impact.
- Attachment download and deletion require an unlocked vault.
- Attachment preview requires an unlocked vault.
- Trusted and full-vault attachment previews require an explicit reveal click.
- Import replacement is guarded by a backup-first prompt when an existing vault is present.
- Import validates attachment base64 decoding, decoded size matching, per-file size, decoded total size, filename length, non-empty IDs/names, and supported metadata before replacing the current vault.
- Schema v3 stores `attachments[].checksumSha256`; migration computes it from decoded bytes and rejects mismatches when a checksum is present.
- Attachment download filenames are normalized before being passed to the browser download API.
- Structured fields are rendered as text, contribute to readiness, and can contain sensitive household metadata.
- Redacted emergency packets must not include raw attachment bytes, preview text, Blob URLs, checksum values, or `dataBase64`.
- Redacted emergency packets include structured fields only for safe-to-print records.

## Preview threat model / 미리보기 위협 모델

- TXT preview must render with `textContent`, never HTML.
- Image and PDF preview must use Blob URLs generated from verified decoded bytes.
- Blob URLs must be revoked when previews rerender or the vault locks.
- SVG preview is intentionally unsupported.
- PDF preview depends on browser support and may fall back to download/open guidance.

## Structured field threat model / 구조화 필드 위협 모델

- Structured fields must render with text APIs, never HTML insertion.
- Policy numbers, account identifiers, contact details, and recovery locations should be stored as hints unless the user intentionally trusts the full vault audience.
- Trusted and full-vault-only records must not leak structured fields into the safe-to-print packet.
- Review status and expiry dates are local helper signals, not legal, medical, or insurance advice.

## v0.6 test scope / v0.6 테스트 범위

`npm run security:test` currently checks:

- Corrupt attachment base64 is rejected.
- Attachment decoded size mismatch is rejected.
- Attachment checksum mismatch is rejected.
- Negative size and excessive filename metadata are rejected.
- Decoded attachment total above 20MB is rejected.
- Unsafe download filenames are normalized.
- Encrypted import with invalid attachment metadata does not replace the current vault.
- v2 vaults migrate to v3 with `records[].fields` and `attachments[].checksumSha256`.
- Structured fields are saved, searched, reviewed, and rendered as text.
- Safe-to-print packet output excludes trusted/secret structured fields.
- XSS-like record, structured field, and TXT preview payloads are rendered as text, not HTML.

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
- Structured field redaction.
- Clipboard behavior.
- Service worker cache scope.
- Attachment restore and deletion hardening.
- Backup-before-migrate flow.
