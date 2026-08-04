export const UNIFIED_ACTION_STATUSES = [
  'Planned',
  'In Progress',
  'Blocked',
  'Completed',
  'Cancelled'
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

  return 'Planned';
}

export function isCompletedActionStatus(status: string | undefined): boolean {
  return normalizeActionStatus(status) === 'Completed';
}
