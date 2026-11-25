import {
  COMPARE_RAG_LABEL,
  type CompareRag,
  type ComponentPeriodStats,
  type PeriodStats,
} from '@lib/compareAnalysis';
import { formatStamp } from '@lib/importTimestamps';
import type { SourceMeta } from '@lib/trustComparison';
import { JSX } from 'react';

/** One loaded file, reduced to what the dashboard and multi-period table need. */
export interface TrustSummary {
  /** File name or period label. */
  name: string;
  trust: string;
  project: string;
  meta: SourceMeta;
  period: PeriodStats;
  /** Share of components at or above target, 0-100. */
  overallPct: number;
  scoringCoverage: number;
  /** Overdue counts need real action dates, so they are hidden when comparing rebuilt periods. */
  hasActionDates: boolean;
}

const RAG_STYLE: Record<CompareRag, string> = {
  Red: 'bg-red-100 text-red-800',
  Amber: 'bg-amber-100 text-amber-800',
  Green: 'bg-green-100 text-green-800',
  Blue: 'bg-sky-100 text-sky-800',
  NotStarted: 'bg-slate-100 text-slate-500',
};

const RAG_BAR: Record<CompareRag, string> = {
  Red: 'bg-red-500',
  Amber: 'bg-amber-400',
  Green: 'bg-green-500',
  Blue: 'bg-sky-500',
  NotStarted: 'bg-slate-300',
};

const RAG_ORDER: CompareRag[] = ['Green', 'Blue', 'Amber', 'Red', 'NotStarted'];

function componentTitle(component: ComponentPeriodStats): string {
  const lenses = component.lenses.map((lens) => `${lens.lens}: ${lens.score}`).join('; ');
  const actions = component.actions;
  return `${component.label} - average ${component.avgScore.toFixed(1)} of target ${component.target} (${COMPARE_RAG_LABEL[component.rag]}). ${lenses}. Actions: ${actions.completed}/${actions.total} completed.`;
}

function sourceHeading(source: TrustSummary): string {
  return source.trust || source.name;
}

