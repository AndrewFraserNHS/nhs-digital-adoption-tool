import { JSX, useEffect, useMemo, useRef, useState } from 'react';
import { getComponentsByPhase, type AssessmentComponent } from '@data/components';
import { ASSESSMENT_LENSES } from '@data/lenses';
import type { DraftEntry, Stakeholder, TeamMember } from '@lib/adoptionState';
import { buildComponentRadarChartData, getComponentExemplarScore } from '@lib/adoptionMetrics';
import { createBarChart, createRadarChart } from '@lib/charts';
import { getReadinessBand } from '@lib/readinessBands';
import { PHASE_NAMES } from '../../types/constants';

import ReadinessReviewApp from '@pages/ReadinessReviewApp';

export interface WhereAmINowPageProps {
  components: AssessmentComponent[];
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate: (componentId: string, lens: string, entry: DraftEntry) => void;
  effectivePhaseFocus: number;
  phaseFocusMode: 'auto' | 'manual';
  onComponentClick: (componentId: string) => void;
  onResetToAuto: () => void;
  darkMode?: boolean;
  trustName?: string;
  region?: string;
  leadName?: string;
  teamMembers?: TeamMember[];
  stakeholders?: Stakeholder[];
  onStakeholdersChange?: (stakeholders: Stakeholder[]) => void;
  departments?: string[];
  onReadinessEvaluated?: (details: {
    skipToPhase: number | null;
    accepted: boolean;
    updatedCount: number;
  }) => void;
}

/** Tooltip formatter shared with the Dashboard radar - suppresses the score suffix on the Exemplar/Target line, since that line is a reference marker, not a real per-lens value. */
function radarTooltipLabel(context: { dataset?: { label?: string }; raw?: unknown }): string {
  const label = context.dataset?.label || '';
  if (label.startsWith('Exemplar') || label === 'Target Average') {
    return label;
  }
  return `${label}: ${getReadinessBand(Number(context.raw)).label}`;
}

