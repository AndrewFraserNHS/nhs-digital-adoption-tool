import { useState, useCallback, JSX, useEffect, useRef } from 'react';
import { OrgProfile } from '@lib/adoptionState';
import { validateOrgProfile } from '@lib/adoptionValidator';
import { CST_TYPE_OPTIONS, PATHWAY_OPTIONS, type CstPathwayKey, type CstType } from '@data/cst';

export interface AdoptionUserSettings {
  name: string;
  preferences: string;
  themeColor: string;
  profileImageDataUrl?: string;
}

export interface SettingsPanelProps {
  orgProfile: OrgProfile;
  userSettings: AdoptionUserSettings;
  onProfileUpdate: (profile: OrgProfile) => void;
  onUserSettingsUpdate: (settings: AdoptionUserSettings) => void;
  onLoadExampleData: () => void;
  onResetData: () => void;
  canUseCustomTheme?: boolean;
  engagementGrade?: string;
  engagementLevel?: number;
  engagementXp?: number;
}

const PRESET_THEMES = [
  { name: 'NHS Blue', color: '#005eb8' },
  { name: 'Navy', color: '#003366' },
  { name: 'Teal', color: '#009b8a' },
  { name: 'Purple', color: '#6c28d9' },
  { name: 'Green', color: '#059669' },
  { name: 'Red', color: '#dc2626' }
];

