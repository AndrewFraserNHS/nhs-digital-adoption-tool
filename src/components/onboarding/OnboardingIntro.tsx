import { useEffect, useState, type JSX } from 'react';

export interface OnboardingIntroProps {
  open: boolean;
  onClose: () => void;
  onNavigateToProjectDetails?: () => void;
  onNavigateToGuide?: () => void;
}

interface Step {
  title: string;
  body: JSX.Element;
}

function buildSteps(): Step[] {
  return [
    {
      title: 'What is the Adoption Engine?',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
        <p className="text-sm text-slate-700">
          Going live with a new digital product isn't the finish line - people still need to adopt
          it, change how they work, and keep using it.   </p>
          <p className="text-sm text-slate-700">The Adoption Engine helps you track how people and
          teams are adopting the change before go-live, during rollout, and after launch so progress
          is visible and outcomes are measurable.</p>
          <p className="text-sm text-slate-700"> It helps you answer four simple questions:</p>
          <ul className="list-decimal pl-5 space-y-1">
            <li>Where are we going?</li>
            <li> How will we know we've got there?</li>
            <li> What needs to be in place?</li>
            <li> What should we do next?</li>
          </ul> 
          <p className="text-sm text-slate-700">
          The goal is not just to implement change, but to ensure it is
          adopted, embedded and delivering benefits.
          </p>
        </div>
      ),
    },
    {
      title: 'What is a CST?',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>
            A CST (Context Specific Template) contains the information that makes the Adoption
            Engine specific to your project, programme or initiative.
          </p>
          <p>
            It captures key information such as your scope, milestones, outcomes and benefits, and
            tailors the guidance, actions and resources provided.
          </p>
          <p>
            You can update your CST at any time from <strong>Project Details</strong>
          </p>
        </div>
      ),
    },
    {
      title: 'Adoption Pathways',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>The Adoption Engine supports three common change journeys:</p>
<ul className="list-decimal pl-5 space-y-4">
<li><strong>Starting for the First Time</strong><br/>
Building the foundations for successful adoption.</li>

<li><strong>Piloted and Ready to Scale Up</strong><br/>Expanding a successful pilot to a wider audience.</li>

<li><strong>Gone Live but Adoption is Patchy</strong><br/>Strengthening adoption where uptake or benefits are lower than expected.</li>
</ul>
<p>Choose your pathway to tailor the guidance, actions and resources you see.</p>
        </div>
      ),
    },
    {
      title: 'How the Adoption Engine Works',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>
            The engine is built around components such as Vision, Sponsorship, Engagement,
            Capability and Benefits.
          </p>
          <p>
            Each component is viewed through five <strong>lenses</strong>:
          </p>
          <ul className="list-decimal pl-5 space-y-1">
            <li>Strategic Direction and Leadership</li>
            <li>People Experience and Culture</li>
            <li>Planning and Risk</li>
            <li>Skills and Behaviour</li>
            <li>Process and Sustainment</li>
          </ul>
          <p>
            As you assess each area, the engine recommends actions, resources and evidence to help
            improve adoption.
          </p>
        </div>
      ),
    },
    {
      title: 'Getting Started',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p className="text-sm text-slate-700">Start with Project Details to review your CST. </p>
          <p className="text-sm text-slate-700">Then visit the Dashboard to:</p>
          <ul className="list-decimal pl-5 space-y-1">
            <li>View your current position</li>
            <li>Explore components and lenses</li>
            <li>Identify priority actions</li>
            <li>Track progress and benefits</li>
          </ul>
          <p className="text-sm text-slate-700">
            The Adoption Engine will help guide your journey from ambition to adoption.{' '}
          </p>
        </div>
      ),
    },
  ];
}

export function OnboardingIntro({
  open,
  onClose,
  onNavigateToProjectDetails,
  onNavigateToGuide,
}: OnboardingIntroProps): JSX.Element | null {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = buildSteps();

  useEffect(() => {
    if (open) {
      setStepIndex(0);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const step = steps[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Introduction · Step {stepIndex + 1} of {steps.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
          >
            Skip
          </button>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
        <div className="mt-3">{step.body}</div>

        <div className="mt-6 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
            disabled={isFirst}
            className="flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {isLast ? (
            <div className="flex items-stretch gap-2">
              {onNavigateToProjectDetails ? (
                <button
                  type="button"
                  onClick={onNavigateToProjectDetails}
                  className="flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100"
                >
                  Set up your project details
                </button>
              ) : null}
              {onNavigateToGuide ? (
                <button
                  type="button"
                  onClick={onNavigateToGuide}
                  className="flex h-[42px] min-h-[42px] items-center justify-center rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100"
                >
                  See the 6 Key Questions
                </button>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                className="flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Go to dashboard
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setStepIndex((current) => Math.min(steps.length - 1, current + 1))}
              className="flex h-[42px] min-h-[42px] items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
