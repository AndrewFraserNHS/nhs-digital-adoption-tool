import { useCallback, useEffect, useRef, useState, type JSX } from 'react';
import type { OrgProfile } from '@lib/adoptionState';
import {
  COMPETENCE_OPTIONS,
  CONFIDENCE_OPTIONS,
  OVERARCHING_PHASES,
  type CompetenceGrade,
  type ConfidenceScore,
  type OverarchingPhase,
} from '@data/cst';
import type { AdoptionUserSettings } from './SettingsPanel';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';

const PHASE_SUMMARY: Record<OverarchingPhase, string> = {
  1: 'Pre go-live planning and early mobilisation.',
  2: 'Go-live readiness and immediate launch support.',
  3: 'Early adoption reinforcement and consistency.',
  4: 'Embedding new ways of working across teams.',
  5: 'Sustained adoption and benefits realisation at scale.',
};

const CONFIDENCE_LABELS: Record<ConfidenceScore, string> = {
  1: 'Low confidence',
  2: 'Some confidence',
  3: 'Moderate confidence',
  4: 'High confidence',
  5: 'Very high confidence',
};

const COMPETENCE_LABELS: Record<CompetenceGrade, string> = {
  E: 'Not started embedding',
  D: 'Early adoption in practice',
  C: 'Partly embedded in practice',
  B: 'Mostly embedded in practice',
  A: 'Well embedded in practice',
};

function getConfidenceBand(confidence: ConfidenceScore): 'high' | 'average' | 'below' {
  if (confidence >= 4) {
    return 'high';
  }
  if (confidence === 3) {
    return 'average';
  }
  return 'below';
}

function getCapabilityBand(competence: CompetenceGrade): 'high' | 'average' | 'below' {
  if (competence === 'A' || competence === 'B') {
    return 'high';
  }
  if (competence === 'C') {
    return 'average';
  }
  return 'below';
}

function getPhaseBrag(
  competence: CompetenceGrade,
  confidence: ConfidenceScore
): 'Blue' | 'Green' | 'Amber' | 'Red' {
  const capabilityBand = getCapabilityBand(competence);
  const confidenceBand = getConfidenceBand(confidence);

  const bothHigh = capabilityBand === 'high' && confidenceBand === 'high';
  const bothBelowAverage = capabilityBand === 'below' && confidenceBand === 'below';
  const eitherHighOtherAverageOrAbove =
    (capabilityBand === 'high' && confidenceBand !== 'below') ||
    (confidenceBand === 'high' && capabilityBand !== 'below');

  if (bothHigh) {
    return 'Blue';
  }
  if (bothBelowAverage) {
    return 'Red';
  }
  if (eitherHighOtherAverageOrAbove) {
    return 'Green';
  }
  return 'Amber';
}

export interface ProfilePageProps {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
  userSettings: AdoptionUserSettings;
  onUserSettingsUpdate: (settings: AdoptionUserSettings) => void;
  engagementGrade?: string;
  engagementLevel?: number;
  engagementXp?: number;
  darkMode?: boolean;
}

