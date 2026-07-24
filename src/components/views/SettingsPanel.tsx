import { useState, useCallback, JSX, useEffect } from 'react';
import { OrgProfile } from '@lib/adoptionState';
import { validateOrgProfile } from '@lib/adoptionValidator';

export interface AdoptionUserSettings {
  name: string;
  preferences: string;
  themeColor: string;
}

export interface SettingsPanelProps {
  orgProfile: OrgProfile;
  userSettings: AdoptionUserSettings;
  onProfileUpdate: (profile: OrgProfile) => void;
  onUserSettingsUpdate: (settings: AdoptionUserSettings) => void;
  onLoadExampleData: () => void;
  onResetData: () => void;
}

export function SettingsPanel({
  orgProfile,
  userSettings,
  onProfileUpdate,
  onUserSettingsUpdate,
  onLoadExampleData,
  onResetData
}: SettingsPanelProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);

  useEffect(() => {
    setProfile(orgProfile);
  }, [orgProfile]);

  useEffect(() => {
    setSettings(userSettings);
  }, [userSettings]);

  const handleTrustChange = useCallback((value: string) => {
    const updated = { ...profile, trustName: value };
    setProfile(updated);

    const validation = validateOrgProfile(updated);
    if (!validation.isValid) {
      console.warn('Organization profile validation errors:', validation.errors);
    }

    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handleProjectChange = useCallback((value: string) => {
    const updated = { ...profile, projectName: value };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handleLeadChange = useCallback((value: string) => {
    const updated = { ...profile, leadName: value };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const updateUserSettings = useCallback((updates: Partial<AdoptionUserSettings>) => {
    const updated = { ...settings, ...updates };
    setSettings(updated);
    onUserSettingsUpdate(updated);
  }, [settings, onUserSettingsUpdate]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Settings</h2>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-6">
        <h3 className="text-lg font-semibold text-slate-800">Organisation Settings</h3>
        <div>
          <label htmlFor="org-trust-name" className="block text-sm font-medium text-slate-700 mb-1">
            NHS Trust / Organisation Name
          </label>
          <input
            id="org-trust-name"
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={profile.trustName}
            onChange={(e) => handleTrustChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="org-project-name" className="block text-sm font-medium text-slate-700 mb-1">
            Programme / Project Name
          </label>
          <input
            id="org-project-name"
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={profile.projectName || ''}
            onChange={(e) => handleProjectChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="org-lead-name" className="block text-sm font-medium text-slate-700 mb-1">
            Lead Submitter (Change Lead)
          </label>
          <input
            id="org-lead-name"
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={profile.leadName || ''}
            onChange={(e) => handleLeadChange(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-5">
        <h3 className="text-lg font-semibold text-slate-800">User Settings</h3>
        <div>
          <label htmlFor="user-name" className="block text-sm font-medium text-slate-700 mb-1">
            Your Name
          </label>
          <input
            id="user-name"
            type="text"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            value={settings.name}
            onChange={(e) => updateUserSettings({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="user-preferences" className="block text-sm font-medium text-slate-700 mb-1">
            Preferences
          </label>
          <textarea
            id="user-preferences"
            className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 h-24"
            value={settings.preferences}
            onChange={(e) => updateUserSettings({ preferences: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="user-theme-colour" className="block text-sm font-medium text-slate-700 mb-1">
            Theme Colour
          </label>
          <div className="flex items-center gap-3">
            <input
              id="user-theme-colour"
              type="color"
              className="h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer"
              value={settings.themeColor}
              onChange={(e) => updateUserSettings({ themeColor: e.target.value })}
            />
            <span className="text-sm text-slate-600 font-mono">{settings.themeColor}</span>
          </div>
        </div>
        <div className="pt-2">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onLoadExampleData}
              className="text-sm px-4 py-2 bg-[#005eb8] text-white hover:bg-blue-700 rounded-md font-medium transition-colors"
            >
              Example Data
            </button>
            <button
              onClick={onResetData}
              className="text-sm px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-md font-medium transition-colors"
            >
              Reset Data
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Loads existing sample assessment data from the repository.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">FAQs</h3>
        <details className="border border-slate-200 rounded-md p-3">
          <summary className="cursor-pointer text-sm font-medium text-slate-700">How is my data stored?</summary>
          <p className="mt-2 text-sm text-slate-600">Your settings and assessment state are stored locally in your browser using local storage.</p>
        </details>
        <details className="border border-slate-200 rounded-md p-3">
          <summary className="cursor-pointer text-sm font-medium text-slate-700">What does Example Data do?</summary>
          <p className="mt-2 text-sm text-slate-600">It populates the tool with the included sample JSON so you can explore dashboards and workflows quickly.</p>
        </details>
        <details className="border border-slate-200 rounded-md p-3">
          <summary className="cursor-pointer text-sm font-medium text-slate-700">Can I change the theme colour later?</summary>
          <p className="mt-2 text-sm text-slate-600">Yes. Update the theme colour at any time in User Settings and it is applied immediately.</p>
        </details>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Submit a Bug</h3>
        <p className="text-sm text-slate-600 mb-4">Found an issue? Send details directly via email.</p>
        <a
          href="mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug"
          className="inline-flex text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors"
        >
          Report Bug
        </a>
      </div>
    </div>
  );
}
