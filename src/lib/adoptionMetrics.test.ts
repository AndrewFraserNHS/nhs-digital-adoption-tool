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
      overallPct: 40
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

  it('builds chart.js radar data structure with current and target datasets', () => {
    const chartData = buildRadarChartData(store, ['Lens A', 'Lens B'], components, getEntry);

    expect(chartData.labels).toEqual(['Lens A', 'Lens B']);
    expect(chartData.datasets).toHaveLength(2);
    expect(chartData.datasets[0]).toMatchObject({ label: 'Current Score', data: [3, 0] });
    expect(chartData.datasets[1]).toMatchObject({ label: 'Target', data: [3, 4] });
  });
});