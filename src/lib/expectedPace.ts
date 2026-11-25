const DAY_MS = 24 * 60 * 60 * 1000;

/** Within this many score points of the pace line counts as on pace. */
export const PACE_TOLERANCE = 0.25;

export type PaceStatus = 'ahead' | 'on-pace' | 'behind';

export interface PaceInput {
  id: string;
  label: string;
  target: number;
  avgScore: number;
}

export interface PaceRow extends PaceInput {
  /** Score the component should have reached today to hit its target on go-live. */
  expected: number;
  /** avgScore minus expected; negative is behind. */
  gap: number;
  status: PaceStatus;
}

export interface PaceSummary {
  /** 0-1 share of the start-to-go-live window that has elapsed. */
  fraction: number;
  weeksToGoLive: number;
  rows: PaceRow[];
  behind: number;
  onPace: number;
  ahead: number;
}

function parse(value: string | Date | undefined): number | undefined {
  if (!value) {
    return undefined;
  }
  const parsed = value instanceof Date ? value.getTime() : Date.parse(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

/**
 * Share of the window from `start` to `goLive` that has passed at `asOf`, clamped to 0-1.
 * Undefined WHERE either date is missing or go-live is not after the start.
 */
export function paceFraction(
  start: string | Date | undefined,
  goLive: string | Date | undefined,
  asOf: Date
): number | undefined {
  const from = parse(start);
  const to = parse(goLive);
  if (from === undefined || to === undefined || to <= from) {
    return undefined;
  }
  return Math.min(1, Math.max(0, (asOf.getTime() - from) / (to - from)));
}

/**
 * "Where you should be": working backwards from go-live, every component is given the same
 * amount of time, so each should be the same share of the way to its own target. Recomputed from
 * the dates each time, so changing the go-live date changes the answer.
 */
export function buildExpectedPace(
  components: PaceInput[],
  start: string | Date | undefined,
  goLive: string | Date | undefined,
  asOf: Date
): PaceSummary | undefined {
  const fraction = paceFraction(start, goLive, asOf);
  const goLiveTime = parse(goLive);
  if (fraction === undefined || goLiveTime === undefined) {
    return undefined;
  }
  const rows = components.map<PaceRow>((component) => {
    const expected = Number((component.target * fraction).toFixed(2));
    const gap = Number((component.avgScore - expected).toFixed(2));
    const status: PaceStatus =
      gap < -PACE_TOLERANCE ? 'behind' : gap > PACE_TOLERANCE ? 'ahead' : 'on-pace';
    return { ...component, expected, gap, status };
  });
  return {
    fraction,
    weeksToGoLive: Math.round((goLiveTime - asOf.getTime()) / (7 * DAY_MS)),
    rows,
    behind: rows.filter((row) => row.status === 'behind').length,
    onPace: rows.filter((row) => row.status === 'on-pace').length,
    ahead: rows.filter((row) => row.status === 'ahead').length,
  };
}
