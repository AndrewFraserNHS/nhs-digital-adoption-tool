import { JSX, useMemo } from 'react';
import type { AssessmentComponent } from '@data/components';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { computeNextSteps, type Metrics } from '@lib/adoptionMetrics';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';
import { NextStepsSection } from '@components/views/NextStepsSection';
import { ProgrammeHierarchy } from '@components/views/ProgrammeHierarchy';

export interface DailyCheckInProps {
  store: AdoptionStore;
  components: AssessmentComponent[];
  metrics: Metrics;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentClick: (componentId: string) => void;
  onActionView: (componentId: string, lens: string, actionId: string) => void;
  phaseFocusMode?: 'auto' | 'manual';
  manualPhaseFocus?: number;
  colorAccessibilityMode?: 'standard' | 'color-blind-friendly';
  darkMode?: boolean;
}

/**
 * A daily triage view: what needs attention today (current-phase outstanding actions, timeline
 * ranked) plus the full programme component tree for wider context.
 */
export function DailyCheckIn({
  store,
  components,
  metrics,
  getEntry,
  onComponentClick,
  onActionView,
  phaseFocusMode = 'auto',
  manualPhaseFocus,
  colorAccessibilityMode = 'standard',
  darkMode = false,
}: DailyCheckInProps): JSX.Element {
  const pageIntro = usePageIntroSeen('daily-checkin');

  const effectivePhase =
    phaseFocusMode === 'manual' && manualPhaseFocus ? manualPhaseFocus : metrics.currentPhase;

  const nextSteps = useMemo(
    () => computeNextSteps(components, getEntry, effectivePhase),
    [components, getEntry, effectivePhase]
  );

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-6 flex items-center gap-2">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Daily Check-in
        </h2>
        <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
      </div>
      <p className={`mb-6 -mt-4 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
        Your daily triage: what's outstanding right now, and where it sits in the wider programme.
      </p>

      <div className="space-y-8">
        <NextStepsSection
          steps={nextSteps}
          onComponentClick={onComponentClick}
          onActionView={onActionView}
          colorAccessibilityMode={colorAccessibilityMode}
          darkMode={darkMode}
        />

        <ProgrammeHierarchy
          components={components}
          store={store}
          getEntry={getEntry}
          onComponentClick={onComponentClick}
          darkMode={darkMode}
        />
      </div>

      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Daily Check-in"
        darkMode={darkMode}
        body={
          <p>
            This is your daily triage page - "What To Do Next" lists every component in your
            current phase with outstanding actions, ranked by timeline risk, and the Programme
            Change Hierarchy below gives you the full picture across every phase.
          </p>
        }
      />
    </div>
  );
}
