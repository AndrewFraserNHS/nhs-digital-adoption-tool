import { describe, expect, it } from 'vitest';

import type { DraftEntry } from './adoptionState';
import {
  analysePeriod,
  buildPeriodOptions,
  compareComponents,
  firstScoreDate,
  getCompareRag,
  reconstructDraftAt,
  summariseMovement,
} from './compareAnalysis';

const entry = (score: number, actions: DraftEntry['actions'] = []): DraftEntry => ({
  score,
  rationale: '',
  evidence: '',
  actions,
});
const LENS = 'Strategic Direction and Leadership';

const scoreEvent = (timestamp: string, before: number, after: number) => ({
  timestamp,
  eventType: 'entry-score-updated',
  componentId: 'vision',
  lens: LENS,
  before: { score: before },
  after: { score: after },
});

// Vision went 0 -> 1 (Jan), 1 -> 2 (Feb), 2 -> 4 (Mar); live score is 4.
const AUDIT = [
  scoreEvent('2026-01-10T10:00:00Z', 0, 1),
  scoreEvent('2026-02-10T10:00:00Z', 1, 2),
  scoreEvent('2026-03-10T10:00:00Z', 2, 4),
];

describe('compareAnalysis', () => {
  it('SHOULD rewind scores to a past date WHERE later score changes are in the audit log', () => {
    // arrange
    const live = { vision: { [LENS]: entry(4) } };

    // act
    const atFeb = reconstructDraftAt(live, AUDIT, new Date('2026-02-20T00:00:00Z'));
    const atStart = reconstructDraftAt(live, AUDIT, new Date('2025-12-31T00:00:00Z'));
    const atNow = reconstructDraftAt(live, AUDIT, new Date('2026-04-01T00:00:00Z'));

    // assert
    expect(atFeb.vision[LENS].score).toBe(2);
    expect(atStart.vision[LENS].score).toBe(0);
    expect(atNow.vision[LENS].score).toBe(4);
  });

  it('SHOULD not mutate the live draft WHERE rewinding scores', () => {
    // arrange
    const live = { vision: { [LENS]: entry(4) } };

    // act
    reconstructDraftAt(live, AUDIT, new Date('2025-12-31T00:00:00Z'));

    // assert
    expect(live.vision[LENS].score).toBe(4);
  });

  it('SHOULD find the first scoring day WHERE score events exist, and nothing otherwise', () => {
    // arrange / act / assert
    expect(firstScoreDate(AUDIT)?.toISOString()).toBe('2026-01-10T10:00:00.000Z');
    expect(firstScoreDate([])).toBeUndefined();
  });

  it('SHOULD build Current, Previous, Baseline and Custom options WHERE the audit log has history', () => {
    // arrange
    const live = { vision: { [LENS]: entry(4) } };
    const now = new Date('2026-03-20T12:00:00Z');

    // act
    const options = buildPeriodOptions(live, AUDIT, now);

    // assert
    expect(options.map((option) => option.id)).toEqual([
      'current',
      'previous',
      'baseline',
      'custom',
    ]);
    expect(options[0].actionsAvailable).toBe(true);
    expect(options[1].actionsAvailable).toBe(false);
    expect(options[0].roles).toEqual(['Current']);
    expect(options[1].roles).toEqual(['Previous']);
    expect(options[2].roles).toEqual(['Baseline']);
    // 30 days before 20 Mar is 18 Feb: score was 2 then
    expect(options[1].draft.vision[LENS].score).toBe(2);
    // baseline is the end of the first scoring day (10 Jan): score was 1 then
    expect(options[2].draft.vision[LENS].score).toBe(1);
  });

  it('SHOULD fall back to live data for Baseline WHERE nothing has been scored yet', () => {
    // arrange
    const live = { vision: { [LENS]: entry(0) } };

    // act
    const options = buildPeriodOptions(live, [], new Date('2026-03-20T12:00:00Z'));

    // assert
    expect(options[2].label).toBe('Baseline (nothing scored yet)');
    expect(options[2].draft.vision[LENS].score).toBe(0);
  });

  it('SHOULD return Not started WHERE nothing is scored, otherwise follow the gap to target', () => {
    // arrange / act / assert
    expect(getCompareRag(0, 4)).toBe('NotStarted');
    expect(getCompareRag(1, 4)).toBe('Red');
    expect(getCompareRag(3, 4)).toBe('Amber');
    expect(getCompareRag(4, 4)).toBe('Green');
  });

  it('SHOULD classify component movement as increase, decrease or unchanged', () => {
    // arrange
    const from = analysePeriod({ vision: { [LENS]: entry(1) } }, new Date('2026-09-30'));
    const to = analysePeriod({ vision: { [LENS]: entry(3) } }, new Date('2026-10-31'));

    // act
    const rows = compareComponents(from, to);
    const summary = summariseMovement(rows);

    // assert
    expect(rows.find((row) => row.id === 'vision')?.movement).toBe('increase');
    expect(summary.increase).toBe(1);
    expect(summary.decrease).toBe(0);
    expect(summary.unchanged).toBe(rows.length - 1);
  });

  it('SHOULD count overdue actions and date coverage relative to the period date', () => {
    // arrange
    const actions: DraftEntry['actions'] = [
      {
        id: 'a1',
        text: 'Late one',
        owner: 'Sam',
        timescale: '',
        status: 'In Progress',
        startDate: '2026-01-01',
        dueDate: '2026-02-01',
      },
      {
        id: 'a2',
        text: 'Done one',
        owner: 'Sam',
        timescale: '',
        status: 'Completed',
        startDate: '2026-01-01',
        dueDate: '2026-02-01',
      },
      { id: 'a3', text: 'No dates', owner: '', timescale: '', status: 'Planned' },
    ];
    const draft = { vision: { [LENS]: entry(2, actions) } };

    // act
    const laterPeriod = analysePeriod(draft, new Date('2026-03-01'));
    const earlierPeriod = analysePeriod(draft, new Date('2026-01-15'));

    // assert
    expect(laterPeriod.totalActions).toBe(3);
    expect(laterPeriod.completedActions).toBe(1);
    expect(laterPeriod.overdueCompletion).toBe(1);
    expect(laterPeriod.overdueActions[0].text).toBe('Late one');
    expect(laterPeriod.actionsWithStart).toBe(2);
    expect(laterPeriod.actionsWithEnd).toBe(2);
    expect(laterPeriod.earliestStart).toBe('2026-01-01');
    expect(laterPeriod.latestEnd).toBe('2026-02-01');
    expect(earlierPeriod.overdueCompletion).toBe(0);
  });
});
