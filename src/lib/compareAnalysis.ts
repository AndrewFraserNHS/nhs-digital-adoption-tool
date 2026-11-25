import { ASSESSMENT_COMPONENTS } from '@data/components';

import {
  deriveTemporalActionStatus,
  isCompletedActionStatus,
  normalizeActionStatus,
} from './actionModel';
import type { DraftEntry } from './adoptionState';
import { type BragStatus, getBragStatusFromAverage } from './bragStatus';

type Draft = Record<string, Record<string, DraftEntry>>;

/** RAG for a component: grey "Not started" until something is scored, otherwise the shared BRAG rule. */
export type CompareRag = BragStatus | 'NotStarted';

export function getCompareRag(avgScore: number, target: number): CompareRag {
  return avgScore <= 0 ? 'NotStarted' : getBragStatusFromAverage(avgScore, target);
}

export const COMPARE_RAG_LABEL: Record<CompareRag, string> = {
  Red: 'Red',
  Amber: 'Amber',
  Green: 'Green',
  Blue: 'Blue',
  NotStarted: 'Not started',
};

export type PeriodRole = 'Baseline' | 'Previous' | 'Current';

export interface PeriodOption {
  id: 'current' | 'previous' | 'baseline' | 'custom';
  label: string;
  /** Categories this period fills. */
  roles: PeriodRole[];
  draft: Draft;
  /** The date this period describes ("now" for live data). */
  asOf: Date;
  /**
   * Only live data carries trustworthy action dates and statuses: the audit log records score
   * changes with their previous value, but not full action history, so past periods compare
   * scores/RAG only.
   */
  actionsAvailable: boolean;
}

/** The minimum an audit event must carry for score rewinding. */
export interface ScoreAuditEvent {
  timestamp: string;
  eventType: string;
  componentId?: string;
  lens?: string;
  before?: Record<string, unknown>;
}

function endOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

/** Day the first score change was recorded, or undefined when none have been. */
export function firstScoreDate(auditLog: ScoreAuditEvent[]): Date | undefined {
  let earliest: number | undefined;
  auditLog.forEach((event) => {
    const time = Date.parse(event.timestamp);
    if (event.eventType === 'entry-score-updated' && !Number.isNaN(time)) {
      earliest = earliest === undefined ? time : Math.min(earliest, time);
    }
  });
  return earliest === undefined ? undefined : new Date(earliest);
}

/**
 * Scores as they stood at `asOf`: starts from the live draft and undoes every score change logged
 * after that moment (newest first, using each event's recorded previous score). Actions are
 * dropped because they cannot be rebuilt reliably.
 */
export function reconstructDraftAt(
  currentDraft: Draft,
  auditLog: ScoreAuditEvent[],
  asOf: Date
): Draft {
  const draft: Draft = {};
  Object.entries(currentDraft).forEach(([componentId, lenses]) => {
    draft[componentId] = {};
    Object.entries(lenses).forEach(([lens, entry]) => {
      draft[componentId][lens] = { ...entry, actions: [] };
    });
  });

  const later = auditLog
    .filter(
      (event) =>
        event.eventType === 'entry-score-updated' &&
        event.componentId &&
        event.lens &&
        Date.parse(event.timestamp) > asOf.getTime()
    )
    .sort((left, right) => Date.parse(right.timestamp) - Date.parse(left.timestamp));

  later.forEach((event) => {
    const previous = Number(event.before?.score);
    if (Number.isNaN(previous) || !event.componentId || !event.lens) {
      return;
    }
    const entry = draft[event.componentId]?.[event.lens];
    if (entry) {
      entry.score = previous;
    } else {
      draft[event.componentId] = draft[event.componentId] || {};
      draft[event.componentId][event.lens] = {
        score: previous,
        rationale: '',
        evidence: '',
        actions: [],
      };
    }
  });
  return draft;
}

const DAY_MS = 24 * 60 * 60 * 1000;

function formatOptionDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/**
 * Real-time comparison points, rebuilt from the audit log:
 * Current = live data; Previous = 30 days ago; Baseline = the end of the first day a score was
 * recorded (or "now" when nothing has been scored yet); Custom = any date the user picks.
 */
export function buildPeriodOptions(
  currentDraft: Draft,
  auditLog: ScoreAuditEvent[],
  now = new Date(),
  customDate?: Date
): PeriodOption[] {
  const previousDate = endOfDay(new Date(now.getTime() - 30 * DAY_MS));
  const first = firstScoreDate(auditLog);
  const baselineDate = first ? endOfDay(first) : now;
  const customAsOf = customDate ? endOfDay(customDate) : previousDate;

  return [
    {
      id: 'current',
      label: 'Current (live data)',
      roles: ['Current'],
      draft: currentDraft,
      asOf: now,
      actionsAvailable: true,
    },
    {
      id: 'previous',
      label: `Previous (30 days ago, ${formatOptionDate(previousDate)})`,
      roles: ['Previous'],
      draft: reconstructDraftAt(currentDraft, auditLog, previousDate),
      asOf: previousDate,
      actionsAvailable: false,
    },
    {
      id: 'baseline',
      label: first
        ? `Baseline (first scored, ${formatOptionDate(baselineDate)})`
        : 'Baseline (nothing scored yet)',
      roles: ['Baseline'],
      draft: reconstructDraftAt(currentDraft, auditLog, baselineDate),
      asOf: baselineDate,
      actionsAvailable: false,
    },
    {
      id: 'custom',
      label: `Custom date (${formatOptionDate(customAsOf)})`,
      roles: [],
      draft: reconstructDraftAt(currentDraft, auditLog, customAsOf),
      asOf: customAsOf,
      actionsAvailable: false,
    },
  ];
}

