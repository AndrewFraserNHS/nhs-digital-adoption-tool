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

const GMT_DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: '2-digit',
  timeZone: 'GMT',
});

/** "GMT - DD MMM YY", e.g. "GMT - 15 Jun 26"; falls back to "not set" for an empty/unparseable date. */
function formatGmtDate(value: string | undefined): string {
  if (!value) {
    return 'not set';
  }
  const parsed = new Date(value);
  if (isNaN(parsed.getTime())) {
    return 'not set';
  }
  return `GMT - ${GMT_DATE_FORMATTER.format(parsed)}`;
}

/** Single clock icon summarising an action's timeline health (grey/green/amber/red); hover/title carries the actual dates. */
export function ActionTimelineClock({ status, startDate, dueDate }: ActionTimelineClockProps): JSX.Element {
  const health = getActionTimelineHealth(status, startDate, dueDate);
  const title = `${HEALTH_LABEL[health]} · Start: ${formatGmtDate(startDate)} · End: ${formatGmtDate(dueDate)}`;

  return (
    <span title={title} aria-label={title} className={`inline-flex items-center ${HEALTH_CLASSES[health]}`}>
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" />
      </svg>
    </span>
  );
}
