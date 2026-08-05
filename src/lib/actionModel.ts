export const UNIFIED_ACTION_STATUSES = [
  'Planned',
  'In Progress',
  'Blocked',
  'Completed',
  'Cancelled',
  'Overdue start',
  'Overdue completion'
] as const;

export type UnifiedActionStatus = (typeof UNIFIED_ACTION_STATUSES)[number];

export function normalizeActionStatus(status: string | undefined): UnifiedActionStatus {
  const value = (status || '').trim().toLowerCase();

  if (!value || value === 'not started' || value === 'todo' || value === 'to do') {
    return 'Planned';
  }

  if (value === 'in progress' || value === 'in-progress' || value === 'doing' || value === 'active') {
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
      return 'Overdue start';
    }
  }

  return 'Planned';
}

export function isCompletedActionStatus(status: string | undefined): boolean {
  return normalizeActionStatus(status) === 'Completed';
}
