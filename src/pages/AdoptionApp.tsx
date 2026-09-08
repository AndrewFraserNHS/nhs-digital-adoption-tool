import {
  EVIDENCE_WARNING_DISMISSED_KEY,
  EvidenceWarningModal,
} from '@components/common/EvidenceWarningModal';
import { usePageIntroSeen } from '@components/onboarding/PageIntroModal';
import { VisionGetStartedModal } from '@components/onboarding/VisionGetStartedModal';
import { ToolkitChatbot } from '@components/ui/ToolkitChatbot';
import { ActionPlanTracker } from '@components/views/ActionPlanTracker';
import { AdoptionDashboard, type ComponentRadarSize } from '@components/views/AdoptionDashboard';
import { AssessmentPanel } from '@components/views/AssessmentPanel';
import { AuditLogPage } from '@components/views/AuditLogPage';
import { ProjectDetailsPage } from '@components/views/CSTDetailsPage';
import { DailyCheckIn } from '@components/views/DailyCheckIn';
import { EngineExplainedPage } from '@components/views/EngineExplainedPage';
import { GuidanceRoadmapView } from '@components/views/GuidanceRoadmapView';
import { HighlightBuilderTool } from '@components/views/HighlightBuilderTool';
import { ImportConflictModal } from '@components/views/ImportConflictModal';
import { LensInfoModal } from '@components/views/LensInfoModal';
import {
  ADOPTION_INTRODUCTION_COMPLETE_KEY,
  OnboardingOverviewPage,
} from '@components/views/OnboardingOverviewPage';
import { ProfilePage } from '@components/views/ProfilePage';
import { type AdoptionUserSettings, SettingsPanel } from '@components/views/SettingsPanel';
import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
import { ASSESSMENT_LENSES as LENSES } from '@data/lenses';
import {
  type MaturityGuidanceTarget,
  resolveGuidanceLinksForAdoptionComponent,
} from '@data/maturity-guidance-links';
import { GENERIC_RUBRIC } from '@data/rubrics';
import {
  isCompletedActionStatus,
  normalizeActionStatus,
  type UnifiedActionStatus,
} from '@lib/actionModel';
import {
  ADOPTION_STORAGE_KEY,
  buildAdoptionExportPayload,
  mergeImportedAdoptionState,
  migrateSavedAdoptionAssessment,
  parseImportedAdoptionAssessment,
  type SavedAdoptionAssessment,
} from '@lib/adoptionIO';
import {
  buildComponentRadarChartData,
  buildRadarChartData,
  computeEngagementObjectives,
  flattenActions,
  getMetrics as computeMetrics,
} from '@lib/adoptionMetrics';
import type {
  AdoptionStore,
  ComponentObjective,
  DraftAction,
  DraftEntry,
  OrgProfile,
  View,
} from '@lib/adoptionState';
import { cloneEntry, createCstId, createEmptyEntry, initializeStore } from '@lib/adoptionState';
import { validateCstProfile } from '@lib/adoptionValidator';
import { type AuditEvent, createAuditEvent, trimAuditEvents } from '@lib/auditLog';
import { createLineChart, createRadarChart } from '@lib/charts';
import {
  applyConflictResolutions,
  buildConflictReport,
  type ConflictChoice,
  type ConflictReport,
} from '@lib/cstConflict';
import { regenerateContentForPathway,syncDerivedContent } from '@lib/derivedContentSync';
import { load, save } from '@lib/storage';
import { downloadFile, escapeHtml } from '@lib/utils';
import CompareApp from '@pages/CompareApp';
import ForceFieldAnalysisApp from '@pages/ForceFieldAnalysisApp';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { nhsButtonSecondary, nhsFocusRing } from '../styles/nhsTheme';
import { PHASE_NAMES, SPECIFIC_RUBRICS } from '../types/constants';

const ADOPTION_USER_SETTINGS_KEY = 'nhs-digital-adoption-user-settings';
const ADOPTION_REPORT_REMINDER_DISMISS_KEY = 'nhs-digital-adoption-report-reminder-dismissed';
const ADOPTION_ENGAGEMENT_KEY = 'nhs-digital-adoption-engagement';
const ADOPTION_CURRENT_USER_KEY = 'nhs-digital-adoption-current-user-id';
const DEFAULT_GUIDANCE_TARGET: MaturityGuidanceTarget = 'Default';
const MAX_IMPORT_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_IMPORT_MIME_TYPES = new Set(['application/json', 'text/json']);
const DEFAULT_AUDIT_ACTOR = 'Unknown user';

/** Views that stay reachable before the project has been set up - everything else routes back to Introduction. */
const ALLOWED_VIEWS_WHEN_UNCONFIGURED: View[] = [
  'introduction',
  'engine-explained',
  'project-details',
  'profile',
];

const EXAMPLE_DATA_FILES: Record<'red' | 'amber' | 'green', string> = {
  red: 'test-data/adoption-phase1-red.json',
  amber: 'test-data/adoption-phase2-amber.json',
  green: 'test-data/adoption-phase3-green.json',
};

const DEFAULT_USER_SETTINGS: AdoptionUserSettings = {
  name: '',
  preferences: '',
  themeColor: '#005eb8',
  profileImageDataUrl: '',
  darkMode: false,
  colorAccessibilityMode: 'standard',
  phaseFocusMode: 'auto',
  manualPhaseFocus: 1,
  hideGuidedWorkflow: false,
  showAdditionalGuidanceLinks: true,
  showExternalLinksSection: false,
};

function cloneAction(action: DraftAction): DraftAction {
  return {
    ...action,
    linkedTargets: (action.linkedTargets || []).map((target) => ({
      componentId: target.componentId,
      lens: target.lens,
    })),
  };
}

function buildSuppressedAutoActionKey(componentId: string, lens: string): string {
  return `${componentId}:${lens}`;
}

/**
 * Nothing entered yet, so an import can safely replace it wholesale with no conflict prompt.
 * Every lens ships pre-populated with template actions from the start, so their mere presence
 * doesn't indicate real user content - only a scored lens (or a named profile) does.
 */
function isCstEmpty(store: AdoptionStore): boolean {
  if (store.orgProfile.trustName || store.orgProfile.projectName) {
    return false;
  }
  return !Object.values(store.currentDraft).some((lenses) =>
    Object.values(lenses).some((entry) => entry.score > 0)
  );
}

/** Gates the guided CST setup wizard's one-time auto-open - filling in a trust name is itself the "seen" signal. */
function isCstUnconfigured(profile: OrgProfile): boolean {
  return !profile.trustName.trim();
}

function actionHasEvidence(action: DraftAction): boolean {
  if (!action.evidence?.trim()) {
    return false;
  }

  try {
    const parsed = JSON.parse(action.evidence) as unknown;
    return Array.isArray(parsed) ? parsed.length > 0 : Boolean(action.evidence.trim());
  } catch (_error) {
    return Boolean(action.evidence.trim());
  }
}

function getAuditActor(name: string): string {
  const normalized = name.trim();
  return normalized || DEFAULT_AUDIT_ACTOR;
}

/** Audit actor prefers the signed-in team member so the log reflects who was actually signed in. */
function resolveAuditActorName(
  profile: OrgProfile,
  currentUserId: string,
  fallbackName: string
): string {
  const signedInMember = (profile.teamMembers || []).find((member) => member.id === currentUserId);
  return getAuditActor(signedInMember?.name || fallbackName);
}

function getRubricText(componentId: string, lensName: string, score: number): string {
  const rubricGroup = (
    SPECIFIC_RUBRICS as unknown as Record<string, Record<string, Record<number, string>>>
  )[componentId];
  return rubricGroup?.[lensName]?.[score] || GENERIC_RUBRIC[score] || GENERIC_RUBRIC[0];
}

