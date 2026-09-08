import { JSX, useState, type ReactNode } from 'react';
import { ASSESSMENT_COMPONENTS, getComponentsByPhase } from '@data/components';
import { PATHWAY_OPTIONS, OVERARCHING_PHASES } from '@data/cst';
import { getComponentDescription, getLensDescription } from '@data/descriptions';
import { PHASE_NAMES } from '../../types/constants';
import { READINESS_BANDS } from '@lib/readinessBands';
import { GENERIC_RUBRIC } from '@data/rubrics';

export interface EngineExplainedPageProps {
  darkMode?: boolean;
  onGetStarted: () => void;
}

const ACTIONS_EXPLAINER =
  'Each readiness level lists concrete actions - things to review, decide, build, communicate or measure - so moving from one level to the next is never a guess. Complete or cancel every action at a level to unlock the next one automatically.';

/** A single expand/collapse row in the waterfall tree, indented per depth. */
function TreeNode({
  id,
  depth,
  label,
  description,
  accentColor,
  defaultOpen = false,
  children,
  darkMode,
}: {
  id: string;
  depth: number;
  label: string;
  description?: string;
  accentColor?: string;
  defaultOpen?: boolean;
  children?: ReactNode;
  darkMode: boolean;
}): JSX.Element {
  const [open, setOpen] = useState(defaultOpen);
  const hasChildren = Boolean(
    Array.isArray(children) ? children.some((child) => child != null) : children != null
  );

  return (
    <div
      className="relative"
      style={{ marginLeft: depth > 0 ? '1.5rem' : 0 }}
    >
      {depth > 0 ? (
        <span
          aria-hidden="true"
          className={`absolute -left-4 top-0 bottom-0 border-l ${darkMode ? 'border-slate-700' : 'border-slate-300'}`}
        />
      ) : null}
      <div
        className={`rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mb-2`}
        style={accentColor ? { borderLeftWidth: '4px', borderLeftColor: accentColor } : undefined}
      >
        <button
          type="button"
          onClick={() => hasChildren && setOpen((current) => !current)}
          aria-expanded={hasChildren ? open : undefined}
          className={`flex w-full items-start justify-between gap-3 p-3 text-left ${hasChildren ? (darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-50') : ''}`}
        >
          <div>
            <p className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
              {label}
            </p>
            {description ? (
              <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {description}
              </p>
            ) : null}
          </div>
          {hasChildren ? (
            <span
              className={`shrink-0 text-lg font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
              aria-hidden="true"
            >
              {open ? '−' : '+'}
            </span>
          ) : null}
        </button>
      </div>
      {hasChildren && open ? <div id={id}>{children}</div> : null}
    </div>
  );
}

/** Pathway -> Phase -> Component -> Lens -> Readiness -> Actions, as a top-to-bottom expandable waterfall. */
export function EngineExplainedPage({
  darkMode = false,
  onGetStarted,
}: EngineExplainedPageProps): JSX.Element {
  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
          Engine Explained
        </h2>
        <p className={`mt-2 max-w-3xl text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Here's how everything fits together, from the pathway you're on down to the individual
          actions you'll work through. Expand each level to see what it means.
        </p>
      </div>

      <div className="w-full space-y-2">
        {PATHWAY_OPTIONS.map((pathway) => (
          <TreeNode
            key={pathway.value}
            id={`pathway-${pathway.value}`}
            depth={0}
            label={pathway.label}
            description="A pathway describes the change journey your programme is on, and tailors which guidance, actions and resources you see."
            darkMode={darkMode}
          >
            {OVERARCHING_PHASES.map((phase) => {
              const phaseComponents = getComponentsByPhase(phase);
              if (!phaseComponents.length) {
                return null;
              }
              return (
                <TreeNode
                  key={phase}
                  id={`${pathway.value}-phase-${phase}`}
                  depth={1}
                  label={`Phase ${phase}: ${PHASE_NAMES[phase] || ''}`}
                  description="Phases run 1 to 5, from early readiness through to fully embedding the change."
                  darkMode={darkMode}
                >
                  {phaseComponents.map((component) => (
                    <TreeNode
                      key={component.id}
                      id={`${pathway.value}-${component.id}`}
                      depth={2}
                      label={component.label}
                      description={getComponentDescription(component.id)}
                      darkMode={darkMode}
                    >
                      {component.lenses.map((lens) => (
                        <TreeNode
                          key={lens}
                          id={`${pathway.value}-${component.id}-${lens}`}
                          depth={3}
                          label={lens}
                          description={getLensDescription(lens)}
                          darkMode={darkMode}
                        >
                          {READINESS_BANDS.map((band) => (
                            <TreeNode
                              key={band.score}
                              id={`${pathway.value}-${component.id}-${lens}-${band.score}`}
                              depth={4}
                              label={`${band.score} - ${band.label}`}
                              description={GENERIC_RUBRIC[band.score]}
                              accentColor={band.color}
                              darkMode={darkMode}
                            >
                              <TreeNode
                                id={`${pathway.value}-${component.id}-${lens}-${band.score}-actions`}
                                depth={5}
                                label="Actions"
                                description={ACTIONS_EXPLAINER}
                                darkMode={darkMode}
                              />
                            </TreeNode>
                          ))}
                        </TreeNode>
                      ))}
                    </TreeNode>
                  ))}
                </TreeNode>
              );
            })}
          </TreeNode>
        ))}
      </div>

      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        {ASSESSMENT_COMPONENTS.length} components across {OVERARCHING_PHASES.length} phases, each
        assessed through its own lenses on the same 0-5 readiness scale.
      </p>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onGetStarted}
          className="rounded-md bg-[#005eb8] px-5 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a]"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
