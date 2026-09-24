import { ReadinessOutcomeModal } from '@components/common/ReadinessOutcomeModal';
import { StakeholderPicker } from '@components/common/StakeholderPicker';
import type { AssessmentComponent } from '@data/components';
import {
  buildReadinessReviewReport,
  computeReadinessOutcome,
  PREPAREDNESS_ASSESSMENT,
  READINESS_REVIEW_REPORT_STORAGE_KEY,
  type ReadinessOutcome,
  type ReadinessReviewReport,
  type ReadinessSuggestion,
} from '@data/readinessReview';
import { isResolvedActionStatus } from '@lib/actionModel';
import type { DraftEntry, Stakeholder, TeamMember } from '@lib/adoptionState';
import { buildEmlWithJsonAttachment } from '@lib/eml';
import { load, save } from '@lib/storage';
import { downloadFile } from '@lib/utils';
import { JSX, useState } from 'react';

interface PreparednessState {
  icbRegion: string;
  completedBy: string;
  dateCompleted: string;
  sponsorId: string;
  programmeLead: string;
  contactEmail: string;
  /** Chosen option number (1-5), keyed by question `nu`. */
  answers: Record<number, number>;
  currentIndex: number;
  completed: boolean;
}

const STORAGE_KEY = 'nhs-readiness-review';
const QUESTIONS = [...PREPAREDNESS_ASSESSMENT].sort((a, b) => a.nu - b.nu);

function freshState(region: string, leadName: string): PreparednessState {
  return {
    icbRegion: region,
    completedBy: '',
    dateCompleted: new Date().toISOString().slice(0, 10),
    sponsorId: '',
    programmeLead: leadName,
    contactEmail: '',
    answers: {},
    currentIndex: 0,
    completed: false,
  };
}

export interface ReadinessReviewAppProps {
  trustName?: string;
  /** Pre-fills ICB / Region and Programme lead on a brand-new assessment. */
  region?: string;
  leadName?: string;
  teamMembers?: TeamMember[];
  stakeholders?: Stakeholder[];
  onStakeholdersChange?: (stakeholders: Stakeholder[]) => void;
  departments?: string[];
  components?: AssessmentComponent[];
  getEntry?: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate?: (componentId: string, lens: string, entry: DraftEntry) => void;
  onReadinessEvaluated?: (details: {
    skipToPhase: number | null;
    accepted: boolean;
    updatedCount: number;
  }) => void;
}

