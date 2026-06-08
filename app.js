const languages = [
  ["ko", "한국어"],
  ["en", "English"],
  ["ja", "日本語"],
  ["zh-Hans", "简体中文"],
  ["de", "Deutsch"],
  ["fr", "Français"],
  ["it", "Italiano"],
  ["hi", "हिन्दी"],
];

const translations = {
  en: {
    appName: "ReadyBinder",
    tagline: "Local-first encrypted vault",
    navVault: "Vault",
    navDocuments: "Documents",
    navMedical: "Medical",
    navInsurance: "Insurance",
    navContacts: "Contacts",
    navRecovery: "Recovery Hints",
    navExports: "Exports",
    navSettings: "Settings",
    localOnly: "Local only. No upload.",
    screenTitle: "ReadyBinder emergency vault",
    screenSubtitle: "Organize critical household references without sending them to a server.",
    language: "Language",
    lock: "Lock",
    unlock: "Unlock",
    securityStatus: "Security status",
    securityCopy: "Vault data is encrypted in this browser with PBKDF2 and AES-GCM before export or local save.",
    vaultSetup: "Vault setup",
    vaultSetupCopy: "Create or unlock a local encrypted vault.",
    locked: "Locked",
    unlocked: "Unlocked",
    familyName: "Family or household name",
    passphrase: "Master passphrase",
    createUnlock: "Create or unlock vault",
    loadDemo: "Load demo data",
    readiness: "Readiness",
    vaultStatus: "Vault status",
    vaultStatusLocked: "Create or unlock a vault to start.",
    vaultStatusUnlocked: "Local vault is open in this browser.",
    readinessCopyShort: "Complete the core household categories.",
    readinessCounts: "Review status",
    readinessCountsCopy: "Missing, needs review, ready to print.",
    missingCount: "Missing",
    needsReviewCount: "Needs review",
    readyToPrintCount: "Ready to print",
    nextActions: "Next actions",
    recentRecords: "Recent records",
    nextActionLocked: "Open a local vault before adding records.",
    nextActionAddRecords: "Add the first document, medical, insurance, contact, or recovery record.",
    nextActionChecklist: "Finish the missing preparedness checklist categories.",
    nextActionBackup: "Save locally, download the vault, and print a redacted packet.",
    privacyControls: "Privacy controls",
    privacyCopy: "Default to hints and redacted exports.",
    controlNoServer: "No server upload",
    controlEncrypted: "Encrypted vault export",
    controlRedaction: "Redacted emergency packet",
    controlI18n: "Eight-language UI plan",
    checklistTitle: "Preparedness checklist",
    checklistCopy: "Track what is complete, missing, stale, or needs review.",
    recordsTitle: "Vault records",
    recordsCopy: "Store references, locations, contacts, and recovery hints.",
    searchRecords: "Search records",
    categoryFilter: "Category filter",
    sensitivityFilter: "Sensitivity filter",
    searchPlaceholder: "Search title or hint",
    allCategories: "All categories",
    allSensitivity: "All sensitivity",
    showingRecords: "Showing records",
    noMatchingRecords: "No records match the current filters.",
    category: "Category",
    title: "Title",
    detail: "Location or hint",
    sensitivity: "Sensitivity",
    safeToPrint: "Safe to print",
    trustedFamily: "Trusted family",
    fullVaultOnly: "Full vault only",
    addRecord: "Add record",
    exportTitle: "Export",
    exportCopy: "Download an encrypted vault or preview a redacted emergency packet.",
    saveLocal: "Save encrypted locally",
    downloadVault: "Download vault",
    importVault: "Import vault",
    importReady: "Imported vault unlocked.",
    importNeedsPassphrase: "Enter the passphrase before importing a vault.",
    downloadPacket: "Download packet",
    downloadRecovery: "Recovery sheet",
    printPacket: "Print packet",
    attachments: "Attachments",
    attachmentLimits: "Attachments are encrypted inside the vault. Limit: 5MB per file, 20MB total.",
    attachmentSummary: "Attachment",
    attachmentHidden: "attachment data redacted",
    previewAttachment: "Preview",
    revealPreview: "Reveal preview",
    hidePreview: "Hide preview",
    previewUnavailable: "Preview unavailable for this attachment.",
    previewRequiresReveal: "Trusted and full-vault attachments require an explicit reveal.",
    previewTruncated: "Preview truncated to 64KB.",
    checksumMismatch: "Attachment checksum mismatch.",
    downloadAttachment: "Download",
    removeAttachment: "Remove",
    deleteRecord: "Delete record",
    confirmDeleteRecord: "Delete this record and unused attachments?",
    confirmRemoveAttachment: "Remove this attachment from the record?",
    attachmentDownloaded: "Attachment downloaded.",
    attachmentRemoved: "Attachment removed.",
    recordDeleted: "Record deleted.",
    editRecord: "Edit",
    editRecordTitle: "Edit record",
    saveChanges: "Save changes",
    cancel: "Cancel",
    changesSaved: "Record changes saved.",
    markReviewed: "Mark reviewed",
    reviewedMarked: "Record review date updated.",
    lastReviewed: "Last reviewed",
    notReviewed: "Not reviewed",
    expired: "Expired",
    needsAttention: "Needs attention",
    structuredDetails: "Structured details",
    documentType: "Document type",
    location: "Location",
    owner: "Owner",
    expiryDate: "Expiry date",
    provider: "Provider",
    conditionOrAllergy: "Condition or allergy",
    medication: "Medication",
    emergencyNote: "Emergency note",
    policyType: "Policy type",
    policyNumberHint: "Policy number hint",
    claimPhone: "Claim phone",
    name: "Name",
    relationship: "Relationship",
    contactHint: "Contact hint",
    priority: "Priority",
    service: "Service",
    recoveryLocation: "Recovery location",
    trustedPerson: "Trusted person",
    note: "Note",
    brokenAttachment: "Attachment data is missing or corrupted.",
    fileTooLarge: "File is too large. Limit is 5MB per file.",
    vaultTooLarge: "Vault attachments are too large. Limit is 20MB total.",
    unsupportedFile: "Unsupported file type. Use PDF, PNG, JPG, WebP, or TXT.",
    invalidVault: "This does not look like a ReadyBinder vault.",
    migratedVault: "Imported older vault schema and upgraded it in memory.",
    downloadCurrentBackup: "Download current backup",
    backupBeforeImport: "Download the current vault backup before replacing it.",
    backupDownloadedImportAgain: "Current vault backup downloaded. Select the import file again to replace the vault.",
    importPreview: "Import preview",
    markRecoveryTest: "Mark recovery test",
    recoveryTestMarked: "Recovery test date updated.",
    packetDownloaded: "Redacted emergency packet downloaded.",
    recoveryDownloaded: "Recovery worksheet downloaded.",
    emptyRecords: "Unlock a vault and add the first emergency record.",
    noPrintableRecords: "No safe-to-print records yet.",
    saved: "Encrypted vault saved in browser storage.",
    downloaded: "Encrypted vault downloaded.",
    demoLoaded: "Demo data loaded. Save or download to encrypt it.",
    wrongPassphrase: "Could not unlock. Check the passphrase.",
    createdVault: "Vault is ready.",
    lockedMessage: "Vault locked. Decrypted data cleared from memory.",
    checklistDocuments: "Important documents",
    checklistMedical: "Hospital and medical info",
    checklistInsurance: "Insurance references",
    checklistContacts: "Emergency contacts",
    checklistRecovery: "Account recovery hints",
    complete: "Complete",
    missing: "Missing",
    stale: "Stale",
    review: "Needs review",
    documents: "Documents",
    medical: "Medical",
    insurance: "Insurance",
    contacts: "Contacts",
    recovery: "Recovery hints",
    emergencyPacket: "Redacted emergency packet",
  },
  ko: {
    appName: "ReadyBinder",
    tagline: "로컬 우선 암호화 vault",
    navVault: "Vault",
    navDocuments: "중요 문서",
    navMedical: "의료",
    navInsurance: "보험",
    navContacts: "비상 연락처",
    navRecovery: "복구 힌트",
    navExports: "내보내기",
    navSettings: "설정",
    localOnly: "로컬 전용. 업로드 없음.",
    screenTitle: "ReadyBinder 비상 vault",
    screenSubtitle: "중요한 가정 정보를 서버로 보내지 않고 정리합니다.",
    language: "언어",
    lock: "잠금",
    unlock: "열기",
    securityStatus: "보안 상태",
    securityCopy: "vault 데이터는 내보내기 또는 로컬 저장 전에 이 브라우저에서 PBKDF2와 AES-GCM으로 암호화됩니다.",
    vaultSetup: "Vault 설정",
    vaultSetupCopy: "로컬 암호화 vault를 생성하거나 엽니다.",
    locked: "잠김",
    unlocked: "열림",
    familyName: "가족 또는 가구 이름",
    passphrase: "마스터 passphrase",
    createUnlock: "Vault 생성 또는 열기",
    loadDemo: "데모 데이터 불러오기",
    readiness: "준비도",
    vaultStatus: "Vault 상태",
    vaultStatusLocked: "시작하려면 vault를 생성하거나 여세요.",
    vaultStatusUnlocked: "로컬 vault가 이 브라우저에서 열려 있습니다.",
    readinessCopyShort: "핵심 가정 카테고리를 완료하세요.",
    readinessCounts: "검토 상태",
    readinessCountsCopy: "누락, 검토 필요, 출력 가능.",
    missingCount: "누락",
    needsReviewCount: "검토 필요",
    readyToPrintCount: "출력 가능",
    nextActions: "다음 작업",
    recentRecords: "최근 기록",
    nextActionLocked: "기록을 추가하기 전에 로컬 vault를 여세요.",
    nextActionAddRecords: "문서, 의료, 보험, 연락처, 복구 기록 중 첫 항목을 추가하세요.",
    nextActionChecklist: "누락된 준비 체크리스트 카테고리를 완료하세요.",
    nextActionBackup: "로컬 저장, vault 다운로드, 가려진 패킷 출력을 진행하세요.",
    privacyControls: "프라이버시 제어",
    privacyCopy: "기본값은 힌트와 가려진 출력본입니다.",
    controlNoServer: "서버 업로드 없음",
    controlEncrypted: "암호화 vault 내보내기",
    controlRedaction: "가려진 비상 패킷",
    controlI18n: "8개 언어 UI 계획",
    checklistTitle: "준비 체크리스트",
    checklistCopy: "완료, 누락, 오래됨, 검토 필요 상태를 추적합니다.",
    recordsTitle: "Vault 기록",
    recordsCopy: "문서 위치, 연락처, 복구 힌트를 저장합니다.",
    searchRecords: "기록 검색",
    categoryFilter: "카테고리 필터",
    sensitivityFilter: "민감도 필터",
    searchPlaceholder: "제목 또는 힌트 검색",
    allCategories: "전체 카테고리",
    allSensitivity: "전체 민감도",
    showingRecords: "표시 중인 기록",
    noMatchingRecords: "현재 필터와 일치하는 기록이 없습니다.",
    category: "카테고리",
    title: "제목",
    detail: "위치 또는 힌트",
    sensitivity: "민감도",
    safeToPrint: "출력 가능",
    trustedFamily: "신뢰 가족",
    fullVaultOnly: "전체 vault 전용",
    addRecord: "기록 추가",
    exportTitle: "내보내기",
    exportCopy: "암호화 vault를 다운로드하거나 가려진 비상 패킷을 미리 봅니다.",
    saveLocal: "암호화 로컬 저장",
    downloadVault: "Vault 다운로드",
    importVault: "Vault 가져오기",
    importReady: "가져온 vault를 열었습니다.",
    importNeedsPassphrase: "vault를 가져오기 전에 passphrase를 입력하세요.",
    downloadPacket: "패킷 다운로드",
    downloadRecovery: "복구 안내서",
    printPacket: "패킷 인쇄",
    attachments: "첨부파일",
    attachmentLimits: "첨부파일은 vault 안에 암호화됩니다. 제한: 파일당 5MB, 전체 20MB.",
    attachmentSummary: "첨부",
    attachmentHidden: "첨부 원문 가림",
    previewAttachment: "미리보기",
    revealPreview: "미리보기 열기",
    hidePreview: "미리보기 닫기",
    previewUnavailable: "이 첨부파일은 미리보기를 사용할 수 없습니다.",
    previewRequiresReveal: "신뢰 가족/전체 vault 첨부파일은 명시적으로 열어야 합니다.",
    previewTruncated: "미리보기는 64KB까지만 표시됩니다.",
    checksumMismatch: "첨부파일 checksum이 일치하지 않습니다.",
    downloadAttachment: "다운로드",
    removeAttachment: "제거",
    deleteRecord: "기록 삭제",
    confirmDeleteRecord: "이 기록과 사용하지 않는 첨부파일을 삭제할까요?",
    confirmRemoveAttachment: "이 첨부파일을 기록에서 제거할까요?",
    attachmentDownloaded: "첨부파일을 다운로드했습니다.",
    attachmentRemoved: "첨부파일을 제거했습니다.",
    recordDeleted: "기록을 삭제했습니다.",
    editRecord: "수정",
    editRecordTitle: "기록 수정",
    saveChanges: "변경 저장",
    cancel: "취소",
    changesSaved: "기록 변경사항을 저장했습니다.",
    markReviewed: "검토 완료 표시",
    reviewedMarked: "기록 검토 날짜를 업데이트했습니다.",
    lastReviewed: "마지막 검토",
    notReviewed: "검토 기록 없음",
    expired: "만료됨",
    needsAttention: "확인 필요",
    structuredDetails: "구조화 상세 정보",
    documentType: "문서 종류",
    location: "위치",
    owner: "담당자",
    expiryDate: "만료일",
    provider: "기관/제공자",
    conditionOrAllergy: "질환 또는 알레르기",
    medication: "복용약",
    emergencyNote: "비상 메모",
    policyType: "보험 종류",
    policyNumberHint: "증권번호 힌트",
    claimPhone: "청구 연락처",
    name: "이름",
    relationship: "관계",
    contactHint: "연락처 힌트",
    priority: "우선순위",
    service: "서비스",
    recoveryLocation: "복구 위치",
    trustedPerson: "신뢰할 사람",
    note: "메모",
    brokenAttachment: "첨부파일 데이터가 없거나 손상되었습니다.",
    fileTooLarge: "파일이 너무 큽니다. 파일당 5MB까지 가능합니다.",
    vaultTooLarge: "vault 첨부파일이 너무 큽니다. 전체 20MB까지 가능합니다.",
    unsupportedFile: "지원하지 않는 파일 형식입니다. PDF, PNG, JPG, WebP, TXT를 사용하세요.",
    invalidVault: "ReadyBinder vault 형식이 아닙니다.",
    migratedVault: "이전 vault schema를 가져와 메모리에서 업그레이드했습니다.",
    downloadCurrentBackup: "현재 백업 다운로드",
    backupBeforeImport: "vault를 교체하기 전에 현재 vault 백업을 먼저 다운로드하세요.",
    backupDownloadedImportAgain: "현재 vault 백업을 다운로드했습니다. 가져올 파일을 다시 선택하면 vault가 교체됩니다.",
    importPreview: "가져오기 미리보기",
    markRecoveryTest: "복구 테스트 기록",
    recoveryTestMarked: "복구 테스트 날짜를 업데이트했습니다.",
    packetDownloaded: "가려진 비상 패킷을 다운로드했습니다.",
    recoveryDownloaded: "복구 안내서를 다운로드했습니다.",
    emptyRecords: "vault를 열고 첫 비상 기록을 추가하세요.",
    noPrintableRecords: "출력 가능한 기록이 아직 없습니다.",
    saved: "암호화 vault를 브라우저 저장소에 저장했습니다.",
    downloaded: "암호화 vault를 다운로드했습니다.",
    demoLoaded: "데모 데이터를 불러왔습니다. 저장 또는 다운로드하면 암호화됩니다.",
    wrongPassphrase: "열 수 없습니다. passphrase를 확인하세요.",
    createdVault: "vault가 준비되었습니다.",
    lockedMessage: "vault를 잠갔습니다. 복호화 데이터를 메모리에서 지웠습니다.",
    checklistDocuments: "중요 문서",
    checklistMedical: "병원과 의료 정보",
    checklistInsurance: "보험 참고 정보",
    checklistContacts: "비상 연락처",
    checklistRecovery: "계정 복구 힌트",
    complete: "완료",
    missing: "누락",
    stale: "오래됨",
    review: "검토 필요",
    documents: "문서",
    medical: "의료",
    insurance: "보험",
    contacts: "연락처",
    recovery: "복구 힌트",
    emergencyPacket: "가려진 비상 패킷",
  },
};

