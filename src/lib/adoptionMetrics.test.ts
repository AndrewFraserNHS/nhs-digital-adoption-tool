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
  it('computes aggregate metrics', () => {
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
          gapToTarget: 2,
          message: 'Raise Vision from 2.0 to target 4. Assess 1 remaining lens area(s).',
        },
      ],
    });
  });

  it('suggests next steps for out-of-target components', () => {
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

    const metrics = getMetrics(belowTargetStore, components);
    expect(metrics.currentPhase).toBe(1);
    expect(metrics.nextSteps.length).toBeGreaterThan(0);
    expect(metrics.nextSteps[0]).toMatchObject({
      componentId: 'vision',
      phase: 1,
    });
  });

  it('computes current and target radar series', () => {
    expect(computeRadarData(store, ['Lens A', 'Lens B'], components, getEntry)).toEqual([3, 0]);
    expect(computeTargetRadarData(['Lens A', 'Lens B'], components)).toEqual([3, 4]);
  });

  it('flattens actions with component labels', () => {
    const rows = flattenActions(store, getComponentOrThrow, getEntry);

    expect(rows).toHaveLength(2);
    expect(rows[0]).toMatchObject({ compId: 'vision', component: 'Vision', lens: 'Lens A' });
    expect(rows[1]).toMatchObject({ compId: 'benefits', component: 'Benefits', lens: 'Lens A' });
  });

  it('counts objectives as completed only once every linked action is completed', () => {
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

    // action '1' in Lens A has status 'In Progress' per the base store fixture
    const counts = getComponentObjectiveCounts(storeWithObjectives, 'vision', getEntry);
    expect(counts).toEqual({ total: 2, completed: 0 });

    // metrics/flattenActions must not double-count objective-linked actions - they're already
    // counted once via the lens loop
    const metrics = getMetrics(storeWithObjectives, components);
    expect(metrics.totalActions).toBe(2);
    const rows = flattenActions(storeWithObjectives, getComponentOrThrow, getEntry);
    expect(rows).toHaveLength(2);
  });

  it('expands linked actions across every linked target row', () => {
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

    const rows = flattenActions(
      linkedStore,
      getComponentOrThrow,
      (componentId, lens) => linkedStore.currentDraft[componentId][lens]
    );

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

  it('builds chart.js radar data structure with current and target datasets', () => {
    const chartData = buildRadarChartData(store, ['Lens A', 'Lens B'], components, getEntry);

    expect(chartData.labels).toEqual(['Lens A', 'Lens B']);
    expect(chartData.datasets).toHaveLength(2);
    expect(chartData.datasets[0]).toMatchObject({ label: 'Current Score', data: [3, 0] });
    expect(chartData.datasets[1]).toMatchObject({ label: 'Target', data: [3, 4] });
  });
});
