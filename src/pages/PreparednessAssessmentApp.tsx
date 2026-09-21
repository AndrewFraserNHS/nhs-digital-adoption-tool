import { StakeholderPicker } from '@components/common/StakeholderPicker';
import {
  gradeForPercentage,
  PREPAREDNESS_CATEGORIES,
  PREPAREDNESS_GRADE_DESCRIPTIONS,
  PREPAREDNESS_QUESTIONS,
  type PreparednessGrade,
  scorePreparedness,
} from '@data/preparednessAssessment';
import type { Stakeholder, TeamMember } from '@lib/adoptionState';
import { load, save } from '@lib/storage';
import { JSX, useEffect, useMemo, useState } from 'react';

interface PreparednessState {
  icbRegion: string;
  completedBy: string;
  dateCompleted: string;
  sponsorId: string;
  programmeLead: string;
  contactEmail: string;
  /** Chosen option number per scale/select question. */
  answers: Record<number, number>;
  /** Free-text answers (and the "Other" description on select questions), by question number. */
  texts: Record<number, string>;
}

const STORAGE_KEY = 'nhs-avt-preparedness-assessment';

function freshState(region: string, leadName: string): PreparednessState {
  return {
    icbRegion: region,
    completedBy: '',
    dateCompleted: new Date().toISOString().slice(0, 10),
    sponsorId: '',
    programmeLead: leadName,
    contactEmail: '',
    answers: {},
    texts: {},
  };
}

const GRADE_BADGE_CLASS: Record<PreparednessGrade, string> = {
  'A*': 'bg-blue-100 text-blue-800 border-blue-300',
  A: 'bg-green-100 text-green-800 border-green-300',
  B: 'bg-lime-100 text-lime-800 border-lime-300',
  C: 'bg-amber-100 text-amber-800 border-amber-300',
  D: 'bg-red-100 text-red-800 border-red-300',
};

const SCORED_COUNT = PREPAREDNESS_QUESTIONS.filter((question) => question.kind === 'scale').length;

export interface PreparednessAssessmentAppProps {
  embedded?: boolean;
  onBack?: () => void;
  trustName?: string;
  /** Pre-fills ICB / Region and Programme lead on a brand-new assessment. */
  region?: string;
  leadName?: string;
  teamMembers?: TeamMember[];
  stakeholders?: Stakeholder[];
  onStakeholdersChange?: (stakeholders: Stakeholder[]) => void;
  departments?: string[];
}

