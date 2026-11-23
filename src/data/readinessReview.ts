import type { AssessmentComponent } from '@data/components';
import { type CstPathwayKey, PATHWAY_OPTIONS } from '@data/cst';
import preparednessAssessmentData from '@data/preparedness-assessment.json';
import {
  buildComponentRadarChartData,
  computeCurrentPhase,
  type RadarTargetMode,
} from '@lib/adoptionMetrics';
import type { DraftEntry } from '@lib/adoptionState';
import { getPhasePassScore } from '@lib/readinessBands';
import type { ChartData } from 'chart.js';

import { PHASE_NAMES } from '../types/constants';

export type ReadinessQuestionKind = 'choice' | 'text' | 'pathway' | 'phase-self-assessment';

export interface PreparednessAssessment {
  /** Stable answer key - never reused or renumbered, so reordering questions is safe. */
  nu: number;
  /** The assessment component this question scores; empty for unscored (custom / pathway) questions. */
  id: string;
  label: string;
  lens: string;
  question: string;
  answers: string[];
  /** Implied 0-5 score per answer; empty for questions that don't score anything. */
  progress: number[];
  phase: number;
  target: number;
  /** Defaults to 'choice'. Text questions take a free-text answer; 'pathway' picks a CST pathway. */
  kind?: ReadinessQuestionKind;
  custom?: boolean;
  /** Set once a project has reworded a built-in question or changed its answer levels; until then the built-in wording and levels apply. */
  edited?: boolean;
}

export function isScoredQuestion(question: PreparednessAssessment): boolean {
  return Boolean(question.id) && question.progress.length > 0;
}

export const PATHWAY_QUESTION_NU = 100;

export const PATHWAY_QUESTION: PreparednessAssessment = {
  nu: PATHWAY_QUESTION_NU,
  id: '',
  label: 'Pathway',
  lens: '',
  question: 'Which pathway are you on?',
  answers: PATHWAY_OPTIONS.map((option) => option.label),
  progress: [],
  phase: 0,
  target: 0,
  kind: 'pathway',
};

export function pathwayFromAnswer(optionNumber: number | undefined): CstPathwayKey | null {
  return (optionNumber && PATHWAY_OPTIONS[optionNumber - 1]?.value) || null;
}

export const PHASE_SELF_ASSESSMENT_QUESTION_NU = 101;

export const PHASE_SELF_ASSESSMENT_QUESTION: PreparednessAssessment = {
  nu: PHASE_SELF_ASSESSMENT_QUESTION_NU,
  id: '',
  label: 'Phase',
  lens: '',
  question: 'What phase do you think you are in?',
  answers: Object.keys(PHASE_NAMES)
    .map(Number)
    .sort((a, b) => a - b)
    .map((phase) => {
      const phaseDescriptor =
        phase === 1
          ? 'Define the change'
          : phase === 2
            ? 'Prepare the change'
            : phase === 3
              ? 'Plan the change'
              : phase === 4
                ? 'Manage implementation of the change'
                : 'Reinforce and sustain the change';
      return `Phase ${phase}: ${PHASE_NAMES[phase]} - ${phaseDescriptor}`;
    }),
  progress: [],
  phase: 0,
  target: 0,
  kind: 'phase-self-assessment',
};

/** Each option is itself a phase number (1-5), so the implied phase is just the chosen option. */
export function phaseFromAnswer(optionNumber: number | undefined): number | null {
  return optionNumber || null;
}

// The built-in question text lives in JSON so the build can obfuscate it (see scripts/obfuscateDataPlugin.ts).
export const PREPAREDNESS_ASSESSMENT: PreparednessAssessment[] = preparednessAssessmentData as PreparednessAssessment[];

export const DEFAULT_READINESS_QUESTIONS: PreparednessAssessment[] = [
  PATHWAY_QUESTION,
  PHASE_SELF_ASSESSMENT_QUESTION,
  ...PREPAREDNESS_ASSESSMENT,
];

/**
 * The questions a project actually asks: its saved list, except that built-in questions the
 * project never edited always use the current built-in wording and levels (so updates to the
 * defaults reach existing projects), and any built-in question missing from the saved list is added.
 */
