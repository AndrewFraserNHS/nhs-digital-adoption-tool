export const UNIFIED_ACTION_STATUSES = [
  'Planned',
  'In Progress',
  'Blocked',
  'Completed',
  'Cancelled',
  'Overdue start',
  'Overdue completion',
] as const;

export const ACTION_TYPES = [
'Analysis & Insight',
'Design',
'Governance',
'Engagement',
'Communication',
'Training & Learning',
'Implementation',
'Testing & Validation',
'Measurement & Evaluation',
'Risk Management',
'Dependency Management',
'Reinforcement',
] as const;

export type UnifiedActionStatus = (typeof UNIFIED_ACTION_STATUSES)[number];
export type ActionType = (typeof ACTION_TYPES)[number];

export const ACTION_STATUS_BADGE_STYLES: Record<UnifiedActionStatus, string> = {
  Planned: 'bg-slate-100 text-slate-700 border-slate-200',
  'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
  Blocked: 'bg-amber-100 text-amber-800 border-amber-200',
  Completed: 'bg-green-100 text-green-800 border-green-200',
  Cancelled: 'bg-slate-200 text-slate-700 border-slate-300',
  'Overdue start': 'bg-rose-100 text-rose-800 border-rose-200',
  'Overdue completion': 'bg-red-100 text-red-800 border-red-200',
};

export function normalizeActionStatus(status: string | undefined): UnifiedActionStatus {
  const value = (status || '').trim().toLowerCase();

  if (!value || value === 'not started' || value === 'todo' || value === 'to do') {
    return 'Planned';
  }

  if (
    value === 'in progress' ||
    value === 'in-progress' ||
    value === 'doing' ||
    value === 'active'
  ) {
    return 'In Progress';
  }

  if (value === 'blocked' || value === 'at risk') {
    return 'Blocked';
  }

  if (value === 'completed' || value === 'done' || value === 'closed') {
    return 'Completed';
  }

  if (value === 'cancelled' || value === 'canceled') {
    return 'Cancelled';
  }

  if (value === 'overdue start' || value === 'overdue-start') {
    return 'Overdue start';
  }

  if (value === 'overdue completion' || value === 'overdue-completion') {
    return 'Overdue completion';
  }

  return 'Planned';
}

export function deriveTemporalActionStatus(
  status: string | undefined,
  startDate: string | undefined,
  dueDate: string | undefined,
  now = new Date()
): UnifiedActionStatus {
  const normalized = normalizeActionStatus(status);
  if (normalized === 'Completed' || normalized === 'Cancelled') {
    return normalized;
  }

  // If the action is already underway, treat it as In Progress for start-date checks.
  // Still allow overdue completion to surface if the due date has passed.
  const treatAsInProgress = normalized === 'In Progress';

  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const parsedDueDate = dueDate ? new Date(dueDate) : null;
  if (parsedDueDate && !isNaN(parsedDueDate.getTime())) {
    parsedDueDate.setHours(0, 0, 0, 0);
    if (today > parsedDueDate) {
      return 'Overdue completion';
    }
  }

  const parsedStartDate = startDate ? new Date(startDate) : null;
  if (parsedStartDate && !isNaN(parsedStartDate.getTime())) {
    parsedStartDate.setHours(0, 0, 0, 0);
    if (today > parsedStartDate) {
      if (!treatAsInProgress) {
        return 'Overdue start';
      }
      // If it's already in progress, don't mark as 'Overdue start'.
    }
  }

  return 'Planned';
}

export function isCompletedActionStatus(status: string | undefined): boolean {
  return normalizeActionStatus(status) === 'Completed';
}
