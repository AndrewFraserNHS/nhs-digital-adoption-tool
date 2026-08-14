/**
 * Metrics calculation for Adoption Tool
 * Computes readiness scores, radar data, and progress tracking
 */

import { AssessmentComponent } from '@data/components';
import type { ChartData } from 'chart.js';
import { isCompletedActionStatus } from './actionModel';
import { AdoptionStore, deriveObjectiveStatus, DraftEntry } from './adoptionState';

const COMPONENT_PHASE_EXEMPLARS: Record<number, Record<string, number>> = {
  1: {
    vision: 5,
    case_for_change: 5,
    sponsorship: 1,
    change_network: 1,
    benefits: 1,
    change_impact: 1,
    risk_management: 1,
    cm_readiness: 1,
    stakeholder: 1,
    resistance: 1,
    skills_learning: 1,
    capability: 1,
    change_adoption: 1,
    process_change: 1,
    reinforcement: 1,
    org_maturity: 1,
    transfer_bau: 1,
  },
  2: {
    vision: 5,
    case_for_change: 5,
    sponsorship: 2,
    change_network: 2,
    benefits: 3,
    change_impact: 2,
    risk_management: 2,
    cm_readiness: 2,
    stakeholder: 2,
    resistance: 2,
    skills_learning: 2,
    capability: 2,
    change_adoption: 2,
    process_change: 3,
    reinforcement: 2,
    org_maturity: 2,
    transfer_bau: 2,
  },
  3: {
    vision: 5,
    case_for_change: 5,
    sponsorship: 3,
    change_network: 3,
    benefits: 4,
    change_impact: 3,
    risk_management: 3,
    cm_readiness: 3,
    stakeholder: 3,
    resistance: 3,
    skills_learning: 4,
    capability: 3,
    change_adoption: 3,
    process_change: 4,
    reinforcement: 3,
    org_maturity: 3,
    transfer_bau: 3,
  },
  4: {
    vision: 5,
    case_for_change: 5,
    sponsorship: 5,
    change_network: 5,
    benefits: 5,
    change_impact: 5,
    risk_management: 5,
    cm_readiness: 4,
    stakeholder: 5,
    resistance: 4,
    skills_learning: 5,
    capability: 4,
    change_adoption: 4,
    process_change: 5,
    reinforcement: 4,
    org_maturity: 4,
    transfer_bau: 4,
  },
  5: {
    vision: 5,
    case_for_change: 5,
    sponsorship: 5,
    change_network: 5,
    benefits: 5,
    change_impact: 5,
    risk_management: 5,
    cm_readiness: 5,
    stakeholder: 5,
    resistance: 5,
    skills_learning: 5,
    capability: 5,
    change_adoption: 5,
    process_change: 5,
    reinforcement: 5,
    org_maturity: 5,
    transfer_bau: 5,
  },
};

export function getComponentExemplarScore(
  componentId: string,
  phase: number | undefined,
  fallbackTarget: number
): number {
  if (!phase || !COMPONENT_PHASE_EXEMPLARS[phase]) {
    return fallbackTarget;
  }
  return COMPONENT_PHASE_EXEMPLARS[phase][componentId] ?? fallbackTarget;
}

export interface Metrics {
  totalCurrent: number;
  assessedCount: number;
  totalExpected: number;
  overallPct: number;
  totalActions: number;
  completedActions: number;
  actionCompletionPct: number;
  currentPhase: number;
  phaseSummaries: PhaseSummary[];
  nextSteps: NextStep[];
}

export interface PhaseSummary {
  phase: number;
  componentCount: number;
  assessedLenses: number;
  totalLenses: number;
  onTrackComponents: number;
  actionCompletionPct: number;
  rag: 'Red' | 'Amber' | 'Green';
}

export interface NextStep {
  componentId: string;
  componentLabel: string;
  phase: number;
  gapToTarget: number;
  message: string;
  toolkitLinks?: Array<{ label: string; url: string }>;
}

export interface ActionRow {
  compId: string;
  component: string;
  lens: string;
  action: {
    id: string;
    text: string;
    actionType?: string;
    owner: string;
    timescale: string;
    status: string;
  };
}

/**
 * Calculate overall metrics for current draft
 */