export function resolveReadinessQuestions(
  stored?: PreparednessAssessment[]
): PreparednessAssessment[] {
  if (!stored) {
    return DEFAULT_READINESS_QUESTIONS;
  }
  const defaultsByNu = new Map(
    DEFAULT_READINESS_QUESTIONS.map((question) => [question.nu, question])
  );
  const seen = new Set<number>();
  const resolved = stored.map((question) => {
    seen.add(question.nu);
    const builtIn = defaultsByNu.get(question.nu);
    return builtIn && !question.custom && !question.edited ? builtIn : question;
  });
  return [...resolved, ...DEFAULT_READINESS_QUESTIONS.filter((question) => !seen.has(question.nu))];
}

/** A suggested readiness-level update for a single (component, lens) pair, implied by one question's answer. */
export interface ReadinessSuggestion {
  componentId: string;
  componentLabel: string;
  lens: string;
  currentScore: number;
  impliedScore: number;
}

export interface ReadinessOutcome {
  /** Per (component, lens) readiness-level updates worth offering - only where the answer implies a higher score than what's currently recorded. */
  suggestions: ReadinessSuggestion[];
  /** The phase the user could skip straight to, or null if phase 1 itself isn't fully ready yet (or they're already ready for everything). */
  skipToPhase: number | null;
  /** Component ids found to be at/above their target score, based on the quiz answers. */
  readyComponentIds: string[];
  /** What "What phase do you think you are in?" (nu 101) implied, or null if unanswered. */
  selfAssessedPhase: number | null;
  /** Lenses of components at or before the self-assessed phase that aren't yet at their target - what the team is currently behind on. Empty when the question is unanswered. */
  behindLenses: MissingLens[];
}

/**
 * Works out what the user's answers suggest updating: a per (component, lens) readiness-level
 * suggestion for every question whose implied score (`progress[answer-1]`) beats what's currently
 * recorded, plus - using the same component target scores shown on the readiness radar
 * (`AssessmentComponent.target`) - whether whole phases are already fully ready to skip past.
 *
 * `progress[answer-1]` is a real score on the same 0-5 scale as `DraftEntry.score` - not a
 * separate band that needs converting. Today's questions only ever imply as high as 2 (by design -
 * they only cover the earliest part of the journey so far), so most components won't reach their
 * target from this quiz alone and a full phase skip will rarely be offered yet; that's expected,
 * not a bug - later questions can imply higher scores once written.
 *
 * A component's implied score (for the phase-skip calculation only) is the minimum across its lens
 * questions - its weakest lens gates it, same convention as the component radar. A phase counts as
 * "ready" only once every component in it meets or exceeds its target. Phases are walked from 1
 * upward and the streak stops at the first phase that isn't fully ready, so the offer is always to
 * skip a contiguous run starting at phase 1.
 */
export function computeReadinessOutcome(
  answers: Record<number, number>,
  components: AssessmentComponent[],
  getEntry: (componentId: string, lens: string) => { score: number } | undefined,
  questions: PreparednessAssessment[] = PREPAREDNESS_ASSESSMENT
): ReadinessOutcome {
  const componentById = new Map(components.map((component) => [component.id, component]));
  const impliedScoresByComponent = new Map<string, number[]>();
  const suggestions: ReadinessSuggestion[] = [];

  questions.forEach((question) => {
    const answer = answers[question.nu];
    if (!answer) {
      return;
    }
    const impliedScore = question.progress[answer - 1];
    const component = componentById.get(question.id);
    if (!component || impliedScore === undefined) {
      return;
    }

    const existing = impliedScoresByComponent.get(question.id) || [];
    existing.push(impliedScore);
    impliedScoresByComponent.set(question.id, existing);

    const currentScore = Number(getEntry(question.id, question.lens)?.score || 0);
    if (impliedScore > currentScore) {
      suggestions.push({
        componentId: question.id,
        componentLabel: component.label,
        lens: question.lens,
        currentScore,
        impliedScore,
      });
    }
  });

  const readyComponentIds: string[] = [];
  components.forEach((component) => {
    const scores = impliedScoresByComponent.get(component.id);
    if (!scores || scores.length === 0) {
      return;
    }
    const componentScore = Math.min(...scores);
    if (componentScore >= getPhasePassScore(component.target)) {
      readyComponentIds.push(component.id);
    }
  });
  const readySet = new Set(readyComponentIds);

  const phases = Array.from(new Set(components.map((component) => component.phase))).sort(
    (a, b) => a - b
  );

  let lastReadyPhase = 0;
  for (const phase of phases) {
    const phaseComponents = components.filter((component) => component.phase === phase);
    const phaseFullyReady = phaseComponents.every((component) => readySet.has(component.id));
    if (!phaseFullyReady) {
      break;
    }
    lastReadyPhase = phase;
  }

  const maxPhase = phases.length ? Math.max(...phases) : 0;
  const skipToPhase =
    lastReadyPhase === 0 || lastReadyPhase >= maxPhase ? null : lastReadyPhase + 1;

  let selfAssessedPhase: number | null = null;
  const phaseQuestion = questions.find((question) => question.kind === 'phase-self-assessment');
  if (phaseQuestion) {
    const answer = answers[phaseQuestion.nu];
    selfAssessedPhase = phaseFromAnswer(answer);
  }

  const behindLenses: MissingLens[] = [];
  if (selfAssessedPhase) {
    components
      .filter((component) => component.phase <= selfAssessedPhase)
      .forEach((component) => {
        component.lenses.forEach((lens) => {
          const currentScore = Number(getEntry(component.id, lens)?.score || 0);
          if (currentScore < getPhasePassScore(component.target)) {
            behindLenses.push({ componentId: component.id, componentLabel: component.label, lens });
          }
        });
      });
  }

  return { suggestions, skipToPhase, readyComponentIds, selfAssessedPhase, behindLenses };
}

