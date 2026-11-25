import type { AuditEvent } from './auditLog';
import { firstScoreDate } from './compareAnalysis';
import { latestActivity } from './importTimestamps';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Dates worth showing next to each loaded file on the comparison page. */
export interface SourceMeta {
  /** When the file was downloaded (exported). */
  exportedAt?: string;
  /** Latest recorded activity in the file, falling back to the download date. */
  lastUpdated?: string;
  /** First score recorded after the CAB, i.e. when the team started progressing. */
  startedAt?: string;
}

export function getSourceMeta(payload: {
  exportedAt?: string;
  auditLog?: AuditEvent[];
}): SourceMeta {
  const auditLog = payload.auditLog || [];
  return {
    exportedAt: payload.exportedAt,
    lastUpdated: latestActivity(auditLog, payload.exportedAt),
    startedAt: firstScoreDate(auditLog)?.toISOString(),
  };
}

export function normaliseTrustName(name: string | undefined): string {
  return (name || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

/** True when every file names the same trust (and that name is not blank). */
export function allSameTrust(trustNames: Array<string | undefined>): boolean {
  const first = normaliseTrustName(trustNames[0]);
  return Boolean(first) && trustNames.every((name) => normaliseTrustName(name) === first);
}

function time(value: string | undefined): number | undefined {
  const parsed = Date.parse(value || '');
  return Number.isNaN(parsed) ? undefined : parsed;
}

export function weeksBetween(from: string | undefined, to: string | undefined): number | undefined {
  const start = time(from);
  const end = time(to);
  if (start === undefined || end === undefined) {
    return undefined;
  }
  return Math.max(0, Math.floor((end - start) / (7 * DAY_MS)));
}

/**
 * Plain-English call-out when sources did not start progressing together, e.g.
 * "Trust B started 5 weeks after Trust A". Undefined when starts are within a week or unknown.
 */
export function headStartNote(
  sources: Array<{ label: string; startedAt?: string }>
): string | undefined {
  const known = sources.filter((source) => time(source.startedAt) !== undefined);
  if (known.length < 2) {
    return undefined;
  }
  const sorted = [...known].sort(
    (a, b) => (time(a.startedAt) as number) - (time(b.startedAt) as number)
  );
  const earliest = sorted[0];
  const latest = sorted[sorted.length - 1];
  const weeks = weeksBetween(earliest.startedAt, latest.startedAt) as number;
  if (weeks < 1) {
    return undefined;
  }
  return `${earliest.label} started progressing ${weeks} week${weeks === 1 ? '' : 's'} before ${latest.label}, so the latest data is not like for like. Compare at the same time from each start to see how the teams really compared.`;
}

/** The date a given number of weeks after a start. */
export function alignedDate(startedAt: string, weeks: number): Date {
  const start = new Date(startedAt);
  return new Date(start.getTime() + weeks * 7 * DAY_MS);
}

/** Most weeks every source has data for, measured from its own start (0 when unknown). */
export function maxAlignedWeeks(sources: SourceMeta[]): number {
  const spans = sources.map((source) => weeksBetween(source.startedAt, source.lastUpdated));
  if (spans.some((span) => span === undefined)) {
    return 0;
  }
  return Math.min(...(spans as number[]));
}
