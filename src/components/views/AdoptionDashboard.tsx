import { AdoptionStore, DraftAction, DraftEntry, View } from '@lib/adoptionState';
import { Metrics } from '@lib/adoptionMetrics';
import { AssessmentComponent } from '@data/components';
import { JSX, useMemo, useState } from 'react';
import type { CstPathwayKey } from '@data/cst';
import { PATHWAY_LABELS } from '@data/cst';
import { getPathwayRulesForComponent } from '@data/pathway-rules';
import { calculateChecklistCompletion } from '@lib/pathwayAnalysis';

export interface DashboardProps {
  store: AdoptionStore;
  components: AssessmentComponent[];
  lenses: string[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  pathway: CstPathwayKey;
  pathwayChecks: AdoptionStore['pathwayChecks'];
  onNavigate?: (view: View) => void;
  onOpenLensInfo?: (lensName: string) => void;
}

type BragStatus = 'Blue' | 'Red' | 'Amber' | 'Green';
type DeliveryStatus = BragStatus | 'N/A';

function InfoIcon(): JSX.Element {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  );
}

function getBragStatusFromGap(gapToTarget: number): BragStatus {
  if (gapToTarget <= 0) {
    return 'Blue';
  }
  if (gapToTarget >= 2) {
    return 'Red';
  }
  if (gapToTarget >= 1) {
    return 'Amber';
  }
  return 'Green';
}

