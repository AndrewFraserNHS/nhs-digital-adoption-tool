import { describe, expect, it } from 'vitest';

import {
  buildInitialDetails,
  cloneDetail,
  createEmptyDetail,
  normaliseDetails,
  normaliseResponses,
} from './maturityIO';

describe('maturityIO', () => {
  const components = ['Vision', 'Benefits'];

  it('SHOULD creates empty detail records', () => {
    // arrange + act + assert
    expect(createEmptyDetail()).toEqual({
      justification: '',
      notes: '',
      links: [],
      actions: [],
    });
  });

  it('SHOULD build initial details for every component', () => {
    // arrange + act
    const details = buildInitialDetails(components);

    // assert
    expect(Object.keys(details)).toEqual(components);
    expect(details.Vision.justification).toBe('');
  });

  it('SHOULD normalise responses with zero defaults', () => {
    // arrange + act + assert
    expect(normaliseResponses(components, { Vision: 3 })).toEqual({ Vision: 3, Benefits: 0 });
  });

  it('SHOULD normalise details and preserves imported fields', () => {
    // arrange + act
    const details = normaliseDetails(components, {
      Vision: {
        justification: 'Aligned',
        notes: 'Reviewed',
        links: ['https://example.com'],
        actions: [
          { id: '1', text: 'Confirm', owner: 'PMO', dueDate: '2026-08-01', status: 'In Progress' },
        ],
      },
    });

    // assert
    expect(details.Vision.justification).toBe('Aligned');
    expect(details.Benefits.justification).toBe('');
    expect(details.Vision.actions[0].owner).toBe('PMO');
  });

  it('SHOULD clone imported detail structures', () => {
    // arrange
    const source = {
      justification: 'Text',
      notes: 'Notes',
      links: ['https://example.com'],
      actions: [{ id: '1', text: 'Act', owner: 'Lead', dueDate: '2026-08-01', status: 'Planned' }],
    };

    // act
    const detail = cloneDetail(source);
    detail.links[0] = 'https://changed.com';

    // assert
    expect(source.links[0]).toBe('https://example.com');
  });
});
