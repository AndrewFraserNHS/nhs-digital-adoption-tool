import { describe, expect, it } from 'vitest';

import {
  gradeForPercentage,
  PREPAREDNESS_CATEGORIES,
  PREPAREDNESS_QUESTIONS,
  scorePreparedness,
} from './preparednessAssessment';

const scaleQuestions = PREPAREDNESS_QUESTIONS.filter((question) => question.kind === 'scale');

function answersAt(pick: (max: number) => number): Record<number, number> {
  return Object.fromEntries(
    scaleQuestions.map((question) => [question.number, pick(question.options?.length || 0)])
  );
}

describe('preparednessAssessment', () => {
  it('SHOULD define the 35 numbered questions across 7 categories', () => {
    // assert
    expect(PREPAREDNESS_QUESTIONS.map((question) => question.number)).toEqual(
      Array.from({ length: 35 }, (_, index) => index + 1)
    );
    expect(PREPAREDNESS_CATEGORIES).toHaveLength(7);
  });

  it('SHOULD score only the maturity-scale questions (not free text or the select-one context questions)', () => {
    // assert
    expect(scaleQuestions).toHaveLength(24);
    expect(
      PREPAREDNESS_QUESTIONS.filter((question) => question.kind === 'select').map((q) => q.number)
    ).toEqual([30, 33]);
    expect(PREPAREDNESS_QUESTIONS.filter((question) => question.kind === 'text')).toHaveLength(9);
  });

  it('SHOULD grade every top answer A* (100%) and every bottom answer D (0%)', () => {
    // act
    const best = scorePreparedness(answersAt((max) => max));
    const worst = scorePreparedness(answersAt(() => 1));

    // assert
    expect(best).toMatchObject({ percentage: 100, grade: 'A*', answered: 24, total: 24 });
    expect(worst).toMatchObject({ percentage: 0, grade: 'D', answered: 24, total: 24 });
  });

  it('SHOULD weight 4-point and 6-point scales equally', () => {
    // arrange - Q1 is a 4-point scale (option 4 = 100%), Q3 a 6-point scale (option 6 = 100%)
    // act
    const score = scorePreparedness({ 1: 4, 3: 6 });

    // assert
    expect(score.percentage).toBe(100);
  });

  it('SHOULD map percentages to A*-D grades at the notional thresholds', () => {
    // assert
    expect(gradeForPercentage(90)).toBe('A*');
    expect(gradeForPercentage(89.9)).toBe('A');
    expect(gradeForPercentage(75)).toBe('A');
    expect(gradeForPercentage(60)).toBe('B');
    expect(gradeForPercentage(40)).toBe('C');
    expect(gradeForPercentage(39.9)).toBe('D');
  });
});
