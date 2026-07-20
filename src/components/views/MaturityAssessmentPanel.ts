/**
 * Maturity Assessment Panel Component
 * Displays component assessment tabs and detailed panel
 */

import { escapeHtml } from '@lib/utils';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import type { ComponentDetail, ActionItem } from '@lib/maturityState';

export interface MaturityAssessmentPanelContext {
  activeComponent: string;
  components: string[];
  scores: Record<string, number>;
  details: Record<string, ComponentDetail>;
  componentMatrix: Record<string, string[]>;
  onComponentChange: (componentId: string) => void;
  onScoreChange: (componentId: string, score: number) => void;
  onOpenMatrix: (componentId: string) => void;
  onOpenGuidance: (componentId: string) => void;
  onDetailUpdate: (componentId: string, detail: ComponentDetail) => void;
}

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;

/**
 * Render and mount the assessment panel
 */
export function mountMaturityAssessmentPanel(container: HTMLElement, context: MaturityAssessmentPanelContext): void {
  container.innerHTML = renderPanelHtml(context);
  bindPanelEvents(container, context);
}

/**
 * Render assessment panel HTML
 */
function renderPanelHtml(context: MaturityAssessmentPanelContext): string {
  const { activeComponent, components, scores, details, componentMatrix } = context;

  const tabsHtml = components.map(name => {
    const sc = scores[name] || 0;
    const active = name === activeComponent;
    return `<button data-tab="${escapeHtml(name)}" class="px-3 py-2 rounded-lg border text-sm whitespace-nowrap transition-colors ${active ? 'bg-blue-100 border-blue-300 text-blue-800 font-medium' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-200'}">${escapeHtml(name)}${sc > 0 ? ` <span class="ml-1 text-xs font-bold" style="color:${STAGE_COLORS[sc]}">${sc}</span>` : ''}</button>`;
  }).join('');

  const sc = scores[activeComponent] || 0;
  const matrixRow = (componentMatrix as Record<string, string[]>)[activeComponent] || [];
  const d = details[activeComponent];
  const taClass = 'w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300';

  const panelContent = d ? `
    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h3 class="text-xl font-bold text-gray-900 mb-4">${escapeHtml(activeComponent)}</h3>

      <div class="mb-4">
        <label for="comp-stage" class="block text-sm font-medium text-gray-600 mb-1">Current Maturity Stage</label>
        <select id="comp-stage" class="w-full md:w-96 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900">
          ${STAGES.map((s, i) => `<option value="${i}"${i === sc ? ' selected' : ''}>${i} — ${s}</option>`).join('')}
        </select>
      </div>
      ${sc > 0 ? `<div class="mb-4 p-4 rounded-lg border-l-4 bg-blue-50 border-blue-400 text-sm text-gray-700 whitespace-pre-wrap">${escapeHtml(matrixRow[sc] || '')}</div>` : ''}
      <div class="flex flex-wrap gap-2">
        <button data-open-matrix class="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">View Matrix</button>
        <button data-open-guidance class="px-3 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90" style="background-color:#00A499">View Guidance</button>
      </div>

      <div class="mt-6 border-t border-gray-100 pt-6 space-y-5">
        <div>
          <label for="comp-justification" class="block text-sm font-semibold text-gray-700 mb-1">
            Justification <span class="font-normal text-gray-400">Why was this stage selected?</span>
          </label>
          <textarea id="comp-justification" rows="3" class="${taClass}" placeholder="Why was this stage selected?">${escapeHtml(d.justification)}</textarea>
        </div>

        <div>
          <label for="comp-notes" class="block text-sm font-semibold text-gray-700 mb-1">Additional information and notes</label>
          <textarea id="comp-notes" rows="2" class="${taClass}" placeholder="Add any other relevant information here...">${escapeHtml(d.notes)}</textarea>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Supporting Links</label>
          <div id="links-list" class="space-y-2">
            ${d.links.map((link, i) => `
              <div class="flex gap-2">
                <input data-link-idx="${i}" type="url" value="${escapeHtml(link)}" placeholder="https://..." class="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <button data-remove-link="${i}" class="px-2 py-1 text-red-400 hover:text-red-600 text-xl leading-none" title="Remove">&times;</button>
              </div>`).join('')}
          </div>
          <button data-add-link class="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Supporting Link</button>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">Actions to Improve Maturity</label>
          <div id="actions-list" class="space-y-3">
            ${d.actions.map((act, i) => `
              <div class="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
                <input data-action-text="${i}" value="${escapeHtml(act.text)}" placeholder="Describe the action..." class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <div class="grid grid-cols-3 gap-2">
                  <input data-action-owner="${i}" value="${escapeHtml(act.owner)}" placeholder="Owner" class="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300">
                  <input data-action-due="${i}" type="date" value="${escapeHtml(act.dueDate)}" class="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300">
                  <select data-action-status="${i}" class="bg-white border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300">
                    ${['Not Started','In Progress','Completed'].map(s => `<option${act.status === s ? ' selected' : ''}>${s}</option>`).join('')}
                  </select>
                </div>
                <div class="flex justify-end"><button data-remove-action="${i}" class="text-xs text-red-500 hover:text-red-700">Remove</button></div>
              </div>`).join('')}
          </div>
          <button data-add-action class="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Action</button>
        </div>
      </div>
    </div>` : '<div class="text-center text-gray-400">Select a component to view details</div>';

  return `
    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 mb-8">
      <div class="p-4 border-b border-gray-100 overflow-x-auto">
        <div class="flex space-x-2">${tabsHtml}</div>
      </div>
      <div id="component-panel" class="p-6">${panelContent}</div>
    </div>
  `;
}