/** Downloaded / last updated / started progressing, one column per loaded file. */
export function SourceMetaTable({ sources }: { sources: TrustSummary[] }): JSX.Element {
  const rows: Array<{ label: string; key: keyof SourceMeta }> = [
    { label: 'Data downloaded', key: 'exportedAt' },
    { label: 'Data last updated', key: 'lastUpdated' },
    { label: 'Started progressing (post CAB)', key: 'startedAt' },
  ];
  return (
    <div
      className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
      data-testid="compare-source-meta"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="pb-2 font-semibold">Source</th>
            {sources.map((source) => (
              <th key={source.name} className="pb-2 font-semibold">
                {sourceHeading(source)}
                <span className="block text-[0.7rem] font-normal normal-case text-slate-400">
                  {source.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.key}>
              <th scope="row" className="py-2 pr-3 text-left text-xs font-semibold text-slate-600">
                {row.label}
              </th>
              {sources.map((source) => (
                <td key={source.name} className="py-2 text-xs text-slate-700">
                  {row.key === 'startedAt' && !source.meta.startedAt
                    ? 'No scores recorded yet'
                    : formatStamp(source.meta[row.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RagBar({ stats, label }: { stats: PeriodStats; label: string }): JSX.Element {
  const total = stats.components.length || 1;
  return (
    <div
      role="img"
      aria-label={`${label}: ${RAG_ORDER.filter((rag) => stats.ragCounts[rag] > 0)
        .map((rag) => `${stats.ragCounts[rag]} ${COMPARE_RAG_LABEL[rag]}`)
        .join(', ')}`}
      className="flex h-6 w-full overflow-hidden rounded bg-slate-100"
    >
      {RAG_ORDER.filter((rag) => stats.ragCounts[rag] > 0).map((rag) => (
        <div
          key={rag}
          className={`flex items-center justify-center text-[0.7rem] font-bold text-white ${RAG_BAR[rag]}`}
          style={{ width: `${(stats.ragCounts[rag] / total) * 100}%` }}
          title={`${COMPARE_RAG_LABEL[rag]} (${stats.ragCounts[rag]}): ${stats.components
            .filter((component) => component.rag === rag)
            .map((component) => component.label)
            .join(', ')}`}
        >
          {stats.ragCounts[rag]}
        </div>
      ))}
    </div>
  );
}

function Kpi({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-md bg-slate-50 p-3 text-center">
      <p className={`text-xl font-bold ${tone || 'text-slate-800'}`}>{value}</p>
      <p className="text-[0.7rem] font-semibold text-slate-500">{label}</p>
    </div>
  );
}

/**
 * Operations-style view for different trusts: how each is getting on at a glance, not a
 * component-by-component side by side (which means little across different programmes).
 */
export function TrustDashboard({ sources }: { sources: TrustSummary[] }): JSX.Element {
  const columns = sources.length >= 3 ? 'lg:grid-cols-2' : 'md:grid-cols-2';
  return (
    <div className="space-y-6" data-testid="trust-dashboard">
      <div className={`grid grid-cols-1 gap-5 ${columns}`}>
        {sources.map((source) => {
          const attention = source.period.components
            .filter((component) => component.rag === 'Red')
            .slice(0, 5);
          const { completedActions, totalActions } = source.period;
          return (
            <div
              key={source.name}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="truncate text-xs font-medium text-slate-400">{source.name}</p>
              <h3 className="text-lg font-bold text-slate-800">{sourceHeading(source)}</h3>
              {source.project ? <p className="text-sm text-slate-500">{source.project}</p> : null}
              <div className="mt-4">
                <p className="mb-1 text-xs font-semibold text-slate-600">Components by RAG</p>
                <RagBar stats={source.period} label={`${sourceHeading(source)} components`} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <Kpi label="On or above target" value={`${source.overallPct}%`} />
                <Kpi label="Components scored" value={`${source.scoringCoverage}%`} />
                <Kpi
                  label="Actions completed"
                  value={totalActions ? `${completedActions}/${totalActions}` : '0'}
                />
                <Kpi
                  label="Overdue actions"
                  value={source.hasActionDates ? String(source.period.overdueCompletion) : '–'}
                  tone={
                    source.hasActionDates && source.period.overdueCompletion > 0
                      ? 'text-red-700'
                      : undefined
                  }
                />
              </div>
              <div className="mt-4">
                <p className="mb-1 text-xs font-semibold text-slate-600">Needs attention (Red)</p>
                {attention.length === 0 ? (
                  <p className="text-xs text-slate-500">No components are Red.</p>
                ) : (
                  <ul className="flex flex-wrap gap-1.5">
                    {attention.map((component) => (
                      <li
                        key={component.id}
                        title={componentTitle(component)}
                        className="rounded bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-800"
                      >
                        {component.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Three or more periods (or files) of one trust side by side: RAG and average per component. */
export function MultiPeriodTable({ sources }: { sources: TrustSummary[] }): JSX.Element {
  const rows = sources[0]?.period.components || [];
  return (
    <div
      className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
      data-testid="multi-period-table"
    >
      <h3 className="mb-1 text-lg font-semibold text-slate-800">Side by side</h3>
      <p className="mb-4 text-xs text-slate-500">
        Oldest on the left. Hover a RAG badge for the score breakdown.
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="pb-2 font-semibold">Component</th>
            {sources.map((source) => (
              <th key={source.name} className="pb-2 text-center font-semibold">
                {source.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td className="py-2 pr-3 font-medium text-slate-700">{row.label}</td>
              {sources.map((source) => {
                const component = source.period.components[index];
                return (
                  <td key={source.name} className="py-2 text-center">
                    <span
                      title={componentTitle(component)}
                      className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${RAG_STYLE[component.rag]}`}
                    >
                      {COMPARE_RAG_LABEL[component.rag]} · {component.avgScore.toFixed(1)}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
