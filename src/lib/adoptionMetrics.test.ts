import type { AssessmentComponent } from '@data/components';
import { describe, expect, it } from 'vitest';

import {
  buildRadarChartData,
  computeRadarData,
  computeTargetRadarData,
  flattenActions,
  getComponentObjectiveCounts,
  getMetrics,
} from './adoptionMetrics';
import type { AdoptionStore, DraftEntry } from './adoptionState';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Lens A', 'Lens B'],
    phase: 1,
    target: 4,
  },
  {
    id: 'benefits',
    label: 'Benefits',
    lenses: ['Lens A'],
    phase: 1,
    target: 2,
  },
];

const store: AdoptionStore = {
  view: 'dashboard',
  orgProfile: {
    trustName: 'Trust',
    region: 'North',
    trustType: 'Acute',
    cst: {
      type: 'project',
      pathway: 'pathway-1',
      goLiveDate: '',
      fullAdoptionDate: '',
      benefitRealizationDate: '',
      toolkitChoice: 'avt-v2-2026',
      phaseCapability: {},
    },
  },
  currentDraft: {
    vision: {
      'Lens A': {
        score: 4,
        justification: '',
        evidence: '',
        actions: [
          { id: '1', text: 'Action A', owner: 'Alex', timescale: 'Q3', status: 'In Progress' },
        ],
      },
      'Lens B': {
        score: 0,
        justification: '',
        evidence: '',
        actions: [],
      },
    },
    benefits: {
      'Lens A': {
        score: 2,
        justification: '',
        evidence: '',
        actions: [
          { id: '2', text: 'Action B', owner: 'Blair', timescale: 'Q4', status: 'Completed' },
        ],
      },
    },
  },
  objectives: {},
  phaseOverrides: {},
  history: [],
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
}

function getComponentOrThrow(id: string): AssessmentComponent {
  const component = components.find((candidate) => candidate.id === id);
  if (!component) {
    throw new Error(`Unknown component: ${id}`);
  }
  return component;
}

