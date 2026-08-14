import { describe, expect, it } from 'vitest';

import {
  buildAdoptionExportPayload,
  buildHistorySnapshot,
  buildSnapshotLabel,
  mergeImportedAdoptionState,
  migrateSavedAdoptionAssessment,
  parseImportedAdoptionAssessment,
} from './adoptionIO';
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
          phaseCapability: {},
        },
      },
      currentDraft: {
        vision: {
          'Strategic Direction and Leadership': {
            score: 3,
            justification: 'Defined',
            evidence: 'Deck',
            actions: [
              {
                id: '1',
                text: 'Run workshop',
                owner: 'PMO',
                timescale: 'Q3',
                status: 'In Progress',
              },
            ],
          },
        },
      },
      objectives: {
        vision: [
          {
            id: 'o1',
            text: 'Publish plan',
            owner: 'PMO',
            timescale: 'Q3',
            linkedActions: [{ lens: 'Strategic Direction and Leadership', actionId: '1' }],
          },
        ],
      },
      suppressedAutoActions: {
        'vision:Strategic Direction and Leadership': ['vision-action:strategic-direction-and-leadership:0-1:0'],
      },
      auditLog: [
        {
          id: 'audit-1',
          timestamp: '2026-07-10T10:00:00.000Z',
          actor: 'Alex',
          eventType: 'action-removed',
          entityType: 'action',
          summary: 'Removed action',
          componentId: 'vision',
          lens: 'Strategic Direction and Leadership',
          entityId: 'vision-action:strategic-direction-and-leadership:0-1:0',
          reason: 'Superseded by local pathway action',
          source: 'local',
        },
      ],
      history: [],
    });

    const payload = buildAdoptionExportPayload(store);
    expect(payload.schemaVersion).toBe('4.0');
    payload.currentDraft.vision['Strategic Direction and Leadership'].actions[0].text = 'Changed';
    if (!payload.suppressedAutoActions) {
      throw new Error('Expected suppressedAutoActions to be present in export payload');
    }
    payload.suppressedAutoActions['vision:Strategic Direction and Leadership'][0] = 'changed-id';
    expect(payload.objectives).toBeDefined();
    if (!payload.objectives) {
      throw new Error('Expected objectives to be present in export payload');
    }
    payload.objectives.vision[0].text = 'Changed';
    if (!payload.auditLog) {
      throw new Error('Expected auditLog to be present in export payload');
    }
    payload.auditLog[0].reason = 'Changed';

    expect(store.currentDraft.vision['Strategic Direction and Leadership'].actions[0].text).toBe(
      'Run workshop'
    );
    expect(store.objectives.vision[0].text).toBe('Publish plan');
    expect(store.suppressedAutoActions['vision:Strategic Direction and Leadership'][0]).toBe(
      'vision-action:strategic-direction-and-leadership:0-1:0'
    );
    expect(store.auditLog[0].reason).toBe('Superseded by local pathway action');
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
          toolkitChoice: 'avt-v2-2026',
          phaseCapability: {},
        },
      },
      currentDraft: {},
      objectives: {
        vision: [
          {
            id: 'existing',
            text: 'Existing objective',
            owner: 'PMO',
            timescale: 'Q1',
            linkedActions: [],
          },
        ],
      },
      history: [],
    });

    const merged = mergeImportedAdoptionState(
      {
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
            toolkitChoice: 'avt-v2-2026',
            phaseCapability: {},
          },
        },
      },
      current
    );

    expect(merged.orgProfile.trustName).toBe('Imported');
    expect(merged.orgProfile.projectName).toBe('Portal');
    expect(merged.orgProfile.cst.pathway).toBe('pathway-3');
    expect(merged.objectives.vision[0].text).toBe('Existing objective');
  });

  it('migrates legacy payloads by adding CST defaults, pathway-1, and empty objectives', () => {
    const migrated = migrateSavedAdoptionAssessment({
      orgProfile: {
        trustName: 'Legacy Trust',
        region: '',
        trustType: '',
      },
    });

    expect(migrated.orgProfile?.cst.pathway).toBe('pathway-1');
    expect(migrated.schemaVersion).toBe('2.0');
    expect(migrated.objectives).toEqual({});
  });

  it('migrates legacy schema 3.0 componentActions into objectives with no linked actions', () => {
    const legacyPayload = {
      schemaVersion: '3.0',
      orgProfile: { trustName: 'Legacy Trust', region: '', trustType: '' },
      componentActions: {
        vision: [
          {
            id: 'c1',
            text: 'Old component action',
            owner: 'PMO',
            timescale: 'Q3',
            status: 'In Progress',
          },
        ],
      },
    };
    const migrated = migrateSavedAdoptionAssessment(parseImportedAdoptionAssessment(legacyPayload));

    expect(migrated.objectives?.vision).toEqual([
      {
        id: 'c1',
        text: 'Old component action',
        owner: 'PMO',
        timescale: 'Q3',
        notes: '',
        evidence: '',
        linkedActions: [],
      },
    ]);
  });

  it('builds history snapshots with cloned draft data', () => {
    const draft = {
      vision: {
        'Strategic Direction and Leadership': {
          score: 4,
          justification: 'Strong',
          evidence: 'Plan',
          actions: [
            { id: '1', text: 'Communicate', owner: 'Lead', timescale: 'Aug', status: 'Planned' },
          ],
        },
      },
    };

    const snapshot = buildHistorySnapshot(draft, 72, new Date('2026-07-01T00:00:00Z'));
    draft.vision['Strategic Direction and Leadership'].actions[0].text = 'Changed';

    expect(snapshot.monthLabel).toBe('Jul 2026');
    expect(snapshot.overallPercentage).toBe(72);
    expect(snapshot.data.vision['Strategic Direction and Leadership'].actions[0].text).toBe(
      'Communicate'
    );
  });

  it('rejects malformed payloads before import merge', () => {
    expect(() => parseImportedAdoptionAssessment({ currentDraft: [] })).toThrow(
      /Invalid adoption assessment payload at currentDraft/
    );

    const fallback = initializeStore();
    expect(() =>
      mergeImportedAdoptionState(
        { currentDraft: [] } as unknown as Partial<ReturnType<typeof buildAdoptionExportPayload>>,
        fallback
      )
    ).toThrow(/Invalid adoption assessment payload at currentDraft/);
  });

  it('accepts partial payloads with only org profile', () => {
    const parsed = parseImportedAdoptionAssessment({
      orgProfile: {
        trustName: 'Safe import',
        region: 'North',
        trustType: 'Acute',
      },
    });

    expect(parsed.orgProfile?.trustName).toBe('Safe import');
  });

  it('accepts suppression and legacy action audit metadata in imported payloads', () => {
    const parsed = parseImportedAdoptionAssessment({
      suppressedAutoActions: {
        'vision:Strategic Direction and Leadership': [
          'vision-action:strategic-direction-and-leadership:0-1:0',
        ],
      },
      actionAuditLog: [
        {
          id: 'removed-1',
          removedAt: '2026-07-10T10:00:00.000Z',
          reason: 'Locally replaced',
          componentId: 'vision',
          lens: 'Strategic Direction and Leadership',
          actionId: 'vision-action:strategic-direction-and-leadership:0-1:0',
          actionText: 'Facilitate workshop',
          actionType: 'Engagement',
        },
      ],
    });

    expect(parsed.suppressedAutoActions?.['vision:Strategic Direction and Leadership']).toEqual([
      'vision-action:strategic-direction-and-leadership:0-1:0',
    ]);
    expect(parsed.actionAuditLog?.[0]?.reason).toBe('Locally replaced');
  });

  it('appends imported audit events to existing log', () => {
    const current = initializeStore({
      auditLog: [
        {
          id: 'local-1',
          timestamp: '2026-07-10T09:00:00.000Z',
          actor: 'Local User',
          eventType: 'profile-updated',
          entityType: 'profile',
          summary: 'Local profile change',
          source: 'local',
        },
      ],
    });

    const merged = mergeImportedAdoptionState(
      {
        auditLog: [
          {
            id: 'imported-1',
            timestamp: '2026-07-10T10:00:00.000Z',
            actor: 'Imported User',
            eventType: 'action-created',
            entityType: 'action',
            summary: 'Imported action',
            source: 'local',
          },
        ],
      },
      current
    );

    expect(merged.auditLog.length).toBe(2);
    expect(merged.auditLog[0].id).toBe('local-1');
    expect(merged.auditLog[1].id).toBe('imported-1');
    expect(merged.auditLog[1].source).toBe('imported');
    expect(merged.auditLog[1].importedAt).toBeTruthy();
  });
});