/** Where the last completed Change Adoption Baseline (CAB)'s frozen report snapshot is saved - shared between `ChangeAdoptionBaselineReviewApp` (writes it on Finish) and `ChangeAdoptionBaselineAnalysisApp` (reads it for "My Answers"). */
export const READINESS_REVIEW_REPORT_STORAGE_KEY = 'nhs-readiness-review-report';
export const READINESS_REVIEW_IMPORTED_REPORT_STORAGE_KEY = 'nhs-readiness-review-imported-report';

/** One answered question, frozen into a report: everything needed to display or re-derive a radar from it later, independent of the live question bank or CST. */
export interface ReadinessReviewAnswer {
  nu: number;
  componentId: string;
  componentLabel: string;
  lens: string;
  question: string;
  optionNumber: number;
  /** The chosen option's text, or the typed answer for a free-text question. */
  optionText: string;
  /** Null for questions that don't score a component lens (free-text, custom, pathway). */
  impliedScore: number | null;
  /** Absent in older reports, which only had scored choice questions. */
  kind?: ReadinessQuestionKind;
}

export interface ReadinessReviewTrustDetails {
  trustName: string;
  icbRegion: string;
  completedBy: string;
  dateCompleted: string;
  leadSubmitter: string;
  contactEmail: string;
  /** Name of the executive sponsor / SRO from the project profile. */
  executiveSponsor?: string;
}

/** What the team did with the outcome offered when the review finished. */
export type ReadinessReviewDecision = 'pending' | 'applied' | 'declined' | 'skipped';

/**
/** The readiness radar exactly as the Adoption Baseline page showed it once the outcome was applied
 * (or declined): frozen scores, progress-derived automatic phase and optional CAB-selected manual
 * phase. Every radar rendering of a report (page, PDF, analysis tool) reads this.
 */
export interface ReadinessReviewRadarSnapshot {
  /** Progress-derived phase used for the automatic target. */
  phase: number;
  /** Phase selected by the user in CAB Question 2. */
  manualPhase?: number | null;
  entries: Record<string, { score: number; assessed: boolean }>;
}

/**
 * A full, frozen snapshot of one completed Change Adoption Baseline (CAB) - every answered question plus the
 * outcome computed from them at the time. Used both for the emailed JSON attachment and for the
 * "Change Adoption Baseline (CAB) Analysis" tool's "My Answers" view, and is exactly the shape an "Import
 * External Answers" file is expected to be in, so both views can share one renderer.
 */
