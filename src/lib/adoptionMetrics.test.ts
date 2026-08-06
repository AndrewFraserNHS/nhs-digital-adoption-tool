import { describe, expect, it } from 'vitest';
import {
  buildRadarChartData,
  computeRadarData,
  computeTargetRadarData,
  flattenActions,
  getMetrics
} from './adoptionMetrics';
import type { AdoptionStore, DraftEntry } from './adoptionState';
import type { AssessmentComponent } from '@data/components';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Lens A', 'Lens B'],
    phase: 1,
    target: 4
  },
  {
    id: 'benefits',
    label: 'Benefits',
    lenses: ['Lens A'],
    phase: 1,
    target: 2
  }
];

const store: AdoptionStore = {
  view: 'dashboard',
  orgProfile: {
    trustName: 'Trust',
    region: 'North',
    trustType: 'Acute'
  },
  currentDraft: {
    vision: {
      'Lens A': {
        score: 4,
        justification: '',
        evidence: '',
        actions: [
          { id: '1', text: 'Action A', owner: 'Alex', timescale: 'Q3', status: 'In Progress' }
        ]
      },
      'Lens B': {
        score: 0,
        justification: '',
        evidence: '',
        actions: []
      }
    },
    benefits: {
      'Lens A': {
        score: 2,
        justification: '',
        evidence: '',
        actions: [
          { id: '2', text: 'Action B', owner: 'Blair', timescale: 'Q4', status: 'Completed' }
        ]
      }
    }
  },
  phaseOverrides: {},
  history: []
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
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
          rag: 'Amber'
        }
      ],
      nextSteps: [
        {
          componentId: 'vision',
          componentLabel: 'Vision',
          phase: 1,
          gapToTarget: 2,
          message: 'Raise Vision from 2.0 to target 4. Assess 1 remaining lens area(s).'
        }
      ]
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
            actions: []
          },
          'Lens B': {
            score: 0,
            justification: '',
            evidence: '',
            actions: []
          }
        },
        benefits: {
          'Lens A': {
            score: 1,
            justification: '',
            evidence: '',
            actions: []
          }
        }
      }
    };

    const metrics = getMetrics(belowTargetStore, components);
    expect(metrics.currentPhase).toBe(1);
    expect(metrics.nextSteps.length).toBeGreaterThan(0);
    expect(metrics.nextSteps[0]).toMatchObject({
      componentId: 'vision',
      phase: 1
    });
  });

  it('computes current and target radar series', () => {
    expect(computeRadarData(store, ['Lens A', 'Lens B'], components, getEntry)).toEqual([3, 0]);
    expect(computeTargetRadarData(['Lens A', 'Lens B'], components)).toEqual([3, 4]);
  });

  it('flattens actions with component labels', () => {
    const rows = flattenActions(store, (id) => components.find((component) => component.id === id)!, getEntry);

    expect(rows).toHaveLength(2);
    expect(rows[0]).toMatchObject({ compId: 'vision', component: 'Vision', lens: 'Lens A' });
    expect(rows[1]).toMatchObject({ compId: 'benefits', component: 'Benefits', lens: 'Lens A' });
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
                  { componentId: 'benefits', lens: 'Lens A' }
                ]
              }
            ]
          }
        }
      }
    };

    const rows = flattenActions(linkedStore, (id) => components.find((component) => component.id === id)!, (componentId, lens) => linkedStore.currentDraft[componentId][lens]);

    expect(rows).toHaveLength(3);
    expect(rows.find((row) => row.compId === 'vision' && row.lens === 'Lens A' && row.action.id === 'linked-1')).toBeTruthy();
    expect(rows.find((row) => row.compId === 'benefits' && row.lens === 'Lens A' && row.action.id === 'linked-1')).toBeTruthy();
  });

  it('builds chart.js radar data structure with current and target datasets', () => {
    const chartData = buildRadarChartData(store, ['Lens A', 'Lens B'], components, getEntry);

    expect(chartData.labels).toEqual(['Lens A', 'Lens B']);
    expect(chartData.datasets).toHaveLength(2);
    expect(chartData.datasets[0]).toMatchObject({ label: 'Current Score', data: [3, 0] });
    expect(chartData.datasets[1]).toMatchObject({ label: 'Target', data: [3, 4] });
  });
});