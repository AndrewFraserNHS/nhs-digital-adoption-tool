/**
 * Settings Panel View Component
 * Displays and manages organization profile settings
 */

import { escapeHtml } from '@lib/utils';
import { OrgProfile } from '@lib/adoptionState';
import { validateOrgProfile } from '@lib/adoptionValidator';

export interface SettingsPanelContext {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
}

/**
 * Render and mount the settings panel view
 */
export function mountSettingsPanel(container: HTMLElement, context: SettingsPanelContext): void {
  container.innerHTML = renderSettingsPanelHtml(context);
  bindSettingsPanelEvents(container, context);
}

/**
 * Render settings panel HTML
 */
function renderSettingsPanelHtml(context: SettingsPanelContext): string {
  const { orgProfile } = context;

  return `
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-slate-800 mb-6">Organisation Settings</h2>
      <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">NHS Trust / Organisation Name</label>
          <input id="setting-trust-name" class="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" value="${escapeHtml(orgProfile.trustName)}">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Programme / Project Name</label>
          <input id="setting-project-name" class="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" value="${escapeHtml(orgProfile.projectName || '')}">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">Lead Submitter (Change Lead)</label>
          <input id="setting-lead-name" class="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" value="${escapeHtml(orgProfile.leadName || '')}">
        </div>
      </div>
    </div>
  `;
}

/**
 * Bind event listeners for settings panel
 */
function bindSettingsPanelEvents(container: HTMLElement, context: SettingsPanelContext): void {
  const { orgProfile, onProfileUpdate } = context;

  const trust = document.getElementById('setting-trust-name') as HTMLInputElement | null;
  trust?.addEventListener('input', () => {
    orgProfile.trustName = trust.value;
    
    // Validate the updated profile
    const validation = validateOrgProfile(orgProfile);
    if (!validation.isValid) {
      console.warn('Organization profile validation errors:', validation.errors);
    }
    
    onProfileUpdate(orgProfile);
  });

  const project = document.getElementById('setting-project-name') as HTMLInputElement | null;
  project?.addEventListener('input', () => {
    (orgProfile as any).projectName = project.value;
    onProfileUpdate(orgProfile);
  });

  const lead = document.getElementById('setting-lead-name') as HTMLInputElement | null;
  lead?.addEventListener('input', () => {
    (orgProfile as any).leadName = lead.value;
    onProfileUpdate(orgProfile);
  });
}
