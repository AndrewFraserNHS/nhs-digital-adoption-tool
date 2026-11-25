import { describe, expect, it } from 'vitest';

import { analysePeriod } from './compareAnalysis';
import type { DraftEntry } from './adoptionState';

const action = (id: string, status: string, dueDate = '') => ({
  id,
  text: id,
  owner: '',
  timescale: '',
  status: status as DraftEntry['actions'][number]['status'],
  dueDate,
});

describe('analysePeriod target actions', () => {
  it('SHOULD count open target actions without a due date and overdue ones WHERE Thriving actions are excluded', () => {
    // arrange
    const draft = {
      vision: {
        'Strategic Direction and Leadership': {
          score: 2,
          rationale: '',
          evidence: '',
          actions: [
            action('vision-action:x:1-2:0', 'Planned'),
            action('vision-action:x:1-2:1', 'In Progress', '2020-01-01'),
            action('vision-action:x:1-2:2', 'Completed'),
            action('vision-action:x:4-5:0', 'In Progress'),
            action('vision-action:x:1-2:3', 'Cancelled'),
          ],
        },
      },
    } as unknown as Parameters<typeof analysePeriod>[0];

    // act
    const stats = analysePeriod(draft, new Date('2026-06-01'));

    // assert - Thriving and Cancelled are not target actions; Completed counts but is never "open"
    expect(stats.targetActions).toBe(3);
    expect(stats.targetActionsWithoutDueDate).toBe(1);
    expect(stats.targetActionsOverdue).toBe(1);
  });
});
