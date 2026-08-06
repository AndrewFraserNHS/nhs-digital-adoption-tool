import { useState, useCallback, JSX, useEffect, useRef } from 'react';
import { nhsButtonPrimary, nhsFocusRing } from '../../styles/nhsTheme';

export interface AdoptionUserSettings {
  name: string;
  preferences: string;
  themeColor: string;
  profileImageDataUrl?: string;
}

export interface SettingsPanelProps {
  userSettings: AdoptionUserSettings;
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
  userSettings,
  onUserSettingsUpdate,
  onLoadExampleData,
  onResetData,
  canUseCustomTheme = true,
  engagementGrade,
  engagementLevel,
  engagementXp
}: SettingsPanelProps): JSX.Element {
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);
  const [fileInputKey, setFileInputKey] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSettings(userSettings);
  }, [userSettings]);

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
            className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
            className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24"
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
              className={nhsButtonPrimary}
            >
              Example Data
            </button>
            <button
              onClick={onResetData}
              className={`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${nhsFocusRing}`}
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
