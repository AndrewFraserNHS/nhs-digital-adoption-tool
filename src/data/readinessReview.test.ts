import type { AssessmentComponent } from '@data/components';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { buildComponentRadarChartData } from '@lib/adoptionMetrics';
import { describe, expect, it } from 'vitest';

import {
  buildReadinessReviewReport,
  buildReportScoreLookup,
  buildRadarSnapshot,
  buildReportRadarData,
  computeReadinessOutcome,
  DEFAULT_READINESS_QUESTIONS,
  describeReportOutcome,
  getMissingLensCoverage,
  getReportMissingLenses,
  PATHWAY_QUESTION,
  PREPAREDNESS_ASSESSMENT,
  resolveReadinessQuestions,
  shouldShowImpliedScore,
  type PreparednessAssessment,
} from './readinessReview';

const noExistingScores = () => undefined;

describe('readinessReview', () => {
  it('SHOULD define 36 questions, one per (component, lens) pair, matching components.ts', () => {
    // assert
    expect(PREPAREDNESS_ASSESSMENT).toHaveLength(36);
    expect(PREPAREDNESS_ASSESSMENT.map((q) => q.nu)).toEqual(
      Array.from({ length: 36 }, (_, index) => index + 1)
    );
    PREPAREDNESS_ASSESSMENT.forEach((question) => {
      const component = ASSESSMENT_COMPONENTS.find((c) => c.id === question.id);
      expect(component, `no component for id ${question.id}`).toBeDefined();
      expect(component?.lenses).toContain(question.lens);
      expect(question.phase).toBe(component?.phase);
      expect(question.target).toBe(component?.target);
      expect(question.answers).toHaveLength(5);
      expect(question.progress).toHaveLength(5);
    });
  });

  it('SHOULD offer no skip and no suggestions when nothing is answered', () => {
    // act
    const outcome = computeReadinessOutcome({}, ASSESSMENT_COMPONENTS, noExistingScores);

    // assert
    expect(outcome.skipToPhase).toBeNull();
    expect(outcome.readyComponentIds).toEqual([]);
    expect(outcome.suggestions).toEqual([]);
  });
});

