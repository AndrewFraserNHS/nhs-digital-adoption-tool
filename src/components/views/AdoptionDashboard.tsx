import { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { Metrics } from '@lib/adoptionMetrics';
import { AssessmentComponent } from '@data/components';
import { JSX, useMemo, useState } from 'react';

export interface DashboardProps {
  store: AdoptionStore;
  components: AssessmentComponent[];
  lenses: string[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
}

export function AdoptionDashboard({
  store,
  components,
  lenses,
  metrics,
  getEntry,
  onComponentClick
}: DashboardProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'not-started' | 'below-target' | 'on-track'>('all');
  const [componentPhaseFilter, setComponentPhaseFilter] = useState<number | 'all'>('all');
  const [lensPhaseFilter, setLensPhaseFilter] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'score' | 'target'>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const phases = useMemo(() => [...new Set(components.map((c) => c.phase))].sort((a, b) => a - b), [components]);

  const componentRows = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return components
      .map((component) => {
        let total = 0;
        component.lenses.forEach((lens) => {
          total += Number(getEntry(component.id, lens).score || 0);
        });
        const avgNum = Number((total / component.lenses.length).toFixed(1));
        const status = avgNum === 0 ? 'not-started' : avgNum >= component.target ? 'on-track' : 'below-target';
        return { component, avgNum, status };
      })
      .filter(({ component, status }) => {
        if (statusFilter !== 'all' && status !== statusFilter) {
          return false;
        }
        if (componentPhaseFilter !== 'all' && component.phase !== componentPhaseFilter) {
          return false;
        }
        if (!query) {
          return true;
        }
        return component.label.toLowerCase().includes(query);
      })
      .sort((left, right) => {
        let comparison = 0;
        if (sortBy === 'name') {
          comparison = left.component.label.localeCompare(right.component.label);
        } else if (sortBy === 'target') {
          comparison = left.component.target - right.component.target;
        } else {
          comparison = left.avgNum - right.avgNum;
        }
        return sortDirection === 'asc' ? comparison : -comparison;
      });
  }, [components, componentPhaseFilter, getEntry, searchTerm, sortBy, sortDirection, statusFilter]);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Adoption Delivery Dashboard</h2>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">
            Live Delivery Progress
          </h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold text-[#005eb8]">{metrics.overallPct}%</span>
          </div>
          <div className="mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#005eb8]"
              style={{ width: `${metrics.overallPct}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>Derived from current working data across all components.</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Current Phase Focus</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold text-slate-700">Phase {metrics.currentPhase}</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            {metrics.phaseSummaries.find((phaseSummary) => phaseSummary.phase === metrics.currentPhase)?.rag || 'Red'} status based on delivery progress and action completion.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Action Completion</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold text-slate-700">{metrics.actionCompletionPct}%</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            {metrics.completedActions} of {metrics.totalActions} actions completed.
          </p>
        </div>
      </div>

      {/* Guided Next Steps */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800">What To Do Next</h3>
          <span className="text-xs text-slate-500">Prioritised for live delivery</span>
        </div>
        {metrics.nextSteps.length > 0 ? (
          <div className="space-y-3">
            {metrics.nextSteps.map((step) => (
              <button
                key={`${step.componentId}-${step.phase}`}
                onClick={() => onComponentClick(step.componentId)}
                className="w-full text-left rounded-md border border-slate-200 bg-slate-50 p-3 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-800">{step.componentLabel}</span>
                  <span className="text-xs font-medium text-amber-700 bg-amber-100 rounded px-2 py-0.5">
                    Gap {step.gapToTarget.toFixed(1)}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{step.message}</p>
                {step.toolkitLinks?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {step.toolkitLinks.map((link) => (
                      <a
                        key={`${step.componentId}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="text-xs font-medium text-[#005eb8] underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500">
            No priority gaps detected for the current phase. Continue tracking actions and maintain evidence quality.
          </p>
        )}
      </div>

      {/* Phase Progress */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Phase Progress (RAG)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {metrics.phaseSummaries.map((phaseSummary) => {
            const ragClass =
              phaseSummary.rag === 'Green'
                ? 'bg-green-100 text-green-700'
                : phaseSummary.rag === 'Amber'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-red-100 text-red-700';

            const lensPct = phaseSummary.totalLenses
              ? Math.round((phaseSummary.assessedLenses / phaseSummary.totalLenses) * 100)
              : 0;

            return (
              <div key={phaseSummary.phase} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-800">Phase {phaseSummary.phase}</h4>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${ragClass}`}>
                    {phaseSummary.rag}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {phaseSummary.onTrackComponents}/{phaseSummary.componentCount} components on target
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  {lensPct}% lens coverage, {phaseSummary.actionCompletionPct}% actions complete
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 flex flex-col">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Readiness Trajectory</h3>
          <div className="flex-1 min-h-[400px] flex items-center justify-center bg-slate-50 rounded border border-slate-100 p-2">
            {store.history.length > 0 ? (
              <canvas id="adoption-line-chart" />
            ) : (
              <div className="text-center text-slate-400">
                <p>No historical data yet. Finalise your first month to generate trends.</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 flex flex-col">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Strategic Lenses Spread</h3>
          <div className="flex-1 min-h-[400px] flex items-center justify-center bg-slate-50 rounded border border-slate-100 p-2">
            <canvas id="adoption-radar-chart" />
          </div>
          <p className="text-xs text-center text-slate-500 mt-4">
            Visualises your current draft readiness score averaged across the 5 strategic lenses
            against their specific target requirements.
          </p>
        </div>
      </div>

      {/* Component Overview */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-8">
        <div className="flex flex-col gap-4 mb-4 xl:flex-row xl:items-center xl:justify-between">
          <h3 className="text-lg font-semibold text-slate-800">Overall Average by Component</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 xl:w-[65rem]">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search components..."
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'not-started' | 'below-target' | 'on-track')}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All statuses</option>
              <option value="not-started">Not started</option>
              <option value="below-target">Below target</option>
              <option value="on-track">On track</option>
            </select>
            <select
              value={componentPhaseFilter}
              onChange={(e) => setComponentPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="all">All phases</option>
              {phases.map((phase) => (
                <option key={phase} value={phase}>Phase {phase}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'score' | 'target')}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="score">Sort by score</option>
              <option value="name">Sort by name</option>
              <option value="target">Sort by target</option>
            </select>
            <button
              onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {componentRows.map(({ component, avgNum }) => {
            const badgeClass =
              avgNum === 0
                ? 'bg-slate-200 text-slate-500'
                : avgNum >= component.target
                  ? 'bg-green-100 text-green-700'
                  : 'bg-amber-100 text-amber-700';

            return (
              <button
                key={component.id}
                onClick={() => onComponentClick(component.id)}
                className="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-md hover:border-blue-300 transition-colors group text-left"
              >
                <span className="text-sm font-medium text-slate-700 truncate pr-2 group-hover:text-[#005eb8]">
                  {component.label}
                </span>
                <span className={`text-xs font-bold px-2 py-1 rounded ${badgeClass}`}>
                  {avgNum > 0 ? avgNum.toFixed(1) : '-'}
                </span>
              </button>
            );
          })}
          {!componentRows.length && (
            <div className="col-span-full rounded-md border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">
              No components match the current filters.
            </div>
          )}
        </div>
      </div>

      {/* Lens & Component Breakdown */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-8">
        <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-slate-800">Lens & Component Breakdown</h3>
          <select
            value={lensPhaseFilter}
            onChange={(e) => setLensPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40"
          >
            <option value="all">All phases</option>
            {phases.map((phase) => (
              <option key={phase} value={phase}>Phase {phase}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenses.map((lens) => {
            const mapped = components
              .filter((component) => component.lenses.includes(lens))
              .filter((component) => lensPhaseFilter === 'all' || component.phase === lensPhaseFilter);

            if (!mapped.length) {
              return null;
            }

            return (
              <div key={lens} className="border border-slate-100 rounded-md p-4 bg-slate-50">
                <h4 className="font-bold text-sm text-[#005eb8] mb-3">{lens}</h4>
                <ul className="space-y-2">
                  {mapped.map((component) => {
                    const score = Number(getEntry(component.id, lens).score || 0);
                    const badgeClass =
                      score === 0
                        ? 'bg-slate-100 text-slate-400'
                        : score >= component.target
                          ? 'bg-green-100 text-green-700'
                          : 'bg-amber-100 text-amber-700';

                    return (
                      <li
                        key={component.id}
                        className="text-xs flex justify-between items-center bg-white p-2 rounded border border-slate-100"
                      >
                        <span className="truncate pr-2 font-medium text-slate-700">
                          {component.label}
                        </span>
                        <button
                          onClick={() => onComponentClick(component.id)}
                          className={`px-2 py-0.5 rounded font-bold ${badgeClass}`}
                        >
                          {score === 0 ? '-' : `L${score}`}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
