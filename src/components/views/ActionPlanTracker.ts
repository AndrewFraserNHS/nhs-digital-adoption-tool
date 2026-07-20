/**
 * Action Plan Tracker View Component
 * Displays flattened action items across all components and lenses
 */

import { escapeHtml } from '@lib/utils';
import { ActionRow } from '@lib/adoptionMetrics';

export interface ActionPlanContext {
  actions: ActionRow[];
  onComponentClick: (componentId: string) => void;
}

/**
 * Render and mount the action plan tracker view
 */
export function mountActionPlan(container: HTMLElement, context: ActionPlanContext): void {
  container.innerHTML = renderActionPlanHtml(context);
  bindActionPlanEvents(container, context);
}

/**
 * Render action plan HTML
 */
function renderActionPlanHtml(context: ActionPlanContext): string {
  const { actions } = context;

  return `
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Action Tracker</h2>
      <div class="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        ${actions.length ? `
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-slate-200">
              <thead class="bg-slate-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Component</th>
                  <th class="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Lens</th>
                  <th class="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
                  <th class="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Owner</th>
                  <th class="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Timescale</th>
                  <th class="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-slate-100">
                ${actions.map(({ compId, component, lens, action }) => `
                  <tr>
                    <td class="px-4 py-3 text-sm text-slate-700"><button data-nav-component="${compId}" class="hover:text-[#005eb8]">${escapeHtml(component)}</button></td>
                    <td class="px-4 py-3 text-sm text-slate-500">${escapeHtml(lens)}</td>
                    <td class="px-4 py-3 text-sm text-slate-700">${escapeHtml(action.text)}</td>
                    <td class="px-4 py-3 text-sm text-slate-700">${escapeHtml(action.owner)}</td>
                    <td class="px-4 py-3 text-sm text-slate-700">${escapeHtml(action.timescale)}</td>
                    <td class="px-4 py-3 text-sm"><span class="px-2 py-1 rounded bg-slate-100 text-slate-700">${escapeHtml(action.status)}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : '<div class="p-6 text-slate-500">No actions recorded yet.</div>'}
      </div>
    </div>
  `;
}

/**
 * Bind event listeners for action plan view
 */
function bindActionPlanEvents(container: HTMLElement, context: ActionPlanContext): void {
  container.querySelectorAll<HTMLButtonElement>('[data-nav-component]').forEach(btn => {
    btn.addEventListener('click', () => {
      context.onComponentClick(btn.dataset.navComponent || '');
    });
  });
}
