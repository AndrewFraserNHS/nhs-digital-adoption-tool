/**
 * View rendering functions for Adoption Tool
 * Generates HTML for different views: Dashboard, Assessment, Action Plan, Settings
 */

import { AdoptionStore, DraftEntry } from './adoptionState';
import { Metrics } from './adoptionMetrics';
import { AssessmentComponent } from '@data/components';
import { escapeHtml } from './utils';

export interface RenderContext {
  store: AdoptionStore;
  components: AssessmentComponent[];
  lenses: string[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  getComponent: (componentId: string) => AssessmentComponent;
  getRubricText: (componentId: string, lens: string, score: number) => string;
}

/**
 * Render the main dashboard view with overall metrics and radar chart
 */
export function renderDashboard(context: RenderContext): string {
  const { metrics } = context;

  return `
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Adoption Readiness Dashboard</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 class="text-sm font-medium text-slate-500 mb-1">Overall Adoption Readiness</h3>
          <div class="flex items-end space-x-2">
            <span class="text-4xl font-bold text-[#005eb8]">${metrics.overallPct}%</span>
          </div>
          <div class="mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden">
            <div class="absolute top-0 left-0 h-full bg-[#005eb8]" style="width:${metrics.overallPct}%"></div>
          </div>
          <div class="flex justify-between text-xs text-slate-400 mt-2">
            <span>Progress towards maximum possible score across all areas.</span>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 class="text-sm font-medium text-slate-500 mb-1">Assessment Progress</h3>
          <div class="flex items-end space-x-2">
            <span class="text-4xl font-bold text-slate-700">${metrics.assessedCount}</span>
            <span class="text-lg text-slate-400 mb-1">/ ${metrics.totalExpected}</span>
          </div>
          <p class="text-sm text-slate-500 mt-2">Component lenses assessed this month.</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 class="text-sm font-medium text-slate-500 mb-1">Current Score</h3>
          <div class="flex items-end space-x-2">
            <span class="text-4xl font-bold text-slate-700">${metrics.totalCurrent}</span>
            <span class="text-lg text-slate-400 mb-1">/ ${metrics.totalExpected * 5}</span>
          </div>
          <p class="text-sm text-slate-500 mt-2">Total raw score out of maximum possible.</p>
        </div>
      </div>
      <div id="adoption-chart-container" class="bg-white rounded-lg shadow-sm p-6 border border-slate-200"></div>
    </div>
  `;
}

/**
 * Render the assessment view with component/lens selection and scoring
 */
export function renderAssessment(context: RenderContext): string {
  const { store, components, lenses } = context;

  const componentOptions = components
    .map((c) => `<option value="${c.id}" ${store.view === 'assessment' ? 'selected' : ''}>${escapeHtml(c.label)}</option>`)
    .join('');

  const lensOptions = lenses
    .map((l) => `<option value="${escapeHtml(l)}">${escapeHtml(l)}</option>`)
    .join('');

  return `
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Readiness Assessment</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Select Component</label>
          <select id="active-component-select" class="w-full border-slate-300 rounded-md shadow-sm p-2 border">
            ${componentOptions}
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">Select Lens</label>
          <select id="active-lens-select" class="w-full border-slate-300 rounded-md shadow-sm p-2 border">
            ${lensOptions}
          </select>
        </div>
      </div>
      <div id="assessment-panel-container" class="bg-white rounded-lg shadow-sm border border-slate-200">
        <!-- Assessment panel will be rendered here -->
      </div>
    </div>
  `;
}

/**
 * Render the action plan view with flattened action items
 */
export function renderActionPlan(_context: RenderContext): string {
  return `
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Gap Bridging Action Plan</h2>
      <div class="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-slate-50 border-b border-slate-200">
              <tr>
                <th class="px-6 py-3 text-left font-semibold text-slate-700">Component</th>
                <th class="px-6 py-3 text-left font-semibold text-slate-700">Lens</th>
                <th class="px-6 py-3 text-left font-semibold text-slate-700">Action</th>
                <th class="px-6 py-3 text-left font-semibold text-slate-700">Owner</th>
                <th class="px-6 py-3 text-left font-semibold text-slate-700">Timescale</th>
                <th class="px-6 py-3 text-left font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody id="action-table-body" class="divide-y divide-slate-200">
              <!-- Action rows will be inserted here -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render the settings view with organization profile and export controls
 */
export function renderSettings(context: RenderContext): string {
  const { store } = context;

  return `
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Settings</h2>
      
      <div class="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-6">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">Organization Profile</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Trust Name</label>
            <input
              id="settings-trust-name"
              type="text"
              class="w-full rounded-md border-slate-300 p-2 border"
              value="${escapeHtml(store.orgProfile.trustName)}"
              placeholder="Enter trust name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Region</label>
            <input
              id="settings-region"
              type="text"
              class="w-full rounded-md border-slate-300 p-2 border"
              value="${escapeHtml(store.orgProfile.region)}"
              placeholder="Enter region"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Trust Type</label>
            <input
              id="settings-trust-type"
              type="text"
              class="w-full rounded-md border-slate-300 p-2 border"
              value="${escapeHtml(store.orgProfile.trustType)}"
              placeholder="Enter trust type"
            />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">Data Management</h3>
        <div class="space-y-3">
          <button id="adoption-export-button" class="w-full px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors">
            Export JSON
          </button>
          <button id="adoption-import-button" class="w-full px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors">
            Import
          </button>
          <button id="adoption-finalise-button" class="w-full px-4 py-2 bg-[#005eb8] text-white hover:bg-blue-700 rounded-md font-medium shadow-sm transition-colors">
            Finalise Month
          </button>
        </div>
      </div>
    </div>
  `;
}
