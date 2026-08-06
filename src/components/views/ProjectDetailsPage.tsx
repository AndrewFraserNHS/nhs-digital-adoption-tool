import { useCallback, useEffect, useState, type JSX } from 'react';
import { AdoptionStore, DraftEntry, OrgProfile } from '@lib/adoptionState';
import { nhsButtonSecondary } from '../../styles/nhsTheme';
import { validateOrgProfile } from '@lib/adoptionValidator';
import { getComponentObjectiveCounts } from '@lib/adoptionMetrics';
import { AssessmentComponent } from '@data/components';
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
  type OverarchingPhase
} from '@data/cst';

export interface ProjectDetailsPageProps {
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
  components: AssessmentComponent[];
  lenses: string[];
  store: AdoptionStore;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  onOpenOnboarding: () => void;
}

export function ProjectDetailsPage({
  orgProfile,
  onProfileUpdate,
  components,
  store,
  getEntry,
  onComponentClick,
  onOpenOnboarding
}: ProjectDetailsPageProps): JSX.Element {
  const [profile, setProfile] = useState<OrgProfile>(orgProfile);
  const profileValidation = validateOrgProfile(profile);
  const overallCapabilityScore = getOverallCapabilityScore(profile.cst.phaseCapability);

  useEffect(() => {
    setProfile(orgProfile);
  }, [orgProfile]);

  const handleTrustChange = useCallback((value: string) => {
    const updated = { ...profile, trustName: value };
    setProfile(updated);
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
    const updated = { ...profile, cst: { ...profile.cst, type: value } };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handlePathwayChange = useCallback((value: CstPathwayKey) => {
    const updated = { ...profile, cst: { ...profile.cst, pathway: value } };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handleCstDateChange = useCallback((field: 'goLiveDate' | 'fullAdoptionDate' | 'benefitRealizationDate', value: string) => {
    const updated = { ...profile, cst: { ...profile.cst, [field]: value } };
    setProfile(updated);
    onProfileUpdate(updated);
  }, [profile, onProfileUpdate]);

  const handlePhaseCapabilityChange = useCallback(
    (phase: OverarchingPhase, field: 'competence' | 'confidence', value: CompetenceGrade | ConfidenceScore) => {
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
              [field]: value
            }
          }
        }
      };
      setProfile(updated);
      onProfileUpdate(updated);
    },
    [profile, onProfileUpdate]
  );

  const componentsByPhase = components.reduce<Record<number, AssessmentComponent[]>>((byPhase, component) => {
    byPhase[component.phase] = byPhase[component.phase] || [];
    byPhase[component.phase].push(component);
    return byPhase;
  }, {});

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-800">Project Details</h2>
        <button
          type="button"
          onClick={onOpenOnboarding}
          className={nhsButtonSecondary}
        >
          Show introduction again
        </button>
      </div>
      <p className="text-sm text-slate-600 -mt-4">
        This is the Context Specific Template (CST) for your programme: who it belongs to, which of the three pathways
        it follows, and how it's tracking against its readiness phases.
      </p>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 space-y-6">
        <h3 className="text-lg font-semibold text-slate-800">Organisation Settings</h3>
        <div>
          <label htmlFor="org-trust-name" className="block text-sm font-medium text-slate-700 mb-1">
            Organisation Name
          </label>
          <input
            id="org-trust-name"
            type="text"
            className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
            className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
            className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
                className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
                className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
                className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
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
                className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
                value={profile.cst.fullAdoptionDate}
                onChange={(event) => handleCstDateChange('fullAdoptionDate', event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="cst-benefit" className="block text-sm font-medium text-slate-700 mb-1">
                Benefit Realisation Date (optional)
              </label>
              <input
                id="cst-benefit"
                type="date"
                className="w-full rounded-md border border-[#768692] shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2"
                value={profile.cst.benefitRealizationDate}
                onChange={(event) => handleCstDateChange('benefitRealizationDate', event.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-slate-800">Confidence and competence by phase</p>
              <p className="text-sm font-semibold text-slate-700">
                Overall Score: {overallCapabilityScore ?? 'N/A'}{overallCapabilityScore !== null ? '%' : ''}
              </p>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              Capture baseline at CST start, then refresh when readiness phase changes.
            </p>

            <div className="mt-3 space-y-2">
              {OVERARCHING_PHASES.map((phase) => {
                const value = profile.cst.phaseCapability[phase] || { competence: 'C', confidence: 3 };
                const combined = getCombinedCapabilityScore({
                  competence: value.competence,
                  confidence: value.confidence
                });

                return (
                  <div key={`phase-capability-${phase}`} className="grid grid-cols-[90px,1fr,1fr,90px] gap-2 items-center text-sm">
                    <span className="font-semibold text-slate-700">Phase {phase}</span>
                    <select
                      value={value.competence}
                      onChange={(event) =>
                        handlePhaseCapabilityChange(phase, 'competence', event.target.value as CompetenceGrade)
                      }
                      className="rounded-md border border-slate-300 px-2 py-1.5"
                    >
                      {COMPETENCE_OPTIONS.map((option) => (
                        <option key={`${phase}-competence-${option}`} value={option}>Competence {option}</option>
                      ))}
                    </select>
                    <select
                      value={value.confidence}
                      onChange={(event) =>
                        handlePhaseCapabilityChange(phase, 'confidence', Number(event.target.value) as ConfidenceScore)
                      }
                      className="rounded-md border border-slate-300 px-2 py-1.5"
                    >
                      {CONFIDENCE_OPTIONS.map((option) => (
                        <option key={`${phase}-confidence-${option}`} value={option}>Confidence {option}</option>
                      ))}
                    </select>
                    <span className="text-right font-semibold text-slate-700">{combined}%</span>
                  </div>
                );
              })}
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
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Programme Hierarchy</h3>
          <p className="text-sm text-slate-600 mt-1">
            Your programme has {components.length} components, each viewed through one or more lenses. Click a
            component to jump to its assessment.
          </p>
        </div>

        {OVERARCHING_PHASES.filter((phase) => componentsByPhase[phase]?.length).map((phase) => (
          <div key={`phase-group-${phase}`} className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-700">Phase {phase}</h4>
            <div className="space-y-2">
              {componentsByPhase[phase].map((component) => {
                const lensActionCounts = component.lenses.reduce(
                  (totals, lens) => {
                    const entry = getEntry(component.id, lens);
                    return {
                      total: totals.total + entry.actions.length,
                      completed: totals.completed + entry.actions.filter((action) => action.status === 'Completed').length
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
                    className="w-full text-left rounded-md border border-slate-200 p-3 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-semibold text-slate-800">{component.label}</span>
                      <span className="text-xs text-slate-500">Target {component.target}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {component.lenses.map((lens) => {
                        const entry = getEntry(component.id, lens);
                        return (
                          <span
                            key={lens}
                            className={`text-xs px-2 py-1 rounded-full border ${
                              entry.score >= component.target
                                ? 'bg-green-50 border-green-200 text-green-800'
                                : entry.score > 0
                                  ? 'bg-amber-50 border-amber-200 text-amber-800'
                                  : 'bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            {lens}: {entry.score}/{component.target}
                          </span>
                        );
                      })}
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      Lens actions: {lensActionCounts.completed}/{lensActionCounts.total} complete · Objectives: {objectiveCounts.completed}/{objectiveCounts.total} complete
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
