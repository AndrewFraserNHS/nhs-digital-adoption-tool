import { AdoptionStore, DraftAction, DraftEntry, View } from '@lib/adoptionState';
import { Metrics } from '@lib/adoptionMetrics';
import { getComponentExemplarScore } from '@lib/adoptionMetrics';
import { AssessmentComponent } from '@data/components';
import { JSX, useMemo, useState } from 'react';
import type { CstPathwayKey } from '@data/cst';
import { PATHWAY_LABELS } from '@data/cst';
import { getPathwayRulesForComponent } from '@data/pathway-rules';
import { calculateChecklistCompletion } from '@lib/pathwayAnalysis';
import { FilterSummaryBar } from '@components/ui/FilterSummaryBar';
import { getComponentDescription, getLensDescription } from '@data/descriptions';
import { PHASE_NAMES } from '../../types/constants';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';
import { getBragStatusFromAverage, type BragStatus } from '@lib/bragStatus';

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
  phaseFocusMode?: 'auto' | 'manual';
  manualPhaseFocus?: number;
  onPhaseFocusModeChange?: (mode: 'auto' | 'manual') => void;
  onManualPhaseFocusChange?: (phase: number) => void;
  onResetPhaseFocus?: () => void;
  componentRadarVisible?: boolean;
  onComponentRadarVisibleChange?: (visible: boolean) => void;
  componentRadarSize?: ComponentRadarSize;
  onComponentRadarSizeChange?: (size: ComponentRadarSize) => void;
}

export type ComponentRadarSize = 'small' | 'medium' | 'large';

export const COMPONENT_RADAR_SIZE_PX: Record<ComponentRadarSize, number> = {
  small: 560,
  medium: 680,
  large: 1000,
};

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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>
  );
}

function getDeliveryStatusFromAverage(
  avgScore: number,
  targetScore: number,
  actionCount: number,
  completedActionCount: number,
  allLensesLevelFive: boolean
): DeliveryStatus {
  if (allLensesLevelFive) {
    return 'Blue';
  }
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
  Green: 'text-green-800 bg-green-100',
};