translations.ja = {
  ...translations.en,
  tagline: "ローカル優先の暗号化 vault",
  navDocuments: "重要書類",
  navMedical: "医療",
  navInsurance: "保険",
  navContacts: "緊急連絡先",
  navRecovery: "復旧ヒント",
  navExports: "エクスポート",
  navSettings: "設定",
  localOnly: "ローカルのみ。アップロードなし。",
  screenTitle: "ReadyBinder emergency vault",
  screenSubtitle: "重要な家庭情報をサーバーへ送らず整理します。",
  language: "言語",
  lock: "ロック",
  securityStatus: "セキュリティ状態",
  securityCopy: "vault データは保存またはエクスポート前に、このブラウザー内で PBKDF2 と AES-GCM により暗号化されます。",
  vaultSetup: "Vault 設定",
  vaultSetupCopy: "ローカル暗号化 vault を作成または解除します。",
  locked: "ロック中",
  unlocked: "解除済み",
  familyName: "家族または世帯名",
  passphrase: "マスターパスフレーズ",
  createUnlock: "Vault を作成または解除",
  loadDemo: "デモデータを読み込む",
  readiness: "準備度",
  privacyControls: "プライバシー制御",
  privacyCopy: "既定ではヒントと編集済み出力を使います。",
  controlNoServer: "サーバーアップロードなし",
  controlEncrypted: "暗号化 vault エクスポート",
  controlRedaction: "編集済み緊急パケット",
  controlI18n: "8言語 UI 計画",
  checklistTitle: "準備チェックリスト",
  checklistCopy: "完了、未入力、古い、確認が必要な状態を追跡します。",
  recordsTitle: "Vault レコード",
  recordsCopy: "参照、場所、連絡先、復旧ヒントを保存します。",
  category: "カテゴリ",
  title: "タイトル",
  detail: "場所またはヒント",
  sensitivity: "機密度",
  safeToPrint: "印刷可",
  trustedFamily: "信頼できる家族",
  fullVaultOnly: "完全 vault のみ",
  addRecord: "レコード追加",
  exportTitle: "エクスポート",
  exportCopy: "暗号化 vault をダウンロードするか、編集済み緊急パケットを確認します。",
  saveLocal: "暗号化してローカル保存",
  downloadVault: "Vault をダウンロード",
  emptyRecords: "vault を解除して最初の緊急レコードを追加してください。",
  noPrintableRecords: "印刷可能なレコードはまだありません。",
  checklistDocuments: "重要書類",
  checklistMedical: "病院と医療情報",
  checklistInsurance: "保険情報",
  checklistContacts: "緊急連絡先",
  checklistRecovery: "アカウント復旧ヒント",
  complete: "完了",
  missing: "未入力",
  stale: "古い",
  review: "確認必要",
  documents: "書類",
  medical: "医療",
  insurance: "保険",
  contacts: "連絡先",
  recovery: "復旧ヒント",
  emergencyPacket: "編集済み緊急パケット",
};

translations["zh-Hans"] = {
  ...translations.en,
  tagline: "本地优先的加密 vault",
  navDocuments: "重要文件",
  navMedical: "医疗",
  navInsurance: "保险",
  navContacts: "紧急联系人",
  navRecovery: "恢复提示",
  navExports: "导出",
  navSettings: "设置",
  localOnly: "仅本地保存。不会上传。",
  screenTitle: "ReadyBinder emergency vault",
  screenSubtitle: "整理关键家庭信息，不发送到服务器。",
  language: "语言",
  lock: "锁定",
  securityStatus: "安全状态",
  securityCopy: "vault 数据在本浏览器中使用 PBKDF2 和 AES-GCM 加密后才会保存或导出。",
  vaultSetup: "Vault 设置",
  vaultSetupCopy: "创建或解锁本地加密 vault。",
  locked: "已锁定",
  unlocked: "已解锁",
  familyName: "家庭或住户名称",
  passphrase: "主密码短语",
  createUnlock: "创建或解锁 vault",
  loadDemo: "加载演示数据",
  readiness: "准备度",
  privacyControls: "隐私控制",
  privacyCopy: "默认使用提示和脱敏导出。",
  controlNoServer: "不上传服务器",
  controlEncrypted: "加密 vault 导出",
  controlRedaction: "脱敏应急包",
  controlI18n: "8 种语言 UI 计划",
  checklistTitle: "准备清单",
  checklistCopy: "跟踪已完成、缺失、过期或需要复核的状态。",
  recordsTitle: "Vault 记录",
  recordsCopy: "保存位置、联系人和恢复提示。",
  category: "类别",
  title: "标题",
  detail: "位置或提示",
  sensitivity: "敏感级别",
  safeToPrint: "可打印",
  trustedFamily: "可信家人",
  fullVaultOnly: "仅完整 vault",
  addRecord: "添加记录",
  exportTitle: "导出",
  exportCopy: "下载加密 vault 或预览脱敏应急包。",
  saveLocal: "加密保存到本地",
  downloadVault: "下载 vault",
  emptyRecords: "解锁 vault 并添加第一条应急记录。",
  noPrintableRecords: "还没有可打印记录。",
  checklistDocuments: "重要文件",
  checklistMedical: "医院和医疗信息",
  checklistInsurance: "保险参考信息",
  checklistContacts: "紧急联系人",
  checklistRecovery: "账户恢复提示",
  complete: "完成",
  missing: "缺失",
  stale: "过期",
  review: "需复核",
  documents: "文件",
  medical: "医疗",
  insurance: "保险",
  contacts: "联系人",
  recovery: "恢复提示",
  emergencyPacket: "脱敏应急包",
};

