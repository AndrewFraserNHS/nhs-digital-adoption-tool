import { useEffect, useState, type JSX } from 'react';
import { getComponentById } from '@data/components';
import {
  resolveGuidanceLinksForAdoptionComponent,
  type MaturityGuidanceTarget,
  type LinkOverrides,
} from '@data/maturity-guidance-links';

interface PhaseOverview {
  phase: number;
  label: string;
  programmeStage: string;
  tagline: string;
  color: string;
  darkColor: string;
  textColor: string;
  darkTextColor: string;
  borderColor: string;
  darkBorderColor: string;
  deliverables: Array<{ text: string; componentIds: string[]; showExternalGuidance?: boolean }>;
}

const PHASES: PhaseOverview[] = [
  {
    phase: 1,
    label: 'Pre-Discovery',
    programmeStage: 'Concept',
    tagline: 'Define the change',
    color: 'bg-blue-50',
    darkColor: 'bg-blue-950/45',
    textColor: 'text-blue-700',
    darkTextColor: 'text-blue-100',
    borderColor: 'border-blue-300',
    darkBorderColor: 'border-blue-700',
    deliverables: [
      { text: 'Change Vision defined and communicated', componentIds: ['vision'] },
      {
        text: 'Compelling case for change developed',
        componentIds: ['case_for_change'],
        showExternalGuidance: false,
      },
    ],
  },
  {
    phase: 2,
    label: 'Solution Design',
    programmeStage: 'Definition',
    tagline: 'Prepare the change',
    color: 'bg-violet-50',
    darkColor: 'bg-violet-950/45',
    textColor: 'text-violet-700',
    darkTextColor: 'text-violet-100',
    borderColor: 'border-violet-300',
    darkBorderColor: 'border-violet-700',
    deliverables: [
      { text: 'Change Impact analysed', componentIds: ['change_impact'] },
      {
        text: 'Change Management inputted to Business Case',
        componentIds: ['case_for_change'],
        showExternalGuidance: false,
      },
      {
        text: 'Engagement and Comms Strategy developed',
        componentIds: ['change_network', 'stakeholder'],
      },
    ],
  },
  {
    phase: 3,
    label: 'Development',
    programmeStage: 'Design & Develop',
    tagline: 'Plan the change',
    color: 'bg-amber-50',
    darkColor: 'bg-amber-950/45',
    textColor: 'text-amber-700',
    darkTextColor: 'text-amber-100',
    borderColor: 'border-amber-300',
    darkBorderColor: 'border-amber-700',
    deliverables: [
      { text: 'Engagement and Comms Plan developed', componentIds: ['stakeholder'] },
      { text: 'Change Management Plan developed', componentIds: ['cm_readiness'] },
    ],
  },
  {
    phase: 4,
    label: 'Deployment / Go Live',
    programmeStage: 'Implementation',
    tagline: 'Manage implementation of the change',
    color: 'bg-orange-50',
    darkColor: 'bg-orange-950/45',
    textColor: 'text-orange-700',
    darkTextColor: 'text-orange-100',
    borderColor: 'border-orange-300',
    darkBorderColor: 'border-orange-700',
    deliverables: [
      { text: 'Change Management Plan executed', componentIds: ['cm_readiness'] },
      { text: 'Communications delivered and Stakeholders engaged', componentIds: ['stakeholder'] },
      { text: 'Future State Processes validated', componentIds: ['process_change'] },
      { text: 'Skills gaps addressed', componentIds: ['skills_learning'] },
      { text: 'Future State Processes trialled and in use', componentIds: ['process_change'] },
    ],
  },
  {
    phase: 5,
    label: 'Post-Deployment',
    programmeStage: 'Transition / Close',
    tagline: 'Reinforce and sustain the change',
    color: 'bg-green-50',
    darkColor: 'bg-green-950/45',
    textColor: 'text-green-700',
    darkTextColor: 'text-green-100',
    borderColor: 'border-green-300',
    darkBorderColor: 'border-green-700',
    deliverables: [
      { text: 'Change adoption evaluated', componentIds: ['change_adoption'] },
      { text: 'Business Change refinements actioned', componentIds: ['reinforcement'] },
      { text: 'Change sustained', componentIds: ['transfer_bau'] },
    ],
  },
];

export interface DailyPhaseOverviewProps {
  currentPhase: number;
  onComponentClick: (componentId: string) => void;
  headingsOnly?: boolean;
  guidanceTarget?: MaturityGuidanceTarget;
  linkOverrides?: LinkOverrides;
  showAdditionalGuidanceLinks?: boolean;
  darkMode?: boolean;
}