export interface ReadinessReviewReport extends ReadinessReviewTrustDetails {
  generatedAt: string;
  answers: ReadinessReviewAnswer[];
  /** The pathway the team said they should be on (question 1), if answered. */
  pathway?: CstPathwayKey | null;
  /** Absent in reports made before the outcome decision was recorded. */
  decision?: ReadinessReviewDecision;
  /** The phase the team actually skipped to when they accepted the offer. */
  appliedSkipToPhase?: number | null;
  /** Absent in older reports; those fall back to the answers-implied scores. */
  radar?: ReadinessReviewRadarSnapshot;
  outcome: { skipToPhase: number | null; readyComponentIds: string[] };
}

const lensKey = (componentId: string, lens: string) => `${componentId}:${lens}`;

/** Freezes the current readiness of every component lens. `overrides` carries scores that were just applied but haven't reached the store yet. */
export function buildRadarSnapshot(
  components: AssessmentComponent[],
  getEntry: (componentId: string, lens: string) => DraftEntry | undefined,
  phase: number,
  overrides: Record<string, number> = {},
  manualPhase: number | null = null
): ReadinessReviewRadarSnapshot {
  const entries: ReadinessReviewRadarSnapshot['entries'] = {};
  components.forEach((component) => {
    component.lenses.forEach((lens) => {
      const key = lensKey(component.id, lens);
      const entry = getEntry(component.id, lens);
      if (key in overrides) {
        entries[key] = { score: overrides[key], assessed: true };
        return;
      }
      entries[key] = {
        score: Number(entry?.score || 0),
        assessed: Boolean(
          Number(entry?.score || 0) > 0 ||
          entry?.rationale?.trim() ||
          entry?.evidence?.trim() ||
          (entry?.actions || []).length > 0
        ),
      };
    });
  });
  return { phase, manualPhase, entries };
}

/** The radar data for a report, built the same way as the Adoption Baseline page's radar. */
export function buildReportRadarData(
  report: ReadinessReviewReport,
  components: AssessmentComponent[]
): ChartData<'radar'> {
  const manualPhaseAnswer = report.answers.find(
    (answer) => answer.kind === 'phase-self-assessment'
  );
  const manualPhase = report.radar?.manualPhase ?? manualPhaseAnswer?.optionNumber ?? null;
  const targetMode: RadarTargetMode = manualPhase ? 'both' : 'auto';

  if (!report.radar) {
    // Older reports saved before the radar snapshot existed - fall back to the answers-implied
    // scores, but still work out a phase so the exemplar line matches the phase-specific targets
    // shown elsewhere, rather than the flat "Target Average" line.
    const scoreLookup = buildReportScoreLookup(report);
    const phase = computeCurrentPhase(
      components,
      (componentId, lens) => scoreLookup(componentId, lens).score
    );
    return buildComponentRadarChartData(
      components,
      scoreLookup,
      phase,
      undefined,
      targetMode,
      manualPhase ?? undefined
    );
  }
  const { entries, phase } = report.radar;
  return buildComponentRadarChartData(
    components,
    (componentId, lens): DraftEntry => {
      const entry = entries[lensKey(componentId, lens)];
      return {
        score: entry?.score ?? 0,
        rationale: entry?.assessed ? 'assessed' : '',
        evidence: '',
        actions: [],
      };
    },
    phase,
    undefined,
    targetMode,
    manualPhase ?? undefined
  );
}

/** Wording for the report/PDF outcome line, shared by the PDF and the analysis tool. */
export function describeReportOutcome(
  report: ReadinessReviewReport,
  phaseName: (phase: number) => string
): string {
  const offered = report.outcome.skipToPhase;
  if (report.decision === 'skipped') {
    return 'The team skipped the assessment and starts at Phase 1.';
  }
  if (report.decision === 'applied' && report.appliedSkipToPhase) {
    return `Skipped to Phase ${report.appliedSkipToPhase}: ${phaseName(report.appliedSkipToPhase)}.`;
  }
  if (offered) {
    return report.decision === 'declined' || report.decision === 'applied'
      ? `Answers suggested skipping to Phase ${offered}: ${phaseName(offered)} (not applied).`
      : `Answers suggest skipping to Phase ${offered}: ${phaseName(offered)}.`;
  }
  return 'Answers did not suggest skipping any phase.';
}

