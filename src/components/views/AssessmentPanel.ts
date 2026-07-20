/**
 * Assessment Panel View Component
 * Displays component-based assessment with scoring matrix, justification, and gap-bridging actions
 */

import { escapeHtml } from '@lib/utils';
import { AdoptionStore, DraftEntry, DraftAction } from '@lib/adoptionState';
import { AssessmentComponent } from '@data/components';

export interface AssessmentPanelContext {
  store: AdoptionStore;
  components: AssessmentComponent[];
  activeComponentId: string;
  getRubricText: (componentId: string, lens: string, score: number) => string;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentChange: (componentId: string) => void;
  onEntryUpdate: (componentId: string, lens: string, entry: DraftEntry) => void;
  onMatrixToggle: (key: string) => void;
  onActionRemove: (componentId: string, lens: string, actionId: string) => void;
}

/**
 * Render and mount the assessment panel view
 */
export function mountAssessmentPanel(container: HTMLElement, context: AssessmentPanelContext): void {
  container.innerHTML = renderAssessmentHtml(context);
  bindAssessmentEvents(container, context);
}

/**
 * Render assessment HTML
 */
function renderAssessmentHtml(context: AssessmentPanelContext): string {
  const { store, components, activeComponentId, getRubricText, getEntry } = context;
  const component = components.find(c => c.id === activeComponentId) || components[0];

  return `
    <div class="max-w-5xl mx-auto pb-20">
      <div class="mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 class="text-3xl font-bold text-slate-800 flex items-center">${escapeHtml(component.label)}<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200">Toolkit Phase ${component.phase}</span></h2>
          <p class="text-slate-500 mt-2">Score the current readiness of this component. The target score prior to Go-Live is Level ${component.target}.</p>
        </div>
        <select id="active-component-select" class="rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 text-sm font-medium border">
          ${components.map((item) => `<option value="${item.id}" ${item.id === component.id ? 'selected' : ''}>${escapeHtml(item.label)}</option>`).join('')}
        </select>
      </div>
      <div class="space-y-8">
        ${component.lenses.map((lens) => {
          const entry = getEntry(component.id, lens);
          const showMatrix = !!store.showMatrix?.[`${component.id}:${lens}`];
          return `
            <div class="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div class="bg-slate-50 p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Lens</span>
                  <button data-lens-info="${escapeHtml(lens)}" class="flex items-center text-xl font-semibold text-slate-800 hover:text-[#005eb8] transition-colors group text-left">${escapeHtml(lens)}</button>
                </div>
                <div class="shrink-0 w-full md:w-64">
                  <label class="block text-xs font-semibold text-slate-500 mb-1">Readiness Score</label>
                  <select data-score-select="${component.id}::${escapeHtml(lens)}" class="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white py-2 px-3 text-sm font-medium border" style="border-left-width:4px;border-left-color:${entry.score >= component.target ? '#22c55e' : (entry.score > 0 ? '#f59e0b' : '#cbd5e1')}">
                    ${[0, 1, 2, 3, 4, 5].map((level) => `<option value="${level}" ${entry.score === level ? 'selected' : ''}>${level} - ${level === 0 ? 'Not Started' : ['Emerging','Developing','Embedding','Adopted','Thriving'][level - 1]}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="px-6 py-4 bg-blue-50/50 border-b border-slate-100 text-sm">
                <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div class="flex items-start flex-1"><p class="text-slate-600 whitespace-pre-line"><strong class="text-slate-700">${entry.score === 0 ? 'Not Started' : `Level ${entry.score}`}: </strong>${escapeHtml(getRubricText(component.id, lens, entry.score))}</p></div>
                  <button data-toggle-matrix="${component.id}::${escapeHtml(lens)}" class="shrink-0 text-xs font-semibold text-[#005eb8] hover:text-blue-800 flex items-center bg-white px-3 py-1.5 border border-blue-200 rounded shadow-sm transition-colors">${showMatrix ? 'Hide Matrix Guidance' : 'View Full Matrix'}</button>
                </div>
              </div>
              ${showMatrix ? `<div class="px-6 py-5 bg-slate-50 border-b border-slate-200"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">${[0, 1, 2, 3, 4, 5].map((level) => `<button data-matrix-level="${component.id}::${escapeHtml(lens)}::${level}" class="p-4 rounded-lg border shadow-sm text-left ${entry.score === level ? 'border-[#005eb8] ring-1 ring-[#005eb8]' : 'border-slate-200 hover:border-blue-300'}"><div class="text-sm font-bold mb-2 pb-2 border-b text-slate-700">${level === 0 ? 'Not Started' : `Level ${level}`}</div><p class="text-xs text-slate-600 whitespace-pre-line leading-relaxed">${escapeHtml(getRubricText(component.id, lens, level))}</p></button>`).join('')}</div></div>` : ''}
              <div class="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Justification</label>
                    <textarea data-justification="${component.id}::${escapeHtml(lens)}" class="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border">${escapeHtml(entry.justification)}</textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">Evidence Links / Docs</label>
                    <textarea data-evidence="${component.id}::${escapeHtml(lens)}" class="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-16 p-2 border">${escapeHtml(entry.evidence)}</textarea>
                  </div>
                </div>
                <div class="border rounded-lg p-4 bg-slate-50">
                  <div class="flex items-center justify-between mb-3"><h4 class="text-sm font-semibold text-slate-800">Gap Bridging Actions</h4><button data-add-action="${component.id}::${escapeHtml(lens)}" class="px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold">Add Action</button></div>
                  <div class="space-y-3">${entry.actions.length ? entry.actions.map((action) => `<div class="bg-white border border-slate-200 rounded-md p-3"><div class="grid grid-cols-1 gap-2"><input data-action-text="${component.id}::${escapeHtml(lens)}::${action.id}" class="w-full rounded-md border-slate-300 p-2 border text-sm" value="${escapeHtml(action.text)}" placeholder="Action description"><div class="grid grid-cols-1 md:grid-cols-3 gap-2"><input data-action-owner="${component.id}::${escapeHtml(lens)}::${action.id}" class="rounded-md border-slate-300 p-2 border text-sm" value="${escapeHtml(action.owner)}" placeholder="Owner"><input data-action-timescale="${component.id}::${escapeHtml(lens)}::${action.id}" class="rounded-md border-slate-300 p-2 border text-sm" value="${escapeHtml(action.timescale)}" placeholder="Timescale"><select data-action-status="${component.id}::${escapeHtml(lens)}::${action.id}" class="rounded-md border-slate-300 p-2 border text-sm">${['Not Started','In Progress','Blocked','Completed'].map((status) => `<option value="${status}" ${status === action.status ? 'selected' : ''}>${status}</option>`).join('')}</select></div><div class="flex justify-end"><button data-remove-action="${component.id}::${escapeHtml(lens)}::${action.id}" class="text-xs text-red-600">Remove</button></div></div></div>`).join('') : '<p class="text-sm text-slate-500">No actions yet for this lens.</p>'}</div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Bind event listeners for assessment panel
 */
function bindAssessmentEvents(container: HTMLElement, context: AssessmentPanelContext): void {
  const { getEntry, onComponentChange, onEntryUpdate, onMatrixToggle, onActionRemove } = context;

  // Component selector
  const componentSelect = document.getElementById('active-component-select') as HTMLSelectElement | null;
  componentSelect?.addEventListener('change', (e) => {
    onComponentChange((e.target as HTMLSelectElement).value);
  });

  // Score selectors
  container.querySelectorAll<HTMLSelectElement>('[data-score-select]').forEach(select => {
    select.addEventListener('change', (e) => {
      const [compId, lens] = (select.dataset.scoreSelect || '').split('::');
      const score = Number((e.target as HTMLSelectElement).value);
      const entry = getEntry(compId, lens);
      entry.score = score;
      onEntryUpdate(compId, lens, entry);
    });
  });

  // Justification and evidence textareas
  container.querySelectorAll<HTMLTextAreaElement>('[data-justification]').forEach(ta => {
    ta.addEventListener('input', (e) => {
      const [compId, lens] = (ta.dataset.justification || '').split('::');
      const entry = getEntry(compId, lens);
      entry.justification = (e.target as HTMLTextAreaElement).value;
      onEntryUpdate(compId, lens, entry);
    });
  });

  container.querySelectorAll<HTMLTextAreaElement>('[data-evidence]').forEach(ta => {
    ta.addEventListener('input', (e) => {
      const [compId, lens] = (ta.dataset.evidence || '').split('::');
      const entry = getEntry(compId, lens);
      entry.evidence = (e.target as HTMLTextAreaElement).value;
      onEntryUpdate(compId, lens, entry);
    });
  });

  // Matrix toggle
  container.querySelectorAll<HTMLButtonElement>('[data-toggle-matrix]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.toggleMatrix || '';
      onMatrixToggle(key);
    });
  });

  // Matrix level selection
  container.querySelectorAll<HTMLButtonElement>('[data-matrix-level]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [compId, lens, level] = (btn.dataset.matrixLevel || '').split('::');
      const entry = getEntry(compId, lens);
      entry.score = Number(level);
      onEntryUpdate(compId, lens, entry);
    });
  });

  // Add action button
  container.querySelectorAll<HTMLButtonElement>('[data-add-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [compId, lens] = (btn.dataset.addAction || '').split('::');
      const entry = getEntry(compId, lens);
      const newAction: DraftAction = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text: '',
        owner: '',
        timescale: '',
        status: 'Not Started'
      };
      entry.actions.push(newAction);
      onEntryUpdate(compId, lens, entry);
    });
  });

  // Action input fields
  container.querySelectorAll<HTMLInputElement>('[data-action-text]').forEach(input => {
    input.addEventListener('input', (e) => {
      const [compId, lens, actionId] = (input.dataset.actionText || '').split('::');
      const entry = getEntry(compId, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.text = (e.target as HTMLInputElement).value;
        onEntryUpdate(compId, lens, entry);
      }
    });
  });

  container.querySelectorAll<HTMLInputElement>('[data-action-owner]').forEach(input => {
    input.addEventListener('input', (e) => {
      const [compId, lens, actionId] = (input.dataset.actionOwner || '').split('::');
      const entry = getEntry(compId, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.owner = (e.target as HTMLInputElement).value;
        onEntryUpdate(compId, lens, entry);
      }
    });
  });

  container.querySelectorAll<HTMLInputElement>('[data-action-timescale]').forEach(input => {
    input.addEventListener('input', (e) => {
      const [compId, lens, actionId] = (input.dataset.actionTimescale || '').split('::');
      const entry = getEntry(compId, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.timescale = (e.target as HTMLInputElement).value;
        onEntryUpdate(compId, lens, entry);
      }
    });
  });

  container.querySelectorAll<HTMLSelectElement>('[data-action-status]').forEach(select => {
    select.addEventListener('change', (e) => {
      const [compId, lens, actionId] = (select.dataset.actionStatus || '').split('::');
      const entry = getEntry(compId, lens);
      const action = entry.actions.find(a => a.id === actionId);
      if (action) {
        action.status = (e.target as HTMLSelectElement).value;
        onEntryUpdate(compId, lens, entry);
      }
    });
  });

  // Remove action button
  container.querySelectorAll<HTMLButtonElement>('[data-remove-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const [compId, lens, actionId] = (btn.dataset.removeAction || '').split('::');
      onActionRemove(compId, lens, actionId);
    });
  });

  // Lens info button
  container.querySelectorAll<HTMLButtonElement>('[data-lens-info]').forEach(btn => {
    btn.addEventListener('click', () => {
      // Lens info modal will be triggered from parent
      console.log('Lens info:', btn.dataset.lensInfo);
    });
  });
}
