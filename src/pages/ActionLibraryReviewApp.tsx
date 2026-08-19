import benefitsRaw from '@data/component-actions/benefits-actions.json';
import capabilityRaw from '@data/component-actions/capability-and-confidence-actions.json';
import caseForChangeRaw from '@data/component-actions/case-for-change-actions.json';
import changeAdoptionRaw from '@data/component-actions/change-adoption-actions.json';
import changeImpactRaw from '@data/component-actions/change-impact-actions.json';
import changeNetworkRaw from '@data/component-actions/change-network-actions.json';
import cmReadinessRaw from '@data/component-actions/cm-readiness-and-planning-actions.json';
import orgMaturityRaw from '@data/component-actions/org-change-readiness-actions.json';
import processChangeRaw from '@data/component-actions/process-change-actions.json';
import reinforcementRaw from '@data/component-actions/reinforcement-actions.json';
import resistanceRaw from '@data/component-actions/resistance-management-actions.json';
import riskManagementRaw from '@data/component-actions/risk-management-actions.json';
import sponsorshipRaw from '@data/component-actions/senior-sponsorship-and-governance-actions.json';
import skillsLearningRaw from '@data/component-actions/skills-and-learning-actions.json';
import stakeholderRaw from '@data/component-actions/stakeholder-engagement-and-outcomes-actions.json';
import transferBauRaw from '@data/component-actions/transfer-to-bau-actions.json';
import visionRaw from '@data/component-actions/vision-actions.json';
import { ASSESSMENT_COMPONENTS } from '@data/components';
import { OVERARCHING_PHASES } from '@data/cst';
import { downloadFile } from '@lib/utils';
import { type ChangeEvent, type JSX, type ReactNode, useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'nhs-action-library-review';

const BAND_LABELS = ['Not Started', 'Emerging', 'Developing', 'Embedding', 'Adopted', 'Thriving'] as const;

/**
 * The bundled component-actions/*.json files write lenses with an ampersand ("Strategic
 * Direction & Leadership"), while src/data/components.ts (the real, authoritative lens list per
 * component, used to build this tool's group headings) spells them out with "and". Both forms
 * mean the same 5 lenses - normalise to the "and" form internally so grouping/matching against
 * components.ts works, and convert back to "&" on export to match the source files' convention.
 */
function normalizeLensName(value: string): string {
  return value.replace(/&/g, 'and').replace(/\s+/g, ' ').trim();
}

const LENS_EXPORT_FORM: Record<string, string> = {
  'Strategic Direction and Leadership': 'Strategic Direction & Leadership',
  'People Experience and Culture': 'People Experience & Culture',
  'Planning and Risk': 'Planning & Risk',
  'Process and Sustainment': 'Process & Sustainment',
  'Skills and Behaviour': 'Skills & Behaviour',
};

const LEVEL_OPTIONS = [0, 1, 2, 3, 4].map((band) => ({
  value: band,
  label: `Level ${band} · ${BAND_LABELS[band]} → ${BAND_LABELS[band + 1]}`,
}));

const RAW_SOURCES: Record<string, unknown> = {
  vision: visionRaw,
  case_for_change: caseForChangeRaw,
  sponsorship: sponsorshipRaw,
  change_network: changeNetworkRaw,
  benefits: benefitsRaw,
  change_impact: changeImpactRaw,
  risk_management: riskManagementRaw,
  cm_readiness: cmReadinessRaw,
  stakeholder: stakeholderRaw,
  resistance: resistanceRaw,
  skills_learning: skillsLearningRaw,
  capability: capabilityRaw,
  change_adoption: changeAdoptionRaw,
  process_change: processChangeRaw,
  reinforcement: reinforcementRaw,
  org_maturity: orgMaturityRaw,
  transfer_bau: transferBauRaw,
};

interface LibraryAction {
  id: string;
  description: string;
  band: number;
  lens: string;
  category: string;
  outcomeIds: string[];
}

interface ComponentActionsData {
  componentMetaId: string;
  componentName: string;
  outcomes: { id: string; name: string }[];
  actions: LibraryAction[];
}

interface ReviewState {
  reviewerName: string;
  reviewedComponentIds: string[];
  components: Record<string, ComponentActionsData>;
}

interface RawOutcome {
  id?: string;
  name?: string;
}

interface RawAction {
  id?: string;
  fromStatus?: string;
  toStatus?: string;
  lens?: string;
  category?: string;
  action?: string;
  outcomeIds?: string[];
  readinessScore?: number;
}

interface RawComponentFile {
  component?: { id?: string; name?: string };
  outcomes?: RawOutcome[];
  actions?: RawAction[];
}

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function bandFromStatus(status: string | undefined): number {
  const index = BAND_LABELS.indexOf((status || '') as (typeof BAND_LABELS)[number]);
  return index >= 0 ? Math.min(index, 4) : 0;
}

/**
 * Parses actions in the "raw" on-disk shape (fromStatus/toStatus/action/readinessScore) shared
 * by the bundled component-actions/*.json files, this tool's own export, and (therefore) anything
 * imported back in - there is only ever one external shape for action data, never the internal
 * description/band shape used for editing in React state.
 */
function parseActionsFromRaw(rawActions: unknown, componentId: string): LibraryAction[] {
  if (!Array.isArray(rawActions)) {
    return [];
  }
  return rawActions
    .filter((action): action is RawAction =>
      Boolean(action && typeof action === 'object' && (action as RawAction).action)
    )
    .map((action, index) => ({
      // Deliberately not action.id: skills-and-learning-actions.json has 8 duplicate ids
      // (SL_011-SL_018 each appear twice) - a dormant source-data bug the live app never hits
      // because it generates its own runtime ids from lens+band+position, but which would break
      // this tool's id-based "is this edited" / reorder tracking if trusted. A positional id
      // built from the original bundled order is always unique and stays stable across edits.
      id: `${componentId}-${index}`,
      description: action.action || '',
      band:
        typeof action.readinessScore === 'number' && Number.isFinite(action.readinessScore)
          ? Math.max(0, Math.min(4, Math.round(action.readinessScore)))
          : bandFromStatus(action.fromStatus),
      lens: normalizeLensName(action.lens || ''),
      category: action.category || '',
      outcomeIds: Array.isArray(action.outcomeIds) ? action.outcomeIds : [],
    }));
}

function buildDefaultComponentData(componentId: string): ComponentActionsData {
  const raw = (RAW_SOURCES[componentId] || {}) as RawComponentFile;
  const outcomes = (raw.outcomes || [])
    .filter((outcome): outcome is Required<RawOutcome> => Boolean(outcome?.id && outcome?.name))
    .map((outcome) => ({ id: outcome.id, name: outcome.name }));

  return {
    componentMetaId: raw.component?.id || componentId.toUpperCase(),
    componentName: raw.component?.name || componentId,
    outcomes,
    actions: parseActionsFromRaw(raw.actions, componentId),
  };
}

const DEFAULT_COMPONENTS: Record<string, ComponentActionsData> = ASSESSMENT_COMPONENTS.reduce(
  (map, component) => {
    map[component.id] = buildDefaultComponentData(component.id);
    return map;
  },
  {} as Record<string, ComponentActionsData>
);

function normaliseComponentData(raw: unknown, componentId: string): ComponentActionsData {
  const fallback = DEFAULT_COMPONENTS[componentId];
  if (!raw || typeof raw !== 'object') {
    return fallback;
  }
  const value = raw as { component?: { id?: string; name?: string }; outcomes?: RawOutcome[]; actions?: unknown };
  const actions = parseActionsFromRaw(value.actions, componentId);
  const outcomes = Array.isArray(value.outcomes)
    ? value.outcomes
        .filter((outcome): outcome is Required<RawOutcome> => Boolean(outcome?.id && outcome?.name))
        .map((outcome) => ({ id: outcome.id, name: outcome.name }))
    : [];

  return {
    componentMetaId: value.component?.id || fallback.componentMetaId,
    componentName: value.component?.name || fallback.componentName,
    outcomes: outcomes.length ? outcomes : fallback.outcomes,
    actions: actions.length ? actions : fallback.actions,
  };
}

function normaliseState(parsed: unknown): ReviewState {
  const value = (parsed && typeof parsed === 'object' ? parsed : {}) as Partial<ReviewState>;
  const rawComponents = (
    value.components && typeof value.components === 'object' ? value.components : {}
  ) as Record<string, unknown>;

  const components: Record<string, ComponentActionsData> = {};
  ASSESSMENT_COMPONENTS.forEach((component) => {
    components[component.id] = normaliseComponentData(rawComponents[component.id], component.id);
  });

  return {
    reviewerName: typeof value.reviewerName === 'string' ? value.reviewerName : '',
    reviewedComponentIds: Array.isArray(value.reviewedComponentIds)
      ? value.reviewedComponentIds.filter((id): id is string => typeof id === 'string')
      : [],
    components,
  };
}

function readStoredState(): ReviewState {
  if (typeof window === 'undefined') {
    return normaliseState(null);
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return normaliseState(null);
  }
  try {
    return normaliseState(JSON.parse(raw));
  } catch {
    return normaliseState(null);
  }
}

function moveActionInGroup(
  actions: LibraryAction[],
  actionId: string,
  direction: -1 | 1
): LibraryAction[] {
  const targetIndex = actions.findIndex((action) => action.id === actionId);
  if (targetIndex < 0) {
    return actions;
  }
  const target = actions[targetIndex];
  const groupIndices = actions
    .map((action, index) => ({ action, index }))
    .filter(({ action }) => action.band === target.band && action.lens === target.lens)
    .map(({ index }) => index);

  const posInGroup = groupIndices.indexOf(targetIndex);
  const swapPos = posInGroup + direction;
  if (swapPos < 0 || swapPos >= groupIndices.length) {
    return actions;
  }

  const otherIndex = groupIndices[swapPos];
  const next = [...actions];
  [next[targetIndex], next[otherIndex]] = [next[otherIndex], next[targetIndex]];
  return next;
}

function updateActionBand(actions: LibraryAction[], actionId: string, newBand: number): LibraryAction[] {
  const currentIndex = actions.findIndex((action) => action.id === actionId);
  if (currentIndex < 0) {
    return actions;
  }
  const updated = { ...actions[currentIndex], band: newBand };
  const without = [...actions.slice(0, currentIndex), ...actions.slice(currentIndex + 1)];

  let insertAt = without.length;
  for (let i = without.length - 1; i >= 0; i -= 1) {
    if (without[i].band === newBand && without[i].lens === updated.lens) {
      insertAt = i + 1;
      break;
    }
  }

  return [...without.slice(0, insertAt), updated, ...without.slice(insertAt)];
}

function toExportAction(action: LibraryAction): RawAction & { readinessScore: number } {
  return {
    id: action.id,
    fromStatus: BAND_LABELS[action.band],
    toStatus: BAND_LABELS[action.band + 1],
    lens: LENS_EXPORT_FORM[action.lens] || action.lens,
    category: action.category,
    action: action.description,
    outcomeIds: action.outcomeIds,
    readinessScore: action.band,
  };
}

/**
 * Serialises state into the same "raw" on-disk shape used everywhere else (bundled JSON files,
 * this tool's own export) - used both for localStorage persistence and for the real export, so
 * there is only ever one shape to parse back in via normaliseComponentData/parseActionsFromRaw.
 */
function buildExportPayload(state: ReviewState) {
  const components: Record<string, unknown> = {};
  ASSESSMENT_COMPONENTS.forEach((component) => {
    const data = state.components[component.id];
    components[component.id] = {
      component: { id: data.componentMetaId, name: data.componentName },
      outcomes: data.outcomes,
      actions: data.actions.map(toExportAction),
    };
  });
  return {
    exportedAt: new Date().toISOString(),
    reviewerName: state.reviewerName,
    reviewedComponentIds: state.reviewedComponentIds,
    components,
  };
}

function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}): JSX.Element {
  return (
    <section className="mb-3 overflow-hidden rounded-lg border border-slate-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 bg-white p-3.5 text-left transition-colors hover:bg-slate-50"
      >
        <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
        <span
          className={`shrink-0 text-lg font-bold text-slate-400 transition-transform ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {isOpen ? (
        <div className="border-t border-slate-100 bg-white p-4">{children}</div>
      ) : null}
    </section>
  );
}

function ActionRow({
  action,
  original,
  onUpdate,
  onMove,
  onReset,
  onRemove,
  canMoveUp,
  canMoveDown,
}: {
  action: LibraryAction;
  original: LibraryAction | undefined;
  onUpdate: (updates: Partial<Pick<LibraryAction, 'description' | 'band'>>) => void;
  onMove: (direction: -1 | 1) => void;
  onReset: () => void;
  onRemove: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}): JSX.Element {
  const isNew = !original;
  const isEdited =
    Boolean(original) &&
    (original!.description !== action.description || original!.band !== action.band);

  return (
    <div
      className={`rounded-md border p-3 ${
        isNew
          ? 'border-blue-300 bg-blue-50/60'
          : isEdited
            ? 'border-amber-300 bg-amber-50/60'
            : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex shrink-0 flex-col gap-1">
          <button
            type="button"
            disabled={!canMoveUp}
            onClick={() => onMove(-1)}
            aria-label="Move up"
            className="rounded border border-slate-300 bg-white px-1.5 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ▲
          </button>
          <button
            type="button"
            disabled={!canMoveDown}
            onClick={() => onMove(1)}
            aria-label="Move down"
            className="rounded border border-slate-300 bg-white px-1.5 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-30"
          >
            ▼
          </button>
        </div>

        <div className="flex-1 space-y-2">
          <textarea
            value={action.description}
            onChange={(event) => onUpdate({ description: event.target.value })}
            rows={2}
            placeholder={isNew ? 'Describe the new action...' : undefined}
            className="w-full rounded-md border border-slate-300 px-2.5 py-1.5 text-sm"
          />
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={action.band}
              onChange={(event) => onUpdate({ band: Number(event.target.value) })}
              className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700"
            >
              {LEVEL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500">
              {action.lens}
            </span>
            {action.category ? (
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500">
                {action.category}
              </span>
            ) : null}
            {isNew ? (
              <span className="rounded-full bg-blue-200 px-2 py-0.5 text-xs font-semibold text-blue-900">
                New
              </span>
            ) : isEdited ? (
              <span className="rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900">
                Edited
              </span>
            ) : null}
            {isEdited ? (
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-semibold text-slate-500 underline hover:text-slate-700"
              >
                Reset
              </button>
            ) : null}
            <button
              type="button"
              onClick={onRemove}
              className="ml-auto text-xs font-semibold text-red-600 underline hover:text-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ActionLibraryReviewApp(): JSX.Element {
  const [state, setState] = useState<ReviewState>(() => readStoredState());
  const [selectedComponentId, setSelectedComponentId] = useState<string>(ASSESSMENT_COMPONENTS[0].id);
  const [openBand, setOpenBand] = useState<number | null>(0);
  const [filterText, setFilterText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(buildExportPayload(state)));
  }, [state]);

  const componentsByPhase = useMemo(() => {
    const map: Record<number, typeof ASSESSMENT_COMPONENTS> = {};
    ASSESSMENT_COMPONENTS.forEach((component) => {
      map[component.phase] = map[component.phase] || [];
      map[component.phase].push(component);
    });
    return map;
  }, []);

  const editedCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    ASSESSMENT_COMPONENTS.forEach((component) => {
      const current = state.components[component.id];
      const original = DEFAULT_COMPONENTS[component.id];
      counts[component.id] = current.actions.filter((action) => {
        const originalAction = original.actions.find((candidate) => candidate.id === action.id);
        if (!originalAction) {
          return true; // newly added
        }
        return (
          originalAction.description !== action.description || originalAction.band !== action.band
        );
      }).length;
    });
    return counts;
  }, [state.components]);

  const selectedComponent = ASSESSMENT_COMPONENTS.find((c) => c.id === selectedComponentId)!;
  const selectedData = state.components[selectedComponentId];
  const originalData = DEFAULT_COMPONENTS[selectedComponentId];

  const updateComponentActions = (
    componentId: string,
    updater: (actions: LibraryAction[]) => LibraryAction[]
  ) => {
    setState((current) => ({
      ...current,
      components: {
        ...current.components,
        [componentId]: {
          ...current.components[componentId],
          actions: updater(current.components[componentId].actions),
        },
      },
    }));
  };

  const updateAction = (
    componentId: string,
    actionId: string,
    updates: Partial<Pick<LibraryAction, 'description' | 'band'>>
  ) => {
    updateComponentActions(componentId, (actions) => {
      if (updates.band !== undefined) {
        const rebanded = updateActionBand(actions, actionId, updates.band);
        if (updates.description === undefined) {
          return rebanded;
        }
        return rebanded.map((action) =>
          action.id === actionId ? { ...action, description: updates.description! } : action
        );
      }
      return actions.map((action) =>
        action.id === actionId ? { ...action, ...updates } : action
      );
    });
  };

  const moveAction = (componentId: string, actionId: string, direction: -1 | 1) => {
    updateComponentActions(componentId, (actions) => moveActionInGroup(actions, actionId, direction));
  };

  const resetAction = (componentId: string, actionId: string) => {
    const original = DEFAULT_COMPONENTS[componentId].actions.find((a) => a.id === actionId);
    if (!original) {
      return;
    }
    updateComponentActions(componentId, (actions) =>
      actions.map((action) =>
        action.id === actionId
          ? { ...action, description: original.description, band: original.band }
          : action
      )
    );
  };

  const addAction = (componentId: string, band: number, lens: string) => {
    updateComponentActions(componentId, (actions) => [
      ...actions,
      {
        id: `${componentId}-new-${createId()}`,
        description: '',
        band,
        lens,
        category: '',
        outcomeIds: [],
      },
    ]);
  };

  const removeAction = (componentId: string, actionId: string) => {
    updateComponentActions(componentId, (actions) =>
      actions.filter((action) => action.id !== actionId)
    );
  };

  const restoreAction = (componentId: string, actionId: string) => {
    const original = DEFAULT_COMPONENTS[componentId].actions.find((a) => a.id === actionId);
    if (!original) {
      return;
    }
    updateComponentActions(componentId, (actions) => [...actions, { ...original }]);
  };

  const toggleReviewed = (componentId: string) => {
    setState((current) => ({
      ...current,
      reviewedComponentIds: current.reviewedComponentIds.includes(componentId)
        ? current.reviewedComponentIds.filter((id) => id !== componentId)
        : [...current.reviewedComponentIds, componentId],
    }));
  };

  const handleExport = () => {
    const namePart = (state.reviewerName || 'export').trim().replace(/\s+/g, '_') || 'export';
    downloadFile(
      `action-library-review-${namePart}.json`,
      JSON.stringify(buildExportPayload(state), null, 2),
      'application/json'
    );
  };

  const handleImportClick = () => {
    setImportError(null);
    fileInputRef.current?.click();
  };

  const handleImportFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      setState(normaliseState(parsed));
      setImportError(null);
    } catch {
      setImportError('Unable to import this file. Please check it is a valid review export.');
    } finally {
      event.target.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleImportFile}
      />
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              window.location.hash = '#/';
            }}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            ← Back
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-800">Default Action Library Review</h1>
            <p className="text-xs text-slate-500">
              Review and refine the default change-management actions used across the tool
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            Your name
            <input
              value={state.reviewerName}
              onChange={(event) =>
                setState((current) => ({ ...current, reviewerName: event.target.value }))
              }
              placeholder="e.g. Sam"
              className="w-32 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
            />
          </label>
          <button
            type="button"
            onClick={handleImportClick}
            className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
          >
            Import JSON
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Export my review
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        {importError ? (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {importError}
          </div>
        ) : null}

        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
          <p className="font-semibold">How to use this</p>
          <p className="mt-1">
            Pick a component on the left. Each action can have its wording edited, be moved to a
            different level using the dropdown, or reordered with the ▲▼ buttons within its group.
            Use <strong>+ Add action</strong> at the bottom of a group to add a new one, or
            <strong> Remove</strong> on a row to take it out (removed actions can be restored further
            down if you change your mind). Your changes save automatically in this browser. Tick
            "Reviewed" once you're happy with a component, then use{' '}
            <strong>Export my review</strong> when you're done and send the downloaded file back.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-4">
            {OVERARCHING_PHASES.filter((phase) => componentsByPhase[phase]?.length).map((phase) => (
              <div key={phase}>
                <h3 className="mb-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Phase {phase}
                </h3>
                <div className="space-y-1">
                  {componentsByPhase[phase].map((component) => {
                    const isSelected = component.id === selectedComponentId;
                    const isReviewed = state.reviewedComponentIds.includes(component.id);
                    const editedCount = editedCounts[component.id] || 0;
                    return (
                      <button
                        key={component.id}
                        type="button"
                        onClick={() => {
                          setSelectedComponentId(component.id);
                          setFilterText('');
                        }}
                        className={`flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                          isSelected
                            ? 'border-[#005eb8] bg-blue-50 font-semibold text-[#005eb8]'
                            : 'border-transparent hover:bg-slate-100'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {isReviewed ? <span className="text-green-600">✓</span> : null}
                          {component.label}
                        </span>
                        {editedCount ? (
                          <span className="rounded-full bg-amber-200 px-1.5 py-0.5 text-xs font-bold text-amber-900">
                            {editedCount}
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </aside>

          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <div>
                <h2 className="text-lg font-bold text-slate-800">{selectedComponent.label}</h2>
                <p className="text-xs text-slate-500">
                  {selectedData.actions.length} actions across {selectedComponent.lenses.length} lens(es)
                </p>
              </div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={state.reviewedComponentIds.includes(selectedComponentId)}
                  onChange={() => toggleReviewed(selectedComponentId)}
                  className="h-4 w-4"
                />
                Reviewed
              </label>
            </div>

            <input
              value={filterText}
              onChange={(event) => setFilterText(event.target.value)}
              placeholder="Filter actions in this component..."
              className="mb-4 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />

            {LEVEL_OPTIONS.map((level) => {
              const actionsInBand = selectedData.actions.filter(
                (action) =>
                  action.band === level.value &&
                  (!filterText || action.description.toLowerCase().includes(filterText.toLowerCase()))
              );

              return (
                <AccordionSection
                  key={level.value}
                  title={`${level.label} (${actionsInBand.length})`}
                  isOpen={openBand === level.value}
                  onToggle={() => setOpenBand((current) => (current === level.value ? null : level.value))}
                >
                  <div className="space-y-5">
                    {selectedComponent.lenses.map((lens) => {
                      const groupActions = actionsInBand.filter((action) => action.lens === lens);
                      return (
                        <div key={lens}>
                          <h5 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                            {lens}
                          </h5>
                          <div className="space-y-2">
                            {groupActions.map((action, index) => (
                              <ActionRow
                                key={action.id}
                                action={action}
                                original={originalData.actions.find((a) => a.id === action.id)}
                                onUpdate={(updates) =>
                                  updateAction(selectedComponentId, action.id, updates)
                                }
                                onMove={(direction) => moveAction(selectedComponentId, action.id, direction)}
                                onReset={() => resetAction(selectedComponentId, action.id)}
                                onRemove={() => removeAction(selectedComponentId, action.id)}
                                canMoveUp={index > 0}
                                canMoveDown={index < groupActions.length - 1}
                              />
                            ))}
                            {!groupActions.length ? (
                              <p className="text-sm text-slate-400">No actions here yet.</p>
                            ) : null}
                          </div>
                          {!filterText ? (
                            <button
                              type="button"
                              onClick={() => addAction(selectedComponentId, level.value, lens)}
                              className="mt-2 text-xs font-semibold text-[#005eb8] hover:underline"
                            >
                              + Add action
                            </button>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </AccordionSection>
              );
            })}

            {(() => {
              const removedOriginals = originalData.actions.filter(
                (original) => !selectedData.actions.some((action) => action.id === original.id)
              );
              if (!removedOriginals.length) {
                return null;
              }
              return (
                <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">
                    Removed actions ({removedOriginals.length})
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Removed from this component. Restore one if you removed it by mistake.
                  </p>
                  <div className="mt-3 space-y-1.5">
                    {removedOriginals.map((original) => (
                      <div
                        key={original.id}
                        className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2"
                      >
                        <span className="text-sm text-slate-600">{original.description}</span>
                        <button
                          type="button"
                          onClick={() => restoreAction(selectedComponentId, original.id)}
                          className="shrink-0 text-xs font-semibold text-[#005eb8] hover:underline"
                        >
                          Restore
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </main>
    </div>
  );
}
