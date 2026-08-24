import { OnboardingIntro } from '@components/onboarding/OnboardingIntro';
import { ToolkitChatbot } from '@components/ui/ToolkitChatbot';
import { ActionPlanTracker } from '@components/views/ActionPlanTracker';
import { AdoptionDashboard } from '@components/views/AdoptionDashboard';
import { DailyCheckIn } from '@components/views/DailyCheckIn';
import { AssessmentPanel } from '@components/views/AssessmentPanel';
import { AuditLogPage } from '@components/views/AuditLogPage';
import { ChangeManagementGuide } from '@components/views/ChangeManagementGuide';
import { ProjectDetailsPage } from '@components/views/CSTDetailsPage';
import { GuidanceRoadmapView } from '@components/views/GuidanceRoadmapView';
import { HighlightBuilderTool } from '@components/views/HighlightBuilderTool';
import { ImportConflictModal } from '@components/views/ImportConflictModal';
import { LensInfoModal } from '@components/views/LensInfoModal';
import { OnboardingOverviewPage } from '@components/views/OnboardingOverviewPage';
import { type AdoptionUserSettings, SettingsPanel } from '@components/views/SettingsPanel';
import { ProfilePage } from '@components/views/ProfilePage';
import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
import {
  COMPETENCE_OPTIONS,
  type CompetenceGrade,
  CONFIDENCE_OPTIONS,
  type ConfidenceScore,
  type OverarchingPhase,
  PATHWAY_LABELS,
} from '@data/cst';
import { ASSESSMENT_LENSES as LENSES } from '@data/lenses';
import {
  type MaturityGuidanceTarget,
  resolveGuidanceLinksForAdoptionComponent,
} from '@data/maturity-guidance-links';
import { GENERIC_RUBRIC } from '@data/rubrics';
import { isCompletedActionStatus } from '@lib/actionModel';
import {
  ADOPTION_STORAGE_KEY,
  buildAdoptionExportPayload,
  buildHistorySnapshot,
  mergeImportedAdoptionState,
  migrateSavedAdoptionAssessment,
  parseImportedAdoptionAssessment,
  type SavedAdoptionAssessment,
} from '@lib/adoptionIO';
import {
  buildComponentRadarChartData,
  buildRadarChartData,
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
import { syncBenefitsDerivedContent } from '@lib/benefitsAutomation';
import { syncCapabilityDerivedContent } from '@lib/capabilityAutomation';
import { syncCaseForChangeDerivedContent } from '@lib/caseForChangeAutomation';
import { syncChangeAdoptionDerivedContent } from '@lib/changeAdoptionAutomation';
import { syncChangeImpactDerivedContent } from '@lib/changeImpactAutomation';
import { syncChangeNetworkDerivedContent } from '@lib/changeNetworkAutomation';
import { createLineChart, createRadarChart } from '@lib/charts';
import { syncCmReadinessDerivedContent } from '@lib/cmReadinessAutomation';
import {
  applyConflictResolutions,
  buildConflictReport,
  type ConflictChoice,
  type ConflictReport,
} from '@lib/cstConflict';
import { syncOrgChangeReadinessDerivedContent } from '@lib/orgChangeReadinessAutomation';
import { syncPathwayObjectives } from '@lib/pathwayObjectives';
import { syncProcessChangeDerivedContent } from '@lib/processChangeAutomation';
import { syncReinforcementDerivedContent } from '@lib/reinforcementAutomation';
import { syncResistanceDerivedContent } from '@lib/resistanceAutomation';
import { syncRiskManagementDerivedContent } from '@lib/riskManagementAutomation';
import { syncSkillsLearningDerivedContent } from '@lib/skillsLearningAutomation';
import { syncSponsorshipDerivedContent } from '@lib/sponsorshipAutomation';
import { syncStakeholderDerivedContent } from '@lib/stakeholderAutomation';
import AppState from '@lib/state';
import { load, save } from '@lib/storage';
import { syncTransferToBauDerivedContent } from '@lib/transferToBauAutomation';
import { downloadFile, escapeHtml } from '@lib/utils';
import { syncVisionDerivedContent } from '@lib/visionAutomation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { nhsButtonPrimary, nhsButtonSecondary, nhsFocusRing } from '../styles/nhsTheme';
import { PHASE_NAMES, SPECIFIC_RUBRICS } from '../types/constants';

const ADOPTION_USER_SETTINGS_KEY = 'nhs-digital-adoption-user-settings';
const ADOPTION_REPORT_REMINDER_DISMISS_KEY = 'nhs-digital-adoption-report-reminder-dismissed';
const ADOPTION_ENGAGEMENT_KEY = 'nhs-digital-adoption-engagement';
const ADOPTION_ONBOARDING_SEEN_KEY = 'nhs-digital-adoption-onboarding-seen';
const ADOPTION_CURRENT_USER_KEY = 'nhs-digital-adoption-current-user-id';
const DEFAULT_GUIDANCE_TARGET: MaturityGuidanceTarget = 'Default';
const MAX_IMPORT_FILE_BYTES = 5 * 1024 * 1024;
const ACCEPTED_IMPORT_MIME_TYPES = new Set(['application/json', 'text/json']);
const DEFAULT_AUDIT_ACTOR = 'Unknown user';

const THEME_PRESET_COLORS = ['#005eb8', '#003366', '#009b8a', '#6c28d9', '#059669', '#dc2626'];

interface EngagementState {
  xp: number;
  level: number;
  checkIns: Record<string, boolean>;
  emailDraftOpens: number;
  highlightLayoutSaves: number;
  onTimeFinalisations: number;
  lateFinalisations: number;
}

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
};