/** A small "?" icon that shows an explanation of the radar's grey exemplar/blue current shading on hover or focus. */
function RadarHelpIcon({ darkMode }: { darkMode: boolean }): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label="Understanding this radar"
        aria-describedby="radar-help-tooltip"
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
          darkMode
            ? 'border-slate-500 text-slate-300 hover:bg-slate-700'
            : 'border-slate-400 text-slate-500 hover:bg-slate-100'
        }`}
      >
        ?
      </button>
      {open ? (
        <div
          id="radar-help-tooltip"
          role="tooltip"
          className={`absolute right-0 top-full z-20 mt-2 w-80 rounded-lg border p-4 text-xs shadow-lg ${
            darkMode
              ? 'border-slate-600 bg-slate-800 text-slate-200'
              : 'border-slate-200 bg-white text-slate-700'
          }`}
        >
          <p className="font-semibold">Understanding this radar</p>
          <p className="mt-1.5">
            The grey area is where we would ideally be at this phase, and the blue area is where
            you are currently tracking. Areas where you&apos;re not meeting the grey exemplar data
            can be areas of focus. Areas where you&apos;re exceeding the plan may be areas that
            have been progressed ahead of where they need to be at this current point.
          </p>
          <ul className="mt-2.5 space-y-1.5">
            <li className="flex gap-1.5">
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
              <span>
                <strong>On track:</strong> blue closely follows the grey shape across every axis.
              </span>
            </li>
            <li className="flex gap-1.5">
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
              <span>
                <strong>Ahead in the wrong areas:</strong> blue is well past grey on one or two
                axes but lagging on the rest - effort may be focused on the wrong priorities for
                this phase.
              </span>
            </li>
            <li className="flex gap-1.5">
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
              <span>
                <strong>Behind:</strong> blue sits inside grey on most axes - these are the areas
                to focus on next.
              </span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

/** One small bar chart for a single component: a bar per lens plus a dashed target bar at that phase's expected score. */
function ComponentLensBarChart({
  component,
  getEntry,
  phase,
  darkMode,
}: {
  component: AssessmentComponent;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  phase: number;
  darkMode: boolean;
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const target = getComponentExemplarScore(component.id, phase, component.target);
    const tickColor = darkMode ? '#e2e8f0' : '#0b1220';
    const gridColor = darkMode ? 'rgba(226,232,240,0.10)' : 'rgba(11,18,32,0.06)';
    createBarChart(
      canvasRef.current,
      {
        labels: component.lenses,
        datasets: [
          {
            label: 'Current',
            data: component.lenses.map((lens) => Number(getEntry(component.id, lens).score || 0)),
            backgroundColor: '#005EB8',
          },
          {
            label: 'Target',
            data: component.lenses.map(() => target),
            backgroundColor: 'transparent',
            borderColor: '#94a3b8',
            borderWidth: 2,
            // borderDash isn't in this Chart.js version's bar dataset types but is a valid runtime option.
            ...({ borderDash: [5, 5] } as Record<string, unknown>),
          },
        ],
      },
      {
        indexAxis: 'y',
        scales: {
          x: {
            min: 0,
            max: 5,
            grid: { color: gridColor },
            ticks: {
              color: tickColor,
              stepSize: 1,
              callback: (value) => getReadinessBand(Number(value)).label,
            },
          },
          y: {
            grid: { display: false },
            ticks: { color: tickColor, font: { size: 11 } },
          },
        },
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component, phase, darkMode]);

  return (
    <div
      className={`rounded-md border p-3 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
    >
      <p className={`text-xs font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
        {component.label}
      </p>
      <div style={{ height: Math.max(400, component.lenses.length * 60) }} className="mt-2">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>
    </div>
  );
}

/** A guided self-assessment - checked statements suggest a phase, and a live radar shows readiness by component. */
export function WhereAmINowPage({
  components,
  getEntry,
  onEntryUpdate,
  effectivePhaseFocus,
  phaseFocusMode,
  onComponentClick,
  onResetToAuto,
  darkMode = false,
  trustName = '',
  region = '',
  leadName = '',
  teamMembers = [],
  stakeholders = [],
  onStakeholdersChange,
  departments = [],
  onReadinessEvaluated,
}: WhereAmINowPageProps): JSX.Element {
  const [readinessTab, setReadinessTab] = useState<'by-component' | 'by-lens' | 'by-phases'>(
    'by-component'
  );
  const [selectedLens, setSelectedLens] = useState<string>(ASSESSMENT_LENSES[0]);

  const byComponentCanvasRef = useRef<HTMLCanvasElement>(null);
  const byLensCanvasRef = useRef<HTMLCanvasElement>(null);

  const readinessScaleTicks = {
    display: true,
    stepSize: 1,
    backdropColor: 'transparent',
    callback: (value: string | number) =>
      Number(value) < 0 ? '' : getReadinessBand(Number(value)).label,
  };

  useEffect(() => {
    if (readinessTab !== 'by-component' || !byComponentCanvasRef.current) {
      return;
    }
    const chartData = buildComponentRadarChartData(components, getEntry, effectivePhaseFocus);
    createRadarChart(
      byComponentCanvasRef.current,
      chartData,
      {
        maintainAspectRatio: false,
        scales: {
          r: {
            min: -1,
            max: 5,
            ticks: readinessScaleTicks,
            pointLabels: { padding: 28 },
          },
        },
        plugins: { tooltip: { callbacks: { label: radarTooltipLabel } } },
      },
      (index) => {
        const targetComponent = components[index];
        if (targetComponent) {
          onComponentClick(targetComponent.id);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components, getEntry, effectivePhaseFocus, onComponentClick, readinessTab]);

  useEffect(() => {
    if (readinessTab !== 'by-lens' || !byLensCanvasRef.current) {
      return;
    }
    // Only components that actually have the selected lens become axes - mixing in components
    // that don't (as null points) breaks the filled polygon shape, so they're left out entirely
    // rather than shown as gaps.
    const componentsWithLens = components.filter((component) =>
      component.lenses.includes(selectedLens)
    );
    const chartData = buildComponentRadarChartData(
      componentsWithLens,
      getEntry,
      effectivePhaseFocus,
      selectedLens
    );
    createRadarChart(
      byLensCanvasRef.current,
      chartData,
      {
        maintainAspectRatio: false,
        scales: {
          r: {
            min: -1,
            max: 5,
            ticks: readinessScaleTicks,
            pointLabels: { padding: 28 },
          },
        },
        plugins: { tooltip: { callbacks: { label: radarTooltipLabel } } },
      },
      (index) => {
        const targetComponent = componentsWithLens[index];
        if (targetComponent) {
          onComponentClick(targetComponent.id);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [components, getEntry, effectivePhaseFocus, onComponentClick, readinessTab, selectedLens]);

  const componentsInCurrentPhase = useMemo(
    () => getComponentsByPhase(effectivePhaseFocus),
    [effectivePhaseFocus]
  );

  /** First component (in phase order) whose weakest lens hasn't yet reached full readiness - i.e. where to pick up next. */
  const nextUnderdevelopedComponent = useMemo(() => {
    return (
      components.find((component) => {
        const scores = component.lenses.map((lens) =>
          Number(getEntry(component.id, lens).score || 0)
        );
        const weakestScore = scores.length ? Math.min(...scores) : 0;
        return weakestScore < 5;
      }) || null
    );
  }, [components, getEntry]);

  const textClass = darkMode ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Where am I now?
        </h2>
        <p className={`mt-2 text-sm ${textClass}`}>
          Take the Readiness Review to see your readiness by component - both feed into which of
          the 5 change phases you're really in.
        </p>
      </div>

      <div
        className={`rounded-lg border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="p-6">
          <div className="text-center mb-4">
            <h3
              className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              Readiness Review
            </h3>
            <p className={`mt-1 text-sm ${textClass}`}>
              Answer a short set of questions about your programme - your answers can update your
              readiness scores and suggest phases you're already ready to skip.
            </p>
          </div>

          <div
            className={`rounded-lg border p-6 ${darkMode ? 'border-slate-600 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
          >
            <ReadinessReviewApp
              trustName={trustName}
              region={region}
              leadName={leadName}
              teamMembers={teamMembers}
              stakeholders={stakeholders}
              onStakeholdersChange={onStakeholdersChange}
              departments={departments}
              components={components}
              getEntry={getEntry}
              onEntryUpdate={onEntryUpdate}
              onReadinessEvaluated={onReadinessEvaluated}
            />
          </div>

          <p
            className={`mt-6 text-center text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
          >
            Currently tracking{' '}
            <strong>
              Phase {effectivePhaseFocus}: {PHASE_NAMES[effectivePhaseFocus]}
            </strong>{' '}
            ({phaseFocusMode === 'manual' ? 'set manually' : 'auto-detected from delivery progress'}
            ).
            {phaseFocusMode === 'manual' ? (
              <button
                type="button"
                onClick={onResetToAuto}
                className="ml-2 font-semibold text-[#005eb8] hover:underline"
              >
                Reset to auto
              </button>
            ) : null}
          </p>
        </div>
      </div>

      <div
        className={`rounded-lg border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
            >
              Readiness by component
            </h3>
            <RadarHelpIcon darkMode={darkMode} />
          </div>

          <div
            className={`mt-3 flex gap-1 rounded-md border p-1 text-sm font-semibold ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}
            role="tablist"
            aria-label="Readiness by component view"
          >
            {(
              [
                { id: 'by-component', label: 'By Component' },
                { id: 'by-lens', label: 'By Lens' },
                { id: 'by-phases', label: 'By Phases' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={readinessTab === tab.id}
                onClick={() => setReadinessTab(tab.id)}
                className={`flex-1 rounded px-3 py-1.5 transition-colors ${
                  readinessTab === tab.id
                    ? 'bg-[#005eb8] text-white'
                    : darkMode
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {readinessTab === 'by-component' ? (
            <>
              <p className={`mt-3 text-xs ${textClass}`}>
                Each component is scored by its weakest lens - click a label to jump to that
                component's assessment.
              </p>
              <div
                className={`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${darkMode ? 'border-slate-700 bg-slate-950' : 'border-slate-100 bg-slate-50'}`}
                style={{ height: 720 }}
              >
                <canvas ref={byComponentCanvasRef} className="block h-full w-full" />
              </div>

              <p className={`mt-4 text-center text-sm italic ${textClass}`}>
                {nextUnderdevelopedComponent
                  ? `We suggest picking up next at ${nextUnderdevelopedComponent.label}, then working outward from there.`
                  : 'Every component has reached full readiness on its weakest lens - nice work.'}
              </p>

              <div className="mt-4 flex justify-center">
                {nextUnderdevelopedComponent ? (
                  <button
                    type="button"
                    onClick={() => onComponentClick(nextUnderdevelopedComponent.id)}
                    className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]"
                  >
                    Let's check out our {nextUnderdevelopedComponent.label} component
                  </button>
                ) : null}
              </div>
            </>
          ) : null}

          {readinessTab === 'by-lens' ? (
            <>
              <p className={`mt-3 text-xs ${textClass}`}>
                Pick a lens to see every component's readiness through that one lens, against the
                expected level.
              </p>
              <div
                className="mt-3 flex flex-wrap gap-x-4 gap-y-2"
                role="radiogroup"
                aria-label="Choose a lens"
              >
                {ASSESSMENT_LENSES.map((lens) => (
                  <label
                    key={lens}
                    className={`flex items-center gap-1.5 text-xs font-medium ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                  >
                    <input
                      type="radio"
                      name="where-am-i-now-lens"
                      checked={selectedLens === lens}
                      onChange={() => setSelectedLens(lens)}
                      className="h-3.5 w-3.5"
                    />
                    {lens}
                  </label>
                ))}
              </div>
              <div
                className={`mx-auto mt-4 flex items-center justify-center rounded border p-2 ${darkMode ? 'border-slate-700 bg-slate-950' : 'border-slate-100 bg-slate-50'}`}
                style={{ height: 720 }}
              >
                <canvas ref={byLensCanvasRef} className="block h-full w-full" />
              </div>
            </>
          ) : null}

          {readinessTab === 'by-phases' ? (
            <>
              <p className={`mt-3 text-xs ${textClass}`}>
                Every component in Phase {effectivePhaseFocus}: {PHASE_NAMES[effectivePhaseFocus]},
                with a bar per lens and a dashed target bar for where it's expected to be.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {componentsInCurrentPhase.map((component) => (
                  <ComponentLensBarChart
                    key={component.id}
                    component={component}
                    getEntry={getEntry}
                    phase={effectivePhaseFocus}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