/**
 * Bind event listeners for panel
 */
function bindPanelEvents(container: HTMLElement, context: MaturityAssessmentPanelContext): void {
  const { activeComponent, details, onComponentChange, onScoreChange, onOpenMatrix, onOpenGuidance, onDetailUpdate } = context;

  // Tab switching
  container.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      onComponentChange(btn.dataset.tab!);
    });
  });

  const d = details[activeComponent];
  if (!d) return;

  // Score change
  document.getElementById('comp-stage')?.addEventListener('change', e => {
    const score = Number((e.target as HTMLSelectElement).value);
    onScoreChange(activeComponent, score);
  });

  // Modal opens
  container.querySelectorAll<HTMLButtonElement>('[data-open-matrix]').forEach(btn => {
    btn.addEventListener('click', () => onOpenMatrix(activeComponent));
  });
  container.querySelectorAll<HTMLButtonElement>('[data-open-guidance]').forEach(btn => {
    btn.addEventListener('click', () => onOpenGuidance(activeComponent));
  });

  // Textareas
  document.getElementById('comp-justification')?.addEventListener('input', e => {
    d.justification = (e.target as HTMLTextAreaElement).value;
    onDetailUpdate(activeComponent, d);
  });
  document.getElementById('comp-notes')?.addEventListener('input', e => {
    d.notes = (e.target as HTMLTextAreaElement).value;
    onDetailUpdate(activeComponent, d);
  });

  // Links
  container.querySelectorAll<HTMLInputElement>('[data-link-idx]').forEach(input => {
    input.addEventListener('input', () => {
      d.links[Number(input.dataset.linkIdx)] = input.value;
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelectorAll<HTMLButtonElement>('[data-remove-link]').forEach(btn => {
    btn.addEventListener('click', () => {
      d.links.splice(Number(btn.dataset.removeLink), 1);
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelector<HTMLButtonElement>('[data-add-link]')?.addEventListener('click', () => {
    d.links.push('');
    onDetailUpdate(activeComponent, d);
  });

  // Actions
  container.querySelectorAll<HTMLInputElement>('[data-action-text]').forEach(input => {
    input.addEventListener('input', () => {
      d.actions[Number(input.dataset.actionText)].text = input.value;
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelectorAll<HTMLInputElement>('[data-action-owner]').forEach(input => {
    input.addEventListener('input', () => {
      d.actions[Number(input.dataset.actionOwner)].owner = input.value;
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelectorAll<HTMLInputElement>('[data-action-due]').forEach(input => {
    input.addEventListener('change', () => {
      d.actions[Number(input.dataset.actionDue)].dueDate = input.value;
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelectorAll<HTMLSelectElement>('[data-action-status]').forEach(sel => {
    sel.addEventListener('change', () => {
      d.actions[Number(sel.dataset.actionStatus)].status = sel.value;
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelectorAll<HTMLButtonElement>('[data-remove-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      d.actions.splice(Number(btn.dataset.removeAction), 1);
      onDetailUpdate(activeComponent, d);
    });
  });
  container.querySelector<HTMLButtonElement>('[data-add-action]')?.addEventListener('click', () => {
    d.actions.push({ id: Date.now().toString(), text: '', owner: '', dueDate: '', status: 'Not Started' });
    onDetailUpdate(activeComponent, d);
  });
}