function getBragStatusFromAverage(avgScore: number, targetScore: number): BragStatus {
  if (avgScore <= 0) {
    return 'Blue';
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

function getDeliveryStatusFromAverage(avgScore: number, targetScore: number, actionCount: number): DeliveryStatus {
  if (actionCount <= 0) {
    return 'N/A';
  }
  return getBragStatusFromAverage(avgScore, targetScore);
}

const DELIVERY_BADGE_STYLES: Record<DeliveryStatus, string> = {
  'N/A': 'text-slate-600 bg-slate-200',
  Blue: 'text-sky-800 bg-sky-100',
  Red: 'text-red-800 bg-red-100',
  Amber: 'text-amber-800 bg-amber-100',
  Green: 'text-green-800 bg-green-100'
};

const BRAG_BADGE_STYLES: Record<BragStatus, string> = {
  Blue: 'text-sky-800 bg-sky-100',
  Red: 'text-red-800 bg-red-100',
  Amber: 'text-amber-800 bg-amber-100',
  Green: 'text-green-800 bg-green-100'
};

const LENS_EXPLANATIONS: Record<string, string> = {
  'Strategic Direction and Leadership': 'This checks whether the vision has clear leadership direction. For example, Vision is a component assessed through this lens to test whether leaders are aligned and actively backing it.',
  'People Experience and Culture': "It is all well and good making a vision, but has it been communicated and do people believe in it? This lens checks staff belief, trust, engagement, and cultural buy-in.",
  'Planning and Risk': 'This lens checks whether plans are realistic, risks are visible, and delivery decisions are based on evidence rather than assumption.',
  'Skills and Behaviour': 'This lens checks whether people have the capability and confidence to use the change in day-to-day practice, not just attend training.',
  'Process and Sustainment': 'This lens checks whether new workflows are embedded into BAU so gains are sustained and continuously improved.'
};

export function AdoptionDashboard({
  store,
  components,
  lenses,
  metrics,
  getEntry,
  onComponentClick,
  pathway,
  pathwayChecks,
  onNavigate,
  onOpenLensInfo
}: DashboardProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'not-started' | 'below-target' | 'on-track'>('all');
  const [componentPhaseFilter, setComponentPhaseFilter] = useState<number | 'all'>('all');
  const [lensPhaseFilter, setLensPhaseFilter] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'score' | 'target'>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showLensBreakdownHelp, setShowLensBreakdownHelp] = useState(false);

  const phases = useMemo(() => [...new Set(components.map((c) => c.phase))].sort((a, b) => a - b), [components]);

  const [overdueVisible, setOverdueVisible] = useState(true);

  const lastSnapshot = useMemo(
    () => (store.history.length > 0 ? store.history[store.history.length - 1] : null),
    [store.history]
  );

  const scoreDelta = lastSnapshot !== null ? metrics.overallPct - lastSnapshot.overallPercentage : null;

  const snapshotDue = useMemo(() => {
    if (metrics.assessedCount === 0) return false;
    const currentLabel = new Date().toLocaleString('en-GB', { month: 'short', year: 'numeric' });
    return !store.history.some((h) => h.monthLabel === currentLabel);
  }, [store.history, metrics.assessedCount]);

  const urgentActions = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekOut = new Date(today);
    weekOut.setDate(today.getDate() + 7);

    const items: Array<{ action: DraftAction; componentLabel: string; componentId: string; isOverdue: boolean }> = [];
    components.forEach((comp) => {
      comp.lenses.forEach((lens) => {
        getEntry(comp.id, lens).actions.forEach((action) => {
          if (!action.dueDate || action.status === 'Completed' || action.status === 'Cancelled') return;
          const due = new Date(action.dueDate);
          if (isNaN(due.getTime())) return;
          if (due <= weekOut) {
            items.push({ action, componentLabel: comp.label, componentId: comp.id, isOverdue: due < today });
          }
        });
      });
    });

    return items.sort((a, b) => new Date(a.action.dueDate!).getTime() - new Date(b.action.dueDate!).getTime());
  }, [components, getEntry, store.currentDraft]);

  const componentRows = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return components
      .map((component) => {
        let total = 0;
        let actionCount = 0;
        component.lenses.forEach((lens) => {
          const entry = getEntry(component.id, lens);
          total += Number(entry.score || 0);
          actionCount += (entry.actions || []).length;
        });
        const avgNum = Number((total / component.lenses.length).toFixed(1));
        const status = avgNum === 0 ? 'not-started' : avgNum >= component.target ? 'on-track' : 'below-target';

        // Compare to last finalised snapshot (null when no history or unchanged)
        let delta: number | null = null;
        if (lastSnapshot) {
          let prevTotal = 0;
          component.lenses.forEach((lens) => {
            prevTotal += Number(lastSnapshot.data[component.id]?.[lens]?.score || 0);
          });
          const prevAvg = Number((prevTotal / component.lenses.length).toFixed(1));
          const raw = Number((avgNum - prevAvg).toFixed(1));
          if (raw !== 0) delta = raw;
        }

        return { component, avgNum, status, delta, actionCount };
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
  }, [components, componentPhaseFilter, getEntry, lastSnapshot, searchTerm, sortBy, sortDirection, statusFilter]);

  const pathwaySummary = useMemo(() => {
    let required = 0;
    let checked = 0;

    components.forEach((component) => {
      const rule = getPathwayRulesForComponent(component.id, pathway);
      const completion = calculateChecklistCompletion(pathwayChecks[component.id]?.[pathway] || [], rule);
      required += completion.totalCount;
      checked += completion.checkedCount;
    });

    const pct = required > 0 ? Math.round((checked / required) * 100) : 100;
    return { required, checked, pct };
  }, [components, pathway, pathwayChecks]);

  return (
    <div className="max-w-6xl mx-auto">

      {/* Overdue / due-soon actions - the main daily pull-back signal */}
      {overdueVisible && urgentActions.length > 0 && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-800 mb-2">
                {urgentActions.filter((i) => i.isOverdue).length > 0 &&
                  `${urgentActions.filter((i) => i.isOverdue).length} overdue action${urgentActions.filter((i) => i.isOverdue).length > 1 ? 's' : ''}`}
                {urgentActions.filter((i) => i.isOverdue).length > 0 && urgentActions.filter((i) => !i.isOverdue).length > 0 && ', '}
                {urgentActions.filter((i) => !i.isOverdue).length > 0 &&
                  `${urgentActions.filter((i) => !i.isOverdue).length} due within 7 days`}
              </p>
              <ul className="space-y-1.5">
                {urgentActions.slice(0, 5).map((item) => (
                  <li key={item.action.id} className="flex items-start gap-2">
                    <span className={`mt-0.5 shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${
                      item.isOverdue ? 'bg-red-200 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.isOverdue ? 'Overdue' : 'Due soon'}
                    </span>
                    <span className="text-xs text-slate-700">
                      <button
                        onClick={() => onComponentClick(item.componentId)}
                        className="font-medium text-[#005eb8] hover:underline mr-1"
                      >
                        {item.componentLabel}
                      </button>
                      {'\u2014 '}{item.action.text}
                      {item.action.dueDate && (
                        <span className="text-slate-400 ml-1">
                          (due {new Date(item.action.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
                {urgentActions.length > 5 && (
                  <li className="text-xs text-slate-500 pl-1">+ {urgentActions.length - 5} more - see the Action Tracker for the full list.</li>
                )}
              </ul>
            </div>
            <button
              onClick={() => setOverdueVisible(false)}
              className="shrink-0 text-slate-400 hover:text-slate-600 text-xl leading-none"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-slate-800 mb-1">Adoption Delivery Dashboard</h2>
      <p className="text-sm text-slate-600 mb-6">
        This tracks how ready {store.orgProfile.projectName || 'your programme'} is for adoption, based on{' '}
        {components.length} change-management components, each assessed through up to {lenses.length} lenses.
      </p>

      <div className="mb-6 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">Current CST pathway</p>
        <p className="mt-1 text-sm font-semibold text-indigo-900">{PATHWAY_LABELS[pathway]}</p>
        <p className="mt-1 text-sm text-indigo-800">
          Pathway checklist completion: {pathwaySummary.checked}/{pathwaySummary.required} ({pathwaySummary.pct}%).
        </p>
      </div>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 mb-1">
            Live Delivery Progress
          </h3>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-[#005eb8]">{metrics.overallPct}%</span>
            {scoreDelta !== null && (
              <span className={`text-sm font-semibold mb-1 ${
                scoreDelta > 0 ? 'text-green-600' : scoreDelta < 0 ? 'text-red-500' : 'text-slate-400'
              }`}>
                {scoreDelta > 0 ? '↑' : scoreDelta < 0 ? '↓' : '='}
                {' '}{Math.abs(scoreDelta)}% vs last month
              </span>
            )}
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
        <p className="text-sm text-slate-500 mb-4">
          These are the biggest gaps to target for your current phase, largest gap first.
        </p>
        {metrics.nextSteps.length > 0 ? (
          <div className="space-y-3">
            {metrics.nextSteps.map((step) => {
              const bragStatus = getBragStatusFromGap(step.gapToTarget);
              return (
                <button
                  key={`${step.componentId}-${step.phase}`}
                  onClick={() => onComponentClick(step.componentId)}
                  className="w-full text-left rounded-md border border-slate-200 bg-slate-50 p-3 hover:border-blue-300 transition-colors"
                >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-800">{step.componentLabel}</span>
                  <span className={`text-xs font-semibold rounded px-2.5 py-0.5 ${BRAG_BADGE_STYLES[bragStatus]}`}>
                    {bragStatus}
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
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-slate-500">
            No priority gaps detected for the current phase. Continue tracking actions and maintain evidence quality.
          </p>
        )}
      </div>

      {/* Snapshot reminder - only when work exists but this month isn't captured */}
      {snapshotDue && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 flex items-center gap-3 mb-8">
          <span className="text-blue-400 text-xl shrink-0">📅</span>
          <p className="text-sm text-blue-800">
            <strong>This month hasn't been recorded yet.</strong>{' '}
            Use <span className="font-semibold">'Finalise Month'</span> in the header to snapshot today's progress and build your delivery trajectory.
          </p>
        </div>
      )}

      {metrics.assessedCount === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center">
          <h3 className="text-lg font-semibold text-slate-800">Getting started</h3>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Nothing has been assessed yet, so there's nothing to chart. Set up your project details first, then start
            scoring your first component to see your readiness build up here.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('project-details')}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Set up your project details
              </button>
            ) : null}
            {components[0] ? (
              <button
                type="button"
                onClick={() => onComponentClick(components[0].id)}
                className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Start your first assessment
              </button>
            ) : null}
          </div>
        </div>
      ) : (
      <>
      {/* Phase Progress */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200 mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">Phase Progress (RAG)</h3>
        <p className="text-sm text-slate-500 mb-4">
          Phases run 1 to 5, from early readiness at go-live through to fully embedding the change.{' '}
          {onNavigate ? (
            <button
              type="button"
              onClick={() => onNavigate('cm-guide')}
              className="font-medium text-[#005eb8] hover:underline"
            >
              See the CM Toolkit Guide
            </button>
          ) : null}
        </p>
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Strategic Lenses Spread</h3>
            {onOpenLensInfo && lenses[0] ? (
              <button
                type="button"
                onClick={() => onOpenLensInfo(lenses[0])}
                className="text-xs font-medium text-[#005eb8] hover:underline"
              >
                What's a lens?
              </button>
            ) : null}
          </div>
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
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Overall Average by Component</h3>
            <p className="text-xs text-slate-500 mt-1">
              BRAG scoring is used for components: <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">Blue</span> = not started,{' '}
              <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800">Red</span> = materially below target,{' '}
              <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">Amber</span> = slightly below target,{' '}
              <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-800">Green</span> = at/above target.
            </p>
          </div>
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
          {componentRows.map(({ component, avgNum, actionCount }) => {
            const deliveryStatus = getDeliveryStatusFromAverage(avgNum, component.target, actionCount);

            return (
              <button
                key={component.id}
                onClick={() => onComponentClick(component.id)}
                className="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-md hover:border-blue-300 transition-colors group text-left"
              >
                <span className="text-sm font-medium text-slate-700 truncate pr-2 group-hover:text-[#005eb8]">
                  {component.label}
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  {scoreDelta !== null && (
                    <span className={`text-xs font-semibold ${
                      scoreDelta > 0 ? 'text-green-600' : 'text-red-400'
                    }`}>
                      {scoreDelta > 0 ? '↑' : '↓'}
                    </span>
                  )}
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${DELIVERY_BADGE_STYLES[deliveryStatus]}`}>
                    {deliveryStatus}
                  </span>
                </div>
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
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-800">Lens & Component Breakdown</h3>
              <button
                type="button"
                onClick={() => setShowLensBreakdownHelp((current) => !current)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 p-1 text-slate-500 hover:border-[#005eb8] hover:text-[#005eb8]"
                aria-label="Explain lenses and components"
                title="Explain lenses and components"
              >
                <InfoIcon />
              </button>
            </div>
            {showLensBreakdownHelp ? (
              <p className="mt-2 text-xs text-slate-600 max-w-3xl">
                A component is the change topic you are delivering (for example, Vision). A lens is the angle used to assess that
                component. For example, Vision is reviewed through Strategic Direction and Leadership and People Experience and
                Culture to check both leadership alignment and whether people understand and believe in the vision.
              </p>
            ) : null}
          </div>
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
                <p className="mb-3 text-xs text-slate-600">{LENS_EXPLANATIONS[lens] || 'This lens provides an additional perspective on how each component is landing across teams and services.'}</p>
                <ul className="space-y-2">
                  {mapped.map((component) => {
                    const entry = getEntry(component.id, lens);
                    const score = Number(entry.score || 0);
                    const deliveryStatus = getDeliveryStatusFromAverage(score, component.target, (entry.actions || []).length);

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
                          className={`px-2.5 py-0.5 rounded font-bold ${DELIVERY_BADGE_STYLES[deliveryStatus]}`}
                        >
                          {deliveryStatus}
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
      </>
      )}
    </div>
  );
}
