import { escapeCsv, downloadFile } from './utils';
import AppState from './state';
import { CONSTANTS, SPECIFIC_RUBRICS } from '../types/constants';
import { save } from './storage';

export function generateMaturityReport(): string {
  const state = AppState.getInstance();
  const org = state.assessment.orgName || 'Unknown organisation';
  const created = state.assessment.createdAt ? new Date(state.assessment.createdAt).toLocaleString() : '';
  const responses = state.assessment.responses || {};

  const rubric = SPECIFIC_RUBRICS.sampleRubric || [];
  const rows = rubric.map(r => ({ id: r.id, label: r.label, value: responses[r.id] ?? 0, max: r.max }));
  const tableRows = rows.map(r => `<tr class='report-row'><td class='report-cell-label'>${r.label}</td><td class='report-cell-num'>${r.value}</td><td class='report-cell-num'>${r.max}</td></tr>`).join('');

  // compute totals
  const totalScore = rows.reduce((s, x) => s + Number(x.value || 0), 0);
  const totalMax = rows.reduce((s, x) => s + Number(x.max || 0), 0);
  const percent = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

  const html = `
  <div class="maturity-report report-document component-wrap">
    <div class="report-print-header">
      <div class="report-brand">${CONSTANTS.APP_NAME}</div>
      <div class="report-meta">Organisation: <strong>${org}</strong>${created ? ` — Created: ${created}` : ''}</div>
    </div>

    <h1 class="report-title">Maturity assessment report</h1>

    <section class="report-summary">
      <div class="report-summary-row"><strong>Total score:</strong> ${totalScore} / ${totalMax}</div>
      <div class="report-summary-row"><strong>Overall:</strong> ${percent}%</div>
    </section>

    <section class="report-table-wrap">
      <table class="report-table" role="table">
        <thead>
          <tr><th>Rubric</th><th style='text-align:right'>Score</th><th style='text-align:right'>Max</th></tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </section>

    <div class="report-actions">
      <button type="button" id="report-export-csv">Export to CSV</button>
      <button type="button" id="report-print">Print</button>
    </div>
  </div>
  `;

  return html;
}

export function getMaturityRows() {
  const state = AppState.getInstance();
  const responses = state.assessment.responses || {};
  const rubric = SPECIFIC_RUBRICS.sampleRubric || [];
  return rubric.map(r => ({ id: r.id, label: r.label, value: responses[r.id] ?? 0, max: r.max }));
}

export function showMaturityReportInModal(containerId = 'report-display-content') {
  const el = typeof document !== 'undefined' ? document.getElementById(containerId) : null;
  if (!el) {
return;
}
  const html = generateMaturityReport();
  el.innerHTML = html;

  // wire modal buttons
  const printBtn = el.querySelector('#report-print') as HTMLButtonElement | null;
  const exportBtn = el.querySelector('#report-export-csv') as HTMLButtonElement | null;
  if (printBtn) {
printBtn.addEventListener('click', () => window.print());
}
  if (exportBtn) {
exportBtn.addEventListener('click', () => {
    const rows = getMaturityRows();
    exportMaturityReportToCSV(rows, 'maturity-report.csv');
  });
}
}

export function exportMaturityReportToCSV(rows: Array<Record<string, any>>, filename = 'maturity-report.csv') {
  if (!rows || rows.length === 0) {
return;
}
  const keys = Object.keys(rows[0]);
  const lines = [keys.map(escapeCsv).join(',')];
  for (const r of rows) {
    lines.push(keys.map(k => escapeCsv(String(r[k] ?? ''))).join(','));
  }
  const csv = lines.join('\n');
  // remember last export for quick re-use
  try {
    save('last-maturity-csv', { filename, csv });
  } catch (_err) {
    // silently ignore storage errors
  }
  downloadFile(filename, csv);
}

// expose to legacy window
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.NHSDigitalAdoption = window.NHSDigitalAdoption || {};
  // @ts-ignore
  window.NHSDigitalAdoption.Reporting = {
    generateMaturityReport,
    exportMaturityReportToCSV,
    getMaturityRows,
    showMaturityReportInModal,
  };
}

export default { generateMaturityReport, exportMaturityReportToCSV, getMaturityRows, showMaturityReportInModal };
