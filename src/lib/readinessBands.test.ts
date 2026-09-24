import { describe, expect, it } from 'vitest';

import { getPhasePassScore } from './readinessBands';

describe('getPhasePassScore', () => {
  it('SHOULD accept Adopted WHEN Thriving is required, and otherwise require the score itself', () => {
    expect(getPhasePassScore(5)).toBe(4);
    expect(getPhasePassScore(4)).toBe(4);
    expect(getPhasePassScore(3)).toBe(3);
    expect(getPhasePassScore(0)).toBe(0);
  });
});
