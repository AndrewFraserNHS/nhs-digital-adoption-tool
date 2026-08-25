import { useCallback, useEffect, useState, type JSX } from 'react';
import type { OrgProfile, TeamMember } from '@lib/adoptionState';
import { validateOrgProfile, useFieldError } from '@lib/adoptionValidator';
import { CST_TYPE_OPTIONS, PATHWAY_OPTIONS, type CstPathwayKey, type CstType } from '@data/cst';
import { PathwayContentNotice } from '@components/common/PathwayContentNotice';
import { nhsButtonPrimary, nhsButtonSecondary } from '../../styles/nhsTheme';

export interface CstSetupWizardProps {
  open: boolean;
  orgProfile: OrgProfile;
  onProfileUpdate: (profile: OrgProfile) => void;
  onClose: () => void;
  onComplete: () => void;
  currentUserId?: string;
  onCurrentUserChange: (id: string) => void;
  darkMode?: boolean;
}

const INPUT_CLASS =
  'w-full rounded-md border shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2 focus-visible:border-[#005eb8] sm:text-sm p-2';

function createTeamMemberId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * First-time CST setup, walked through step by step with an explanation of why each section
 * matters. Writes through to onProfileUpdate immediately (same as the CST Personalisation page),
 * so closing early keeps whatever was filled in. The page remains available afterwards for edits.
 */
