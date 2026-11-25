import { describe, expect, it } from 'vitest';

import { formatStamp, latestActivity, newerSide } from './importTimestamps';

describe('importTimestamps', () => {
  it('SHOULD pick the latest audit timestamp WHERE a fallback is older', () => {
    // arrange
    const log = [{ timestamp: '2026-03-01T10:00:00Z' }, { timestamp: '2026-04-01T09:00:00Z' }];

    // act
    const result = latestActivity(log, '2026-02-01T00:00:00Z');

    // assert
    expect(result).toBe('2026-04-01T09:00:00Z');
  });

  it('SHOULD fall back to the supplied timestamp WHERE the audit log is empty', () => {
    // arrange / act / assert
    expect(latestActivity([], '2026-02-01T00:00:00Z')).toBe('2026-02-01T00:00:00Z');
    expect(latestActivity(undefined)).toBeUndefined();
  });

  it('SHOULD report the newer side WHERE both timestamps are known and differ', () => {
    // arrange / act / assert
    expect(newerSide('2026-01-01T00:00:00Z', '2026-02-01T00:00:00Z')).toBe('theirs');
    expect(newerSide('2026-03-01T00:00:00Z', '2026-02-01T00:00:00Z')).toBe('mine');
    expect(newerSide('2026-03-01T00:00:00Z', undefined)).toBeNull();
    expect(newerSide('2026-03-01T00:00:00Z', '2026-03-01T00:00:00Z')).toBeNull();
  });

  it('SHOULD format a valid stamp and show Unknown WHERE it is missing or invalid', () => {
    // arrange / act / assert
    expect(formatStamp('2026-03-01T10:05:00Z')).toMatch(/2026/);
    expect(formatStamp(undefined)).toBe('Unknown');
    expect(formatStamp('nope')).toBe('Unknown');
  });
});