translations.de = {
  ...translations.en,
  tagline: "Lokal zuerst, verschlusselter Vault",
  navDocuments: "Dokumente",
  navMedical: "Medizin",
  navInsurance: "Versicherung",
  navContacts: "Notfallkontakte",
  navRecovery: "Wiederherstellungshinweise",
  navExports: "Exporte",
  navSettings: "Einstellungen",
  localOnly: "Nur lokal. Kein Upload.",
  screenTitle: "ReadyBinder emergency vault",
  screenSubtitle: "Wichtige Haushaltsinformationen organisieren, ohne sie an einen Server zu senden.",
  language: "Sprache",
  lock: "Sperren",
  securityStatus: "Sicherheitsstatus",
  securityCopy: "Vault-Daten werden in diesem Browser mit PBKDF2 und AES-GCM verschlusselt, bevor sie gespeichert oder exportiert werden.",
  vaultSetup: "Vault einrichten",
  vaultSetupCopy: "Lokalen verschlusselten Vault erstellen oder entsperren.",
  locked: "Gesperrt",
  unlocked: "Entsperrt",
  familyName: "Familien- oder Haushaltsname",
  passphrase: "Master-Passphrase",
  createUnlock: "Vault erstellen oder entsperren",
  loadDemo: "Demodaten laden",
  readiness: "Bereitschaft",
  privacyControls: "Datenschutzkontrollen",
  privacyCopy: "Standard ist Hinweise und redigierte Exporte.",
  controlNoServer: "Kein Server-Upload",
  controlEncrypted: "Verschlusselter Vault-Export",
  controlRedaction: "Redigiertes Notfallpaket",
  controlI18n: "UI-Plan fur 8 Sprachen",
  checklistTitle: "Vorbereitungscheckliste",
  checklistCopy: "Verfolgt erledigt, fehlt, veraltet oder zu prufen.",
  recordsTitle: "Vault-Eintrage",
  recordsCopy: "Referenzen, Orte, Kontakte und Wiederherstellungshinweise speichern.",
  category: "Kategorie",
  title: "Titel",
  detail: "Ort oder Hinweis",
  sensitivity: "Sensibilitat",
  safeToPrint: "Druckbar",
  trustedFamily: "Vertraute Familie",
  fullVaultOnly: "Nur vollstandiger Vault",
  addRecord: "Eintrag hinzufugen",
  exportTitle: "Export",
  exportCopy: "Verschlusselten Vault herunterladen oder redigiertes Notfallpaket ansehen.",
  saveLocal: "Verschlusselt lokal speichern",
  downloadVault: "Vault herunterladen",
  emptyRecords: "Vault entsperren und den ersten Notfalleintrag hinzufugen.",
  noPrintableRecords: "Noch keine druckbaren Eintrage.",
  checklistDocuments: "Wichtige Dokumente",
  checklistMedical: "Krankenhaus- und Medizininfos",
  checklistInsurance: "Versicherungsreferenzen",
  checklistContacts: "Notfallkontakte",
  checklistRecovery: "Konto-Wiederherstellungshinweise",
  complete: "Erledigt",
  missing: "Fehlt",
  stale: "Veraltet",
  review: "Prufen",
  documents: "Dokumente",
  medical: "Medizin",
  insurance: "Versicherung",
  contacts: "Kontakte",
  recovery: "Wiederherstellung",
  emergencyPacket: "Redigiertes Notfallpaket",
};

translations.fr = {
  ...translations.en,
  tagline: "Vault chiffre, local d'abord",
  navDocuments: "Documents",
  navMedical: "Medical",
  navInsurance: "Assurance",
  navContacts: "Contacts d'urgence",
  navRecovery: "Indices de recuperation",
  navExports: "Exports",
  navSettings: "Parametres",
  localOnly: "Local uniquement. Aucun envoi.",
  screenTitle: "ReadyBinder emergency vault",
  screenSubtitle: "Organisez les informations critiques du foyer sans les envoyer a un serveur.",
  language: "Langue",
  lock: "Verrouiller",
  securityStatus: "Etat de securite",
  securityCopy: "Les donnees du vault sont chiffrees dans ce navigateur avec PBKDF2 et AES-GCM avant sauvegarde ou export.",
  vaultSetup: "Configuration du vault",
  vaultSetupCopy: "Creer ou deverrouiller un vault local chiffre.",
  locked: "Verrouille",
  unlocked: "Deverrouille",
  familyName: "Nom de famille ou du foyer",
  passphrase: "Phrase secrete principale",
  createUnlock: "Creer ou deverrouiller",
  loadDemo: "Charger la demo",
  readiness: "Preparation",
  privacyControls: "Controles de confidentialite",
  privacyCopy: "Par defaut: indices et exports expurges.",
  controlNoServer: "Aucun envoi serveur",
  controlEncrypted: "Export de vault chiffre",
  controlRedaction: "Paquet d'urgence expurge",
  controlI18n: "Plan UI en 8 langues",
  checklistTitle: "Liste de preparation",
  checklistCopy: "Suit les etats termine, manquant, obsolete ou a revoir.",
  recordsTitle: "Enregistrements du vault",
  recordsCopy: "Stockez references, lieux, contacts et indices de recuperation.",
  category: "Categorie",
  title: "Titre",
  detail: "Lieu ou indice",
  sensitivity: "Sensibilite",
  safeToPrint: "Imprimable",
  trustedFamily: "Famille de confiance",
  fullVaultOnly: "Vault complet seulement",
  addRecord: "Ajouter",
  exportTitle: "Export",
  exportCopy: "Telecharger un vault chiffre ou previsualiser un paquet d'urgence expurge.",
  saveLocal: "Sauvegarder chiffre",
  downloadVault: "Telecharger le vault",
  emptyRecords: "Deverrouillez un vault et ajoutez le premier enregistrement.",
  noPrintableRecords: "Aucun enregistrement imprimable pour l'instant.",
  checklistDocuments: "Documents importants",
  checklistMedical: "Hopital et informations medicales",
  checklistInsurance: "References d'assurance",
  checklistContacts: "Contacts d'urgence",
  checklistRecovery: "Indices de recuperation de comptes",
  complete: "Termine",
  missing: "Manquant",
  stale: "Obsolete",
  review: "A revoir",
  documents: "Documents",
  medical: "Medical",
  insurance: "Assurance",
  contacts: "Contacts",
  recovery: "Recuperation",
  emergencyPacket: "Paquet d'urgence expurge",
};

translations.it = {
  ...translations.en,
  tagline: "Vault cifrato local-first",
  navDocuments: "Documenti",
  navMedical: "Medico",
  navInsurance: "Assicurazioni",
  navContacts: "Contatti emergenza",
  navRecovery: "Suggerimenti recupero",
  navExports: "Esportazioni",
  navSettings: "Impostazioni",
  localOnly: "Solo locale. Nessun upload.",
  screenTitle: "ReadyBinder emergency vault",
  screenSubtitle: "Organizza informazioni domestiche critiche senza inviarle a un server.",
  language: "Lingua",
  lock: "Blocca",
  securityStatus: "Stato sicurezza",
  securityCopy: "I dati del vault sono cifrati in questo browser con PBKDF2 e AES-GCM prima del salvataggio o export.",
  vaultSetup: "Configurazione vault",
  vaultSetupCopy: "Crea o sblocca un vault locale cifrato.",
  locked: "Bloccato",
  unlocked: "Sbloccato",
  familyName: "Nome famiglia o casa",
  passphrase: "Passphrase principale",
  createUnlock: "Crea o sblocca vault",
  loadDemo: "Carica demo",
  readiness: "Preparazione",
  privacyControls: "Controlli privacy",
  privacyCopy: "Predefinito: suggerimenti ed export oscurati.",
  controlNoServer: "Nessun upload server",
  controlEncrypted: "Export vault cifrato",
  controlRedaction: "Pacchetto emergenza oscurato",
  controlI18n: "Piano UI 8 lingue",
  checklistTitle: "Checklist preparazione",
  checklistCopy: "Traccia completato, mancante, datato o da rivedere.",
  recordsTitle: "Record del vault",
  recordsCopy: "Salva riferimenti, posizioni, contatti e suggerimenti di recupero.",
  category: "Categoria",
  title: "Titolo",
  detail: "Posizione o suggerimento",
  sensitivity: "Sensibilita",
  safeToPrint: "Stampabile",
  trustedFamily: "Famiglia fidata",
  fullVaultOnly: "Solo vault completo",
  addRecord: "Aggiungi record",
  exportTitle: "Esporta",
  exportCopy: "Scarica un vault cifrato o anteprima di un pacchetto emergenza oscurato.",
  saveLocal: "Salva cifrato locale",
  downloadVault: "Scarica vault",
  emptyRecords: "Sblocca un vault e aggiungi il primo record.",
  noPrintableRecords: "Nessun record stampabile ancora.",
  checklistDocuments: "Documenti importanti",
  checklistMedical: "Ospedale e info mediche",
  checklistInsurance: "Riferimenti assicurativi",
  checklistContacts: "Contatti emergenza",
  checklistRecovery: "Suggerimenti recupero account",
  complete: "Completo",
  missing: "Mancante",
  stale: "Datato",
  review: "Da rivedere",
  documents: "Documenti",
  medical: "Medico",
  insurance: "Assicurazioni",
  contacts: "Contatti",
  recovery: "Recupero",
  emergencyPacket: "Pacchetto emergenza oscurato",
};

translations.hi = {
  ...translations.en,
  tagline: "Local-first encrypted vault",
  navDocuments: "महत्वपूर्ण दस्तावेज",
  navMedical: "चिकित्सा",
  navInsurance: "बीमा",
  navContacts: "आपात संपर्क",
  navRecovery: "रिकवरी संकेत",
  navExports: "निर्यात",
  navSettings: "सेटिंग्स",
  localOnly: "केवल स्थानीय। कोई अपलोड नहीं।",
  screenTitle: "ReadyBinder emergency vault",
  screenSubtitle: "महत्वपूर्ण घरेलू जानकारी को सर्वर पर भेजे बिना व्यवस्थित करें।",
  language: "भाषा",
  lock: "लॉक",
  securityStatus: "सुरक्षा स्थिति",
  securityCopy: "vault डेटा को सेव या निर्यात करने से पहले इस ब्राउज़र में PBKDF2 और AES-GCM से एन्क्रिप्ट किया जाता है।",
  vaultSetup: "Vault सेटअप",
  vaultSetupCopy: "स्थानीय एन्क्रिप्टेड vault बनाएं या खोलें।",
  locked: "लॉक",
  unlocked: "खुला",
  familyName: "परिवार या घर का नाम",
  passphrase: "मुख्य passphrase",
  createUnlock: "Vault बनाएं या खोलें",
  loadDemo: "डेमो डेटा लोड करें",
  readiness: "तैयारी",
  privacyControls: "गोपनीयता नियंत्रण",
  privacyCopy: "डिफ़ॉल्ट रूप से संकेत और redacted export का उपयोग करें।",
  controlNoServer: "सर्वर अपलोड नहीं",
  controlEncrypted: "एन्क्रिप्टेड vault export",
  controlRedaction: "Redacted emergency packet",
  controlI18n: "8 भाषाओं का UI प्लान",
  checklistTitle: "तैयारी checklist",
  checklistCopy: "पूरा, गायब, पुराना, या समीक्षा-योग्य स्थिति ट्रैक करें।",
  recordsTitle: "Vault records",
  recordsCopy: "संदर्भ, स्थान, संपर्क और रिकवरी संकेत सहेजें।",
  category: "श्रेणी",
  title: "शीर्षक",
  detail: "स्थान या संकेत",
  sensitivity: "संवेदनशीलता",
  safeToPrint: "प्रिंट के लिए सुरक्षित",
  trustedFamily: "विश्वसनीय परिवार",
  fullVaultOnly: "केवल पूरा vault",
  addRecord: "Record जोड़ें",
  exportTitle: "निर्यात",
  exportCopy: "एन्क्रिप्टेड vault डाउनलोड करें या redacted emergency packet देखें।",
  saveLocal: "स्थानीय रूप से एन्क्रिप्टेड सेव",
  downloadVault: "Vault डाउनलोड",
  emptyRecords: "vault खोलें और पहला आपातकालीन record जोड़ें।",
  noPrintableRecords: "अभी कोई printable record नहीं है।",
  checklistDocuments: "महत्वपूर्ण दस्तावेज",
  checklistMedical: "अस्पताल और चिकित्सा जानकारी",
  checklistInsurance: "बीमा संदर्भ",
  checklistContacts: "आपात संपर्क",
  checklistRecovery: "खाता रिकवरी संकेत",
  complete: "पूरा",
  missing: "गायब",
  stale: "पुराना",
  review: "समीक्षा चाहिए",
  documents: "दस्तावेज",
  medical: "चिकित्सा",
  insurance: "बीमा",
  contacts: "संपर्क",
  recovery: "रिकवरी",
  emergencyPacket: "Redacted emergency packet",
};

