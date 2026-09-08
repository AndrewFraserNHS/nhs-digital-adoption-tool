import { JSX, useState, type ReactNode } from 'react';
import { KEY_QUESTIONS } from '@data/key-questions';
import { load, save } from '@lib/storage';

export interface OnboardingOverviewPageProps {
  darkMode?: boolean;
  onGetStarted: () => void;
}

export const ADOPTION_INTRODUCTION_COMPLETE_KEY = 'nhs-digital-adoption-introduction-complete';

const CM_RESPONSIBILITIES = [
  {
    title: 'Handling Resistance',
    body: 'Helping project managers navigate potential roadblocks and maintain project momentum through identifying and addressing resistance using effective communication, stakeholder engagement, and mitigation strategies.',
  },
  {
    title: 'Engaging Stakeholders',
    body: 'Identifying key individuals and groups affected by the project and working closely with them to understand concerns, gather feedback, and ensure their perspectives are considered.',
  },
  {
    title: 'Communicating and Raising Awareness',
    body: "Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project's purpose, goals, and benefits.",
  },
  {
    title: 'Managing Expectations',
    body: 'Setting realistic expectations for stakeholders regarding project outcomes, timelines, and potential disruptions by addressing concerns, clarifying misconceptions, and managing expectations.',
  },
  {
    title: 'Ensuring Change Readiness',
    body: 'Assessing the readiness of an organisation or team for change and developing strategies to bridge any gaps.',
  },
  {
    title: 'Mitigating Risks',
    body: 'Through anticipating and addressing risks associated with change, such as resistance, lack of stakeholder support, or unexpected obstacles.',
  },
  {
    title: 'Adopting Change Sustainably',
    body: "Supporting project managers in developing strategies to embed the changes into the organisation's culture, processes, and systems.",
  },
];

interface Step {
  title: string;
  body: ReactNode;
}

