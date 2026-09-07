import { JSX, useState, type ReactNode } from 'react';
import { getComponentById } from '@data/components';
import {
  resolveGuidanceLinksForAdoptionComponent,
  type LinkOverrides,
  type MaturityGuidanceTarget,
} from '@data/maturity-guidance-links';
import { KEY_QUESTIONS } from '@data/key-questions';

export interface ChangeManagementGuideProps {
  onComponentClick: (componentId: string) => void;
  guidanceTarget?: MaturityGuidanceTarget;
  linkOverrides?: LinkOverrides;
  showAdditionalGuidanceLinks?: boolean;
  darkMode?: boolean;
}

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

type GuideSectionId = 'questions' | 'role';

export function AccordionSection({
  title,
  description,
  isOpen,
  onToggle,
  children,
  darkMode = false,
}: {
  title: string;
  description?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  darkMode?: boolean;
}): JSX.Element {
  return (
    <section
      className={`mb-4 overflow-hidden rounded-lg border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors ${darkMode ? 'bg-slate-900 hover:bg-slate-800' : 'bg-white hover:bg-slate-50'}`}
      >
        <div>
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            {title}
          </h3>
          {description ? (
            <p className={`mt-0.5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              {description}
            </p>
          ) : null}
        </div>
        <span
          className={`shrink-0 text-xl font-bold transition-transform ${darkMode ? 'text-slate-500' : 'text-slate-400'} ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {isOpen ? (
        <div
          className={`border-t p-5 pt-4 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-100 bg-white'}`}
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}

export function ChangeManagementGuide({
  onComponentClick,
  guidanceTarget = 'Default',
  linkOverrides,
  showAdditionalGuidanceLinks = true,
  darkMode = false,
}: ChangeManagementGuideProps): JSX.Element {
  const [expandedSection, setExpandedSection] = useState<GuideSectionId | null>('questions');

  const toggleSection = (id: GuideSectionId) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className={`mb-2 text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
        Change Management Toolkit
      </h2>
      <p className={`mb-8 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
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


      {/* The 6 Key Questions */}
      <AccordionSection
        title="The 6 Key Questions"
        description="Six questions worth returning to throughout the life of the programme, each backed by a change model and linked to where you can act on it."
        isOpen={expandedSection === 'questions'}
        onToggle={() => toggleSection('questions')}
        darkMode={darkMode}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {KEY_QUESTIONS.map((keyQuestion, index) => {
            const toolkitLinks = resolveGuidanceLinksForAdoptionComponent(
              guidanceTarget,
              keyQuestion.componentIds[0],
              'inputs',
              linkOverrides,
              showAdditionalGuidanceLinks
            ).slice(0, 2);

            return (
              <div
                key={keyQuestion.id}
                className={`rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-[#005eb8] text-xs font-bold flex items-center justify-center">
                    Q{index + 1}
                  </span>
                  <div>
                    <p
                      className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                    >
                      {keyQuestion.question}
                    </p>
                    <span
                      className={`mt-1 inline-block rounded border px-2 py-0.5 text-xs font-medium ${darkMode ? 'border-indigo-500/40 bg-indigo-500/15 text-indigo-200' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}
                    >
                      {keyQuestion.framework}
                    </span>
                  </div>
                </div>

                <p
                  className={`mt-3 text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {keyQuestion.description}
                </p>

                {toolkitLinks.length ? (
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {toolkitLinks.map((link) => (
                      <a
                        key={`${keyQuestion.id}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#005eb8] underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}

                <div className="mt-3 flex flex-wrap gap-2">
                  {keyQuestion.componentIds.map((componentId) => {
                    const component = getComponentById(componentId);
                    if (!component) {
                      return null;
                    }
                    return (
                      <button
                        key={componentId}
                        type="button"
                        onClick={() => onComponentClick(componentId)}
                        className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors ${darkMode ? 'border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25' : 'border-blue-200 bg-blue-50 text-[#005eb8] hover:bg-blue-100'}`}
                      >
                        Go to {component.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </AccordionSection>

      {/* Role of the Change Manager */}
      <AccordionSection
        title="The Role of the Change Manager"
        description="Change management (and change managers) provide essential assistance to project managers through:"
        isOpen={expandedSection === 'role'}
        onToggle={() => toggleSection('role')}
        darkMode={darkMode}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CM_RESPONSIBILITIES.map((r) => (
            <div
              key={r.title}
              className={`rounded-md border p-4 ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-100 bg-slate-50'}`}
            >
              <p className="text-sm font-semibold text-[#005eb8] mb-1">{r.title}</p>
              <p
                className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </AccordionSection>

      {/* Toolkit link */}
      <div
        className={`flex flex-col gap-4 rounded-lg border p-5 sm:flex-row sm:items-center ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}
      >
        <div className="flex-1">
          <p
            className={`mb-1 text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
          >
            Explore the full Toolkit
          </p>
          <p className={`text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
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