export function CstSetupWizard({
  open,
  orgProfile,
  onProfileUpdate,
  onClose,
  onComplete,
  currentUserId,
  onCurrentUserChange,
  darkMode = false,
}: CstSetupWizardProps): JSX.Element | null {
  const [stepIndex, setStepIndex] = useState(0);
  const [draft, setDraft] = useState<OrgProfile>(orgProfile);

  useEffect(() => {
    if (open) {
      setStepIndex(0);
      setDraft(orgProfile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const validation = validateOrgProfile(draft);
  const fieldError = useFieldError(validation);

  const updateProfile = useCallback(
    (updated: OrgProfile) => {
      setDraft(updated);
      onProfileUpdate(updated);
    },
    [onProfileUpdate]
  );

  const updateCst = useCallback(
    (field: 'type' | 'pathway' | 'goLiveDate' | 'fullAdoptionDate' | 'benefitRealizationDate', value: string) => {
      updateProfile({ ...draft, cst: { ...draft.cst, [field]: value } });
    },
    [draft, updateProfile]
  );

  const addTeamMember = useCallback(() => {
    const newMember: TeamMember = { id: createTeamMemberId(), name: '', role: '' };
    updateProfile({ ...draft, teamMembers: [...(draft.teamMembers || []), newMember] });
  }, [draft, updateProfile]);

  const updateTeamMember = useCallback(
    (id: string, field: 'name' | 'role', value: string) => {
      updateProfile({
        ...draft,
        teamMembers: (draft.teamMembers || []).map((member) =>
          member.id === id ? { ...member, [field]: value } : member
        ),
      });
    },
    [draft, updateProfile]
  );

  const removeTeamMember = useCallback(
    (id: string) => {
      updateProfile({
        ...draft,
        teamMembers: (draft.teamMembers || []).filter((member) => member.id !== id),
      });
      if (currentUserId === id) {
        onCurrentUserChange('');
      }
    },
    [draft, updateProfile, currentUserId, onCurrentUserChange]
  );

  if (!open) {
    return null;
  }

  const labelClass = `block text-sm font-medium mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`;
  const inputTheme = darkMode
    ? 'border-slate-600 bg-slate-900 text-slate-100'
    : 'border-[#768692] bg-white text-slate-900';

  const steps = [
    {
      title: 'Organisation profile',
      blurb:
        "Start with the basics: who this programme belongs to. This shows up on exports, highlight reports and the audit log, so people reviewing this CST later know whose it is.",
      body: (
        <div className="space-y-4">
          <div>
            <label className={labelClass} htmlFor="wizard-trust-name">
              Organisation Name
            </label>
            <input
              id="wizard-trust-name"
              type="text"
              className={`${INPUT_CLASS} ${inputTheme}`}
              value={draft.trustName}
              onChange={(event) => updateProfile({ ...draft, trustName: event.target.value })}
            />
            {fieldError('trustName') ? (
              <p className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}>
                {fieldError('trustName')}
              </p>
            ) : null}
          </div>
          <div>
            <label className={labelClass} htmlFor="wizard-project-name">
              Programme / Project Name
            </label>
            <input
              id="wizard-project-name"
              type="text"
              className={`${INPUT_CLASS} ${inputTheme}`}
              value={draft.projectName || ''}
              onChange={(event) => updateProfile({ ...draft, projectName: event.target.value })}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="wizard-lead-name">
              Lead Submitter (Change Lead)
            </label>
            <input
              id="wizard-lead-name"
              type="text"
              className={`${INPUT_CLASS} ${inputTheme}`}
              value={draft.leadName || ''}
              onChange={(event) => updateProfile({ ...draft, leadName: event.target.value })}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Pathway & timeline',
      blurb:
        'Your pathway shapes the guidance and checklists you see throughout the tool. Pick the one that matches where this programme actually is, then set the key delivery dates.',
      body: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass} htmlFor="wizard-cst-type">
                CST Type
              </label>
              <select
                id="wizard-cst-type"
                className={`${INPUT_CLASS} pr-10 ${inputTheme}`}
                value={draft.cst.type}
                onChange={(event) => updateCst('type', event.target.value as CstType)}
              >
                {CST_TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-cst-pathway">
                Pathway
              </label>
              <select
                id="wizard-cst-pathway"
                className={`${INPUT_CLASS} pr-10 ${inputTheme}`}
                value={draft.cst.pathway}
                onChange={(event) => updateCst('pathway', event.target.value as CstPathwayKey)}
              >
                {PATHWAY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <PathwayContentNotice pathway={draft.cst.pathway} darkMode={darkMode} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className={labelClass} htmlFor="wizard-go-live">
                Go Live Date
              </label>
              <input
                id="wizard-go-live"
                type="date"
                className={`${INPUT_CLASS} ${inputTheme}`}
                value={draft.cst.goLiveDate}
                onChange={(event) => updateCst('goLiveDate', event.target.value)}
              />
              {fieldError('cst.goLiveDate') ? (
                <p className={`mt-1 text-xs ${darkMode ? 'text-amber-300' : 'text-red-700'}`}>
                  {fieldError('cst.goLiveDate')}
                </p>
              ) : null}
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-full-adoption">
                Full Adoption (optional)
              </label>
              <input
                id="wizard-full-adoption"
                type="date"
                className={`${INPUT_CLASS} ${inputTheme}`}
                value={draft.cst.fullAdoptionDate}
                onChange={(event) => updateCst('fullAdoptionDate', event.target.value)}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="wizard-benefit">
                Benefit Realisation (optional)
              </label>
              <input
                id="wizard-benefit"
                type="date"
                className={`${INPUT_CLASS} ${inputTheme}`}
                value={draft.cst.benefitRealizationDate}
                onChange={(event) => updateCst('benefitRealizationDate', event.target.value)}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Team members',
      blurb:
        "Add the people working on this programme so actions and readiness slides can be assigned to a named owner, instead of everything sitting as 'Unassigned'.",
      body: (
        <div className="space-y-3">
          <div>
            <label className={labelClass} htmlFor="wizard-current-user">
              You are signed in as
            </label>
            <select
              id="wizard-current-user"
              value={currentUserId || ''}
              onChange={(event) => onCurrentUserChange(event.target.value)}
              className={`${INPUT_CLASS} pr-10 md:w-1/2 ${inputTheme}`}
            >
              <option value="">Not selected</option>
              {(draft.teamMembers || []).map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name || 'Unnamed'}
                  {member.role ? ` - ${member.role}` : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            {(draft.teamMembers || []).map((member) => (
              <div key={member.id} className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2 items-center">
                <input
                  value={member.name}
                  onChange={(event) => updateTeamMember(member.id, 'name', event.target.value)}
                  placeholder="Name"
                  className={`rounded-md border shadow-sm sm:text-sm p-2 ${inputTheme}`}
                />
                <input
                  value={member.role}
                  onChange={(event) => updateTeamMember(member.id, 'role', event.target.value)}
                  placeholder="Role"
                  className={`rounded-md border shadow-sm sm:text-sm p-2 ${inputTheme}`}
                />
                <button
                  type="button"
                  onClick={() => removeTeamMember(member.id)}
                  className="rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button type="button" onClick={addTeamMember} className={nhsButtonSecondary}>
            + Add team member
          </button>
        </div>
      ),
    },
    {
      title: 'External links',
      blurb:
        "This step is optional and can be configured any time from CST Personalisation - toolkit choice, core reference links, and further-reading per component. Skip it for now if you'd rather get straight to assessing.",
      body: (
        <div
          className={`rounded-md border p-4 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'}`}
        >
          Nothing needed here to get started. Head to CST Personalisation whenever you want to set
          a toolkit preference, add core reference links, or point a component at further reading.
        </div>
      ),
    },
  ];

  const step = steps[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Guided CST Setup · Step {stepIndex + 1} of {steps.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-md border px-3 py-1.5 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
          >
            Close
          </button>
        </div>

        <h3 className={`mt-3 text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
          {step.title}
        </h3>
        <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{step.blurb}</p>
        <div className="mt-4">{step.body}</div>

        <div className="mt-6 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
            disabled={isFirst}
            className={`${nhsButtonSecondary} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Back
          </button>

          {isLast ? (
            <button type="button" onClick={onComplete} className={nhsButtonPrimary}>
              Done
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStepIndex((current) => Math.min(steps.length - 1, current + 1))}
              className={nhsButtonPrimary}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