export interface ComponentPeriodStats {
  id: string;
  label: string;
  phase: number;
  target: number;
  avgScore: number;
  rag: CompareRag;
  /** Score per lens, so a movement can be explained lens by lens. */
  lenses: { lens: string; score: number }[];
  /** Action progress for this component across all its lenses. */
  actions: { total: number; completed: number; inProgress: number; overdue: number };
}

export interface OverdueAction {
  componentLabel: string;
  lens: string;
  text: string;
  owner: string;
  dueDate: string;
}

export interface PeriodStats {
  components: ComponentPeriodStats[];
  ragCounts: Record<CompareRag, number>;
  totalActions: number;
  completedActions: number;
  overdueCompletion: number;
  overdueStart: number;
  actionsWithStart: number;
  actionsWithEnd: number;
  earliestStart?: string;
  latestEnd?: string;
  overdueActions: OverdueAction[];
}

function earlier(current: string | undefined, next: string): string {
  return !current || Date.parse(next) < Date.parse(current) ? next : current;
}

function later(current: string | undefined, next: string): string {
  return !current || Date.parse(next) > Date.parse(current) ? next : current;
}

export function analysePeriod(draft: Draft, asOf: Date): PeriodStats {
  const ragCounts: Record<CompareRag, number> = {
    Red: 0,
    Amber: 0,
    Green: 0,
    Blue: 0,
    NotStarted: 0,
  };
  const stats: PeriodStats = {
    components: [],
    ragCounts,
    totalActions: 0,
    completedActions: 0,
    overdueCompletion: 0,
    overdueStart: 0,
    actionsWithStart: 0,
    actionsWithEnd: 0,
    overdueActions: [],
  };

  ASSESSMENT_COMPONENTS.forEach((component) => {
    let total = 0;
    const lensScores: { lens: string; score: number }[] = [];
    const actionProgress = { total: 0, completed: 0, inProgress: 0, overdue: 0 };
    component.lenses.forEach((lens) => {
      const entry = draft[component.id]?.[lens];
      total += Number(entry?.score || 0);
      lensScores.push({ lens, score: Number(entry?.score || 0) });
      (entry?.actions || []).forEach((action) => {
        stats.totalActions += 1;
        actionProgress.total += 1;
        if (isCompletedActionStatus(action.status)) {
          stats.completedActions += 1;
          actionProgress.completed += 1;
        } else if (normalizeActionStatus(action.status) === 'In Progress') {
          actionProgress.inProgress += 1;
        }
        if (action.startDate && !Number.isNaN(Date.parse(action.startDate))) {
          stats.actionsWithStart += 1;
          stats.earliestStart = earlier(stats.earliestStart, action.startDate);
        }
        if (action.dueDate && !Number.isNaN(Date.parse(action.dueDate))) {
          stats.actionsWithEnd += 1;
          stats.latestEnd = later(stats.latestEnd, action.dueDate);
        }
        const temporal = deriveTemporalActionStatus(
          normalizeActionStatus(action.status),
          action.startDate,
          action.dueDate,
          asOf
        );
        if (temporal === 'Overdue completion') {
          actionProgress.overdue += 1;
          stats.overdueCompletion += 1;
          stats.overdueActions.push({
            componentLabel: component.label,
            lens,
            text: action.text,
            owner: action.owner || '',
            dueDate: action.dueDate || '',
          });
        } else if (temporal === 'Overdue start') {
          stats.overdueStart += 1;
        }
      });
    });
    const avgScore = component.lenses.length
      ? Number((total / component.lenses.length).toFixed(2))
      : 0;
    const rag = getCompareRag(avgScore, component.target);
    ragCounts[rag] += 1;
    stats.components.push({
      id: component.id,
      label: component.label,
      phase: component.phase,
      target: component.target,
      avgScore,
      rag,
      lenses: lensScores,
      actions: actionProgress,
    });
  });

  stats.overdueActions.sort((left, right) => Date.parse(left.dueDate) - Date.parse(right.dueDate));
  return stats;
}

export type Movement = 'increase' | 'decrease' | 'unchanged';

export interface ComponentMovement {
  id: string;
  label: string;
  phase: number;
  target: number;
  fromAvg: number;
  toAvg: number;
  delta: number;
  movement: Movement;
  fromRag: CompareRag;
  toRag: CompareRag;
  fromLenses: { lens: string; score: number }[];
  toLenses: { lens: string; score: number }[];
  fromActions: ComponentPeriodStats['actions'];
  toActions: ComponentPeriodStats['actions'];
}

export function compareComponents(from: PeriodStats, to: PeriodStats): ComponentMovement[] {
  return from.components.map((fromComponent, index) => {
    const toComponent = to.components[index];
    const delta = Number((toComponent.avgScore - fromComponent.avgScore).toFixed(2));
    return {
      id: fromComponent.id,
      label: fromComponent.label,
      phase: fromComponent.phase,
      target: fromComponent.target,
      fromAvg: fromComponent.avgScore,
      toAvg: toComponent.avgScore,
      delta,
      movement: delta > 0 ? 'increase' : delta < 0 ? 'decrease' : 'unchanged',
      fromRag: fromComponent.rag,
      toRag: toComponent.rag,
      fromLenses: fromComponent.lenses,
      toLenses: toComponent.lenses,
      fromActions: fromComponent.actions,
      toActions: toComponent.actions,
    };
  });
}

export function summariseMovement(rows: ComponentMovement[]): Record<Movement, number> {
  const summary: Record<Movement, number> = { increase: 0, decrease: 0, unchanged: 0 };
  rows.forEach((row) => {
    summary[row.movement] += 1;
  });
  return summary;
}
