import { describe, expect, it } from 'vitest';

import { getPhasePassScore, getReadinessBand } from './readinessBands';

describe('getPhasePassScore', () => {
  it('SHOULD accept Adopted WHEN Thriving is required, and otherwise require the score itself', () => {
    expect(getPhasePassScore(5)).toBe(4);
    expect(getPhasePassScore(4)).toBe(4);
    expect(getPhasePassScore(3)).toBe(3);
    expect(getPhasePassScore(0)).toBe(0);
  });
});

describe('getReadinessBand', () => {
  it('SHOULD map each score to its band label and give every band its own colour', () => {
    const bands = [0, 1, 2, 3, 4, 5].map((score) => getReadinessBand(score));
    expect(bands.map((band) => band.label)).toEqual([
      'Not Started',
      'Emerging',
      'Developing',
      'Embedding',
      'Adopted',
      'Thriving',
    ]);
    expect(new Set(bands.map((band) => band.color)).size).toBe(6);
  });
});