const LENS_KEY_COLORS = ['#0f766e', '#0369a1', '#7c3aed', '#b45309', '#be123c'];
const SCORE_LEGEND_ITEMS = [
  { score: 0, label: 'Pre-Emergent', color: '#768692' },
  { score: 1, label: 'Emerging', color: '#AE2521' },
  { score: 2, label: 'Developing', color: '#FFB81C' },
  { score: 3, label: 'Maturing', color: '#005EB8' },
  { score: 4, label: 'Embedding', color: '#330072' },
  { score: 5, label: 'Thriving', color: '#00A499' },
] as const;

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
  darkMode = false,
  phaseFocusMode = 'auto',
  manualPhaseFocus,
  onPhaseFocusModeChange,
  onManualPhaseFocusChange,
  onResetPhaseFocus,
  componentRadarVisible = true,
  onComponentRadarVisibleChange,
  componentRadarSize = 'medium',
  onComponentRadarSizeChange,
}: DashboardProps): JSX.Element {
  const pageIntro = usePageIntroSeen('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    'all' | 'not-started' | 'below-target' | 'on-track'
  >('all');
  const [componentPhaseFilter, setComponentPhaseFilter] = useState<number | 'all'>(
    () => metrics.currentPhase
  );
  const [lensPhaseFilter, setLensPhaseFilter] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'score' | 'target'>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showAdvancedComponentControls, setShowAdvancedComponentControls] = useState(false);
  const [showLensBreakdownHelp, setShowLensBreakdownHelp] = useState(false);

  const phases = useMemo(
    () => [...new Set(components.map((c) => c.phase))].sort((a, b) => a - b),
    [components]
  );
  const suggestedPhase = metrics.currentPhase;
  const effectivePhase =
    phaseFocusMode === 'manual' && manualPhaseFocus && phases.includes(manualPhaseFocus)
      ? manualPhaseFocus
      : suggestedPhase;

  const [overdueVisible, setOverdueVisible] = useState(true);

  const lastSnapshot = useMemo(
    () => (store.history.length > 0 ? store.history[store.history.length - 1] : null),
    [store.history]
  );

  const scoreDelta =
    lastSnapshot !== null ? metrics.overallPct - lastSnapshot.overallPercentage : null;

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

    const items: Array<{
      action: DraftAction;
      componentLabel: string;
      componentId: string;
      isOverdue: boolean;
    }> = [];
    components.forEach((comp) => {
      comp.lenses.forEach((lens) => {
        getEntry(comp.id, lens).actions.forEach((action) => {
          if (!action.dueDate || action.status === 'Completed' || action.status === 'Cancelled')
            return;
          const due = new Date(action.dueDate);
          if (isNaN(due.getTime())) return;
          if (due <= weekOut) {
            items.push({
              action,
              componentLabel: comp.label,
              componentId: comp.id,
              isOverdue: due < today,
            });
          }
        });
      });
    });

    return items.sort(
      (a, b) => new Date(a.action.dueDate!).getTime() - new Date(b.action.dueDate!).getTime()
    );
  }, [components, getEntry, store.currentDraft]);

  const componentRows = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return components
      .map((component) => {
        let total = 0;
        let allLensesLevelFive = true;
        let actionCount = 0;
        let completedActionCount = 0;
        component.lenses.forEach((lens) => {
          const entry = getEntry(component.id, lens);
          const score = Number(entry.score || 0);
          total += score;
          if (score !== 5) {
            allLensesLevelFive = false;
          }
          const actions = entry.actions || [];
          actionCount += actions.length;
          completedActionCount += actions.filter((action) => action.status === 'Completed').length;
        });
        const avgNum = Number((total / component.lenses.length).toFixed(1));
        const exemplarTarget = getComponentExemplarScore(
          component.id,
          effectivePhase,
          component.target
        );
        const status =
          avgNum === 0 ? 'not-started' : avgNum >= exemplarTarget ? 'on-track' : 'below-target';

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

        return {
          component,
          avgNum,
          exemplarTarget,
          status,
          delta,
          actionCount,
          completedActionCount,
          allLensesLevelFive,
        };
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
  }, [
    components,
    componentPhaseFilter,
    effectivePhase,
    getEntry,
    lastSnapshot,
    searchTerm,
    sortBy,
    sortDirection,
    statusFilter,
  ]);

  const pathwaySummary = useMemo(() => {
    let required = 0;
    let checked = 0;

    components.forEach((component) => {
      const rule = getPathwayRulesForComponent(component.id, pathway);
      const completion = calculateChecklistCompletion(
        pathwayChecks[component.id]?.[pathway] || [],
        rule
      );
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

  const currentPhaseSummary = metrics.phaseSummaries.find(
    (phaseSummary) => phaseSummary.phase === effectivePhase
  );
  const currentPhaseRag = currentPhaseSummary?.rag || 'Red';
  const currentPhaseTone = currentPhaseRag.toLowerCase();

  const deliveryBadgeStyles =
    colorAccessibilityMode === 'color-blind-friendly'
      ? {
          'N/A': 'text-slate-700 bg-slate-200',
          Blue: 'text-cyan-900 bg-cyan-100',
          Red: 'text-rose-900 bg-rose-100',
          Amber: 'text-orange-900 bg-orange-100',
          Green: 'text-teal-900 bg-teal-100',
        }
      : DELIVERY_BADGE_STYLES;

  return (
    <div
      className={`adoption-dashboard max-w-6xl mx-auto ${darkMode ? 'theme-dark' : 'theme-light'}`}
    >
      {/* Overdue / due-soon actions - the main daily pull-back signal */}
      {overdueVisible && urgentActions.length > 0 && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-800 mb-2">
                {urgentActions.filter((i) => i.isOverdue).length > 0 &&
                  `${urgentActions.filter((i) => i.isOverdue).length} overdue action${urgentActions.filter((i) => i.isOverdue).length > 1 ? 's' : ''}`}
                {urgentActions.filter((i) => i.isOverdue).length > 0 &&
                  urgentActions.filter((i) => !i.isOverdue).length > 0 &&
                  ', '}
                {urgentActions.filter((i) => !i.isOverdue).length > 0 &&
                  `${urgentActions.filter((i) => !i.isOverdue).length} due within 7 days`}
              </p>
              <ul className="space-y-1.5">
                {urgentActions.slice(0, 3).map((item) => (
                  <li key={item.action.id} className="flex items-center gap-2">
                    <span
                      className={`shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${
                        item.isOverdue ? 'bg-red-200 text-red-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {item.isOverdue ? 'Overdue' : 'Due soon'}
                    </span>
                    <span className="text-xs text-slate-700">
                      <button
                        onClick={() => onComponentClick(item.componentId)}
                        className="font-medium text-[#005eb8] hover:underline mr-1"
                      >
                        {item.componentLabel}
                      </button>
                      {'\u2014 '}
                      {item.action.text}
                      {item.action.dueDate && (
                        <span className="text-slate-400 ml-1">
                          (due{' '}
                          {new Date(item.action.dueDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                          })}
                          )
                        </span>
                      )}
                    </span>
                  </li>
                ))}
                {urgentActions.length > 3 && (
                  <li className="text-xs text-slate-500 pl-1">
                    + {urgentActions.length - 3} more - see the Action Tracker for the full list.
                  </li>
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
        <div className="flex items-center gap-2">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Adoption Engine Dashboard
          </h2>
          <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
        </div>
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
        This tracks how ready {store.orgProfile.projectName || 'your programme'} is for adoption,
        based on {components.length} change-management components, each assessed through up to{' '}
        {lenses.length} lenses.
      </p>

      <div className="dashboard-callout dashboard-callout--pathway mb-6 rounded-lg border p-4">
        <p className="dashboard-callout__eyebrow text-xs font-semibold uppercase tracking-wider">
          Current CST pathway
        </p>
        <p className="dashboard-callout__title mt-1 text-sm font-semibold">
          {PATHWAY_LABELS[pathway]}
        </p>
        <p className="dashboard-callout__body mt-1 text-sm">
          Pathway checklist completion: {pathwaySummary.checked}/{pathwaySummary.required} (
          {pathwaySummary.pct}%).
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border`}
        >
          <h3
            className={`text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
          >
            Live Delivery Progress
          </h3>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-bold text-[#005eb8]">{metrics.overallPct}%</span>
            {scoreDelta !== null && (
              <span
                className={`text-sm font-semibold mb-1 ${
                  scoreDelta > 0
                    ? 'text-green-600'
                    : scoreDelta < 0
                      ? 'text-red-500'
                      : 'text-slate-400'
                }`}
              >
                {scoreDelta > 0 ? '↑' : scoreDelta < 0 ? '↓' : '='} {Math.abs(scoreDelta)}% vs last
                month
              </span>
            )}
          </div>
          <div className="mt-4 w-full bg-slate-100 rounded-full h-3 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#005eb8]"
              style={{ width: `${metrics.overallPct}%` }}
            />
          </div>
          <div
            className={`flex justify-between text-xs mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`}
          >
            <span>Derived from current working data across all components.</span>
          </div>
        </div>

        <div
          className={`dashboard-metric-card dashboard-metric-card--phase dashboard-metric-card--${currentPhaseTone} rounded-lg shadow-sm p-6 border`}
        >
          <h3 className="dashboard-metric-card__label text-sm font-medium mb-1">
            Current Phase Focus
          </h3>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onPhaseFocusModeChange?.('auto')}
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${
                phaseFocusMode === 'auto'
                  ? 'border-blue-700 bg-[#005eb8] text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Auto
            </button>
            <button
              type="button"
              onClick={() => onPhaseFocusModeChange?.('manual')}
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${
                phaseFocusMode === 'manual'
                  ? 'border-blue-700 bg-[#005eb8] text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Manual
            </button>
            {phaseFocusMode === 'manual' ? (
              <select
                value={effectivePhase}
                onChange={(e) => onManualPhaseFocusChange?.(Number(e.target.value))}
                className="rounded-md border border-white/50 bg-white/90 px-2 py-1 text-xs font-medium text-slate-800"
                aria-label="Manual phase focus"
              >
                {phases.map((phase) => (
                  <option key={phase} value={phase}>
                    {PHASE_NAMES[phase] || `Phase ${phase}`}
                  </option>
                ))}
              </select>
            ) : null}
            {phaseFocusMode === 'manual' && onResetPhaseFocus ? (
              <button
                type="button"
                onClick={onResetPhaseFocus}
                className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Reset to suggested
              </button>
            ) : null}
          </div>
          <div className="flex items-end space-x-2">
            <span className="dashboard-metric-card__headline text-4xl font-bold">
              {PHASE_NAMES[effectivePhase] || `Phase ${effectivePhase}`}
            </span>
          </div>
          <p className="dashboard-metric-card__description text-sm mt-2">
            {currentPhaseRag} status based on delivery progress and action completion.
            {phaseFocusMode === 'manual'
              ? ` Suggested phase is ${PHASE_NAMES[suggestedPhase] || `Phase ${suggestedPhase}`}.`
              : ''}
          </p>
        </div>

        <div
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border`}
        >
          <h3
            className={`text-sm font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
          >
            Action Completion
          </h3>
          <div className="flex items-end space-x-2">
            <span
              className={`text-4xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
            >
              {metrics.actionCompletionPct}%
            </span>
          </div>
          <p className={`text-sm mt-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            {metrics.completedActions} actions completed. Keep it up!
          </p>
        </div>
      </div>

      {/* Snapshot reminder - only when work exists but this month isn't captured */}
      {snapshotDue && (
        <div className="dashboard-callout dashboard-callout--snapshot rounded-lg border p-4 flex items-center gap-3 mb-8">
          <span className="dashboard-callout__icon text-xl shrink-0">📅</span>
          <p className="dashboard-callout__body text-sm">
            <strong>This month hasn't been recorded yet.</strong> Use{' '}
            <span className="font-semibold">'Finalise Month'</span> in the header to snapshot
            today's progress and build your delivery trajectory.
          </p>
        </div>
      )}

      {metrics.assessedCount === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 border border-slate-200 mb-8 text-center">
          <h3 className="text-lg font-semibold text-slate-800">Getting started</h3>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Nothing has been assessed yet, so there's nothing to chart. Set up your Project Setup
            first, then start scoring your first component to see your readiness build up here.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            {onNavigate ? (
              <button
                type="button"
                onClick={() => onNavigate('project-details')}
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Set up your Project Setup
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
          <div
            className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}
          >
            <h3
              className={`text-lg font-semibold mb-1 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Phase Progress (RAG)
            </h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Phases run 1 to 5, from early readiness at go-live through to fully embedding the
              change.{' '}
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
                      <h4
                        className={`font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        {PHASE_NAMES[phaseSummary.phase] || `Phase ${phaseSummary.phase}`}
                      </h4>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${ragClass}`}>
                        {phaseSummary.rag}
                      </span>
                    </div>
                    <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {phaseSummary.onTrackComponents}/{phaseSummary.componentCount} components on
                      target
                    </p>
                    <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {lensPct}% lens coverage, {phaseSummary.actionCompletionPct}% actions complete
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            {/* Charts Section */}
            <div className="order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div
              className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border flex flex-col`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
              >
                Readiness Trajectory
              </h3>
              <div
                className={`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'}`}
              >
                {store.history.length > 0 ? (
                  <canvas id="adoption-line-chart" />
                ) : (
                  <div className="text-center text-slate-400">
                    <p>No historical data yet. Finalise your first month to generate trends.</p>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                >
                  Strategic Lenses Spread
                </h3>
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
              <div
                className={`flex-1 min-h-[400px] flex items-center justify-center rounded border p-2 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'}`}
              >
                <canvas id="adoption-radar-chart" />
              </div>
              <div
                className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} mt-4 rounded-md border p-3`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  Lens key
                </p>
                <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {lenses.map((lens, index) => (
                    <div
                      key={`lens-key-${lens}`}
                      className={`flex items-center gap-2 text-xs ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                    >
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
              <p
                className={`text-xs text-center mt-4 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
              >
                Visualises your current draft readiness score averaged across the 5 strategic lenses
                against their specific target requirements.
              </p>
            </div>
            </div>

            {/* Component Overview */}
            <div
              className={`order-1 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}
            >
            <div className="mb-4 flex w-full flex-col gap-4">
              <div className="w-full">
                <h3
                  className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                >
                  Change Component Radar
                </h3>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Show or hide the change-component readiness radar, then use the overview list below
                  to drill into delivery status.
                </p>
              </div>
              <div className="flex w-full flex-wrap items-center justify-end gap-2">
                {componentRadarVisible ? (
                  <div
                    role="group"
                    aria-label="Change component radar size"
                    className="flex items-center rounded-md border border-slate-300 overflow-hidden text-sm font-medium"
                  >
                    {(['small', 'medium', 'large'] as ComponentRadarSize[]).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => onComponentRadarSizeChange?.(size)}
                        aria-pressed={componentRadarSize === size}
                        className={`px-3 py-2 capitalize transition-colors ${
                          componentRadarSize === size
                            ? 'bg-slate-800 text-white'
                            : 'bg-white text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={() => onComponentRadarVisibleChange?.(!componentRadarVisible)}
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white"
                >
                  {componentRadarVisible ? 'Hide change component radar' : 'Show change component radar'}
                </button>
              </div>
            </div>

            {componentRadarVisible ? (
              <div
                className={`w-full ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-md border p-4`}
              >
                <div
                  className={`mx-auto flex items-center justify-center rounded border p-2 ${darkMode ? 'border-slate-700 bg-slate-950' : 'border-slate-100 bg-white'}`}
                  style={{
                    height: COMPONENT_RADAR_SIZE_PX[componentRadarSize],
                    maxWidth: COMPONENT_RADAR_SIZE_PX[componentRadarSize] + 120,
                  }}
                >
                  <canvas id="adoption-component-radar-chart" className="block h-full w-full" />
                </div>
                <div
                  id="radar-legend"
                  className={`mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {SCORE_LEGEND_ITEMS.map((item) => (
                    <div key={item.score} className="flex items-center">
                      <span
                        className="mr-2 h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>
                        {item.score} = {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className={`mt-4 text-center text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                >
                  Visualises the average readiness score for each component against the phase
                  exemplar profile.
                </p>
              </div>
            ) : null}

            <div className="mt-4 w-full space-y-3">
              <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                BRAG scoring is used for the change component overview:
                <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">Blue</span> =
                every lens is level 5,{' '}
                <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-800">Green</span> =
                on target,{' '}
                <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800">Red</span> = behind
                target dates,{' '}
                <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">Amber</span> =
                at risk / nearing deadline.
              </p>

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
                  onChange={(e) =>
                    setStatusFilter(
                      e.target.value as 'all' | 'not-started' | 'below-target' | 'on-track'
                    )
                  }
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All statuses</option>
                  <option value="not-started">Not started</option>
                  <option value="below-target">Below target</option>
                  <option value="on-track">On track</option>
                </select>
                <select
                  value={componentPhaseFilter}
                  onChange={(e) =>
                    setComponentPhaseFilter(
                      e.target.value === 'all' ? 'all' : Number(e.target.value)
                    )
                  }
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="all">All phases</option>
                  {phases.map((phase) => (
                    <option key={phase} value={phase}>
                      {PHASE_NAMES[phase] || `Phase ${phase}`}
                    </option>
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
                    onClick={() =>
                      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'))
                    }
                    className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white transition-colors"
                  >
                    {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                  </button>
                </div>
              ) : null}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {componentRows.map(
                ({ component, avgNum, exemplarTarget, actionCount, completedActionCount, delta, allLensesLevelFive }) => {
                  const deliveryStatus = getDeliveryStatusFromAverage(
                    avgNum,
                    exemplarTarget,
                    actionCount,
                    completedActionCount,
                    allLensesLevelFive
                  );
                  const readinessArrow =
                    deliveryStatus === 'Red'
                      ? '↓'
                      : avgNum >= exemplarTarget
                        ? '→'
                        : avgNum <= 0
                          ? '↑'
                          : '↗';
                  const arrowToneClass =
                    deliveryStatus === 'Red'
                      ? 'text-red-500'
                      : avgNum >= exemplarTarget
                      ? darkMode
                        ? 'text-slate-300'
                        : 'text-slate-500'
                      : 'text-amber-600';

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
                      <span
                        className={`text-sm font-medium truncate pr-2 group-hover:text-[#005eb8] ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                      >
                        {component.label}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        <span
                          className={`text-xs font-semibold ${arrowToneClass}`}
                          title={
                            avgNum >= exemplarTarget
                              ? 'On or above expected readiness for phase focus'
                              : avgNum <= 0
                                ? 'Not started: raise towards expected readiness'
                                : 'Below expected readiness: continue improving'
                          }
                          aria-label={
                            avgNum >= exemplarTarget
                              ? 'At expected readiness'
                              : avgNum <= 0
                                ? 'Not started, increase readiness'
                                : 'Below expected readiness'
                          }
                        >
                          {readinessArrow}
                        </span>
                        {delta !== null && (
                          <span
                            className={`text-[11px] font-semibold ${
                              delta > 0 ? 'text-green-600' : 'text-red-400'
                            }`}
                            title="Change versus last finalised month"
                          >
                            {delta > 0 ? '+' : ''}
                            {delta.toFixed(1)}
                          </span>
                        )}
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded ${deliveryBadgeStyles[deliveryStatus]}`}
                        >
                          {deliveryStatus}
                        </span>
                      </div>
                    </button>
                  );
                }
              )}
              {!componentRows.length && (
                <div
                  className={`col-span-full rounded-md border border-dashed p-6 text-sm ${darkMode ? 'border-slate-700 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-500'}`}
                >
                  No components match the current filters.
                </div>
              )}
            </div>
            </div>
          </div>

          {/* Lens & Component Breakdown */}
          <div
            className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm p-6 border mb-8`}
          >
            <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                  >
                    Lenses and which components they apply to
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowLensBreakdownHelp((current) => !current)}
                    className="inline-flex items-center justify-center rounded-full p-1 text-slate-500 hover:text-[#005eb8]"
                    aria-label="Explain lenses and components"
                    title="Explain lenses and components"
                  >
                    <InfoIcon />
                  </button>
                </div>
                {showLensBreakdownHelp ? (
                  <p className="mt-2 text-xs text-slate-600 max-w-3xl">
                    A component is the change topic you are delivering (for example, Vision). A lens
                    is the angle used to assess that component. For example, Vision is reviewed
                    through Strategic Direction and Leadership and People Experience and Culture to
                    check both leadership alignment and whether people understand and believe in the
                    vision.
                  </p>
                ) : null}
              </div>
              <select
                value={lensPhaseFilter}
                onChange={(e) =>
                  setLensPhaseFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:w-40"
              >
                <option value="all">All phases</option>
                {phases.map((phase) => (
                  <option key={phase} value={phase}>
                    {PHASE_NAMES[phase] || `Phase ${phase}`}
                  </option>
                ))}
                "
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lenses.map((lens) => {
                const mapped = components
                  .filter((component) => component.lenses.includes(lens))
                  .filter(
                    (component) => lensPhaseFilter === 'all' || component.phase === lensPhaseFilter
                  );

                if (!mapped.length) {
                  return null;
                }

                return (
                  <div
                    key={lens}
                    className={`rounded-md p-4 ${darkMode ? 'border border-slate-700 bg-slate-900' : 'border border-slate-100 bg-slate-50'}`}
                  >
                    <h4 className="font-bold text-sm text-[#005eb8] mb-3">{lens}</h4>
                    <p className={`mb-3 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {getLensDescription(lens)}
                    </p>
                    <ul className="space-y-2">
                      {mapped.map((component) => {
                        const entry = getEntry(component.id, lens);
                        const score = Number(entry.score || 0);
                        const exemplarTarget = getComponentExemplarScore(
                          component.id,
                          effectivePhase,
                          component.target
                        );
                        const actions = entry.actions || [];
                        const deliveryStatus = getDeliveryStatusFromAverage(
                          score,
                          exemplarTarget,
                          actions.length,
                          actions.filter((action) => action.status === 'Completed').length,
                          false
                        );

                        return (
                          <li
                            key={component.id}
                            className={`text-xs flex justify-between items-center p-2 rounded ${
                              darkMode
                                ? 'bg-slate-800 border border-slate-700'
                                : 'bg-white border border-slate-100'
                            }`}
                          >
                            <span
                              className={`truncate pr-2 font-medium ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                            >
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
      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Adoption Engine Dashboard"
        darkMode={darkMode}
        body={
          <p>
            This tracks how ready your programme is for adoption, based on your change-management
            components, each assessed through several lenses. Use the filters and sort controls to
            focus on what needs attention, and click a component to open its assessment.
          </p>
        }
      />
    </div>
  );
}
