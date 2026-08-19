import { describe, expect, it } from 'vitest';

import { buildAdoptionExportPayload, type SavedAdoptionAssessment } from './adoptionIO';
import { type AdoptionStore,initializeStore } from './adoptionState';
import { applyConflictResolutions, buildConflictReport } from './cstConflict';

function buildStore(overrides?: Partial<AdoptionStore>): AdoptionStore {
  return initializeStore({
    orgProfile: {
      trustName: 'Trust A',
      region: 'North',
      trustType: 'Acute',
      projectName: 'Programme A',
      leadName: 'Alex Lead',
      cst: {
        type: 'project',
        pathway: 'pathway-1',
        goLiveDate: '2026-10-01',
        fullAdoptionDate: '',
        benefitRealizationDate: '',
        toolkitChoice: 'avt-v2-2026',
        phaseCapability: {},
      },
      teamMembers: [{ id: 'member-1', name: 'Andy Fraser', role: 'Change Lead' }],
      cstId: 'cst-fixed-id',
    },
    currentDraft: {
      vision: {
        'Strategic Direction': {
          score: 2,
          justification: 'Initial rationale',
          evidence: 'Doc link',
          actions: [
            {
              id: 'action-1',
              text: 'Run workshop',
              owner: 'Andy Fraser',
              timescale: 'Q3',
              status: 'Planned',
            },
          ],
        },
      },
    },
    objectives: {
      vision: [
        {
          id: 'obj-1',
          text: 'Define the future state',
          owner: 'Andy Fraser',
          timescale: 'Q3',
          linkedActions: [],
        },
      ],
    },
    phaseOverrides: { vision: 'A' },
    ...overrides,
  });
}

function toPayload(store: AdoptionStore): Partial<SavedAdoptionAssessment> {
  return buildAdoptionExportPayload(store);
}

describe('buildConflictReport', () => {
  it('SHOULD report no conflicts WHERE an identical payload', () => {
    // arrange
    const mine = buildStore();
    const theirs = toPayload(buildStore());

    // act
    const report = buildConflictReport(mine, theirs);

// assert
    expect(report.hasConflicts).toBe(false);
    expect(report.sections).toEqual([]);
    expect(report.autoMergeSummary).toEqual([]);
  });

  it('SHOULD flag a single differing profile field as a conflict', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.orgProfile.trustName = 'Trust B';
    const theirs = toPayload(theirsStore);

    // act
    const report = buildConflictReport(mine, theirs);
    const profileSection = report.sections.find((section) => section.id === 'profile');

    // assert
    expect(profileSection).toBeDefined();
    expect(profileSection?.items).toEqual([
      expect.objectContaining({ id: 'profile:trustName', mineSummary: 'Trust A', theirsSummary: 'Trust B' }),
    ]);
  });

  it('SHOULD auto-merge a one-sided new action with no conflict prompt', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.currentDraft.vision['Strategic Direction'].actions.push({
      id: 'action-2',
      text: 'New action from colleague',
      owner: 'Sam Patel',
      timescale: 'Q4',
      status: 'Planned',
    });
    const theirs = toPayload(theirsStore);

    // act
    const report = buildConflictReport(mine, theirs);

    // assert
    expect(report.hasConflicts).toBe(false);
    expect(report.autoMergeSummary).toEqual(['1 new action(s)']);
  });

  it('SHOULD flag a true conflict WHERE the same action id differs on both sides', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.currentDraft.vision['Strategic Direction'].actions[0].status = 'Completed';
    const theirs = toPayload(theirsStore);

    // act
    const report = buildConflictReport(mine, theirs);
    const actionsSection = report.sections.find((section) => section.id === 'actions');

    // assert
    expect(actionsSection?.items).toHaveLength(1);
    expect(actionsSection?.items[0].id).toBe('action:vision:Strategic Direction:action-1');
  });

  it('SHOULD flag a true conflict WHERE the same objective id differs on both sides', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.objectives.vision[0].owner = 'Sam Patel';
    const theirs = toPayload(theirsStore);

    // act
    const report = buildConflictReport(mine, theirs);
    const objectivesSection = report.sections.find((section) => section.id === 'objectives');

    // assert
    expect(objectivesSection?.items).toHaveLength(1);
    expect(objectivesSection?.items[0].id).toBe('objective:vision:obj-1');
  });
});

describe('applyConflictResolutions', () => {
  it('SHOULD keep mine by default WHERE a resolution is not supplied for a conflict', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.orgProfile.trustName = 'Trust B';
    const theirs = toPayload(theirsStore);

    // act
    const merged = applyConflictResolutions(mine, theirs, {});

    // assert
    expect(merged.orgProfile.trustName).toBe('Trust A');
  });

  it('SHOULD take theirs WHERE explicitly resolved that way', () => {
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.orgProfile.trustName = 'Trust B';
    const theirs = toPayload(theirsStore);

    const merged = applyConflictResolutions(mine, theirs, { 'profile:trustName': 'theirs' });

    expect(merged.orgProfile.trustName).toBe('Trust B');
  });

  it('SHOULD include one-sided additions regardless of the resolutions map', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.currentDraft.vision['Strategic Direction'].actions.push({
      id: 'action-2',
      text: 'New action from colleague',
      owner: 'Sam Patel',
      timescale: 'Q4',
      status: 'Planned',
    });
    theirsStore.orgProfile.teamMembers = [
      ...(theirsStore.orgProfile.teamMembers || []),
      { id: 'member-2', name: 'Sam Patel', role: 'SRO' },
    ];
    const theirs = toPayload(theirsStore);

    // act
    const merged = applyConflictResolutions(mine, theirs, {});

    // assert
    expect(merged.currentDraft.vision['Strategic Direction'].actions.map((a) => a.id)).toEqual([
      'action-1',
      'action-2',
    ]);
    expect(merged.orgProfile.teamMembers?.map((m) => m.id)).toEqual(['member-1', 'member-2']);
  });

  it('SHOULD resolve an action-level conflict per the supplied choice', () => {
    // arrange
    const mine = buildStore();
    const theirsStore = buildStore();
    theirsStore.currentDraft.vision['Strategic Direction'].actions[0].status = 'Completed';
    const theirs = toPayload(theirsStore);

    // act
    const merged = applyConflictResolutions(mine, theirs, {
      'action:vision:Strategic Direction:action-1': 'theirs',
    });

    // assert
    expect(merged.currentDraft.vision['Strategic Direction'].actions[0].status).toBe('Completed');
  });
});
