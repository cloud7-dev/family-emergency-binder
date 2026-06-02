# Contributing / 기여하기

Family Emergency Binder welcomes practical contributions that improve local-first preparedness, privacy, documentation, accessibility, and translation quality.

Family Emergency Binder는 local-first 비상 준비, 프라이버시, 문서, 접근성, 번역 품질을 개선하는 실용적인 기여를 환영합니다.

## Translation guidelines / 번역 가이드

- Keep legal, medical, inheritance, and recovery wording conservative.
- Do not imply the app grants legal authority or guarantees account recovery.
- Preserve product terms such as `vault`, `local-first`, and `redacted` when a local equivalent is unclear.
- Test long labels on mobile before opening a PR.

## Development / 개발

```sh
npm test
npm run serve
```

The app is dependency-free for the first MVP. Browser QA uses a local static server and headless Chrome:

```sh
npm run qa:browser
node scripts/qa-headless.js --mobile
```
