import { describe, expect, it } from 'vitest';

import type { DraftEntry } from './adoptionState';
import {
  isRealisationActionId,
  migrateToRealignedPhases,
  PHASE_MODEL_VERSION,
  type PhaseMigratable,
} from './phaseRealignment';

const LENS = 'Planning and Risk';
const action = (id: string) => ({
  id,
  text: id,
  owner: '',
  timescale: '',
  status: 'Planned' as const,
});
const entry = (ids: string[]): DraftEntry => ({
  score: 3,
  rationale: 'kept',
  evidence: '',
  actions: ids.map(action),
});

describe('phaseRealignment', () => {
  it('SHOULD recognise only the top-band benefits actions as Benefit Realisation', () => {
    // arrange / act / assert
    expect(isRealisationActionId('benefits-action:planning-risk:3-4:2')).toBe(true);
    expect(isRealisationActionId('benefits-action:planning-risk:4-5:0')).toBe(true);
    expect(isRealisationActionId('benefits-action:planning-risk:2-3:2')).toBe(false);
    expect(isRealisationActionId('custom-action')).toBe(false);
  });

  it('SHOULD move top-band benefits actions to Benefit Realisation WHERE data is on the old phase model', () => {
    // arrange
    const payload: PhaseMigratable = {
      currentDraft: {
        benefits: {
          [LENS]: entry([
            'benefits-action:planning-risk:2-3:0',
            'benefits-action:planning-risk:3-4:1',
            'my-own-action',
          ]),
        },
      },
    };

    // act
    const migrated = migrateToRealignedPhases(payload);

    // assert - management keeps its score, rationale and earlier/custom actions
    const management = migrated.currentDraft?.benefits[LENS];
    expect(management?.score).toBe(3);
    expect(management?.rationale).toBe('kept');
    expect(management?.actions.map((a) => a.id)).toEqual([
      'benefits-action:planning-risk:2-3:0',
      'my-own-action',
    ]);
    // realisation receives the moved action under its new id, starting from a zero score
    const realisation = migrated.currentDraft?.benefit_realisation[LENS];
    expect(realisation?.score).toBe(0);
    expect(realisation?.actions.map((a) => a.id)).toEqual([
      'benefit-realisation-action:planning-risk:3-4:1',
    ]);
    expect(migrated.phaseModel).toBe(PHASE_MODEL_VERSION);
  });

  it('SHOULD split the realised outcome objective WHERE its actions moved', () => {
    // arrange
    const payload: PhaseMigratable = {
      objectives: {
        benefits: [
          {
            id: 'benefits:outcome:o3',
            text: 'Realised',
            owner: '',
            timescale: '',
            linkedActions: [{ lens: LENS, actionId: 'benefits-action:planning-risk:4-5:0' }],
          },
          {
            id: 'benefits:outcome:o2',
            text: 'Managed',
            owner: '',
            timescale: '',
            linkedActions: [
              { lens: LENS, actionId: 'benefits-action:planning-risk:2-3:0' },
              { lens: LENS, actionId: 'benefits-action:planning-risk:3-4:0' },
            ],
          },
        ],
      },
    };

    // act
    const migrated = migrateToRealignedPhases(payload);

    // assert
    expect(migrated.objectives?.benefits.map((o) => o.id)).toEqual(['benefits:outcome:o2']);
    expect(migrated.objectives?.benefits[0].linkedActions).toHaveLength(1);
    expect(migrated.objectives?.benefit_realisation.map((o) => o.id)).toEqual([
      'benefit-realisation:outcome:o3',
      'benefit-realisation:outcome:o2',
    ]);
  });

  it('SHOULD clear phase overrides and phase dates WHERE migrating, and leave current data alone', () => {
    // arrange
    const current = {
      phaseModel: PHASE_MODEL_VERSION,
      phaseOverrides: { vision: 'Completed' },
    };
    const old = { phaseOverrides: { vision: 'Completed' } };

    // act / assert
    expect(migrateToRealignedPhases(current)).toBe(current);
    expect(migrateToRealignedPhases(old).phaseOverrides).toEqual({});
  });

  it('SHOULD be idempotent WHERE run twice', () => {
    // arrange
    const once = migrateToRealignedPhases<PhaseMigratable>({
      currentDraft: { benefits: { [LENS]: entry(['benefits-action:planning-risk:3-4:1']) } },
    });

    // act
    const twice = migrateToRealignedPhases(once);

    // assert
    expect(twice).toBe(once);
  });
});
