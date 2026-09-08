import { useState, type JSX } from 'react';

export interface VisionGetStartedModalProps {
  open: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

interface Step {
  title: string;
  body: JSX.Element;
}

const STEPS: Step[] = [
  {
    title: 'Explain your vision state',
    body: (
      <div className="text-sm text-slate-700 space-y-2">
        <p>
          Start by scoring where Vision stands today for each lens - be honest about the current
          state, not where you'd like it to be.
        </p>
        <p>
          Add a short justification for the score so anyone reviewing later understands the
          evidence behind it.
        </p>
      </div>
    ),
  },
  {
    title: 'Assign owners to actions',
    body: (
      <div className="text-sm text-slate-700 space-y-2">
        <p>
          Every action needs a named owner - without one, nothing moves and progress stalls.
        </p>
        <p>
          As owners complete or cancel every action at a readiness level, that lens automatically
          advances to the next level.
        </p>
      </div>
    ),
  },
];

/** One-shot 2-step walkthrough shown the first time a user reaches the Vision assessment via the Engine Explained "Get started" link. */
export function VisionGetStartedModal({
  open,
  onClose,
  darkMode = false,
}: VisionGetStartedModalProps): JSX.Element | null {
  const [stepIndex, setStepIndex] = useState(0);

  if (!open) {
    return null;
  }

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        className={`relative w-full max-w-lg rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
          Getting started · Step {stepIndex + 1} of {STEPS.length}
        </p>
        <h3 className={`mt-3 text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
          {step.title}
        </h3>
        <div className={`mt-3 ${darkMode ? 'text-slate-300' : ''}`}>{step.body}</div>

        <div className="mt-6 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
            disabled={stepIndex === 0}
            className={`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
          >
            Back
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Got it
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStepIndex((current) => Math.min(STEPS.length - 1, current + 1))}
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
