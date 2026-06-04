# ReadyBinder / Family Emergency Binder

ReadyBinder is a local-first emergency vault for organizing the critical information your family may need in an emergency without creating an account or uploading sensitive household data to a server. It keeps the repo/package slug `family-emergency-binder` for compatibility, while the product name is now ReadyBinder.

ReadyBinder는 위기 상황에서 가족에게 필요한 핵심 정보를 계정 생성이나 서버 업로드 없이 로컬 암호화 vault로 정리하는 오픈소스 도구입니다. 제품명은 ReadyBinder이고, Family Emergency Binder는 설명형 카테고리명으로 사용합니다.

## What It Does / 주요 기능

- Create or unlock a local encrypted vault / 로컬 암호화 vault 생성 또는 열기
- Import and download encrypted `.emergencyvault.json` files / 암호화된 `.emergencyvault.json` 파일 가져오기 및 다운로드
- Track readiness across documents, medical info, insurance, contacts, and recovery hints / 중요 문서, 의료, 보험, 비상 연락처, 복구 힌트 준비 상태 추적
- Add records with sensitivity levels: safe to print, trusted family, full vault only / 출력 가능, 신뢰 가족, 전체 vault 전용 민감도 지정
- Attach small encrypted files to records: PDF, PNG, JPG, WebP, and TXT / PDF, PNG, JPG, WebP, TXT 소형 파일을 기록에 암호화 첨부
- Preview TXT, image, and PDF attachments while the vault is unlocked / vault가 열린 상태에서 TXT, 이미지, PDF 첨부파일 미리보기
- Download or remove attachments after unlocking the vault / vault를 연 뒤 첨부파일 다운로드 또는 제거
- Delete records and automatically prune unused attachments / 기록 삭제와 미사용 첨부파일 자동 정리
- Backup-before-import assistant to avoid replacing a vault without a current copy / 현재 사본 없이 vault를 교체하지 않도록 돕는 백업 우선 가져오기
- Preview, print, and download a redacted emergency packet / 가려진 비상 패킷 미리보기, 인쇄, 다운로드
- Download a recovery worksheet without exposing the passphrase / passphrase를 노출하지 않는 복구 안내서 다운로드
- Search and filter records by category and sensitivity / 카테고리와 민감도 기준으로 기록 검색 및 필터
- Switch UI language across eight locales / 8개 언어 UI 전환
- Install-ready PWA manifest and offline service worker / PWA manifest와 오프라인 service worker 포함

## Attachments and preview / 첨부파일과 미리보기

Schema v3 stores attachments inside the same encrypted vault JSON as base64 data with SHA-256 checksums. / schema v3는 첨부파일을 SHA-256 checksum과 함께 같은 암호화 vault JSON 안에 base64 데이터로 저장합니다.

- Allowed types: PDF, PNG, JPG/JPEG, WebP, TXT / 허용 타입: PDF, PNG, JPG/JPEG, WebP, TXT
- Limit: 5MB per file, 20MB total attachment data per vault / 제한: 파일당 5MB, vault 전체 첨부 20MB
- Preview support: TXT escaped text, PNG/JPG/WebP thumbnails, PDF browser preview when supported / 미리보기 지원: TXT escaped text, PNG/JPG/WebP 썸네일, 브라우저가 지원하는 PDF 미리보기
- TXT previews are capped at 64KB / TXT 미리보기는 64KB까지만 표시됩니다
- Trusted and full-vault attachment previews require an explicit reveal click / 신뢰 가족 및 전체 vault 첨부파일은 명시적으로 열어야 미리보기가 표시됩니다
- Redacted emergency packets show attachment names and sizes only. Raw attachment data is never included in the printable packet. / 가려진 비상 패킷에는 첨부 파일명과 크기만 표시되며 원문 데이터는 포함되지 않습니다.
- Attachment downloads are available only while the vault is unlocked. / 첨부파일 다운로드는 vault가 열린 상태에서만 가능합니다.
- v1/v2 vault imports are migrated in memory and exported as v3 on the next save or download. / v1/v2 vault는 메모리에서 v3로 변환되고 다음 저장 또는 다운로드부터 v3로 내보냅니다.

## Schema v3 / Schema v3

Schema v3 keeps the v2 record and attachment fields, then adds:

- `records[].fields` as an empty object foundation for future structured category forms.
- `attachments[].checksumSha256` computed from decoded attachment bytes.

