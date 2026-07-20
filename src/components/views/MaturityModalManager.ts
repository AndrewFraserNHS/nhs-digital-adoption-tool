/**
 * Maturity Modal Manager Component
 * Handles matrix, guidance, and report modals
 */

import { escapeHtml } from '@lib/utils';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import { generateMaturityReport } from '@lib/reporting';

export interface MaturityModalContext {
  modalType: '' | 'matrix' | 'guidance' | 'report';
  activeComponent: string;
  scores: Record<string, number>;
  componentMatrix: Record<string, string[]>;
  guidanceData: Record<string, any>;
  onClose: () => void;
  onSetScore?: (componentId: string, score: number) => void;
  onExportCsv?: (data: any) => void;
  components?: string[];
}

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;

/**
 * Render and mount modals in the portal
 */
export function renderMaturityModals(container: HTMLElement, context: MaturityModalContext): void {
  if (!context.modalType) {
    container.innerHTML = '';
    return;
  }

  let html = '';
  if (context.modalType === 'matrix') {
    html = renderMatrixModalHtml(context);
  } else if (context.modalType === 'guidance') {
    html = renderGuidanceModalHtml(context);
  } else if (context.modalType === 'report') {
    html = renderReportModalHtml(context);
  }

  container.innerHTML = html;
  bindModalEvents(container, context);
}

/**
 * Render matrix modal HTML
 */
function renderMatrixModalHtml(context: MaturityModalContext): string {
  const { activeComponent, scores, componentMatrix } = context;
  const sc = scores[activeComponent] || 0;
  const rows = (componentMatrix as Record<string, string[]>)[activeComponent] || [];

  return `<div id="matrix-overlay" class="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
      <div class="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
        <h2 class="text-xl font-bold text-gray-900">${escapeHtml(activeComponent)} — Matrix</h2>
        <button data-close-modal class="text-gray-500 hover:text-gray-800 text-2xl leading-none">&times;</button>
      </div>
      <div class="p-6 overflow-y-auto space-y-3">
        ${STAGES.map((stage, i) => `<button data-set-score="${i}" class="w-full text-left p-4 rounded-lg border transition-colors ${i === sc ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}"><div class="font-semibold mb-1" style="color:${STAGE_COLORS[i]}">${i} — ${stage}</div><p class="text-sm text-gray-700 whitespace-pre-wrap">${escapeHtml(rows[i] || 'N/A')}</p></button>`).join('')}
      </div>
    </div>
  </div>`;
}

/**
 * Render guidance modal HTML
 */
function renderGuidanceModalHtml(context: MaturityModalContext): string {
  const { activeComponent, guidanceData } = context;
  const theme = (guidanceData as any)[activeComponent];
  const body = theme
    ? `<div class="space-y-3 text-sm text-gray-700">
        <div><h4 class="font-semibold text-gray-600 mb-1">Purpose</h4><p>${theme.purpose || ''}</p></div>
        <div><h4 class="font-semibold text-gray-600 mb-1">Inputs, tools and templates</h4><div>${theme.inputs || ''}</div></div>
        <div><h4 class="font-semibold text-gray-600 mb-1">Indicators for success</h4><div>${theme.indicators || ''}</div></div>
        <div><h4 class="font-semibold text-gray-600 mb-1">Deliverables</h4><div>${theme.deliverables || ''}</div></div>
      </div>`
    : '<p class="text-sm text-gray-600">No guidance available.</p>';

  return `<div id="guidance-overlay" class="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
      <div class="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
        <h2 class="text-xl font-bold text-gray-900">${escapeHtml(activeComponent)} — Guidance</h2>
        <button data-close-modal class="text-gray-500 hover:text-gray-800 text-2xl leading-none">&times;</button>
      </div>
      <div class="p-6 overflow-y-auto">${body}</div>
    </div>
  </div>`;
}

/**
 * Render report modal HTML
 */
function renderReportModalHtml(_context: MaturityModalContext): string {
  return `<div id="report-overlay" class="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
      <div class="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
        <h2 class="text-xl font-bold text-gray-900">Assessment Report</h2>
        <div class="flex gap-2">
          <button data-print class="px-4 py-2 bg-[#005eb8] text-white rounded-lg text-sm font-medium">Print / Save PDF</button>
          <button data-export-csv class="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">Export CSV</button>
          <button data-close-modal class="text-gray-500 hover:text-gray-800 text-2xl leading-none">&times;</button>
        </div>
      </div>
      <div class="p-8 overflow-y-auto print-area">${generateMaturityReport()}</div>
    </div>
  </div>`;
}

/**
 * Bind modal event listeners
 */
function bindModalEvents(container: HTMLElement, context: MaturityModalContext): void {
  // Close button
  container.querySelectorAll<HTMLElement>('[data-close-modal]').forEach(el => {
    el.addEventListener('click', context.onClose);
  });

  // Overlay click to close
  const overlay = container.firstElementChild as HTMLElement | null;
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
context.onClose();
}
    });
  }

  // Matrix modal: set score
  container.querySelectorAll<HTMLButtonElement>('[data-set-score]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (context.onSetScore) {
        context.onSetScore(context.activeComponent, Number(btn.dataset.setScore));
      }
    });
  });

  // Report modal: print
  container.querySelector<HTMLButtonElement>('[data-print]')?.addEventListener('click', () => window.print());

  // Report modal: export CSV
  container.querySelector<HTMLButtonElement>('[data-export-csv]')?.addEventListener('click', () => {
    if (context.onExportCsv && context.components) {
      context.onExportCsv(
        context.components.map(n => ({ id: n, label: n, value: context.scores[n] || 0 }))
      );
    }
  });
}
