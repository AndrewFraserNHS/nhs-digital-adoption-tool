import { escapeCsv, escapeHtml, downloadFile } from './utils';
import AppState from './state';
import { CONSTANTS, SPECIFIC_RUBRICS } from '../types/constants';
import { save } from './storage';
import type { ComponentDetail } from './maturityState';

export interface MaturityReportRow {
  id: string;
  label: string;
  value: number;
  max: number;
  justification?: string;
  notes?: string;
  links?: string[];
  actionCount?: number;
}

export interface MaturityReportData {
  orgName: string;
  projectName?: string;
  phase?: string;
  createdAt?: string;
  rows: MaturityReportRow[];
}

export function buildLegacyMaturityReportData(): MaturityReportData {
  const state = AppState.getInstance();
  const orgName = state.assessment.orgName || 'Unknown organisation';
  const createdAt = state.assessment.createdAt;
  const responses = state.assessment.responses || {};
  const rubric = SPECIFIC_RUBRICS.sampleRubric || [];
  const rows = rubric.map(r => ({ id: r.id, label: r.label, value: responses[r.id] ?? 0, max: r.max }));

  return {
    orgName,
    createdAt,
    rows
  };
}

export function generateMaturityReport(reportData?: MaturityReportData): string {
  const data = reportData || buildLegacyMaturityReportData();
  const org = data.orgName || 'Unknown organisation';
  const created = data.createdAt ? new Date(data.createdAt).toLocaleString() : '';
  const projectName = data.projectName || '';
  const phase = data.phase || '';
  const rows = data.rows;
  const tableRows = rows.map((row) => {
    const detailBits = [
      row.justification ? `<div><strong>Justification:</strong> ${escapeHtml(row.justification)}</div>` : '',
      row.notes ? `<div><strong>Notes:</strong> ${escapeHtml(row.notes)}</div>` : '',
      row.links?.length ? `<div><strong>Links:</strong> ${row.links.map((link) => escapeHtml(link)).join(', ')}</div>` : '',
      typeof row.actionCount === 'number' ? `<div><strong>Actions:</strong> ${row.actionCount}</div>` : ''
    ].filter(Boolean).join('');

    return `<tr class='report-row'><td class='report-cell-label'><div>${escapeHtml(row.label)}</div>${detailBits ? `<div class='report-cell-detail'>${detailBits}</div>` : ''}</td><td class='report-cell-num'>${row.value}</td><td class='report-cell-num'>${row.max}</td></tr>`;
  }).join('');

  // compute totals
  const totalScore = rows.reduce((s, x) => s + Number(x.value || 0), 0);
  const totalMax = rows.reduce((s, x) => s + Number(x.max || 0), 0);
  const percent = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

  const html = `
  <div class="maturity-report report-document component-wrap">
    <div class="report-print-header">
      <div class="report-brand">${CONSTANTS.APP_NAME}</div>
      <div class="report-meta">Organisation: <strong>${escapeHtml(org)}</strong>${projectName ? ` — Project: <strong>${escapeHtml(projectName)}</strong>` : ''}${phase ? ` — Phase: <strong>${escapeHtml(phase)}</strong>` : ''}${created ? ` — Created: ${escapeHtml(created)}` : ''}</div>
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
  return buildLegacyMaturityReportData().rows;
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
