import { useCallback, useEffect, useMemo, useState, type JSX } from 'react';
import { OrgProfile, type TeamMember } from '@lib/adoptionState';
import { nhsButtonSecondary } from '../../styles/nhsTheme';
import { validateOrgProfile } from '@lib/adoptionValidator';
import { AssessmentComponent } from '@data/components';
import {
  DEFAULT_GUIDANCE_LINK_MAP,
  TOOLKIT_BASE_DEFAULTS,
  type GuidanceSectionLinks,
  type LinkOverrides,
  type PerLinkOverride,
} from '@data/maturity-guidance-links';
import {
  COMPETENCE_OPTIONS,
  CONFIDENCE_OPTIONS,
  CST_TYPE_OPTIONS,
  OVERARCHING_PHASES,
  PATHWAY_OPTIONS,
  type CompetenceGrade,
  type ConfidenceScore,
  type CstPathwayKey,
  type CstType,
  type OverarchingPhase,
} from '@data/cst';
import { TOOLKIT_OPTIONS, type ToolkitOptionKey } from '@data/toolkits';

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
  A: 'Well embedded in practice',
  B: 'Mostly embedded in practice',
  C: 'Partly embedded in practice',
  D: 'Early adoption in practice',
  E: 'Not yet embedded in practice',
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

export interface ProjectDetailsPageProps {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
  components: AssessmentComponent[];
  lenses: string[];
  onComponentClick: (componentId: string) => void;
  onOpenOnboarding: () => void;
  darkMode?: boolean;
  currentUserId?: string;
  onCurrentUserChange: (id: string) => void;
}

