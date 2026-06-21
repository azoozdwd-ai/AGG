/**
 * Google Apps Script — لوحة تحكم زوار موقع الغردقة الذهبية
 * 
 * خطوات النشر:
 * 1. افتح sheets.new وأنشئ جدول جديد
 * 2. سمّ الأعمدة: التاريخ | الوقت | نوع الحدث | التفاصيل | الرابط | IP | الدولة | User Agent
 * 3. افتح Extensions → Apps Script
 * 4. احذف الكود الموجود والصق هذا الكود
 * 5. اضغط Deploy → New Web App
 *    - Execute as: Me
 *    - Who has access: Anyone (حتى الضيوف)
 * 6. انسخ الرابط (Web App URL) وضعه في ملف index.html بدلاً من YOUR_WEB_APP_URL
 * 7. اختبر بفتح الموقع — ستظهر أول زيارة في الـ Sheet
 */

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    const now = new Date();
    sheet.appendRow([
      Utilities.formatDate(now, 'Asia/Kuwait', 'yyyy-MM-dd'),
      Utilities.formatDate(now, 'Asia/Kuwait', 'HH:mm:ss'),
      data.event || 'pageview',
      data.detail || '',
      data.url || '',
      data.ip || '',
      data.country || '',
      data.ua || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Tracking endpoint is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}
