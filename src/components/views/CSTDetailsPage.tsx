import { useCallback, useEffect, useMemo, useState, type JSX } from 'react';
import { AdoptionStore, DraftEntry, OrgProfile } from '@lib/adoptionState';
import { nhsButtonSecondary } from '../../styles/nhsTheme';
import { validateOrgProfile } from '@lib/adoptionValidator';
import { getComponentObjectiveCounts } from '@lib/adoptionMetrics';
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
  getCombinedCapabilityScore,
  getOverallCapabilityScore,
  type CompetenceGrade,
  type ConfidenceScore,
  type CstPathwayKey,
  type CstType,
  type OverarchingPhase,
} from '@data/cst';

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

export interface ProjectDetailsPageProps {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
  components: AssessmentComponent[];
  lenses: string[];
  store: AdoptionStore;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  onOpenOnboarding: () => void;
  darkMode?: boolean;
}

export function ProjectDetailsPage({
  orgProfile,
  onProfileUpdate,
  components,
  store,
  getEntry,
  onComponentClick,
  onOpenOnboarding,
  darkMode = false,
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

  const overallCapabilityScore = getOverallCapabilityScore(profile.cst.phaseCapability);
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

  const componentsByPhase = components.reduce<Record<number, AssessmentComponent[]>>(
    (byPhase, component) => {
      byPhase[component.phase] = byPhase[component.phase] || [];
      byPhase[component.phase].push(component);
      return byPhase;
    },
    {}
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          CST Details
        </h2>
        <button type="button" onClick={onOpenOnboarding} className={nhsButtonSecondary}>
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
        Auto-save is on for CST Details.
      </div>

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-6`}
      >
        <div className="space-y-1">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Step 1: Organisation profile
          </h3>
          <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Complete these core details first. After this stage is complete, move straight into
            assigning actions.
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
            <p
              className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
            >
              Overall Score: {overallCapabilityScore ?? 'N/A'}
              {overallCapabilityScore !== null ? '%' : ''}
            </p>
          </div>

          <div className="mt-3 rounded-md border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900">
            <p className="font-semibold">How this self-assessment works</p>
            <p className="mt-1">
              Confidence is how sure your team feels. Delivery readiness is how embedded the new way
              of working is in practice.
            </p>
            <p className="mt-1">
              Each phase score combines both equally. Example: readiness grade A (5/5) and
              confidence 1 (1/5) gives (100% + 20%) / 2 = 60%.
            </p>
          </div>

          <div className="mt-3 space-y-3">
            {OVERARCHING_PHASES.map((phase) => {
              const value = profile.cst.phaseCapability[phase] || {
                competence: 'C',
                confidence: 3,
              };
              const combined = getCombinedCapabilityScore({
                competence: value.competence,
                confidence: value.confidence,
              });

              return (
                <div
                  key={`phase-capability-${phase}`}
                  className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} rounded-md border p-3`}
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
                    <span
                      className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    >
                      {combined}%
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

      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border p-6 space-y-5`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Programme Hierarchy
          </h3>
          <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Your programme has {components.length} components, each viewed through one or more
            lenses. A component is a change topic you assess and track; a lens is the perspective
            used to assess it (e.g. leadership, risk, capability). Click a component to jump to its
            assessment.
          </p>
        </div>

        {OVERARCHING_PHASES.filter((phase) => componentsByPhase[phase]?.length).map((phase) => (
          <div key={`phase-group-${phase}`} className="space-y-3">
            <h4
              className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
            >
              Phase {phase}
            </h4>
            <div className="space-y-2">
              {componentsByPhase[phase].map((component) => {
                const lensActionCounts = component.lenses.reduce(
                  (totals, lens) => {
                    const entry = getEntry(component.id, lens);
                    return {
                      total: totals.total + entry.actions.length,
                      completed:
                        totals.completed +
                        entry.actions.filter((action) => action.status === 'Completed').length,
                    };
                  },
                  { total: 0, completed: 0 }
                );
                const objectiveCounts = getComponentObjectiveCounts(store, component.id, getEntry);

                return (
                  <button
                    key={component.id}
                    type="button"
                    onClick={() => onComponentClick(component.id)}
                    className={`w-full text-left rounded-md border p-3 transition-colors ${darkMode ? 'border-slate-700 bg-slate-900 hover:border-blue-400 hover:bg-slate-800' : 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        {component.label}
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                        Target {component.target}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {component.lenses.map((lens) => {
                        const entry = getEntry(component.id, lens);
                        return (
                          <span
                            key={lens}
                            className={`text-xs px-2 py-1 rounded-full border ${
                              entry.score >= component.target
                                ? darkMode
                                  ? 'border-green-500/40 bg-green-500/15 text-green-200'
                                  : 'bg-green-50 border-green-200 text-green-800'
                                : entry.score > 0
                                  ? darkMode
                                    ? 'border-amber-500/40 bg-amber-500/15 text-amber-200'
                                    : 'bg-amber-50 border-amber-200 text-amber-800'
                                  : darkMode
                                    ? 'border-slate-600 bg-slate-800 text-slate-300'
                                    : 'bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            {lens}: {entry.score}/{component.target}
                          </span>
                        );
                      })}
                    </div>
                    <p className={`mt-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                      Lens actions: {lensActionCounts.completed}/{lensActionCounts.total} complete ·
                      Outcomes: {objectiveCounts.completed}/{objectiveCounts.total} complete
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