export function getMetrics(store: AdoptionStore, components: AssessmentComponent[]): Metrics {
  let totalCurrent = 0;
  let assessedCount = 0;
  let totalActions = 0;
  let completedActions = 0;

  const byPhase = new Map<
    number,
    {
      componentCount: number;
      assessedLenses: number;
      totalLenses: number;
      onTrackComponents: number;
      totalActions: number;
      completedActions: number;
    }
  >();

  const componentProgress: Array<{
    component: AssessmentComponent;
    avgScore: number;
    gapToTarget: number;
    assessedLenses: number;
    totalLenses: number;
    totalActions: number;
    completedActions: number;
  }> = [];

  components.forEach((component) => {
    const phaseBucket = byPhase.get(component.phase) || {
      componentCount: 0,
      assessedLenses: 0,
      totalLenses: 0,
      onTrackComponents: 0,
      totalActions: 0,
      completedActions: 0,
    };
    phaseBucket.componentCount += 1;
    phaseBucket.totalLenses += component.lenses.length;

    let componentTotal = 0;
    let componentAssessed = 0;
    let componentActions = 0;
    let componentActionsCompleted = 0;

    component.lenses.forEach((lens) => {
      const entry = store.currentDraft[component.id]?.[lens];
      const score = Number(entry?.score || 0);
      totalCurrent += score;
      componentTotal += score;
      if (score > 0) {
        assessedCount += 1;
        componentAssessed += 1;
        phaseBucket.assessedLenses += 1;
      }

      const actions = entry?.actions || [];
      actions.forEach((action) => {
        totalActions += 1;
        componentActions += 1;
        phaseBucket.totalActions += 1;
        if (isCompletedActionStatus(action.status)) {
          completedActions += 1;
          componentActionsCompleted += 1;
          phaseBucket.completedActions += 1;
        }
      });
    });

    const avgScore = component.lenses.length
      ? Number((componentTotal / component.lenses.length).toFixed(1))
      : 0;
    const phaseExpectedScore = getComponentExemplarScore(component.id, component.phase, component.target);
    const gapToTarget = Number(Math.max(0, phaseExpectedScore - avgScore).toFixed(1));
    if (avgScore >= phaseExpectedScore) {
      phaseBucket.onTrackComponents += 1;
    }

    componentProgress.push({
      component,
      avgScore,
      gapToTarget,
      assessedLenses: componentAssessed,
      totalLenses: component.lenses.length,
      totalActions: componentActions,
      completedActions: componentActionsCompleted,
    });

    byPhase.set(component.phase, phaseBucket);
  });

  const totalExpected = components.reduce((sum, component) => sum + component.lenses.length, 0);
  const absoluteMaxPossible = totalExpected * 5;
  const overallPct = absoluteMaxPossible
    ? Math.round((totalCurrent / absoluteMaxPossible) * 100)
    : 0;

  const actionCompletionPct = totalActions
    ? Math.round((completedActions / totalActions) * 100)
    : 0;

  const phaseSummaries = [...byPhase.entries()]
    .sort(([left], [right]) => left - right)
    .map(([phase, bucket]): PhaseSummary => {
      const phaseActionCompletionPct = bucket.totalActions
        ? Math.round((bucket.completedActions / bucket.totalActions) * 100)
        : 0;
      const phaseOnTrackPct = bucket.componentCount
        ? bucket.onTrackComponents / bucket.componentCount
        : 0;
      const rag: PhaseSummary['rag'] =
        phaseOnTrackPct >= 0.75 && phaseActionCompletionPct >= 50
          ? 'Green'
          : phaseOnTrackPct >= 0.4 || phaseActionCompletionPct >= 25
            ? 'Amber'
            : 'Red';

      return {
        phase,
        componentCount: bucket.componentCount,
        assessedLenses: bucket.assessedLenses,
        totalLenses: bucket.totalLenses,
        onTrackComponents: bucket.onTrackComponents,
        actionCompletionPct: phaseActionCompletionPct,
        rag,
      };
    });

  const firstPhaseNotReadinessReady = phaseSummaries.find(
    (phaseSummary) => phaseSummary.onTrackComponents < phaseSummary.componentCount
  );

  const currentPhase =
    firstPhaseNotReadinessReady?.phase || phaseSummaries[phaseSummaries.length - 1]?.phase || 1;
  const nextSteps = componentProgress
    .filter(({ component, gapToTarget }) => component.phase <= currentPhase + 1 && gapToTarget > 0)
    .sort((left, right) => {
      if (left.component.phase !== right.component.phase) {
        return left.component.phase - right.component.phase;
      }
      return right.gapToTarget - left.gapToTarget;
    })
    .slice(0, 3)
    .map(
      ({
        component,
        avgScore,
        gapToTarget,
        totalActions,
        completedActions,
        assessedLenses,
        totalLenses,
      }) => {
        const remainingActions = Math.max(0, totalActions - completedActions);
        const evidenceText =
          assessedLenses < totalLenses
            ? `Assess ${totalLenses - assessedLenses} remaining lens area(s).`
            : remainingActions > 0
              ? `Complete ${remainingActions} open action(s).`
              : 'Create at least one delivery action linked to this component.';
        return {
          componentId: component.id,
          componentLabel: component.label,
          phase: component.phase,
          gapToTarget,
          message: `Raise ${component.label} from ${avgScore.toFixed(1)} to target ${component.target}. ${evidenceText}`,
        };
      }
    );

  return {
    totalCurrent,
    assessedCount,
    totalExpected,
    overallPct,
    totalActions,
    completedActions,
    actionCompletionPct,
    currentPhase,
    phaseSummaries,
    nextSteps,
  };
}

