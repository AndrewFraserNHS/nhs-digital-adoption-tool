import { escapeCsv, escapeHtml, downloadFile } from './utils';
import AppState from './state';
import { CONSTANTS, SPECIFIC_RUBRICS } from '../types/constants';
import { MATURITY_STAGES, STAGE_COLORS } from '../data/rubrics';
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
  overallScore?: string;
  chartImageUrl?: string;
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
  const projectName = data.projectName || 'Change Maturity Report';
  const overallScore = data.overallScore || '';
  const chartImageUrl = data.chartImageUrl || '';
  const rows = data.rows;

  const tableRows = rows.map((row) => {
    const stageIndex = Math.round(row.value);
    const stageName = MATURITY_STAGES[stageIndex] ?? MATURITY_STAGES[0];
    const stageColor = STAGE_COLORS[stageIndex] ?? STAGE_COLORS[0];
    const justification = row.justification?.trim() || 'N/A';
    const notes = row.notes?.trim() || 'N/A';
    const linksHTML = row.links?.length
      ? `<ul style="list-style:disc;margin:0;padding-left:1.25rem;">${row.links.map((link) => `<li><a href="${escapeHtml(link)}" target="_blank" style="color:#2563eb;word-break:break-all;">${escapeHtml(link)}</a></li>`).join('')}</ul>`
      : 'N/A';

    return `<tr style="border-top:1px solid #e5e7eb;">
      <td style="padding:12px;vertical-align:top;font-weight:500;">${escapeHtml(row.label)}</td>
      <td style="padding:12px;vertical-align:top;">
        <span style="font-size:0.875rem;font-weight:600;padding:4px 12px;border-radius:9999px;color:white;background-color:${stageColor};-webkit-print-color-adjust:exact;print-color-adjust:exact;">${escapeHtml(stageName)}</span>
      </td>
      <td style="padding:12px;vertical-align:top;white-space:pre-wrap;">${escapeHtml(justification)}</td>
      <td style="padding:12px;vertical-align:top;white-space:pre-wrap;">${escapeHtml(notes)}</td>
      <td style="padding:12px;vertical-align:top;">${linksHTML}</td>
    </tr>`;
  }).join('');

  const chartSection = chartImageUrl
    ? `<div style="width:100%;margin-bottom:2rem;page-break-after:always;"><img src="${chartImageUrl}" alt="Maturity Radar Chart" style="width:100%;height:auto;display:block;" /></div>`
    : '';

  return `<div class="maturity-report report-document">
    <div style="text-align:center;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid #e5e7eb;">
      <h1 style="font-size:1.875rem;font-weight:700;color:#1f2937;margin:0 0 0.25rem;">${escapeHtml(org)}</h1>
      <h2 style="font-size:1.5rem;font-weight:600;color:#374151;margin:0;">${escapeHtml(projectName)}</h2>
    </div>
    <div style="text-align:center;border:1px solid #e5e7eb;border-radius:0.5rem;padding:1rem;margin-bottom:2rem;page-break-inside:avoid;">
      <h3 style="font-size:1.125rem;font-weight:600;color:#4b5563;margin:0 0 0.5rem;">Overall Change Maturity</h3>
      <p style="font-size:1.875rem;font-weight:700;color:#005EB8;margin:0;">${escapeHtml(overallScore)}</p>
    </div>
    ${chartSection}
    <table style="width:100%;border-collapse:collapse;font-size:0.875rem;${chartImageUrl ? 'page-break-before:always;' : ''}">
      <thead style="background-color:#f9fafb;">
        <tr>
          <th style="width:16%;text-align:left;padding:12px;font-weight:500;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Theme</th>
          <th style="width:14%;text-align:left;padding:12px;font-weight:500;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Maturity Stage</th>
          <th style="width:28%;text-align:left;padding:12px;font-weight:500;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Justification</th>
          <th style="width:28%;text-align:left;padding:12px;font-weight:500;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Additional Info &amp; Notes</th>
          <th style="width:14%;text-align:left;padding:12px;font-weight:500;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e5e7eb;">Supporting Links</th>
        </tr>
      </thead>
      <tbody style="color:#374151;">
        ${tableRows}
      </tbody>
    </table>
  </div>`;
}