const categoryKeys = ["documents", "medical", "insurance", "contacts", "recovery"];
const structuredFieldDefinitions = {
  documents: [
    ["documentType", "documentType"],
    ["location", "location"],
    ["owner", "owner"],
    ["expiryDate", "expiryDate", "date"],
  ],
  medical: [
    ["provider", "provider"],
    ["conditionOrAllergy", "conditionOrAllergy"],
    ["medication", "medication"],
    ["emergencyNote", "emergencyNote"],
  ],
  insurance: [
    ["provider", "provider"],
    ["policyType", "policyType"],
    ["policyNumberHint", "policyNumberHint"],
    ["claimPhone", "claimPhone"],
    ["expiryDate", "expiryDate", "date"],
  ],
  contacts: [
    ["name", "name"],
    ["relationship", "relationship"],
    ["contactHint", "contactHint"],
    ["priority", "priority"],
  ],
  recovery: [
    ["service", "service"],
    ["recoveryLocation", "recoveryLocation"],
    ["trustedPerson", "trustedPerson"],
    ["note", "note"],
  ],
};
const categoryRequiredFields = {
  documents: [["title"], ["detail", "location"]],
  medical: [["provider", "emergencyNote"]],
  insurance: [["provider"], ["policyType"]],
  contacts: [["name"], ["relationship"], ["contactHint"]],
  recovery: [["service"], ["recoveryLocation"]],
};
const checklistKeys = [
  "checklistDocuments",
  "checklistMedical",
  "checklistInsurance",
  "checklistContacts",
  "checklistRecovery",
];
const statuses = ["missing", "review", "stale", "complete"];
const storageKey = "family-emergency-binder.encryptedVault";
const languageKey = "family-emergency-binder.language";
const vaultSchemaVersion = 3;
const maxAttachmentBytes = 5 * 1024 * 1024;
const maxTotalAttachmentBytes = 20 * 1024 * 1024;
const maxAttachmentNameLength = 160;
const maxPreviewTextBytes = 64 * 1024;
const reviewStaleDays = 90;
const allowedAttachmentTypes = new Set(["application/pdf", "image/png", "image/jpeg", "image/webp", "text/plain"]);
const allowedAttachmentExtensions = new Set(["pdf", "png", "jpg", "jpeg", "webp", "txt"]);

let currentLanguage = localStorage.getItem(languageKey) || "ko";
let vault = null;
let activePassphrase = "";
let isUnlocked = false;
let importBackupReady = false;
let pendingImportSummary = "";
let activeSection = "vault";
let recordSearch = "";
let recordCategoryFilter = "all";
let recordSensitivityFilter = "all";
let activePreviewAttachmentId = "";
let revealedPreviewIds = new Set();
let previewObjectUrls = new Map();
let editingRecordId = "";

const els = {
  languageSelect: document.querySelector("#languageSelect"),
  vaultForm: document.querySelector("#vaultForm"),
  familyName: document.querySelector("#familyName"),
  passphrase: document.querySelector("#passphrase"),
  lockButton: document.querySelector("#lockButton"),
  seedDemoButton: document.querySelector("#seedDemoButton"),
  vaultStateBadge: document.querySelector("#vaultStateBadge"),
  checklist: document.querySelector("#checklist"),
  readinessScore: document.querySelector("#readinessScore"),
  progressFill: document.querySelector("#progressFill"),
  recordForm: document.querySelector("#recordForm"),
  recordCategory: document.querySelector("#recordCategory"),
  recordDetails: document.querySelector("#recordDetails"),
  recordTitle: document.querySelector("#recordTitle"),
  recordDetail: document.querySelector("#recordDetail"),
  recordAttachment: document.querySelector("#recordAttachment"),
  recordSensitivity: document.querySelector("#recordSensitivity"),
  recordList: document.querySelector("#recordList"),
  exportPreview: document.querySelector("#exportPreview"),
  saveVaultButton: document.querySelector("#saveVaultButton"),
  downloadVaultButton: document.querySelector("#downloadVaultButton"),
  importVaultInput: document.querySelector("#importVaultInput"),
  downloadPacketButton: document.querySelector("#downloadPacketButton"),
  downloadRecoveryButton: document.querySelector("#downloadRecoveryButton"),
  markRecoveryTestButton: document.querySelector("#markRecoveryTestButton"),
  downloadCurrentBackupButton: document.querySelector("#downloadCurrentBackupButton"),
  printPacketButton: document.querySelector("#printPacketButton"),
  navItems: document.querySelectorAll(".nav-item"),
  dashboardVaultStatus: document.querySelector("#dashboardVaultStatus"),
  dashboardVaultCopy: document.querySelector("#dashboardVaultCopy"),
  dashboardReadiness: document.querySelector("#dashboardReadiness"),
  dashboardReadinessCopy: document.querySelector("#dashboardReadinessCopy"),
  dashboardReviewCounts: document.querySelector("#dashboardReviewCounts"),
  dashboardReviewCopy: document.querySelector("#dashboardReviewCopy"),
  dashboardNextAction: document.querySelector("#dashboardNextAction"),
  dashboardNextActionCopy: document.querySelector("#dashboardNextActionCopy"),
  dashboardRecentRecords: document.querySelector("#dashboardRecentRecords"),
  recordSearch: document.querySelector("#recordSearch"),
  recordCategoryFilter: document.querySelector("#recordCategoryFilter"),
  recordSensitivityFilter: document.querySelector("#recordSensitivityFilter"),
  importStatus: document.querySelector("#importStatus"),
};

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  renderVaultState();
  renderCategoryOptions();
  renderRecordDetailsForm();
  renderRecordFilterOptions();
  renderChecklist();
  renderRecords();
  renderExportPreview();
  renderDashboard();
}

function setupLanguageSelect() {
  els.languageSelect.innerHTML = "";
  languages.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    els.languageSelect.append(option);
  });
  els.languageSelect.value = currentLanguage;
  els.languageSelect.addEventListener("change", () => {
    currentLanguage = els.languageSelect.value;
    localStorage.setItem(languageKey, currentLanguage);
    applyTranslations();
  });
}

function renderCategoryOptions() {
  els.recordCategory.innerHTML = "";
  categoryKeys.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = t(key);
    els.recordCategory.append(option);
  });
}

function renderRecordDetailsForm() {
  if (!els.recordDetails) return;
  const category = els.recordCategory.value || "documents";
  els.recordDetails.innerHTML = "";
  const title = document.createElement("strong");
  title.textContent = t("structuredDetails");
  els.recordDetails.append(title);
  (structuredFieldDefinitions[category] || []).forEach(([key, labelKey, type = "text"]) => {
    const label = document.createElement("label");
    label.className = "field";
    const span = document.createElement("span");
    span.textContent = t(labelKey);
    const input = document.createElement("input");
    input.type = type;
    input.dataset.fieldKey = key;
    input.autocomplete = "off";
    label.append(span, input);
    els.recordDetails.append(label);
  });
}

function renderRecordFilterOptions() {
  if (!els.recordCategoryFilter || !els.recordSensitivityFilter) return;
  els.recordSearch.placeholder = t("searchPlaceholder");
  els.recordSearch.value = recordSearch;
  els.recordCategoryFilter.innerHTML = "";
  const allCategory = document.createElement("option");
  allCategory.value = "all";
  allCategory.textContent = t("allCategories");
  els.recordCategoryFilter.append(allCategory);
  categoryKeys.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = t(key);
    els.recordCategoryFilter.append(option);
  });
  els.recordCategoryFilter.value = recordCategoryFilter;

  els.recordSensitivityFilter.innerHTML = "";
  [
    ["all", t("allSensitivity")],
    ["safe", t("safeToPrint")],
    ["trusted", t("trustedFamily")],
    ["secret", t("fullVaultOnly")],
  ].forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    els.recordSensitivityFilter.append(option);
  });
  els.recordSensitivityFilter.value = recordSensitivityFilter;
}

function defaultVault(familyName = "") {
  return {
    version: vaultSchemaVersion,
    familyName,
    checklist: Object.fromEntries(checklistKeys.map((key) => [key, "missing"])),
    records: [],
    attachments: [],
    backup: {
      lastSavedAt: null,
      lastDownloadedAt: null,
      lastRecoveryTestAt: null,
    },
    updatedAt: new Date().toISOString(),
  };
}