export function buildReadinessReviewReport(
  trustDetails: ReadinessReviewTrustDetails,
  answers: Record<number, number>,
  components: AssessmentComponent[],
  questions: PreparednessAssessment[] = PREPAREDNESS_ASSESSMENT,
  textAnswers: Record<number, string> = {}
): ReadinessReviewReport {
  const componentById = new Map(components.map((component) => [component.id, component]));

  const reportAnswers: ReadinessReviewAnswer[] = [];
  questions.forEach((question) => {
    const kind = question.kind ?? 'choice';
    const base = {
      nu: question.nu,
      componentId: question.id,
      componentLabel: componentById.get(question.id)?.label || question.label,
      lens: question.lens,
      question: question.question,
      kind,
    };
    if (kind === 'text') {
      const text = (textAnswers[question.nu] || '').trim();
      if (text) {
        reportAnswers.push({ ...base, optionNumber: 0, optionText: text, impliedScore: null });
      }
      return;
    }
    const optionNumber = answers[question.nu];
    if (!optionNumber) {
      return;
    }
    reportAnswers.push({
      ...base,
      optionNumber,
      optionText: question.answers[optionNumber - 1],
      impliedScore: question.progress[optionNumber - 1] ?? null,
    });
  });

  const pathwayQuestion = questions.find((question) => question.kind === 'pathway');

  // No existing scores to compare against for a frozen report - every answered question's implied
  // score is treated as "current" already, so the outcome reflects the answers alone.
  const outcome = computeReadinessOutcome(answers, components, () => undefined, questions);

  return {
    ...trustDetails,
    generatedAt: new Date().toISOString(),
    answers: reportAnswers,
    pathway: pathwayQuestion ? pathwayFromAnswer(answers[pathwayQuestion.nu]) : null,
    outcome: { skipToPhase: outcome.skipToPhase, readyComponentIds: outcome.readyComponentIds },
  };
}

/**
 * A read-only `getEntry`-shaped lookup over a frozen report's answers, for feeding the existing
 * radar builder (`buildComponentRadarChartData`) the same way the live CST does. Any (component,
 * lens) the report's questions don't cover defaults to score 0, same convention as an unassessed
 * lens elsewhere in the app.
 */
export function buildReportScoreLookup(
  report: ReadinessReviewReport
): (componentId: string, lens: string) => DraftEntry {
  const scoreByKey = new Map<string, number>();
  report.answers.forEach((answer) => {
    if (answer.impliedScore !== null && answer.impliedScore !== undefined) {
      scoreByKey.set(`${answer.componentId}:${answer.lens}`, answer.impliedScore);
    }
  });
  return (componentId, lens) => ({
    score: scoreByKey.get(`${componentId}:${lens}`) ?? 0,
    rationale: '',
    evidence: '',
    actions: [],
  });
}

export interface MissingLens {
  componentId: string;
  componentLabel: string;
  lens: string;
}

function findMissingLenses(components: AssessmentComponent[], covered: Set<string>): MissingLens[] {
  return components.flatMap((component) =>
    component.lenses
      .filter((lens) => !covered.has(`${component.id}:${lens}`))
      .map((lens) => ({ componentId: component.id, componentLabel: component.label, lens }))
  );
}

/** Every component lens needs a scored answer, otherwise the radar shows a gap for that component. */
export function getMissingLensCoverage(
  components: AssessmentComponent[],
  questions: PreparednessAssessment[],
  answers: Record<number, number>
): MissingLens[] {
  const covered = new Set(
    questions
      .filter(
        (question) =>
          isScoredQuestion(question) &&
          question.progress[(answers[question.nu] || 0) - 1] !== undefined
      )
      .map((question) => `${question.id}:${question.lens}`)
  );
  return findMissingLenses(components, covered);
}

export function getReportMissingLenses(
  components: AssessmentComponent[],
  report: ReadinessReviewReport
): MissingLens[] {
  const covered = new Set(
    report.answers
      .filter((answer) => answer.impliedScore !== null && answer.impliedScore !== undefined)
      .map((answer) => `${answer.componentId}:${answer.lens}`)
  );
  return findMissingLenses(components, covered);
}

/** The implied score column is only informative if some answer maps outside the plain 0-4 levels. */
export function shouldShowImpliedScore(answers: ReadinessReviewAnswer[]): boolean {
  return answers.some(
    (answer) =>
      answer.impliedScore !== null &&
      answer.impliedScore !== undefined &&
      ![0, 1, 2, 3, 4].includes(answer.impliedScore)
  );
}
