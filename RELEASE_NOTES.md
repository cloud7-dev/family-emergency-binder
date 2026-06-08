# ReadyBinder v1.1.0 Release Notes

ReadyBinder v1.1.0 adds maintenance-focused reliability improvements on top of v1.0 without changing the local-first schema contract.

## Highlights

- Adds periodic review reminder tracking (`vault.backup.lastReviewReminderAt`) and dashboard guidance for overdue checks.
- Adds duplicate attachment visibility via checksum-based grouping in dashboard, backup status, and recovery worksheet.
- Keeps schema v3 and offline behavior intact while bumping service worker cache to `family-emergency-binder-v11`.
- Strengthens browser QA coverage for review reminders, duplicate attachment detection, and offline cache version alignment.
- Syncs repository docs, test gates, and static checks for v1.1 release metadata.

## From v1.0 to v1.1

- Added review reminder action and reminder date rendering.
- Added duplicate attachment summary for imports, dashboard metrics, and recovery worksheet.
- Added QA assertions for review reminders and duplicate attachments.
- Bumped package version to `1.1.0`.
- Bumped cache name and asset version query strings to `v11`.

## Security Status

ReadyBinder v1.1.0 is not externally security audited. It uses browser WebCrypto with PBKDF2-SHA256 and AES-GCM, keeps data local by default, and stores small attachments inside the encrypted vault file. Do not store raw passwords, seed phrases, private keys, or catastrophic secrets.

## Demo Scenario

1. Create or unlock a vault.
2. Add at least one structured safe record and one trusted/full-vault record with small attachment.
3. Preview attachments while unlocked.
4. Mark a record as reviewed and set a review reminder.
5. Duplicate an attachment in a second record and verify duplicate summary appears in dashboard/recovery views.
6. Save/download the encrypted vault.
7. Verify the downloaded backup without replacing the current vault.
8. Export the redacted emergency packet and recovery worksheet.
9. Use sidebar filters and lock/unlock to confirm import/backup flows remain stable.
