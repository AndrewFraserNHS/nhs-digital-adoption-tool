import { describe, expect, it } from 'vitest';
import { buildAdoptionExportPayload, buildHistorySnapshot, buildSnapshotLabel, mergeImportedAdoptionState } from './adoptionIO';
import { initializeStore } from './adoptionState';

describe('adoptionIO', () => {
  it('builds a stable month label', () => {
    expect(buildSnapshotLabel(new Date('2026-07-20T12:00:00Z'))).toBe('Jul 2026');
  });

  it('deep clones adoption export payloads', () => {
    const store = initializeStore({
      orgProfile: { trustName: 'Test Trust', region: 'North', trustType: 'Acute', projectName: 'EPR', leadName: 'Alex' },
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 3,
            justification: 'Defined',
            evidence: 'Deck',
            actions: [{ id: '1', text: 'Run workshop', owner: 'PMO', timescale: 'Q3', status: 'In Progress' }]
          }
        }
      },
      history: []
    });

    const payload = buildAdoptionExportPayload(store);
    payload.currentDraft.vision['Strategic Direction and Leadership'].actions[0].text = 'Changed';

    expect(store.currentDraft.vision['Strategic Direction and Leadership'].actions[0].text).toBe('Run workshop');
  });

  it('merges imported state over the current store', () => {
    const current = initializeStore({
      orgProfile: { trustName: 'Fallback', region: '', trustType: '', projectName: '', leadName: '' },
      currentDraft: {},
      history: []
    });

    const merged = mergeImportedAdoptionState({
      orgProfile: { trustName: 'Imported', region: 'South', trustType: 'Mental Health', projectName: 'Portal', leadName: 'Pat' }
    }, current);

    expect(merged.orgProfile.trustName).toBe('Imported');
    expect(merged.orgProfile.projectName).toBe('Portal');
  });

  it('builds history snapshots with cloned draft data', () => {
    const draft = {
      vision: {
        'Strategic Direction and Leadership': {
          score: 4,
          justification: 'Strong',
          evidence: 'Plan',
          actions: [{ id: '1', text: 'Communicate', owner: 'Lead', timescale: 'Aug', status: 'Not Started' }]
        }
      }
    };

    const snapshot = buildHistorySnapshot(draft, 72, new Date('2026-07-01T00:00:00Z'));
    draft.vision['Strategic Direction and Leadership'].actions[0].text = 'Changed';

    expect(snapshot.monthLabel).toBe('Jul 2026');
    expect(snapshot.overallPercentage).toBe(72);
    expect(snapshot.data.vision['Strategic Direction and Leadership'].actions[0].text).toBe('Communicate');
  });
});