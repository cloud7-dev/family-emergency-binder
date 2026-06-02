# Family Emergency Binder / 가족 비상 바인더

Family Emergency Binder is a local-first encrypted vault for organizing the critical information your family may need in an emergency. / Family Emergency Binder는 위기 상황에서 가족에게 필요한 핵심 정보를 로컬 암호화 vault로 정리하는 오픈소스 도구입니다.

It is built for families who want a practical digital emergency binder without creating an account or uploading sensitive household data to a server. / 계정 생성이나 서버 업로드 없이, 가족이 실제로 사용할 수 있는 디지털 비상 바인더를 만들기 위한 프로젝트입니다.

## What It Does / 주요 기능

- Create or unlock a local encrypted vault / 로컬 암호화 vault 생성 또는 열기
- Import and download encrypted `.emergencyvault.json` files / 암호화된 `.emergencyvault.json` 파일 가져오기 및 다운로드
- Track readiness across documents, medical info, insurance, contacts, and recovery hints / 중요 문서, 의료, 보험, 비상 연락처, 복구 힌트 준비 상태 추적
- Add records with sensitivity levels: safe to print, trusted family, full vault only / 출력 가능, 신뢰 가족, 전체 vault 전용 민감도 지정
- Preview, print, and download a redacted emergency packet / 가려진 비상 패킷 미리보기, 인쇄, 다운로드
- Download a recovery worksheet without exposing the passphrase / passphrase를 노출하지 않는 복구 안내서 다운로드
- Switch UI language across eight locales / 8개 언어 UI 전환
- Install-ready PWA manifest and offline service worker / PWA manifest와 오프라인 service worker 포함

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
```

## Security Model / 보안 모델

This is an early MVP, not a security-audited vault. Do not enter real secrets yet. / 이 버전은 초기 MVP이며 보안 감사를 마친 vault가 아닙니다. 아직 실제 민감정보를 입력하지 마세요.

Current defaults:

- No server upload / 서버 업로드 없음
- Browser WebCrypto / 브라우저 WebCrypto 사용
- PBKDF2-SHA256 with 250,000 iterations / PBKDF2-SHA256 250,000회 반복
- AES-GCM-256 vault encryption / AES-GCM-256 vault 암호화
- Decrypted data kept in memory while unlocked / 열린 상태의 복호화 데이터는 메모리 중심 유지

Avoid storing raw passwords, seed phrases, private keys, or full national ID numbers. / 원문 비밀번호, seed phrase, private key, 전체 식별번호 저장은 피하세요.

See [SECURITY.md](./SECURITY.md), [docs/en/security.md](./docs/en/security.md), and [docs/ko/security.md](./docs/ko/security.md).

## Roadmap / 로드맵

- Argon2id support where practical / 가능한 환경에서 Argon2id 지원
- Attachment encryption / 첨부파일 암호화
- Schema migrations with backup-before-migrate / 백업 우선 schema migration
- Translation contribution files and glossary / 번역 기여 파일과 용어집
- Accessibility pass for all supported languages / 지원 언어 전체 접근성 점검
- External security review / 외부 보안 리뷰

## GitHub Topics / 추천 토픽

`emergency-binder`, `family-emergency-binder`, `digital-vault`, `encrypted-vault`, `local-first`, `privacy-first`, `offline-first`, `pwa`, `personal-data`, `preparedness`, `secure-notes`, `document-management`, `password-recovery`, `open-source`

## License / 라이선스

Apache-2.0
