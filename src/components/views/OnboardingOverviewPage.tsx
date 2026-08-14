import { JSX, useState } from 'react';
import { buildOnboardingSteps } from '@components/onboarding/OnboardingIntro';

export interface OnboardingOverviewPageProps {
  darkMode?: boolean;
  onNavigateToProjectDetails?: () => void;
  onNavigateToGuide?: () => void;
  onNavigateToDashboard?: () => void;
}

export function OnboardingOverviewPage({
  darkMode = false,
  onNavigateToProjectDetails,
  onNavigateToGuide,
  onNavigateToDashboard,
}: OnboardingOverviewPageProps): JSX.Element {
  const steps = buildOnboardingSteps();
  const [openStepIndex, setOpenStepIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Introduction
        </h2>
        <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          The five introduction steps are shown below in collapsible sections.
        </p>
      </div>

      {steps.map((step, index) => (
        <section
          key={step.title}
          className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} overflow-hidden rounded-lg border shadow-sm`}
        >
          <button
            type="button"
            onClick={() => setOpenStepIndex(index)}
            aria-expanded={openStepIndex === index}
            className={`flex w-full items-center justify-between gap-3 p-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-inset ${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-50'}`}
          >
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                Step {index + 1} of {steps.length}
              </p>
              <h3
                className={`mt-1 text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
              >
                {step.title}
              </h3>
            </div>
            <span
              className={`shrink-0 text-lg font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
              aria-hidden="true"
            >
              {openStepIndex === index ? '-' : '+'}
            </span>
          </button>
          {openStepIndex === index ? (
            <div className="px-5 pb-5">
              {step.body}
              {index === steps.length - 1 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {onNavigateToProjectDetails ? (
                    <button
                      type="button"
                      onClick={onNavigateToProjectDetails}
                      className="rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100"
                    >
                      Set up your CST Personalisation
                    </button>
                  ) : null}
                  {onNavigateToGuide ? (
                    <button
                      type="button"
                      onClick={onNavigateToGuide}
                      className="rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100"
                    >
                      See the 6 Key Questions
                    </button>
                  ) : null}
                  {onNavigateToDashboard ? (
                    <button
                      type="button"
                      onClick={onNavigateToDashboard}
                      className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Go to dashboard
                    </button>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