export default function ReadinessReviewApp({
  trustName = '',
  region = '',
  leadName = '',
  teamMembers = [],
  stakeholders = [],
  onStakeholdersChange,
  departments = [],
  components = [],
  getEntry,
  onEntryUpdate,
  onReadinessEvaluated,
}: ReadinessReviewAppProps = {}): JSX.Element {
  const [state, setState] = useState<PreparednessState>(
    () => load<PreparednessState>(STORAGE_KEY) || freshState(region, leadName)
  );
  const [page, setPage] = useState<1 | 2>(1);
  const [outcome, setOutcome] = useState<ReadinessOutcome | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [outcomeHandled, setOutcomeHandled] = useState(false);

  const persist = (next: PreparednessState) => {
    setState(next);
    save(STORAGE_KEY, next);
  };

  const update = (updates: Partial<PreparednessState>) => persist({ ...state, ...updates });
  const setAnswer = (nu: number, option: number) =>
    persist({ ...state, answers: { ...state.answers, [nu]: option } });

  const handleReset = () => {
    if (window.confirm('This will clear every answer and start a new assessment. Continue?')) {
      persist(freshState(region, leadName));
      setPage(1);
      setOutcome(null);
      setShowModal(false);
      setOutcomeHandled(false);
    }
  };

  const currentQuestion = QUESTIONS[state.currentIndex];
  const isLastQuestion = state.currentIndex === QUESTIONS.length - 1;
  const currentAnswer = currentQuestion ? state.answers[currentQuestion.nu] : undefined;

  const handleFinish = () => {
    const scoreLookup = (componentId: string, lens: string) => getEntry?.(componentId, lens);
    const result = computeReadinessOutcome(state.answers, components, scoreLookup);
    setOutcome(result);
    setShowModal(true);
    update({ completed: true });

    // A frozen snapshot of everything answered, for the emailed attachment and for the
    // "Readiness Review Analysis" tool's "My Answers" view - overwritten on every completion.
    save(
      READINESS_REVIEW_REPORT_STORAGE_KEY,
      buildReadinessReviewReport(
        {
          trustName,
          icbRegion: state.icbRegion,
          completedBy: state.completedBy,
          dateCompleted: state.dateCompleted,
          programmeLead: state.programmeLead,
          contactEmail: state.contactEmail,
        },
        state.answers,
        components
      )
    );
  };

  const handleSendReport = () => {
    const report = load<ReadinessReviewReport>(READINESS_REVIEW_REPORT_STORAGE_KEY);
    if (!report) {
      return;
    }
    const filenameSafeTrust = (trustName || 'assessment').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const eml = buildEmlWithJsonAttachment({
      to: 'england.digitaladoptionavt@nhs.net',
      subject: `${trustName} - Assessment outcomes`,
      body: 'Please find our AVT Readiness Review outcomes attached.',
      attachmentFilename: `${filenameSafeTrust}-readiness-review.json`,
      attachmentJson: report,
    });
    downloadFile(`${filenameSafeTrust}-readiness-review.eml`, eml, 'message/rfc822');
  };

  const applySkip = (skipToPhase: number): Set<string> => {
    const skippedComponentIds = new Set(
      components.filter((component) => component.phase < skipToPhase).map((component) => component.id)
    );
    if (!getEntry || !onEntryUpdate) {
      return skippedComponentIds;
    }
    components
      .filter((component) => skippedComponentIds.has(component.id))
      .forEach((component) => {
        component.lenses.forEach((lens) => {
          const entry = getEntry(component.id, lens);
          onEntryUpdate(component.id, lens, {
            ...entry,
            score: component.target,
            actions: entry.actions.map((action) =>
              isResolvedActionStatus(action.status) ? action : { ...action, status: 'Skipped' }
            ),
          });
        });
      });
    return skippedComponentIds;
  };

  const handleApply = (selectedSuggestions: ReadinessSuggestion[], applyPhaseSkip: boolean) => {
    const skipToPhase = applyPhaseSkip ? (outcome?.skipToPhase ?? null) : null;
    const skippedComponentIds = skipToPhase ? applySkip(skipToPhase) : new Set<string>();

    // A component already covered by the phase skip (raised to its target) doesn't need its
    // individual suggestion applied on top - that would just overwrite the skip's own score.
    const suggestionsToApply = selectedSuggestions.filter(
      (suggestion) => !skippedComponentIds.has(suggestion.componentId)
    );
    if (getEntry && onEntryUpdate) {
      suggestionsToApply.forEach((suggestion) => {
        const entry = getEntry(suggestion.componentId, suggestion.lens);
        onEntryUpdate(suggestion.componentId, suggestion.lens, {
          ...entry,
          score: suggestion.impliedScore,
          // The answer says this lens is already past every readiness level below its new score,
          // so any action still sitting at one of those earlier levels is no longer needed.
          actions: entry.actions.map((action) =>
            (action.readinessScore ?? 0) < suggestion.impliedScore &&
            !isResolvedActionStatus(action.status)
              ? { ...action, status: 'Skipped' }
              : action
          ),
        });
      });
    }

    onReadinessEvaluated?.({
      skipToPhase,
      accepted: Boolean(skipToPhase) || suggestionsToApply.length > 0,
      updatedCount: suggestionsToApply.length + (skipToPhase ? skippedComponentIds.size : 0),
    });
    setShowModal(false);
    setOutcomeHandled(true);
  };

  const handleDecline = () => {
    onReadinessEvaluated?.({ skipToPhase: null, accepted: false, updatedCount: 0 });
    setShowModal(false);
    setOutcomeHandled(true);
  };

  const inputClass = 'w-full p-2 border border-slate-300 rounded outline-none';
  const labelClass = 'block text-sm font-medium text-slate-700 mb-1';
  const progressPct = ((state.currentIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Step {page} of 2
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="text-xs font-medium text-slate-500 hover:text-slate-700 hover:underline"
        >
          Start again
        </button>
      </div>

      {page === 1 ? (
        <section className="space-y-6 text-center" aria-label="Trust details">
          <h2 className="text-xl font-semibold text-slate-800">Trust Details</h2>
          <div className="grid grid-cols-1 gap-4 text-left">
            <div>
              <span className={labelClass}>Trust name</span>
              <p className="p-2 rounded border border-slate-200 bg-white text-slate-700">
                {trustName || 'Not set - add your trust name in Project Details'}
              </p>
            </div>
            <div>
              <label htmlFor="prep-icb" className={labelClass}>
                ICB / Region
              </label>
              <input
                id="prep-icb"
                type="text"
                value={state.icbRegion}
                onChange={(event) => update({ icbRegion: event.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="prep-completed-by" className={labelClass}>
                Completed by (name and role)
              </label>
              <select
                id="prep-completed-by"
                value={state.completedBy}
                onChange={(event) => update({ completedBy: event.target.value })}
                className={inputClass}
              >
                <option value="">Please choose</option>
                {teamMembers.map((member) => (
                  <option key={member.id} value={`${member.name} (${member.role})`}>
                    {member.name} ({member.role})
                  </option>
                ))}
              </select>
              {teamMembers.length === 0 ? (
                <p className="mt-1 text-xs text-slate-400">
                  No team members yet - add them in Project Details.
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="prep-date" className={labelClass}>
                Date completed
              </label>
              <input
                id="prep-date"
                type="date"
                value={state.dateCompleted}
                onChange={(event) => update({ dateCompleted: event.target.value })}
                className={inputClass}
              />
            </div>
            <StakeholderPicker
              id="prep-sponsor"
              label="Executive sponsor / SRO"
              stakeholders={stakeholders}
              departments={departments}
              value={state.sponsorId}
              onChange={(sponsorId) => update({ sponsorId })}
              onAddStakeholder={(stakeholder) =>
                onStakeholdersChange?.([...stakeholders, stakeholder])
              }
            />
            <div>
              <label htmlFor="prep-lead" className={labelClass}>
                Programme / transformation lead
              </label>
              <input
                id="prep-lead"
                type="text"
                value={state.programmeLead}
                onChange={(event) => update({ programmeLead: event.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="prep-email" className={labelClass}>
                Contact email
              </label>
              <input
                id="prep-email"
                type="email"
                value={state.contactEmail}
                onChange={(event) => update({ contactEmail: event.target.value })}
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setPage(2)}
              className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Next: Questions
            </button>
          </div>
        </section>
      ) : (
        <section className="space-y-6" aria-label="Questions">
          {state.completed && outcomeHandled ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 space-y-4 text-center">
              <h2 className="text-lg font-semibold text-green-900">Assessment complete</h2>
              <p className="text-sm text-green-800">
                Thanks for completing the Readiness Review. See your updated readiness in
                &quot;Readiness by component&quot; below, or retake the review any time.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendReport}
                  className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Now please send across your assessment scores to the Digital Adoption AVT mailbox
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
                >
                  Retake assessment
                </button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-1">
                  <span>
                    Question {state.currentIndex + 1} of {QUESTIONS.length}
                  </span>
                  <span>{Math.round(progressPct)}%</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={state.currentIndex + 1}
                  aria-valuemin={1}
                  aria-valuemax={QUESTIONS.length}
                  className="h-2 w-full rounded-full bg-slate-200 overflow-hidden"
                >
                  <div
                    className="h-full rounded-full bg-[#005eb8] transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {currentQuestion ? (
                <div
                  role="group"
                  aria-label={currentQuestion.question}
                  className="rounded-lg border border-blue-100 bg-blue-50 p-6"
                >
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 break-words">
                      {currentQuestion.label} &middot; {currentQuestion.lens}
                    </p>
                    <p className="mt-1 text-base font-medium text-slate-800 break-words">
                      {currentQuestion.question}
                    </p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {currentQuestion.answers.map((option, index) => {
                      const optionNumber = index + 1;
                      const inputId = `prep-q-${currentQuestion.nu}-${optionNumber}`;
                      return (
                        <label
                          key={optionNumber}
                          htmlFor={inputId}
                          className="flex items-start gap-2 rounded-md border border-slate-200 bg-white p-3 text-sm text-slate-700 hover:border-blue-300"
                        >
                          <input
                            id={inputId}
                            type="radio"
                            name={`prep-q-${currentQuestion.nu}`}
                            checked={currentAnswer === optionNumber}
                            onChange={() => setAnswer(currentQuestion.nu, optionNumber)}
                            className="mt-1"
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() =>
                    state.currentIndex === 0
                      ? setPage(1)
                      : update({ currentIndex: state.currentIndex - 1 })
                  }
                  className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={!currentAnswer}
                  onClick={() =>
                    isLastQuestion
                      ? handleFinish()
                      : update({ currentIndex: state.currentIndex + 1 })
                  }
                  className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLastQuestion ? 'Finish assessment' : 'Next'}
                </button>
              </div>
            </>
          )}
        </section>
      )}

      {outcome ? (
        <ReadinessOutcomeModal
          open={showModal}
          outcome={outcome}
          onApply={handleApply}
          onDecline={handleDecline}
        />
      ) : null}
    </div>
  );
}
