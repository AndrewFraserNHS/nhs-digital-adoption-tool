import { useState, useCallback, JSX, useEffect, useRef } from 'react';
import { nhsButtonPrimary, nhsFocusRing } from '../../styles/nhsTheme';

export interface AdoptionUserSettings {
  name: string;
  preferences: string;
  themeColor: string;
  profileImageDataUrl?: string;
  darkMode?: boolean;
  colorAccessibilityMode?: 'standard' | 'color-blind-friendly';
  phaseFocusMode?: 'auto' | 'manual';
  manualPhaseFocus?: number;
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
  darkMode?: boolean;
}

const PRESET_THEMES = [
  { name: 'NHS Blue', color: '#005eb8' },
  { name: 'Navy', color: '#003366' },
  { name: 'Teal', color: '#009b8a' },
  { name: 'Purple', color: '#6c28d9' },
  { name: 'Green', color: '#059669' },
  { name: 'Red', color: '#dc2626' },
];

export function SettingsPanel({
  userSettings,
  onUserSettingsUpdate,
  onLoadExampleData,
  onResetData,
  canUseCustomTheme = true,
  engagementGrade,
  engagementLevel,
  engagementXp,
  darkMode = false,
}: SettingsPanelProps): JSX.Element {
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [activeEngagementHelp, setActiveEngagementHelp] = useState<'grade' | 'level' | 'xp' | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSettings(userSettings);
  }, [userSettings]);

  const updateUserSettings = useCallback(
    (updates: Partial<AdoptionUserSettings>) => {
      const updated = { ...settings, ...updates };
      setSettings(updated);
      onUserSettingsUpdate(updated);
    },
    [settings, onUserSettingsUpdate]
  );

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

  const engagementHelp = {
    grade:
      'Your grade shows your overall engagement trend. S = excellent, A = strong, B = solid, C = steady, D = building, E = starting out.',
    level:
      'Your level reflects cumulative XP gained through consistent engagement. Higher levels unlock more personalised options and features.',
    xp: 'XP increases as you complete important actions, finalise months on time, and keep returning to the tool.',
  };

  const resolvedLevel = engagementLevel ?? 1;
  const resolvedXp = engagementXp ?? 0;
  const currentLevelFloorXp = Math.max(0, (resolvedLevel - 1) * 120);
  const xpIntoCurrentLevel = Math.max(0, resolvedXp - currentLevelFloorXp);
  const xpProgressPct = Math.max(0, Math.min(100, Math.round((xpIntoCurrentLevel / 120) * 100)));
  const xpToNextLevel = Math.max(0, resolvedLevel * 120 - resolvedXp);

  const engagementMetrics: Array<{
    key: 'grade' | 'level' | 'xp';
    label: string;
    value: string | number;
    tooltip: string;
  }> = [
    {
      key: 'grade',
      label: 'Grade',
      value: engagementGrade || 'N/A',
      tooltip: engagementHelp.grade,
    },
    {
      key: 'level',
      label: 'Level',
      value: resolvedLevel,
      tooltip: engagementHelp.level,
    },
    {
      key: 'xp',
      label: 'XP',
      value: resolvedXp,
      tooltip: engagementHelp.xp,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        Settings
      </h2>
      <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        Use this page to manage your profile, personal preferences, and support options.
      </p>

      {(engagementGrade || engagementLevel || engagementXp !== undefined) && (
        <div
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
        >
          <div>
            <h3
              className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Engagement and Progress
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              A quick view of how consistently the tool is being used over time.
            </p>
          </div>
          <div
            className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-md border p-4`}
          >
            <h4
              className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Engagement Summary
            </h4>
            <p className={`mb-3 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Tap the info icon beside each metric for a plain-language explanation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {engagementMetrics.map((metric) => (
                <div key={metric.key} className="relative">
                  <div className="flex items-center gap-1.5">
                    <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {metric.label}
                    </p>
                    <button
                      type="button"
                      aria-label={`${metric.label} information`}
                      aria-expanded={activeEngagementHelp === metric.key}
                      onClick={() =>
                        setActiveEngagementHelp((current) =>
                          current === metric.key ? null : metric.key
                        )
                      }
                      className={`inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#005eb8] text-[9px] font-bold text-[#005eb8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeb3b] ${darkMode ? 'bg-[#1d334f]' : 'bg-[#e8f1fb]'}`}
                    >
                      i
                    </button>
                  </div>
                  <p
                    className={`text-lg font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                  >
                    {metric.value}
                  </p>
                  {activeEngagementHelp === metric.key ? (
                    <div
                      className={`absolute left-0 top-11 z-10 w-64 rounded-md border px-3 py-2 text-xs shadow-lg ${
                        darkMode
                          ? 'border-slate-600 bg-slate-800 text-slate-100'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      {metric.tooltip}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between gap-2">
                <p className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Progress to next level
                </p>
                <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {xpToNextLevel} XP to Level {resolvedLevel + 1}
                </p>
              </div>
              <div
                className={`mt-1 h-2.5 w-full overflow-hidden rounded-full ${
                  darkMode ? 'bg-slate-700' : 'bg-slate-200'
                }`}
              >
                <div
                  className="h-full rounded-full bg-[#005eb8] transition-all"
                  style={{ width: `${xpProgressPct}%` }}
                />
              </div>
            </div>
            <p className={`mt-3 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              This reflects consistency over time, not perfection. Small, regular updates are what
              move this forwards.
            </p>
          </div>
        </div>
      )}

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-5`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Your Profile
          </h3>
          <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            These details personalise your experience and reports.
          </p>
        </div>

        <div>
          <label
            htmlFor="user-name"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            Your Name
          </label>
          <input
            id="user-name"
            type="text"
            className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            value={settings.name}
            onChange={(e) => updateUserSettings({ name: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="user-preferences"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            Preferences
          </label>
          <textarea
            id="user-preferences"
            className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 h-24 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            value={settings.preferences}
            onChange={(e) => updateUserSettings({ preferences: e.target.value })}
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium mb-2 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            Profile Picture
          </label>
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
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${darkMode ? 'bg-slate-700 text-slate-100 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              >
                {settings.profileImageDataUrl ? 'Change Picture' : 'Upload Picture'}
              </button>
              {settings.profileImageDataUrl ? (
                <button
                  type="button"
                  onClick={handleRemoveProfileImage}
                  className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${darkMode ? 'border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25' : 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100'}`}
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
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Appearance
          </h3>
          <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Choose the theme colour you want to use throughout the app.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
          >
            <span>Dark mode</span>
            <input
              type="checkbox"
              checked={Boolean(settings.darkMode)}
              onChange={(e) => updateUserSettings({ darkMode: e.target.checked })}
              className="h-4 w-4"
            />
          </label>

          <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
            <span className="mb-1 block font-medium">Status colour profile</span>
            <select
              value={settings.colorAccessibilityMode || 'standard'}
              onChange={(e) =>
                updateUserSettings({
                  colorAccessibilityMode: e.target.value as 'standard' | 'color-blind-friendly',
                })
              }
              className={`w-full rounded-md border p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            >
              <option value="standard">Standard</option>
              <option value="color-blind-friendly">Color-blind friendly</option>
            </select>
          </label>
        </div>

        <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Color-blind friendly mode keeps BRAG labels in text and shifts status colors to
          higher-contrast alternatives.
        </p>

        <div>
          <label
            htmlFor="user-theme-colour"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
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
                    backgroundColor:
                      settings.themeColor === theme.color ? `${theme.color}22` : 'transparent',
                  }}
                >
                  <span
                    className="h-4 w-4 rounded-sm border border-slate-300"
                    style={{ backgroundColor: theme.color }}
                  />
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
              <span
                className={`text-sm font-mono ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
              >
                {settings.themeColor}
              </span>
              {!canUseCustomTheme ? (
                <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Unlocks at level 3
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Data and Support
          </h3>
          <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Load sample data, reset local data, read FAQs, or report an issue.
          </p>
        </div>

        <div
          className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-md border p-4`}
        >
          <h4 className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Data Tools
          </h4>
          <div className="mt-3 flex flex-wrap gap-3">
            <button onClick={onLoadExampleData} className={nhsButtonPrimary}>
              Example Data
            </button>
            <button
              onClick={onResetData}
              className={`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${nhsFocusRing}`}
            >
              Reset Data
            </button>
          </div>
          <p className={`mt-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Example Data loads sample assessment content so you can explore the dashboards quickly.
          </p>
        </div>

        <details
          className={`rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200'}`}
        >
          <summary
            className={`cursor-pointer text-sm font-medium ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
          >
            How is my data stored?
          </summary>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Your settings and assessment state are stored locally in your browser using local
            storage.
          </p>
        </details>
        <details
          className={`rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200'}`}
        >
          <summary
            className={`cursor-pointer text-sm font-medium ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
          >
            What does Example Data do?
          </summary>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            It populates the tool with the included sample JSON so you can explore dashboards and
            workflows quickly.
          </p>
        </details>
        <details
          className={`rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200'}`}
        >
          <summary
            className={`cursor-pointer text-sm font-medium ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
          >
            Can I change the theme colour later?
          </summary>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Yes. Update the theme colour at any time in User Settings and it is applied immediately.
          </p>
        </details>

        <div
          className={`rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200'}`}
        >
          <h4
            className={`mb-2 text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
          >
            Submit a Bug
          </h4>
          <p className={`mb-3 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Found an issue? Send details directly via email.
          </p>
          <a
            href="mailto:andrew.fraser22@kpmg.co.uk?subject=NHS%20Digital%20Adoption%20Tool%20Bug"
            className={`inline-flex rounded-md px-4 py-2 text-sm font-medium transition-colors ${darkMode ? 'bg-slate-700 text-slate-100 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
          >
            Report Bug
          </a>
        </div>
      </div>
    </div>
  );
}
