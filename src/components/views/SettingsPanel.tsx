import { useState, useCallback, JSX, useEffect } from 'react';
import { nhsFocusRing } from '../../styles/nhsTheme';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';

export interface AdoptionUserSettings {
  name: string;
  preferences: string;
  themeColor: string;
  profileImageDataUrl?: string;
  darkMode?: boolean;
  colorAccessibilityMode?: 'standard' | 'color-blind-friendly';
  phaseFocusMode?: 'auto' | 'manual';
  manualPhaseFocus?: number;
  hideGuidedWorkflow?: boolean;
  showAdditionalGuidanceLinks?: boolean;
  /** Per-device override: force-show the CST Personalisation page's External Links section even after it's marked initiated. */
  showExternalLinksSection?: boolean;
}

export interface SettingsPanelProps {
  userSettings: AdoptionUserSettings;
  onUserSettingsUpdate: (settings: AdoptionUserSettings) => void;
  onLoadExampleData: (profile: 'red' | 'amber' | 'green') => void;
  onResetData: () => void;
  canUseCustomTheme?: boolean;
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
  darkMode = false,
}: SettingsPanelProps): JSX.Element {
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);
  const pageIntro = usePageIntroSeen('settings');

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

  const handlePresetTheme = (color: string) => {
    updateUserSettings({ themeColor: color });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Settings
        </h2>
        <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
      </div>
      <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        Use this page to manage app appearance, guidance preferences, and data/support options.
      </p>
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Settings"
        darkMode={darkMode}
        body={
          <p>
            Manage app-wide appearance (theme, dark mode, guided-workflow and guidance-link
            preferences) and data/support tools like example data, reset, and bug reporting. For
            your personal profile and engagement progress, see the Profile page.
          </p>
        }
      />

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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
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

          <label
            className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
          >
            <span>Show guided workflow tips on each component</span>
            <input
              type="checkbox"
              checked={!settings.hideGuidedWorkflow}
              onChange={(e) => updateUserSettings({ hideGuidedWorkflow: !e.target.checked })}
              className="h-4 w-4"
            />
          </label>

          <label
            className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
          >
            <span>Show additional guidance links (alongside core links)</span>
            <input
              type="checkbox"
              checked={settings.showAdditionalGuidanceLinks !== false}
              onChange={(e) =>
                updateUserSettings({ showAdditionalGuidanceLinks: e.target.checked })
              }
              className="h-4 w-4"
            />
          </label>

          <label
            className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
          >
            <span>
              Show external links section (CST Personalisation, even after marked initiated)
            </span>
            <input
              type="checkbox"
              checked={settings.showExternalLinksSection === true}
              onChange={(e) =>
                updateUserSettings({ showExternalLinksSection: e.target.checked })
              }
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
            <button
              onClick={() => onLoadExampleData('red')}
              className="inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-800 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors"
            >
              Early Stage Example
            </button>
            <button
              onClick={() => onLoadExampleData('amber')}
              className="inline-flex items-center justify-center rounded-md bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 border border-amber-200 shadow-[0_3px_0_#fde68a] hover:bg-amber-100 transition-colors"
            >
              Progressing Example
            </button>
            <button
              onClick={() => onLoadExampleData('green')}
              className="inline-flex items-center justify-center rounded-md bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 border border-green-200 shadow-[0_3px_0_#bbf7d0] hover:bg-green-100 transition-colors"
            >
              Exemplar Example
            </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
            <button
              onClick={onResetData}
              className={`inline-flex items-center justify-center rounded-md bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 border border-red-200 shadow-[0_3px_0_#fecaca] hover:bg-red-100 transition-colors ${nhsFocusRing}`}
            >
              Reset Data
            </button>
          </div>
          <p className={`mt-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Each Example Data button loads a full sample assessment at a different maturity stage,
            so you can explore the dashboards and workflows quickly.
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
            Each button populates the tool with a full sample assessment at that maturity stage
            (Red: early stage, Amber: progressing, Green: near exemplar) so you can explore
            dashboards and workflows quickly.
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