describe('computeReadinessOutcome (synthetic fixture)', () => {
  // Two phases, two components each, one lens question per component - independent of the real
  // target calibration so this test doesn't depend on how the live content is scored.
  const COMPONENTS: AssessmentComponent[] = [
    { id: 'a1', label: 'A1', lenses: ['Lens'], phase: 1, target: 2 },
    { id: 'a2', label: 'A2', lenses: ['Lens'], phase: 1, target: 2 },
    { id: 'b1', label: 'B1', lenses: ['Lens'], phase: 2, target: 2 },
    { id: 'b2', label: 'B2', lenses: ['Lens'], phase: 2, target: 2 },
  ];
  const QUESTIONS = [
    { nu: 1, id: 'a1', label: 'A1', lens: 'Lens', question: 'Q1', phase: 1, target: 2 },
    { nu: 2, id: 'a2', label: 'A2', lens: 'Lens', question: 'Q2', phase: 1, target: 2 },
    { nu: 3, id: 'b1', label: 'B1', lens: 'Lens', question: 'Q3', phase: 2, target: 2 },
    { nu: 4, id: 'b2', label: 'B2', lens: 'Lens', question: 'Q4', phase: 2, target: 2 },
  ].map((q) => ({
    ...q,
    answers: ['1. a', '2. b', '3. c', '4. d', '5. e'] as [
      string,
      string,
      string,
      string,
      string,
    ],
    progress: [0, 0, 1, 1, 2] as [number, number, number, number, number],
  }));

  it('SHOULD offer to skip to phase 2 WHEN every phase-1 component meets its target', () => {
    // act - answer 5 on both phase-1 questions (implied score 2, meets target 2); leave phase 2 unanswered
    const outcome = computeReadinessOutcome({ 1: 5, 2: 5 }, COMPONENTS, noExistingScores, QUESTIONS);

    // assert
    expect(outcome.skipToPhase).toBe(2);
    expect(outcome.readyComponentIds.sort()).toEqual(['a1', 'a2']);
  });

  it('SHOULD offer nothing WHEN phase 1 is not fully ready, even if phase 2 answers are strong', () => {
    // act - a1 falls short (answer 1 -> implied score 0), b1/b2 answered strongly
    const outcome = computeReadinessOutcome(
      { 1: 1, 2: 5, 3: 5, 4: 5 },
      COMPONENTS,
      noExistingScores,
      QUESTIONS
    );

    // assert
    expect(outcome.skipToPhase).toBeNull();
  });

  it('SHOULD offer nothing WHEN every phase is fully ready (nothing left to skip)', () => {
    // act
    const outcome = computeReadinessOutcome(
      { 1: 5, 2: 5, 3: 5, 4: 5 },
      COMPONENTS,
      noExistingScores,
      QUESTIONS
    );

    // assert
    expect(outcome.skipToPhase).toBeNull();
    expect(outcome.readyComponentIds.sort()).toEqual(['a1', 'a2', 'b1', 'b2']);
  });

  it('SHOULD only suggest a readiness-level update WHEN the implied score beats what is already recorded', () => {
    // arrange - a1 already recorded at 2 (== implied score for answer 5), a2 recorded at 0
    const getEntry = (componentId: string) =>
      componentId === 'a1' ? { score: 2 } : { score: 0 };

    // act
    const outcome = computeReadinessOutcome({ 1: 5, 2: 5 }, COMPONENTS, getEntry, QUESTIONS);

    // assert - only a2 is an improvement; a1's implied score doesn't beat its current score
    expect(outcome.suggestions).toEqual([
      {
        componentId: 'a2',
        componentLabel: 'A2',
        lens: 'Lens',
        currentScore: 0,
        impliedScore: 2,
      },
    ]);
  });

  const TRUST_DETAILS = {
    trustName: 'Test Trust',
    icbRegion: 'North West ICB',
    completedBy: 'Alex Morgan (Change Lead)',
    dateCompleted: '2026-01-01',
    programmeLead: 'Sam Patel',
    contactEmail: 'sam@example.nhs.uk',
  };

  it('SHOULD build a frozen report with one answer per answered question and a matching outcome', () => {
    // act - phase 1 fully at the top answer (skips to phase 2), phase 2 left unanswered
    const report = buildReadinessReviewReport(TRUST_DETAILS, { 1: 5, 2: 5 }, COMPONENTS, QUESTIONS);

    // assert - trust details carried through unchanged, plus a generated timestamp
    expect(report).toMatchObject(TRUST_DETAILS);
    expect(report.generatedAt).toEqual(expect.any(String));

    // assert - one answer per answered question, with its option text and implied score
    expect(report.answers).toEqual([
      {
        nu: 1,
        componentId: 'a1',
        componentLabel: 'A1',
        lens: 'Lens',
        question: 'Q1',
        optionNumber: 5,
        optionText: '5. e',
        impliedScore: 2,
        kind: 'choice',
      },
      {
        nu: 2,
        componentId: 'a2',
        componentLabel: 'A2',
        lens: 'Lens',
        question: 'Q2',
        optionNumber: 5,
        optionText: '5. e',
        impliedScore: 2,
        kind: 'choice',
      },
    ]);

    // assert - the frozen outcome matches computeReadinessOutcome given the same answers
    expect(report.outcome).toEqual({ skipToPhase: 2, readyComponentIds: ['a1', 'a2'] });
  });

  it('SHOULD build a radar-ready score lookup from a report, defaulting uncovered lenses to 0', () => {
    // arrange
    const report = buildReadinessReviewReport(TRUST_DETAILS, { 1: 5 }, COMPONENTS, QUESTIONS);

    // act
    const getEntry = buildReportScoreLookup(report);

    // assert
    expect(getEntry('a1', 'Lens').score).toBe(2);
    expect(getEntry('a2', 'Lens').score).toBe(0);
    expect(getEntry('a1', 'Some other lens').score).toBe(0);
  });
});

