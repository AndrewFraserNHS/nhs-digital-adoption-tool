import { describe, expect, it } from 'vitest';

import { parseActionImport } from './actionJsonImport';
import type { DraftEntry } from './adoptionState';

const components = [{ id: 'benefits', label: 'Benefit Management', lenses: ['Planning and Risk'] }];
const entry: DraftEntry = {
  score: 0,
  rationale: '',
  evidence: '',
  actions: [{ id: 'a', text: 'Already here', owner: '', timescale: '', status: 'Planned' }],
};
const getEntry = () => entry;

describe('parseActionImport', () => {
  it('SHOULD add new actions WHERE rows are valid, parsing the priority prefix', () => {
    // arrange
    const file = JSON.stringify({
      actions: [
        { component: 'benefits', lens: 'planning and risk', action: 'M Do a thing', dueDate: '2026-12-01' },
      ],
    });

    // act
    const result = parseActionImport(file, components, getEntry);

    // assert
    const added = result.entries['benefits::Planning and Risk'].entry.actions;
    expect(result.added).toBe(1);
    expect(added).toHaveLength(2);
    expect(added[1]).toMatchObject({ text: 'Do a thing', priority: 'must', dueDate: '2026-12-01' });
    expect(entry.actions).toHaveLength(1);
  });

  it('SHOULD skip duplicates, unknown components, bad dates and bad JSON WHERE the file is wrong', () => {
    // arrange
    const file = JSON.stringify([
      { component: 'benefits', lens: 'Planning and Risk', action: 'already here' },
      { component: 'nope', lens: 'x', action: 'y' },
      { component: 'benefits', lens: 'Planning and Risk', action: 'z', dueDate: '1/2/2026' },
    ]);

    // act
    const result = parseActionImport(file, components, getEntry);

    // assert
    expect(result.added).toBe(0);
    expect(result.skipped).toHaveLength(3);
    expect(parseActionImport('{oops', components, getEntry).skipped).toHaveLength(1);
  });
});
