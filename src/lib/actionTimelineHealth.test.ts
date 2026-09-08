import { describe, expect, it } from 'vitest';
import { getActionTimelineHealth } from './actionTimelineHealth';

describe('getActionTimelineHealth', () => {
  it('SHOULD be grey WHEN neither a start nor an end date is filled in, regardless of status', () => {
    expect(getActionTimelineHealth('Planned', undefined, undefined)).toBe('grey');
    expect(getActionTimelineHealth('In Progress', '', '')).toBe('grey');
    expect(getActionTimelineHealth('Completed', undefined, undefined)).toBe('grey');
  });

  it('SHOULD be green WHEN Completed or Cancelled and a date is set', () => {
    expect(getActionTimelineHealth('Completed', '2026-01-01', '2026-02-01')).toBe('green');
    expect(getActionTimelineHealth('Cancelled', undefined, '2026-02-01')).toBe('green');
  });

  it('SHOULD be red WHEN the due date has passed and the action is unresolved', () => {
    const now = new Date('2026-06-15');
    expect(getActionTimelineHealth('In Progress', '2026-01-01', '2026-05-01', now)).toBe('red');
  });

  it('SHOULD be amber WHEN the due date is within the next 7 days', () => {
    const now = new Date('2026-06-15');
    expect(getActionTimelineHealth('In Progress', '2026-01-01', '2026-06-18', now)).toBe('amber');
  });

  it('SHOULD be green WHEN comfortably on track with dates set', () => {
    const now = new Date('2026-06-15');
    expect(getActionTimelineHealth('In Progress', '2026-01-01', '2026-12-01', now)).toBe('green');
  });
});