export function SettingsPanel({
  orgProfile,
  userSettings,
  onProfileUpdate,
  onUserSettingsUpdate,
  onLoadExampleData,
  onResetData,
  canUseCustomTheme = true,
  engagementGrade,
  engagementLevel,
  engagementXp
}: SettingsPanelProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);
  const [fileInputKey, setFileInputKey] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profileValidation = validateOrgProfile(profile);

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

  const handleCstTypeChange = useCallback((value: CstType) => {
    const updated = {
      ...profile,
      cst: {
        ...profile.cst,
        type: value
      }
    };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handlePathwayChange = useCallback((value: CstPathwayKey) => {
    const updated = {
      ...profile,
      cst: {
        ...profile.cst,
        pathway: value
      }
    };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handleCstDateChange = useCallback((field: 'goLiveDate' | 'fullAdoptionDate' | 'benefitRealizationDate', value: string) => {
    const updated = {
      ...profile,
      cst: {
        ...profile.cst,
        [field]: value
      }
    };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const updateUserSettings = useCallback((updates: Partial<AdoptionUserSettings>) => {
    const updated = { ...settings, ...updates };
    setSettings(updated);
    onUserSettingsUpdate(updated);
  }, [settings, onUserSettingsUpdate]);

  const handleProfileImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('Unable to read selected profile image.'));
      reader.readAsDataURL(file);
    });

    updateUserSettings({ profileImageDataUrl: dataUrl });
    setFileInputKey((current) => current + 1);
  };

  const handleRemoveProfileImage = () => {
    updateUserSettings({ profileImageDataUrl: undefined });
  };

  const handlePresetTheme = (color: string) => {
    updateUserSettings({ themeColor: color });
  };

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

        <div className="rounded-md border border-slate-200 bg-slate-50 p-4 space-y-4">
          <h4 className="text-sm font-semibold text-slate-800">Context Specific Template (CST)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cst-type" className="block text-sm font-medium text-slate-700 mb-1">
                CST Type
              </label>
              <select
                id="cst-type"
                className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                value={profile.cst.type}
                onChange={(event) => handleCstTypeChange(event.target.value as CstType)}
              >
                {CST_TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cst-pathway" className="block text-sm font-medium text-slate-700 mb-1">
                Pathway
              </label>
              <select
                id="cst-pathway"
                className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                value={profile.cst.pathway}
                onChange={(event) => handlePathwayChange(event.target.value as CstPathwayKey)}
              >
                {PATHWAY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="cst-go-live" className="block text-sm font-medium text-slate-700 mb-1">
                Go Live Date (required)
              </label>
              <input
                id="cst-go-live"
                type="date"
                className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                value={profile.cst.goLiveDate}
                onChange={(event) => handleCstDateChange('goLiveDate', event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="cst-full-adoption" className="block text-sm font-medium text-slate-700 mb-1">
                Full Adoption Date (optional)
              </label>
              <input
                id="cst-full-adoption"
                type="date"
                className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                value={profile.cst.fullAdoptionDate}
                onChange={(event) => handleCstDateChange('fullAdoptionDate', event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="cst-benefit" className="block text-sm font-medium text-slate-700 mb-1">
                Benefit Realization Date (optional)
              </label>
              <input
                id="cst-benefit"
                type="date"
                className="w-full rounded-md border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                value={profile.cst.benefitRealizationDate}
                onChange={(event) => handleCstDateChange('benefitRealizationDate', event.target.value)}
              />
            </div>
          </div>

          {profileValidation.errors.filter((error) => error.field.startsWith('cst.')).length > 0 ? (
            <div className="rounded-md border border-amber-300 bg-amber-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">CST validation warnings</p>
              <ul className="mt-2 space-y-1 text-sm text-amber-900">
                {profileValidation.errors
                  .filter((error) => error.field.startsWith('cst.'))
                  .map((error) => (
                    <li key={error.field + error.message}>- {error.message}</li>
                  ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-5">
        <h3 className="text-lg font-semibold text-slate-800">User Settings</h3>

        {(engagementGrade || engagementLevel || engagementXp !== undefined) && (
          <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-slate-800 mb-2">Engagement Summary</h4>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-xs text-slate-600">Grade</p>
                <p className="text-lg font-bold text-slate-800">{engagementGrade || 'N/A'}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">Level</p>
                <p className="text-lg font-bold text-slate-800">{engagementLevel ?? 1}</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">XP</p>
                <p className="text-lg font-bold text-slate-800">{engagementXp ?? 0}</p>
              </div>
            </div>
          </div>
        )}

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
          <label className="block text-sm font-medium text-slate-700 mb-2">Profile Picture</label>
          <div className="flex items-start gap-4">
            {settings.profileImageDataUrl ? (
              <img
                src={settings.profileImageDataUrl}
                alt="Profile"
                className="h-20 w-20 rounded-md border border-slate-300 object-cover"
              />
            ) : (
              <div className="h-20 w-20 rounded-md border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
                <span className="text-xs text-slate-500">No image</span>
              </div>
            )}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-sm px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium"
              >
                {settings.profileImageDataUrl ? 'Change Picture' : 'Upload Picture'}
              </button>
              {settings.profileImageDataUrl ? (
                <button
                  type="button"
                  onClick={handleRemoveProfileImage}
                  className="text-sm px-3 py-2 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-md font-medium"
                >
                  Remove
                </button>
              ) : null}
              <input
                key={fileInputKey}
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageUpload}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="user-theme-colour" className="block text-sm font-medium text-slate-700 mb-1">
            Theme Colour
          </label>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {PRESET_THEMES.map((theme) => (
                <button
                  type="button"
                  key={theme.color}
                  onClick={() => handlePresetTheme(theme.color)}
                  className="flex items-center gap-2 rounded-md border-2 px-3 py-2 text-sm"
                  style={{
                    borderColor: settings.themeColor === theme.color ? theme.color : '#e2e8f0',
                    backgroundColor: settings.themeColor === theme.color ? `${theme.color}22` : 'transparent'
                  }}
                >
                  <span className="h-4 w-4 rounded-sm border border-slate-300" style={{ backgroundColor: theme.color }} />
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
            <input
              id="user-theme-colour"
              type="color"
              className="h-10 w-14 rounded border border-slate-300 p-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              value={settings.themeColor}
              onChange={(e) => updateUserSettings({ themeColor: e.target.value })}
              disabled={!canUseCustomTheme}
            />
            <span className="text-sm text-slate-600 font-mono">{settings.themeColor}</span>
            {!canUseCustomTheme ? <span className="text-xs text-slate-500">Unlocks at level 3</span> : null}
            </div>
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
