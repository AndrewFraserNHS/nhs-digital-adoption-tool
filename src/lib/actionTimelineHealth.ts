import { deriveTemporalActionStatus, normalizeActionStatus } from './actionModel';

export type TimelineHealth = 'green' | 'amber' | 'red';

const DUE_SOON_DAYS = 7;

/**
 * Traffic-light health for an action's timeline: green once resolved (Completed/Cancelled) or
 * comfortably on track, amber once it's overdue to start or its due date is within a week, red
 * once its due date has passed and it's still unresolved.
 */
export function getActionTimelineHealth(
  status: string | undefined,
  startDate: string | undefined,
  dueDate: string | undefined,
  now = new Date()
): TimelineHealth {
  const normalized = normalizeActionStatus(status);
  if (normalized === 'Completed' || normalized === 'Cancelled') {
    return 'green';
  }

  const temporalStatus = deriveTemporalActionStatus(status, startDate, dueDate, now);
  if (temporalStatus === 'Overdue completion') {
    return 'red';
  }
  if (temporalStatus === 'Overdue start') {
    return 'amber';
  }

  if (dueDate) {
    const due = new Date(dueDate);
    if (!isNaN(due.getTime())) {
      const daysUntilDue = (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
      if (daysUntilDue >= 0 && daysUntilDue <= DUE_SOON_DAYS) {
        return 'amber';
      }
    }
  }

  return 'green';
}