function demoVault() {
  const demoAttachmentId = crypto.randomUUID();
  return {
    version: vaultSchemaVersion,
    familyName: els.familyName.value || "Kim family",
    checklist: {
      checklistDocuments: "complete",
      checklistMedical: "review",
      checklistInsurance: "complete",
      checklistContacts: "complete",
      checklistRecovery: "stale",
    },
    records: [
      {
        id: crypto.randomUUID(),
        category: "documents",
        title: "Passport and birth certificate originals",
        detail: "Fireproof box, shelf 2, blue folder",
        sensitivity: "trusted",
        fields: {
          documentType: "Identity documents",
          location: "Fireproof box, shelf 2",
          owner: "Parents",
          expiryDate: "2028-05-10",
          lastReviewedAt: new Date().toISOString(),
        },
      },
      {
        id: crypto.randomUUID(),
        category: "medical",
        title: "Primary hospital and allergies",
        detail: "Seoul Central Hospital. Penicillin allergy. Medication list in kitchen drawer.",
        sensitivity: "safe",
        attachmentIds: [demoAttachmentId],
        fields: {
          provider: "Seoul Central Hospital",
          conditionOrAllergy: "Penicillin allergy",
          medication: "Medication list in kitchen drawer",
          emergencyNote: "Share allergy note before treatment",
          lastReviewedAt: new Date().toISOString(),
        },
      },
      {
        id: crypto.randomUUID(),
        category: "insurance",
        title: "Health insurance card",
        detail: "Wallet scan attached later. Policy number should stay redacted in print packet.",
        sensitivity: "trusted",
        fields: {
          provider: "Family health insurer",
          policyType: "Health",
          policyNumberHint: "Card scan only; no full number here",
          claimPhone: "Claims desk number in wallet copy",
          expiryDate: "2024-01-01",
        },
      },
      {
        id: crypto.randomUUID(),
        category: "recovery",
        title: "Password manager recovery hint",
        detail: "Hardware key is in the small black case. Do not store seed phrases here.",
        sensitivity: "secret",
        attachmentIds: [],
        fields: {
          service: "Password manager",
          recoveryLocation: "Small black case",
          trustedPerson: "Spouse",
          note: "Do not store seed phrases here",
        },
      },
    ],
    attachments: [
      {
        id: demoAttachmentId,
        name: "demo-medical-note.txt",
        type: "text/plain",
        size: 55,
        createdAt: new Date().toISOString(),
        redaction: "safe",
        dataBase64: textToBase64("Demo allergy note. Replace this with a real scan later."),
      },
    ],
    backup: {
      lastSavedAt: null,
      lastDownloadedAt: null,
      lastRecoveryTestAt: new Date().toISOString(),
    },
    updatedAt: new Date().toISOString(),
  };
}

async function migrateVaultSchema(input) {
  if (!input || typeof input !== "object" || !Array.isArray(input.records)) {
    throw new Error(t("invalidVault"));
  }
  const attachments = Array.isArray(input.attachments)
    ? await Promise.all(input.attachments.map(normalizeAttachmentForVault))
    : [];
  const decodedTotal = attachments.reduce((total, attachment) => total + attachment.size, 0);
  if (decodedTotal > maxTotalAttachmentBytes) {
    throw new Error(t("vaultTooLarge"));
  }
  const migrated = {
    version: vaultSchemaVersion,
    familyName: input.familyName || "",
    checklist: { ...Object.fromEntries(checklistKeys.map((key) => [key, "missing"])), ...(input.checklist || {}) },
    records: input.records.map((record) => ({
      id: record.id || crypto.randomUUID(),
      category: categoryKeys.includes(record.category) ? record.category : "documents",
      title: record.title || "Untitled",
      detail: record.detail || "",
      sensitivity: ["safe", "trusted", "secret"].includes(record.sensitivity) ? record.sensitivity : "trusted",
      attachmentIds: Array.isArray(record.attachmentIds) ? record.attachmentIds : [],
      fields: normalizeRecordFields(record.fields),
    })),
    attachments,
    backup: {
      lastSavedAt: input.backup?.lastSavedAt || null,
      lastDownloadedAt: input.backup?.lastDownloadedAt || null,
      lastRecoveryTestAt: input.backup?.lastRecoveryTestAt || null,
    },
    updatedAt: input.updatedAt || new Date().toISOString(),
  };
  const attachmentIds = new Set(migrated.attachments.map((attachment) => attachment.id));
  migrated.records = migrated.records.map((record) => ({
    ...record,
    attachmentIds: record.attachmentIds.filter((id) => attachmentIds.has(id)),
  }));
  return migrated;
}

function isValidAttachment(attachment) {
  try {
    validateAttachment(attachment);
    return true;
  } catch {
    return false;
  }
}

async function normalizeAttachmentForVault(attachment) {
  const decoded = validateAttachment(attachment);
  const checksumSha256 = await sha256Hex(decoded.bytes);
  if (attachment.checksumSha256 && attachment.checksumSha256 !== checksumSha256) {
    throw new Error(t("checksumMismatch"));
  }
  return {
    id: attachment.id,
    name: attachment.name,
    type: attachment.type,
    size: attachment.size,
    createdAt: attachment.createdAt,
    redaction: attachment.redaction,
    dataBase64: attachment.dataBase64,
    checksumSha256,
  };
}

function validateAttachment(attachment) {
  if (!attachment || typeof attachment !== "object") throw new Error(t("invalidVault"));
  if (!isNonEmptyBoundedString(attachment.id, 120)) throw new Error(t("invalidVault"));
  if (!isNonEmptyBoundedString(attachment.name, maxAttachmentNameLength)) throw new Error(t("invalidVault"));
  if (!isNonEmptyBoundedString(attachment.type, 120)) throw new Error(t("invalidVault"));
  if (!Number.isInteger(attachment.size) || attachment.size < 0 || attachment.size > maxAttachmentBytes) {
    throw new Error(t("invalidVault"));
  }
  if (!isNonEmptyBoundedString(attachment.createdAt, 80)) throw new Error(t("invalidVault"));
  if (!["safe", "trusted", "secret"].includes(attachment.redaction)) throw new Error(t("invalidVault"));
  if (typeof attachment.dataBase64 !== "string") throw new Error(t("invalidVault"));
  if (attachment.checksumSha256 && !/^[a-f0-9]{64}$/.test(attachment.checksumSha256)) {
    throw new Error(t("invalidVault"));
  }
  if (!isAllowedAttachmentMetadata(attachment)) throw new Error(t("invalidVault"));
  const decoded = decodeBase64Strict(attachment.dataBase64);
  if (decoded.byteLength !== attachment.size) throw new Error(t("invalidVault"));
  return { bytes: decoded };
}

function isNonEmptyBoundedString(value, maxLength) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function isAllowedAttachmentMetadata(attachment) {
  const extension = attachment.name.split(".").pop()?.toLowerCase() || "";
  return allowedAttachmentTypes.has(attachment.type) || allowedAttachmentExtensions.has(extension);
}

function decodeBase64Strict(value) {
  if (value.length % 4 === 1 || !/^[A-Za-z0-9+/]*={0,2}$/.test(value)) {
    throw new Error(t("invalidVault"));
  }
  try {
    return fromBase64(value);
  } catch {
    throw new Error(t("invalidVault"));
  }
}

function normalizeRecordFields(fields) {
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) return {};
  return Object.fromEntries(
    Object.entries(fields)
      .filter(([key, value]) => typeof key === "string" && typeof value === "string")
      .map(([key, value]) => [key.slice(0, 80), value.slice(0, 500)]),
  );
}

function renderChecklist() {
  const sourceVault = vault || defaultVault();
  els.checklist.innerHTML = "";
  checklistKeys.forEach((key) => {
    const category = key.replace("checklist", "").toLowerCase();
    const card = document.createElement("article");
    card.className = "checklist-item";
    const title = document.createElement("strong");
    title.textContent = t(key);
    const select = document.createElement("select");
    statuses.forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = t(status);
      select.append(option);
    });
    select.value = vault ? getCategoryReadinessStatus(category) : sourceVault.checklist[key] || "missing";
    select.disabled = true;
    select.addEventListener("change", () => {
      if (!vault) return;
      vault.checklist[key] = select.value;
      vault.updatedAt = new Date().toISOString();
      updateReadiness();
    });
    card.append(title, select);
    els.checklist.append(card);
  });
  updateReadiness();
}

function updateReadiness() {
  const score = calculateReadinessScore();
  els.readinessScore.textContent = `${score}%`;
  els.progressFill.style.width = `${score}%`;
  renderDashboard();
}

function calculateReadinessScore() {
  const summary = getReadinessSummary();
  return categoryKeys.length ? Math.round((summary.completeCategories / categoryKeys.length) * 100) : 0;
}

function renderDashboard() {
  if (!els.dashboardVaultStatus) return;
  const score = calculateReadinessScore();
  const summary = getReadinessSummary();
  els.dashboardVaultStatus.textContent = isUnlocked ? t("unlocked") : t("locked");
  els.dashboardVaultCopy.textContent = isUnlocked ? t("vaultStatusUnlocked") : t("vaultStatusLocked");
  els.dashboardReadiness.textContent = `${score}%`;
  els.dashboardReadinessCopy.textContent = t("readinessCopyShort");
  if (els.dashboardReviewCounts) {
    els.dashboardReviewCounts.textContent = `${summary.missingCategories} / ${summary.needsReviewRecords} / ${summary.readyToPrintRecords}`;
  }
  if (els.dashboardReviewCopy) {
    els.dashboardReviewCopy.textContent = `${t("missingCount")}, ${t("needsReviewCount")}, ${t("readyToPrintCount")}.`;
  }

  if (!isUnlocked) {
    els.dashboardNextAction.textContent = t("navVault");
    els.dashboardNextActionCopy.textContent = t("nextActionLocked");
  } else if (!vault.records.length) {
    els.dashboardNextAction.textContent = t("addRecord");
    els.dashboardNextActionCopy.textContent = t("nextActionAddRecords");
  } else if (summary.missingCategories || summary.needsReviewRecords) {
    els.dashboardNextAction.textContent = t("checklistTitle");
    els.dashboardNextActionCopy.textContent = t("nextActionChecklist");
  } else {
    els.dashboardNextAction.textContent = t("exportTitle");
    els.dashboardNextActionCopy.textContent = t("nextActionBackup");
  }

  els.dashboardRecentRecords.innerHTML = "";
  const recent = (vault?.records || []).slice(-3).reverse();
  if (!recent.length) {
    const empty = document.createElement("p");
    empty.textContent = t("emptyRecords");
    els.dashboardRecentRecords.append(empty);
    return;
  }
  recent.forEach((record) => {
    const item = document.createElement("span");
    item.textContent = `${t(record.category)}: ${record.title}`;
    els.dashboardRecentRecords.append(item);
  });
}

function getReadinessSummary() {
  const records = vault?.records || [];
  const categoryStatuses = Object.fromEntries(categoryKeys.map((category) => [category, getCategoryReadinessStatus(category)]));
  return {
    completeCategories: Object.values(categoryStatuses).filter((status) => status === "complete").length,
    missingCategories: Object.values(categoryStatuses).filter((status) => status === "missing").length,
    needsReviewRecords: records.filter((record) => getRecordReviewStatus(record) !== "complete").length,
    readyToPrintRecords: records.filter((record) => record.sensitivity === "safe").length,
    categoryStatuses,
  };
}

function getCategoryReadinessStatus(category) {
  const records = (vault?.records || []).filter((record) => record.category === category);
  if (!records.length) return "missing";
  const completeRecords = records.filter(isRecordRequiredFieldsComplete);
  if (!completeRecords.length) return "review";
  if (completeRecords.some(isRecordExpired)) return "stale";
  if (completeRecords.some((record) => getRecordReviewStatus(record) !== "complete")) return "review";
  return "complete";
}

function isRecordRequiredFieldsComplete(record) {
  const requirements = categoryRequiredFields[record.category] || [["title"], ["detail"]];
  return requirements.every((alternatives) => alternatives.some((field) => Boolean(getRecordFieldValue(record, field))));
}

function getRecordFieldValue(record, field) {
  if (field === "title") return String(record.title || "").trim();
  if (field === "detail") return String(record.detail || "").trim();
  return String(record.fields?.[field] || "").trim();
}

