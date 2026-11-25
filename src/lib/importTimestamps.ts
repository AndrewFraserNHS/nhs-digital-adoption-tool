/** Latest valid ISO timestamp among the given values, or undefined when none parse. */
export function latestTimestamp(values: Array<string | undefined | null>): string | undefined {
  let best: { time: number; value: string } | undefined;
  values.forEach((value) => {
    const time = Date.parse(value || '');
    if (value && !Number.isNaN(time) && (!best || time > best.time)) {
      best = { time, value };
    }
  });
  return best?.value;
}

/** Last activity recorded in an audit log, optionally falling back to another timestamp (e.g. exportedAt). */
export function latestActivity(
  auditLog: Array<{ timestamp?: string }> | undefined,
  fallback?: string
): string | undefined {
  return latestTimestamp([...(auditLog || []).map((event) => event.timestamp), fallback]);
}

export function formatStamp(value: string | undefined): string {
  const time = Date.parse(value || '');
  if (!value || Number.isNaN(time)) {
    return 'Unknown';
  }
  return new Date(time).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/** Which side was updated most recently; null when either is unknown or they match. */
export function newerSide(mine?: string, theirs?: string): 'mine' | 'theirs' | null {
  const mineTime = Date.parse(mine || '');
  const theirTime = Date.parse(theirs || '');
  if (Number.isNaN(mineTime) || Number.isNaN(theirTime) || mineTime === theirTime) {
    return null;
  }
  return mineTime > theirTime ? 'mine' : 'theirs';
}
