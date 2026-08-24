import React, { JSX, useCallback, useEffect, useMemo, useState } from 'react';
import {
  AdoptionStore,
  ComponentObjective,
  DraftEntry,
  DraftAction,
  deriveObjectiveStatus,
  type ActionTargetLink,
  type ObjectiveStatus,
} from '@lib/adoptionState';
import { ASSESSMENT_COMPONENTS, AssessmentComponent } from '@data/components';
import { PATHWAY_LABELS } from '@data/cst';
import {
  CORE_LINKS,
  type GuidanceLink,
  resolveGuidanceLinksForAdoptionComponent,
} from '@data/maturity-guidance-links';
import {
  ACTION_STATUS_BADGE_STYLES,
  ACTION_TYPES,
  UNIFIED_ACTION_STATUSES,
  deriveTemporalActionStatus,
  normalizeActionStatus,
} from '@lib/actionModel';
import { detectScoreAdvancementOpportunities } from '@lib/componentDerivedAutomation';
import { PHASE_NAMES } from '../../types/constants';
import componentDetailsText from '@data/component-descriptors/component-details.json?raw';
import { PageHelpButton, PageIntroModal, usePageIntroSeen } from '@components/onboarding/PageIntroModal';

type AssessmentPanelStore = AdoptionStore & {
  showMatrix?: Record<string, boolean>;
};

interface ActionEditorState {
  sourceComponentId: string;
  sourceLens: string;
  mode: 'create' | 'edit';
  actionId?: string;
  action: DraftAction;
  evidenceItems: EvidenceItem[];
  linkedObjectiveIds: string[];
  targetPickerComponentId: string;
  targetPickerLens: string;
}

interface ResolvedLensAction {
  sourceComponentId: string;
  sourceLens: string;
  action: DraftAction;
  isLinkedView: boolean;
}

interface ObjectiveViewerState {
  objectiveId: string;
}

export interface AssessmentPanelProps {
  store: AssessmentPanelStore;
  components: AssessmentComponent[];
  activeComponentId: string;
  getRubricText: (componentId: string, lens: string, score: number) => string;
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onComponentChange: (componentId: string) => void;
  onEntryUpdate: (componentId: string, lens: string, entry: DraftEntry) => void;
  onOpenLensInfo: (lensName: string) => void;
  onMatrixToggle: (key: string) => void;
  onActionRemove: (componentId: string, lens: string, actionId: string) => void;
  onObjectivesUpdate: (componentId: string, objectives: ComponentObjective[]) => void;
  hideGuidedWorkflow?: boolean;
  showAdditionalGuidanceLinks?: boolean;
  onHideGuidedWorkflow?: () => void;
  darkMode?: boolean;
  /** Deep-link into a specific action's edit modal, e.g. from the Daily Check-in "View" link. */
  focusAction?: { lens: string; actionId: string } | null;
  /** Called once the requested focusAction has been opened, so the caller can clear it. */
  onFocusActionHandled?: () => void;
}

const STATUS_OPTIONS = UNIFIED_ACTION_STATUSES.filter(
  (status) => status !== 'Overdue start' && status !== 'Overdue completion'
);
const SCORE_LEVELS = [0, 1, 2, 3, 4, 5];
const SCORE_LABELS: Record<number, string> = {
  0: 'Not Started',
  1: 'Emerging',
  2: 'Developing',
  3: 'Embedding',
  4: 'Adopted',
  5: 'Thriving',
};

const OBJECTIVE_STATUS_BADGE_STYLES: Record<ObjectiveStatus, string> = {
  'Not Started': 'bg-slate-100 text-slate-700 border-slate-200',
  'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
  Blocked: 'bg-amber-100 text-amber-800 border-amber-200',
  Completed: 'bg-green-100 text-green-800 border-green-200',
};

interface ComponentDetailPoint {
  title: string;
  body: string;
}

interface ComponentDetail {
  component: string;
  description: string;
  whatIsIt: string;
  userInsight: string;
  whyThisMatters: string;
  quickRealityCheck: string;
  whatGoodLooksLike: ComponentDetailPoint[];
  risksIfYouDont: ComponentDetailPoint[];
}

const COMPONENT_DETAILS: Record<string, ComponentDetail> = JSON.parse(componentDetailsText);

const MIN_GUIDANCE_LINK_LABEL_LENGTH = 4;

function buildGuidanceLinksByComponent(includeAdditional: boolean): Record<string, GuidanceLink[]> {
  return ASSESSMENT_COMPONENTS.reduce(
    (map, comp) => {
      const inputs = resolveGuidanceLinksForAdoptionComponent(
        'Default',
        comp.id,
        'inputs',
        undefined,
        includeAdditional
      );
      const deliverables = resolveGuidanceLinksForAdoptionComponent(
        'Default',
        comp.id,
        'deliverables',
        undefined,
        includeAdditional
      );
      const byLabel = new Map<string, GuidanceLink>();
      [...inputs, ...deliverables].forEach((link) => {
        if (link.label && link.label.trim().length >= MIN_GUIDANCE_LINK_LABEL_LENGTH) {
          byLabel.set(link.label.toLowerCase(), link);
        }
      });
      map[comp.id] = [...byLabel.values()];
      return map;
    },
    {} as Record<string, GuidanceLink[]>
  );
}

const GUIDANCE_LINKS_BY_COMPONENT_ALL = buildGuidanceLinksByComponent(true);
const GUIDANCE_LINKS_BY_COMPONENT_CORE = buildGuidanceLinksByComponent(false);

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * A label ending in a single "s" (not "ss") also matches its singular form, e.g. "User Surveys"
 * also matches "user survey" in body text. Labels ending in "ss" (e.g. "Celebrate Successes") are
 * left alone - naively stripping one "s" there produces a malformed word that could false-match
 * inside unrelated text (e.g. "Succes" inside "Successful").
 */
function buildLabelVariants(label: string): string[] {
  const variants = new Set([label]);
  if (/(?<!s)s$/i.test(label)) {
    variants.add(label.slice(0, -1));
  }
  return [...variants];
}

interface GuidanceLinkVariant {
  variant: string;
  link: GuidanceLink;
}

