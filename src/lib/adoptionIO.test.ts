import { describe, expect, it } from 'vitest';
import { buildAdoptionExportPayload, buildHistorySnapshot, buildSnapshotLabel, mergeImportedAdoptionState, migrateSavedAdoptionAssessment } from './adoptionIO';
import { initializeStore } from './adoptionState';

describe('adoptionIO', () => {
  it('builds a stable month label', () => {
    expect(buildSnapshotLabel(new Date('2026-07-20T12:00:00Z'))).toBe('Jul 2026');
  });

  it('deep clones adoption export payloads', () => {
    const store = initializeStore({
      orgProfile: {
        trustName: 'Test Trust',
        region: 'North',
        trustType: 'Acute',
        projectName: 'EPR',
        leadName: 'Alex',
        cst: {
          type: 'project',
          pathway: 'pathway-2',
          goLiveDate: '2026-09-01',
          fullAdoptionDate: '',
          benefitRealizationDate: '',
          phaseCapability: {}
        }
      },
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
    expect(payload.schemaVersion).toBe('2.0');
    payload.currentDraft.vision['Strategic Direction and Leadership'].actions[0].text = 'Changed';

    expect(store.currentDraft.vision['Strategic Direction and Leadership'].actions[0].text).toBe('Run workshop');
  });

  it('merges imported state over the current store', () => {
    const current = initializeStore({
      orgProfile: {
        trustName: 'Fallback',
        region: '',
        trustType: '',
        projectName: '',
        leadName: '',
        cst: {
          type: 'project',
          pathway: 'pathway-1',
          goLiveDate: '2026-11-01',
          fullAdoptionDate: '',
          benefitRealizationDate: '',
          phaseCapability: {}
        }
      },
      currentDraft: {},
      history: []
    });

    const merged = mergeImportedAdoptionState({
      orgProfile: {
        trustName: 'Imported',
        region: 'South',
        trustType: 'Mental Health',
        projectName: 'Portal',
        leadName: 'Pat',
        cst: {
          type: 'initiative',
          pathway: 'pathway-3',
          goLiveDate: '2026-08-01',
          fullAdoptionDate: '',
          benefitRealizationDate: '',
          phaseCapability: {}
        }
      }
    }, current);

    expect(merged.orgProfile.trustName).toBe('Imported');
    expect(merged.orgProfile.projectName).toBe('Portal');
    expect(merged.orgProfile.cst.pathway).toBe('pathway-3');
  });

  it('migrates legacy payloads by adding CST defaults and pathway-1', () => {
    const migrated = migrateSavedAdoptionAssessment({
      orgProfile: {
        trustName: 'Legacy Trust',
        region: '',
        trustType: ''
      }
    });

    expect(migrated.orgProfile?.cst.pathway).toBe('pathway-1');
    expect(migrated.schemaVersion).toBe('2.0');
  });

  it('builds history snapshots with cloned draft data', () => {
    const draft = {
      vision: {
        'Strategic Direction and Leadership': {
          score: 4,
          justification: 'Strong',
          evidence: 'Plan',
          actions: [{ id: '1', text: 'Communicate', owner: 'Lead', timescale: 'Aug', status: 'Planned' }]
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