## Supported Languages / 지원 언어

`ko`, `en`, `ja`, `zh-Hans`, `de`, `fr`, `it`, `hi`

## Quick Start / 빠른 시작

Open the app directly:

```sh
open index.html
```

Or run a local static server:

```sh
npm run serve
```

Then open `http://127.0.0.1:8765/`.

## Development / 개발

The first MVP is dependency-free. / 첫 MVP는 의존성 없이 동작합니다.

```sh
npm test
```

Optional browser QA on macOS with Google Chrome:

```sh
npm run qa:browser
node scripts/qa-headless.js --mobile
npm run security:test
```

## Verified flows / 검증된 흐름

- Create or unlock a local vault, seed demo data, add TXT attachment, save encrypted locally, lock, and import again.
- Preview a TXT attachment and keep preview data out of redacted packets.
- Download an unlocked attachment and verify restored file contents.
- Remove an attachment from a record, delete a record, and prune unreferenced attachments.
- Show backup-before-import guidance before replacing an existing vault.
- Reject wrong-passphrase import without replacing the current vault.
- Search records, filter by category, filter by sensitivity, and use sidebar category navigation.
- Render offline app shell from service worker cache `family-emergency-binder-v4`.
- Keep redacted packet output free of attachment raw data and `dataBase64`.

## Known limitations / 알려진 제한

- This MVP has not had an external security audit.
- Attachments are stored as base64 inside one encrypted vault JSON, so this is not designed for large files.
- Drag-and-drop, bulk ZIP export, Argon2id, cloud sync, full structured category forms, and repo rename are out of v0.5 scope.
- PDF preview depends on browser support and can fall back to download/open behavior.
- Browser local storage and downloads are still the user's backup responsibility.

## Security test scope / 보안 테스트 범위

`npm run security:test` loads the app in headless Chrome and checks corrupt attachment base64 rejection, decoded size mismatch rejection, checksum mismatch rejection, negative and excessive metadata rejection, decoded 20MB total limit enforcement, unsafe filename normalization, encrypted invalid-vault import rejection, v2-to-v3 migration, and XSS payloads rendered as text in both records and TXT previews.

## Security Model / 보안 모델

This is an early MVP, not a security-audited vault. Do not enter real secrets yet. / 이 버전은 초기 MVP이며 보안 감사를 마친 vault가 아닙니다. 아직 실제 민감정보를 입력하지 마세요.

Current defaults:

- No server upload / 서버 업로드 없음
- Browser WebCrypto / 브라우저 WebCrypto 사용
- PBKDF2-SHA256 with 250,000 iterations / PBKDF2-SHA256 250,000회 반복
- AES-GCM-256 vault encryption / AES-GCM-256 vault 암호화
- Decrypted data kept in memory while unlocked / 열린 상태의 복호화 데이터는 메모리 중심 유지

Avoid storing raw passwords, seed phrases, private keys, or full national ID numbers. / 원문 비밀번호, seed phrase, private key, 전체 식별번호 저장은 피하세요.

Attachments can contain more sensitive data than text hints. Keep scans small, redacted where possible, and backed up separately before relying on this MVP. / 첨부파일은 텍스트 힌트보다 더 민감한 정보를 담을 수 있습니다. 이 MVP에 의존하기 전 스캔본은 작게 유지하고 가능하면 가린 뒤 별도 백업하세요.

See [SECURITY.md](./SECURITY.md), [docs/en/security.md](./docs/en/security.md), and [docs/ko/security.md](./docs/ko/security.md).

## Roadmap / 로드맵

- Argon2id support where practical / 가능한 환경에서 Argon2id 지원
- Full structured category forms / 카테고리별 구조화 입력
- Optional backup-before-migrate export copy / 선택형 migration 전 백업 사본
- Translation contribution files and glossary / 번역 기여 파일과 용어집
- Accessibility pass for all supported languages / 지원 언어 전체 접근성 점검
- External security review / 외부 보안 리뷰

## GitHub Topics / 추천 토픽

`readybinder`, `emergency-binder`, `emergency-vault`, `family-emergency-binder`, `digital-vault`, `encrypted-vault`, `encrypted-attachments`, `attachment-preview`, `offline-vault`, `local-first`, `privacy-first`, `offline-first`, `pwa`, `personal-data`, `preparedness`, `secure-notes`, `document-management`, `password-recovery`, `open-source`

## License / 라이선스

Apache-2.0