function getMonthStorageKey(date = new Date()): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${date.getFullYear()}-${month}`;
}

function getPreviousMonthLabel(date = new Date()): string {
  const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  return previousMonth.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

function toBase64Utf8(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
}

function wrapBase64Lines(value: string, lineLength = 76): string {
  const chunks: string[] = [];
  for (let index = 0; index < value.length; index += lineLength) {
    chunks.push(value.slice(index, index + lineLength));
  }
  return chunks.join('\r\n');
}

function getCurrentMonthLabel(date = new Date()): string {
  return date.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

export function AdoptionApp() {
  const COMPONENTS = ASSESSMENT_COMPONENTS;
  const MUTABLE_LENSES = useMemo<string[]>(() => [...LENSES], []);
  const [view, setView] = useState<View>('introduction');
  const [activeComponentId, setActiveComponentId] = useState<string>(COMPONENTS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [store, setStore] = useState<AdoptionStore>(() => {
    let persisted: Partial<SavedAdoptionAssessment> = {};
    try {
      const rawPersisted = load<unknown>(ADOPTION_STORAGE_KEY);
      persisted = migrateSavedAdoptionAssessment(parseImportedAdoptionAssessment(rawPersisted));
    } catch (error) {
      console.warn('Ignoring invalid persisted adoption data.', error);
    }
    const initialised = initializeStore({
      view: 'dashboard',
      orgProfile: persisted?.orgProfile,
      currentDraft: persisted?.currentDraft,
      objectives: persisted?.objectives,
      suppressedAutoActions: persisted?.suppressedAutoActions,
      auditLog: persisted?.auditLog,
      history: persisted?.history,
      phaseOverrides: persisted?.phaseOverrides,
      pathwayChecks: persisted?.pathwayChecks,
    }) as AdoptionStore;

    // Backfill a stable programme identity for the app's own working document (never for an
    // imported payload - see cstConflict.ts) so it can be recognised on later exports/imports.
    if (!initialised.orgProfile.cstId) {
      initialised.orgProfile = { ...initialised.orgProfile, cstId: createCstId() };
    }

    return syncDerivedContent(initialised);
  });

  const [activeLensInfo, setActiveLensInfo] = useState('');
  const visionGetStarted = usePageIntroSeen('vision-get-started');
  const [currentUserId, setCurrentUserId] = useState<string>(() => load<string>(ADOPTION_CURRENT_USER_KEY) || '');
  /* Several audit-logging callbacks are memoized with empty dep arrays, so they close over stale
   * state on first render - refs keep the actor resolution reading live values instead. */
  const currentUserIdRef = React.useRef(currentUserId);
  useEffect(() => {
    currentUserIdRef.current = currentUserId;
  }, [currentUserId]);
  const [importConflict, setImportConflict] = useState<{
    file: File;
    parsed: Partial<SavedAdoptionAssessment>;
    report: ConflictReport;
  } | null>(null);
  const [userSettings, setUserSettings] = useState<AdoptionUserSettings>(() => {
    const persisted = load<Partial<AdoptionUserSettings>>(ADOPTION_USER_SETTINGS_KEY);
    return {
      ...DEFAULT_USER_SETTINGS,
      ...persisted,
    };
  });
  const userSettingsNameRef = React.useRef(userSettings.name);
  useEffect(() => {
    userSettingsNameRef.current = userSettings.name;
  }, [userSettings.name]);
  const dashboardRef = React.useRef<HTMLDivElement>(null);
  const mainContentRef = React.useRef<HTMLElement>(null);
  const [statusAnnouncement, setStatusAnnouncement] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const currentReminderMonthKey = useMemo(() => getMonthStorageKey(), []);
  const [dismissedReminderMonths, setDismissedReminderMonths] = useState<Record<string, boolean>>(
    () => {
      const persisted = load<Record<string, boolean>>(ADOPTION_REPORT_REMINDER_DISMISS_KEY);
      return persisted || {};
    }
  );
  const [showEngagementCard, setShowEngagementCard] = useState<boolean>(true);
  const [viewHistory, setViewHistory] = useState<View[]>([]);
  const [expandedNavPhases, setExpandedNavPhases] = useState<Record<number, boolean>>({ 1: true });
  const [expandedNavSections, setExpandedNavSections] = useState<Record<string, boolean>>({
    intro: true,
    overview: true,
    tools: true,
  });
  const [pendingStatusChange, setPendingStatusChange] = useState<{
    componentId: string;
    lens: string;
    actionId: string;
    status: UnifiedActionStatus;
  } | null>(null);
  const [componentRadarVisible, setComponentRadarVisible] = useState(true);
  const [componentRadarSize, setComponentRadarSize] = useState<ComponentRadarSize>('medium');
  const navItemRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  const reportReminder = useMemo(() => {
    const today = new Date();
    const previousMonthLabel = getPreviousMonthLabel(today);
    const isFirstDayOfMonth = today.getDate() === 1;

    return {
      previousMonthLabel,
      isFirstDayOfMonth,
      shouldNotify: isFirstDayOfMonth,
    };
  }, [store.history]);
  const [emailTo, setEmailTo] = useState('test@test.com');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const currentMonthLabel = getCurrentMonthLabel();

  const getEntry = useCallback(
    (componentId: string, lens: string): DraftEntry => {
      if (!store.currentDraft[componentId]) {
        store.currentDraft[componentId] = {};
      }
      if (!store.currentDraft[componentId][lens]) {
        store.currentDraft[componentId][lens] = createEmptyEntry();
      }
      return store.currentDraft[componentId][lens];
    },
    [store]
  );

  const showAdditionalGuidanceLinks = userSettings.showAdditionalGuidanceLinks !== false;
  const metrics = useMemo(() => {
    const baseMetrics = computeMetrics(store, COMPONENTS);
    return {
      ...baseMetrics,
      nextSteps: baseMetrics.nextSteps.map((step) => ({
        ...step,
        toolkitLinks: resolveGuidanceLinksForAdoptionComponent(
          DEFAULT_GUIDANCE_TARGET,
          step.componentId,
          'inputs',
          undefined,
          showAdditionalGuidanceLinks
        ).slice(0, 3),
      })),
    };
  }, [store, showAdditionalGuidanceLinks]);
  const effectivePhaseFocus =
    userSettings.phaseFocusMode === 'manual' && userSettings.manualPhaseFocus
      ? userSettings.manualPhaseFocus
      : metrics.currentPhase;

  useEffect(() => {
    setExpandedNavPhases((current) => ({ ...current, [effectivePhaseFocus]: true }));
  }, [effectivePhaseFocus]);

  useEffect(() => {
    const sectionByView: Partial<Record<View, string>> = {
      introduction: 'intro',
      'engine-explained': 'intro',
      'project-details': 'intro',
      dashboard: 'overview',
      'daily-checkin': 'overview',
      'action-plan': 'overview',
      'roadmap-view': 'overview',
      'highlight-builder': 'tools',
      'force-field-analysis': 'tools',
      compare: 'tools',
      'audit-log': 'tools',
    };
    const section = sectionByView[view];
    if (section) {
      setExpandedNavSections((current) => ({ ...current, [section]: true }));
    }
  }, [view]);
  const actionRows = flattenActions(
    store,
    (componentId) => getComponentById(componentId) || COMPONENTS[0],
    getEntry
  ).sort((left, right) => {
    const ownerCompare = left.action.owner.localeCompare(right.action.owner);
    if (ownerCompare !== 0) {
      return ownerCompare;
    }
    return left.component.localeCompare(right.component);
  });

  useEffect(() => {
    save(ADOPTION_STORAGE_KEY, store);
  }, [store]);

  useEffect(() => {
    save(ADOPTION_USER_SETTINGS_KEY, userSettings);
  }, [userSettings]);

  useEffect(() => {
    save(ADOPTION_CURRENT_USER_KEY, currentUserId);
  }, [currentUserId]);

  useEffect(() => {
    save(ADOPTION_REPORT_REMINDER_DISMISS_KEY, dismissedReminderMonths);
  }, [dismissedReminderMonths]);

  // Redirect away from views that aren't meaningful until the project has been set up.
  useEffect(() => {
    if (isCstUnconfigured(store.orgProfile) && !ALLOWED_VIEWS_WHEN_UNCONFIGURED.includes(view)) {
      setView('introduction');
    }
  }, [store.orgProfile, view]);

  // Render charts after dashboard mounts
  useEffect(() => {
    if (view === 'dashboard' && dashboardRef.current) {
      setTimeout(() => {
        const radarCanvas = dashboardRef.current?.querySelector(
          '#adoption-radar-chart'
        ) as HTMLCanvasElement;
        if (radarCanvas) {
          const radarData = buildRadarChartData(store, MUTABLE_LENSES, COMPONENTS, getEntry);
          createRadarChart(radarCanvas, radarData);
        }

        const componentRadarCanvas = dashboardRef.current?.querySelector(
          '#adoption-component-radar-chart'
        ) as HTMLCanvasElement;
        if (componentRadarCanvas) {
          const componentRadarData = buildComponentRadarChartData(
            COMPONENTS,
            getEntry,
            effectivePhaseFocus
          );
          createRadarChart(componentRadarCanvas, componentRadarData, {
            maintainAspectRatio: false,
            scales: {
              r: {
                min: 0,
                max: 5,
                ticks: { display: true, stepSize: 1, backdropColor: 'transparent' },
              },
            },
          });
        }

        if (store.history.length > 0) {
          const lineCanvas = dashboardRef.current?.querySelector(
            '#adoption-line-chart'
          ) as HTMLCanvasElement;
          if (lineCanvas) {
            const lineData = {
              labels: store.history.map((snapshot) => snapshot.monthLabel),
              datasets: [
                {
                  label: 'Adoption Score',
                  data: store.history.map((h) => h.overallPercentage || 0),
                  borderColor: '#005EB8',
                  backgroundColor: 'rgba(0, 94, 184, 0.1)',
                  fill: true,
                  tension: 0.4,
                },
              ],
            };
            createLineChart(lineCanvas, lineData);
          }
        }
      }, 100);
    }
  }, [
    view,
    store,
    getEntry,
    MUTABLE_LENSES,
    COMPONENTS,
    effectivePhaseFocus,
    componentRadarVisible,
    componentRadarSize,
  ]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.nhsThemeMode = userSettings.darkMode ? 'dark' : 'light';
    }
  }, [userSettings.darkMode]);

  useEffect(() => {
    const navKey = view === 'assessment' ? `component:${activeComponentId}` : `view:${view}`;
    navItemRefs.current[navKey]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeComponentId, view]);

  // Dashboard rendering now handled by React component below

  const shouldAutoCloseSidebar = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth < 1024;
  };

  const scrollMainToTop = useCallback(() => {
    mainContentRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const navigateToView = useCallback((newView: View) => {
    setView((current) => {
      if (current === newView) {
        return current;
      }
      setViewHistory((prev) => [current, ...prev].slice(0, 20));
      return newView;
    });

    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  }, []);

  const handleViewChange = (newView: View) => {
    navigateToView(newView);
  };

  const handleBackNavigation = useCallback(() => {
    setViewHistory((prev) => {
      const [previousView, ...remaining] = prev;
      if (previousView) {
        setView(previousView);
        if (window.innerWidth < 1024) {
          setIsSidebarOpen(false);
        }
        return remaining;
      }

      window.location.hash = '#/';
      return prev;
    });
  }, []);

  const openComponentAssessment = useCallback(
    (componentId: string) => {
      const targetComponent = getComponentById(componentId);
      if (!targetComponent) {
        return;
      }

      setActiveComponentId(componentId);
      navigateToView('assessment');
      scrollMainToTop();
    },
    [navigateToView, scrollMainToTop]
  );

  const [focusAction, setFocusAction] = useState<{ lens: string; actionId: string } | null>(null);

  const openActionView = useCallback(
    (componentId: string, lens: string, actionId: string) => {
      setFocusAction({ lens, actionId });
      openComponentAssessment(componentId);
    },
    [openComponentAssessment]
  );

  useEffect(() => {
    scrollMainToTop();
  }, [scrollMainToTop, view]);

  function appendAuditEvents(
    prev: AdoptionStore,
    draftEvents: Array<Omit<AuditEvent, 'id' | 'timestamp' | 'actor'>>
  ) {
    if (!draftEvents.length) {
      return prev.auditLog;
    }

    const actor = resolveAuditActorName(
      prev.orgProfile,
      currentUserIdRef.current,
      userSettingsNameRef.current || ''
    );
    const events = draftEvents.map((event) =>
      createAuditEvent({
        actor,
        eventType: event.eventType,
        entityType: event.entityType,
        entityId: event.entityId,
        summary: event.summary,
        trustName: event.trustName ?? prev.orgProfile.trustName,
        projectName: event.projectName ?? prev.orgProfile.projectName,
        componentId: event.componentId,
        lens: event.lens,
        reason: event.reason,
        before: event.before,
        after: event.after,
        source: event.source,
        importedAt: event.importedAt,
      })
    );

    return trimAuditEvents([...(prev.auditLog || []), ...events]);
  }

  const updateEntry = useCallback((componentId: string, lens: string, entry: DraftEntry) => {
    setStore((prev) => {
      const previousEntry = prev.currentDraft[componentId]?.[lens] || createEmptyEntry();
      const nextStore = {
        ...prev,
        currentDraft: {
          ...prev.currentDraft,
          [componentId]: {
            ...prev.currentDraft[componentId],
            [lens]: cloneEntry(entry),
          },
        },
      };
      const events: Array<Omit<AuditEvent, 'id' | 'timestamp' | 'actor'>> = [];

      if (previousEntry.score !== entry.score) {
        events.push({
          eventType: 'entry-score-updated',
          entityType: 'entry',
          entityId: `${componentId}:${lens}`,
          summary: `Updated readiness score for ${componentId} / ${lens}: ${previousEntry.score} -> ${entry.score}`,
          componentId,
          lens,
          before: { score: previousEntry.score },
          after: { score: entry.score },
          source: 'local',
        });
      }

      if ((previousEntry.justification || '') !== (entry.justification || '')) {
        events.push({
          eventType: 'entry-justification-updated',
          entityType: 'entry',
          entityId: `${componentId}:${lens}`,
          summary: `Updated justification for ${componentId} / ${lens}`,
          componentId,
          lens,
          before: { justification: previousEntry.justification || '' },
          after: { justification: entry.justification || '' },
          source: 'local',
        });
      }

      if ((previousEntry.evidence || '') !== (entry.evidence || '')) {
        events.push({
          eventType: 'entry-evidence-updated',
          entityType: 'entry',
          entityId: `${componentId}:${lens}`,
          summary: `Updated evidence for ${componentId} / ${lens}`,
          componentId,
          lens,
          before: { evidence: previousEntry.evidence || '' },
          after: { evidence: entry.evidence || '' },
          source: 'local',
        });
      }

      const previousById = new Map(previousEntry.actions.map((action) => [action.id, action]));
      entry.actions.forEach((action) => {
        const previousAction = previousById.get(action.id);
        if (!previousAction) {
          events.push({
            eventType: 'action-created',
            entityType: 'action',
            entityId: action.id,
            summary: `Created action in ${componentId} / ${lens}`,
            componentId,
            lens,
            after: {
              text: action.text,
              status: action.status,
              owner: action.owner,
              actionType: action.actionType,
            },
            source: 'local',
          });
          return;
        }

        const previousActionFingerprint = JSON.stringify({
          text: previousAction.text,
          status: previousAction.status,
          owner: previousAction.owner,
          actionType: previousAction.actionType,
          notes: previousAction.notes,
          dueDate: previousAction.dueDate,
          startDate: previousAction.startDate,
          evidence: previousAction.evidence,
        });
        const nextActionFingerprint = JSON.stringify({
          text: action.text,
          status: action.status,
          owner: action.owner,
          actionType: action.actionType,
          notes: action.notes,
          dueDate: action.dueDate,
          startDate: action.startDate,
          evidence: action.evidence,
        });

        if (previousActionFingerprint !== nextActionFingerprint) {
          events.push({
            eventType: 'action-updated',
            entityType: 'action',
            entityId: action.id,
            summary: `Updated action in ${componentId} / ${lens}`,
            componentId,
            lens,
            before: {
              text: previousAction.text,
              status: previousAction.status,
              owner: previousAction.owner,
              actionType: previousAction.actionType,
            },
            after: {
              text: action.text,
              status: action.status,
              owner: action.owner,
              actionType: action.actionType,
            },
            source: 'local',
          });
        }
      });

      const syncedStore = syncDerivedContent(nextStore);
      return {
        ...syncedStore,
        auditLog: appendAuditEvents(prev, events),
      };
    });
  }, [appendAuditEvents]);

  const applyActionStatusChange = useCallback(
    (componentId: string, lens: string, actionId: string, status: UnifiedActionStatus) => {
      const entry = getEntry(componentId, lens);
      updateEntry(componentId, lens, {
        ...entry,
        actions: entry.actions.map((action) =>
          action.id === actionId ? { ...action, status: normalizeActionStatus(status) } : action
        ),
      });
    },
    [getEntry, updateEntry]
  );

  const requestActionStatusChange = useCallback(
    (componentId: string, lens: string, actionId: string, status: UnifiedActionStatus) => {
      const action = getEntry(componentId, lens).actions.find((item) => item.id === actionId);
      const shouldWarn =
        normalizeActionStatus(status) === 'Completed' &&
        action !== undefined &&
        !actionHasEvidence(action) &&
        !load<boolean>(EVIDENCE_WARNING_DISMISSED_KEY);

      if (shouldWarn) {
        setPendingStatusChange({ componentId, lens, actionId, status });
        return;
      }

      applyActionStatusChange(componentId, lens, actionId, status);
    },
    [applyActionStatusChange, getEntry]
  );

  const updateComponentObjectives = useCallback(
    (componentId: string, objectivesForComponent: ComponentObjective[]) => {
      setStore((prev) => {
        const previousObjectives = prev.objectives[componentId] || [];
        const nextStore = {
          ...prev,
          objectives: {
            ...prev.objectives,
            [componentId]: objectivesForComponent,
          },
        };

        const changed = JSON.stringify(previousObjectives) !== JSON.stringify(objectivesForComponent);
        if (!changed) {
          return nextStore;
        }

        return {
          ...nextStore,
          auditLog: appendAuditEvents(prev, [
            {
              eventType: 'objectives-updated',
              entityType: 'objective',
              entityId: componentId,
              summary: `Updated component outcomes for ${componentId}`,
              componentId,
              before: { objectiveCount: previousObjectives.length },
              after: { objectiveCount: objectivesForComponent.length },
              source: 'local',
            },
          ]),
        };
      });
    },
    [appendAuditEvents]
  );

  const confirmIfCstWarnings = useCallback(
    (actionLabel: string): boolean => {
      const validation = validateCstProfile(store.orgProfile);
      if (validation.isValid) {
        return true;
      }

      const warnings = validation.errors.map((error) => `- ${error.message}`).join('\n');
      return window.confirm(`${actionLabel} has CST warnings:\n\n${warnings}\n\nContinue anyway?`);
    },
    [store.orgProfile]
  );

  const announceStatus = useCallback((message: string) => {
    setStatusAnnouncement(message);
  }, []);

  const handleExport = useCallback(() => {
    const proceed = confirmIfCstWarnings('Export');
    if (!proceed) {
      return;
    }

    const payload = buildAdoptionExportPayload(store);

    downloadFile(
      `adoption-assessment-${(store.orgProfile.trustName || 'export').replace(/\s+/g, '_')}.json`,
      JSON.stringify(payload, null, 2),
      'application/json'
    );
    announceStatus('Assessment export downloaded.');
  }, [announceStatus, confirmIfCstWarnings, store]);

  const handleImportClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleImportFile = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      const hasJsonExtension = file.name.toLowerCase().endsWith('.json');
      const hasAcceptedType = !file.type || ACCEPTED_IMPORT_MIME_TYPES.has(file.type);
      if (!hasJsonExtension || !hasAcceptedType) {
        announceStatus('Import failed. Please choose a valid JSON file.');
        window.alert('Import failed. Please choose a valid JSON file.');
        event.target.value = '';
        return;
      }

      if (file.size > MAX_IMPORT_FILE_BYTES) {
        announceStatus('Import failed. The selected file is larger than 5 MB.');
        window.alert('Import failed. The selected file is larger than 5 MB.');
        event.target.value = '';
        return;
      }

      try {
        const text = await file.text();
        const parsed = parseImportedAdoptionAssessment(JSON.parse(text));

        const applyWholesaleImport = () => {
          setStore((prev) => {
            const merged = syncDerivedContent(mergeImportedAdoptionState(parsed, prev));
            // A wholesale replace can land without a cstId (imported file predates this
            // feature, or never had one) - backfill immediately so this becomes a stable
            // identity going forward rather than waiting for the next full page reload.
            if (!merged.orgProfile.cstId) {
              merged.orgProfile = { ...merged.orgProfile, cstId: createCstId() };
            }
            return {
              ...merged,
              auditLog: appendAuditEvents(merged, [
                {
                  eventType: 'data-imported',
                  entityType: 'system',
                  summary: `Imported assessment data from ${file.name}`,
                  after: {
                    fileName: file.name,
                  },
                  source: 'local',
                },
              ]),
            };
          });
          setView('dashboard');
          announceStatus('Assessment import complete. Dashboard updated.');
        };

        if (isCstEmpty(store)) {
          applyWholesaleImport();
          return;
        }

        const importedCstId = parsed.orgProfile?.cstId;
        const currentCstId = store.orgProfile.cstId;
        const currentLabel =
          store.orgProfile.projectName || store.orgProfile.trustName || 'your currently loaded programme';
        const theirLabel = parsed.orgProfile?.projectName || parsed.orgProfile?.trustName || file.name;

        if (importedCstId && importedCstId !== currentCstId) {
          const proceed = window.confirm(
            `"${theirLabel}" looks like a different programme than "${currentLabel}".\n\nImporting will replace everything currently loaded. Continue?`
          );
          if (!proceed) {
            announceStatus('Import cancelled.');
            return;
          }
          applyWholesaleImport();
          return;
        }

        if (!importedCstId) {
          const treatAsUpdate = window.confirm(
            `"${theirLabel}" doesn't carry a programme ID (it may predate this feature).\n\nClick OK to compare it against "${currentLabel}" and merge item by item, or Cancel to load it as a different programme (replace everything).`
          );
          if (!treatAsUpdate) {
            applyWholesaleImport();
            return;
          }
        }

        const report = buildConflictReport(store, parsed);
        if (!report.hasConflicts) {
          setStore((prev) => {
            const merged = syncDerivedContent(applyConflictResolutions(prev, parsed, {}));
            return {
              ...merged,
              auditLog: appendAuditEvents(merged, [
                {
                  eventType: 'data-imported',
                  entityType: 'system',
                  summary: report.autoMergeSummary.length
                    ? `Merged import from ${file.name} (${report.autoMergeSummary.join(', ')})`
                    : `Imported ${file.name} - no changes (already up to date)`,
                  after: { fileName: file.name },
                  source: 'local',
                },
              ]),
            };
          });
          setView('dashboard');
          announceStatus(
            report.autoMergeSummary.length
              ? `Merged automatically: ${report.autoMergeSummary.join(', ')}.`
              : 'Already up to date - nothing to import.'
          );
          return;
        }

        setImportConflict({ file, parsed, report });
      } catch (_error) {
        announceStatus('Import failed. Please verify the file contents.');
        window.alert('Unable to import adoption assessment. Please verify the file contents.');
      } finally {
        event.target.value = '';
      }
    },
    [announceStatus, appendAuditEvents, store]
  );

  const handleResolveImportConflict = useCallback(
    (resolutions: Record<string, ConflictChoice>) => {
      if (!importConflict) {
        return;
      }
      const { file, parsed } = importConflict;
      const conflictCount = Object.keys(resolutions).length;
      setStore((prev) => {
        const merged = syncDerivedContent(applyConflictResolutions(prev, parsed, resolutions));
        return {
          ...merged,
          auditLog: appendAuditEvents(merged, [
            {
              eventType: 'data-imported',
              entityType: 'system',
              summary: `Merged import from ${file.name} (${conflictCount} item(s) resolved)`,
              after: { fileName: file.name },
              source: 'local',
            },
          ]),
        };
      });
      setImportConflict(null);
      setView('dashboard');
      announceStatus('Import merged into current programme.');
    },
    [announceStatus, appendAuditEvents, importConflict]
  );

  const handleCancelImportConflict = useCallback(() => {
    setImportConflict(null);
    announceStatus('Import cancelled.');
  }, [announceStatus]);

  const handleLoadExampleData = useCallback(async (profile: 'red' | 'amber' | 'green') => {
    try {
      const response = await fetch(EXAMPLE_DATA_FILES[profile]);
      if (!response.ok) {
        throw new Error(`Failed to load sample data: ${response.status}`);
      }

      const payload = parseImportedAdoptionAssessment(await response.json());
      setStore((prev) => {
        const merged = syncDerivedContent(mergeImportedAdoptionState(payload, prev));
        return {
          ...merged,
          auditLog: appendAuditEvents(merged, [
            {
              eventType: 'example-data-loaded',
              entityType: 'system',
              summary: 'Loaded example assessment data',
              source: 'local',
            },
          ]),
        };
      });
      setView('dashboard');
      announceStatus('Example assessment data loaded.');
      if (shouldAutoCloseSidebar()) {
        setIsSidebarOpen(false);
      }
    } catch (error) {
      console.error(error);
      announceStatus('Unable to load example data right now.');
      window.alert('Unable to load example data right now. Please try again.');
    }
  }, [announceStatus, appendAuditEvents]);

  const handleResetData = useCallback(() => {
    const confirmed = window.confirm(
      'Warning: this will reset all assessment data (organisation profile, scores, actions, and history) and sign you out. If you are worried, please export your data first. Continue?'
    );

    if (!confirmed) {
      return;
    }

    const resetStore = syncDerivedContent(initializeStore());
    setStore(resetStore);
    setView('introduction');

    setUserSettings(DEFAULT_USER_SETTINGS);
    save(ADOPTION_USER_SETTINGS_KEY, DEFAULT_USER_SETTINGS);

    localStorage.removeItem(ADOPTION_ENGAGEMENT_KEY);

    setDismissedReminderMonths({});
    save(ADOPTION_REPORT_REMINDER_DISMISS_KEY, {});

    save(ADOPTION_INTRODUCTION_COMPLETE_KEY, false);

    setCurrentUserId('');
    save(ADOPTION_CURRENT_USER_KEY, '');

    Object.keys(localStorage)
      .filter((key) => key.startsWith('nhs-digital-adoption-page-intro-seen:'))
      .forEach((key) => localStorage.removeItem(key));

    announceStatus('Assessment data has been reset and you have been signed out.');

    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  }, [announceStatus]);

  const buildPointInTimePayload = useCallback(() => {
    return {
      generatedAt: new Date().toISOString(),
      targetMonth: reportReminder.previousMonthLabel,
      report: buildAdoptionExportPayload(store),
    };
  }, [reportReminder.previousMonthLabel, store]);

  const buildPointInTimeFilename = useCallback(() => {
    const monthSlug = reportReminder.previousMonthLabel.toLowerCase().replace(/\s+/g, '-');
    return `adoption-point-in-time-${monthSlug}.json`;
  }, [reportReminder.previousMonthLabel]);

  const handleDownloadPointInTimeJson = useCallback(() => {
    const filename = buildPointInTimeFilename();
    downloadFile(filename, JSON.stringify(buildPointInTimePayload(), null, 2), 'application/json');
  }, [buildPointInTimeFilename, buildPointInTimePayload]);

  const handleOpenMailDraft = useCallback(() => {
    const recipient = emailTo.trim() || 'test@test.com';
    const attachmentName = buildPointInTimeFilename();
    const body = `${emailBody}\n\nAttachment: ${attachmentName}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }, [buildPointInTimeFilename, emailBody, emailSubject, emailTo]);

  const handleDownloadEmailDraft = useCallback(() => {
    const recipient = emailTo.trim() || 'test@test.com';
    const jsonFilename = buildPointInTimeFilename();
    const payload = JSON.stringify(buildPointInTimePayload(), null, 2);
    const encodedAttachment = wrapBase64Lines(toBase64Utf8(payload));
    const boundary = `----nhs-adoption-reminder-${Date.now()}`;
    const eml = [
      `To: ${recipient}`,
      `Subject: ${emailSubject}`,
      'MIME-Version: 1.0',
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      '',
      `--${boundary}`,
      'Content-Type: text/plain; charset="UTF-8"',
      'Content-Transfer-Encoding: 8bit',
      '',
      emailBody,
      '',
      `--${boundary}`,
      `Content-Type: application/json; name="${jsonFilename}"`,
      'Content-Transfer-Encoding: base64',
      `Content-Disposition: attachment; filename="${jsonFilename}"`,
      '',
      encodedAttachment,
      `--${boundary}--`,
      '',
    ].join('\r\n');

    const monthSlug = reportReminder.previousMonthLabel.toLowerCase().replace(/\s+/g, '-');
    downloadFile(`adoption-reminder-${monthSlug}.eml`, eml, 'message/rfc822');
  }, [
    buildPointInTimeFilename,
    buildPointInTimePayload,
    emailBody,
    emailSubject,
    emailTo,
    reportReminder.previousMonthLabel,
  ]);

  const dismissReportReminder = useCallback(() => {
    setDismissedReminderMonths((prev) => ({
      ...prev,
      [currentReminderMonthKey]: true,
    }));
  }, [currentReminderMonthKey]);

  const shouldShowReportReminder =
    reportReminder.shouldNotify && !dismissedReminderMonths[currentReminderMonthKey];

  const engagementObjectives = useMemo(
    () => computeEngagementObjectives(store, metrics, currentMonthLabel),
    [store, metrics, currentMonthLabel]
  );
  const completedObjectivesCount = useMemo(
    () => engagementObjectives.filter((objective) => objective.completed).length,
    [engagementObjectives]
  );

  const handleUserSettingsUpdate = useCallback((nextSettings: AdoptionUserSettings) => {
    setUserSettings(nextSettings);
  }, []);

  const handleProfileUpdate = useCallback((updatedProfile: OrgProfile) => {
    setStore((prev) => {
      const pathwayChanged = prev.orgProfile.cst.pathway !== updatedProfile.cst.pathway;
      const mergedStore = { ...prev, orgProfile: updatedProfile };
      const nextStore = pathwayChanged
        ? regenerateContentForPathway(mergedStore, updatedProfile.cst.pathway)
        : mergedStore;

      const changed = JSON.stringify(prev.orgProfile) !== JSON.stringify(updatedProfile);
      if (!changed) {
        return nextStore;
      }

      return {
        ...nextStore,
        auditLog: appendAuditEvents(prev, [
          {
            eventType: 'profile-updated',
            entityType: 'profile',
            summary: 'Updated CST profile details',
            before: {
              trustName: prev.orgProfile.trustName,
              projectName: prev.orgProfile.projectName,
              cst: prev.orgProfile.cst,
            },
            after: {
              trustName: updatedProfile.trustName,
              projectName: updatedProfile.projectName,
              cst: updatedProfile.cst,
            },
            source: 'local',
          },
          ...(pathwayChanged
            ? [
                {
                  eventType: 'pathway-changed' as const,
                  entityType: 'profile' as const,
                  summary: `Changed pathway from ${prev.orgProfile.cst.pathway} to ${updatedProfile.cst.pathway}`,
                  before: { pathway: prev.orgProfile.cst.pathway },
                  after: { pathway: updatedProfile.cst.pathway },
                  source: 'local' as const,
                },
              ]
            : []),
        ]),
      };
    });
  }, []);

  const getComponentStatus = (comp: (typeof COMPONENTS)[0]) => {
    let scoredCount = 0;
    let justifiedCount = 0;
    let actionCount = 0;
    let completedActionCount = 0;

    comp.lenses.forEach((l) => {
      const e = store.currentDraft[comp.id]?.[l];
      if (e && e.score > 0) {
        scoredCount++;
        if (e.justification?.trim()) {
          justifiedCount++;
        }
      }
      const actions = e?.actions || [];
      actionCount += actions.length;
      completedActionCount += actions.filter((action) => isCompletedActionStatus(action.status)).length;
    });

    if (scoredCount === 0) {
      return { icon: '◯', color: 'text-blue-100', label: 'Not Started' };
    }
    if (scoredCount > justifiedCount) {
      return { icon: '⚠', color: 'text-red-300', label: 'Missing Justification' };
    }
    if (scoredCount < comp.lenses.length) {
      return { icon: '◐', color: 'text-amber-300', label: 'In Progress' };
    }
    if (actionCount <= 0 || completedActionCount < actionCount) {
      return { icon: '◐', color: 'text-amber-300', label: 'In Progress' };
    }
    return { icon: '✓', color: 'text-green-300', label: 'Completed' };
  };

  const trustLabel = store.orgProfile.trustName || 'Unconfigured Trust';
  const projectLabel = store.orgProfile.projectName || 'Unnamed Project';
  const projectConfigured = !isCstUnconfigured(store.orgProfile);

  return (
    <div
      className={`flex h-screen overflow-hidden ${userSettings.darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}
    >
      <div role="status" aria-live="polite" className="sr-only">
        {statusAnnouncement}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleImportFile}
      />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-slate-900/35 backdrop-blur-[1px] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 bg-[#005eb8] text-white flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-out lg:static lg:translate-x-0 ${
          isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full lg:w-0'
        }`}
        style={{ backgroundColor: userSettings.themeColor }}
      >
        <div className="p-6 border-b border-blue-700">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold tracking-tight">NHS Digital Adoption</h1>
              <p className="text-blue-200 text-xs mt-1 flex justify-between items-center">
                <span>Readiness Tracking Tool</span>
                <span className="opacity-80 font-medium">V6.6</span>
              </p>
            </div>
            {userSettings.profileImageDataUrl ? (
              <img
                src={userSettings.profileImageDataUrl}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-blue-200 object-cover"
              />
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => handleViewChange('profile')}
            className="mt-3 w-full rounded-md bg-blue-700 p-2 text-left text-xs hover:bg-blue-600"
          >
            <div className="font-semibold text-blue-100">
              Objectives: {completedObjectivesCount}/{engagementObjectives.length}
            </div>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <button
            type="button"
            aria-expanded={expandedNavSections.intro}
            onClick={() =>
              setExpandedNavSections((current) => ({ ...current, intro: !current.intro }))
            }
            className="mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white"
          >
            <span>Intro</span>
            <span aria-hidden="true">{expandedNavSections.intro ? '−' : '+'}</span>
          </button>
          {expandedNavSections.intro ? (
            <nav className="space-y-1 mb-4">
              {(['introduction', 'engine-explained', 'project-details'] as View[]).map((v) => (
                <button
                  key={v}
                  ref={(el) => {
                    navItemRefs.current[`view:${v}`] = el;
                  }}
                  onClick={() => handleViewChange(v)}
                  className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                    view === v
                      ? 'bg-blue-800 text-white font-medium border-l-4 border-white'
                      : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'
                  }`}
                >
                  {v === 'introduction'
                    ? 'Introduction'
                    : v === 'engine-explained'
                      ? 'Engine Explained'
                      : 'Project Profile'}
                </button>
              ))}
            </nav>
          ) : null}

          {projectConfigured ? (
            <>
          <button
            type="button"
            aria-expanded={expandedNavSections.overview}
            onClick={() =>
              setExpandedNavSections((current) => ({ ...current, overview: !current.overview }))
            }
            className="mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white"
          >
            <span>Overview</span>
            <span aria-hidden="true">{expandedNavSections.overview ? '−' : '+'}</span>
          </button>
          {expandedNavSections.overview ? (
            <nav className="space-y-1 mb-4">
              {(['dashboard', 'daily-checkin', 'action-plan', 'roadmap-view'] as View[]).map((v) => (
                <button
                  key={v}
                  ref={(el) => {
                    navItemRefs.current[`view:${v}`] = el;
                  }}
                  onClick={() => handleViewChange(v)}
                  className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                    view === v
                      ? 'bg-blue-800 text-white font-medium border-l-4 border-white'
                      : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'
                  }`}
                >
                  {v === 'dashboard'
                    ? 'Metrics Dashboard'
                    : v === 'daily-checkin'
                      ? 'Daily Check-in'
                      : v === 'action-plan'
                        ? 'Action Tracker'
                        : 'Component Delivery Timeline'}
                </button>
              ))}
            </nav>
          ) : null}

          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Change Components
          </div>
          <nav className="space-y-1 mb-8">
            {Array.from(new Set(COMPONENTS.map((comp) => comp.phase))).map((phase) => {
              const phaseComponents = COMPONENTS.filter((comp) => comp.phase === phase);
              const isExpanded = expandedNavPhases[phase] ?? false;
              return (
                <div key={phase}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedNavPhases((current) => ({
                        ...current,
                        [phase]: !isExpanded,
                      }))
                    }
                    className="flex w-full items-center justify-between px-4 pb-1 pt-3 text-left text-[10px] font-semibold uppercase tracking-wider text-blue-300 hover:text-white"
                  >
                    <span>{PHASE_NAMES[phase] || `Phase ${phase}`}</span>
                    <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                  </button>
                  {isExpanded
                    ? phaseComponents.map((comp) => {
                        const isActive = view === 'assessment' && activeComponentId === comp.id;
                        const status = getComponentStatus(comp);
                        return (
                          <button
                            key={comp.id}
                            ref={(el) => {
                              navItemRefs.current[`component:${comp.id}`] = el;
                            }}
                            onClick={() => {
                              openComponentAssessment(comp.id);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                              isActive
                                ? 'bg-white font-medium text-[#005eb8]'
                                : `hover:bg-blue-800 ${status.color}`
                            }`}
                          >
                            <span className="truncate pr-2">{escapeHtml(comp.label)}</span>
                            <span
                              className="text-xs flex-shrink-0"
                              title={status.label}
                              aria-label={status.label}
                            >
                              {status.icon}
                            </span>
                          </button>
                        );
                      })
                    : null}
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            aria-expanded={expandedNavSections.tools}
            onClick={() =>
              setExpandedNavSections((current) => ({ ...current, tools: !current.tools }))
            }
            className="mb-2 flex w-full items-center justify-between px-4 text-left text-xs font-semibold uppercase tracking-wider text-blue-300 hover:text-white"
          >
            <span>Tools</span>
            <span aria-hidden="true">{expandedNavSections.tools ? '−' : '+'}</span>
          </button>
          {expandedNavSections.tools ? (
            <nav className="space-y-1 mb-8">
              {(
                ['highlight-builder', 'force-field-analysis', 'compare', 'audit-log'] as View[]
              ).map((v) => (
                <button
                  key={v}
                  ref={(el) => {
                    navItemRefs.current[`view:${v}`] = el;
                  }}
                  onClick={() => handleViewChange(v)}
                  className={`w-full flex items-center px-4 py-1 text-sm transition-colors ${
                    view === v
                      ? 'bg-blue-800 text-white font-medium border-l-4 border-white'
                      : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'
                  }`}
                >
                  {v === 'highlight-builder'
                    ? 'Highlight Builder'
                    : v === 'force-field-analysis'
                      ? 'Force Field Analysis'
                      : v === 'compare'
                        ? 'Assess & Compare'
                        : 'Audit Log'}
                </button>
              ))}
            </nav>
          ) : null}
            </>
          ) : null}

          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider border-t border-blue-800 pt-6">
            Account
          </div>
          <nav className="space-y-1 mb-8">
            {(projectConfigured ? (['settings', 'profile'] as View[]) : (['profile'] as View[])).map(
              (v) => (
                <button
                  key={v}
                  ref={(el) => {
                    navItemRefs.current[`view:${v}`] = el;
                  }}
                  onClick={() => handleViewChange(v)}
                  className={`w-full flex items-center px-4 py-1 text-sm transition-colors ${
                    view === v
                      ? 'bg-blue-800 text-white font-medium border-l-4 border-white'
                      : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'
                  }`}
                >
                  {v === 'settings' ? 'Settings' : 'Profile'}
                </button>
              )
            )}
          </nav>

          <div className="mt-8 px-4 pb-4 border-t border-blue-800 pt-6">
            <div className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Status Legend
            </div>
            <div className="space-y-2 text-xs text-blue-200">
              <div>◯ Not Started</div>
              <div>◐ In Progress</div>
              <div>⚠ Missing Justification</div>
              <div>✓ Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header
          className={`${userSettings.darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-b px-3 py-2 sm:px-6 shrink-0 z-10 ${view === 'introduction' ? '' : 'shadow-sm'}`}
          style={{ borderTop: `3px solid ${userSettings.themeColor}` }}
        >
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsSidebarOpen((current) => !current)}
                className="inline-flex h-9 items-center justify-center px-3 text-white rounded-md font-semibold transition-colors shadow-sm"
                aria-label={isSidebarOpen ? 'Collapse side navigation' : 'Expand side navigation'}
                title={isSidebarOpen ? 'Collapse side navigation' : 'Expand side navigation'}
                style={{ backgroundColor: userSettings.themeColor }}
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {isSidebarOpen ? '«' : '»'}
                </span>
                <span className="sr-only">
                  {isSidebarOpen ? 'Collapse side navigation' : 'Expand side navigation'}
                </span>
              </button>
              <button
                onClick={handleBackNavigation}
                disabled={viewHistory.length === 0}
                title={
                  viewHistory.length === 0 ? 'No previous in-app page' : 'Back to previous page'
                }
                className={`h-9 text-sm px-3 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                  userSettings.darkMode
                    ? 'text-slate-100 hover:bg-slate-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                ← Back
              </button>

              <div className="min-w-0">
                <div className="flex min-w-0 items-center gap-1 text-sm">
                  <span
                    className={`truncate font-semibold ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                    title={trustLabel}
                  >
                    {trustLabel}
                  </span>
                  <span
                    className={`${userSettings.darkMode ? 'text-slate-300' : 'text-slate-400'}`}
                  >
                    /
                  </span>
                  <span
                    className={`truncate ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-600'}`}
                    title={projectLabel}
                  >
                    {projectLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800 sm:h-9 sm:w-auto sm:rounded-full"
                title="Auto-save on"
                aria-label="Auto-save on"
              >
                <span
                  className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="sr-only sm:not-sr-only sm:ml-1">Auto-save on</span>
              </span>
              <button
                onClick={() => handleViewChange('introduction')}
                aria-label="Show introduction"
                title="Show introduction"
                className={`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${nhsFocusRing}`}
              >
                ?
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/';
                }}
                aria-label="Go to home page"
                title="Go to home page"
                className={`${nhsButtonSecondary} h-9 w-16 px-6 py-0 inline-flex items-center justify-center`}
              >
                Home
              </button>
              
              <button onClick={handleImportClick} className={`${nhsButtonSecondary} h-9 px-3 py-0`}>
                Import
              </button>
              <button onClick={handleExport} className={`${nhsButtonSecondary} h-9 px-3 py-0`}>
                <span className="sm:hidden">Export</span>
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main ref={mainContentRef} className="flex-1 overflow-y-auto p-8">
          {view === 'daily-checkin' && showEngagementCard ? (
            <section
              className={`${userSettings.darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} mb-6 rounded-xl border p-4 shadow-sm`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${userSettings.darkMode ? 'text-slate-300' : 'text-slate-500'}`}
                  >
                    Objectives
                  </p>
                  <p
                    className={`text-sm mt-1 ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                  >
                    {completedObjectivesCount}/{engagementObjectives.length} complete - based on
                    phase readiness, ownership, cadence and team participation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEngagementCard(false)}
                  className={`${userSettings.darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-2 text-sm font-medium`}
                  aria-label="Dismiss objectives card"
                >
                  Dismiss
                </button>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {engagementObjectives.map((objective) => (
                  <div
                    key={objective.id}
                    className={`rounded-lg border p-3 ${
                      objective.completed
                        ? 'border-green-200 bg-green-50'
                        : userSettings.darkMode
                          ? 'border-slate-700 bg-slate-900'
                          : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p
                        className={`text-sm font-semibold ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                      >
                        {objective.label}
                      </p>
                      <span className="text-xs font-bold">
                        {objective.completed ? 'Done' : 'Not yet'}
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-xs ${userSettings.darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                    >
                      {objective.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {view === 'dashboard' && (
            <div ref={dashboardRef}>
              <AdoptionDashboard
                store={store}
                components={COMPONENTS}
                lenses={MUTABLE_LENSES}
                metrics={metrics}
                phaseFocusMode={userSettings.phaseFocusMode || 'auto'}
                manualPhaseFocus={userSettings.manualPhaseFocus}
                onPhaseFocusModeChange={(mode) =>
                  setUserSettings((prev) => ({
                    ...prev,
                    phaseFocusMode: mode,
                    manualPhaseFocus: mode === 'manual' ? prev.manualPhaseFocus || metrics.currentPhase : prev.manualPhaseFocus,
                  }))
                }
                onManualPhaseFocusChange={(phase) =>
                  setUserSettings((prev) => ({
                    ...prev,
                    phaseFocusMode: 'manual',
                    manualPhaseFocus: phase,
                  }))
                }
                onResetPhaseFocus={() =>
                  setUserSettings((prev) => ({
                    ...prev,
                    phaseFocusMode: 'auto',
                    manualPhaseFocus: metrics.currentPhase,
                  }))
                }
                getEntry={getEntry}
                onComponentClick={openComponentAssessment}
                onNavigate={handleViewChange}
                onOpenLensInfo={setActiveLensInfo}
                onOpenOnboarding={() => handleViewChange('introduction')}
                colorAccessibilityMode={userSettings.colorAccessibilityMode || 'standard'}
                darkMode={Boolean(userSettings.darkMode)}
                componentRadarVisible={componentRadarVisible}
                onComponentRadarVisibleChange={setComponentRadarVisible}
                componentRadarSize={componentRadarSize}
                onComponentRadarSizeChange={setComponentRadarSize}
              />
            </div>
          )}
          {view === 'daily-checkin' && (
            <DailyCheckIn
              store={store}
              components={COMPONENTS}
              metrics={metrics}
              getEntry={getEntry}
              onComponentClick={openComponentAssessment}
              onActionView={openActionView}
              guidanceTarget={DEFAULT_GUIDANCE_TARGET}
              linkOverrides={store.orgProfile.linkOverrides}
              showAdditionalGuidanceLinks={showAdditionalGuidanceLinks}
              phaseFocusMode={userSettings.phaseFocusMode || 'auto'}
              manualPhaseFocus={userSettings.manualPhaseFocus}
              colorAccessibilityMode={userSettings.colorAccessibilityMode || 'standard'}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'project-details' && (
            <ProjectDetailsPage
              orgProfile={store.orgProfile}
              onProfileUpdate={handleProfileUpdate}
              components={COMPONENTS}
              lenses={MUTABLE_LENSES}
              onComponentClick={openComponentAssessment}
              onGoToIntroduction={() => handleViewChange('introduction')}
              onContinueToVision={() => openComponentAssessment('vision')}
              currentUserId={currentUserId}
              onCurrentUserChange={setCurrentUserId}
              showExternalLinksSection={Boolean(userSettings.showExternalLinksSection)}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'assessment' && (
            <AssessmentPanel
              store={store}
              components={COMPONENTS}
              activeComponentId={activeComponentId}
              getRubricText={getRubricText}
              getEntry={getEntry}
              onComponentChange={openComponentAssessment}
              onEntryUpdate={updateEntry}
              onOpenLensInfo={setActiveLensInfo}
              onActionRemove={(componentId, lens, actionId) => {
                const entry = getEntry(componentId, lens);
                const actionToRemove = entry.actions.find((action) => action.id === actionId);
                if (!actionToRemove) {
                  return;
                }

                const reason = window.prompt(
                  'Please provide a reason for removing this action. This will be included in the JSON export audit log.'
                );
                if (!reason || !reason.trim()) {
                  window.alert('Removal cancelled. A reason is required to remove an action.');
                  return;
                }

                setStore((prev) => {
                  const sourceEntry = prev.currentDraft[componentId]?.[lens] || createEmptyEntry();
                  const nextEntry: DraftEntry = {
                    ...sourceEntry,
                    actions: sourceEntry.actions
                      .filter((candidate) => candidate.id !== actionId)
                      .map(cloneAction),
                  };

                  const nextSuppressedAutoActions = { ...prev.suppressedAutoActions };
                  if (
                    actionId.startsWith('vision-action:') ||
                    actionId.startsWith('case-for-change-action:') ||
                    actionId.startsWith('benefits-action:') ||
                    actionId.startsWith('sponsorship-action:') ||
                    actionId.startsWith('change-impact-action:')
                  ) {
                    const suppressionKey = buildSuppressedAutoActionKey(componentId, lens);
                    const currentSuppressed = nextSuppressedAutoActions[suppressionKey] || [];
                    if (!currentSuppressed.includes(actionId)) {
                      nextSuppressedAutoActions[suppressionKey] = [...currentSuppressed, actionId];
                    }
                  }

                  const nextStore = {
                    ...prev,
                    currentDraft: {
                      ...prev.currentDraft,
                      [componentId]: {
                        ...prev.currentDraft[componentId],
                        [lens]: nextEntry,
                      },
                    },
                    suppressedAutoActions: nextSuppressedAutoActions,
                  };

                  const syncedStore = syncDerivedContent(nextStore);
                  return {
                    ...syncedStore,
                    auditLog: appendAuditEvents(prev, [
                      {
                        eventType: 'action-removed',
                        entityType: 'action',
                        entityId: actionId,
                        summary: `Removed action from ${componentId} / ${lens}`,
                        componentId,
                        lens,
                        reason: reason.trim(),
                        before: {
                          text: actionToRemove.text,
                          status: actionToRemove.status,
                          owner: actionToRemove.owner,
                          actionType: actionToRemove.actionType,
                        },
                        source: 'local',
                      },
                    ]),
                  };
                });
              }}
              onObjectivesUpdate={updateComponentObjectives}
              onNavigateToTool={(tool) => handleViewChange(tool)}
              hideGuidedWorkflow={Boolean(userSettings.hideGuidedWorkflow)}
              onHideGuidedWorkflow={() =>
                setUserSettings((prev) => ({ ...prev, hideGuidedWorkflow: true }))
              }
              showAdditionalGuidanceLinks={showAdditionalGuidanceLinks}
              darkMode={Boolean(userSettings.darkMode)}
              focusAction={focusAction}
              onFocusActionHandled={() => setFocusAction(null)}
            />
          )}
          {view === 'action-plan' && (
            <ActionPlanTracker
              actions={actionRows}
              onComponentClick={openComponentAssessment}
              onStatusChange={requestActionStatusChange}
              teamMembers={store.orgProfile.teamMembers || []}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'introduction' && (
            <OnboardingOverviewPage
              darkMode={Boolean(userSettings.darkMode)}
              onGetStarted={() => handleViewChange('engine-explained')}
            />
          )}
          {view === 'engine-explained' && (
            <EngineExplainedPage
              darkMode={Boolean(userSettings.darkMode)}
              onGetStarted={() => handleViewChange('project-details')}
            />
          )}
          {view === 'roadmap-view' && (
            <GuidanceRoadmapView
              components={COMPONENTS}
              metrics={metrics}
              getEntry={getEntry}
              onComponentClick={openComponentAssessment}
              pathway={store.orgProfile.cst.pathway}
              pathwayChecks={store.pathwayChecks}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'highlight-builder' && (
            <HighlightBuilderTool
              store={store}
              metrics={metrics}
              lenses={MUTABLE_LENSES}
              components={COMPONENTS}
              getEntry={getEntry}
              trustName={store.orgProfile.trustName}
              projectName={store.orgProfile.projectName}
              themeColor={userSettings.themeColor}
              currentUserId={currentUserId}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'force-field-analysis' && (
            <ForceFieldAnalysisApp embedded onBack={() => handleViewChange('dashboard')} />
          )}
          {view === 'compare' && (
            <CompareApp embedded onBack={() => handleViewChange('dashboard')} />
          )}
          {view === 'audit-log' && (
            <AuditLogPage events={store.auditLog} darkMode={Boolean(userSettings.darkMode)} />
          )}
          {view === 'settings' && (
            <SettingsPanel
              userSettings={userSettings}
              onUserSettingsUpdate={handleUserSettingsUpdate}
              onLoadExampleData={handleLoadExampleData}
              onResetData={handleResetData}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'profile' && (
            <ProfilePage
              orgProfile={store.orgProfile}
              onProfileUpdate={handleProfileUpdate}
              userSettings={userSettings}
              onUserSettingsUpdate={handleUserSettingsUpdate}
              objectives={engagementObjectives}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
        </main>

        {activeLensInfo ? (
          <LensInfoModal
            lensName={activeLensInfo}
            onClose={() => setActiveLensInfo('')}
            darkMode={Boolean(userSettings.darkMode)}
          />
        ) : null}

        {importConflict ? (
          <ImportConflictModal
            report={importConflict.report}
            myLabel={store.orgProfile.projectName || store.orgProfile.trustName || 'Mine'}
            theirLabel={
              importConflict.parsed.orgProfile?.projectName ||
              importConflict.parsed.orgProfile?.trustName ||
              importConflict.file.name
            }
            onResolve={handleResolveImportConflict}
            onCancel={handleCancelImportConflict}
            darkMode={Boolean(userSettings.darkMode)}
          />
        ) : null}

        <ToolkitChatbot
          toolkitChoice={store.orgProfile.cst.toolkitChoice}
          darkMode={Boolean(userSettings.darkMode)}
        />

        <VisionGetStartedModal
          open={view === 'assessment' && activeComponentId === 'vision' && visionGetStarted.isOpen}
          onClose={visionGetStarted.close}
          darkMode={Boolean(userSettings.darkMode)}
        />

        <EvidenceWarningModal
          open={pendingStatusChange !== null}
          onCancel={() => setPendingStatusChange(null)}
          onContinue={(doNotShowAgain) => {
            if (!pendingStatusChange) {
              return;
            }
            if (doNotShowAgain) {
              save(EVIDENCE_WARNING_DISMISSED_KEY, true);
            }
            applyActionStatusChange(
              pendingStatusChange.componentId,
              pendingStatusChange.lens,
              pendingStatusChange.actionId,
              pendingStatusChange.status
            );
            setPendingStatusChange(null);
          }}
          darkMode={Boolean(userSettings.darkMode)}
        />

      </div>
    </div>
  );
}

export default AdoptionApp;