/**
 * Compute radar chart data for current scores
 */
export function computeRadarData(
  _store: AdoptionStore,
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
): ChartData<'radar', number[], string> {
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
        pointHoverRadius: 6,
      },
      {
        label: 'Target',
        data: targets,
        borderColor: '#00A499',
        backgroundColor: 'rgba(0, 164, 153, 0.05)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };
}

export function buildComponentRadarChartData(
  components: AssessmentComponent[],
  getEntry: (componentId: string, lens: string) => DraftEntry,
  currentPhase?: number
): ChartData<'radar', number[], string> {
  const exemplarPhase =
    currentPhase && COMPONENT_PHASE_EXEMPLARS[currentPhase] ? currentPhase : null;
  const colorForScore = (score: number): string => {
    if (score <= 0) return '#768692';
    if (score < 1.5) return '#AE2521';
    if (score < 2.5) return '#FFB81C';
    if (score < 3.5) return '#005EB8';
    if (score < 4.5) return '#330072';
    return '#00A499';
  };
  const averageScores = components.map((component) => {
    const total = component.lenses.reduce(
      (sum, lens) => sum + Number(getEntry(component.id, lens).score || 0),
      0
    );
    return Number((total / component.lenses.length).toFixed(1));
  });

  return {
    labels: components.map((component) => component.label),
    datasets: [
      {
        label: 'Current Average Readiness',
        data: averageScores,
        borderColor: '#005EB8',
        backgroundColor: 'rgba(0, 94, 184, 0.12)',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: averageScores.map(colorForScore),
        pointBorderColor: averageScores.map(colorForScore),
      },
      {
        label: exemplarPhase ? `Exemplar (Phase ${exemplarPhase})` : 'Target Average',
        data: components.map((component) =>
          getComponentExemplarScore(component.id, exemplarPhase || undefined, component.target)
        ),
        borderColor: '#94a3b8',
        backgroundColor: 'rgba(148, 163, 184, 0.06)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
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
  const pushed = new Set<string>();

  const pushRow = (componentId: string, lens: string, action: ActionRow['action']) => {
    const key = `${action.id}:${componentId}:${lens}`;
    if (pushed.has(key)) {
      return;
    }
    pushed.add(key);
    const component = getComponent(componentId);
    rows.push({ compId: componentId, component: component.label, lens, action });
  };

  Object.keys(store.currentDraft).forEach((componentId) => {
    Object.keys(store.currentDraft[componentId]).forEach((lens) => {
      const actions = getEntry(componentId, lens).actions || [];
      actions.forEach((action) => {
        const targets =
          action.linkedTargets && action.linkedTargets.length
            ? action.linkedTargets
            : [{ componentId, lens }];

        targets.forEach((target) => {
          pushRow(target.componentId, target.lens, action);
        });
      });
    });
  });

  return rows;
}

/**
 * Count total/completed objectives for a single component. An objective counts as
 * completed once its derived status (from its linked lens actions) is 'Completed'.
 */
export function getComponentObjectiveCounts(
  store: AdoptionStore,
  componentId: string,
  getEntry: (componentId: string, lens: string) => DraftEntry
): { total: number; completed: number } {
  const objectives = store.objectives?.[componentId] || [];

  const actionsByLens = (
    lenses: string[]
  ): Record<string, ReturnType<typeof getEntry>['actions']> =>
    lenses.reduce<Record<string, ReturnType<typeof getEntry>['actions']>>((byLens, lens) => {
      byLens[lens] = getEntry(componentId, lens).actions;
      return byLens;
    }, {});

  const lensesUsed = Array.from(
    new Set(objectives.flatMap((objective) => objective.linkedActions.map((link) => link.lens)))
  );
  const byLens = actionsByLens(lensesUsed);

  const completed = objectives.filter(
    (objective) => deriveObjectiveStatus(objective, byLens) === 'Completed'
  ).length;

  return { total: objectives.length, completed };
}