export default function PreparednessAssessmentApp({
  embedded = false,
  trustName = '',
  region = '',
  leadName = '',
  teamMembers = [],
  stakeholders = [],
  onStakeholdersChange,
  departments = [],
}: PreparednessAssessmentAppProps = {}): JSX.Element {
  const [state, setState] = useState<PreparednessState>(
    () => load<PreparednessState>(STORAGE_KEY) || freshState(region, leadName)
  );
  const [page, setPage] = useState<1 | 2>(1);

  useEffect(() => {
    save(STORAGE_KEY, state);
  }, [state]);

  const update = (updates: Partial<PreparednessState>) =>
    setState((current) => ({ ...current, ...updates }));
  const setAnswer = (number: number, option: number) =>
    setState((current) => ({ ...current, answers: { ...current.answers, [number]: option } }));
  const setText = (number: number, text: string) =>
    setState((current) => ({ ...current, texts: { ...current.texts, [number]: text } }));

  const score = useMemo(() => scorePreparedness(state.answers), [state.answers]);
  const complete = score.answered === score.total;

  const categoryScores = useMemo(
    () =>
      PREPAREDNESS_CATEGORIES.map((category) => {
        const questions = PREPAREDNESS_QUESTIONS.filter(
          (question) => question.category === category
        );
        const categoryScore = scorePreparedness(state.answers, questions);
        return { category, ...categoryScore };
      }).filter((entry) => entry.total > 0),
    [state.answers]
  );

  const handleReset = () => {
    if (window.confirm('This will clear every answer and start a new assessment. Continue?')) {
      setState(freshState(region, leadName));
      setPage(1);
    }
  };

  const inputClass = 'w-full p-2 border border-slate-300 rounded outline-none';
  const labelClass = 'block text-sm font-medium text-slate-700 mb-1';

  return (
    <div>
      <header
        className={
          embedded
            ? 'flex flex-wrap items-center justify-between gap-3 pb-4'
            : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3'
        }
      >
        <div>
          <h1 className="text-lg font-bold text-slate-800">AVT Preparedness Assessment</h1>
          <p className="text-xs text-slate-500">Page {page} of 2</p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-sm px-3 py-1.5 rounded-md font-medium text-slate-600 hover:bg-slate-100"
        >
          Start again
        </button>
      </header>

      {page === 1 ? (
        <section className="space-y-6" aria-label="Trust details">
          <h2 className="text-xl font-semibold text-slate-800">Trust Details</h2>
          <div className="grid grid-cols-1 gap-4 max-w-2xl">
            <div>
              <span className={labelClass}>Trust name</span>
              <p className="p-2 rounded border border-slate-200 bg-slate-50 text-slate-700">
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
          <div className="flex justify-end max-w-2xl">
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
        <section className="space-y-8" aria-label="Questions">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-800">Questions</h2>
            <p className="text-sm text-slate-500">
              {score.answered} of {SCORED_COUNT} scored questions answered
            </p>
          </div>

          {PREPAREDNESS_CATEGORIES.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-900 border-b border-blue-200 pb-1">
                {category}
              </h3>
              {PREPAREDNESS_QUESTIONS.filter((question) => question.category === category).map(
                (question) =>
                  question.kind === 'text' ? (
                    <div key={question.number}>
                      <label htmlFor={`prep-q-${question.number}`} className={labelClass}>
                        <span className="text-slate-400">Q{question.number}.</span> {question.text}
                      </label>
                      <textarea
                        id={`prep-q-${question.number}`}
                        value={state.texts[question.number] || ''}
                        onChange={(event) => setText(question.number, event.target.value)}
                        className={`${inputClass} h-20`}
                      />
                    </div>
                  ) : (
                    <fieldset key={question.number} className="rounded-md border border-slate-200 p-3">
                      <legend className="px-1 text-sm font-medium text-slate-700">
                        <span className="text-slate-400">Q{question.number}.</span> {question.text}
                      </legend>
                      <div className="mt-1 space-y-1">
                        {(question.options || []).map((option, index) => {
                          const optionNumber = index + 1;
                          const inputId = `prep-q-${question.number}-${optionNumber}`;
                          return (
                            <label
                              key={optionNumber}
                              htmlFor={inputId}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <input
                                id={inputId}
                                type="radio"
                                name={`prep-q-${question.number}`}
                                checked={state.answers[question.number] === optionNumber}
                                onChange={() => setAnswer(question.number, optionNumber)}
                                className="mt-1"
                              />
                              <span>
                                {optionNumber}. {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      {question.otherOption &&
                      state.answers[question.number] === question.otherOption ? (
                        <div className="mt-2">
                          <label
                            htmlFor={`prep-q-${question.number}-other`}
                            className="block text-xs font-medium text-slate-600 mb-1"
                          >
                            Q{question.number} other - please describe
                          </label>
                          <input
                            id={`prep-q-${question.number}-other`}
                            type="text"
                            value={state.texts[question.number] || ''}
                            onChange={(event) => setText(question.number, event.target.value)}
                            className={inputClass}
                          />
                        </div>
                      ) : null}
                    </fieldset>
                  )
              )}
            </div>
          ))}

          <div
            className="rounded-lg border border-slate-200 bg-white p-5 space-y-4"
            aria-label="Preparedness outcome"
          >
            <h3 className="text-lg font-semibold text-slate-800">Your Outcome</h3>
            {complete ? (
              <>
                <div className="flex flex-wrap items-center gap-4">
                  <span
                    className={`inline-flex items-center justify-center rounded-lg border-2 px-5 py-2 text-3xl font-bold ${GRADE_BADGE_CLASS[score.grade]}`}
                    aria-label={`Grade ${score.grade}`}
                  >
                    {score.grade}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-800">
                      You are a grade {score.grade} ({score.percentage.toFixed(0)}%)
                    </p>
                    <p className="text-sm text-slate-600">
                      {PREPAREDNESS_GRADE_DESCRIPTIONS[score.grade]}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  A notional, indicative outcome from the {SCORED_COUNT} scored maturity questions
                  only - free-text answers and the two &quot;select one&quot; context questions
                  (Q30, Q33) are not scored.
                </p>
              </>
            ) : (
              <p className="text-sm text-slate-500">
                Answer all {SCORED_COUNT} scored questions to see your grade (
                {SCORED_COUNT - score.answered} to go).
              </p>
            )}
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">By area</h4>
              <ul className="space-y-1">
                {categoryScores.map((entry) => (
                  <li key={entry.category} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{entry.category}</span>
                    <span className="text-slate-500">
                      {entry.answered === entry.total ? (
                        <span
                          className={`ml-2 inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${GRADE_BADGE_CLASS[gradeForPercentage(entry.percentage)]}`}
                        >
                          {gradeForPercentage(entry.percentage)}
                        </span>
                      ) : (
                        `${entry.answered}/${entry.total} answered`
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => setPage(1)}
              className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
            >
              Back to Trust Details
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
