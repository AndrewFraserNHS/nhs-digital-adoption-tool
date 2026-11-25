import { type PeriodStats } from '@lib/compareAnalysis';
import { buildExpectedPace, type PaceStatus } from '@lib/expectedPace';
import { formatStamp } from '@lib/importTimestamps';
import { JSX } from 'react';

const STATUS_LABEL: Record<PaceStatus, string> = {
  ahead: 'Ahead',
  'on-pace': 'On pace',
  behind: 'Behind',
};

const STATUS_STYLE: Record<PaceStatus, string> = {
  ahead: 'bg-sky-100 text-sky-800',
  'on-pace': 'bg-green-100 text-green-800',
  behind: 'bg-red-100 text-red-800',
};

/**
 * "Where you should be": the current scores against the pace needed to reach each target by the
 * go-live date, with every component given roughly the same amount of time.
 */
export function ExpectedPacePanel({
  stats,
  startedAt,
  goLiveDate,
  asOf,
}: {
  stats: PeriodStats;
  /** First score recorded after the CAB, the start of the window. */
  startedAt: string | undefined;
  goLiveDate: string | undefined;
  asOf: Date;
}): JSX.Element {
  const summary = buildExpectedPace(stats.components, startedAt, goLiveDate, asOf);

  if (!summary) {
    return (
      <div
        className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
        data-testid="expected-pace-panel"
      >
        {goLiveDate
          ? 'Where you should be needs scores recorded before the go live date. Score a component first.'
          : 'Where you should be works backwards from your go live date. Add a go live date in the project profile to see it.'}
      </div>
    );
  }

  return (
    <div
      className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      data-testid="expected-pace-panel"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate-800">Where you should be</h3>
        <p className="mt-1 text-xs text-slate-600">
          Worked backwards from your go live date of {formatStamp(goLiveDate)} (
          {summary.weeksToGoLive >= 0
            ? `${summary.weeksToGoLive} weeks away`
            : `${Math.abs(summary.weeksToGoLive)} weeks ago`}
          ). Every component is given roughly the same amount of time, so today each should be{' '}
          {Math.round(summary.fraction * 100)}% of the way to its own target. This is based on the
          go live date and will be recalculated if the date is changed.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <span className="rounded bg-red-100 px-2 py-1 text-red-800">{summary.behind} behind</span>
        <span className="rounded bg-green-100 px-2 py-1 text-green-800">
          {summary.onPace} on pace
        </span>
        <span className="rounded bg-sky-100 px-2 py-1 text-sky-800">{summary.ahead} ahead</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="pb-2 font-semibold">Component</th>
              <th className="pb-2 text-center font-semibold">Should be</th>
              <th className="pb-2 text-center font-semibold">Actual</th>
              <th className="pb-2 text-center font-semibold">Gap</th>
              <th className="pb-2 text-center font-semibold">Pace</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {summary.rows.map((row) => (
              <tr key={row.id}>
                <td className="py-2 pr-3 text-slate-700">{row.label}</td>
                <td className="py-2 text-center">{row.expected.toFixed(1)}</td>
                <td className="py-2 text-center">{row.avgScore.toFixed(1)}</td>
                <td
                  className={`py-2 text-center font-semibold ${row.gap < 0 ? 'text-red-700' : 'text-slate-600'}`}
                >
                  {row.gap > 0 ? '+' : ''}
                  {row.gap.toFixed(1)}
                </td>
                <td className="py-2 text-center">
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-semibold ${STATUS_STYLE[row.status]}`}
                  >
                    {STATUS_LABEL[row.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
