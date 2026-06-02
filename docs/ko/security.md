# 보안 모델

이 프로젝트의 기본값은 local-first입니다. 계정 생성, 서버 업로드 없이 암호화된 vault 파일로 내보내는 방향을 잡습니다.

초기 MVP 주의사항:

- 현재 브라우저 구현은 WebCrypto 기반 PBKDF2와 AES-GCM을 사용합니다.
- 아직 보안 감사를 받은 구현이 아닙니다.
- 암호화, 저장, 내보내기 경로가 검토되기 전까지 실제 민감정보를 입력하지 않는 것이 좋습니다.
- 원문 비밀번호, private key, seed phrase, 전체 식별번호 저장은 기본적으로 권장하지 않습니다.

검토 예정 항목:

- KDF 파라미터와 Argon2id 지원.
- 복호화 데이터의 메모리 유지 시간.
- 내보내기 redaction.
- clipboard와 logging 동작.
- XSS hardening.
- 첨부파일 암호화.