export function ProfilePage({
  orgProfile,
  onProfileUpdate,
  userSettings,
  onUserSettingsUpdate,
  engagementGrade,
  engagementLevel,
  engagementXp,
  darkMode = false,
}: ProfilePageProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);
  const [settings, setSettings] = useState<AdoptionUserSettings>(userSettings);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [activeEngagementHelp, setActiveEngagementHelp] = useState<'grade' | 'level' | 'xp' | null>(
    null
  );
  const [activePhaseHelp, setActivePhaseHelp] = useState<OverarchingPhase | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pageIntro = usePageIntroSeen('profile');

  useEffect(() => {
    setProfile(orgProfile);
  }, [orgProfile]);

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

  const handlePhaseCapabilityChange = useCallback(
    (
      phase: OverarchingPhase,
      field: 'competence' | 'confidence',
      value: CompetenceGrade | ConfidenceScore
    ) => {
      const current = profile.cst.phaseCapability[phase] || { competence: 'C', confidence: 3 };
      const updated = {
        ...profile,
        cst: {
          ...profile.cst,
          phaseCapability: {
            ...profile.cst.phaseCapability,
            [phase]: {
              competence: current.competence,
              confidence: current.confidence,
              assessedAt: new Date().toISOString(),
              reason: 'manual',
              [field]: value,
            },
          },
        },
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

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
    { key: 'grade', label: 'Grade', value: engagementGrade || 'N/A', tooltip: engagementHelp.grade },
    { key: 'level', label: 'Level', value: resolvedLevel, tooltip: engagementHelp.level },
    { key: 'xp', label: 'XP', value: resolvedXp, tooltip: engagementHelp.xp },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Profile
        </h2>
        <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
      </div>
      <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        Your identity, engagement progress, and confidence/capability self-assessment.
      </p>
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Profile"
        darkMode={darkMode}
        body={
          <p>
            Set your name, preferences and picture, track your engagement grade/level/XP, and
            record your team's confidence and delivery-readiness capability at each phase.
          </p>
        }
      />

      {(engagementGrade || engagementLevel || engagementXp !== undefined) && (
        <div
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
        >
          <div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
              Engagement and Progress
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              A quick view of how consistently the tool is being used over time.
            </p>
          </div>
          <div
            className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-md border p-4`}
          >
            <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
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
                  <p className={`text-lg font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
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
            Confidence and Capability by Phase
          </h3>
          <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Capture your starting position, then refresh when readiness phase changes or after
            major milestones.
          </p>
        </div>

        <div className="rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900">
          <p className="font-semibold">How this self-assessment works</p>
          <p className="mt-1">
            Confidence is how sure your team feels. Delivery readiness is how embedded the new way
            of working is in practice.
          </p>
          <p className="mt-1">
            Cards use BRAG backgrounds: Blue = both high, Green = one high and the other at least
            average, Amber = neither high, Red = both below average.
          </p>
        </div>

        <div className="space-y-3">
          {OVERARCHING_PHASES.map((phase) => {
            const value = profile.cst.phaseCapability[phase] || {
              competence: 'C',
              confidence: 3,
            };
            const brag = getPhaseBrag(value.competence, value.confidence);
            const bragCardClass =
              brag === 'Blue'
                ? 'border-sky-300 bg-sky-50'
                : brag === 'Green'
                  ? 'border-emerald-300 bg-emerald-50'
                  : brag === 'Red'
                    ? 'border-red-300 bg-red-50'
                    : 'border-amber-300 bg-amber-50';
            const bragLabelClass =
              brag === 'Blue'
                ? 'text-sky-800 bg-sky-100'
                : brag === 'Green'
                  ? 'text-emerald-800 bg-emerald-100'
                  : brag === 'Red'
                    ? 'text-red-800 bg-red-100'
                    : 'text-amber-800 bg-amber-100';

            return (
              <div
                key={`phase-capability-${phase}`}
                className={`${darkMode ? 'border-slate-700 bg-slate-800' : bragCardClass} rounded-md border p-3`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="relative flex items-center gap-2">
                    <span className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                      Phase {phase}
                    </span>
                    <button
                      type="button"
                      onMouseEnter={() => setActivePhaseHelp(phase)}
                      onMouseLeave={() =>
                        setActivePhaseHelp((current) => (current === phase ? null : current))
                      }
                      onFocus={() => setActivePhaseHelp(phase)}
                      onBlur={() =>
                        setActivePhaseHelp((current) => (current === phase ? null : current))
                      }
                      onClick={() =>
                        setActivePhaseHelp((current) => (current === phase ? null : phase))
                      }
                      className="h-5 w-5 rounded-full border border-slate-300 text-xs font-semibold text-slate-600"
                      aria-expanded={activePhaseHelp === phase}
                      aria-controls={`phase-help-${phase}`}
                      aria-label={`Phase ${phase} guidance`}
                    >
                      i
                    </button>
                    {activePhaseHelp === phase ? (
                      <div
                        id={`phase-help-${phase}`}
                        role="tooltip"
                        className="absolute left-0 top-7 z-10 w-72 rounded-md border border-slate-200 bg-slate-900 px-3 py-2 text-xs text-white shadow-xl"
                      >
                        {PHASE_SUMMARY[phase]}
                      </div>
                    ) : null}
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${darkMode ? 'bg-slate-700 text-slate-100' : bragLabelClass}`}
                  >
                    {brag}
                  </span>
                </div>
                <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {PHASE_SUMMARY[phase]}
                </p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <label className="space-y-1">
                    <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Delivery readiness
                    </span>
                    <select
                      value={value.competence}
                      onChange={(event) =>
                        handlePhaseCapabilityChange(
                          phase,
                          'competence',
                          event.target.value as CompetenceGrade
                        )
                      }
                      className={`w-full rounded-md border px-2 py-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                    >
                      {COMPETENCE_OPTIONS.map((option) => (
                        <option key={`${phase}-competence-${option}`} value={option}>
                          {COMPETENCE_LABELS[option]} ({option})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="space-y-1">
                    <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Confidence
                    </span>
                    <select
                      value={value.confidence}
                      onChange={(event) =>
                        handlePhaseCapabilityChange(
                          phase,
                          'confidence',
                          Number(event.target.value) as ConfidenceScore
                        )
                      }
                      className={`w-full rounded-md border px-2 py-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                    >
                      {CONFIDENCE_OPTIONS.map((option) => (
                        <option key={`${phase}-confidence-${option}`} value={option}>
                          {CONFIDENCE_LABELS[option]} ({option})
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
