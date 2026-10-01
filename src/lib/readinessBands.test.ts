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
  it('SHOULD give Embedding and Thriving their swapped colours', () => {
    expect(getReadinessBand(3)).toMatchObject({ label: 'Embedding', color: '#1522b0' });
    expect(getReadinessBand(5)).toMatchObject({ label: 'Thriving', color: '#4D7EA8' });
  });
});
