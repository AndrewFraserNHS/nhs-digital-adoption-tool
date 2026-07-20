/**
 * Metrics calculation for Adoption Tool
 * Computes readiness scores, radar data, and progress tracking
 */

import { AdoptionStore, DraftEntry } from './adoptionState';
import { AssessmentComponent } from '@data/components';

export interface Metrics {
  totalCurrent: number;
  assessedCount: number;
  totalExpected: number;
  overallPct: number;
}

export interface ActionRow {
  compId: string;
  component: string;
  lens: string;
  action: {
    id: string;
    text: string;
    owner: string;
    timescale: string;
    status: string;
  };
}

/**
 * Calculate overall metrics for current draft
 */
export function getMetrics(
  store: AdoptionStore,
  components: AssessmentComponent[]
): Metrics {
  let totalCurrent = 0;
  let assessedCount = 0;

  Object.keys(store.currentDraft).forEach((componentId) => {
    Object.keys(store.currentDraft[componentId]).forEach((lens) => {
      const score = Number(store.currentDraft[componentId][lens].score || 0);
      totalCurrent += score;
      if (score > 0) assessedCount += 1;
    });
  });

  const totalExpected = components.reduce(
    (sum, component) => sum + component.lenses.length,
    0
  );
  const absoluteMaxPossible = totalExpected * 5;
  const overallPct = absoluteMaxPossible
    ? Math.round((totalCurrent / absoluteMaxPossible) * 100)
    : 0;

  return { totalCurrent, assessedCount, totalExpected, overallPct };
}

/**
 * Compute radar chart data for current scores
 */
export function computeRadarData(
  store: AdoptionStore,
  lenses: string[],
  components: AssessmentComponent[],
  getEntry: (componentId: string, lens: string) => DraftEntry
): number[] {
  return lenses.map((lens) => {
    let total = 0;
    let count = 0;
    components.forEach((component) => {
      if (component.lenses.includes(lens)) {
        total += Number(getEntry(component.id, lens).score || 0);
        count += 1;
      }
    });
    return count ? Number((total / count).toFixed(1)) : 0;
  });
}

/**
 * Compute radar chart data for target scores
 */
export function computeTargetRadarData(
  lenses: string[],
  components: AssessmentComponent[]
): number[] {
  return lenses.map((lens) => {
    let total = 0;
    let count = 0;
    components.forEach((component) => {
      if (component.lenses.includes(lens)) {
        total += component.target;
        count += 1;
      }
    });
    return count ? Number((total / count).toFixed(1)) : 0;
  });
}

/**
 * Build radar chart data structure for Chart.js
 * Combines current scores, targets, and labels
 */
export function buildRadarChartData(
  store: AdoptionStore,
  lenses: string[],
  components: AssessmentComponent[],
  getEntry: (componentId: string, lens: string) => DraftEntry
): any {
  const current = computeRadarData(store, lenses, components, getEntry);
  const targets = computeTargetRadarData(lenses, components);
  
  return {
    labels: lenses,
    datasets: [
      {
        label: 'Current Score',
        data: current,
        borderColor: '#005EB8',
        backgroundColor: 'rgba(0, 94, 184, 0.1)',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      },
      {
        label: 'Target',
        data: targets,
        borderColor: '#00A499',
        backgroundColor: 'rgba(0, 164, 153, 0.05)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 3,
        pointHoverRadius: 5
      }
    ]
  };
}

/**
 * Flatten all actions into a row-based format for export
 */
export function flattenActions(
  store: AdoptionStore,
  getComponent: (componentId: string) => AssessmentComponent,
  getEntry: (componentId: string, lens: string) => DraftEntry
): ActionRow[] {
  const rows: ActionRow[] = [];
  Object.keys(store.currentDraft).forEach((componentId) => {
    Object.keys(store.currentDraft[componentId]).forEach((lens) => {
      const component = getComponent(componentId);
      const actions = getEntry(componentId, lens).actions || [];
      actions.forEach((action) =>
        rows.push({ compId: componentId, component: component.label, lens, action })
      );
    });
  });
  return rows;
}
