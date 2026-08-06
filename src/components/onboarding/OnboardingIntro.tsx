import { useEffect, useState, type JSX } from 'react';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { ASSESSMENT_LENSES } from '@data/lenses';
import { CST_TYPE_OPTIONS, PATHWAY_OPTIONS } from '@data/cst';

export interface OnboardingIntroProps {
  open: boolean;
  onClose: () => void;
  onNavigateToProjectDetails?: () => void;
}

interface Step {
  title: string;
  body: JSX.Element;
}

function buildSteps(): Step[] {
  return [
    {
      title: 'What is change management, here?',
      body: (
        <p className="text-sm text-slate-700">
          Going live with a new digital product isn't the finish line - people still need to adopt it, change how
          they work, and keep using it. This tool tracks that human and process side of adoption after go-live, so
          you can see where your programme is strong and where it needs support.
        </p>
      )
    },
    {
      title: 'What is a CST?',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>
            A CST (Context Specific Template) is the record for your programme: whether it's a{' '}
            {CST_TYPE_OPTIONS.map((option) => option.label.toLowerCase()).join(', ')}, its key dates (go live, full
            adoption, benefit realisation), and how ready your team feels at each phase.
          </p>
          <p>You can view and edit your CST at any time from <strong>Project Details</strong> in the side navigation.</p>
        </div>
      )
    },
    {
      title: 'The 3 pathways',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>Every programme follows one of three pathways, chosen to match where you are today:</p>
          <ul className="list-disc pl-5 space-y-1">
            {PATHWAY_OPTIONS.map((option) => (
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: 'How the tool is structured',
      body: (
        <div className="text-sm text-slate-700 space-y-2">
          <p>Your programme is broken down like this:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Your <strong>programme</strong> has {ASSESSMENT_COMPONENTS.length} <strong>components</strong> (things
              like Vision, Sponsorship, Skills/Learning).
            </li>
            <li>
              Each component is looked at through one or more of {ASSESSMENT_LENSES.length}{' '}
              <strong>lenses</strong>: {ASSESSMENT_LENSES.join(', ')}.
            </li>
            <li>
              Both components and lenses can have <strong>actions</strong> - things to do to close a gap. A lens
              action can also be linked to other lenses it contributes to.
            </li>
          </ol>
        </div>
      )
    },
    {
      title: 'Where to go next',
      body: (
        <p className="text-sm text-slate-700">
          Start by setting up your Project Details, or head straight to the Dashboard to see your current readiness.
        </p>
      )
    }
  ];
}

export function OnboardingIntro({ open, onClose, onNavigateToProjectDetails }: OnboardingIntroProps): JSX.Element | null {
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
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {isLast ? (
            <div className="flex gap-2">
              {onNavigateToProjectDetails ? (
                <button
                  type="button"
                  onClick={onNavigateToProjectDetails}
                  className="rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-100"
                >
                  Set up your project details
                </button>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Go to dashboard
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setStepIndex((current) => Math.min(steps.length - 1, current + 1))}
              className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
