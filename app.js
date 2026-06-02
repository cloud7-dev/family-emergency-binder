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
    appName: "Family Emergency Binder",
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
    screenTitle: "Emergency binder vault",
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
    appName: "Family Emergency Binder",
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
    screenTitle: "가족 비상 바인더 vault",
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
  screenTitle: "緊急バインダー vault",
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
  screenTitle: "家庭应急资料 vault",
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
  screenTitle: "Notfallordner-Vault",
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
  screenTitle: "Vault de dossier d'urgence",
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
  screenTitle: "Vault del raccoglitore di emergenza",
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
  screenTitle: "परिवार आपातकालीन binder vault",
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

let currentLanguage = localStorage.getItem(languageKey) || "ko";
let vault = null;
let activePassphrase = "";
let isUnlocked = false;

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
  recordTitle: document.querySelector("#recordTitle"),
  recordDetail: document.querySelector("#recordDetail"),
  recordSensitivity: document.querySelector("#recordSensitivity"),
  recordList: document.querySelector("#recordList"),
  exportPreview: document.querySelector("#exportPreview"),
  saveVaultButton: document.querySelector("#saveVaultButton"),
  downloadVaultButton: document.querySelector("#downloadVaultButton"),
  importVaultInput: document.querySelector("#importVaultInput"),
  downloadPacketButton: document.querySelector("#downloadPacketButton"),
  downloadRecoveryButton: document.querySelector("#downloadRecoveryButton"),
  printPacketButton: document.querySelector("#printPacketButton"),
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
  renderChecklist();
  renderRecords();
  renderExportPreview();
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

function defaultVault(familyName = "") {
  return {
    version: 1,
    familyName,
    checklist: Object.fromEntries(checklistKeys.map((key) => [key, "missing"])),
    records: [],
    backup: {
      lastSavedAt: null,
      lastDownloadedAt: null,
      lastRecoveryTestAt: null,
    },
    updatedAt: new Date().toISOString(),
  };
}