const DEFAULT_ENGAGEMENT_STATE: EngagementState = {
  xp: 0,
  level: 1,
  checkIns: {},
  emailDraftOpens: 0,
  highlightLayoutSaves: 0,
  onTimeFinalisations: 0,
  lateFinalisations: 0,
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

function syncDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncPathwayObjectives(
    syncTransferToBauDerivedContent(
      syncOrgChangeReadinessDerivedContent(
        syncReinforcementDerivedContent(
          syncProcessChangeDerivedContent(
            syncCapabilityDerivedContent(
              syncChangeAdoptionDerivedContent(
                syncSkillsLearningDerivedContent(
                  syncResistanceDerivedContent(
                    syncStakeholderDerivedContent(
                      syncCmReadinessDerivedContent(
                        syncRiskManagementDerivedContent(
                          syncChangeNetworkDerivedContent(
                            syncChangeImpactDerivedContent(
                              syncBenefitsDerivedContent(
                                syncSponsorshipDerivedContent(
                                  syncCaseForChangeDerivedContent(syncVisionDerivedContent(store))
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

function getAuditActor(name: string): string {
  const normalized = name.trim();
  return normalized || DEFAULT_AUDIT_ACTOR;
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

function buildReminderBody(
  previousMonthLabel: string,
  trustName: string,
  projectName: string
): string {
  return [
    'Monthly Adoption Reporting Reminder',
    '',
    'Organisation',
    `${trustName || 'Unconfigured Trust'}${projectName ? ` / ${projectName}` : ''}`,
    '',
    'Action Required',
    `Please finalise the ${previousMonthLabel} adoption month if it has not already been captured.`,
    '',
    'Attached',
    'Point-in-time JSON report export generated from the latest working draft.',
    '',
    'Next Step',
    'Review, confirm finalisation status, and circulate to the team.',
  ].join('\n');
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

function getTodayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

function isFinaliseWindowOpen(date = new Date()): boolean {
  const currentDay = date.getDate();
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  return currentDay >= lastDayOfMonth - 6;
}

function getCurrentMonthLabel(date = new Date()): string {
  return date.toLocaleString('en-GB', { month: 'short', year: 'numeric' });
}

function calculateLevelFromXp(xp: number): number {
  return Math.max(1, Math.min(12, Math.floor(xp / 120) + 1));
}

function addEngagementXp(current: EngagementState, delta: number): EngagementState {
  const nextXp = current.xp + delta;
  return {
    ...current,
    xp: nextXp,
    level: calculateLevelFromXp(nextXp),
  };
}

function calculateEngagementGrade(onTimeFinalisations: number, emailDraftOpens: number): string {
  const score = onTimeFinalisations * 30 + Math.min(emailDraftOpens, 20) * 4;
  if (score >= 170) {
    return 'S';
  }
  if (score >= 130) {
    return 'A';
  }
  if (score >= 95) {
    return 'B';
  }
  if (score >= 60) {
    return 'C';
  }
  if (score >= 30) {
    return 'D';
  }
  return 'E';
}

function calculateCheckInStreak(checkIns: Record<string, boolean>, anchor = new Date()): number {
  let streak = 0;
  const cursor = new Date(anchor);

  let key = getTodayKey(cursor);
  while (checkIns[key]) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
    key = getTodayKey(cursor);
  }

  return streak;
}

function promptPhaseCapability(
  phase: OverarchingPhase
): { competence: CompetenceGrade; confidence: ConfidenceScore } | null {
  const competenceInput = window.prompt(
    `Phase ${phase} has changed. Enter delivery readiness grade (${COMPETENCE_OPTIONS.join('/')}).`,
    'C'
  );
  if (!competenceInput) {
    return null;
  }

  const normalizedCompetence = competenceInput.trim().toUpperCase() as CompetenceGrade;
  if (!COMPETENCE_OPTIONS.includes(normalizedCompetence)) {
    window.alert(`Invalid competence grade. Use one of ${COMPETENCE_OPTIONS.join(', ')}.`);
    return null;
  }

  const confidenceInput = window.prompt(
    `Enter confidence score for Phase ${phase} (${CONFIDENCE_OPTIONS.join('-')}, where 1 is low and 5 is very high).`,
    '3'
  );
  if (!confidenceInput) {
    return null;
  }

  const normalizedConfidence = Number(confidenceInput.trim()) as ConfidenceScore;
  if (!CONFIDENCE_OPTIONS.includes(normalizedConfidence)) {
    window.alert(`Invalid confidence score. Use a number from ${CONFIDENCE_OPTIONS.join(' to ')}.`);
    return null;
  }

  return {
    competence: normalizedCompetence,
    confidence: normalizedConfidence,
  };
}

export function AdoptionApp() {
  const COMPONENTS = ASSESSMENT_COMPONENTS;
  const MUTABLE_LENSES = useMemo<string[]>(() => [...LENSES], []);
  const [view, setView] = useState<View>('dashboard');
  const [activeComponentId, setActiveComponentId] = useState<string>(COMPONENTS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    return window.innerWidth >= 1024;
  });
  const [store, setStore] = useState<AdoptionStore>(() => {
    const state = AppState.getInstance();
    state.loadFromWindow();
    let persisted: Partial<SavedAdoptionAssessment> = {};
    try {
      const rawPersisted = load<unknown>(ADOPTION_STORAGE_KEY);
      persisted = migrateSavedAdoptionAssessment(parseImportedAdoptionAssessment(rawPersisted));
    } catch (error) {
      console.warn('Ignoring invalid persisted adoption data.', error);
    }
    const initialised = initializeStore({
      view: 'dashboard',
      orgProfile: persisted?.orgProfile || state.adoption?.orgProfile,
      currentDraft: persisted?.currentDraft || state.adoption?.currentDraft,
      objectives: persisted?.objectives || state.adoption?.objectives,
      suppressedAutoActions:
        persisted?.suppressedAutoActions || state.adoption?.suppressedAutoActions,
      auditLog: persisted?.auditLog || state.adoption?.auditLog,
      history: persisted?.history || state.adoption?.history,
      phaseOverrides: persisted?.phaseOverrides || state.adoption?.phaseOverrides,
      pathwayChecks: persisted?.pathwayChecks || state.adoption?.pathwayChecks,
    }) as AdoptionStore;

    // Backfill a stable programme identity for the app's own working document (never for an
    // imported payload - see cstConflict.ts) so it can be recognised on later exports/imports.
    if (!initialised.orgProfile.cstId) {
      initialised.orgProfile = { ...initialised.orgProfile, cstId: createCstId() };
    }

    return syncDerivedContent(initialised);
  });

  const [showMatrix, setShowMatrix] = useState<Record<string, boolean>>({});
  const [activeLensInfo, setActiveLensInfo] = useState('');
  const [currentUserId, setCurrentUserId] = useState<string>(() => load<string>(ADOPTION_CURRENT_USER_KEY) || '');
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
  const [engagement, setEngagement] = useState<EngagementState>(() => {
    const persisted = load<Partial<EngagementState>>(ADOPTION_ENGAGEMENT_KEY);
    return {
      ...DEFAULT_ENGAGEMENT_STATE,
      ...persisted,
      level: calculateLevelFromXp(persisted?.xp || 0),
      checkIns: persisted?.checkIns || {},
    };
  });
  const dashboardRef = React.useRef<HTMLDivElement>(null);
  const mainContentRef = React.useRef<HTMLElement>(null);
  const [statusAnnouncement, setStatusAnnouncement] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const currentReminderMonthKey = useMemo(() => getMonthStorageKey(), []);
  const todayKey = useMemo(() => getTodayKey(), []);
  const [dismissedReminderMonths, setDismissedReminderMonths] = useState<Record<string, boolean>>(
    () => {
      const persisted = load<Record<string, boolean>>(ADOPTION_REPORT_REMINDER_DISMISS_KEY);
      return persisted || {};
    }
  );
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean>(() =>
    Boolean(load<boolean>(ADOPTION_ONBOARDING_SEEN_KEY))
  );
  const [showOnboarding, setShowOnboarding] = useState<boolean>(
    () => !load<boolean>(ADOPTION_ONBOARDING_SEEN_KEY)
  );
  const [showEngagementCard, setShowEngagementCard] = useState<boolean>(true);
  const [viewHistory, setViewHistory] = useState<View[]>([]);
  const [showFinaliseModal, setShowFinaliseModal] = useState(false);
  const navItemRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  const dismissOnboarding = useCallback(() => {
    setShowOnboarding(false);
    if (!hasSeenOnboarding) {
      setHasSeenOnboarding(true);
      save(ADOPTION_ONBOARDING_SEEN_KEY, true);
    }
  }, [hasSeenOnboarding]);

  const reportReminder = useMemo(() => {
    const today = new Date();
    const previousMonthLabel = getPreviousMonthLabel(today);
    const isFirstDayOfMonth = today.getDate() === 1;
    const hasFinalisedPreviousMonth = store.history.some(
      (snapshot) => snapshot.monthLabel === previousMonthLabel
    );

    return {
      previousMonthLabel,
      isFirstDayOfMonth,
      hasFinalisedPreviousMonth,
      shouldNotify: isFirstDayOfMonth && !hasFinalisedPreviousMonth,
    };
  }, [store.history]);
  const [emailTo, setEmailTo] = useState('test@test.com');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const currentMonthLabel = getCurrentMonthLabel();
  const finaliseWindowOpen = isFinaliseWindowOpen();

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
    const appState = AppState.getInstance();
    appState.adoption = {
      orgProfile: store.orgProfile,
      currentDraft: store.currentDraft,
      objectives: store.objectives,
      suppressedAutoActions: store.suppressedAutoActions,
      auditLog: store.auditLog,
      history: store.history,
      phaseOverrides: store.phaseOverrides,
      pathwayChecks: store.pathwayChecks,
    };
  }, [store]);

  useEffect(() => {
    save(ADOPTION_USER_SETTINGS_KEY, userSettings);
  }, [userSettings]);

  useEffect(() => {
    save(ADOPTION_CURRENT_USER_KEY, currentUserId);
  }, [currentUserId]);

  useEffect(() => {
    save(ADOPTION_ENGAGEMENT_KEY, engagement);
  }, [engagement]);

  useEffect(() => {
    save(ADOPTION_REPORT_REMINDER_DISMISS_KEY, dismissedReminderMonths);
  }, [dismissedReminderMonths]);

  useEffect(() => {
    setEmailSubject(
      `Action required: finalise ${reportReminder.previousMonthLabel} adoption report`
    );
    setEmailBody(
      buildReminderBody(
        reportReminder.previousMonthLabel,
        store.orgProfile.trustName,
        store.orgProfile.projectName || ''
      )
    );
  }, [reportReminder.previousMonthLabel, store.orgProfile.projectName, store.orgProfile.trustName]);

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
  }, [view, store, getEntry, MUTABLE_LENSES, COMPONENTS, effectivePhaseFocus]);

  useEffect(() => {
    const syncSidebarWithViewport = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    syncSidebarWithViewport();
    window.addEventListener('resize', syncSidebarWithViewport);

    return () => {
      window.removeEventListener('resize', syncSidebarWithViewport);
    };
  }, []);

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

    const actor = getAuditActor(userSettings.name || '');
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
    const proceed = confirmIfCstWarnings('Export JSON');
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

  const handleFinaliseMonth = useCallback(
    (options?: { replaceExisting?: boolean }) => {
      const replaceExisting = Boolean(options?.replaceExisting);
      if (!finaliseWindowOpen) {
        window.alert('Finalise Month is available during the final week of each month.');
        return;
      }

      const proceedWithWarnings = confirmIfCstWarnings('Finalise Month');
      if (!proceedWithWarnings) {
        return;
      }

      const previousPhase =
        store.history.length > 0
          ? computeMetrics(
              {
                ...store,
                currentDraft: store.history[store.history.length - 1].data,
              },
              COMPONENTS
            ).currentPhase
          : 1;

      if (metrics.currentPhase > previousPhase) {
        const assessment = promptPhaseCapability(metrics.currentPhase as OverarchingPhase);
        if (!assessment) {
          window.alert(
            'Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.'
          );
          return;
        }

        const gaps: string[] = [];
        COMPONENTS.filter((component) => component.phase < metrics.currentPhase).forEach(
          (component) => {
            component.lenses.forEach((lens) => {
              const entry = store.currentDraft[component.id]?.[lens];
              if (!entry || entry.score <= 0 || !entry.justification?.trim()) {
                gaps.push(`${component.label} / ${lens}`);
              }
            });
          }
        );

        if (gaps.length > 0) {
          const rationale = window.prompt(
            `You're progressing from Phase ${previousPhase} to Phase ${metrics.currentPhase}, but ${gaps.length} item(s) are incomplete. Please provide a justification.`
          );
          if (!rationale || !rationale.trim()) {
            window.alert(
              'Phase progression cancelled. A justification is required when prior phase items are missing.'
            );
            return;
          }

          setStore((prev) => {
            const nextStore = {
              ...prev,
              phaseOverrides: {
                ...prev.phaseOverrides,
                [`phase-progression-${Date.now()}`]: rationale.trim(),
              },
              orgProfile: {
                ...prev.orgProfile,
                cst: {
                  ...prev.orgProfile.cst,
                  phaseCapability: {
                    ...prev.orgProfile.cst.phaseCapability,
                    [metrics.currentPhase as OverarchingPhase]: {
                      ...assessment,
                      assessedAt: new Date().toISOString(),
                      reason: 'phase-change',
                    },
                  },
                },
              },
            };
            return {
              ...nextStore,
              auditLog: appendAuditEvents(prev, [
                {
                  eventType: 'profile-updated',
                  entityType: 'profile',
                  summary: `Updated phase capability for phase ${metrics.currentPhase}`,
                  after: {
                    phase: metrics.currentPhase,
                    competence: assessment.competence,
                    confidence: assessment.confidence,
                    rationale: rationale.trim(),
                  },
                  source: 'local',
                },
              ]),
            };
          });
        } else {
          setStore((prev) => {
            const nextStore = {
              ...prev,
              orgProfile: {
                ...prev.orgProfile,
                cst: {
                  ...prev.orgProfile.cst,
                  phaseCapability: {
                    ...prev.orgProfile.cst.phaseCapability,
                    [metrics.currentPhase as OverarchingPhase]: {
                      ...assessment,
                      assessedAt: new Date().toISOString(),
                      reason: 'phase-change',
                    },
                  },
                },
              },
            };
            return {
              ...nextStore,
              auditLog: appendAuditEvents(prev, [
                {
                  eventType: 'profile-updated',
                  entityType: 'profile',
                  summary: `Updated phase capability for phase ${metrics.currentPhase}`,
                  after: {
                    phase: metrics.currentPhase,
                    competence: assessment.competence,
                    confidence: assessment.confidence,
                  },
                  source: 'local',
                },
              ]),
            };
          });
        }
      }

      const snapshot = buildHistorySnapshot(store.currentDraft, metrics.overallPct);

      setStore((prev) => {
        const nextHistory = replaceExisting
          ? prev.history.map((item) => (item.monthLabel === snapshot.monthLabel ? snapshot : item))
          : [...prev.history, snapshot];

        const nextStore = {
          ...prev,
          history: nextHistory,
        };

        return {
          ...nextStore,
          auditLog: appendAuditEvents(prev, [
            {
              eventType: 'month-finalized',
              entityType: 'history',
              entityId: snapshot.monthLabel,
              summary: `${replaceExisting ? 'Re-finalized' : 'Finalized'} monthly snapshot for ${snapshot.monthLabel}`,
              after: {
                monthLabel: snapshot.monthLabel,
                overallPercentage: snapshot.overallPercentage,
              },
              source: 'local',
            },
          ]),
        };
      });
      setEngagement((prev) => addEngagementXp(prev, 25));
      setView('dashboard');
    },
    [
      appendAuditEvents,
      COMPONENTS,
      confirmIfCstWarnings,
      finaliseWindowOpen,
      metrics.currentPhase,
      metrics.overallPct,
      store,
      store.currentDraft,
      store.history,
    ]
  );

  const handleFinalisePriorMonth = useCallback(() => {
    const proceedWithWarnings = confirmIfCstWarnings('Finalise Prior Month');
    if (!proceedWithWarnings) {
      return;
    }

    const previousMonthLabel = reportReminder.previousMonthLabel;
    const alreadyFinalised = store.history.some(
      (snapshot) => snapshot.monthLabel === previousMonthLabel
    );

    if (alreadyFinalised) {
      window.alert(`${previousMonthLabel} has already been finalised.`);
      return;
    }

    const previousDate = new Date();
    previousDate.setMonth(previousDate.getMonth() - 1);

    const snapshot = buildHistorySnapshot(store.currentDraft, metrics.overallPct, previousDate);
    setStore((prev) => {
      const nextStore = {
        ...prev,
        history: [...prev.history, snapshot],
      };
      return {
        ...nextStore,
        auditLog: appendAuditEvents(prev, [
          {
            eventType: 'prior-month-finalized',
            entityType: 'history',
            entityId: snapshot.monthLabel,
            summary: `Finalized prior month snapshot for ${snapshot.monthLabel}`,
            after: {
              monthLabel: snapshot.monthLabel,
              overallPercentage: snapshot.overallPercentage,
            },
            source: 'local',
          },
        ]),
      };
    });

    const submittedOnTime = new Date().getDate() === 1;
    setEngagement((prev) =>
      addEngagementXp(
        {
          ...prev,
          onTimeFinalisations: prev.onTimeFinalisations + (submittedOnTime ? 1 : 0),
          lateFinalisations: prev.lateFinalisations + (submittedOnTime ? 0 : 1),
        },
        submittedOnTime ? 45 : 20
      )
    );
  }, [
    appendAuditEvents,
    confirmIfCstWarnings,
    metrics.overallPct,
    reportReminder.previousMonthLabel,
    store.currentDraft,
    store.history,
  ]);

  const handleLoadExampleData = useCallback(async () => {
    try {
      const response = await fetch('test-data/adoption-sample.json');
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
      'Warning: this will reset all assessment data (organisation profile, scores, actions, and history). If you are worried, please export your data first. Continue?'
    );

    if (!confirmed) {
      return;
    }

    const resetStore = syncDerivedContent(initializeStore());
    setStore(resetStore);
    setShowMatrix({});
    setView('dashboard');
    announceStatus('Assessment data has been reset.');

    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  }, [announceStatus]);

  const buildPointInTimePayload = useCallback(() => {
    return {
      generatedAt: new Date().toISOString(),
      targetMonth: reportReminder.previousMonthLabel,
      finalisedPriorMonth: reportReminder.hasFinalisedPreviousMonth,
      report: buildAdoptionExportPayload(store),
    };
  }, [reportReminder.hasFinalisedPreviousMonth, reportReminder.previousMonthLabel, store]);

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
    setEngagement((prev) =>
      addEngagementXp({ ...prev, emailDraftOpens: prev.emailDraftOpens + 1 }, 8)
    );
    window.location.href = mailto;
  }, [buildPointInTimeFilename, emailBody, emailSubject, emailTo]);

  const handleDailyCheckIn = useCallback(() => {
    setEngagement((prev) => {
      if (prev.checkIns[todayKey]) {
        return prev;
      }
      return addEngagementXp(
        {
          ...prev,
          checkIns: {
            ...prev.checkIns,
            [todayKey]: true,
          },
        },
        10
      );
    });
  }, [todayKey]);

  const handleHighlightLayoutSaved = useCallback(() => {
    setEngagement((prev) =>
      addEngagementXp(
        {
          ...prev,
          highlightLayoutSaves: prev.highlightLayoutSaves + 1,
        },
        15
      )
    );
  }, []);

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
  const currentMonthSnapshot = useMemo(
    () => store.history.find((snapshot) => snapshot.monthLabel === currentMonthLabel) || null,
    [currentMonthLabel, store.history]
  );
  const canCreateNewFinalisation = finaliseWindowOpen;
  const canOpenFinaliseModal = canCreateNewFinalisation;
  const finaliseButtonTitle = canOpenFinaliseModal
    ? 'Review and finalise monthly snapshot'
    : 'Finalise Month unlocks from the final week of each month.';
  const finaliseButtonClassName = canOpenFinaliseModal
    ? `${nhsButtonPrimary} h-9 px-3 py-0 shadow-[0_3px_0_rgba(0,0,0,0.2)]`
    : 'h-9 px-3 py-0 rounded-md border border-slate-300 bg-slate-200 text-slate-500 cursor-not-allowed';
  const finaliseButtonStyle = canOpenFinaliseModal
    ? { backgroundColor: userSettings.themeColor }
    : undefined;
  const finaliseSummary = useMemo(() => {
    const baselineSnapshot =
      currentMonthSnapshot ||
      (store.history.length > 0 ? store.history[store.history.length - 1] : null);
    const baselineOverall = baselineSnapshot?.overallPercentage || 0;
    const deltaOverall = metrics.overallPct - baselineOverall;
    return {
      currentMonthLabel,
      baselineLabel: baselineSnapshot?.monthLabel || 'No previous snapshot',
      baselineOverall,
      deltaOverall,
      assessedCount: metrics.assessedCount,
      totalActions: metrics.totalActions,
      completedActions: metrics.completedActions,
    };
  }, [
    currentMonthLabel,
    currentMonthSnapshot,
    metrics.assessedCount,
    metrics.completedActions,
    metrics.overallPct,
    metrics.totalActions,
    store.history,
  ]);
  const themeUnlocked = engagement.level >= 3;
  const engagementGrade = useMemo(
    () => calculateEngagementGrade(engagement.onTimeFinalisations, engagement.emailDraftOpens),
    [engagement.emailDraftOpens, engagement.onTimeFinalisations]
  );
  const hasCheckedInToday = Boolean(engagement.checkIns[todayKey]);
  const checkInStreak = useMemo(
    () => calculateCheckInStreak(engagement.checkIns),
    [engagement.checkIns]
  );
  const achievements = useMemo(
    () => [
      {
        id: 'streak-3',
        name: 'Steady Cadence',
        description: 'Check in for 3 consecutive days.',
        unlocked: checkInStreak >= 3,
        progress: `${Math.min(checkInStreak, 3)}/3`,
      },
      {
        id: 'first-ontime',
        name: 'On-Time Closer',
        description: 'Finalise a prior month on time.',
        unlocked: engagement.onTimeFinalisations >= 1,
        progress: `${Math.min(engagement.onTimeFinalisations, 1)}/1`,
      },
      {
        id: 'first-save',
        name: 'Story Builder',
        description: 'Save your first highlight layout.',
        unlocked: engagement.highlightLayoutSaves >= 1,
        progress: `${Math.min(engagement.highlightLayoutSaves, 1)}/1`,
      },
    ],
    [checkInStreak, engagement.highlightLayoutSaves, engagement.onTimeFinalisations]
  );

  const handleUserSettingsUpdate = useCallback(
    (nextSettings: AdoptionUserSettings) => {
      if (!themeUnlocked && !THEME_PRESET_COLORS.includes(nextSettings.themeColor)) {
        setUserSettings((prev) => ({
          ...nextSettings,
          themeColor: prev.themeColor,
        }));
        return;
      }
      setUserSettings(nextSettings);
    },
    [themeUnlocked]
  );

  const handleProfileUpdate = useCallback((updatedProfile: OrgProfile) => {
    setStore((prev) => {
      const nextStore = syncPathwayObjectives({
        ...prev,
        orgProfile: updatedProfile,
      });

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
  const fullPathwayLabel = PATHWAY_LABELS[store.orgProfile.cst.pathway];
  const compactPathwayLabel = fullPathwayLabel.split(' - ')[0] || fullPathwayLabel;

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

          <div className="mt-3 rounded-md bg-blue-700 p-2 text-xs">
            <div className="font-semibold text-blue-100">
              Level {engagement.level} · Grade {engagementGrade}
            </div>
            <div className="text-blue-200">
              XP {engagement.xp} · Layout saves {engagement.highlightLayoutSaves}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Intro
          </div>
          <nav className="space-y-1 mb-4">
            {(['introduction', 'cm-guide', 'project-details'] as View[]).map((v) => (
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
                  : v === 'project-details'
                    ? 'CST Personalisation'
                    : 'Adoption Engine Onboarding'}
              </button>
            ))}
          </nav>

          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Overview
          </div>
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

          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Change Components
          </div>
          <nav className="space-y-1 mb-8">
            {COMPONENTS.map((comp, index) => {
              const isActive = view === 'assessment' && activeComponentId === comp.id;
              const status = getComponentStatus(comp);
              const previousPhase = index > 0 ? COMPONENTS[index - 1].phase : null;
              const showPhaseHeader = comp.phase !== previousPhase;
              return (
                <React.Fragment key={comp.id}>
                  {showPhaseHeader && (
                    <div
                      className={`px-4 text-[10px] font-semibold uppercase tracking-wider text-blue-300 ${
                        index === 0 ? 'pb-1' : 'pt-3 pb-1'
                      }`}
                    >
                      {PHASE_NAMES[comp.phase] || `Phase ${comp.phase}`}
                    </div>
                  )}
                  <button
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
                </React.Fragment>
              );
            })}
          </nav>

          
          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Tools
          </div>
          <nav className="space-y-1 mb-8">
            {(['highlight-builder', 'audit-log', 'settings', 'profile'] as View[]).map((v) => (
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
                  : v === 'audit-log'
                    ? 'Audit Log'
                    : v === 'settings'
                      ? 'Settings'
                      : 'Profile'}
              </button>
            ))}
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
            <div className="min-w-0 flex items-start gap-2 sm:gap-3">
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
                <div className="mt-1 flex min-w-0 items-center gap-1.5">
                  <span
                    className={`truncate rounded-full px-2 py-1 text-[11px] font-semibold ${
                      userSettings.darkMode
                        ? 'bg-slate-700 text-slate-100'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                    title={`${store.orgProfile.cst.type.toUpperCase()} · ${fullPathwayLabel}`}
                  >
                    {store.orgProfile.cst.type.toUpperCase()} ·{' '}
                    <span className="sm:hidden">{compactPathwayLabel}</span>
                    <span className="hidden sm:inline">{fullPathwayLabel}</span>
                  </span>
                  <span
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800"
                    title="Auto-save on"
                  >
                    <span
                      className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="sr-only sm:not-sr-only sm:ml-1">Auto-save on</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              <button
                onClick={() => setShowOnboarding(true)}
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
                <span className="hidden sm:inline">Export JSON</span>
              </button>
              <span className="inline-flex" title={finaliseButtonTitle}>
                <button
                  onClick={() => setShowFinaliseModal(true)}
                  disabled={!canOpenFinaliseModal}
                  aria-label="Finalise Month"
                  className={finaliseButtonClassName}
                  style={finaliseButtonStyle}
                >
                  <span className="sm:hidden">Finalise</span>
                  <span className="hidden sm:inline">Finalise Month</span>
                </button>
              </span>
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
                    Engagement
                  </p>
                  <p
                    className={`text-sm mt-1 ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-700'}`}
                  >
                    Level {engagement.level} · Grade {engagementGrade} · On-time finalisations{' '}
                    {engagement.onTimeFinalisations} · Email opens {engagement.emailDraftOpens}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDailyCheckIn}
                    disabled={hasCheckedInToday}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-white disabled:opacity-60"
                    style={{ backgroundColor: userSettings.themeColor }}
                  >
                    {hasCheckedInToday ? 'Checked In Today' : 'Daily Check-In (+10 XP)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEngagementCard(false)}
                    className={`${userSettings.darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-2 text-sm font-medium`}
                    aria-label="Dismiss engagement card"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`rounded-lg border p-3 ${
                      achievement.unlocked
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
                        {achievement.name}
                      </p>
                      <span className="text-xs font-bold">
                        {achievement.unlocked ? 'Unlocked' : achievement.progress}
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-xs ${userSettings.darkMode ? 'text-slate-300' : 'text-slate-600'}`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {shouldShowReportReminder && (
            <section
              className={`${userSettings.darkMode ? 'border-amber-700 bg-slate-800' : 'border-amber-300 bg-amber-50'} mb-8 rounded-xl border p-5 shadow-sm`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    First Day Reminder
                  </p>
                  <h3 className="text-lg font-bold text-amber-900 mt-1">
                    Submit prior month report for {reportReminder.previousMonthLabel}
                  </h3>
                  <p className="text-sm text-amber-800 mt-2">
                    Please prompt the team to finalise {reportReminder.previousMonthLabel} if it has
                    not already been recorded.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={dismissReportReminder}
                  className="text-sm px-3 py-1.5 rounded-md border border-amber-300 text-amber-700 hover:bg-amber-100"
                >
                  Dismiss
                </button>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <label className="text-sm text-slate-700">
                  <span className="font-semibold">To</span>
                  <input
                    type="email"
                    value={emailTo}
                    onChange={(event) => setEmailTo(event.target.value)}
                    className={`${userSettings.darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'} mt-1 w-full rounded-md border px-3 py-2`}
                  />
                </label>
                <label className="text-sm text-slate-700">
                  <span className="font-semibold">Subject</span>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(event) => setEmailSubject(event.target.value)}
                    className={`${userSettings.darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'} mt-1 w-full rounded-md border px-3 py-2`}
                  />
                </label>
              </div>

              <label className="mt-3 block text-sm text-slate-700">
                <span className="font-semibold">Body</span>
                <textarea
                  value={emailBody}
                  onChange={(event) => setEmailBody(event.target.value)}
                  rows={9}
                  className={`${userSettings.darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'} mt-1 w-full rounded-md border px-3 py-2 font-mono text-xs`}
                />
              </label>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleDownloadPointInTimeJson}
                  className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50"
                >
                  Download Point-in-Time JSON
                </button>
                <button
                  type="button"
                  onClick={handleDownloadEmailDraft}
                  className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50"
                >
                  Download Email Draft with Attachment (.eml)
                </button>
                <button
                  type="button"
                  onClick={handleOpenMailDraft}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: userSettings.themeColor }}
                >
                  Open Mail Draft
                </button>
                <button
                  type="button"
                  onClick={handleFinalisePriorMonth}
                  className="rounded-md border border-amber-300 bg-white px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
                >
                  Finalise Prior Month Now
                </button>
              </div>
            </section>
          )}

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
                pathway={store.orgProfile.cst.pathway}
                pathwayChecks={store.pathwayChecks}
                onNavigate={handleViewChange}
                onOpenLensInfo={setActiveLensInfo}
                onOpenOnboarding={() => setShowOnboarding(true)}
                colorAccessibilityMode={userSettings.colorAccessibilityMode || 'standard'}
                darkMode={Boolean(userSettings.darkMode)}
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
              onOpenOnboarding={() => setShowOnboarding(true)}
              currentUserId={currentUserId}
              onCurrentUserChange={setCurrentUserId}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'assessment' && (
            <AssessmentPanel
              store={{ ...store, showMatrix }}
              components={COMPONENTS}
              activeComponentId={activeComponentId}
              getRubricText={getRubricText}
              getEntry={getEntry}
              onComponentChange={openComponentAssessment}
              onEntryUpdate={updateEntry}
              onOpenLensInfo={setActiveLensInfo}
              onMatrixToggle={(key) => {
                setShowMatrix((prev) => ({
                  ...prev,
                  [key]: !prev[key],
                }));
              }}
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
              teamMembers={store.orgProfile.teamMembers || []}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'cm-guide' && (
            <ChangeManagementGuide
              onComponentClick={openComponentAssessment}
              guidanceTarget={DEFAULT_GUIDANCE_TARGET}
              linkOverrides={store.orgProfile.linkOverrides}
              showAdditionalGuidanceLinks={showAdditionalGuidanceLinks}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'introduction' && (
            <OnboardingOverviewPage
              darkMode={Boolean(userSettings.darkMode)}
              onNavigateToProjectDetails={() => handleViewChange('project-details')}
              onNavigateToGuide={() => handleViewChange('cm-guide')}
              onNavigateToDashboard={() => handleViewChange('dashboard')}
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
              onLayoutSaved={handleHighlightLayoutSaved}
              currentUserId={currentUserId}
              darkMode={Boolean(userSettings.darkMode)}
            />
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
              canUseCustomTheme={themeUnlocked}
              darkMode={Boolean(userSettings.darkMode)}
            />
          )}
          {view === 'profile' && (
            <ProfilePage
              orgProfile={store.orgProfile}
              onProfileUpdate={handleProfileUpdate}
              userSettings={userSettings}
              onUserSettingsUpdate={handleUserSettingsUpdate}
              engagementGrade={engagementGrade}
              engagementLevel={engagement.level}
              engagementXp={engagement.xp}
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

        {showFinaliseModal ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
            <div
              className={`${userSettings.darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-white'} w-full max-w-2xl rounded-xl border p-6 shadow-2xl`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3
                  className={`text-lg font-semibold ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-900'}`}
                >
                  Finalise Month
                </h3>
                <button
                  type="button"
                  onClick={() => setShowFinaliseModal(false)}
                  className={`${userSettings.darkMode ? 'border-slate-600 bg-slate-900 text-slate-100 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} rounded-md border px-3 py-1.5 text-sm`}
                >
                  Close
                </button>
              </div>

              <div
                className={`mt-4 space-y-3 text-sm ${userSettings.darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                <p>
                  Finalising creates a point-in-time snapshot for{' '}
                  <strong>{finaliseSummary.currentMonthLabel}</strong>. A new reporting month starts
                  on the 1st day of each month.
                </p>
                <p>
                  {finaliseWindowOpen
                    ? 'Finalise window is open (last week of the month).'
                    : 'Finalise window is currently closed. You can finalise from the final week of each month.'}
                </p>
                {currentMonthSnapshot ? (
                  <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-amber-900">
                    A snapshot already exists for {finaliseSummary.currentMonthLabel}. Re-finalise
                    will replace this month only.
                  </p>
                ) : null}
              </div>

              <div
                className={`${userSettings.darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-slate-50'} mt-4 rounded-md border p-3 text-sm`}
              >
                <p
                  className={`font-semibold ${userSettings.darkMode ? 'text-slate-100' : 'text-slate-800'}`}
                >
                  Current summary
                </p>
                <ul
                  className={`mt-2 space-y-1 ${userSettings.darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  <li>Baseline snapshot: {finaliseSummary.baselineLabel}</li>
                  <li>
                    Overall readiness: {metrics.overallPct}% (
                    {finaliseSummary.deltaOverall >= 0 ? '+' : ''}
                    {finaliseSummary.deltaOverall}% vs baseline)
                  </li>
                  <li>Components assessed: {finaliseSummary.assessedCount}</li>
                  <li>
                    Actions complete: {finaliseSummary.completedActions}/
                    {finaliseSummary.totalActions}
                  </li>
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowFinaliseModal(false)}
                  className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                {currentMonthSnapshot && finaliseWindowOpen ? (
                  <button
                    type="button"
                    onClick={() => {
                      setShowFinaliseModal(false);
                      handleFinaliseMonth({ replaceExisting: true });
                    }}
                    className="rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
                  >
                    Re-finalise This Month
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    setShowFinaliseModal(false);
                    handleFinaliseMonth();
                  }}
                  disabled={!finaliseWindowOpen}
                  className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Finalise Snapshot
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <ToolkitChatbot
          toolkitChoice={store.orgProfile.cst.toolkitChoice}
          darkMode={Boolean(userSettings.darkMode)}
        />

        <OnboardingIntro
          open={showOnboarding}
          onClose={dismissOnboarding}
          onNavigateToProjectDetails={() => {
            setView('project-details');
            dismissOnboarding();
          }}
          onNavigateToGuide={() => {
            setView('cm-guide');
            dismissOnboarding();
          }}
        />
      </div>
    </div>
  );
}

export default AdoptionApp;