function buildSteps(darkMode: boolean): Step[] {
  const textClass = darkMode ? 'text-slate-300' : 'text-slate-700';
  return [
    {
      title: 'What is the Adoption Engine?',
      body: (
        <div className={`text-sm space-y-2 ${textClass}`}>
          <p>
            Going live with a new digital product isn't the finish line - people still need to adopt
            it, change how they work, and keep using it.
          </p>
          <p>
            The Adoption Engine helps you track how people and teams are adopting the change before
            go-live, during rollout, and after launch so progress is visible and outcomes are
            measurable.
          </p>
          <p>It helps you answer four simple questions:</p>
          <ul className="list-decimal pl-5 space-y-1">
            <li>Where are we going?</li>
            <li>How will we know we've got there?</li>
            <li>What needs to be in place?</li>
            <li>What should we do next?</li>
          </ul>
          <p>
            The goal is not just to implement change, but to ensure it is adopted, embedded and
            delivering benefits.
          </p>
        </div>
      ),
    },
    {
      title: 'What benefit does this tool give me?',
      body: (
        <div className={`text-sm space-y-2 ${textClass}`}>
          <p>
            Without it, adoption progress lives in scattered spreadsheets, memories and gut feel -
            hard to prove, hard to hand over, and easy to lose momentum on.
          </p>
          <p>With it, you get a single, evidenced picture of where your change effort actually stands:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>See at a glance what's on track, what's at risk, and what to do next.</li>
            <li>
              Turn vague "how's it going?" conversations into a clear, evidence-backed status you can
              show your sponsor or board.
            </li>
            <li>Get a ready-made action plan for each area, so you're not starting from a blank page.</li>
            <li>Build a highlight report in minutes instead of an afternoon of copy-pasting.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'What is a CST?',
      body: (
        <div className={`text-sm space-y-2 ${textClass}`}>
          <p>
            A CST (Context Specific Template) contains the information that makes the Adoption
            Engine specific to your project, programme or initiative.
          </p>
          <p>
            It captures key information such as your scope, milestones, outcomes and benefits, and
            tailors the guidance, actions and resources provided.
          </p>
          <p>
            You can update your project setup at any time from{' '}
            <strong className={darkMode ? 'text-slate-100' : 'text-slate-900'}>Project Profile</strong>.
          </p>
        </div>
      ),
    },
    {
      title: 'The 6 Key Questions',
      body: (
        <div className={`text-sm space-y-4 ${textClass}`}>
          <p>
            Six questions worth returning to throughout the life of the programme, each backed by a
            change model.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-2">
            {KEY_QUESTIONS.map((keyQuestion, index) => (
              <div
                key={keyQuestion.id}
                className={`rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center">
                    Q{index + 1}
                  </span>
                  <div>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                      {keyQuestion.question}
                    </p>
                    <span
                      className={`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${darkMode ? 'border-indigo-500/40 bg-indigo-500/15 text-indigo-200' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}
                    >
                      {keyQuestion.framework}
                    </span>
                  </div>
                </div>
                <p className={`mt-3 text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {keyQuestion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'What is a Change Manager?',
      body: (
        <div className={`text-sm space-y-4 ${textClass}`}>
          <p>Change management (and change managers) provide essential assistance to project managers through:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CM_RESPONSIBILITIES.map((r) => (
              <div
                key={r.title}
                className={`rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-100 bg-slate-50'}`}
              >
                <p className="text-sm font-semibold text-[#005eb8] mb-1">{r.title}</p>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];
}

/** Full-width, must-complete introduction: every step has to be stepped through with Next before "Get Started" unlocks. Returning visits skip straight to the fully-unlocked view. */
export function OnboardingOverviewPage({
  darkMode = false,
  onGetStarted,
}: OnboardingOverviewPageProps): JSX.Element {
  const steps = buildSteps(darkMode);
  const alreadyComplete = Boolean(load<boolean>(ADOPTION_INTRODUCTION_COMPLETE_KEY));
  const [activeStep, setActiveStep] = useState(0);
  const [furthestStepSeen, setFurthestStepSeen] = useState(alreadyComplete ? steps.length - 1 : 0);

  const isLast = activeStep === steps.length - 1;
  const allStepsSeen = furthestStepSeen >= steps.length - 1;

  const goToStep = (index: number) => {
    if (index <= furthestStepSeen) {
      setActiveStep(index);
    }
  };

  const handleNext = () => {
    const next = Math.min(steps.length - 1, activeStep + 1);
    setActiveStep(next);
    setFurthestStepSeen((current) => {
      const updated = Math.max(current, next);
      if (updated >= steps.length - 1) {
        save(ADOPTION_INTRODUCTION_COMPLETE_KEY, true);
      }
      return updated;
    });
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Introduction
        </h2>
        <p className={`mt-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          A few quick steps before you get started - each one unlocks the next.
        </p>
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Introduction steps">
        {steps.map((step, index) => {
          const unlocked = index <= furthestStepSeen;
          const isActive = index === activeStep;
          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-disabled={!unlocked}
              disabled={!unlocked}
              onClick={() => goToStep(index)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? 'border-[#005eb8] bg-[#005eb8] text-white'
                  : unlocked
                    ? darkMode
                      ? 'border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                    : darkMode
                      ? 'border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed'
                      : 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  isActive ? 'bg-white text-[#005eb8]' : unlocked ? 'bg-[#005eb8]/10 text-[#005eb8]' : ''
                }`}
              >
                {index + 1}
              </span>
              {step.title}
            </button>
          );
        })}
      </div>

      <section
        className={`w-full overflow-hidden rounded-xl border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
      >
        <div className="p-6 sm:p-10">
          <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
            Step {activeStep + 1} of {steps.length}
          </p>
          <h3 className={`mt-1 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
            {steps[activeStep].title}
          </h3>
          <div className="mt-5 max-w-full">{steps[activeStep].body}</div>

          <div className="mt-8 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setActiveStep((current) => Math.max(0, current - 1))}
              disabled={activeStep === 0}
              className={`rounded-md border px-4 py-2 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
            >
              Back
            </button>

            {isLast ? (
              <button
                type="button"
                onClick={onGetStarted}
                disabled={!allStepsSeen}
                className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Get Started
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