function getRecordReviewStatus(record) {
  if (isRecordExpired(record)) return "stale";
  const reviewedAt = Date.parse(record.fields?.lastReviewedAt || "");
  if (!reviewedAt) return "review";
  const ageMs = Date.now() - reviewedAt;
  return ageMs > reviewStaleDays * 24 * 60 * 60 * 1000 ? "review" : "complete";
}

function isRecordExpired(record) {
  const expiry = record.fields?.expiryDate;
  if (!expiry || !/^\d{4}-\d{2}-\d{2}$/.test(expiry)) return false;
  const expiryDate = new Date(`${expiry}T23:59:59`);
  return Number.isFinite(expiryDate.getTime()) && expiryDate.getTime() < Date.now();
}

function renderRecords() {
  revokePreviewObjectUrls();
  els.recordList.innerHTML = "";
  if (!vault?.records?.length) {
    const empty = document.createElement("p");
    empty.textContent = t("emptyRecords");
    els.recordList.append(empty);
    renderDashboard();
    return;
  }
  const template = document.querySelector("#recordTemplate");
  const search = recordSearch.trim().toLowerCase();
  const filteredRecords = vault.records.filter((record) => {
    const fieldValues = Object.values(record.fields || {}).join(" ");
    const matchesSearch =
      !search ||
      [record.title, record.detail, t(record.category), fieldValues]
        .join(" ")
        .toLowerCase()
        .includes(search);
    const matchesCategory = recordCategoryFilter === "all" || record.category === recordCategoryFilter;
    const matchesSensitivity = recordSensitivityFilter === "all" || record.sensitivity === recordSensitivityFilter;
    return matchesSearch && matchesCategory && matchesSensitivity;
  });
  if (!filteredRecords.length) {
    const empty = document.createElement("p");
    empty.textContent = t("noMatchingRecords");
    els.recordList.append(empty);
    renderDashboard();
    return;
  }
  filteredRecords.forEach((record) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector(".record-category").textContent = t(record.category);
    card.querySelector("h3").textContent = record.title;
    card.querySelector("p").textContent = record.detail;
    renderFieldSummary(card.querySelector(".field-summary"), record);
    const reviewButton = card.querySelector(".mark-reviewed-button");
    reviewButton.textContent = t("markReviewed");
    reviewButton.addEventListener("click", () => markRecordReviewed(record.id));
    const editButton = card.querySelector(".edit-record-button");
    editButton.textContent = t("editRecord");
    editButton.addEventListener("click", () => {
      editingRecordId = editingRecordId === record.id ? "" : record.id;
      renderRecords();
    });
    const reviewStatus = getRecordReviewStatus(record);
    const reviewBadge = card.querySelector(".review-status");
    reviewBadge.className = `review-status ${reviewStatus}`;
    reviewBadge.textContent = getRecordReviewLabel(record);
    const deleteButton = card.querySelector(".delete-record-button");
    deleteButton.textContent = t("deleteRecord");
    deleteButton.addEventListener("click", () => deleteRecord(record.id));
    card.querySelector(".record-sensitivity").textContent =
      record.sensitivity === "safe"
        ? t("safeToPrint")
        : record.sensitivity === "trusted"
          ? t("trustedFamily")
          : t("fullVaultOnly");
    const attachments = getRecordAttachments(record);
    if (attachments.length) {
      const list = document.createElement("div");
      list.className = "attachment-list";
      attachments.forEach((attachment) => {
        const chip = document.createElement("div");
        chip.className = "attachment-chip";
        const label = document.createElement("span");
        label.className = "attachment-label";
        label.textContent = `${attachment.name} (${formatBytes(attachment.size)})`;
        const actions = document.createElement("span");
        actions.className = "attachment-actions";
        const previewButton = document.createElement("button");
        previewButton.className = "chip-action preview-attachment-button";
        previewButton.type = "button";
        const requiresReveal = record.sensitivity !== "safe" && !revealedPreviewIds.has(attachment.id);
        const isActivePreview = activePreviewAttachmentId === attachment.id;
        previewButton.textContent = isActivePreview ? t("hidePreview") : requiresReveal ? t("revealPreview") : t("previewAttachment");
        previewButton.disabled = !canPreviewAttachment(attachment);
        previewButton.addEventListener("click", () => toggleAttachmentPreview(record, attachment));
        const downloadButton = document.createElement("button");
        downloadButton.className = "chip-action download-attachment-button";
        downloadButton.type = "button";
        downloadButton.textContent = t("downloadAttachment");
        downloadButton.disabled = !canDownloadAttachment(attachment);
        downloadButton.addEventListener("click", () => downloadAttachment(attachment.id));
        const removeButton = document.createElement("button");
        removeButton.className = "chip-action danger-text remove-attachment-button";
        removeButton.type = "button";
        removeButton.textContent = t("removeAttachment");
        removeButton.addEventListener("click", () => removeAttachmentFromRecord(record.id, attachment.id));
        actions.append(previewButton, downloadButton, removeButton);
        chip.append(label, actions);
        list.append(chip);
        if (isActivePreview) {
          const preview = document.createElement("div");
          preview.className = "attachment-preview";
          preview.textContent = t("previewAttachment");
          list.append(preview);
          renderAttachmentPreview(preview, attachment, record);
        }
      });
      card.querySelector("div").append(list);
    }
    if (editingRecordId === record.id) renderRecordEditPanel(card, record);
    els.recordList.append(card);
  });
  renderDashboard();
}

function renderRecordEditPanel(card, record) {
  const panel = document.createElement("form");
  panel.className = "record-edit-panel";
  panel.dataset.recordId = record.id;

  const heading = document.createElement("strong");
  heading.textContent = t("editRecordTitle");
  panel.append(heading);

  const categoryField = buildEditSelect("category", t("category"), record.category, categoryKeys.map((key) => [key, t(key)]));
  const titleField = buildEditInput("title", t("title"), record.title);
  const detailField = buildEditInput("detail", t("detail"), record.detail);
  const sensitivityField = buildEditSelect("sensitivity", t("sensitivity"), record.sensitivity, [
    ["safe", t("safeToPrint")],
    ["trusted", t("trustedFamily")],
    ["secret", t("fullVaultOnly")],
  ]);
  const fieldsGrid = document.createElement("div");
  fieldsGrid.className = "record-edit-fields";

  const renderEditFields = (category) => {
    fieldsGrid.textContent = "";
    (structuredFieldDefinitions[category] || []).forEach(([key, labelKey, type = "text"]) => {
      fieldsGrid.append(buildEditInput(key, t(labelKey), record.fields?.[key] || "", type, true));
    });
  };
  const categorySelect = categoryField.querySelector("select");
  categorySelect.addEventListener("change", () => renderEditFields(categorySelect.value));
  renderEditFields(record.category);

  const actions = document.createElement("div");
  actions.className = "record-edit-actions";
  const save = document.createElement("button");
  save.className = "button primary small save-record-button";
  save.type = "submit";
  save.textContent = t("saveChanges");
  const cancel = document.createElement("button");
  cancel.className = "button secondary small cancel-record-button";
  cancel.type = "button";
  cancel.textContent = t("cancel");
  cancel.addEventListener("click", () => {
    editingRecordId = "";
    renderRecords();
  });
  actions.append(save, cancel);

  panel.append(categoryField, titleField, detailField, sensitivityField, fieldsGrid, actions);
  panel.addEventListener("submit", (event) => {
    event.preventDefault();
    saveRecordEdits(record.id, panel);
  });
  card.append(panel);
}

function buildEditInput(name, labelText, value = "", type = "text", isStructured = false) {
  const label = document.createElement("label");
  label.className = "field";
  const span = document.createElement("span");
  span.textContent = labelText;
  const input = document.createElement("input");
  input.name = name;
  input.type = type;
  input.value = value;
  input.autocomplete = "off";
  if (isStructured) input.dataset.editFieldKey = name;
  label.append(span, input);
  return label;
}

function buildEditSelect(name, labelText, value, options) {
  const label = document.createElement("label");
  label.className = "field";
  const span = document.createElement("span");
  span.textContent = labelText;
  const select = document.createElement("select");
  select.name = name;
  options.forEach(([optionValue, optionLabel]) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = optionLabel;
    select.append(option);
  });
  select.value = value;
  label.append(span, select);
  return label;
}

function saveRecordEdits(recordId, panel) {
  if (!vault) return;
  const existing = vault.records.find((record) => record.id === recordId);
  if (!existing) return;
  const title = panel.querySelector('[name="title"]').value.trim();
  const detail = panel.querySelector('[name="detail"]').value.trim();
  if (!title || !detail) return;
  const nextFields = {};
  panel.querySelectorAll("[data-edit-field-key]").forEach((input) => {
    const key = input.dataset.editFieldKey;
    const value = input.value.trim();
    if (key && value) nextFields[key] = value;
  });
  if (existing.fields?.lastReviewedAt) nextFields.lastReviewedAt = existing.fields.lastReviewedAt;
  vault.records = vault.records.map((record) =>
    record.id === recordId
      ? {
          ...record,
          category: panel.querySelector('[name="category"]').value,
          title,
          detail,
          sensitivity: panel.querySelector('[name="sensitivity"]').value,
          fields: normalizeRecordFields(nextFields),
        }
      : record,
  );
  editingRecordId = "";
  touchVault();
  renderChecklist();
  renderRecords();
  renderExportPreview();
  toast(t("changesSaved"));
}

function renderFieldSummary(container, record) {
  if (!container) return;
  container.innerHTML = "";
  const visibleFields = getVisibleRecordFields(record);
  if (!visibleFields.length) return;
  visibleFields.forEach(([key, value]) => {
    const item = document.createElement("div");
    item.className = "field-summary-item";
    const label = document.createElement("span");
    label.textContent = getStructuredFieldLabel(record.category, key);
    const content = document.createElement("strong");
    content.textContent = value;
    item.append(label, content);
    container.append(item);
  });
}

function getVisibleRecordFields(record) {
  const fields = record.fields || {};
  return (structuredFieldDefinitions[record.category] || [])
    .map(([key]) => [key, String(fields[key] || "").trim()])
    .filter(([, value]) => value)
    .filter(([key]) => record.sensitivity === "safe" || !["policyNumberHint", "contactHint", "recoveryLocation"].includes(key));
}

function getStructuredFieldLabel(category, fieldKey) {
  const definition = (structuredFieldDefinitions[category] || []).find(([key]) => key === fieldKey);
  return definition ? t(definition[1]) : fieldKey;
}

function getRecordReviewLabel(record) {
  if (isRecordExpired(record)) return t("expired");
  const reviewedAt = record.fields?.lastReviewedAt;
  if (!reviewedAt) return t("notReviewed");
  if (getRecordReviewStatus(record) !== "complete") return t("review");
  return t("complete");
}

function revokePreviewObjectUrls() {
  previewObjectUrls.forEach((url) => URL.revokeObjectURL(url));
  previewObjectUrls = new Map();
}

function toggleAttachmentPreview(record, attachment) {
  if (!canPreviewAttachment(attachment)) {
    toast(t("previewUnavailable"));
    return;
  }
  if (activePreviewAttachmentId === attachment.id) {
    activePreviewAttachmentId = "";
    renderRecords();
    return;
  }
  if (record.sensitivity !== "safe") {
    revealedPreviewIds.add(attachment.id);
  }
  activePreviewAttachmentId = attachment.id;
  renderRecords();
}

