/**
 * Maturity Assessment Overview Component
 * Displays project info, overall maturity metrics, and charts
 */

import { escapeHtml } from '@lib/utils';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';

export interface MaturityOverviewContext {
  scores: number[];
  components: string[];
  overallText: string;
  summaryData: { labels: string[]; values: number[]; colors: string[] };
  summaryView: 'dueDate' | 'status';
  onSummaryViewToggle: (view: 'dueDate' | 'status') => void;
  onSaveClick: () => void;
  onLoadClick: () => void;
  onResetClick: () => void;
  onReportsClick: () => void;
}

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;

/**
 * Render and mount the overview view
 */
export function mountMaturityOverview(container: HTMLElement, context: MaturityOverviewContext): void {
  container.innerHTML = renderOverviewHtml(context);
  bindOverviewEvents(container, context);
}

/**
 * Render overview HTML
 */
function renderOverviewHtml(context: MaturityOverviewContext): string {
  const { overallText, summaryView, summaryData } = context;

  return `
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 px-6 py-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-xl font-bold text-slate-900">Change Maturity Assessment Tool</h1>
        <p class="text-xs text-slate-500 mt-0.5">V5.20 — NHS Change Maturity Framework</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button id="btn-reports" class="text-sm px-4 py-2 bg-[#005eb8] text-white hover:bg-blue-700 rounded-md font-medium shadow-sm transition-colors">Reports</button>
        <button id="btn-save" class="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors">Save As...</button>
        <input type="file" id="load-file-input" accept=".json" class="hidden">
        <button id="btn-load" class="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors">Load</button>
        <button id="btn-reset" class="text-sm px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors">Reset</button>
      </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-6">Project Overview</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="space-y-4">
          <div>
            <label for="organisation-name" class="block text-sm font-medium text-gray-600 mb-1">Organisation Name</label>
            <input id="organisation-name" class="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900" placeholder="Enter organisation name">
          </div>
          <div>
            <label for="project-name" class="block text-sm font-medium text-gray-600 mb-1">Project Name</label>
            <input id="project-name" class="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900" placeholder="Enter project name">
          </div>
          <div>
            <label for="project-phase-select" class="block text-sm font-medium text-gray-600 mb-1">Project Phase</label>
            <select id="project-phase-select" class="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900">
              <option value="">Select a phase to compare...</option>
              ${['Phase 1: Pre-Discovery', 'Phase 2: Solution Design', 'Phase 3: Development', 'Phase 4: Implementation', 'Phase 5: Post Deployment'].map(p => `<option value="${p}">${p}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center flex flex-col items-center justify-center">
          <label class="block text-sm font-medium text-gray-600 mb-2">Overall Change Maturity</label>
          <p class="text-2xl font-bold text-blue-600">${escapeHtml(overallText)}</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col">
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-gray-600">Actions Summary</label>
            <div class="flex items-center text-xs bg-gray-200 rounded-full p-0.5">
              <button data-summary-view="dueDate" class="px-2 py-0.5 rounded-full ${summaryView === 'dueDate' ? 'bg-white text-gray-800 shadow' : 'text-gray-600'}">By Due Date</button>
              <button data-summary-view="status" class="px-2 py-0.5 rounded-full ${summaryView === 'status' ? 'bg-white text-gray-800 shadow' : 'text-gray-600'}">By Status</button>
            </div>
          </div>
          <div class="relative flex-grow h-40"><canvas id="actions-summary-chart"></canvas></div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-4">Maturity Radar</h2>
      <div class="chart-container"><canvas id="maturityRadar"></canvas></div>
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-gray-600">
        ${STAGES.map((s, i) => `<div class="flex items-center"><span class="w-3 h-3 rounded-full mr-2" style="background-color:${STAGE_COLORS[i]}"></span>${i} = ${s}</div>`).join('')}
      </div>
    </div>
  `;
}

/**
 * Bind event listeners for overview
 */
function bindOverviewEvents(container: HTMLElement, context: MaturityOverviewContext): void {
  container.querySelectorAll<HTMLButtonElement>('[data-summary-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      context.onSummaryViewToggle(btn.dataset.summaryView as 'dueDate' | 'status');
    });
  });

  document.getElementById('btn-reports')?.addEventListener('click', context.onReportsClick);
  document.getElementById('btn-save')?.addEventListener('click', context.onSaveClick);
  document.getElementById('btn-load')?.addEventListener('click', context.onLoadClick);
  document.getElementById('btn-reset')?.addEventListener('click', context.onResetClick);
}