export function ProjectDetailsPage({
  orgProfile,
  onProfileUpdate,
  components,
  onComponentClick,
  onOpenOnboarding,
  darkMode = false,
  currentUserId,
  onCurrentUserChange,
}: ProjectDetailsPageProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);
  const [activePhaseHelp, setActivePhaseHelp] = useState<OverarchingPhase | null>(null);
  const profileValidation = validateOrgProfile(profile);
  const validationByField = useMemo(() => {
    return profileValidation.errors.reduce<Record<string, string[]>>((next, error) => {
      if (!next[error.field]) {
        next[error.field] = [];
      }
      next[error.field].push(error.message);
      return next;
    }, {});
  }, [profileValidation.errors]);

  const fieldError = useCallback(
    (field: string): string | undefined => {
      return validationByField[field]?.[0];
    },
    [validationByField]
  );

  const stageOneComplete = Boolean(
    profile.trustName.trim() &&
    (profile.projectName || '').trim() &&
    (profile.leadName || '').trim() &&
    profile.cst.goLiveDate.trim()
  );

  useEffect(() => {
    setProfile(orgProfile);
  }, [orgProfile]);

  const handleTrustChange = useCallback(
    (value: string) => {
      const updated = { ...profile, trustName: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleProjectChange = useCallback(
    (value: string) => {
      const updated = { ...profile, projectName: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleLeadChange = useCallback(
    (value: string) => {
      const updated = { ...profile, leadName: value };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleCstTypeChange = useCallback(
    (value: CstType) => {
      const updated = { ...profile, cst: { ...profile.cst, type: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handlePathwayChange = useCallback(
    (value: CstPathwayKey) => {
      const updated = { ...profile, cst: { ...profile.cst, pathway: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleCstDateChange = useCallback(
    (field: 'goLiveDate' | 'fullAdoptionDate' | 'benefitRealizationDate', value: string) => {
      const updated = { ...profile, cst: { ...profile.cst, [field]: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleToolkitChoiceChange = useCallback(
    (value: ToolkitOptionKey) => {
      const updated = { ...profile, cst: { ...profile.cst, toolkitChoice: value } };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

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

  const handleLinkOverridesChange = useCallback(
    (overrides: LinkOverrides) => {
      const updated = { ...profile, linkOverrides: overrides };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleAddTeamMember = useCallback(() => {
    const newMember: TeamMember = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: '',
      role: '',
    };
    const updated = { ...profile, teamMembers: [...(profile.teamMembers || []), newMember] };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handleUpdateTeamMember = useCallback(
    (id: string, field: 'name' | 'role', value: string) => {
      const updated = {
        ...profile,
        teamMembers: (profile.teamMembers || []).map((member) =>
          member.id === id ? { ...member, [field]: value } : member
        ),
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const handleRemoveTeamMember = useCallback(
    (id: string) => {
      const updated = {
        ...profile,
        teamMembers: (profile.teamMembers || []).filter((member) => member.id !== id),
      };
      setProfile(updated);
      onProfileUpdate(updated);
      if (currentUserId === id) {
        onCurrentUserChange('');
      }
    },
    [profile, onProfileUpdate, currentUserId, onCurrentUserChange]
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          CST Personalisation
        </h2>
        <button
          type="button"
          onClick={onOpenOnboarding}
          className={nhsButtonSecondary}
          data-testid="cst-show-intro-button"
        >
          Show introduction again
        </button>
      </div>
      <p className={`text-sm -mt-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        This is the Context Specific Template (CST) for your programme: who it belongs to, which of
        the three pathways it follows, and how it's tracking against its readiness phases.
      </p>

      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${darkMode ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-200' : 'border-emerald-200 bg-emerald-50 text-emerald-800'}`}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        Auto-save is on for CST Personalisation.
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-6`}
      >
        <div className="space-y-1">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Organisation profile
          </h3>
          <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Step 1: Basic details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="org-trust-name"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            >
              Organisation Name
            </label>
            <input
              id="org-trust-name"
              type="text"
              data-testid="cst-trust-name-input"
              className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              value={profile.trustName}
              onChange={(e) => handleTrustChange(e.target.value)}
              aria-invalid={Boolean(fieldError('trustName'))}
              aria-describedby={fieldError('trustName') ? 'org-trust-name-error' : undefined}
            />
            {fieldError('trustName') ? (
              <p
                id="org-trust-name-error"
                className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
              >
                {fieldError('trustName')}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="org-project-name"
              className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            >
              Programme / Project Name
            </label>
            <input
              id="org-project-name"
              type="text"
              className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              value={profile.projectName || ''}
              onChange={(e) => handleProjectChange(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="org-lead-name"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            Lead Submitter (Change Lead)
          </label>
          <input
            id="org-lead-name"
            type="text"
            className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            value={profile.leadName || ''}
            onChange={(e) => handleLeadChange(e.target.value)}
          />
        </div>

        {stageOneComplete ? (
          <div
            className={`rounded-md border p-4 ${darkMode ? 'border-green-500/40 bg-green-500/10' : 'border-green-200 bg-green-50'}`}
          >
            <p
              className={`text-sm font-semibold ${darkMode ? 'text-green-200' : 'text-green-900'}`}
            >
              Stage 1 complete: Project details captured.
            </p>
            <p className={`mt-1 text-xs ${darkMode ? 'text-green-100' : 'text-green-800'}`}>
              Your details are saved. Continue to assign delivery actions against component lenses.
            </p>
            <button
              type="button"
              onClick={() => {
                if (components[0]) {
                  onComponentClick(components[0].id);
                }
              }}
              className="mt-3 rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Continue to assigning actions
            </button>
          </div>
        ) : (
          <div
            className={`rounded-md border p-3 text-xs ${darkMode ? 'border-amber-500/40 bg-amber-500/10 text-amber-100' : 'border-amber-200 bg-amber-50 text-amber-900'}`}
          >
            Stage 1 in progress: add organisation name, programme name, lead name, and go-live date
            to complete this step.
          </div>
        )}

        <details
          className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-md border p-4`}
          open
        >
          <summary
            className={`cursor-pointer text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
          >
            Step 2: Pathway and timeline (Context Specific Template)
          </summary>
          <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Choose the full pathway title for your programme, then set key timeline dates.
          </p>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cst-type"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                CST Type
              </label>
              <select
                id="cst-type"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.type}
                onChange={(event) => handleCstTypeChange(event.target.value as CstType)}
              >
                {CST_TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="cst-pathway"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Pathway
              </label>
              <select
                id="cst-pathway"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.pathway}
                onChange={(event) => handlePathwayChange(event.target.value as CstPathwayKey)}
                aria-invalid={Boolean(fieldError('cst.pathway'))}
                aria-describedby={fieldError('cst.pathway') ? 'cst-pathway-error' : undefined}
              >
                {PATHWAY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {fieldError('cst.pathway') ? (
                <p
                  id="cst-pathway-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.pathway')}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="cst-go-live"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Go Live Date (required)
              </label>
              <input
                id="cst-go-live"
                type="date"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.goLiveDate}
                onChange={(event) => handleCstDateChange('goLiveDate', event.target.value)}
                aria-invalid={Boolean(fieldError('cst.goLiveDate'))}
                aria-describedby={fieldError('cst.goLiveDate') ? 'cst-go-live-error' : undefined}
              />
              {fieldError('cst.goLiveDate') ? (
                <p
                  id="cst-go-live-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.goLiveDate')}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="cst-full-adoption"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Full Adoption Date (optional)
              </label>
              <input
                id="cst-full-adoption"
                type="date"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.fullAdoptionDate}
                onChange={(event) => handleCstDateChange('fullAdoptionDate', event.target.value)}
                aria-invalid={Boolean(fieldError('cst.fullAdoptionDate'))}
                aria-describedby={
                  fieldError('cst.fullAdoptionDate') ? 'cst-full-adoption-error' : undefined
                }
              />
              {fieldError('cst.fullAdoptionDate') ? (
                <p
                  id="cst-full-adoption-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.fullAdoptionDate')}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="cst-benefit"
                className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Benefit Realisation Date (optional)
              </label>
              <input
                id="cst-benefit"
                type="date"
                className={`w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
                value={profile.cst.benefitRealizationDate}
                onChange={(event) =>
                  handleCstDateChange('benefitRealizationDate', event.target.value)
                }
                aria-invalid={Boolean(fieldError('cst.benefitRealizationDate'))}
                aria-describedby={
                  fieldError('cst.benefitRealizationDate') ? 'cst-benefit-error' : undefined
                }
              />
              {fieldError('cst.benefitRealizationDate') ? (
                <p
                  id="cst-benefit-error"
                  className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}
                >
                  {fieldError('cst.benefitRealizationDate')}
                </p>
              ) : null}
            </div>
          </div>

          {profileValidation.errors.filter((error) => error.field.startsWith('cst.')).length > 0 ? (
            <div
              className={`mt-4 rounded-md border p-3 ${darkMode ? 'border-amber-500/40 bg-amber-500/10' : 'border-amber-300 bg-amber-50'}`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}
              >
                CST validation warnings
              </p>
              <ul
                className={`mt-2 space-y-1 text-sm ${darkMode ? 'text-amber-100' : 'text-amber-900'}`}
              >
                {profileValidation.errors
                  .filter((error) => error.field.startsWith('cst.'))
                  .map((error) => (
                    <li key={error.field + error.message}>- {error.message}</li>
                  ))}
              </ul>
            </div>
          ) : null}
        </details>

        <details
          className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-md border p-4`}
        >
          <summary
            className={`cursor-pointer text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
          >
            Step 3: Confidence and capability by phase
          </summary>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Capture your starting position, then refresh when readiness phase changes or after
              major milestones.
            </p>
          </div>

          <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900">
            <p className="font-semibold">How this self-assessment works</p>
            <p className="mt-1">
              Confidence is how sure your team feels. Delivery readiness is how embedded the new way
              of working is in practice.
            </p>
            <p className="mt-1">
              Cards now use BRAG backgrounds: Blue = both high, Green = one high and the other at
              least average, Amber = neither high, Red = both below average.
            </p>
          </div>

          <div className="mt-3 space-y-3">
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
                      <span
                        className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                      >
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
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${darkMode ? 'bg-slate-700 text-slate-100' : bragLabelClass}`}>
                      {brag}
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {PHASE_SUMMARY[phase]}
                  </p>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <label className="space-y-1">
                      <span
                        className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                      >
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
                      <span
                        className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                      >
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
        </details>
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-4`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Team Members
          </h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Add the people working on this programme so actions and readiness slides can be assigned
            to a named owner. This roster is saved with the CST; who you're signed in as is
            remembered on this device only.
          </p>
        </div>

        <div>
          <label
            htmlFor="cst-current-user"
            className={`block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
          >
            You are signed in as
          </label>
          <select
            id="cst-current-user"
            value={currentUserId || ''}
            onChange={(event) => onCurrentUserChange(event.target.value)}
            className={`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 md:w-1/2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
          >
            <option value="">Not selected</option>
            {(profile.teamMembers || []).map((member) => (
              <option key={member.id} value={member.id}>
                {member.name || 'Unnamed'}
                {member.role ? ` — ${member.role}` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          {(profile.teamMembers || []).map((member) => (
            <div key={member.id} className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center">
              <input
                value={member.name}
                onChange={(event) => handleUpdateTeamMember(member.id, 'name', event.target.value)}
                placeholder="Name"
                className={`rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              />
              <input
                value={member.role}
                onChange={(event) => handleUpdateTeamMember(member.id, 'role', event.target.value)}
                placeholder="Role (e.g. Change Lead)"
                className={`rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
              />
              <button
                type="button"
                onClick={() => handleRemoveTeamMember(member.id)}
                className="shrink-0 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          ))}
          {!(profile.teamMembers || []).length ? (
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No team members added yet.
            </p>
          ) : null}
        </div>

        <button type="button" onClick={handleAddTeamMember} className={nhsButtonSecondary}>
          + Add Team Member
        </button>
      </div>

      {/* Step 4: External link overrides */}
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-6`}
      >
        <details>
          <summary
            className={`cursor-pointer text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
          >
            Step 4: External links
          </summary>
          <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            All toolkit links across the tool point to the NHS Future platform by default. You can
            override the base toolkit destination for your organisation, or change individual links
            independently.
          </p>

          <div
            className={`mt-3 rounded-md border p-3 text-xs ${darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-900'}`}
          >
            <p className="font-semibold">Fallback reference</p>
            <p className="mt-1">
              Base fallback: <span className="font-medium">{TOOLKIT_BASE_DEFAULTS.label}</span> ({TOOLKIT_BASE_DEFAULTS.url})
            </p>
            <p className="mt-1">
              Default fallback: the original NHS Future link defined per guidance item.
            </p>
          </div>

          <div
            className={`mt-4 rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <label
              htmlFor="cst-toolkit-choice"
              className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
            >
              Default toolkit for assistant preview
            </label>
            <select
              id="cst-toolkit-choice"
              value={profile.cst.toolkitChoice}
              onChange={(event) => handleToolkitChoiceChange(event.target.value as ToolkitOptionKey)}
              className={`w-full rounded-md border shadow-sm sm:text-sm p-2 pr-10 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-[#768692] bg-white text-slate-900'}`}
            >
              {TOOLKIT_OPTIONS.map((toolkit) => (
                <option key={toolkit.key} value={toolkit.key}>
                  {toolkit.label}
                </option>
              ))}
            </select>
            <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              This controls which toolkit the chatbot-style assistant opens by default across the tool.
            </p>
          </div>

          {/* Base override */}
          <div
            className={`mt-4 rounded-md border p-4 space-y-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <div>
              <p
                className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
              >
                Base override
              </p>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                Replaces the Change Management Toolkit destination for all links that fall back to
                it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label
                  className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  Toolkit name
                </label>
                <input
                  type="text"
                  placeholder={TOOLKIT_BASE_DEFAULTS.label}
                  value={profile.linkOverrides?.base?.label ?? ''}
                  onChange={(e) =>
                    handleLinkOverridesChange({
                      ...profile.linkOverrides,
                      base: { ...profile.linkOverrides?.base, label: e.target.value || undefined },
                    })
                  }
                  className={`w-full rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                />
              </div>
              <div>
                <label
                  className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  Toolkit URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder={TOOLKIT_BASE_DEFAULTS.url}
                    value={profile.linkOverrides?.base?.url ?? ''}
                    onChange={(e) =>
                      handleLinkOverridesChange({
                        ...profile.linkOverrides,
                        base: { ...profile.linkOverrides?.base, url: e.target.value || undefined },
                      })
                    }
                    className={`flex-1 min-w-0 rounded-md border shadow-sm sm:text-sm p-2 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                  />
                  {profile.linkOverrides?.base?.url && (
                    <button
                      type="button"
                      onClick={() =>
                        handleLinkOverridesChange({
                          ...profile.linkOverrides,
                          base: { ...profile.linkOverrides?.base, url: undefined },
                        })
                      }
                      className={`shrink-0 rounded-md border px-3 py-2 text-xs font-medium ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Per-link overrides grouped by section */}
          <div className="mt-4 space-y-3">
            <p
              className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Per-link overrides
            </p>
            <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Leave a URL blank to use the fallback. Set fallback to <strong>Base</strong> to use
              your base override above, or <strong>Default</strong> to keep the original NHS Future
              link.
            </p>
            {(Object.entries(DEFAULT_GUIDANCE_LINK_MAP) as [string, GuidanceSectionLinks][]).map(
              ([sectionName, sectionLinks]) => {
                const allLinks = [
                  ...(sectionLinks.inputs ?? []),
                  ...(sectionLinks.deliverables ?? []),
                ];
                const overrideCount = allLinks.filter((l) =>
                  profile.linkOverrides?.links?.[l.key]?.url?.trim()
                ).length;
                return (
                  <details
                    key={sectionName}
                    className={`rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  >
                    <summary
                      className={`flex cursor-pointer items-center justify-between gap-2 p-3 text-sm font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                    >
                      <span>{sectionName}</span>
                      {overrideCount > 0 && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
                        >
                          {overrideCount} override{overrideCount !== 1 ? 's' : ''}
                        </span>
                      )}
                    </summary>
                    <div
                      className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}
                    >
                      {(['inputs', 'deliverables'] as const).map((sect) => {
                        const links = sectionLinks[sect] ?? [];
                        if (!links.length) return null;
                        return (
                          <div key={sect} className="p-3 space-y-2">
                            <p
                              className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                            >
                              {sect}
                            </p>
                            {links.map((link) => {
                              const perLink: PerLinkOverride = profile.linkOverrides?.links?.[
                                link.key
                              ] ?? { fallback: 'base' };
                              return (
                                <div key={link.key} className="grid grid-cols-1 gap-1.5">
                                  <span
                                    className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                                  >
                                    {link.label}
                                  </span>
                                  <p
                                    className={`text-xs truncate ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}
                                  >
                                    {link.url}
                                  </p>
                                  <div className="flex gap-2">
                                    <input
                                      type="url"
                                      placeholder="Override URL (leave blank to use fallback)"
                                      value={perLink.url ?? ''}
                                      onChange={(e) => {
                                        const val = e.target.value || undefined;
                                        handleLinkOverridesChange({
                                          ...profile.linkOverrides,
                                          links: {
                                            ...profile.linkOverrides?.links,
                                            [link.key]: { ...perLink, url: val },
                                          },
                                        });
                                      }}
                                      className={`flex-1 min-w-0 rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 placeholder-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder-slate-400'}`}
                                    />
                                    {!perLink.url && (
                                      <select
                                        value={perLink.fallback ?? 'base'}
                                        onChange={(e) =>
                                          handleLinkOverridesChange({
                                            ...profile.linkOverrides,
                                            links: {
                                              ...profile.linkOverrides?.links,
                                              [link.key]: {
                                                ...perLink,
                                                fallback: e.target.value as 'base' | 'default',
                                              },
                                            },
                                          })
                                        }
                                        className={`rounded border px-2 py-1.5 text-xs ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                                      >
                                        <option value="base">Fallback: Base</option>
                                        <option value="default">Fallback: Default</option>
                                      </select>
                                    )}
                                    {perLink.url && (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          const next = { ...profile.linkOverrides?.links };
                                          delete next[link.key];
                                          handleLinkOverridesChange({
                                            ...profile.linkOverrides,
                                            links: next,
                                          });
                                        }}
                                        className={`shrink-0 rounded border px-2 py-1.5 text-xs font-medium ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
                                      >
                                        Clear
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </details>
                );
              }
            )}
          </div>
        </details>
      </div>

    </div>
  );
}
