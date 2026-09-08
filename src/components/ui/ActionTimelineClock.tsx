import { JSX } from 'react';
import { getActionTimelineHealth } from '@lib/actionTimelineHealth';

export interface ActionTimelineClockProps {
  status: string | undefined;
  startDate: string | undefined;
  dueDate: string | undefined;
}

const HEALTH_CLASSES: Record<string, string> = {
  grey: 'text-slate-300',
  green: 'text-green-600',
  amber: 'text-amber-500',
  red: 'text-red-600',
};

const HEALTH_LABEL: Record<string, string> = {
  grey: 'No dates set',
  green: 'On track',
  amber: 'Due soon',
  red: 'Overdue',
};

/** Single clock icon summarising an action's timeline health (grey/green/amber/red); hover/title carries the actual dates. */
export function ActionTimelineClock({ status, startDate, dueDate }: ActionTimelineClockProps): JSX.Element {
  const health = getActionTimelineHealth(status, startDate, dueDate);
  const title = `${HEALTH_LABEL[health]} · Start: ${startDate || 'not set'} · End: ${dueDate || 'not set'}`;

  return (
    <span title={title} aria-label={title} className={`inline-flex items-center ${HEALTH_CLASSES[health]}`}>
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" />
      </svg>
    </span>
  );
}
