import type { AssessmentComponent } from '@data/components';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { describe, expect, it } from 'vitest';

import { computeReadinessOutcome, PREPAREDNESS_ASSESSMENT } from './readinessReview';

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
});