function renderExportPreview() {
  els.exportPreview.textContent = buildEmergencyPacket();
  renderImportAssistant();
}

async function setVaultUnlocked(nextVault) {
  vault = await migrateVaultSchema(nextVault);
  isUnlocked = true;
  pendingImportSummary = "";
  els.familyName.value = vault.familyName || "";
  renderVaultState();
  renderChecklist();
  renderRecords();
  renderExportPreview();
}

function lockVault() {
  clearAttachmentPreviews();
  editingRecordId = "";
  vault = null;
  isUnlocked = false;
  activePassphrase = "";
  importBackupReady = false;
  pendingImportSummary = "";
  els.passphrase.value = "";
  renderVaultState();
  renderRecords();
  renderExportPreview();
  toast(t("lockedMessage"));
}

function renderVaultState() {
  els.vaultStateBadge.textContent = isUnlocked ? t("unlocked") : t("locked");
  els.vaultStateBadge.classList.toggle("warning", !isUnlocked);
  els.vaultStateBadge.classList.toggle("ready", isUnlocked);
  if (els.markRecoveryTestButton) els.markRecoveryTestButton.disabled = !isUnlocked;
  renderDashboard();
}

async function deriveKey(passphrase, salt) {
  const encoded = new TextEncoder().encode(passphrase);
  const keyMaterial = await crypto.subtle.importKey("raw", encoded, "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 250000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

async function encryptVault(data, passphrase) {
  const normalized = await migrateVaultSchema(data);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const plaintext = new TextEncoder().encode(JSON.stringify(normalized));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
  return {
    app: "family-emergency-binder",
    version: vaultSchemaVersion,
    schemaVersion: vaultSchemaVersion,
    kdf: "PBKDF2-SHA256-250000",
    cipher: "AES-GCM-256",
    salt: toBase64(salt),
    iv: toBase64(iv),
    ciphertext: toBase64(new Uint8Array(ciphertext)),
  };
}

async function decryptVault(envelope, passphrase) {
  if (!envelope || envelope.app !== "family-emergency-binder" || !envelope.salt || !envelope.iv || !envelope.ciphertext) {
    throw new Error(t("invalidVault"));
  }
  const salt = fromBase64(envelope.salt);
  const iv = fromBase64(envelope.iv);
  const ciphertext = fromBase64(envelope.ciphertext);
  const key = await deriveKey(passphrase, salt);
  const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return migrateVaultSchema(JSON.parse(new TextDecoder().decode(plaintext)));
}

function toBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function fromBase64(value) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

function textToBase64(value) {
  return toBase64(new TextEncoder().encode(value));
}

async function sha256Hex(bytes) {
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getRecordAttachments(record) {
  const ids = new Set(record.attachmentIds || []);
  return (vault?.attachments || []).filter((attachment) => ids.has(attachment.id));
}

function getTotalAttachmentBytes(attachments = vault?.attachments || []) {
  return attachments.reduce((total, attachment) => total + (attachment.size || 0), 0);
}

function getAttachmentById(attachmentId) {
  return (vault?.attachments || []).find((attachment) => attachment.id === attachmentId) || null;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isAllowedAttachmentFile(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  return allowedAttachmentTypes.has(file.type) || allowedAttachmentExtensions.has(extension);
}

async function fileToAttachment(file, redaction, projectedTotalBefore = getTotalAttachmentBytes()) {
  if (!isAllowedAttachmentFile(file)) throw new Error(t("unsupportedFile"));
  if (file.size > maxAttachmentBytes) throw new Error(t("fileTooLarge"));
  const projectedTotal = projectedTotalBefore + file.size;
  if (projectedTotal > maxTotalAttachmentBytes) throw new Error(t("vaultTooLarge"));
  const bytes = new Uint8Array(await file.arrayBuffer());
  return {
    id: crypto.randomUUID(),
    name: normalizeAttachmentFilename(file.name),
    type: file.type || "application/octet-stream",
    size: file.size,
    createdAt: new Date().toISOString(),
    redaction,
    dataBase64: toBase64(bytes),
    checksumSha256: await sha256Hex(bytes),
  };
}

async function readSelectedAttachments(redaction) {
  const files = Array.from(els.recordAttachment.files || []);
  const attachments = [];
  let projectedTotal = getTotalAttachmentBytes();
  for (const file of files) {
    const attachment = await fileToAttachment(file, redaction, projectedTotal);
    attachments.push(attachment);
    projectedTotal += attachment.size;
  }
  return attachments;
}

function readStructuredFields() {
  const fields = {};
  els.recordDetails?.querySelectorAll("[data-field-key]").forEach((input) => {
    const key = input.dataset.fieldKey;
    const value = input.value.trim();
    if (key && value) fields[key] = value;
  });
  return normalizeRecordFields(fields);
}

function canDownloadAttachment(attachment) {
  return Boolean(attachment?.name && attachment?.type && attachment?.dataBase64 && isValidAttachment(attachment));
}

function canPreviewAttachment(attachment) {
  return Boolean(isUnlocked && canDownloadAttachment(attachment) && allowedAttachmentTypes.has(attachment.type));
}

async function verifyAttachmentIntegrity(attachment) {
  const bytes = decodeBase64Strict(attachment.dataBase64);
  if (bytes.byteLength !== attachment.size) throw new Error(t("brokenAttachment"));
  const checksum = await sha256Hex(bytes);
  if (attachment.checksumSha256 && checksum !== attachment.checksumSha256) {
    throw new Error(t("checksumMismatch"));
  }
  return bytes;
}

async function downloadAttachment(attachmentId) {
  const attachment = getAttachmentById(attachmentId);
  if (!canDownloadAttachment(attachment)) {
    toast(t("brokenAttachment"));
    return;
  }
  try {
    const bytes = await verifyAttachmentIntegrity(attachment);
    const blob = new Blob([bytes], {
      type: attachment.type || "application/octet-stream",
    });
    downloadBlobFile(normalizeAttachmentFilename(attachment.name), blob);
    toast(t("attachmentDownloaded"));
  } catch (error) {
    console.warn(error);
    toast(error.message === t("checksumMismatch") ? t("checksumMismatch") : t("brokenAttachment"));
  }
}

async function renderAttachmentPreview(container, attachment, record) {
  container.textContent = "";
  if (!canPreviewAttachment(attachment)) {
    container.textContent = t("previewUnavailable");
    return;
  }
  if (record.sensitivity !== "safe" && !revealedPreviewIds.has(attachment.id)) {
    container.textContent = t("previewRequiresReveal");
    return;
  }
  try {
    const bytes = await verifyAttachmentIntegrity(attachment);
    if (attachment.type === "text/plain") {
      const previewBytes = bytes.slice(0, maxPreviewTextBytes);
      const text = new TextDecoder().decode(previewBytes);
      const pre = document.createElement("pre");
      pre.textContent = text;
      container.append(pre);
      if (bytes.byteLength > maxPreviewTextBytes) {
        const truncated = document.createElement("p");
        truncated.textContent = t("previewTruncated");
        container.append(truncated);
      }
      return;
    }

    const blob = new Blob([bytes], { type: attachment.type });
    const url = URL.createObjectURL(blob);
    previewObjectUrls.set(attachment.id, url);
    if (attachment.type.startsWith("image/")) {
      const image = document.createElement("img");
      image.src = url;
      image.alt = attachment.name;
      container.append(image);
      return;
    }
    if (attachment.type === "application/pdf") {
      const object = document.createElement("object");
      object.data = url;
      object.type = "application/pdf";
      object.setAttribute("aria-label", attachment.name);
      const fallback = document.createElement("p");
      fallback.textContent = t("previewUnavailable");
      object.append(fallback);
      container.append(object);
      return;
    }
    container.textContent = t("previewUnavailable");
  } catch (error) {
    console.warn(error);
    container.textContent = error.message === t("checksumMismatch") ? t("checksumMismatch") : t("brokenAttachment");
  }
}

function normalizeAttachmentFilename(filename, fallback = "attachment") {
  const normalized = String(filename || "")
    .normalize("NFKC")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/[\\/:"<>|?*]+/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[.\-\s]+/, "")
    .slice(0, maxAttachmentNameLength);
  return normalized || fallback;
}

function clearAttachmentPreviews() {
  revokePreviewObjectUrls();
  revealedPreviewIds = new Set();
  activePreviewAttachmentId = "";
}

function removeAttachmentFromRecord(recordId, attachmentId) {
  if (!vault || !window.confirm(t("confirmRemoveAttachment"))) return;
  if (activePreviewAttachmentId === attachmentId) activePreviewAttachmentId = "";
  revealedPreviewIds.delete(attachmentId);
  vault.records = vault.records.map((record) =>
    record.id === recordId
      ? { ...record, attachmentIds: (record.attachmentIds || []).filter((id) => id !== attachmentId) }
      : record,
  );
  pruneUnreferencedAttachments();
  touchVault();
  renderRecords();
  renderExportPreview();
  toast(t("attachmentRemoved"));
}

function deleteRecord(recordId) {
  if (!vault || !window.confirm(t("confirmDeleteRecord"))) return;
  if (editingRecordId === recordId) editingRecordId = "";
  const record = vault.records.find((item) => item.id === recordId);
  (record?.attachmentIds || []).forEach((attachmentId) => {
    if (activePreviewAttachmentId === attachmentId) activePreviewAttachmentId = "";
    revealedPreviewIds.delete(attachmentId);
  });
  vault.records = vault.records.filter((record) => record.id !== recordId);
  pruneUnreferencedAttachments();
  touchVault();
  renderChecklist();
  renderRecords();
  renderExportPreview();
  toast(t("recordDeleted"));
}

function pruneUnreferencedAttachments() {
  if (!vault) return;
  const referenced = new Set(vault.records.flatMap((record) => record.attachmentIds || []));
  vault.attachments = (vault.attachments || []).filter((attachment) => referenced.has(attachment.id));
}

function touchVault() {
  if (!vault) return;
  vault.updatedAt = new Date().toISOString();
}

async function saveEncrypted() {
  if (!vault || !activePassphrase) return;
  vault.updatedAt = new Date().toISOString();
  vault.backup = { ...(vault.backup || {}), lastSavedAt: new Date().toISOString() };
  vault = await migrateVaultSchema(vault);
  const encrypted = await encryptVault(vault, activePassphrase);
  localStorage.setItem(storageKey, JSON.stringify(encrypted));
  toast(t("saved"));
}

async function downloadEncrypted() {
  if (!vault || !activePassphrase) return;
  vault.updatedAt = new Date().toISOString();
  vault.backup = { ...(vault.backup || {}), lastDownloadedAt: new Date().toISOString() };
  vault = await migrateVaultSchema(vault);
  const encrypted = await encryptVault(vault, activePassphrase);
  const safeName = (vault.familyName || "family").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  downloadTextFile(`${safeName}.emergencyvault.json`, JSON.stringify(encrypted, null, 2), "application/json");
  toast(t("downloaded"));
}

function hasExistingVaultForImport() {
  return Boolean(vault || localStorage.getItem(storageKey));
}

function buildImportPreview(importedVault, envelope) {
  return [
    `${t("importPreview")}: ${importedVault.familyName || t("appName")}`,
    `Schema: ${envelope.schemaVersion || envelope.version || 1}`,
    `Updated: ${formatDate(importedVault.updatedAt)}`,
    `Records: ${(importedVault.records || []).length}`,
    `Attachments: ${(importedVault.attachments || []).length}`,
  ].join("\n");
}

function renderImportAssistant() {
  if (!els.downloadCurrentBackupButton) return;
  els.downloadCurrentBackupButton.classList.toggle("hidden", !pendingImportSummary);
  if (!els.importStatus) return;
  els.importStatus.classList.toggle("hidden", !pendingImportSummary);
  els.importStatus.textContent = pendingImportSummary ? `${t("backupBeforeImport")}\n${pendingImportSummary}` : "";
}

async function downloadCurrentBackup() {
  if (vault && activePassphrase) {
    vault.updatedAt = new Date().toISOString();
    vault.backup = { ...(vault.backup || {}), lastDownloadedAt: new Date().toISOString() };
    vault = await migrateVaultSchema(vault);
    const encrypted = await encryptVault(vault, activePassphrase);
    const safeName = (vault.familyName || "family").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadTextFile(`${safeName}.before-import.emergencyvault.json`, JSON.stringify(encrypted, null, 2), "application/json");
  } else {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return;
    downloadTextFile("current.before-import.emergencyvault.json", stored, "application/json");
  }
  importBackupReady = true;
  pendingImportSummary = "";
  renderImportAssistant();
  renderExportPreview();
  toast(t("backupDownloadedImportAgain"));
}

async function importEncryptedVault(file) {
  if (!els.passphrase.value) {
    toast(t("importNeedsPassphrase"));
    return;
  }
  let envelope;
  try {
    envelope = JSON.parse(await file.text());
    if (!envelope || envelope.app !== "family-emergency-binder") throw new Error(t("invalidVault"));
  } catch (error) {
    console.warn(error);
    toast(t("invalidVault"));
    return;
  }
  try {
    const importedSchemaVersion = envelope.schemaVersion || envelope.version || 1;
    const decrypted = await decryptVault(envelope, els.passphrase.value);
    if (hasExistingVaultForImport() && !importBackupReady) {
      pendingImportSummary = buildImportPreview(decrypted, envelope);
      renderExportPreview();
      return;
    }
    activePassphrase = els.passphrase.value;
    await setVaultUnlocked(decrypted);
    localStorage.setItem(storageKey, JSON.stringify(envelope));
    importBackupReady = false;
    pendingImportSummary = "";
    renderImportAssistant();
    toast(importedSchemaVersion < vaultSchemaVersion ? `${t("migratedVault")}\n${t("importReady")}` : t("importReady"));
  } catch (error) {
    console.warn(error);
    const knownImportMessages = new Set([t("invalidVault"), t("vaultTooLarge"), t("checksumMismatch")]);
    toast(knownImportMessages.has(error.message) ? error.message : t("wrongPassphrase"));
  }
}

function buildEmergencyPacket() {
  const printable = (vault?.records || []).filter((record) => record.sensitivity === "safe");
  if (!printable.length) return t("noPrintableRecords");
  const lines = [
    `${t("emergencyPacket")}: ${vault.familyName || t("appName")}`,
    `Updated: ${formatDate(vault.updatedAt)}`,
    "",
    ...printable.map((record) => {
      const attachments = getRecordAttachments(record);
      const fieldLines = buildSafeFieldLines(record);
      const attachmentLines = attachments.length
        ? `\n  ${t("attachmentSummary")}: ${attachments
            .map((attachment) => `${attachment.name} (${formatBytes(attachment.size)}, ${t("attachmentHidden")})`)
            .join("; ")}`
        : "";
      return `- ${t(record.category)}: ${record.title}\n  ${record.detail}${fieldLines}${attachmentLines}`;
    }),
  ];
  return lines.join("\n");
}

function buildSafeFieldLines(record) {
  if (record.sensitivity !== "safe") return "";
  const fields = getVisibleRecordFields(record);
  if (!fields.length) return "";
  return fields.map(([key, value]) => `\n  ${getStructuredFieldLabel(record.category, key)}: ${value}`).join("");
}

function buildRecoveryWorksheet() {
  const name = vault?.familyName || t("appName");
  const summary = getReadinessSummary();
  const categorySummary = categoryKeys.map((category) => `${t(category)}: ${t(summary.categoryStatuses[category])}`);
  const reviewSummary = (vault?.records || [])
    .filter((record) => getRecordReviewStatus(record) !== "complete")
    .map((record) => `- ${t(record.category)}: ${record.title} (${getRecordReviewLabel(record)})`);
  return [
    `ReadyBinder recovery worksheet: ${name}`,
    "",
    "This sheet should not include the full passphrase.",
    "Vault file location:",
    "",
    "Passphrase hint:",
    "",
    "Trusted people allowed to open the vault:",
    "",
    "Before opening, verify with:",
    "",
    "Last backup/test dates:",
    "",
    `Last vault update: ${formatDate(vault?.updatedAt)}`,
    `Last local save: ${formatDate(vault?.backup?.lastSavedAt)}`,
    `Last vault download: ${formatDate(vault?.backup?.lastDownloadedAt)}`,
    `Last recovery test: ${formatDate(vault?.backup?.lastRecoveryTestAt)}`,
    "",
    "Readiness summary:",
    "",
    ...categorySummary,
    "",
    "Records needing attention:",
    "",
    ...(reviewSummary.length ? reviewSummary : ["none"]),
    "",
    `Attachment metadata count: ${(vault?.attachments || []).length}`,
  ].join("\n");
}

function formatDate(value) {
  if (!value) return "not recorded";
  return new Intl.DateTimeFormat(currentLanguage, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function downloadTextFile(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  downloadBlobFile(filename, blob);
}

function downloadBlobFile(filename, blob) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = normalizeAttachmentFilename(filename, "readybinder-download");
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadPacket() {
  if (!vault) return;
  const safeName = (vault.familyName || "family").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  downloadTextFile(`${safeName}.emergency-packet.txt`, buildEmergencyPacket());
  toast(t("packetDownloaded"));
}

function downloadRecoveryWorksheet() {
  if (!vault) return;
  const safeName = (vault.familyName || "family").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  downloadTextFile(`${safeName}.recovery-worksheet.txt`, buildRecoveryWorksheet());
  toast(t("recoveryDownloaded"));
}

function markRecoveryTest() {
  if (!vault) return;
  vault.backup = { ...(vault.backup || {}), lastRecoveryTestAt: new Date().toISOString() };
  touchVault();
  renderExportPreview();
  toast(t("recoveryTestMarked"));
}

function markRecordReviewed(recordId) {
  if (!vault) return;
  vault.records = vault.records.map((record) =>
    record.id === recordId
      ? {
          ...record,
          fields: {
            ...(record.fields || {}),
            lastReviewedAt: new Date().toISOString(),
          },
        }
      : record,
  );
  touchVault();
  renderChecklist();
  renderRecords();
  renderExportPreview();
  toast(t("reviewedMarked"));
}

function printPacket() {
  if (!vault) return;
  window.print();
}

function toast(message) {
  els.exportPreview.textContent = `${message}\n\n${els.exportPreview.textContent}`;
}

function setActiveSection(section) {
  activeSection = section;
  els.navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === section);
  });
}

function scrollToSection(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupNavigation() {
  els.navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const section = item.dataset.section;
      if (categoryKeys.includes(section)) {
        recordCategoryFilter = section;
        if (els.recordCategoryFilter) els.recordCategoryFilter.value = section;
        renderRecords();
        scrollToSection("#recordsSection");
        setActiveSection(section);
        return;
      }
      if (section === "vault") scrollToSection("#vaultSection");
      if (section === "exports") scrollToSection("#exportSection");
      if (section === "settings") scrollToSection("#cryptoNotice");
      setActiveSection(section);
    });
  });
}

function setupRecordFilters() {
  els.recordCategory?.addEventListener("change", renderRecordDetailsForm);
  els.recordSearch?.addEventListener("input", () => {
    recordSearch = els.recordSearch.value;
    renderRecords();
  });
  els.recordCategoryFilter?.addEventListener("change", () => {
    recordCategoryFilter = els.recordCategoryFilter.value;
    renderRecords();
    setActiveSection(categoryKeys.includes(recordCategoryFilter) ? recordCategoryFilter : "vault");
  });
  els.recordSensitivityFilter?.addEventListener("change", () => {
    recordSensitivityFilter = els.recordSensitivityFilter.value;
    renderRecords();
  });
}

els.vaultForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const passphrase = els.passphrase.value;
  activePassphrase = passphrase;
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      const decrypted = await decryptVault(JSON.parse(stored), passphrase);
  await setVaultUnlocked(decrypted);
      toast(t("createdVault"));
      return;
    } catch (error) {
      console.warn(error);
      const knownUnlockMessages = new Set([t("invalidVault"), t("vaultTooLarge"), t("checksumMismatch")]);
      toast(knownUnlockMessages.has(error.message) ? error.message : t("wrongPassphrase"));
      return;
    }
  }
  await setVaultUnlocked(defaultVault(els.familyName.value));
  toast(t("createdVault"));
});

