/**
 * Lens Info Modal Component
 * Displays detailed information about a strategic lens
 */

import { escapeHtml } from '@lib/utils';
import { LENS_INFO } from '@data/lenses';

export interface LensInfoModalContext {
  lensName: string;
  onClose: () => void;
}

/**
 * Render lens info modal
 */
export function renderLensInfoModal(context: LensInfoModalContext): string {
  const { lensName } = context;
  if (!lensName || !LENS_INFO[lensName]) {
return '';
}

  const info = LENS_INFO[lensName];
  
  return `
    <div id="lens-info-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-slate-50 border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 class="text-2xl font-bold text-slate-800">${escapeHtml(lensName)}</h2>
          <button id="close-lens-info-modal" class="text-slate-500 hover:text-slate-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-4 text-slate-700">
          <div>
            <h3 class="font-bold text-lg text-slate-800 mb-2">Overview</h3>
            <p class="whitespace-pre-wrap">${escapeHtml(info.overview || '')}</p>
          </div>
          ${info.keyAreas ? `<div>
            <h3 class="font-bold text-lg text-slate-800 mb-2">Key Areas</h3>
            <ul class="list-disc list-inside space-y-1">${info.keyAreas.map(area => `<li>${escapeHtml(area)}</li>`).join('')}</ul>
          </div>` : ''}
          ${info.questions ? `<div>
            <h3 class="font-bold text-lg text-slate-800 mb-2">Guiding Questions</h3>
            <ul class="space-y-2">${info.questions.map(q => `<li class="flex gap-2"><span class="text-[#005eb8] font-bold">•</span><span>${escapeHtml(q)}</span></li>`).join('')}</ul>
          </div>` : ''}
        </div>
      </div>
    </div>
  `;
}

/**
 * Bind lens info modal events
 */
export function bindLensInfoModalEvents(container: HTMLElement, context: LensInfoModalContext): void {
  const closeBtn = container.querySelector<HTMLButtonElement>('#close-lens-info-modal');
  closeBtn?.addEventListener('click', context.onClose);
  
  // Close modal when clicking outside
  container.querySelector('#lens-info-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      context.onClose();
    }
  });
}
