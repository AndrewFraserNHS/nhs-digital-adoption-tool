import { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { Metrics } from '@lib/adoptionMetrics';
import { AssessmentComponent } from '@data/components';
import { JSX } from 'react';

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
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Adoption Readiness Dashboard</h2>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">
            Overall Adoption Readiness
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
            <span>Progress towards maximum possible score across all areas.</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Assessment Progress</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold text-slate-700">{metrics.assessedCount}</span>
            <span className="text-lg text-slate-400 mb-1">/ {metrics.totalExpected}</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">Component lenses assessed this month.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Historical Snapshots</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold text-slate-700">{store.history.length}</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">Months of tracked data available.</p>
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
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Overall Average by Component</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {components.map((component) => {
            let total = 0;
            component.lenses.forEach((lens) => {
              total += Number(getEntry(component.id, lens).score || 0);
            });
            const avgNum = Number((total / component.lenses.length).toFixed(1));
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
        </div>
      </div>

      {/* Lens & Component Breakdown */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Lens & Component Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenses.map((lens) => {
            const mapped = components.filter((component) =>
              component.lenses.includes(lens)
            );

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
