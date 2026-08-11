import { AdoptionStore, DraftAction, DraftEntry, View } from '@lib/adoptionState';
import { Metrics } from '@lib/adoptionMetrics';
import { AssessmentComponent } from '@data/components';
import { JSX, useMemo, useState } from 'react';
import type { CstPathwayKey } from '@data/cst';
import { PATHWAY_LABELS } from '@data/cst';
import { getPathwayRulesForComponent } from '@data/pathway-rules';
import { calculateChecklistCompletion } from '@lib/pathwayAnalysis';
import { FilterSummaryBar } from '@components/ui/FilterSummaryBar';
import { getComponentDescription, getLensDescription } from '@data/descriptions';

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
  onOpenOnboarding?: () => void;
  colorAccessibilityMode?: 'standard' | 'color-blind-friendly';
  darkMode?: boolean;
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
  return 'Blue';
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
  return 'Blue';
}

function getDeliveryStatusFromAverage(
  avgScore: number,
  targetScore: number,
  actionCount: number,
  completedActionCount: number
): DeliveryStatus {
  if (actionCount <= 0) {
    return 'N/A';
  }
  if (completedActionCount <= 0) {
    return 'Amber';
  }
  if (avgScore >= targetScore && completedActionCount < actionCount) {
    return 'Green';
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

const LENS_KEY_COLORS = ['#0f766e', '#0369a1', '#7c3aed', '#b45309', '#be123c'];

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
  onOpenLensInfo,
  onOpenOnboarding,
  colorAccessibilityMode = 'standard',
  darkMode = false
}: DashboardProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'not-started' | 'below-target' | 'on-track'>('all');
  const [componentPhaseFilter, setComponentPhaseFilter] = useState<number | 'all'>('all');
  const [lensPhaseFilter, setLensPhaseFilter] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'score' | 'target'>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showAdvancedComponentControls, setShowAdvancedComponentControls] = useState(false);
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
        let completedActionCount = 0;
        component.lenses.forEach((lens) => {
          const entry = getEntry(component.id, lens);
          total += Number(entry.score || 0);
          const actions = entry.actions || [];
          actionCount += actions.length;
          completedActionCount += actions.filter((action) => action.status === 'Completed').length;
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

        return { component, avgNum, status, delta, actionCount, completedActionCount };
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

  const activeComponentFilters = useMemo(() => {
    const chips: string[] = [];
    if (searchTerm.trim()) {
      chips.push(`Search: ${searchTerm.trim()}`);
    }
    if (statusFilter !== 'all') {
      chips.push(`Status: ${statusFilter.replace('-', ' ')}`);
    }
    if (componentPhaseFilter !== 'all') {
      chips.push(`Phase: ${componentPhaseFilter}`);
    }
    if (sortBy !== 'score' || sortDirection !== 'desc') {
      chips.push(`Sort: ${sortBy} (${sortDirection})`);
    }
    return chips;
  }, [componentPhaseFilter, searchTerm, sortBy, sortDirection, statusFilter]);

  const clearComponentFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setComponentPhaseFilter('all');
    setSortBy('score');
    setSortDirection('desc');
    setShowAdvancedComponentControls(false);
  };

  const currentPhaseSummary = metrics.phaseSummaries.find((phaseSummary) => phaseSummary.phase === metrics.currentPhase);
  const currentPhaseRag = currentPhaseSummary?.rag || 'Red';
  const currentPhaseTone = currentPhaseRag.toLowerCase();

  const deliveryBadgeStyles = colorAccessibilityMode === 'color-blind-friendly'
    ? {
        'N/A': 'text-slate-700 bg-slate-200',
        Blue: 'text-cyan-900 bg-cyan-100',
        Red: 'text-rose-900 bg-rose-100',
        Amber: 'text-orange-900 bg-orange-100',
        Green: 'text-teal-900 bg-teal-100'
      }
    : DELIVERY_BADGE_STYLES;

  const bragBadgeStyles = colorAccessibilityMode === 'color-blind-friendly'
    ? {
        Blue: 'text-cyan-900 bg-cyan-100',
        Red: 'text-rose-900 bg-rose-100',
        Amber: 'text-orange-900 bg-orange-100',
        Green: 'text-teal-900 bg-teal-100'
      }
    : BRAG_BADGE_STYLES;

  return (
    <div className={`adoption-dashboard max-w-6xl mx-auto ${darkMode ? 'theme-dark' : 'theme-light'}`}>

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
                {urgentActions.slice(0, 3).map((item) => (
                  <li key={item.action.id} className="flex items-center gap-2">
                    <span className={`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${
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
                {urgentActions.length > 3 && (
                  <li className="text-xs text-slate-500 pl-1">+ {urgentActions.length - 3} more - see the Action Tracker for the full list.</li>
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

      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Adoption Engine Dashboard</h2>
        {onOpenOnboarding ? (
          <button
            type="button"
            onClick={onOpenOnboarding}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Show introduction again
          </button>
        ) : null}
      </div>
      <p className={`text-sm mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        This tracks how ready {store.orgProfile.projectName || 'your programme'} is for adoption, based on{' '}
        {components.length} change-management components, each assessed through up to {lenses.length} lenses.
      </p>

      <div className="dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4">
        <p className="dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider">Current CST pathway</p>
        <p className="dashboard-callout__title mt-1 text-sm font-semibold">{PATHWAY_LABELS[pathway]}</p>
        <p className="dashboard-callout__body mt-1 text-sm">
          Pathway checklist completion: {pathwaySummary.checked}/{pathwaySummary.required} ({pathwaySummary.pct}%).
        </p>
      </div>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border`}>
          <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
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
          <div className={`flex justify-between text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}>
            <span>Derived from current working data across all components.</span>
          </div>
        </div>

        <div className={`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${currentPhaseTone} rounded-lg shadow-sm p-6 border`}>
          <h3 className="dashboard-metric-card__label text-sm font-medium mb-1">Current Phase Focus</h3>
          <div className="flex items-end space-x-2">
            <span className="dashboard-metric-card__headline text-4xl font-bold">Phase {metrics.currentPhase}</span>
          </div>
          <p className="dashboard-metric-card__description text-sm mt-2">
            {currentPhaseRag} status based on delivery progress and action completion.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border`}>
          <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>Action Completion</h3>
          <div className="flex items-end space-x-2">
            <span className={`text-4xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>{metrics.actionCompletionPct}%</span>
          </div>
          <p className={`text-sm mt-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            {metrics.completedActions} of {metrics.totalActions} actions completed.
          </p>
        </div>
      </div>

      {/* Guided Next Steps */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>What To Do Next</h3>
          <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Prioritised for live delivery</span>
        </div>
        <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
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
                  className={`w-full text-left rounded-md border p-3 hover:border-blue-300 transition-colors ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
                >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>{step.componentLabel}</span>
                  <span className={`text-xs font-semibold rounded px-2.5 py-0.5 ${bragBadgeStyles[bragStatus]}`}>
                    {bragStatus}
                  </span>
                </div>
                
                <p className={`text-sm mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{step.message}</p>
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
        <div className="dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8">
          <span className="dashboard-callout__icon text-xl shrink-0">📅</span>
          <p className="dashboard-callout__body text-sm">
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
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}>
        <h3 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Phase Progress (RAG)</h3>
        <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
          Phases run 1 to 5, from early readiness at go-live through to fully embedding the change.{' '}
          {onNavigate ? (
            <button
              type="button"
              onClick={() => onNavigate('cm-guide')}
              className="font-medium text-[#005eb8] hover:underline"
            >
              See Adoption Engine Onboarding
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
              <div
                key={phaseSummary.phase}
                className={`rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Phase {phaseSummary.phase}</h4>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${ragClass}`}>
                    {phaseSummary.rag}
                  </span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {phaseSummary.onTrackComponents}/{phaseSummary.componentCount} components on target
                </p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {lensPct}% lens coverage, {phaseSummary.actionCompletionPct}% actions complete
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border flex flex-col`}>
          <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Readiness Trajectory</h3>
          <div className={`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
            {store.history.length > 0 ? (
              <canvas id="adoption-line-chart" />
            ) : (
              <div className="text-center text-slate-400">
                <p>No historical data yet. Finalise your first month to generate trends.</p>
              </div>
            )}
          </div>
        </div>

        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border flex flex-col`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Strategic Lenses Spread</h3>
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
          <div className={`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
            <canvas id="adoption-radar-chart" />
          </div>
          <div className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} mt-4 rounded-md border p-3`}>
            <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Lens key</p>
            <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {lenses.map((lens, index) => (
                <div key={`lens-key-${lens}`} className={`flex items-center gap-2 text-xs ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: LENS_KEY_COLORS[index % LENS_KEY_COLORS.length] }}
                    aria-hidden="true"
                  />
                  <span>{lens}</span>
                </div>
              ))}
            </div>
          </div>
          <p className={`text-xs text-center mt-4 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            Visualises your current draft readiness score averaged across the 5 strategic lenses
            against their specific target reiquirements.
          </p>
        </div>
      </div>

      {/* Component Overview */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}>
        <div className="flex flex-col gap-4 mb-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Component Status</h3>
            <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                    BRAG scoring is used for component status:
              <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">Blue</span> = actions exist and all are complete,{' '}
              <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-800">Green</span> = on target,{' '}
              <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800">Red</span> = behind target dates,{' '}
              <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">Amber</span> = at risk / nearing deadline.
            </p>
          </div>
          <div className="w-full max-w-4xl space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
            </div>

            <FilterSummaryBar
              showAdvancedControls={showAdvancedComponentControls}
              onToggleAdvanced={() => setShowAdvancedComponentControls((current) => !current)}
              onReset={clearComponentFilters}
              resultText={`Showing ${componentRows.length} components`}
              activeFilters={activeComponentFilters}
              activeFiltersAriaLabel="Active component filters"
              darkMode={darkMode}
            />

            {showAdvancedComponentControls ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
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
                  type="button"
                  onClick={() => setSortDirection((current) => current === 'asc' ? 'desc' : 'asc')}
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors"
                >
                  {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {componentRows.map(({ component, avgNum, actionCount, completedActionCount, delta }) => {
            const deliveryStatus = getDeliveryStatusFromAverage(avgNum, component.target, actionCount, completedActionCount);

            return (
              <button
                key={component.id}
                onClick={() => onComponentClick(component.id)}
                title={getComponentDescription(component.id)}
                className={`flex justify-between items-center p-3 rounded-md transition-colors group text-left ${
                  darkMode
                    ? 'bg-slate-900 border border-slate-700 hover:border-blue-400'
                    : 'bg-slate-50 border border-slate-100 hover:border-blue-300'
                }`}
              >
                <span className={`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  {component.label}
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  {delta !== null && (
                    <span className={`text-xs font-semibold ${
                      delta > 0 ? 'text-green-600' : 'text-red-400'
                    }`}>
                      {delta > 0 ? '↑' : '↓'}
                    </span>
                  )}
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${deliveryBadgeStyles[deliveryStatus]}`}>
                    {deliveryStatus}
                  </span>
                </div>
              </button>
            );
          })}
          {!componentRows.length && (
            <div className={`col-span-full rounded-md border border-dashed p-6 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-500'}`}>
              No components match the current filters.
            </div>
          )}
        </div>
      </div>

      {/* Lens & Component Breakdown */}
      <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}>
        <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Lenses and which components they apply to</h3>
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
              <div
                key={lens}
                className={`rounded-md p-4 ${darkMode ? 'border border-slate-700 bg-slate-900' : 'border border-slate-100 bg-slate-50'}`}
              >
                <h4 className="font-bold text-sm text-[#005eb8] mb-3">{lens}</h4>
                <p className={`mb-3 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{getLensDescription(lens)}</p>
                <ul className="space-y-2">
                  {mapped.map((component) => {
                    const entry = getEntry(component.id, lens);
                    const score = Number(entry.score || 0);
                    const actions = entry.actions || [];
                    const deliveryStatus = getDeliveryStatusFromAverage(
                      score,
                      component.target,
                      actions.length,
                      actions.filter((action) => action.status === 'Completed').length
                    );

                    return (
                      <li
                        key={component.id}
                        className={`text-xs flex justify-between items-center p-2 rounded ${
                          darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
                        }`}
                      >
                        <span className={`truncate pr-2 font-medium ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                          {component.label}
                        </span>
                        <button
                          onClick={() => onComponentClick(component.id)}
                          className={`px-2.5 py-0.5 rounded font-bold ${deliveryBadgeStyles[deliveryStatus]}`}
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