els.seedDemoButton.addEventListener("click", async () => {
  activePassphrase = els.passphrase.value || "demo passphrase";
  els.passphrase.value = activePassphrase;
  await setVaultUnlocked(demoVault());
  toast(t("demoLoaded"));
});

els.recordForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!vault) return;
  const title = els.recordTitle.value.trim();
  const detail = els.recordDetail.value.trim();
  if (!title || !detail) return;
  try {
    const sensitivity = els.recordSensitivity.value;
    const attachments = await readSelectedAttachments(sensitivity);
    const fields = readStructuredFields();
    vault.attachments.push(...attachments);
    vault.records.unshift({
      id: crypto.randomUUID(),
      category: els.recordCategory.value,
      title,
      detail,
      sensitivity,
      attachmentIds: attachments.map((attachment) => attachment.id),
      fields,
    });
    vault.updatedAt = new Date().toISOString();
    els.recordForm.reset();
    renderCategoryOptions();
    renderRecordDetailsForm();
    renderChecklist();
    renderRecords();
    renderExportPreview();
  } catch (error) {
    console.warn(error);
    toast(error.message);
  }
});

els.saveVaultButton.addEventListener("click", saveEncrypted);
els.downloadVaultButton.addEventListener("click", downloadEncrypted);
els.downloadPacketButton.addEventListener("click", downloadPacket);
els.downloadRecoveryButton.addEventListener("click", downloadRecoveryWorksheet);
els.markRecoveryTestButton.addEventListener("click", markRecoveryTest);
els.downloadCurrentBackupButton.addEventListener("click", downloadCurrentBackup);
els.printPacketButton.addEventListener("click", printPacket);
els.lockButton.addEventListener("click", lockVault);
els.importVaultInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importEncryptedVault(file);
  event.target.value = "";
});

setupLanguageSelect();
setupNavigation();
setupRecordFilters();
applyTranslations();
lockVault();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("Service worker registration failed", error));
}
