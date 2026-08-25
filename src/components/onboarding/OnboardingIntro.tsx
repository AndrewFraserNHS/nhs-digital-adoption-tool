import { useEffect, useState, type JSX } from 'react';
import { GENERIC_RUBRIC, STAGE_COLORS } from '@data/rubrics';

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

export function buildOnboardingSteps(): Step[] {
  return [
    {
      title: 'What is the Adoption Engine?',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p className="text-sm text-slate-700">
            Going live with a new digital product isn't the finish line - people still need to adopt
            it, change how they work, and keep using it.{' '}
          </p>
          <p className="text-sm text-slate-700">
            The Adoption Engine helps you track how people and teams are adopting the change before
            go-live, during rollout, and after launch so progress is visible and outcomes are
            measurable.
          </p>
          <p className="text-sm text-slate-700"> It helps you answer four simple questions:</p>
          <ul className="list-decimal pl-5 space-y-1">
            <li>Where are we going?</li>
            <li> How will we know we've got there?</li>
            <li> What needs to be in place?</li>
            <li> What should we do next?</li>
          </ul>
          <p className="text-sm text-slate-700">
            The goal is not just to implement change, but to ensure it is adopted, embedded and
            delivering benefits.
          </p>
        </div>
      ),
    },
    {
      title: 'What benefit does this tool give me?',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>
            Without it, adoption progress lives in scattered spreadsheets, memories and gut feel -
            hard to prove, hard to hand over, and easy to lose momentum on.
          </p>
          <p>
            With it, you get a single, evidenced picture of where your change effort actually stands:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>See at a glance what's on track, what's at risk, and what to do next.</li>
            <li>
              Turn vague "how's it going?" conversations into a clear, evidence-backed status you can
              show your sponsor or board.
            </li>
            <li>
              Get a ready-made action plan for each area, so you're not starting from a blank page.
            </li>
            <li>Build a highlight report in minutes instead of an afternoon of copy-pasting.</li>
          </ul>
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
            You can update your CST at any time from <strong>CST Personalisation</strong>
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
            <li>
              <strong>Starting for the First Time</strong>
              <br />
              Building the foundations for successful adoption.
            </li>

            <li>
              <strong>Piloted and Ready to Scale Up</strong>
              <br />
              Expanding a successful pilot to a wider audience.
            </li>

            <li>
              <strong>Gone Live but Adoption is Patchy</strong>
              <br />
              Strengthening adoption where uptake or benefits are lower than expected.
            </li>
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
            The engine is built around change components such as Vision, Sponsorship, Engagement,
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
            As you assess your readiness of each change component through the lenses, the engine recommends actions, resources and evidence to help improve adoption.
          </p>
        </div>
      ),
    },
    {
      title: 'Readiness Guidance Levels',
      body: (
        <div className="text-sm text-slate-700 space-y-3">
          <p>
            Every lens is scored on the same 0-5 readiness scale. Here's what each level generally
            means - each lens on a component page also shows guidance written specifically for
            that lens at its current level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {Object.entries(GENERIC_RUBRIC).map(([level, description]) => {
              const [label, detail] = description.split(/:\s(.+)/);
              return (
                <div
                  key={level}
                  className="rounded-md border p-2.5"
                  style={{ borderLeftWidth: '4px', borderLeftColor: STAGE_COLORS[Number(level)] }}
                >
                  <p className="text-xs font-bold text-slate-800">
                    {level} - {label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">{detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      title: 'Getting Started',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p className="text-sm text-slate-700">Start with CST Personalisation to review your CST. </p>
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
  const steps = buildOnboardingSteps();

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
      <div className="relative w-full max-w-lg rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
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
                  Set up your CST Personalisation
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
