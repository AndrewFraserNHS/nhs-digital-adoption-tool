import { JSX, useState } from 'react';

interface PhaseData {
  phase: number;
  label: string;
  programmeStage: string;
  tagline: string;
  deliverables: string[];
  color: string;
  textColor: string;
  borderColor: string;
}

const PHASES: PhaseData[] = [
  {
    phase: 1,
    label: 'Pre-Discovery',
    programmeStage: 'Concept',
    tagline: 'Define the change',
    deliverables: [
      'Change Vision defined and communicated',
      'Compelling case for change developed',
    ],
    color: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-300',
  },
  {
    phase: 2,
    label: 'Solution Design',
    programmeStage: 'Definition',
    tagline: 'Prepare the change',
    deliverables: [
      'Change Impact analysed',
      'Change Management inputted to Business Case',
      'Engagement and Comms Strategy developed',
    ],
    color: 'bg-violet-50',
    textColor: 'text-violet-700',
    borderColor: 'border-violet-300',
  },
  {
    phase: 3,
    label: 'Development',
    programmeStage: 'Design & Develop',
    tagline: 'Plan the change',
    deliverables: [
      'Engagement and Comms Plan developed',
      'Change Management Plan developed',
    ],
    color: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-300',
  },
  {
    phase: 4,
    label: 'Deployment / Go Live',
    programmeStage: 'Implementation',
    tagline: 'Manage implementation of the change',
    deliverables: [
      'Change Management Plan executed',
      'Communications delivered and Stakeholders engaged',
      'Future State Processes validated',
      'Skills gaps addressed',
      'Future State Processes trialled and in use',
    ],
    color: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-300',
  },
  {
    phase: 5,
    label: 'Post-Deployment',
    programmeStage: 'Transition / Close',
    tagline: 'Reinforce and sustain the change',
    deliverables: [
      'Change adoption evaluated',
      'Business Change refinements actioned',
      'Change sustained',
    ],
    color: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-300',
  },
];

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
    body: 'Developing engagement and communication plans that support project managers in creating clear and consistent messaging about the project\'s purpose, goals, and benefits.',
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
    body: 'Supporting project managers in developing strategies to embed the changes into the organisation\'s culture, processes, and systems.',
  }
];

export function ChangeManagementGuide(): JSX.Element {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const togglePhase = (phase: number) => {
    setExpandedPhase((prev) => (prev === phase ? null : phase));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Change Management Toolkit</h2>
      <p className="text-sm text-slate-500 mb-8">
        NHS England Programme Delivery Lifecycle - an introduction to the five change phases and the
        role of the Change Manager.
      </p>

      {/* When to start callout */}
      <div className="bg-[#005eb8] text-white rounded-lg p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
          !
        </div>
        <div>
          <p className="text-sm font-semibold text-blue-100 uppercase tracking-wide mb-1">
            When is the best time to start thinking about Change Management?
          </p>
          <p className="text-2xl font-bold">Answer: Now!</p>
          <p className="text-sm text-blue-100 mt-1">
            Change management should be considered from the very start of any project - not as an
            afterthought at go-live.
          </p>
        </div>
      </div>

      {/* Phase timeline */}
      <section className="mb-10">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">The Five Change Phases</h3>
        <p className="text-sm text-slate-500 mb-5">
          Select a phase to see the key deliverables expected at that stage.
        </p>

        {/* Lifecycle bar */}
        <div className="hidden md:grid grid-cols-5 gap-1 mb-6 rounded-lg overflow-hidden border border-slate-200 text-xs font-semibold text-center">
          {PHASES.map((p) => (
            <button
              key={p.phase}
              onClick={() => togglePhase(p.phase)}
              className={`py-2 px-1 transition-colors ${
                expandedPhase === p.phase
                  ? `${p.color} ${p.textColor} ring-2 ring-inset ring-current`
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              Phase {p.phase}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {PHASES.map((p) => {
            const isOpen = expandedPhase === p.phase;
            return (
              <div
                key={p.phase}
                className={`rounded-lg border ${p.borderColor} overflow-hidden transition-shadow ${isOpen ? 'shadow-md' : ''}`}
              >
                <button
                  onClick={() => togglePhase(p.phase)}
                  className={`w-full flex items-center justify-between p-4 text-left ${p.color} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${p.textColor} bg-white border ${p.borderColor}`}
                    >
                      {p.phase}
                    </span>
                    <div>
                      <p className={`font-semibold text-sm ${p.textColor}`}>{p.label}</p>
                      <p className="text-xs text-slate-500">
                        <span className="italic">"{p.tagline}"</span>
                        {' · '}
                        {p.programmeStage}
                      </p>
                    </div>
                  </div>
                  <span className={`text-lg font-bold ${p.textColor} transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-3 bg-white border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Key deliverables
                    </p>
                    <ul className="space-y-2">
                      {p.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className={`mt-0.5 w-5 h-5 rounded-full ${p.color} ${p.textColor} text-xs font-bold flex items-center justify-center shrink-0`}>
                            {i + 1}
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Role of the Change Manager */}
      <section className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-1">The Role of the Change Manager</h3>
        <p className="text-sm text-slate-500 mb-5">
          Change management (and change managers) provide essential assistance to project managers
          through:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CM_RESPONSIBILITIES.map((r) => (
            <div key={r.title} className="rounded-md border border-slate-100 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-[#005eb8] mb-1">{r.title}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toolkit link */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-700 mb-1">Explore the full Toolkit</p>
          <p className="text-xs text-slate-500">
            Access templates, frameworks, and guidance materials on the NHS Change Management
            Network workspace.
          </p>
        </div>
        <a
          href="https://future.nhs.uk/CMN/view?objectId=129489733"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 rounded-md bg-[#005eb8] text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          Change Management Toolkit ↗
        </a>
      </div>
    </div>
  );
}
