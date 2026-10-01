import { useCallback, useEffect, useRef, useState, type JSX } from 'react';
import type { OrgProfile } from '@lib/adoptionState';
import type { EngagementObjective } from '@lib/adoptionMetrics';
import type { AdoptionUserSettings } from './SettingsPanel';
import {
  PageHelpButton,
  PageIntroModal,
  usePageIntroSeen,
} from '@components/onboarding/PageIntroModal';
import { nhsButtonSecondary } from '../../styles/nhsTheme';

export interface ProfilePageProps {
  orgProfile: OrgProfile;
  userSettings: AdoptionUserSettings;
  onUserSettingsUpdate: (settings: AdoptionUserSettings) => void;
  currentUserId?: string;
  onCurrentUserChange: (id: string) => void;
  objectives?: EngagementObjective[];
  darkMode?: boolean;
  /** Exports the JSON CST and Audit PDF - the same pair offered by the first-of-month reminder, available here any time. */
  onSendProgressUpdate?: () => void;
}

const OBJECTIVES_PREVIEW_COUNT = 4;

export function ProfilePage({
  orgProfile,
  userSettings,
  onUserSettingsUpdate,
  currentUserId,
  onCurrentUserChange,
  objectives = [],
  darkMode = false,
  onSendProgressUpdate,
}: ProfilePageProps): JSX.Element {
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [showAllObjectives, setShowAllObjectives] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pageIntro = usePageIntroSeen('profile');

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

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Profile
        </h2>
        <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
      </div>
      <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        Your identity and progress towards your objectives.
      </p>
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Profile"
        darkMode={darkMode}
        body={
          <p>
            Set your name, preferences and picture, and see how many objectives are complete.
          </p>
        }
      />

      {objectives.length > 0 && (
        <div
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-3`}
        >
          <div>
            <h3
              className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Objectives
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {objectives.filter((o) => o.completed).length}/{objectives.length} complete - based on
              phase readiness, ownership, cadence and team participation.
            </p>
          </div>
          <div className="space-y-2">
            {(showAllObjectives ? objectives : objectives.slice(0, OBJECTIVES_PREVIEW_COUNT)).map(
              (objective) => (
                <div
                  key={objective.id}
                  className={`rounded-lg border p-3 ${
                    objective.completed
                      ? 'border-green-200 bg-green-50'
                      : darkMode
                        ? 'border-slate-700 bg-slate-900'
                        : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                    >
                      {objective.label}
                    </p>
                    <span className="text-xs font-bold shrink-0">
                      {objective.completed ? 'Done' : 'Not yet'}
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {objective.description}
                  </p>
                </div>
              )
            )}
          </div>
          {objectives.length > OBJECTIVES_PREVIEW_COUNT && (
            <button
              type="button"
              onClick={() => setShowAllObjectives((current) => !current)}
              className={`text-sm font-semibold underline ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-blue-800'}`}
            >
              {showAllObjectives
                ? 'Show fewer'
                : `Show ${objectives.length - OBJECTIVES_PREVIEW_COUNT} more`}
            </button>
          )}
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
            htmlFor="user-current-member"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            You are signed in as
          </label>
          {(orgProfile.teamMembers || []).length > 0 ? (
            <select
              id="user-current-member"
              value={currentUserId || ''}
              onChange={(e) => onCurrentUserChange(e.target.value)}
              className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            >
              <option value="">Not selected</option>
              {(orgProfile.teamMembers || []).map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name || 'Unnamed'}
                  {member.role ? ` - ${member.role}` : ''}
                </option>
              ))}
            </select>
          ) : (
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No team members have been added yet. Add yourself under CST Details → Team Members to
              link your profile.
            </p>
          )}
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

      {onSendProgressUpdate ? (
        <div
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-3`}
        >
          <div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
              Update anyone on progress
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Exports the JSON CST (organisation profile) and the Audit PDF together - the same
              pair offered automatically on the first of each month.
            </p>
          </div>
          <button type="button" onClick={onSendProgressUpdate} className={nhsButtonSecondary}>
            Export JSON CST &amp; Audit PDF
          </button>
        </div>
      ) : null}
    </div>
  );
}