describe('adoptionMetrics', () => {
  it('SHOULD compute aggregate metrics', () => {
    // arrange + act + assert
    expect(getMetrics(store, components)).toEqual({
      totalCurrent: 6,
      assessedCount: 2,
      totalExpected: 3,
      overallPct: 40,
      totalActions: 2,
      completedActions: 1,
      actionCompletionPct: 50,
      currentPhase: 1,
      phaseSummaries: [
        {
          phase: 1,
          componentCount: 2,
          assessedLenses: 2,
          totalLenses: 3,
          onTrackComponents: 1,
          actionCompletionPct: 50,
          rag: 'Amber',
        },
      ],
      nextSteps: [
        {
          componentId: 'vision',
          componentLabel: 'Vision',
          phase: 1,
          gapToTarget: 3,
          summary: '1 lens area(s) still need an initial score.',
          message: 'Vision: 1 lens area(s) still need an initial score.',
          outstandingActions: [
            { id: '1', text: 'Action A', lens: 'Lens A', owner: 'Alex', status: 'In Progress', timescale: 'Q3' },
          ],
        },
      ],
    });
  });

  it('SHOULD suggest next steps WHERE out-of-target components', () => {
    // arrange
    const belowTargetStore: AdoptionStore = {
      ...store,
      currentDraft: {
        vision: {
          'Lens A': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
          'Lens B': {
            score: 0,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
        benefits: {
          'Lens A': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
    };

    // act
    const metrics = getMetrics(belowTargetStore, components);

// assert
    expect(metrics.currentPhase).toBe(1);
    expect(metrics.nextSteps.length).toBeGreaterThan(0);
    expect(metrics.nextSteps[0]).toMatchObject({
      componentId: 'vision',
      phase: 1,
    });
  });

  it('SHOULD stop at the first phase WHERE any component below expected readiness', () => {
    // arrange 1
    const phaseComponents: AssessmentComponent[] = [
      {
        id: 'vision',
        label: 'Vision',
        lenses: ['Lens A'],
        phase: 1,
        target: 4,
      },
      {
        id: 'benefits',
        label: 'Benefits',
        lenses: ['Lens A'],
        phase: 1,
        target: 2,
      },
      {
        id: 'sponsorship',
        label: 'Sponsorship',
        lenses: ['Lens A'],
        phase: 2,
        target: 3,
      },
    ];

    const readyForPhaseOne: AdoptionStore = {
      ...store,
      currentDraft: {
        vision: {
          'Lens A': {
            score: 5,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
        benefits: {
          'Lens A': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
        sponsorship: {
          'Lens A': {
            score: 1,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
    } as AdoptionStore;

    // act 1
    const metricsAtPhaseTwo = getMetrics(readyForPhaseOne, phaseComponents);

    // assert 1
    expect(metricsAtPhaseTwo.currentPhase).toBe(2);

    // arrange 2
    const phaseTwoReady: AdoptionStore = {
      ...readyForPhaseOne,
      currentDraft: {
        ...readyForPhaseOne.currentDraft,
        sponsorship: {
          'Lens A': {
            score: 2,
            justification: '',
            evidence: '',
            actions: [],
          },
        },
      },
    } as AdoptionStore;

    // act 2
    const metricsAtLatestPhase = getMetrics(phaseTwoReady, phaseComponents);

    // assert 2
    expect(metricsAtLatestPhase.currentPhase).toBe(2);
    expect(metricsAtLatestPhase.phaseSummaries.find((p) => p.phase === 2)?.onTrackComponents).toBe(1);
  });

  it('SHOULD compute current and target radar series', () => {
    // arrange + act + assert
    expect(computeRadarData(store, ['Lens A', 'Lens B'], components, getEntry)).toEqual([3, 0]);
    expect(computeTargetRadarData(['Lens A', 'Lens B'], components)).toEqual([3, 4]);
  });

  it('SHOULD flatten actions with component labels', () => {
    // arrange + act
    const rows = flattenActions(store, getComponentOrThrow, getEntry);

    // assert
    expect(rows).toHaveLength(2);
    expect(rows[0]).toMatchObject({ compId: 'vision', component: 'Vision', lens: 'Lens A' });
    expect(rows[1]).toMatchObject({ compId: 'benefits', component: 'Benefits', lens: 'Lens A' });
  });

  it('SHOULD count objectives as completed WHERE once every linked action is completed', () => {
    // arrange
    const storeWithObjectives: AdoptionStore = {
      ...store,
      objectives: {
        vision: [
          {
            id: 'o1',
            text: 'Fully done',
            owner: 'PMO',
            timescale: 'Q3',
            linkedActions: [{ lens: 'Lens A', actionId: '1' }],
          },
          { id: 'o2', text: 'Not linked yet', owner: 'PMO', timescale: 'Q3', linkedActions: [] },
        ],
      },
    };

    // NB: action '1' in Lens A has status 'In Progress' per the base store fixture

    // act 1
    const counts = getComponentObjectiveCounts(storeWithObjectives, 'vision', getEntry);

    // assert 1
    expect(counts).toEqual({ total: 2, completed: 0 });

    // NB: metrics/flattenActions must not double-count objective-linked actions - they're already counted once via the lens loop

    // act 2 
    const metrics = getMetrics(storeWithObjectives, components);

    // assert 2
    expect(metrics.totalActions).toBe(2);

    // act 3
    const rows = flattenActions(storeWithObjectives, getComponentOrThrow, getEntry);

    // assert 3
    expect(rows).toHaveLength(2);
  });

  it('SHOULD expand linked actions across every linked target row', () => {
    // arrange
    const linkedStore: AdoptionStore = {
      ...store,
      currentDraft: {
        ...store.currentDraft,
        vision: {
          ...store.currentDraft.vision,
          'Lens A': {
            ...store.currentDraft.vision['Lens A'],
            actions: [
              {
                id: 'linked-1',
                text: 'Shared action',
                owner: 'Casey',
                timescale: 'Q2',
                status: 'Planned',
                linkedTargets: [
                  { componentId: 'vision', lens: 'Lens A' },
                  { componentId: 'benefits', lens: 'Lens A' },
                ],
              },
            ],
          },
        },
      },
    };

    // act
    const rows = flattenActions(
      linkedStore,
      getComponentOrThrow,
      (componentId, lens) => linkedStore.currentDraft[componentId][lens]
    );

    // assert
    expect(rows).toHaveLength(3);
    expect(
      rows.find(
        (row) => row.compId === 'vision' && row.lens === 'Lens A' && row.action.id === 'linked-1'
      )
    ).toBeTruthy();
    expect(
      rows.find(
        (row) => row.compId === 'benefits' && row.lens === 'Lens A' && row.action.id === 'linked-1'
      )
    ).toBeTruthy();
  });

  it('SHOULD build chart.js radar data structure with current and target datasets', () => {
    // arrange + act
    const chartData = buildRadarChartData(store, ['Lens A', 'Lens B'], components, getEntry);

    // assert
    expect(chartData.labels).toEqual(['Lens A', 'Lens B']);
    expect(chartData.datasets).toHaveLength(2);
    expect(chartData.datasets[0]).toMatchObject({ label: 'Current Score', data: [3, 0] });
    expect(chartData.datasets[1]).toMatchObject({ label: 'Target', data: [3, 4] });
  });
});