export function getMaturityRows() {
  return buildLegacyMaturityReportData().rows;
}

export interface ActionPlanReportRow {
  theme: string;
  text: string;
  owner: string;
  status: string;
  dueDate: string;
}

export interface ActionPlanReportData {
  orgName: string;
  projectName?: string;
  rows: ActionPlanReportRow[];
}

const ACTION_STATUS_COLORS: Record<string, string> = {
  'Planned': '#768692',
  'Not Started': '#768692',
  'In Progress': '#FFB81C',
  'Completed': '#00A499',
  'Cancelled': '#AE2521'
};

export function generateActionPlanReport(data: ActionPlanReportData): string {
  const org = data.orgName || '';
  const projectName = data.projectName || '';
  const rows = data.rows;

  let bodyHTML: string;
  if (rows.length === 0) {
    bodyHTML = '<p style="text-align:center;color:#4b5563;">No actions have been defined in this assessment.</p>';
  } else {
    const tableRows = rows.map((row, index) => {
      const isLastInTheme = index === rows.length - 1 || rows[index + 1].theme !== row.theme;
      const separatorStyle = isLastInTheme ? ' style="border-bottom:2px solid #768692;"' : '';
      const statusColor = ACTION_STATUS_COLORS[row.status] || '#768692';
      const dueDateFormatted = row.dueDate
        ? new Date(row.dueDate).toLocaleDateString('en-GB')
        : '';
      return `<tr>
        <td${separatorStyle}>${escapeHtml(row.theme)}</td>
        <td style="white-space:pre-wrap;"${separatorStyle}>${escapeHtml(row.text)}</td>
        <td${separatorStyle}>${escapeHtml(row.owner || '')}</td>
        <td${separatorStyle}><span style="display:inline-block;margin-right:8px;width:10px;height:10px;border-radius:50%;background-color:${statusColor};-webkit-print-color-adjust:exact;print-color-adjust:exact;"></span>${escapeHtml(row.status || 'Planned')}</td>
        <td${separatorStyle}>${escapeHtml(dueDateFormatted)}</td>
      </tr>`;
    }).join('');

    bodyHTML = `<table class="report-table action-plan-table" role="table" style="width:100%;border-collapse:collapse;">
      <thead>
        <tr>
          <th style="text-align:left;padding:8px;">Theme</th>
          <th style="text-align:left;padding:8px;">Agreed Action</th>
          <th style="text-align:left;padding:8px;">Owner(s)</th>
          <th style="text-align:left;padding:8px;">Status</th>
          <th style="text-align:left;padding:8px;">Due Date</th>
        </tr>
      </thead>
      <tbody>${tableRows}</tbody>
    </table>`;
  }

  return `<div class="action-plan-report report-document">
    <div class="report-print-header">
      <div class="report-brand">${CONSTANTS.APP_NAME}</div>
      <div class="report-meta">Organisation: <strong>${escapeHtml(org)}</strong>${projectName ? ` — Project: <strong>${escapeHtml(projectName)}</strong>` : ''}</div>
    </div>
    <h1 class="report-title">Action Plan Report</h1>
    ${bodyHTML}
  </div>`;
}

export function exportActionPlanReportToCSV(rows: ActionPlanReportRow[], filename = 'action-plan-report.csv') {
  if (!rows || rows.length === 0) return;
  const headers = ['Theme', 'Agreed Action', 'Owner(s)', 'Status', 'Due Date'];
  const lines = [headers.map(escapeCsv).join(',')];
  for (const r of rows) {
    const dueDateFormatted = r.dueDate ? new Date(r.dueDate).toLocaleDateString('en-GB') : '';
    lines.push([r.theme, r.text, r.owner || '', r.status || 'Planned', dueDateFormatted].map(escapeCsv).join(','));
  }
  downloadFile(filename, lines.join('\n'));
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