function renderActionTextWithGuidanceLinks(
  text: string,
  links: GuidanceLink[],
  darkMode?: boolean
): React.ReactNode {
  const safeText = text || 'Untitled action';
  if (links.length === 0) {
    return safeText;
  }

  const variantEntries: GuidanceLinkVariant[] = links.flatMap((link) =>
    buildLabelVariants(link.label).map((variant) => ({ variant, link }))
  );
  const sortedEntries = variantEntries.sort((a, b) => b.variant.length - a.variant.length);
  const pattern = sortedEntries.map((entry) => `\\b${escapeRegExp(entry.variant)}\\b`).join('|');
  const parts = safeText.split(new RegExp(`(${pattern})`, 'gi'));

  return parts.map((part, index) => {
    const matchEntry = sortedEntries.find(
      (entry) => entry.variant.toLowerCase() === part.toLowerCase()
    );
    if (!matchEntry) {
      return part;
    }
    const match = matchEntry.link;
    return (
      <a
        key={`${match.key}-${index}`}
        href={match.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        className={`underline decoration-dotted underline-offset-2 ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-blue-800'}`}
      >
        {part}
      </a>
    );
  });
}

function splitSentences(value: string): string[] {
  return value
    .split('\n')
    .map((part) => part.trim())
    .filter(Boolean);
}

const DEFAULT_PROJECT_NAME_PLACEHOLDER = 'Your Project';

function substituteProjectName(value: string, projectName: string): string {
  return value.replace(/\$projectName/g, projectName);
}

function resolveComponentDetail(detail: ComponentDetail, projectName: string): ComponentDetail {
  const resolveText = (value: string) => substituteProjectName(value, projectName);
  const resolvePoints = (points: ComponentDetailPoint[]) =>
    points.map((point) => ({ title: resolveText(point.title), body: resolveText(point.body) }));

  return {
    component: resolveText(detail.component),
    description: resolveText(detail.description),
    whatIsIt: resolveText(detail.whatIsIt),
    userInsight: resolveText(detail.userInsight),
    whyThisMatters: resolveText(detail.whyThisMatters),
    quickRealityCheck: resolveText(detail.quickRealityCheck),
    whatGoodLooksLike: resolvePoints(detail.whatGoodLooksLike),
    risksIfYouDont: resolvePoints(detail.risksIfYouDont),
  };
}

type OverviewTone = 'good' | 'risk';

const OVERVIEW_TONE_STYLES: Record<
  OverviewTone,
  { border: string; bg: string; text: string; titleText: string }
> = {
  good: {
    border: 'border-emerald-200',
    bg: 'bg-emerald-50 hover:bg-emerald-100',
    text: 'text-black',
    // titleText: 'text-black',
    titleText: 'text-emerald-700',
  },
  risk: {
    border: 'border-rose-200',
    bg: 'bg-rose-50 hover:bg-rose-100',
    text: 'text-black',
    titleText: 'text-rose-800',
  },
};

const OVERVIEW_TONE_STYLES_DARK: Record<
  OverviewTone,
  { border: string; bg: string; text: string; titleText: string }
> = {
  good: {
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10 hover:bg-emerald-500/15',
    text: 'text-emerald-200',
    titleText: 'text-slate-100',
  },
  risk: {
    border: 'border-rose-500/40',
    bg: 'bg-rose-500/10 hover:bg-rose-500/15',
    text: 'text-rose-200',
    titleText: 'text-slate-100',
  },
};

function ComponentOverviewPointList({
  points,
  tone,
  guidanceLinks,
  darkMode,
}: {
  points: ComponentDetailPoint[];
  tone: OverviewTone;
  guidanceLinks: GuidanceLink[];
  darkMode?: boolean;
}): JSX.Element {
  const styles = darkMode ? OVERVIEW_TONE_STYLES_DARK[tone] : OVERVIEW_TONE_STYLES[tone];
  return (
    <ul className="space-y-3">
      {points.map((point) => (
        <li key={point.title}>
          <p className={`text-xs font-semibold uppercase tracking-wide ${styles.titleText}`}>
            {point.title}
          </p>
          <p className={`mt-0.5 text-sm ${styles.text}`}>
            {renderActionTextWithGuidanceLinks(point.body, guidanceLinks, darkMode)}
          </p>
        </li>
      ))}
    </ul>
  );
}

function ComponentOverviewSubsection({
  title,
  points,
  tone,
  isOpen,
  onToggle,
  guidanceLinks,
  darkMode,
}: {
  title: string;
  points: ComponentDetailPoint[];
  tone: OverviewTone;
  isOpen: boolean;
  onToggle: () => void;
  guidanceLinks: GuidanceLink[];
  darkMode?: boolean;
}): JSX.Element {
  const styles = darkMode ? OVERVIEW_TONE_STYLES_DARK[tone] : OVERVIEW_TONE_STYLES[tone];
  return (
    <div className={`rounded-md border ${styles.border}`}>
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold transition-colors ${styles.bg} ${styles.text}`}
      >
        {title}
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className={`border-t px-3 py-3 ${styles.border}`}>
          <ComponentOverviewPointList
            points={points}
            tone={tone}
            guidanceLinks={guidanceLinks}
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  );
}

/** Rendered inside a modal (see ComponentOverviewModal) - no inline collapsible wrapper of its own. */
function ComponentOverviewContent({
  detail,
  furtherReadingUrl,
  guidanceLinks,
  darkMode,
}: {
  detail: ComponentDetail;
  furtherReadingUrl?: string;
  guidanceLinks: GuidanceLink[];
  darkMode?: boolean;
}): JSX.Element {
  const [showGoodPractice, setShowGoodPractice] = useState(true);
  const [showRisks, setShowRisks] = useState(true);

  return (
    <div>
      {detail.description && (
        <p className={`text-sm ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
          {detail.description}
        </p>
      )}
      <div className={`mt-4 space-y-4 ${detail.description ? 'border-t pt-4' : ''} ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
          {furtherReadingUrl && (
            <a
              href={furtherReadingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-semibold ${darkMode ? 'border-slate-600 bg-slate-800 text-blue-300 hover:bg-slate-700' : 'border-slate-300 bg-white text-[#005eb8] hover:bg-slate-50'}`}
            >
              Further Reading ↗
            </a>
          )}
          {detail.whatIsIt && (
            <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {renderActionTextWithGuidanceLinks(detail.whatIsIt, guidanceLinks, darkMode)}
            </p>
          )}
          {detail.userInsight && (
            <blockquote
              className={`border-l-2 pl-3 text-sm italic ${darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-300 text-slate-600'}`}
            >
              “{renderActionTextWithGuidanceLinks(detail.userInsight, guidanceLinks, darkMode)}”
            </blockquote>
          )}
          {detail.whyThisMatters && (
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Why this matters
              </p>
              <ul className={`mt-1 list-disc space-y-1 pl-5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {splitSentences(detail.whyThisMatters).map((sentence) => (
                  <li key={sentence}>
                    {renderActionTextWithGuidanceLinks(sentence, guidanceLinks, darkMode)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {detail.quickRealityCheck && (
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Quick reality check
              </p>
              <ul className={`mt-1 list-disc space-y-1 pl-5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {splitSentences(detail.quickRealityCheck).map((question) => (
                  <li key={question}>
                    {renderActionTextWithGuidanceLinks(question, guidanceLinks, darkMode)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(detail.whatGoodLooksLike.length > 0 || detail.risksIfYouDont.length > 0) && (
            <div className="space-y-2">
              {detail.whatGoodLooksLike.length > 0 && (
                <ComponentOverviewSubsection
                  title="What good looks like"
                  points={detail.whatGoodLooksLike}
                  tone="good"
                  isOpen={showGoodPractice}
                  onToggle={() => setShowGoodPractice((prev) => !prev)}
                  guidanceLinks={guidanceLinks}
                  darkMode={darkMode}
                />
              )}
              {detail.risksIfYouDont.length > 0 && (
                <ComponentOverviewSubsection
                  title="Risks if you don't"
                  points={detail.risksIfYouDont}
                  tone="risk"
                  isOpen={showRisks}
                  onToggle={() => setShowRisks((prev) => !prev)}
                  guidanceLinks={guidanceLinks}
                  darkMode={darkMode}
                />
              )}
            </div>
          )}
        </div>
    </div>
  );
}

function ComponentOverviewModal({
  open,
  onClose,
  detail,
  furtherReadingUrl,
  guidanceLinks,
  darkMode,
}: {
  open: boolean;
  onClose: () => void;
  detail: ComponentDetail;
  furtherReadingUrl?: string;
  guidanceLinks: GuidanceLink[];
  darkMode?: boolean;
}): JSX.Element | null {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border p-6 shadow-2xl`}
      >
        <div className="flex items-start justify-between gap-3">
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
          >
            Component overview
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close component overview"
            className={`shrink-0 rounded-md border px-2 py-1 text-sm ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}
          >
            ×
          </button>
        </div>
        <div className="mt-2">
          <ComponentOverviewContent
            detail={detail}
            furtherReadingUrl={furtherReadingUrl}
            guidanceLinks={guidanceLinks}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
}

const EVIDENCE_JSON_PREFIX = '__evidence_json__:';
const MAX_EMBEDDED_EVIDENCE_FILE_BYTES = 1024 * 1024;

function getActionOutcomeLinks(
  sourceComponentId: string,
  actionId: string,
  objectives: Record<string, ComponentObjective[]>
): ComponentObjective[] {
  return (objectives[sourceComponentId] || []).filter((objective) =>
    objective.linkedActions.some((link) => link.actionId === actionId)
  );
}

interface EvidenceItem {
  type: 'url' | 'file';
  label: string;
  href: string;
}

interface EvidenceRow {
  actionText: string;
  lens: string;
  item: EvidenceItem;
}

function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  if (/^www\./i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function parseEvidenceItems(evidenceValue: string): EvidenceItem[] {
  const raw = evidenceValue?.trim() || '';
  if (!raw) {
    return [];
  }

  if (raw.startsWith(EVIDENCE_JSON_PREFIX)) {
    try {
      const parsed = JSON.parse(raw.slice(EVIDENCE_JSON_PREFIX.length)) as EvidenceItem[];
      return Array.isArray(parsed)
        ? parsed
            .filter((item) => item && (item.type === 'url' || item.type === 'file'))
            .map((item) => ({
              type: item.type,
              label: String(item.label || '').trim(),
              href: String(item.href || '').trim(),
            }))
            .filter((item) => item.label || item.href)
        : [];
    } catch (_error) {
      return [];
    }
  }

  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const href = normalizeUrl(line);
      return {
        type: 'url' as const,
        label: line,
        href,
      };
    });
}

function serializeEvidenceItems(items: EvidenceItem[]): string {
  const normalized = items
    .map((item) => ({
      type: item.type,
      label: item.label.trim(),
      href: item.href.trim(),
    }))
    .filter((item) => item.label || item.href);

  if (!normalized.length) {
    return '';
  }

  return `${EVIDENCE_JSON_PREFIX}${JSON.stringify(normalized)}`;
}

function EvidenceLinksAndDocsSection({
  rows,
  isOpen,
  onToggle,
  darkMode,
}: {
  rows: EvidenceRow[];
  isOpen: boolean;
  onToggle: () => void;
  darkMode?: boolean;
}): JSX.Element {
  return (
    <div
      className={`mb-8 rounded-lg border ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <h3 className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Evidence Links and Docs
          </h3>
          <p className={`mt-0.5 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {rows.length
              ? `${rows.length} item${rows.length === 1 ? '' : 's'} attached across this component's actions.`
              : 'Everything attached as evidence across this component\'s actions, in one place.'}
          </p>
        </div>
        <span
          className={`shrink-0 text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {isOpen ? 'Hide −' : 'Show +'}
        </span>
      </button>
      {isOpen && (
        <div className={`border-t px-5 py-4 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
          {rows.length ? (
            <div className="overflow-x-auto rounded-md border border-slate-200">
              <table
                className={`min-w-full ${darkMode ? 'divide-slate-700 bg-slate-800' : 'divide-slate-200 bg-white'} divide-y`}
              >
                <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Action
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Lens
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Type
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Link / Doc
                    </th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? 'divide-slate-700' : 'divide-slate-100'} divide-y`}>
                  {rows.map((row, index) => (
                    <tr key={`${row.lens}:${index}`}>
                      <td
                        className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        {row.actionText}
                      </td>
                      <td
                        className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                      >
                        {row.lens}
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className={`${row.item.type === 'file' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`}
                        >
                          {row.item.type === 'file' ? 'File' : 'Link'}
                        </span>
                      </td>
                      <td
                        className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        {row.item.href ? (
                          <a
                            href={row.item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`underline ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-blue-800'}`}
                          >
                            {row.item.label || row.item.href}
                          </a>
                        ) : (
                          row.item.label || '—'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No evidence added yet. Attach links or documents to an action to see them here.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Unable to read file.'));
    reader.readAsDataURL(file);
  });
}

function InfoIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>
  );
}

function EyeIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 mr-1.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
      />
    </svg>
  );
}

function EyeOffIcon(): JSX.Element {
  return (
    <svg
      className="w-4 h-4 mr-1.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.964 9.964 0 012.042-3.368m2.16-1.989A9.962 9.962 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.05 10.05 0 01-4.132 5.411M15 12a3 3 0 00-3-3m0 0a2.99 2.99 0 00-2.13.88M3 3l18 18"
      />
    </svg>
  );
}

function HeaderInfoIcon(): JSX.Element {
  return (
    <svg
      className="w-5 h-5 ml-2 text-slate-400 group-hover:text-[#005eb8] shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>
  );
}

/** Bumps a lens's readiness score while every action at its current band is Completed and a higher band exists. */
function advanceScoreWhileActionsComplete(currentScore: number, actions: DraftAction[]): number {
  let score = currentScore;
  let advancement = detectScoreAdvancementOpportunities({ actions }, score);
  while (advancement) {
    score = advancement.nextScore;
    advancement = detectScoreAdvancementOpportunities({ actions }, score);
  }
  return score;
}

function createEmptyAction(phase: number, componentId: string, lens: string): DraftAction {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: '',
    actionType: undefined,
    owner: '',
    timescale: '',
    status: 'Planned',
    phase,
    startDate: '',
    dueDate: '',
    notes: '',
    evidence: '',
    linkedTargets: [{ componentId, lens }],
  };
}

