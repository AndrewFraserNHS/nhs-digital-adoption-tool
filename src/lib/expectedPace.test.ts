import { describe, expect, it } from 'vitest';

import { buildExpectedPace, paceFraction } from './expectedPace';

const components = [
  { id: 'a', label: 'A', target: 4, avgScore: 2 },
  { id: 'b', label: 'B', target: 2, avgScore: 1.5 },
  { id: 'c', label: 'C', target: 4, avgScore: 3 },
];

describe('expectedPace', () => {
  it('SHOULD return the share of the window elapsed WHERE both dates are valid', () => {
    // arrange / act / assert
    expect(paceFraction('2026-01-01', '2026-01-11', new Date('2026-01-06'))).toBeCloseTo(0.5);
    expect(paceFraction('2026-01-01', '2026-01-11', new Date('2025-12-01'))).toBe(0);
    expect(paceFraction('2026-01-01', '2026-01-11', new Date('2027-01-01'))).toBe(1);
  });

  it('SHOULD be undefined WHERE a date is missing or go-live is not after the start', () => {
    // arrange / act / assert
    expect(paceFraction(undefined, '2026-01-11', new Date())).toBeUndefined();
    expect(paceFraction('2026-01-11', '2026-01-01', new Date())).toBeUndefined();
  });

  it('SHOULD give every component the same share of its own target WHERE time is equal', () => {
    // arrange / act
    const summary = buildExpectedPace(components, '2026-01-01', '2026-01-11', new Date('2026-01-06'));

    // assert
    expect(summary?.rows.map((row) => row.expected)).toEqual([2, 1, 2]);
    expect(summary?.rows.map((row) => row.status)).toEqual(['on-pace', 'ahead', 'ahead']);
  });

  it('SHOULD mark components behind WHERE they are under the pace line, and recalc for a new go-live date', () => {
    // arrange
    const start = '2026-01-01';
    const asOf = new Date('2026-01-06');

    // act
    const sooner = buildExpectedPace(components, start, '2026-01-11', asOf);
    const later = buildExpectedPace(components, start, '2026-03-01', asOf);

    // assert
    expect(sooner?.behind).toBe(0);
    expect(later?.rows[0].expected).toBeLessThan(sooner?.rows[0].expected ?? 0);
    const tight = buildExpectedPace(components, start, '2026-01-07', asOf);
    expect(tight?.rows[0].status).toBe('behind');
  });
});