export function DailyPhaseOverview({
  currentPhase,
  onComponentClick,
  headingsOnly = false,
  guidanceTarget = 'Default',
  linkOverrides,
  showAdditionalGuidanceLinks = true,
  darkMode = false,
}: DailyPhaseOverviewProps): JSX.Element {
  const [expandedPhase, setExpandedPhase] = useState(currentPhase);

  useEffect(() => {
    setExpandedPhase(currentPhase);
  }, [currentPhase]);

  return (
    <section
      className={`rounded-lg border shadow-sm ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
    >
      <div className={`border-b px-5 py-4 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          The Five Change Phases
        </h3>
        <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
          Select a phase to see the key deliverables expected at that stage.
        </p>
      </div>
      <div className="space-y-3 p-4">
        {PHASES.map((phase) => {
          if (headingsOnly) {
            return (
              <div
                key={phase.phase}
                className={`rounded-md border px-4 py-3 ${darkMode ? `${phase.darkBorderColor} ${phase.darkColor}` : `${phase.borderColor} ${phase.color}`}`}
              >
                <span className={`block text-sm font-semibold ${darkMode ? phase.darkTextColor : phase.textColor}`}>
                  Phase {phase.phase}: {phase.label}
                </span>
                <span className={`mt-0.5 block text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  {phase.tagline} · {phase.programmeStage}
                </span>
              </div>
            );
          }

          return (
            <details
              key={phase.phase}
              open={expandedPhase === phase.phase}
              onToggle={(event) => {
                if (event.currentTarget.open) {
                  setExpandedPhase(phase.phase);
                } else if (expandedPhase === phase.phase) {
                  setExpandedPhase(0);
                }
              }}
              className={`group overflow-hidden rounded-md border ${darkMode ? phase.darkBorderColor : phase.borderColor}`}
            >
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#ffeb3b] [&::-webkit-details-marker]:hidden ${darkMode ? `${phase.darkColor} ${phase.darkTextColor} hover:brightness-110` : `${phase.color} ${phase.textColor} hover:brightness-95`}`}
              >
                <span>
                  <span className="block text-sm font-semibold">
                    Phase {phase.phase}: {phase.label}
                  </span>
                  <span
                    className={`mt-0.5 block text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    {phase.tagline} · {phase.programmeStage}
                  </span>
                </span>
                <span
                  className="text-xl font-bold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div
                className={`border-t p-4 ${darkMode ? `${phase.darkBorderColor} bg-slate-900` : `${phase.borderColor} bg-white`}`}
              >
                <ul className="space-y-3">
                  {phase.deliverables.map((deliverable) => {
                    const componentsForDeliverable = deliverable.componentIds
                      .map((componentId) => getComponentById(componentId))
                      .filter((component): component is NonNullable<typeof component> =>
                        Boolean(component)
                      );
                    const guidanceLinks = componentsForDeliverable.flatMap((component) =>
                      resolveGuidanceLinksForAdoptionComponent(
                        guidanceTarget,
                        component.id,
                        'deliverables',
                        linkOverrides,
                        showAdditionalGuidanceLinks
                      ).slice(0, 1)
                    );
                    const isOneToOne =
                      componentsForDeliverable.length === 1 && guidanceLinks.length === 1;
                    const hasDistinctGuidanceLabel =
                      deliverable.showExternalGuidance !== false &&
                      isOneToOne &&
                      guidanceLinks[0].label.trim().toLowerCase() !==
                        componentsForDeliverable[0].label.trim().toLowerCase();

                    return (
                      <li key={deliverable.text} className="flex items-start gap-2 text-sm">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${darkMode ? `${phase.darkColor} ${phase.darkTextColor}` : `${phase.color} ${phase.textColor}`}`}
                        >
                          ✓
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>
                            {deliverable.text}
                          </span>
                          {isOneToOne ? (
                            <span className="ml-2 inline-flex flex-wrap items-center gap-2 text-xs">
                              <button
                                type="button"
                                onClick={() => onComponentClick(componentsForDeliverable[0].id)}
                                className="font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]"
                              >
                                {componentsForDeliverable[0].label}
                              </button>
                              {hasDistinctGuidanceLabel ? (
                                <a
                                  href={guidanceLinks[0].url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]"
                                >
                                  External guidance ↗
                                </a>
                              ) : null}
                            </span>
                          ) : null}
                          {!isOneToOne ? (
                            <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                              {componentsForDeliverable.map((component) => (
                                <span
                                  key={component.id}
                                  className="inline-flex flex-wrap items-center gap-2 text-xs"
                                >
                                  <button
                                    type="button"
                                    onClick={() => onComponentClick(component.id)}
                                    className="font-semibold text-[#005eb8] underline underline-offset-2 hover:text-[#003087]"
                                  >
                                    {component.label}
                                  </button>
                                </span>
                              ))}
                              {guidanceLinks.map((guidance) => (
                                <a
                                  key={guidance.url}
                                  href={guidance.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs font-medium text-slate-500 underline underline-offset-2 hover:text-[#005eb8]"
                                >
                                  External guidance ↗
                                </a>
                              ))}
                            </span>
                          ) : null}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
