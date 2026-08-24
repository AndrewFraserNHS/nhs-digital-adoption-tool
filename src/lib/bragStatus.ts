/**
 * Shared BRAG (Blue/Red/Amber/Green) status logic, used by the Dashboard and the Highlight
 * Builder's readiness slides so both compute the same status for the same component.
 */

export type BragStatus = 'Blue' | 'Red' | 'Amber' | 'Green';

export function getBragStatusFromGap(gapToTarget: number): BragStatus {
  if (gapToTarget <= 0) {
    return 'Green';
  }
  if (gapToTarget >= 2) {
    return 'Red';
  }
  if (gapToTarget >= 1) {
    return 'Amber';
  }
  return 'Blue';
}

export function getBragStatusFromAverage(avgScore: number, targetScore: number): BragStatus {
  if (avgScore <= 0) {
    return 'Amber';
  }

  const gap = targetScore - avgScore;
  if (gap >= 2) {
    return 'Red';
  }
  if (gap > 0) {
    return 'Amber';
  }
  return 'Green';
}

export interface TimelineBragAction {
  text: string;
  dueDate?: string;
}

export interface TimelineBragResult {
  status: BragStatus;
  reason: string;
}

/**
 * BRAG based on due dates rather than readiness gap: Red if anything is overdue, Amber if
 * something's due soon (or nothing has a due date at all, so risk can't be judged), Green
 * otherwise. `reason` is meant for a hover tooltip explaining the colour.
 */
export function getTimelineBragStatus(
  outstandingActions: TimelineBragAction[],
  now: Date = new Date()
): TimelineBragResult {
  if (outstandingActions.length === 0) {
    return { status: 'Green', reason: 'No outstanding actions at the current level.' };
  }

  const withParsedDueDate = outstandingActions
    .map((action) => ({ action, due: action.dueDate ? new Date(action.dueDate) : null }))
    .map(({ action, due }) => ({ action, due: due && !isNaN(due.getTime()) ? due : null }));

  const overdue = withParsedDueDate.filter(({ due }) => due !== null && due < now);
  if (overdue.length > 0) {
    const extra = overdue.length > 1 ? ` and ${overdue.length - 1} more` : '';
    return {
      status: 'Red',
      reason: `${overdue.length} action${overdue.length === 1 ? ' is' : 's are'} overdue: "${overdue[0].action.text}"${extra}.`,
    };
  }

  const dueSoonCutoff = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueSoon = withParsedDueDate.filter(({ due }) => due !== null && due <= dueSoonCutoff);
  if (dueSoon.length > 0) {
    return {
      status: 'Amber',
      reason: `${dueSoon.length} action${dueSoon.length === 1 ? ' is' : 's are'} due within 14 days: "${dueSoon[0].action.text}".`,
    };
  }

  const withoutDueDate = withParsedDueDate.filter(({ due }) => due === null);
  if (withoutDueDate.length === outstandingActions.length) {
    return {
      status: 'Amber',
      reason: `${outstandingActions.length} action${outstandingActions.length === 1 ? ' has' : 's have'} no due date set, so timeline risk can't be assessed.`,
    };
  }

  return { status: 'Green', reason: 'All outstanding actions are on track against their due dates.' };
}

export const BRAG_BADGE_STYLES: Record<BragStatus, string> = {
  Blue: 'text-sky-800 bg-sky-100',
  Red: 'text-red-800 bg-red-100',
  Amber: 'text-amber-800 bg-amber-100',
  Green: 'text-green-800 bg-green-100',
};

export const BRAG_BADGE_STYLES_COLOR_BLIND: Record<BragStatus, string> = {
  Blue: 'text-cyan-900 bg-cyan-100',
  Red: 'text-rose-900 bg-rose-100',
  Amber: 'text-orange-900 bg-orange-100',
  Green: 'text-teal-900 bg-teal-100',
};
