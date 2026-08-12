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

  it('creates empty detail records', () => {
    expect(createEmptyDetail()).toEqual({
      justification: '',
      notes: '',
      links: [],
      actions: [],
    });
  });

  it('builds initial details for every component', () => {
    const details = buildInitialDetails(components);
    expect(Object.keys(details)).toEqual(components);
    expect(details.Vision.justification).toBe('');
  });

  it('normalises responses with zero defaults', () => {
    expect(normaliseResponses(components, { Vision: 3 })).toEqual({ Vision: 3, Benefits: 0 });
  });

  it('normalises details and preserves imported fields', () => {
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

    expect(details.Vision.justification).toBe('Aligned');
    expect(details.Benefits.justification).toBe('');
    expect(details.Vision.actions[0].owner).toBe('PMO');
  });

  it('clones imported detail structures', () => {
    const source = {
      justification: 'Text',
      notes: 'Notes',
      links: ['https://example.com'],
      actions: [{ id: '1', text: 'Act', owner: 'Lead', dueDate: '2026-08-01', status: 'Planned' }],
    };

    const detail = cloneDetail(source);
    detail.links[0] = 'https://changed.com';

    expect(source.links[0]).toBe('https://example.com');
  });
});