describe('unscored, pathway and coverage handling', () => {
  const COMPONENTS: AssessmentComponent[] = [
    { id: 'a1', label: 'A1', lenses: ['L1', 'L2'], phase: 1, target: 2 },
  ];
  const scored = (nu: number, lens: string): PreparednessAssessment => ({
    nu,
    id: 'a1',
    label: 'A1',
    lens,
    question: `Q${nu}`,
    answers: ['1', '2', '3', '4', '5'],
    progress: [0, 0, 1, 1, 2],
    phase: 1,
    target: 2,
  });
  const textQuestion: PreparednessAssessment = {
    nu: 1001,
    id: '',
    label: 'Custom',
    lens: '',
    question: 'Anything else?',
    answers: [],
    progress: [],
    phase: 0,
    target: 0,
    kind: 'text',
    custom: true,
  };
  const TRUST = {
    trustName: 'T',
    icbRegion: '',
    completedBy: '',
    dateCompleted: '',
    programmeLead: '',
    contactEmail: '',
  };

  it('SHOULD start the default questions with the pathway question', () => {
    expect(DEFAULT_READINESS_QUESTIONS[0]).toBe(PATHWAY_QUESTION);
    expect(DEFAULT_READINESS_QUESTIONS.length).toBe(PREPAREDNESS_ASSESSMENT.length + 1);
  });

  it('SHOULD carry text and pathway answers without scoring them', () => {
    const questions = [PATHWAY_QUESTION, scored(1, 'L1'), textQuestion];
    const report = buildReadinessReviewReport(
      TRUST,
      { [PATHWAY_QUESTION.nu]: 2, 1: 5 },
      COMPONENTS,
      questions,
      { 1001: ' mid-pilot ' }
    );

    expect(report.pathway).toBe('pathway-2');
    expect(report.answers.map((a) => [a.nu, a.impliedScore])).toEqual([
      [100, null],
      [1, 2],
      [1001, null],
    ]);
    expect(report.answers[2].optionText).toBe('mid-pilot');
  });

  it('SHOULD report component lenses that have no scored answer', () => {
    const questions = [scored(1, 'L1'), textQuestion];

    expect(getMissingLensCoverage(COMPONENTS, questions, { 1: 3 })).toEqual([
      { componentId: 'a1', componentLabel: 'A1', lens: 'L2' },
    ]);
    expect(
      getMissingLensCoverage(COMPONENTS, [scored(1, 'L1'), scored(2, 'L2')], { 1: 3, 2: 1 })
    ).toEqual([]);

    const report = buildReadinessReviewReport(TRUST, { 1: 3 }, COMPONENTS, questions);
    expect(getReportMissingLenses(COMPONENTS, report)).toHaveLength(1);
  });

  it('SHOULD only show the implied score column when a mapping falls outside 0-4', () => {
    const answer = (impliedScore: number | null) => ({
      nu: 1,
      componentId: 'a1',
      componentLabel: 'A1',
      lens: 'L1',
      question: 'Q',
      optionNumber: 1,
      optionText: 'x',
      impliedScore,
    });

    expect(shouldShowImpliedScore([answer(0), answer(2), answer(4), answer(null)])).toBe(false);
    expect(shouldShowImpliedScore([answer(1), answer(5)])).toBe(true);
    expect(shouldShowImpliedScore([answer(2.5)])).toBe(true);
  });

  it('SHOULD refresh unedited built-in questions from the defaults but keep edited and custom ones', () => {
    const [pathway, first, second] = DEFAULT_READINESS_QUESTIONS;
    const staleFirst = { ...first, progress: [9, 9, 9, 9, 9] };
    const editedSecond = { ...second, question: 'Reworded', edited: true };
    const custom = { ...second, nu: 1001, id: '', progress: [], custom: true };

    const resolved = resolveReadinessQuestions([editedSecond, custom, staleFirst, pathway]);

    expect(resolved[0].question).toBe('Reworded');
    expect(resolved[1]).toBe(custom);
    expect(resolved[2]).toBe(first);
    expect(resolved.length).toBe(DEFAULT_READINESS_QUESTIONS.length + 1);
    expect(resolveReadinessQuestions(undefined)).toBe(DEFAULT_READINESS_QUESTIONS);
  });

  it('SHOULD treat Adopted as ready WHEN the component requires Thriving', () => {
    const thriving: AssessmentComponent[] = [
      { id: 'a1', label: 'A1', lenses: ['L1'], phase: 1, target: 5 },
      { id: 'a2', label: 'A2', lenses: ['L1'], phase: 2, target: 5 },
    ];
    const adopted = (nu: number, id: string): PreparednessAssessment => ({
      ...scored(nu, 'L1'),
      id,
      progress: [0, 1, 2, 3, 4],
    });

    const outcome = computeReadinessOutcome(
      { 1: 5, 2: 4 },
      thriving,
      () => undefined,
      [adopted(1, 'a1'), adopted(2, 'a2')]
    );

    expect(outcome.readyComponentIds).toEqual(['a1']);
    expect(outcome.skipToPhase).toBe(2);
  });

  it('SHOULD describe the outcome by what the team actually did, not just what answers implied', () => {
    const base = buildReadinessReviewReport(TRUST, { 1: 5 }, COMPONENTS, [scored(1, 'L1')]);
    const name = (phase: number) => `P${phase}`;
    const offered = { ...base, outcome: { skipToPhase: 3, readyComponentIds: [] } };

    expect(describeReportOutcome({ ...offered, decision: 'applied', appliedSkipToPhase: 3 }, name)).toBe(
      'Skipped to Phase 3: P3.'
    );
    expect(describeReportOutcome({ ...offered, decision: 'declined' }, name)).toContain('(not applied)');
    expect(describeReportOutcome({ ...offered, decision: 'pending' }, name)).toContain('suggest skipping');
    expect(describeReportOutcome({ ...base, outcome: { skipToPhase: null, readyComponentIds: [] } }, name)).toBe(
      'Answers did not suggest skipping any phase.'
    );
    expect(describeReportOutcome({ ...base, decision: 'skipped' }, name)).toContain('starts at Phase 1');
  });

  it('SHOULD build the same radar data from a frozen snapshot as from the live entries it captured', () => {
    const live = (_componentId: string, lens: string) => ({
      score: lens === 'L1' ? 3 : 0,
      rationale: '',
      evidence: '',
      actions: [],
    });
    const report = {
      ...buildReadinessReviewReport(TRUST, {}, COMPONENTS, []),
      radar: buildRadarSnapshot(COMPONENTS, live, 2),
    };

    const fromSnapshot = buildReportRadarData(report, COMPONENTS);

    expect(fromSnapshot).toEqual(buildComponentRadarChartData(COMPONENTS, live, 2));
    expect(fromSnapshot.datasets[1].label).toBe('Exemplar (Phase 2)');
  });
});
