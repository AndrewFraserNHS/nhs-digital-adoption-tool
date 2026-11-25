import { describe, expect, it } from 'vitest';

import type { DraftEntry } from './adoptionState';
import { actionsToText, applyActionText } from './actionTextExchange';

const LENS = 'Planning and Risk';
const entry: DraftEntry = {
  score: 2,
  rationale: '',
  evidence: '',
  actions: [
    {
      id: 'benefits-action:planning-risk:2-3:0',
      text: 'Define baselines – with owners',
      owner: 'Sam',
      timescale: '',
      status: 'Planned',
      dueDate: '2026-12-01',
    },
    {
      id: 'benefits-action:planning-risk:4-5:0',
      text: 'Keep reviewing benefits',
      owner: '',
      timescale: '',
      status: 'In Progress',
    },
  ],
};
const getEntry = () => entry;

describe('actionTextExchange', () => {
  it('SHOULD leave everything unchanged WHERE the exported text is applied straight back', () => {
    // arrange
    const text = actionsToText('Benefit Management', [LENS], getEntry);

    // act
    const result = applyActionText(text, [LENS], getEntry, 'benefits');

    // assert
    expect(result.updated).toBe(0);
    expect(result.added).toBe(0);
    expect(result.unchanged).toBe(2);
    expect(result.skipped).toEqual([]);
  });

  it('SHOULD update status, owner and date WHERE a line is edited, and add a line without an id', () => {
    // arrange
    const text = [
      `## ${LENS}`,
      '[benefits-action:planning-risk:2-3:0] Completed | Priya | 2026-12-15 | Define baselines – with owners',
      'In Progress | Lee | | A brand new action',
    ].join('\n');

    // act
    const result = applyActionText(text, [LENS], getEntry, 'benefits');

    // assert
    const actions = result.entries[LENS].actions;
    expect(actions[0]).toMatchObject({ status: 'Completed', owner: 'Priya', dueDate: '2026-12-15' });
    expect(actions[2]).toMatchObject({ text: 'A brand new action', owner: 'Lee', status: 'In Progress' });
    expect(result.updated).toBe(1);
    expect(result.added).toBe(1);
  });

  it('SHOULD never give a Thriving action a date and SHOULD skip bad lines WHERE the text is invalid', () => {
    // arrange
    const text = [
      `## ${LENS}`,
      '[benefits-action:planning-risk:4-5:0] In Progress | | 2026-12-31 | Keep reviewing benefits',
      '[missing-id] Planned | | | Nothing here',
      'Planned | | 31/12/2026 | Bad date',
    ].join('\n');

    // act
    const result = applyActionText(text, [LENS], getEntry, 'benefits');

    // assert
    expect(result.entries[LENS].actions[1].dueDate).toBeFalsy();
    expect(result.skipped).toHaveLength(2);
  });
});
