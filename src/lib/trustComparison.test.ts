import { describe, expect, it } from 'vitest';

import {
  alignedDate,
  allSameTrust,
  getSourceMeta,
  headStartNote,
  maxAlignedWeeks,
  weeksBetween,
} from './trustComparison';

const scoreEvent = (timestamp: string) => ({
  id: timestamp,
  timestamp,
  actor: 'Sam',
  eventType: 'entry-score-updated' as const,
  entityType: 'entry' as const,
  summary: 's',
  before: { score: 0 },
  after: { score: 1 },
  source: 'local' as const,
});

describe('trustComparison', () => {
  it('SHOULD read downloaded, last updated and started dates WHERE a file has an audit log', () => {
    // arrange
    const payload = {
      exportedAt: '2026-04-01T09:00:00Z',
      auditLog: [scoreEvent('2026-02-01T10:00:00Z'), scoreEvent('2026-03-10T10:00:00Z')],
    };

    // act
    const meta = getSourceMeta(payload);

    // assert
    expect(meta.exportedAt).toBe('2026-04-01T09:00:00Z');
    expect(meta.startedAt).toBe('2026-02-01T10:00:00.000Z');
    expect(meta.lastUpdated).toBe('2026-04-01T09:00:00Z');
  });

  it('SHOULD treat trust names as the same WHERE they differ only by case or spacing', () => {
    // arrange / act / assert
    expect(allSameTrust(['Leeds Teaching', ' leeds  teaching '])).toBe(true);
    expect(allSameTrust(['Leeds Teaching', 'Bristol'])).toBe(false);
    expect(allSameTrust(['', ''])).toBe(false);
  });

  it('SHOULD call out a head start WHERE sources began more than a week apart', () => {
    // arrange / act
    const note = headStartNote([
      { label: 'Trust A', startedAt: '2026-01-01T00:00:00Z' },
      { label: 'Trust B', startedAt: '2026-02-05T00:00:00Z' },
    ]);

    // assert
    expect(note).toContain('Trust A started progressing 5 weeks before Trust B');
    expect(
      headStartNote([
        { label: 'A', startedAt: '2026-01-01T00:00:00Z' },
        { label: 'B', startedAt: '2026-01-03T00:00:00Z' },
      ])
    ).toBeUndefined();
  });

  it('SHOULD align on the shortest history WHERE sources have run for different lengths', () => {
    // arrange
    const sources = [
      { startedAt: '2026-01-01T00:00:00Z', lastUpdated: '2026-03-12T00:00:00Z' },
      { startedAt: '2026-02-01T00:00:00Z', lastUpdated: '2026-03-12T00:00:00Z' },
    ];

    // act / assert
    expect(weeksBetween(sources[0].startedAt, sources[0].lastUpdated)).toBe(10);
    expect(maxAlignedWeeks(sources)).toBe(5);
    expect(alignedDate('2026-01-01T00:00:00Z', 2).toISOString()).toBe('2026-01-15T00:00:00.000Z');
  });
});
