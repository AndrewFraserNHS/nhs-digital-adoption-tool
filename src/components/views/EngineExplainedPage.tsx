import { JSX, useState, type ReactNode } from 'react';
import { ASSESSMENT_COMPONENTS, getComponentsByPhase } from '@data/components';
import { PATHWAY_OPTIONS, type CstPathwayKey } from '@data/cst';
import { getComponentDescription, getLensDescription } from '@data/descriptions';
import { PHASE_NAMES } from '../../types/constants';
import { READINESS_BANDS } from '@lib/readinessBands';
import { GENERIC_RUBRIC } from '@data/rubrics';
import { DailyPhaseOverview } from '@components/views/DailyPhaseOverview';

export interface EngineExplainedPageProps {
  darkMode?: boolean;
  onGetStarted: () => void;
  onComponentClick: (componentId: string) => void;
}

const STEP_TITLES = ['Pathway', 'Phases', 'Component', 'Lens', 'Readiness', 'Actions'];

const EXAMPLE_COMPONENT = getComponentsByPhase(1)[0] || ASSESSMENT_COMPONENTS[0];
const EXAMPLE_LENS = EXAMPLE_COMPONENT.lenses[0];
const EXAMPLE_BAND_SCORE = 2;

/** Small horizontal trail showing which relationship is being built up as the tutorial progresses. */
function Breadcrumb({
  activeStep,
  pathwayLabel,
  darkMode,
}: {
  activeStep: number;
  pathwayLabel: string;
  darkMode: boolean;
}): JSX.Element {
  const crumbs = [
    pathwayLabel,
    `Phase ${EXAMPLE_COMPONENT.phase}: ${PHASE_NAMES[EXAMPLE_COMPONENT.phase] || ''}`,
    EXAMPLE_COMPONENT.label,
    EXAMPLE_LENS,
    `Readiness ${EXAMPLE_BAND_SCORE}`,
    'Actions',
  ];

  return (
    <div className="flex flex-wrap items-center gap-1.5 text-xs">
      {crumbs.map((crumb, index) => (
        <span key={crumb} className="flex items-center gap-1.5">
          <span
            className={`rounded-full px-2.5 py-1 font-semibold transition-colors ${
              index === activeStep
                ? 'bg-[#005eb8] text-white'
                : index < activeStep
                  ? darkMode
                    ? 'bg-slate-700 text-slate-200'
                    : 'bg-blue-50 text-blue-800'
                  : darkMode
                    ? 'bg-slate-900 text-slate-600'
                    : 'bg-slate-100 text-slate-400'
            }`}
          >
            {crumb}
          </span>
          {index < crumbs.length - 1 ? (
            <span aria-hidden="true" className={darkMode ? 'text-slate-600' : 'text-slate-300'}>
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

function Card({ children, darkMode }: { children: ReactNode; darkMode: boolean }): JSX.Element {
  return (
    <div
      className={`w-full rounded-xl border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
    >
      <div className="p-6 sm:p-10">{children}</div>
    </div>
  );
}

/**
 * A guided, six-step tutorial that walks a new user through one worked example - Pathway ->
 * Phase -> Component -> Lens -> Readiness -> Actions - teaching what each level means and how
 * they relate, rather than dumping the full data tree at once.
 */
export function EngineExplainedPage({
  darkMode = false,
  onGetStarted,
  onComponentClick,
}: EngineExplainedPageProps): JSX.Element {
  const [selectedPathway, setSelectedPathway] = useState<CstPathwayKey>('pathway-1');
  const [activeStep, setActiveStep] = useState(0);

  const pathway = PATHWAY_OPTIONS.find((option) => option.value === selectedPathway) || PATHWAY_OPTIONS[0];
  const isLast = activeStep === STEP_TITLES.length - 1;
  const textClass = darkMode ? 'text-slate-300' : 'text-slate-700';

  const goNext = () => setActiveStep((current) => Math.min(STEP_TITLES.length - 1, current + 1));
  const goBack = () => setActiveStep((current) => Math.max(0, current - 1));

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Engine Explained
        </h2>
        <p className={`mt-2 max-w-3xl text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          A quick worked example showing how everything fits together, step by step.
        </p>
      </div>

      {activeStep > 0 ? (
        <Breadcrumb activeStep={activeStep} pathwayLabel={pathway.simplifiedLabel} darkMode={darkMode} />
      ) : null}

      <Card darkMode={darkMode}>
        <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
          Step {activeStep + 1} of {STEP_TITLES.length} · {STEP_TITLES[activeStep]}
        </p>

        {activeStep === 0 ? (
          <>
            <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Every programme starts with a pathway
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              A pathway describes the change journey your programme is on. It tailors which
              guidance, actions and resources you see everywhere else in the tool. Pick one below -
              we'll use it for the rest of this walkthrough (you can change it for real later, in
              Project Profile).
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PATHWAY_OPTIONS.map((option) => {
                const isSelected = option.value === selectedPathway;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedPathway(option.value)}
                    aria-pressed={isSelected}
                    className={`rounded-lg border p-4 text-left transition-colors ${
                      isSelected
                        ? 'border-[#005eb8] bg-blue-50 ring-2 ring-[#005eb8]'
                        : darkMode
                          ? 'border-slate-600 bg-slate-900 hover:bg-slate-700'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold ${isSelected ? 'text-[#005eb8]' : darkMode ? 'text-slate-100' : 'text-slate-900'}`}
                    >
                      {option.simplifiedLabel}
                    </p>
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        {activeStep === 1 ? (
          <>
            <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Your pathway is broken into the 5 change phases
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Every pathway runs through the same 5 phases, from the earliest thinking about a
              change through to it being fully embedded as business as usual. This is the same
              phase breakdown you'll see on your Daily Check-in once your project is set up - expand
              a phase below to see what it covers.
            </p>
            <div className="mt-6">
              <DailyPhaseOverview currentPhase={EXAMPLE_COMPONENT.phase} onComponentClick={onComponentClick} darkMode={darkMode} />
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              Each phase covers a set of change components that matter most at that stage - for
              example, Vision and the Case for Change come first, while things like Transfer to BAU
              come much later. Let's look at what a "component" actually is.
            </p>
          </>
        ) : null}

        {activeStep === 2 ? (
          <>
            <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              A component is a specific area of change to get right
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Each phase is made up of several components - focused topics like Vision,
              Sponsorship, Capability or Benefits. Each one has its own readiness to build up, and
              its own actions to get there. Here's the example we're following:
            </p>
            <div
              className={`mt-6 rounded-lg border p-5 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}
            >
              <p className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                {EXAMPLE_COMPONENT.label}
              </p>
              <p className={`mt-2 text-sm ${textClass}`}>{getComponentDescription(EXAMPLE_COMPONENT.id)}</p>
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              But you don't assess a component all at once - you look at it through several
              different "lenses". Let's see what that means.
            </p>
          </>
        ) : null}

        {activeStep === 3 ? (
          <>
            <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              A lens is a different angle on the same component
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Every component is assessed through a handful of lenses - perspectives like
              leadership, culture, planning, skills or process. Each lens gets its own readiness
              score, because a component can be strong in one lens and weak in another. Here are all
              of {EXAMPLE_COMPONENT.label}'s lenses:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3">
              {EXAMPLE_COMPONENT.lenses.map((lens) => {
                const isExample = lens === EXAMPLE_LENS;
                return (
                  <div
                    key={lens}
                    className={`rounded-lg border p-5 ${
                      isExample
                        ? 'border-[#005eb8] bg-blue-50'
                        : darkMode
                          ? 'border-slate-700 bg-slate-900'
                          : 'border-slate-200 bg-white'
                    }`}
                  >
                    <p
                      className={`text-lg font-semibold ${isExample ? 'text-[#005eb8]' : darkMode ? 'text-slate-100' : 'text-slate-900'}`}
                    >
                      {lens}
                      {isExample ? " - we'll follow this one" : ''}
                    </p>
                    <p className={`mt-2 text-sm ${isExample && !darkMode ? 'text-blue-900' : textClass}`}>
                      {getLensDescription(lens)}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className={`mt-4 text-sm ${textClass}`}>
              So now we have a specific thing to score: {EXAMPLE_COMPONENT.label}, seen through the{' '}
              {EXAMPLE_LENS} lens. That's exactly what a readiness score measures.
            </p>
          </>
        ) : null}

        {activeStep === 4 ? (
          <>
            <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Readiness is scored 0-5 for every lens
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Every lens on every component is scored on the same 0-5 scale, so progress is always
              comparable. Here's what each level means:
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {READINESS_BANDS.map((band) => {
                const [, detail] = (GENERIC_RUBRIC[band.score] || '').split(/:\s(.+)/);
                return (
                  <div
                    key={band.score}
                    className={`rounded-md border p-2.5 ${
                      band.score === EXAMPLE_BAND_SCORE
                        ? 'ring-2 ring-[#005eb8]'
                        : darkMode
                          ? 'border-slate-700'
                          : ''
                    }`}
                    style={{ borderLeftWidth: '4px', borderLeftColor: band.color }}
                  >
                    <p className={`text-xs font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                      {band.score} - {band.label}
                      {band.score === EXAMPLE_BAND_SCORE ? ' - our example is here' : ''}
                    </p>
                    <p className={`mt-0.5 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}

        {activeStep === 5 ? (
          <>
            <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              Actions are how you move up a readiness level
            </h3>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              At every readiness level, the engine suggests concrete actions - things to review,
              decide, build, communicate or measure. For {EXAMPLE_COMPONENT.label} /{' '}
              {EXAMPLE_LENS} at level {EXAMPLE_BAND_SCORE}, that might mean things like agreeing a
              standard approach and getting it applied consistently.
            </p>
            <p className={`mt-3 max-w-2xl text-sm ${textClass}`}>
              Assign each action an owner and a status. Once every action at a level is Completed
              or Cancelled, that lens automatically moves up to the next readiness level - no
              guesswork, no manual tally.
            </p>
            <p className={`mt-6 text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              That's the whole engine: Pathway → Phase → Component → Lens → Readiness → Actions.
              Time to set up your real project.
            </p>
          </>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={goBack}
            disabled={activeStep === 0}
            className={`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
          >
            Back
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={onGetStarted}
              className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]"
            >
              Get started
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]"
            >
              Next
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}