function demoVault() {
  return {
    version: 1,
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
      },
      {
        id: crypto.randomUUID(),
        category: "medical",
        title: "Primary hospital and allergies",
        detail: "Seoul Central Hospital. Penicillin allergy. Medication list in kitchen drawer.",
        sensitivity: "safe",
      },
      {
        id: crypto.randomUUID(),
        category: "insurance",
        title: "Health insurance card",
        detail: "Wallet scan attached later. Policy number should stay redacted in print packet.",
        sensitivity: "trusted",
      },
      {
        id: crypto.randomUUID(),
        category: "recovery",
        title: "Password manager recovery hint",
        detail: "Hardware key is in the small black case. Do not store seed phrases here.",
        sensitivity: "secret",
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

function renderChecklist() {
  const sourceVault = vault || defaultVault();
  els.checklist.innerHTML = "";
  checklistKeys.forEach((key) => {
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
    select.value = sourceVault.checklist[key] || "missing";
    select.disabled = !vault;
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
  const values = Object.values(vault?.checklist || {});
  const complete = values.filter((value) => value === "complete").length;
  const score = values.length ? Math.round((complete / values.length) * 100) : 0;
  els.readinessScore.textContent = `${score}%`;
  els.progressFill.style.width = `${score}%`;
}

function renderRecords() {
  els.recordList.innerHTML = "";
  if (!vault?.records?.length) {
    const empty = document.createElement("p");
    empty.textContent = t("emptyRecords");
    els.recordList.append(empty);
    return;
  }
  const template = document.querySelector("#recordTemplate");
  vault.records.forEach((record) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector(".record-category").textContent = t(record.category);
    card.querySelector("h3").textContent = record.title;
    card.querySelector("p").textContent = record.detail;
    card.querySelector(".record-sensitivity").textContent =
      record.sensitivity === "safe"
        ? t("safeToPrint")
        : record.sensitivity === "trusted"
          ? t("trustedFamily")
          : t("fullVaultOnly");
    els.recordList.append(card);
  });
}

function renderExportPreview() {
  els.exportPreview.textContent = buildEmergencyPacket();
}

function setVaultUnlocked(nextVault) {
  vault = nextVault;
  isUnlocked = true;
  els.familyName.value = vault.familyName || "";
  renderVaultState();
  renderChecklist();
  renderRecords();
  renderExportPreview();
}

function lockVault() {
  vault = null;
  isUnlocked = false;
  activePassphrase = "";
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
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const plaintext = new TextEncoder().encode(JSON.stringify(data));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
  return {
    app: "family-emergency-binder",
    version: 1,
    kdf: "PBKDF2-SHA256-250000",
    cipher: "AES-GCM-256",
    salt: toBase64(salt),
    iv: toBase64(iv),
    ciphertext: toBase64(new Uint8Array(ciphertext)),
  };
}

async function decryptVault(envelope, passphrase) {
  const salt = fromBase64(envelope.salt);
  const iv = fromBase64(envelope.iv);
  const ciphertext = fromBase64(envelope.ciphertext);
  const key = await deriveKey(passphrase, salt);
  const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return JSON.parse(new TextDecoder().decode(plaintext));
}

function toBase64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}

function fromBase64(value) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

async function saveEncrypted() {
  if (!vault || !activePassphrase) return;
  vault.updatedAt = new Date().toISOString();
  vault.backup = { ...(vault.backup || {}), lastSavedAt: new Date().toISOString() };
  const encrypted = await encryptVault(vault, activePassphrase);
  localStorage.setItem(storageKey, JSON.stringify(encrypted));
  toast(t("saved"));
}

async function downloadEncrypted() {
  if (!vault || !activePassphrase) return;
  vault.updatedAt = new Date().toISOString();
  vault.backup = { ...(vault.backup || {}), lastDownloadedAt: new Date().toISOString() };
  const encrypted = await encryptVault(vault, activePassphrase);
  const safeName = (vault.familyName || "family").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  downloadTextFile(`${safeName}.emergencyvault.json`, JSON.stringify(encrypted, null, 2), "application/json");
  toast(t("downloaded"));
}

async function importEncryptedVault(file) {
  if (!els.passphrase.value) {
    toast(t("importNeedsPassphrase"));
    return;
  }
  try {
    const envelope = JSON.parse(await file.text());
    const decrypted = await decryptVault(envelope, els.passphrase.value);
    activePassphrase = els.passphrase.value;
    setVaultUnlocked(decrypted);
    localStorage.setItem(storageKey, JSON.stringify(envelope));
    toast(t("importReady"));
  } catch (error) {
    console.warn(error);
    toast(t("wrongPassphrase"));
  }
}

function buildEmergencyPacket() {
  const printable = (vault?.records || []).filter((record) => record.sensitivity === "safe");
  if (!printable.length) return t("noPrintableRecords");
  const lines = [
    `${t("emergencyPacket")}: ${vault.familyName || t("appName")}`,
    `Updated: ${formatDate(vault.updatedAt)}`,
    "",
    ...printable.map((record) => `- ${t(record.category)}: ${record.title}\n  ${record.detail}`),
  ];
  return lines.join("\n");
}

function buildRecoveryWorksheet() {
  const name = vault?.familyName || t("appName");
  return [
    `Family Emergency Binder recovery worksheet: ${name}`,
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
    `Last vault update: ${formatDate(vault?.updatedAt)}`,
    `Last local save: ${formatDate(vault?.backup?.lastSavedAt)}`,
    `Last vault download: ${formatDate(vault?.backup?.lastDownloadedAt)}`,
  ].join("\n");
}

function formatDate(value) {
  if (!value) return "not recorded";
  return new Intl.DateTimeFormat(currentLanguage, { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function downloadTextFile(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
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

function printPacket() {
  if (!vault) return;
  window.print();
}

function toast(message) {
  els.exportPreview.textContent = `${message}\n\n${els.exportPreview.textContent}`;
}

els.vaultForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const passphrase = els.passphrase.value;
  activePassphrase = passphrase;
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      const decrypted = await decryptVault(JSON.parse(stored), passphrase);
      setVaultUnlocked(decrypted);
      toast(t("createdVault"));
      return;
    } catch (error) {
      console.warn(error);
      toast(t("wrongPassphrase"));
      return;
    }
  }
  setVaultUnlocked(defaultVault(els.familyName.value));
  toast(t("createdVault"));
});

els.seedDemoButton.addEventListener("click", () => {
  activePassphrase = els.passphrase.value || "demo passphrase";
  els.passphrase.value = activePassphrase;
  setVaultUnlocked(demoVault());
  toast(t("demoLoaded"));
});

els.recordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!vault) return;
  const title = els.recordTitle.value.trim();
  const detail = els.recordDetail.value.trim();
  if (!title || !detail) return;
  vault.records.unshift({
    id: crypto.randomUUID(),
    category: els.recordCategory.value,
    title,
    detail,
    sensitivity: els.recordSensitivity.value,
  });
  vault.updatedAt = new Date().toISOString();
  els.recordForm.reset();
  renderCategoryOptions();
  renderRecords();
  renderExportPreview();
});

els.saveVaultButton.addEventListener("click", saveEncrypted);
els.downloadVaultButton.addEventListener("click", downloadEncrypted);
els.downloadPacketButton.addEventListener("click", downloadPacket);
els.downloadRecoveryButton.addEventListener("click", downloadRecoveryWorksheet);
els.printPacketButton.addEventListener("click", printPacket);
els.lockButton.addEventListener("click", lockVault);
els.importVaultInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importEncryptedVault(file);
  event.target.value = "";
});

setupLanguageSelect();
applyTranslations();
lockVault();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("Service worker registration failed", error));
}