function getNormalizedTargets(
  action: DraftAction,
  sourceComponentId: string,
  sourceLens: string
): ActionTargetLink[] {
  const targets = action.linkedTargets || [];
  if (!targets.length) {
    return [{ componentId: sourceComponentId, lens: sourceLens }];
  }

  const seen = new Set<string>();
  const deduped: ActionTargetLink[] = [];
  targets.forEach((target) => {
    const key = `${target.componentId}:${target.lens}`;
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    deduped.push({ componentId: target.componentId, lens: target.lens });
  });

  return deduped;
}

export function AssessmentPanel({
  store,
  components,
  activeComponentId,
  getRubricText,
  getEntry,
  onComponentChange,
  onEntryUpdate,
  onOpenLensInfo,
  onMatrixToggle,
  onActionRemove,
  onObjectivesUpdate,
  hideGuidedWorkflow = false,
  showAdditionalGuidanceLinks = true,
  onHideGuidedWorkflow,
  darkMode = false,
  focusAction,
  onFocusActionHandled,
}: AssessmentPanelProps): JSX.Element {
  const component = components.find((c) => c.id === activeComponentId) || components[0];
  const pathway = store.orgProfile?.cst?.pathway;
  const noOutcomesOrActionsMessage = (defaultMessage: string): string =>
    pathway && pathway !== 'pathway-1'
      ? `No outcomes or actions are defined for ${PATHWAY_LABELS[pathway]} yet.`
      : defaultMessage;
  const projectName = store.orgProfile?.projectName?.trim() || DEFAULT_PROJECT_NAME_PLACEHOLDER;
  const componentDetail = COMPONENT_DETAILS[component.id]?.whatIsIt
    ? resolveComponentDetail(COMPONENT_DETAILS[component.id], projectName)
    : undefined;
  const effectiveCoreLinks =
    store.orgProfile?.coreLinks && store.orgProfile.coreLinks.length > 0
      ? store.orgProfile.coreLinks
      : CORE_LINKS;
  const guidanceLinksByComponent = useMemo(() => {
    const base = showAdditionalGuidanceLinks
      ? GUIDANCE_LINKS_BY_COMPONENT_ALL
      : GUIDANCE_LINKS_BY_COMPONENT_CORE;
    const coreForToggle = showAdditionalGuidanceLinks
      ? effectiveCoreLinks
      : effectiveCoreLinks.filter((link) => link.type === 'core');
    const merged: Record<string, GuidanceLink[]> = {};
    Object.keys(base).forEach((componentId) => {
      const byLabel = new Map<string, GuidanceLink>();
      [...base[componentId], ...coreForToggle].forEach((link) => {
        if (link.label && link.label.trim().length >= MIN_GUIDANCE_LINK_LABEL_LENGTH) {
          byLabel.set(link.label.toLowerCase(), link);
        }
      });
      merged[componentId] = [...byLabel.values()];
    });
    return merged;
  }, [showAdditionalGuidanceLinks, effectiveCoreLinks]);
  const [actionEditor, setActionEditor] = useState<ActionEditorState | null>(null);
  const [objectiveViewer, setObjectiveViewer] = useState<ObjectiveViewerState | null>(null);
  const [guidedWorkflowDismissed, setGuidedWorkflowDismissed] = useState(false);
  const [showScoringSection, setShowScoringSection] = useState(true);
  const [showObjectivesSection, setShowObjectivesSection] = useState(true);
  const [showActionsSection, setShowActionsSection] = useState(false);
  const [showEvidenceSection, setShowEvidenceSection] = useState(false);
  const [showComponentOverviewModal, setShowComponentOverviewModal] = useState(false);
  const pageIntro = usePageIntroSeen('assessment');
  const [expandedLensActions, setExpandedLensActions] = useState<Record<string, boolean>>({});
  const [lensActionTypeFilters, setLensActionTypeFilters] = useState<Record<string, string>>({});
  const [lensActionOwnerFilters, setLensActionOwnerFilters] = useState<Record<string, string>>(
    {}
  );
  const objectives = store.objectives?.[component.id] || [];
  const teamMembers = store.orgProfile.teamMembers || [];

  const componentActionsByLens = useMemo(() => {
    const map: Record<string, DraftAction[]> = {};
    component.lenses.forEach((lens) => {
      map[lens] = getEntry(component.id, lens).actions || [];
    });
    return map;
  }, [component.id, component.lenses, getEntry]);

  /** Actions filtered to each lens's current readiness level, matching what the Plan lens actions table shows. */
  const currentLevelActionsByLens = useMemo(() => {
    const map: Record<string, DraftAction[]> = {};
    component.lenses.forEach((lens) => {
      const entry = getEntry(component.id, lens);
      const actions = componentActionsByLens[lens] || [];
      const hasNotStartedActions = actions.some((action) => action.readinessScore === 0);
      const effectiveCurrentScore = entry.score === 0 && !hasNotStartedActions ? 1 : entry.score;
      map[lens] = actions.filter(
        (action) => (action.readinessScore ?? effectiveCurrentScore) === effectiveCurrentScore
      );
    });
    return map;
  }, [component.id, component.lenses, getEntry, componentActionsByLens]);

  const totalLensActions = useMemo(
    () =>
      component.lenses.reduce(
        (sum, lens) => sum + (currentLevelActionsByLens[lens] || []).length,
        0
      ),
    [component.lenses, currentLevelActionsByLens]
  );

  const completedLensActions = useMemo(
    () =>
      component.lenses.reduce(
        (sum, lens) =>
          sum +
          (currentLevelActionsByLens[lens] || []).filter(
            (action) => normalizeActionStatus(action.status) === 'Completed'
          ).length,
        0
      ),
    [component.lenses, currentLevelActionsByLens]
  );

  const hasAnyScoreForComponent = useMemo(
    () => component.lenses.some((lens) => Number(getEntry(component.id, lens).score || 0) > 0),
    [component.id, component.lenses, getEntry]
  );

  const actionsByTarget = useMemo(() => {
    const map: Record<string, ResolvedLensAction[]> = {};

    Object.keys(store.currentDraft).forEach((sourceComponentId) => {
      Object.keys(store.currentDraft[sourceComponentId] || {}).forEach((sourceLens) => {
        const sourceEntry = store.currentDraft[sourceComponentId][sourceLens];
        (sourceEntry.actions || []).forEach((action) => {
          const targets = getNormalizedTargets(action, sourceComponentId, sourceLens);
          targets.forEach((target) => {
            const key = `${target.componentId}:${target.lens}`;
            if (!map[key]) {
              map[key] = [];
            }
            map[key].push({
              sourceComponentId,
              sourceLens,
              action,
              isLinkedView: !(
                target.componentId === sourceComponentId && target.lens === sourceLens
              ),
            });
          });
        });
      });
    });

    return map;
  }, [store.currentDraft]);

  const componentById = useMemo(() => {
    const map: Record<string, AssessmentComponent> = {};
    components.forEach((item) => {
      map[item.id] = item;
    });
    return map;
  }, [components]);

  const evidenceRows = useMemo(() => {
    const rows: EvidenceRow[] = [];
    component.lenses.forEach((lens) => {
      const resolvedActions = actionsByTarget[`${component.id}:${lens}`] || [];
      resolvedActions
        .filter((resolvedAction) => !resolvedAction.isLinkedView)
        .forEach((resolvedAction) => {
          parseEvidenceItems(resolvedAction.action.evidence || '').forEach((item) => {
            rows.push({ actionText: resolvedAction.action.text || 'Untitled action', lens, item });
          });
        });
    });
    return rows;
  }, [actionsByTarget, component.id, component.lenses]);

  const componentJustification = useMemo(() => {
    const firstLens = component.lenses[0];
    return firstLens ? getEntry(component.id, firstLens).justification : '';
  }, [component.id, component.lenses, getEntry]);

  const actionEditorSourceLabel = useMemo(() => {
    if (!actionEditor) {
      return component.label;
    }
    return (
      components.find((item) => item.id === actionEditor.sourceComponentId)?.label ||
      actionEditor.sourceComponentId
    );
  }, [actionEditor, component.label, components]);

  const actionEditorTitleSummary = useMemo(() => {
    if (!actionEditor?.action.text?.trim()) {
      return 'New action';
    }
    const compact = actionEditor.action.text.trim().replace(/\s+/g, ' ');
    return compact.length > 70 ? `${compact.slice(0, 70)}...` : compact;
  }, [actionEditor]);

  const activeObjective = useMemo(
    () => objectives.find((objective) => objective.id === objectiveViewer?.objectiveId) || null,
    [objectiveViewer?.objectiveId, objectives]
  );

  const activeObjectiveStatus = useMemo(() => {
    if (!activeObjective) {
      return null;
    }
    return deriveObjectiveStatus(activeObjective, componentActionsByLens);
  }, [activeObjective, componentActionsByLens]);

  const activeObjectiveLinkedActions = useMemo(() => {
    if (!activeObjective) {
      return [];
    }

    return activeObjective.linkedActions.map((link) => {
      const action = (componentActionsByLens[link.lens] || []).find(
        (candidate) => candidate.id === link.actionId
      );
      const status = action ? normalizeActionStatus(action.status) : null;
      const temporalStatus = action
        ? deriveTemporalActionStatus(action.status, action.startDate, action.dueDate)
        : null;
      return {
        lens: link.lens,
        action,
        status,
        temporalStatus,
      };
    });
  }, [activeObjective, componentActionsByLens]);

  const handleComponentSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onComponentChange(e.target.value);
    },
    [onComponentChange]
  );

  const handleScoreChange = useCallback(
    (lens: string, newScore: number) => {
      const entry = getEntry(component.id, lens);
      onEntryUpdate(component.id, lens, {
        ...entry,
        score: newScore,
      });
    },
    [component.id, getEntry, onEntryUpdate]
  );

  const handleComponentJustificationChange = useCallback(
    (value: string) => {
      component.lenses.forEach((lens) => {
        const entry = getEntry(component.id, lens);
        onEntryUpdate(component.id, lens, {
          ...entry,
          justification: value,
        });
      });
    },
    [component.id, component.lenses, getEntry, onEntryUpdate]
  );

  const openCreateActionModal = useCallback(
    (lens: string, seedText?: string) => {
      const seeded = createEmptyAction(component.phase, component.id, lens);
      if (seedText) {
        seeded.text = seedText;
      }
      setActionEditor({
        sourceComponentId: component.id,
        sourceLens: lens,
        mode: 'create',
        action: seeded,
        evidenceItems: parseEvidenceItems(seeded.evidence || ''),
        linkedObjectiveIds: [],
        targetPickerComponentId: component.id,
        targetPickerLens: lens,
      });
    },
    [component.id, component.phase]
  );

  const openEditActionModal = useCallback(
    (sourceComponentId: string, sourceLens: string, action: DraftAction) => {
      const normalizedTargets = getNormalizedTargets(action, sourceComponentId, sourceLens);
      const firstTarget = normalizedTargets[0] || {
        componentId: sourceComponentId,
        lens: sourceLens,
      };
      const linkedObjectiveIds = (store.objectives?.[sourceComponentId] || [])
        .filter((objective) => objective.linkedActions.some((link) => link.actionId === action.id))
        .map((objective) => objective.id);

      setActionEditor({
        sourceComponentId,
        sourceLens,
        mode: 'edit',
        actionId: action.id,
        action: {
          ...action,
          linkedTargets: normalizedTargets,
          notes: action.notes || '',
          evidence: action.evidence || '',
          startDate: action.startDate || '',
          dueDate: action.dueDate || '',
        },
        evidenceItems: parseEvidenceItems(action.evidence || ''),
        linkedObjectiveIds,
        targetPickerComponentId: firstTarget.componentId,
        targetPickerLens: firstTarget.lens,
      });
    },
    [store.objectives]
  );

  useEffect(() => {
    if (!focusAction) {
      return;
    }
    const entry = getEntry(component.id, focusAction.lens);
    const action = entry.actions.find((candidate) => candidate.id === focusAction.actionId);
    if (!action) {
      onFocusActionHandled?.();
      return;
    }
    setShowActionsSection(true);
    openEditActionModal(component.id, focusAction.lens, action);
    onFocusActionHandled?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusAction, component.id]);

  const closeActionModal = () => {
    setActionEditor(null);
  };

  const saveActionModal = () => {
    if (!actionEditor) {
      return;
    }

    if (!actionEditor.action.text.trim()) {
      window.alert('Action description is required.');
      return;
    }

    const normalizedAction: DraftAction = {
      ...actionEditor.action,
      evidence: serializeEvidenceItems(actionEditor.evidenceItems),
      status: normalizeActionStatus(actionEditor.action.status),
      linkedTargets: getNormalizedTargets(
        actionEditor.action,
        actionEditor.sourceComponentId,
        actionEditor.sourceLens
      ),
      timescale:
        actionEditor.action.dueDate ||
        actionEditor.action.startDate ||
        actionEditor.action.timescale,
    };

    const entry = getEntry(actionEditor.sourceComponentId, actionEditor.sourceLens);
    const nextActions =
      actionEditor.mode === 'create'
        ? [...entry.actions, normalizedAction]
        : entry.actions.map((item) =>
            item.id === actionEditor.actionId ? normalizedAction : item
          );

    onEntryUpdate(actionEditor.sourceComponentId, actionEditor.sourceLens, {
      ...entry,
      actions: nextActions,
      score: advanceScoreWhileActionsComplete(entry.score, nextActions),
    });

    const selectedObjectiveIds = new Set(actionEditor.linkedObjectiveIds);
    const sourceObjectives = store.objectives?.[actionEditor.sourceComponentId] || [];
    const nextObjectives = sourceObjectives.map((objective) => {
      const linksWithoutThisAction = objective.linkedActions.filter(
        (link) => !(link.lens === actionEditor.sourceLens && link.actionId === normalizedAction.id)
      );

      if (selectedObjectiveIds.has(objective.id)) {
        return {
          ...objective,
          linkedActions: [
            ...linksWithoutThisAction,
            { lens: actionEditor.sourceLens, actionId: normalizedAction.id },
          ],
        };
      }

      return {
        ...objective,
        linkedActions: linksWithoutThisAction,
      };
    });

    onObjectivesUpdate(actionEditor.sourceComponentId, nextObjectives);

    closeActionModal();
  };

  const updateActionEditor = (updates: Partial<DraftAction>) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }
      const next = {
        ...current,
        action: {
          ...current.action,
          ...updates,
        },
      };
      next.action.status = normalizeActionStatus(next.action.status);
      return next;
    });
  };

  const updateTargetPicker = (componentId: string, lens: string) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }
      return {
        ...current,
        targetPickerComponentId: componentId,
        targetPickerLens: lens,
      };
    });
  };

  const addTargetToActionEditor = () => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }

      const componentOption = componentById[current.targetPickerComponentId] || component;
      const lensOption = componentOption.lenses.includes(current.targetPickerLens)
        ? current.targetPickerLens
        : componentOption.lenses[0];

      if (!lensOption) {
        return current;
      }

      const existingTargets = getNormalizedTargets(
        current.action,
        current.sourceComponentId,
        current.sourceLens
      );

      if (
        existingTargets.some(
          (target) => target.componentId === componentOption.id && target.lens === lensOption
        )
      ) {
        return current;
      }

      return {
        ...current,
        action: {
          ...current.action,
          linkedTargets: [
            ...existingTargets,
            { componentId: componentOption.id, lens: lensOption },
          ],
        },
      };
    });
  };

  const removeTargetFromActionEditor = (componentId: string, lens: string) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }

      const existingTargets = getNormalizedTargets(
        current.action,
        current.sourceComponentId,
        current.sourceLens
      );
      const nextTargets = existingTargets.filter(
        (target) => !(target.componentId === componentId && target.lens === lens)
      );

      return {
        ...current,
        action: {
          ...current.action,
          linkedTargets: nextTargets,
        },
      };
    });
  };

  const toggleObjectiveLinkInActionEditor = (objectiveId: string) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }

      const selected = new Set(current.linkedObjectiveIds);
      if (selected.has(objectiveId)) {
        selected.delete(objectiveId);
      } else {
        selected.add(objectiveId);
      }

      return {
        ...current,
        linkedObjectiveIds: Array.from(selected),
      };
    });
  };

  const updateEvidenceItemsInActionEditor = (nextItems: EvidenceItem[]) => {
    setActionEditor((current) => {
      if (!current) {
        return current;
      }
      return {
        ...current,
        evidenceItems: nextItems,
      };
    });
  };

  const addEvidenceLinkRow = () => {
    if (!actionEditor) {
      return;
    }
    const existing = actionEditor.evidenceItems;
    updateEvidenceItemsInActionEditor([...existing, { type: 'url', label: '', href: '' }]);
  };

  const updateEvidenceItem = (index: number, field: 'label' | 'href', value: string) => {
    if (!actionEditor) {
      return;
    }
    const existing = actionEditor.evidenceItems;
    if (!existing[index]) {
      return;
    }
    const next = [...existing];
    if (field === 'href') {
      next[index] = { ...next[index], href: normalizeUrl(value) };
    } else {
      next[index] = { ...next[index], label: value };
    }
    updateEvidenceItemsInActionEditor(next);
  };

  const removeEvidenceItem = (index: number) => {
    if (!actionEditor) {
      return;
    }
    const existing = actionEditor.evidenceItems;
    updateEvidenceItemsInActionEditor(existing.filter((_, itemIndex) => itemIndex !== index));
  };

  const uploadEvidenceFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!actionEditor) {
      return;
    }

    const fileList = event.target.files;
    if (!fileList?.length) {
      return;
    }

    const existing = actionEditor.evidenceItems;
    const next = [...existing];

    for (const file of Array.from(fileList)) {
      if (file.size > MAX_EMBEDDED_EVIDENCE_FILE_BYTES) {
        window.alert(`"${file.name}" is larger than 1MB. Please attach a URL instead.`);
        continue;
      }

      try {
        const dataUrl = await readFileAsDataUrl(file);
        next.push({
          type: 'file',
          label: file.name,
          href: dataUrl,
        });
      } catch (_error) {
        window.alert(`Unable to upload "${file.name}".`);
      }
    }

    updateEvidenceItemsInActionEditor(next);
    event.target.value = '';
  };

  const openObjectiveActionInEditor = (lens: string, action?: DraftAction) => {
    if (!action) {
      return;
    }
    setObjectiveViewer(null);
    openEditActionModal(component.id, lens, action);
  };

  const scrollToSection = (
    sectionId: 'assessment-scoring' | 'assessment-objectives' | 'assessment-actions'
  ) => {
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2
            className={`text-3xl font-bold flex items-center ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
          >
            {component.label}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-4 border border-blue-200">
              {PHASE_NAMES[component.phase] || `Phase ${component.phase}`}
            </span>
            <span className="ml-2">
              <PageHelpButton onClick={pageIntro.reopen} darkMode={darkMode} />
            </span>
          </h2>
          <p className={`mt-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
            Assess readiness at lens level. Change Component justification, outcomes, and actions are
            tracked below.
          </p>
          {componentDetail && (
            <button
              type="button"
              onClick={() => setShowComponentOverviewModal(true)}
              className={`mt-2 text-sm font-semibold underline ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-[#005eb8] hover:text-blue-800'}`}
            >
              What is this? +
            </button>
          )}
        </div>
      </div>

      {componentDetail && (
        <ComponentOverviewModal
          open={showComponentOverviewModal}
          onClose={() => setShowComponentOverviewModal(false)}
          detail={componentDetail}
          furtherReadingUrl={store.orgProfile?.componentFurtherReading?.[component.id]}
          guidanceLinks={guidanceLinksByComponent[component.id] || []}
          darkMode={darkMode}
        />
      )}

      {!hideGuidedWorkflow && !guidedWorkflowDismissed && (
        <div
          className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} mb-6 rounded-lg border p-4`}
        >
          <div className="flex items-start justify-between gap-2">
            <p
              className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Guided workflow
            </p>
            <button
              type="button"
              onClick={() => setGuidedWorkflowDismissed(true)}
              aria-label="Dismiss guided workflow"
              className={`text-xs font-semibold leading-none ${darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-400 hover:text-slate-700'}`}
            >
              ×
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => scrollToSection('assessment-scoring')}
              className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-1.5 text-xs font-semibold`}
            >
              1. Justify
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('assessment-objectives')}
              className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-1.5 text-xs font-semibold`}
            >
              2. Review outcomes
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('assessment-actions')}
              className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-1.5 text-xs font-semibold`}
            >
              3. Plan lens actions
            </button>
          </div>
          {onHideGuidedWorkflow && (
            <button
              type="button"
              onClick={onHideGuidedWorkflow}
              className={`mt-3 text-xs underline ${darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Don't show this again
            </button>
          )}
        </div>
      )}
{/* 
      <div
        className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${darkMode ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-200' : 'border-emerald-200 bg-emerald-50 text-emerald-800'}`}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
        Auto-save is on for scoring and component notes.
      </div> */}

      <div
        id="assessment-scoring"
        className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mb-8 rounded-lg border p-5`}
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            {hasAnyScoreForComponent
              ? 'Step 1: Justify'
              : 'Step 1: Justification of what is currently known'}
          </h3>
          <button
            type="button"
            onClick={() => setShowScoringSection((current) => !current)}
            className={`${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-2.5 py-1 text-xs font-semibold`}
          >
            {showScoringSection ? 'Hide' : 'Show'}
          </button>
        </div>
        {showScoringSection ? (
          <>
            <label
              className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
            >
              Change Component Justification
            </label>
            <p className={`text-xs mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              Explain what is currently known, what evidence supports that view, and where the
              biggest gap sits. Example: "Sponsorship is visible only in two services; there is no
              monthly steering update yet; next step is to agree a trust-wide sponsor cadence."
            </p>
            <textarea
              value={componentJustification}
              onChange={(event) => handleComponentJustificationChange(event.target.value)}
              className={`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-24 p-2 border ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
              placeholder="Record what is currently known for this change component, the evidence behind it, and the key improvement needed next."
            />
          </>
        ) : null}
      </div>

      <div
        id="assessment-objectives"
        className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mb-8 rounded-lg border p-5`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            Step 2: Review outcomes
          </h3>
          <button
            type="button"
            onClick={() => setShowObjectivesSection((current) => !current)}
            className={`${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-2.5 py-1 text-xs font-semibold`}
          >
            {showObjectivesSection ? 'Hide' : 'Show'}
          </button>
        </div>
        <p className={`text-xs mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
          Owned by this component as a whole. Status is derived automatically from the lens actions
          assigned to each outcome below and cannot be set manually.
        </p>

        {showObjectivesSection ? (
          objectives.length ? (
            <div className="overflow-x-auto rounded-md border border-slate-200">
              <table
                className={`min-w-full ${darkMode ? 'divide-slate-700 bg-slate-800' : 'divide-slate-200 bg-white'} divide-y`}
              >
                <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Description
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Status
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Linked Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? 'divide-slate-700' : 'divide-slate-100'} divide-y`}>
                  {objectives.map((objective) => {
                    const status = deriveObjectiveStatus(objective, componentActionsByLens);
                    const badgeStyle = OBJECTIVE_STATUS_BADGE_STYLES[status];
                    const openViewer = () => setObjectiveViewer({ objectiveId: objective.id });
                    return (
                      <tr
                        key={objective.id}
                        onClick={openViewer}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            openViewer();
                          }
                        }}
                        tabIndex={0}
                        className={`${darkMode ? 'hover:bg-slate-700 focus-visible:bg-slate-700' : 'hover:bg-slate-50 focus-visible:bg-slate-50'} cursor-pointer focus:outline-none`}
                      >
                        <td
                          className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                        >
                          {objective.text || 'Untitled outcome'}
                        </td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${badgeStyle}`}
                          >
                            {status}
                          </span>
                        </td>
                        <td
                          className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                        >
                          {objective.linkedActions.length
                            ? `${objective.linkedActions.length} action(s)`
                            : 'None assigned'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-slate-500">{noOutcomesOrActionsMessage('No outcomes yet.')}</p>
          )
        ) : null}
      </div>

      <div
        id="assessment-actions"
        className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mb-8 rounded-lg border p-5`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3
              className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Step 3: Plan lens actions
            </h3>
            <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Track delivery actions for each lens and link them to outcomes and affected component
              lenses.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${darkMode ? 'bg-slate-800 border-slate-600 text-slate-100' : 'bg-white border-slate-300 text-slate-700'} rounded-full border px-2 py-1 text-xs`}
            >
              {completedLensActions}/{totalLensActions} completed
            </span>
            <button
              type="button"
              onClick={() => setShowActionsSection((current) => !current)}
              className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-2.5 py-1 text-xs font-semibold`}
            >
              {showActionsSection ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </div>

      {showActionsSection ? (
        <div className="space-y-8 mb-8">
          {component.lenses.map((lens) => {
            const entry = getEntry(component.id, lens);
            const targetKey = `${component.id}:${lens}`;
            const actionsForLens = actionsByTarget[targetKey] || [];
            const hasNotStartedActions = actionsForLens.some(
              (resolvedAction) => resolvedAction.action.readinessScore === 0
            );
            const effectiveCurrentScore =
              entry.score === 0 && !hasNotStartedActions ? 1 : entry.score;
            const showMatrix = !!store.showMatrix?.[`${component.id}:${lens}`];
            const lensActionTypeFilter = lensActionTypeFilters[targetKey] || 'all';
            const lensActionOwnerFilter = lensActionOwnerFilters[targetKey] || 'all';
            const lensActionTypeOptions = Array.from(
              new Set(
                actionsForLens
                  .map((resolvedAction) => resolvedAction.action.actionType)
                  .filter(
                    (actionType): actionType is Exclude<DraftAction['actionType'], undefined> =>
                      actionType !== undefined
                  )
              )
            ).sort((left, right) => String(left).localeCompare(String(right)));
            const lensActionOwnerOptions = Array.from(
              new Set([
                ...teamMembers.map((member) => member.name),
                ...actionsForLens
                  .map((resolvedAction) => resolvedAction.action.owner)
                  .filter((owner): owner is string => Boolean(owner)),
              ])
            ).sort((left, right) => left.localeCompare(right));
            const lensActions = [...actionsForLens]
              .filter(
                (resolvedAction) => {
                  const actionReadinessScore =
                    resolvedAction.action.readinessScore !== undefined
                      ? resolvedAction.action.readinessScore
                      : effectiveCurrentScore;

                  if (actionReadinessScore !== effectiveCurrentScore) {
                    return false;
                  }

                  if (
                    lensActionTypeFilter !== 'all' &&
                    (resolvedAction.action.actionType || '') !== lensActionTypeFilter
                  ) {
                    return false;
                  }

                  return (
                    lensActionOwnerFilter === 'all' ||
                    (resolvedAction.action.owner || '') === lensActionOwnerFilter
                  );
                }
              )
              .sort((left, right) => {
                const leftCompleted = normalizeActionStatus(left.action.status) === 'Completed';
                const rightCompleted = normalizeActionStatus(right.action.status) === 'Completed';
                if (leftCompleted !== rightCompleted) {
                  return leftCompleted ? 1 : -1;
                }

                const leftDue = left.action.dueDate
                  ? new Date(left.action.dueDate).getTime()
                  : Number.POSITIVE_INFINITY;
                const rightDue = right.action.dueDate
                  ? new Date(right.action.dueDate).getTime()
                  : Number.POSITIVE_INFINITY;
                return leftDue - rightDue;
              });
            const borderColor =
              entry.score >= component.target ? '#22c55e' : entry.score > 0 ? '#f59e0b' : '#cbd5e1';

            return (
              <div
                key={lens}
                className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-sm border overflow-hidden`}
              >
                <div
                  className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'} p-6 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4`}
                >
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      Lens
                    </span>
                    <button
                      onClick={() => onOpenLensInfo(lens)}
                      className={`flex items-center text-2xl font-semibold transition-colors group text-left ${darkMode ? 'text-slate-100 hover:text-[#63b3ff]' : 'text-slate-800 hover:text-[#005eb8]'}`}
                      title="View Lens Information"
                    >
                      {lens}
                      <HeaderInfoIcon />
                    </button>
                  </div>
                  <div className="shrink-0 w-full md:w-64">
                    <label
                      className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                    >
                      Readiness Score
                    </label>
                    <select
                      value={entry.score}
                      onChange={(e) => handleScoreChange(lens, Number(e.target.value))}
                      className={`w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 text-sm font-medium border ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                      style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}
                    >
                      {SCORE_LEVELS.map((level) => (
                        <option key={level} value={level}>
                          {level} - {SCORE_LABELS[level]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* <div
                  className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-blue-50/50 border-slate-100'} px-6 py-4 border-b text-sm`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex items-start flex-1">
                      <InfoIcon />
                      <p
                        className={`whitespace-pre-line ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                      >
                        <strong className={darkMode ? 'text-slate-100' : 'text-slate-700'}>
                          {entry.score === 0 ? 'Not Started' : `Level ${entry.score}`}:
                        </strong>
                        {` ${getRubricText(component.id, lens, entry.score)}`}
                      </p>
                    </div>
                    <button
                      onClick={() => onMatrixToggle(`${component.id}:${lens}`)}
                      className={`${darkMode ? 'bg-slate-800 border-slate-600 text-[#63b3ff] hover:text-[#90cdf4]' : 'bg-white border-blue-200 text-[#005eb8] hover:text-blue-800'} shrink-0 text-xs font-semibold flex items-center px-3 py-1.5 border rounded shadow-sm transition-colors`}
                    >
                      {showMatrix ? <EyeOffIcon /> : <EyeIcon />}
                      {showMatrix ? 'Hide Full Guidance' : 'View Full Guidance'}
                    </button>
                  </div>
                </div> */}

                {showMatrix && (
                  <div
                    className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'} px-6 py-5 border-b`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                      {SCORE_LEVELS.map((level) => {
                        const bgColors: Record<number, string> = {
                          0: 'bg-white',
                          1: 'bg-rose-50',
                          2: 'bg-orange-50',
                          3: 'bg-yellow-50',
                          4: 'bg-green-50',
                          5: 'bg-blue-50',
                        };
                        const baseBg = bgColors[level] || 'bg-white';

                        return (
                          <button
                            key={level}
                            onClick={() => handleScoreChange(lens, level)}
                            className={`p-4 rounded-lg border shadow-sm text-left transition-colors h-full flex flex-col items-start justify-start ${
                              entry.score === level
                                ? `${baseBg} border-[#005eb8] ring-1 ring-[#005eb8]`
                                : `${baseBg} border-slate-200 hover:border-blue-300`
                            }`}
                          >
                            <div
                              className={`text-sm font-bold mb-2 pb-2 border-b w-full ${
                                entry.score === level
                                  ? 'text-[#005eb8] border-blue-200'
                                  : 'text-slate-700 border-slate-100'
                              }`}
                            >
                              {level === 0 ? 'Not Started' : `Level ${level}`}
                            </div>
                            <p
                              className={`text-xs whitespace-pre-line leading-relaxed text-left w-full ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
                            >
                              {getRubricText(component.id, lens, level)}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div
                  className={`${darkMode ? 'border-slate-700' : 'border-slate-100'} p-6 border-t`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4
                        className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        Lens Actions
                      </h4>
                      <p
                        className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                      >
                        Hierarchy: Outcome - Action - Affected component lenses.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <select
                        aria-label={`Filter ${lens} actions by type`}
                        value={lensActionTypeFilter}
                        onChange={(event) =>
                          setLensActionTypeFilters((current) => ({
                            ...current,
                            [targetKey]: event.target.value,
                          }))
                        }
                        className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-700'}`}
                      >
                        <option value="all">All action types</option>
                        {[...new Set([...ACTION_TYPES, ...lensActionTypeOptions])].map(
                          (actionType) => (
                            <option key={actionType} value={actionType}>
                              {actionType}
                            </option>
                          )
                        )}
                      </select>
                      <select
                        aria-label={`Filter ${lens} actions by owner`}
                        value={lensActionOwnerFilter}
                        onChange={(event) =>
                          setLensActionOwnerFilters((current) => ({
                            ...current,
                            [targetKey]: event.target.value,
                          }))
                        }
                        className={`rounded-md border px-2.5 py-1.5 text-xs font-semibold ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-700'}`}
                      >
                        <option value="all">All owners</option>
                        {lensActionOwnerOptions.map((owner) => (
                          <option key={owner} value={owner}>
                            {owner}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => openCreateActionModal(lens)}
                        className="px-3 py-1.5 rounded bg-[#005eb8] text-white text-xs font-semibold shadow-[0_2px_0_#003087] hover:bg-[#00417a] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2"
                      >
                        Add Action
                      </button>
                    </div>
                  </div>

                  {lensActions.length ? (
                    <div className="overflow-x-auto rounded-md border border-slate-200">
                      <table
                        className={`min-w-full ${darkMode ? 'divide-slate-700 bg-slate-800' : 'divide-slate-200 bg-white'} divide-y`}
                      >
                        <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Description
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Current State
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Action Type
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Owner
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Start
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              End
                            </th>
                            {/* <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Notes</th> */}
                            {/* <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Evidence</th> */}
                            {/* <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Affected Component Lenses
                            </th> */}
                            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          className={`${darkMode ? 'divide-slate-700' : 'divide-slate-100'} divide-y`}
                        >
                          {(expandedLensActions[`${component.id}:${lens}`]
                            ? lensActions
                            : lensActions.slice(0, 5)
                          ).map((resolvedAction) => {
                            const action = resolvedAction.action;
                            const displayStatus = normalizeActionStatus(action.status);
                            const temporalStatus = deriveTemporalActionStatus(
                              action.status,
                              action.startDate,
                              action.dueDate
                            );
                            const temporalHint =
                              temporalStatus === 'Overdue start' ||
                              temporalStatus === 'Overdue completion'
                                ? temporalStatus
                                : null;
                            const sourceComponentLabel =
                              componentById[resolvedAction.sourceComponentId]?.label ||
                              resolvedAction.sourceComponentId;
                            const linkedOutcomes = getActionOutcomeLinks(
                              resolvedAction.sourceComponentId,
                              action.id,
                              store.objectives || {}
                            );
                            // const linkedTargets = getNormalizedTargets(
                            //   action,
                            //   resolvedAction.sourceComponentId,
                            //   resolvedAction.sourceLens
                            // )
                            //   .map(
                            //     (target) =>
                            //       `${componentById[target.componentId]?.label || target.componentId} / ${target.lens}`
                            //   )
                            //   .join(', ');
                            const badgeStyle =
                              ACTION_STATUS_BADGE_STYLES[displayStatus] ||
                              ACTION_STATUS_BADGE_STYLES.Planned;

                            return (
                              <tr
                                key={`${resolvedAction.sourceComponentId}:${resolvedAction.sourceLens}:${action.id}`}
                              >
                                <td
                                  className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                                >
                                  <div>
                                    {renderActionTextWithGuidanceLinks(
                                      action.text,
                                      guidanceLinksByComponent[resolvedAction.sourceComponentId] || [],
                                      darkMode
                                    )}
                                  </div>
                                  {resolvedAction.isLinkedView ? (
                                    <div
                                      className={`mt-1 text-xs ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}
                                    >
                                      Linked from {sourceComponentLabel} /{' '}
                                      {resolvedAction.sourceLens}
                                    </div>
                                  ) : null}
                                </td>
                                <td className="px-3 py-2">
                                  <span
                                    className={`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${badgeStyle}`}
                                  >
                                    {displayStatus}
                                  </span>
                                  {temporalHint ? (
                                    <div className="mt-1 text-xs text-rose-700">{temporalHint}</div>
                                  ) : null}
                                  {!linkedOutcomes.length && (
                                    <div
                                      className={`mt-1 text-center text-xs ${darkMode ? 'text-amber-200' : 'text-amber-700'}`}
                                    >
                                      Not yet linked
                                    </div>
                                  )}
                                </td>
                                <td
                                  className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                                >
                                  {action.actionType || 'Unassigned'}
                                </td>
                                <td
                                  className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                                >
                                  {action.owner || 'Unassigned'}
                                </td>
                                <td
                                  className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                >
                                  {action.startDate || '-'}
                                </td>
                                <td
                                  className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                >
                                  {action.dueDate || '-'}
                                </td>
                                {/* <td className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{action.notes || '-'}</td>
                              <td className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                {parseEvidenceItems(action.evidence || '').length ? (
                                  <div className="space-y-1">
                                    {parseEvidenceItems(action.evidence || '').map((item, index) => {
                                      const canOpen = item.type === 'file' || isHttpUrl(item.href);
                                      return canOpen ? (
                                        <a
                                          key={`${action.id}-evidence-${index}`}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block text-xs font-medium text-[#005eb8] underline"
                                        >
                                          {item.label || `Evidence ${index + 1}`}
                                        </a>
                                      ) : (
                                        <span key={`${action.id}-evidence-${index}`} className={`block text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                          {item.label || item.href}
                                        </span>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  '-'
                                )}
                              </td> */}
                                {/* <td
                                  className={`px-3 py-2 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                                >
                                  {linkedTargets}
                                </td> */}
                                <td className="px-3 py-2">
                                  <div className="flex gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        openEditActionModal(
                                          resolvedAction.sourceComponentId,
                                          resolvedAction.sourceLens,
                                          action
                                        )
                                      }
                                      className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-2.5 py-1.5 text-xs font-semibold`}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        onActionRemove(
                                          resolvedAction.sourceComponentId,
                                          resolvedAction.sourceLens,
                                          action.id
                                        )
                                      }
                                      className={`${darkMode ? 'border-red-500/40 bg-red-500/15 text-red-200 hover:bg-red-500/25' : 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100'} rounded-md border px-2.5 py-1.5 text-xs font-semibold`}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                      {noOutcomesOrActionsMessage('No actions yet for this lens.')}
                    </p>
                  )}

                  {lensActions.length > 5 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedLensActions((current) => ({
                          ...current,
                          [`${component.id}:${lens}`]: !current[`${component.id}:${lens}`],
                        }))
                      }
                      className={`${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} mt-2 rounded-md border px-3 py-1.5 text-xs font-semibold`}
                    >
                      {expandedLensActions[`${component.id}:${lens}`]
                        ? 'Show top 5 actions'
                        : `Show additional ${lensActions.length > 5 ? lensActions.length - 5 : lensActions.length} action(s)`}
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      <EvidenceLinksAndDocsSection
        rows={evidenceRows}
        isOpen={showEvidenceSection}
        onToggle={() => setShowEvidenceSection((prev) => !prev)}
        darkMode={darkMode}
      />

      {actionEditor ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div
            className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-xl border p-6 shadow-2xl`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3
                className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
              >
                {actionEditor.mode === 'create' ? 'Create Action' : 'Edit Action'} ·{' '}
                {actionEditorSourceLabel} / {actionEditor.sourceLens} · {actionEditorTitleSummary}
              </h3>
              <button
                type="button"
                onClick={closeActionModal}
                className={`${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-1.5 text-sm`}
              >
                Close
              </button>
            </div>

            <div className="mt-4 max-h-[calc(100vh-13rem)] overflow-y-auto pr-1 grid gap-3">
              <div
                className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-blue-100 bg-white'} sticky top-0 z-10 rounded-md border px-3 py-2 shadow-sm`}
              >
                <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  <span className="mb-1 block font-semibold">Description</span>
                  <textarea
                    value={actionEditor.action.text}
                    onChange={(event) => updateActionEditor({ text: event.target.value })}
                    className={`w-full rounded-md border px-3 py-2 text-sm h-20 ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  />
                </label>
              </div>

              <div
                className={`${darkMode ? 'border-slate-700 bg-slate-900 text-slate-200' : 'border-blue-100 bg-blue-50 text-slate-700'} rounded-md border px-3 py-2 text-xs`}
              >
                <strong>Linking order:</strong> first attach this action to one or more outcomes,
                then add affected component lenses (component + lens) where this action should
                appear.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  <span className="mb-1 block font-semibold">Action Type</span>
                  <select
                    value={actionEditor.action.actionType || 'Admin'}
                    onChange={(event) =>
                      updateActionEditor({
                        actionType: event.target.value as DraftAction['actionType'],
                      })
                    }
                    className={`w-full rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  >
                    {ACTION_TYPES.map((actionType) => (
                      <option key={actionType} value={actionType}>
                        {actionType}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  <span className="mb-1 block font-semibold">Owner</span>
                  <select
                    value={actionEditor.action.owner}
                    onChange={(event) => updateActionEditor({ owner: event.target.value })}
                    className={`w-full rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  >
                    <option value="">Unassigned</option>
                    {teamMembers.map((member) => (
                      <option key={member.id} value={member.name}>
                        {member.name}
                        {member.role ? ` - ${member.role}` : ''}
                      </option>
                    ))}
                    {actionEditor.action.owner &&
                    !teamMembers.some((member) => member.name === actionEditor.action.owner) ? (
                      <option value={actionEditor.action.owner}>
                        {actionEditor.action.owner} (not on roster)
                      </option>
                    ) : null}
                  </select>
                </label>
                <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  <span className="mb-1 block font-semibold">Status</span>
                  <select
                    value={actionEditor.action.status}
                    onChange={(event) =>
                      updateActionEditor({ status: event.target.value as DraftAction['status'] })
                    }
                    className={`w-full rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  <span className="mb-1 block font-semibold">Start Date</span>
                  <input
                    type="date"
                    value={actionEditor.action.startDate || ''}
                    onChange={(event) => updateActionEditor({ startDate: event.target.value })}
                    className={`w-full rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  />
                </label>
                <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                  <span className="mb-1 block font-semibold">End Date</span>
                  <input
                    type="date"
                    value={actionEditor.action.dueDate || ''}
                    onChange={(event) => updateActionEditor({ dueDate: event.target.value })}
                    className={`w-full rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                  />
                </label>
              </div>

              <label className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}>
                <span className="mb-1 block font-semibold">Notes</span>
                <textarea
                  value={actionEditor.action.notes || ''}
                  onChange={(event) => updateActionEditor({ notes: event.target.value })}
                  className={`w-full rounded-md border px-3 py-2 text-sm h-20 ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                />
              </label>

              <div
                className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-lg border p-3`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                  >
                    Evidence Links / Docs
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={addEvidenceLinkRow}
                      className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-2.5 py-1.5 text-xs font-semibold`}
                    >
                      Add web link
                    </button>
                    <label
                      className={`${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-semibold`}
                    >
                      Upload file(s)
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={uploadEvidenceFiles}
                      />
                    </label>
                  </div>
                </div>
                <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Add evidence as either web links or uploaded files. Everything appears below in a
                  single list.
                </p>

                <div
                  className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mt-2 space-y-2 rounded border p-2`}
                >
                  {actionEditor.evidenceItems.length ? (
                    actionEditor.evidenceItems.map((item, index) => (
                      <div
                        key={`${item.type}-${index}`}
                        className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} grid grid-cols-1 gap-2 rounded border p-2 md:grid-cols-[auto,1fr,1fr,auto]`}
                      >
                        <div className="flex items-start pt-2">
                          <span
                            className={`${item.type === 'file' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} inline-flex rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wide`}
                          >
                            {item.type === 'file' ? 'File' : 'Link'}
                          </span>
                        </div>
                        <input
                          value={item.label}
                          onChange={(event) =>
                            updateEvidenceItem(index, 'label', event.target.value)
                          }
                          placeholder={item.type === 'file' ? 'Document label' : 'Link label'}
                          className={`rounded-md border px-2.5 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                        />
                        <input
                          value={item.href}
                          onChange={(event) =>
                            updateEvidenceItem(index, 'href', event.target.value)
                          }
                          placeholder={
                            item.type === 'file'
                              ? 'Embedded file URL (auto generated)'
                              : 'https://...'
                          }
                          className={`rounded-md border px-2.5 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                          disabled={item.type === 'file'}
                        />
                        <button
                          type="button"
                          onClick={() => removeEvidenceItem(index)}
                          className="rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  ) : (
                    <p
                      className={`px-2 py-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                    >
                      No evidence links or documents added yet.
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-lg border p-3`}
              >
                <p
                  className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                >
                  Affected Outcomes
                </p>
                <p className={`mt-1 text-xs ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Tick 1-3 outcomes directly impacted by this action. Outcome status is auto-derived
                  from these linked actions.
                </p>
                <div
                  className={`${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mt-2 space-y-2 rounded border p-2`}
                >
                  {(store.objectives?.[actionEditor.sourceComponentId] || []).length ? (
                    (store.objectives?.[actionEditor.sourceComponentId] || []).map((objective) => {
                      const checked = actionEditor.linkedObjectiveIds.includes(objective.id);
                      return (
                        <label
                          key={objective.id}
                          className={`${darkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-50'} flex items-start gap-2 rounded px-2 py-1.5`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleObjectiveLinkInActionEditor(objective.id)}
                            className="mt-0.5"
                          />
                          <span
                            className={`text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                          >
                            {objective.text || 'Untitled outcome'}
                          </span>
                        </label>
                      );
                    })
                  ) : (
                    <p
                      className={`px-2 py-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                    >
                      {noOutcomesOrActionsMessage('No outcomes are defined for this component yet.')}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} rounded-lg border p-3`}
              >
                <div className="flex items-center gap-2">
                  <p
                    className={`text-sm font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                  >
                    Affected Component Lenses
                  </p>
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-600"
                    title="Actions often contribute to other component lenses. Add those targets here so the same action is visible in each relevant lens."
                  >
                    i
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-2">
                    <select
                      value={actionEditor.targetPickerComponentId}
                      onChange={(event) => {
                        const nextComponentId = event.target.value;
                        const nextComponent = componentById[nextComponentId];
                        updateTargetPicker(nextComponentId, nextComponent?.lenses[0] || '');
                      }}
                      className={`rounded-md border px-2.5 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                    >
                      {components.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    <select
                      value={actionEditor.targetPickerLens}
                      onChange={(event) =>
                        updateTargetPicker(actionEditor.targetPickerComponentId, event.target.value)
                      }
                      className={`rounded-md border px-2.5 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-800 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`}
                    >
                      {(componentById[actionEditor.targetPickerComponentId]?.lenses || []).map(
                        (lensOption) => (
                          <option key={lensOption} value={lensOption}>
                            {lensOption}
                          </option>
                        )
                      )}
                    </select>

                    <button
                      type="button"
                      onClick={addTargetToActionEditor}
                      disabled={getNormalizedTargets(
                        actionEditor.action,
                        actionEditor.sourceComponentId,
                        actionEditor.sourceLens
                      ).some(
                        (target) =>
                          target.componentId === actionEditor.targetPickerComponentId &&
                          target.lens === actionEditor.targetPickerLens
                      )}
                      title={
                        getNormalizedTargets(
                          actionEditor.action,
                          actionEditor.sourceComponentId,
                          actionEditor.sourceLens
                        ).some(
                          (target) =>
                            target.componentId === actionEditor.targetPickerComponentId &&
                            target.lens === actionEditor.targetPickerLens
                        )
                          ? 'Already added'
                          : 'Add selected affected lens'
                      }
                      className={`${darkMode ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25' : 'border-cyan-300 bg-cyan-100 text-cyan-900 hover:bg-cyan-200'} rounded-md border px-3 py-2 text-xs font-semibold disabled:cursor-not-allowed disabled:opacity-60`}
                    >
                      Add Lens
                    </button>
                  </div>

                  <div
                    className={`${darkMode ? 'border-slate-700' : 'border-slate-200'} overflow-hidden rounded border`}
                  >
                    <table
                      className={`min-w-full ${darkMode ? 'divide-slate-700 bg-slate-800' : 'divide-slate-200 bg-white'} divide-y`}
                    >
                      <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                        <tr>
                          <th className="px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Component
                          </th>
                          <th className="px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Lens
                          </th>
                          <th className="px-2.5 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Remove
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        className={`${darkMode ? 'divide-slate-700' : 'divide-slate-100'} divide-y`}
                      >
                        {getNormalizedTargets(
                          actionEditor.action,
                          actionEditor.sourceComponentId,
                          actionEditor.sourceLens
                        ).map((target) => (
                          <tr key={`${target.componentId}:${target.lens}`}>
                            <td
                              className={`px-2.5 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                            >
                              {componentById[target.componentId]?.label || target.componentId}
                            </td>
                            <td
                              className={`px-2.5 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                            >
                              {target.lens}
                            </td>
                            <td className="px-2.5 py-2">
                              <button
                                type="button"
                                onClick={() =>
                                  removeTargetFromActionEditor(target.componentId, target.lens)
                                }
                                className="rounded border border-red-200 bg-red-50 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-100"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={closeActionModal}
                className={`${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-4 py-2 text-sm font-semibold`}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveActionModal}
                className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2"
              >
                Save Action
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {objectiveViewer && activeObjective && activeObjectiveStatus ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Outcome Details"
            className={`w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl border p-6 shadow-2xl ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'}`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3
                className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}
              >
                Outcome Details
              </h3>
              <button
                type="button"
                onClick={() => setObjectiveViewer(null)}
                className={`${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-1.5 text-sm`}
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  Outcome
                </p>
                <p className={`mt-1 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                  {activeObjective.text || 'Untitled outcome'}
                </p>
              </div>

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  Status
                </p>
                <span
                  className={`mt-1 inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${OBJECTIVE_STATUS_BADGE_STYLES[activeObjectiveStatus]}`}
                >
                  {activeObjectiveStatus}
                </span>
              </div>

              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  Linked Actions
                </p>
                {activeObjectiveLinkedActions.length ? (
                  <div
                    className={`mt-2 overflow-x-auto rounded-md border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  >
                    <table
                      className={`min-w-full divide-y ${darkMode ? 'divide-slate-700 bg-slate-800' : 'divide-slate-200 bg-white'}`}
                    >
                      <thead className={darkMode ? 'bg-slate-900' : 'bg-slate-50'}>
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Lens
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Action
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Current State
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Navigate
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        className={`divide-y ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}
                      >
                        {activeObjectiveLinkedActions.map((item) => {
                          const badgeStyle = item.status
                            ? ACTION_STATUS_BADGE_STYLES[item.status] ||
                              ACTION_STATUS_BADGE_STYLES.Planned
                            : ACTION_STATUS_BADGE_STYLES.Planned;
                          return (
                            <tr key={`${item.lens}:${item.action?.id || 'missing'}`}>
                              <td
                                className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                              >
                                {item.lens}
                              </td>
                              <td
                                className={`px-3 py-2 text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                              >
                                {item.action?.text || 'Linked action not found'}
                              </td>
                              <td className="px-3 py-2">
                                <span
                                  className={`inline-flex min-w-[7.5rem] items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-center text-xs font-semibold ${badgeStyle}`}
                                >
                                  {item.status || 'Not Started'}
                                </span>
                                {item.temporalStatus === 'Overdue start' ||
                                item.temporalStatus === 'Overdue completion' ? (
                                  <div className="mt-1 text-xs text-rose-700">
                                    {item.temporalStatus}
                                  </div>
                                ) : null}
                              </td>
                              <td className="px-3 py-2">
                                {item.action ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      openObjectiveActionInEditor(
                                        item.lens,
                                        item.action || undefined
                                      )
                                    }
                                    className={`${darkMode ? 'border-blue-500/40 bg-blue-500/15 text-blue-200 hover:bg-blue-500/25' : 'border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100'} rounded-md border px-2.5 py-1.5 text-xs font-semibold`}
                                  >
                                    Open Action
                                  </button>
                                ) : (
                                  <span
                                    className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}
                                  >
                                    Unavailable
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className={`mt-1 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                    No linked actions assigned.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <PageIntroModal
        open={pageIntro.isOpen}
        onClose={pageIntro.close}
        title="Assessing a component"
        darkMode={darkMode}
        body={
          <>
            <p>
              Each component is assessed lens by lens: justify where you are, review its outcomes,
              then plan and track delivery actions for each readiness level.
            </p>
            <p>
              Click "What is this?" at the top for what the component covers, and "Evidence Links
              and Docs" at the bottom rounds up everything attached as evidence across all of its
              actions.
            </p>
          </>
        }
      />
    </div>
  );
}
