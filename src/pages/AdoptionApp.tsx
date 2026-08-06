import React, { useState, useCallback, useEffect, useMemo } from 'react';
import AppState from '@lib/state';
import { createRadarChart, createLineChart } from '@lib/charts';
import { downloadFile, escapeHtml } from '@lib/utils';
import { ASSESSMENT_LENSES as LENSES } from '@data/lenses';
import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
import { resolveGuidanceLinksForAdoptionComponent, type MaturityGuidanceTarget } from '@data/maturity-guidance-links';
import {
  COMPETENCE_OPTIONS,
  CONFIDENCE_OPTIONS,
  PATHWAY_LABELS,
  type CompetenceGrade,
  type ConfidenceScore,
  type OverarchingPhase
} from '@data/cst';
import { GENERIC_RUBRIC } from '@data/rubrics';
import { SPECIFIC_RUBRICS } from '@types/constants';
import type {
  View,
  DraftEntry,
  AdoptionStore,
  DraftAction
} from '@lib/adoptionState';
import { initializeStore, createEmptyEntry, cloneEntry } from '@lib/adoptionState';
import {
  getMetrics as computeMetrics,
  buildRadarChartData,
  flattenActions
} from '@lib/adoptionMetrics';
import { load, save } from '@lib/storage';
import {
  ADOPTION_STORAGE_KEY,
  buildAdoptionExportPayload,
  buildHistorySnapshot,
  migrateSavedAdoptionAssessment,
  mergeImportedAdoptionState,
  type SavedAdoptionAssessment
} from '@lib/adoptionIO';
import { validateCstProfile } from '@lib/adoptionValidator';
import { AdoptionDashboard } from '@components/views/AdoptionDashboard';
import { SettingsPanel, type AdoptionUserSettings } from '@components/views/SettingsPanel';
import { ActionPlanTracker } from '@components/views/ActionPlanTracker';
import { AssessmentPanel } from '@components/views/AssessmentPanel';
import { LensInfoModal } from '@components/views/LensInfoModal';
import { ChangeManagementGuide } from '@components/views/ChangeManagementGuide';
import { syncVisionDerivedContent } from '@lib/visionAutomation';
import { GuidanceLinkMapBuilder } from '@components/views/GuidanceLinkMapBuilder';
import { GuidanceRoadmapView } from '@components/views/GuidanceRoadmapView';
import { HighlightBuilderTool } from '@components/views/HighlightBuilderTool';
import { ProjectDetailsPage } from '@components/views/ProjectDetailsPage';
import { OnboardingIntro } from '@components/onboarding/OnboardingIntro';
import { nhsButtonPrimary, nhsButtonSecondary, nhsFocusRing } from '../styles/nhsTheme';

const ADOPTION_USER_SETTINGS_KEY = 'nhs-digital-adoption-user-settings';
const ADOPTION_REPORT_REMINDER_DISMISS_KEY = 'nhs-digital-adoption-report-reminder-dismissed';
const ADOPTION_ENGAGEMENT_KEY = 'nhs-digital-adoption-engagement';
const ADOPTION_ONBOARDING_SEEN_KEY = 'nhs-digital-adoption-onboarding-seen';
const DEFAULT_GUIDANCE_TARGET: MaturityGuidanceTarget = 'Default';

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
  profileImageDataUrl: ''
};

const DEFAULT_ENGAGEMENT_STATE: EngagementState = {
  xp: 0,
  level: 1,
  checkIns: {},
  emailDraftOpens: 0,
  highlightLayoutSaves: 0,
  onTimeFinalisations: 0,
  lateFinalisations: 0
};

function cloneAction(action: DraftAction): DraftAction {
  return {
    ...action,
    linkedTargets: (action.linkedTargets || []).map((target) => ({
      componentId: target.componentId,
      lens: target.lens
    }))
  };
}

function getRubricText(componentId: string, lensName: string, score: number): string {
  const rubricGroup = (SPECIFIC_RUBRICS as Record<string, any>)[componentId];
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

function buildReminderBody(previousMonthLabel: string, trustName: string, projectName: string): string {
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
    'Review, confirm finalisation status, and circulate to the team.'
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

function calculateLevelFromXp(xp: number): number {
  return Math.max(1, Math.min(12, Math.floor(xp / 120) + 1));
}

function addEngagementXp(current: EngagementState, delta: number): EngagementState {
  const nextXp = current.xp + delta;
  return {
    ...current,
    xp: nextXp,
    level: calculateLevelFromXp(nextXp)
  };
}

function calculateEngagementGrade(onTimeFinalisations: number, emailDraftOpens: number): string {
  const score = onTimeFinalisations * 30 + Math.min(emailDraftOpens, 20) * 4;
  if (score >= 170) return 'S';
  if (score >= 130) return 'A';
  if (score >= 95) return 'B';
  if (score >= 60) return 'C';
  if (score >= 30) return 'D';
  return 'E';
}

function calculateCheckInStreak(checkIns: Record<string, boolean>, anchor = new Date()): number {
  let streak = 0;
  const cursor = new Date(anchor);

  while (true) {
    const key = getTodayKey(cursor);
    if (!checkIns[key]) {
      break;
    }
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function promptPhaseCapability(phase: OverarchingPhase): { competence: CompetenceGrade; confidence: ConfidenceScore } | null {
  const competenceInput = window.prompt(
    `Phase ${phase} readiness changed. Enter competence grade (${COMPETENCE_OPTIONS.join('/')}).`,
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
    `Enter confidence score for Phase ${phase} (${CONFIDENCE_OPTIONS.join('-')}).`,
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
    confidence: normalizedConfidence
  };
}

export function AdoptionApp() {
  const COMPONENTS = ASSESSMENT_COMPONENTS;
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
    const persisted = migrateSavedAdoptionAssessment(load<SavedAdoptionAssessment>(ADOPTION_STORAGE_KEY));
    return syncVisionDerivedContent(initializeStore({
      view: 'dashboard',
      orgProfile: persisted?.orgProfile || state.adoption?.orgProfile,
      currentDraft: persisted?.currentDraft || state.adoption?.currentDraft,
      objectives: persisted?.objectives || state.adoption?.objectives,
      history: persisted?.history || state.adoption?.history,
      phaseOverrides: persisted?.phaseOverrides || state.adoption?.phaseOverrides,
      pathwayChecks: persisted?.pathwayChecks || state.adoption?.pathwayChecks
    }) as AdoptionStore);
  });

  const [showMatrix, setShowMatrix] = useState<Record<string, boolean>>({});
  const [activeLensInfo, setActiveLensInfo] = useState('');
  const [userSettings, setUserSettings] = useState<AdoptionUserSettings>(() => {
    const persisted = load<Partial<AdoptionUserSettings>>(ADOPTION_USER_SETTINGS_KEY);
    return {
      ...DEFAULT_USER_SETTINGS,
      ...persisted
    };
  });
  const [engagement, setEngagement] = useState<EngagementState>(() => {
    const persisted = load<Partial<EngagementState>>(ADOPTION_ENGAGEMENT_KEY);
    return {
      ...DEFAULT_ENGAGEMENT_STATE,
      ...persisted,
      level: calculateLevelFromXp(persisted?.xp || 0),
      checkIns: persisted?.checkIns || {}
    };
  });
  const dashboardRef = React.useRef<HTMLDivElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const currentReminderMonthKey = useMemo(() => getMonthStorageKey(), []);
  const todayKey = useMemo(() => getTodayKey(), []);
  const [dismissedReminderMonths, setDismissedReminderMonths] = useState<Record<string, boolean>>(() => {
    const persisted = load<Record<string, boolean>>(ADOPTION_REPORT_REMINDER_DISMISS_KEY);
    return persisted || {};
  });
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean>(() => Boolean(load<boolean>(ADOPTION_ONBOARDING_SEEN_KEY)));
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => !load<boolean>(ADOPTION_ONBOARDING_SEEN_KEY));
  const [showEngagementCard, setShowEngagementCard] = useState<boolean>(true);

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
      shouldNotify: isFirstDayOfMonth && !hasFinalisedPreviousMonth
    };
  }, [store.history]);
  const [emailTo, setEmailTo] = useState('test@test.com');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const getEntry = useCallback((componentId: string, lens: string): DraftEntry => {
    if (!store.currentDraft[componentId]) {
      store.currentDraft[componentId] = {};
    }
    if (!store.currentDraft[componentId][lens]) {
      store.currentDraft[componentId][lens] = createEmptyEntry();
    }
    return store.currentDraft[componentId][lens];
  }, [store]);

  const metrics = useMemo(() => {
    const baseMetrics = computeMetrics(store, COMPONENTS);
    return {
      ...baseMetrics,
      nextSteps: baseMetrics.nextSteps.map((step) => ({
        ...step,
        toolkitLinks: resolveGuidanceLinksForAdoptionComponent(
          DEFAULT_GUIDANCE_TARGET,
          step.componentId,
          'inputs'
        ).slice(0, 3)
      }))
    };
  }, [store]);
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
      history: store.history,
      phaseOverrides: store.phaseOverrides,
      pathwayChecks: store.pathwayChecks
    };
  }, [store]);

  useEffect(() => {
    save(ADOPTION_USER_SETTINGS_KEY, userSettings);
  }, [userSettings]);

  useEffect(() => {
    save(ADOPTION_ENGAGEMENT_KEY, engagement);
  }, [engagement]);

  useEffect(() => {
    save(ADOPTION_REPORT_REMINDER_DISMISS_KEY, dismissedReminderMonths);
  }, [dismissedReminderMonths]);

  useEffect(() => {
    setEmailSubject(`Action required: finalise ${reportReminder.previousMonthLabel} adoption report`);
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
        const radarCanvas = dashboardRef.current?.querySelector('#adoption-radar-chart') as HTMLCanvasElement;
        if (radarCanvas) {
          const radarData = buildRadarChartData(store, LENSES, COMPONENTS, getEntry);
          createRadarChart(radarCanvas, radarData);
        }
        
        if (store.history.length > 0) {
          const lineCanvas = dashboardRef.current?.querySelector('#adoption-line-chart') as HTMLCanvasElement;
          if (lineCanvas) {
            const lineData = {
              labels: store.history.map((snapshot) => snapshot.monthLabel),
              datasets: [{
                label: 'Adoption Score',
                data: store.history.map(h => h.overallPercentage || 0),
                borderColor: '#005EB8',
                backgroundColor: 'rgba(0, 94, 184, 0.1)',
                fill: true,
                tension: 0.4
              }]
            };
            createLineChart(lineCanvas, lineData);
          }
        }
      }, 100);
    }
  }, [view, store, getEntry]);

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

  // Dashboard rendering now handled by React component below

  const shouldAutoCloseSidebar = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth < 1024;
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  };

  const openComponentAssessment = useCallback((componentId: string) => {
    const targetComponent = getComponentById(componentId);
    if (!targetComponent) {
      return;
    }

    const hasOverride = Boolean(store.phaseOverrides[componentId]);
    const requiresOverride = targetComponent.phase > metrics.currentPhase && !hasOverride;

    if (requiresOverride) {
      const proceed = window.confirm(
        `This component is in Phase ${targetComponent.phase}, but your current focus is Phase ${metrics.currentPhase}. Continue with an override?`
      );
      if (!proceed) {
        return;
      }

      const rationale = window.prompt('Please provide a brief rationale for working ahead of phase.');
      if (!rationale || !rationale.trim()) {
        window.alert('Override cancelled. A rationale is required to work ahead of phase.');
        return;
      }

      setStore((prev) => ({
        ...prev,
        phaseOverrides: {
          ...prev.phaseOverrides,
          [componentId]: rationale.trim()
        }
      }));
    }

    setActiveComponentId(componentId);
    setView('assessment');
    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  }, [metrics.currentPhase, store.phaseOverrides]);

  const updateEntry = useCallback((componentId: string, lens: string, entry: DraftEntry) => {
    setStore((prev) => {
      const nextStore = {
        ...prev,
        currentDraft: {
          ...prev.currentDraft,
          [componentId]: {
            ...prev.currentDraft[componentId],
            [lens]: cloneEntry(entry)
          }
        }
      };
      return syncVisionDerivedContent(nextStore);
    });
  }, []);

  const confirmIfCstWarnings = useCallback((actionLabel: string): boolean => {
    const validation = validateCstProfile(store.orgProfile);
    if (validation.isValid) {
      return true;
    }

    const warnings = validation.errors.map((error) => `- ${error.message}`).join('\n');
    return window.confirm(
      `${actionLabel} has CST warnings:\n\n${warnings}\n\nContinue anyway?`
    );
  }, [store.orgProfile]);

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
  }, [confirmIfCstWarnings, store]);

  const handleImportClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleImportFile = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as Partial<SavedAdoptionAssessment>;
      setStore((prev) => mergeImportedAdoptionState(parsed, prev));
      setView('dashboard');
    } catch (_error) {
      window.alert('Unable to import adoption assessment. Please verify the file contents.');
    } finally {
      event.target.value = '';
    }
  }, []);

  const handleFinaliseMonth = useCallback(() => {
    const proceedWithWarnings = confirmIfCstWarnings('Finalise Month');
    if (!proceedWithWarnings) {
      return;
    }

    const previousPhase = store.history.length > 0
      ? computeMetrics(
          {
            ...store,
            currentDraft: store.history[store.history.length - 1].data
          },
          COMPONENTS
        ).currentPhase
      : 1;

    if (metrics.currentPhase > previousPhase) {
      const assessment = promptPhaseCapability(metrics.currentPhase as OverarchingPhase);
      if (!assessment) {
        window.alert('Phase progression cancelled. Confidence and competence self-assessment is required when readiness phase changes.');
        return;
      }

      const gaps: string[] = [];
      COMPONENTS.filter((component) => component.phase < metrics.currentPhase).forEach((component) => {
        component.lenses.forEach((lens) => {
          const entry = store.currentDraft[component.id]?.[lens];
          if (!entry || entry.score <= 0 || !entry.justification?.trim()) {
            gaps.push(`${component.label} / ${lens}`);
          }
        });
      });

      if (gaps.length > 0) {
        const rationale = window.prompt(
          `You're progressing from Phase ${previousPhase} to Phase ${metrics.currentPhase}, but ${gaps.length} item(s) are incomplete. Please provide a justification.`
        );
        if (!rationale || !rationale.trim()) {
          window.alert('Phase progression cancelled. A justification is required when prior phase items are missing.');
          return;
        }

        setStore((prev) => ({
          ...prev,
          phaseOverrides: {
            ...prev.phaseOverrides,
            [`phase-progression-${Date.now()}`]: rationale.trim()
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
                  reason: 'phase-change'
                }
              }
            }
          }
        }));
      } else {
        setStore((prev) => ({
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
                  reason: 'phase-change'
                }
              }
            }
          }
        }));
      }
    }

    const snapshot = buildHistorySnapshot(store.currentDraft, metrics.overallPct);

    setStore((prev) => ({
      ...prev,
      history: [...prev.history, snapshot]
    }));
    setEngagement((prev) => addEngagementXp(prev, 25));
    setView('dashboard');
  }, [COMPONENTS, confirmIfCstWarnings, metrics.currentPhase, metrics.overallPct, store, store.currentDraft, store.history]);

  const handleFinalisePriorMonth = useCallback(() => {
    const proceedWithWarnings = confirmIfCstWarnings('Finalise Prior Month');
    if (!proceedWithWarnings) {
      return;
    }

    const previousMonthLabel = reportReminder.previousMonthLabel;
    const alreadyFinalised = store.history.some((snapshot) => snapshot.monthLabel === previousMonthLabel);

    if (alreadyFinalised) {
      window.alert(`${previousMonthLabel} has already been finalised.`);
      return;
    }

    const previousDate = new Date();
    previousDate.setMonth(previousDate.getMonth() - 1);

    const snapshot = buildHistorySnapshot(store.currentDraft, metrics.overallPct, previousDate);
    setStore((prev) => ({
      ...prev,
      history: [...prev.history, snapshot]
    }));

    const submittedOnTime = new Date().getDate() === 1;
    setEngagement((prev) =>
      addEngagementXp(
        {
          ...prev,
          onTimeFinalisations: prev.onTimeFinalisations + (submittedOnTime ? 1 : 0),
          lateFinalisations: prev.lateFinalisations + (submittedOnTime ? 0 : 1)
        },
        submittedOnTime ? 45 : 20
      )
    );
  }, [confirmIfCstWarnings, metrics.overallPct, reportReminder.previousMonthLabel, store.currentDraft, store.history]);

  const handleLoadExampleData = useCallback(async () => {
    try {
      const response = await fetch('test-data/adoption-sample.json');
      if (!response.ok) {
        throw new Error(`Failed to load sample data: ${response.status}`);
      }

      const payload = (await response.json()) as Partial<SavedAdoptionAssessment>;
      setStore((prev) => syncVisionDerivedContent(mergeImportedAdoptionState(payload, prev)));
      setView('dashboard');
      if (shouldAutoCloseSidebar()) {
        setIsSidebarOpen(false);
      }
    } catch (error) {
      console.error(error);
      window.alert('Unable to load example data right now. Please try again.');
    }
  }, []);

  const handleResetData = useCallback(() => {
    const confirmed = window.confirm(
      'Warning: this will reset all assessment data (organisation profile, scores, actions, and history). If you are worried, please export your data first. Continue?'
    );

    if (!confirmed) {
      return;
    }

    const resetStore = syncVisionDerivedContent(initializeStore());
    setStore(resetStore);
    setShowMatrix({});
    setView('dashboard');

    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  }, []);

  const buildPointInTimePayload = useCallback(() => {
    return {
      generatedAt: new Date().toISOString(),
      targetMonth: reportReminder.previousMonthLabel,
      finalisedPriorMonth: reportReminder.hasFinalisedPreviousMonth,
      report: buildAdoptionExportPayload(store)
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
    setEngagement((prev) => addEngagementXp({ ...prev, emailDraftOpens: prev.emailDraftOpens + 1 }, 8));
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
            [todayKey]: true
          }
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
          highlightLayoutSaves: prev.highlightLayoutSaves + 1
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
      ''
    ].join('\r\n');

    const monthSlug = reportReminder.previousMonthLabel.toLowerCase().replace(/\s+/g, '-');
    downloadFile(`adoption-reminder-${monthSlug}.eml`, eml, 'message/rfc822');
  }, [buildPointInTimeFilename, buildPointInTimePayload, emailBody, emailSubject, emailTo, reportReminder.previousMonthLabel]);

  const dismissReportReminder = useCallback(() => {
    setDismissedReminderMonths((prev) => ({
      ...prev,
      [currentReminderMonthKey]: true
    }));
  }, [currentReminderMonthKey]);

  const shouldShowReportReminder =
    reportReminder.shouldNotify && !dismissedReminderMonths[currentReminderMonthKey];
  const themeUnlocked = engagement.level >= 3;
  const engagementGrade = useMemo(
    () => calculateEngagementGrade(engagement.onTimeFinalisations, engagement.emailDraftOpens),
    [engagement.emailDraftOpens, engagement.onTimeFinalisations]
  );
  const hasCheckedInToday = Boolean(engagement.checkIns[todayKey]);
  const checkInStreak = useMemo(() => calculateCheckInStreak(engagement.checkIns), [engagement.checkIns]);
  const achievements = useMemo(
    () => [
      {
        id: 'streak-3',
        name: 'Steady Cadence',
        description: 'Check in for 3 consecutive days.',
        unlocked: checkInStreak >= 3,
        progress: `${Math.min(checkInStreak, 3)}/3`
      },
      {
        id: 'first-ontime',
        name: 'On-Time Closer',
        description: 'Finalise a prior month on time.',
        unlocked: engagement.onTimeFinalisations >= 1,
        progress: `${Math.min(engagement.onTimeFinalisations, 1)}/1`
      },
      {
        id: 'first-save',
        name: 'Story Builder',
        description: 'Save your first highlight layout.',
        unlocked: engagement.highlightLayoutSaves >= 1,
        progress: `${Math.min(engagement.highlightLayoutSaves, 1)}/1`
      }
    ],
    [checkInStreak, engagement.highlightLayoutSaves, engagement.onTimeFinalisations]
  );

  const handleUserSettingsUpdate = useCallback((nextSettings: AdoptionUserSettings) => {
    if (!themeUnlocked && !THEME_PRESET_COLORS.includes(nextSettings.themeColor)) {
      setUserSettings((prev) => ({
        ...nextSettings,
        themeColor: prev.themeColor
      }));
      return;
    }
    setUserSettings(nextSettings);
  }, [themeUnlocked]);

  const getComponentStatus = (comp: typeof COMPONENTS[0]) => {
    let scoredCount = 0, justifiedCount = 0;
    comp.lenses.forEach(l => {
      const e = store.currentDraft[comp.id]?.[l];
      if (e && e.score > 0) {
        scoredCount++;
        if (e.justification?.trim()) justifiedCount++;
      }
    });
    
    if (scoredCount === 0) return { icon: '◯', color: 'text-blue-100', label: 'Not Started' };
    if (scoredCount > justifiedCount) return { icon: '⚠', color: 'text-red-300', label: 'Missing Justification' };
    if (scoredCount < comp.lenses.length) return { icon: '◐', color: 'text-amber-300', label: 'In Progress' };
    return { icon: '✓', color: 'text-green-300', label: 'Completed' };
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800">
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
          isSidebarOpen
            ? 'w-72 translate-x-0'
            : 'w-0 -translate-x-full lg:w-0'
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
            <div className="font-semibold text-blue-100">Level {engagement.level} · Grade {engagementGrade}</div>
            <div className="text-blue-200">XP {engagement.xp} · Layout saves {engagement.highlightLayoutSaves}</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">Navigation</div>
          <nav className="space-y-1 mb-8">
            {(['dashboard', 'project-details', 'action-plan', 'cm-guide', 'guidance-builder', 'roadmap-view', 'highlight-builder', 'settings'] as View[]).map(v => (
              <button
                key={v}
                onClick={() => handleViewChange(v)}
                className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                  view === v
                    ? 'bg-blue-800 text-white font-medium border-l-4 border-white'
                    : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'
                }`}
              >
                {v === 'dashboard' ? 'Dashboard' : v === 'project-details' ? 'Project Details' : v === 'action-plan' ? 'Action Tracker' : v === 'cm-guide' ? 'CM Toolkit Guide' : v === 'guidance-builder' ? 'Guidance Link Builder' : v === 'roadmap-view' ? 'Roadmap View' : v === 'highlight-builder' ? 'Highlight Builder Tool' : 'Settings & Profile'}
              </button>
            ))}
          </nav>

          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">Assessment Components</div>
          <nav className="space-y-1">
            {COMPONENTS.map(comp => {
              const isActive = view === 'assessment' && activeComponentId === comp.id;
              const status = getComponentStatus(comp);
              return (
                <button
                  key={comp.id}
                  onClick={() => {
                    openComponentAssessment(comp.id);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${
                    isActive ? 'bg-white font-medium text-[#005eb8]' : `hover:bg-blue-800 ${status.color}`
                  }`}
                >
                  <span className="truncate pr-2">{escapeHtml(comp.label)}</span>
                  <span className="text-xs flex-shrink-0">{status.icon}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 px-4 pb-4 border-t border-blue-800 pt-6">
            <div className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3">Status Legend</div>
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
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shrink-0 z-10 shadow-sm" style={{ borderTop: `3px solid ${userSettings.themeColor}` }}>
          <div className="flex items-center text-sm gap-4">
            <button
              onClick={() => setIsSidebarOpen((current) => !current)}
              className="inline-flex items-center justify-center px-3 py-2 text-white rounded-md font-semibold transition-colors shadow-sm"
              aria-label={isSidebarOpen ? 'Collapse side navigation' : 'Expand side navigation'}
              title={isSidebarOpen ? 'Collapse side navigation' : 'Expand side navigation'}
              style={{ backgroundColor: userSettings.themeColor }}
            >
              <span aria-hidden="true" className="text-lg leading-none">{isSidebarOpen ? '«' : '»'}</span>
              <span className="sr-only">{isSidebarOpen ? 'Collapse side navigation' : 'Expand side navigation'}</span>
            </button>
            <button onClick={() => { window.location.hash = '#/'; }} className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">
              ← Back
            </button>
            <span className="font-semibold text-slate-700 mr-2">
              {store.orgProfile.trustName || 'Unconfigured Trust'}
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 ml-2">
              {store.orgProfile.projectName || 'Unnamed Project'}
            </span>
            <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
              {store.orgProfile.cst.type.toUpperCase()} · {PATHWAY_LABELS[store.orgProfile.cst.pathway]}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowOnboarding(true)}
              aria-label="Show introduction"
              title="Show introduction"
              className={`text-sm w-9 h-9 flex items-center justify-center bg-white text-[#425563] border border-[#768692] hover:bg-[#f0f4f5] rounded-full font-semibold transition-colors ${nhsFocusRing}`}
            >
              ?
            </button>
            <button
              onClick={handleImportClick}
              className={nhsButtonSecondary}
            >
              Import
            </button>
            <button
              onClick={handleExport}
              className={nhsButtonSecondary}
            >
              Export JSON
            </button>
            <button
              onClick={handleFinaliseMonth}
              className={`${nhsButtonPrimary} shadow-[0_3px_0_rgba(0,0,0,0.2)]`}
              style={{ backgroundColor: userSettings.themeColor }}
            >
              Finalise Month
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {showEngagementCard ? (
            <section className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Engagement</p>
                  <p className="text-sm text-slate-700 mt-1">
                    Level {engagement.level} · Grade {engagementGrade} · On-time finalisations {engagement.onTimeFinalisations} · Email opens {engagement.emailDraftOpens}
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
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
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
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-800">{achievement.name}</p>
                      <span className="text-xs font-bold">
                        {achievement.unlocked ? 'Unlocked' : achievement.progress}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {shouldShowReportReminder && (
            <section className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">First Day Reminder</p>
                  <h3 className="text-lg font-bold text-amber-900 mt-1">
                    Submit prior month report for {reportReminder.previousMonthLabel}
                  </h3>
                  <p className="text-sm text-amber-800 mt-2">
                    Please prompt the team to finalise {reportReminder.previousMonthLabel} if it has not already been recorded.
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
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                  />
                </label>
                <label className="text-sm text-slate-700">
                  <span className="font-semibold">Subject</span>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(event) => setEmailSubject(event.target.value)}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                  />
                </label>
              </div>

              <label className="mt-3 block text-sm text-slate-700">
                <span className="font-semibold">Body</span>
                <textarea
                  value={emailBody}
                  onChange={(event) => setEmailBody(event.target.value)}
                  rows={9}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 font-mono text-xs"
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
                lenses={LENSES}
                metrics={metrics}
                getEntry={getEntry}
                onComponentClick={openComponentAssessment}
                pathway={store.orgProfile.cst.pathway}
                pathwayChecks={store.pathwayChecks}
                onNavigate={handleViewChange}
                onOpenLensInfo={setActiveLensInfo}
              />
            </div>
          )}
          {view === 'project-details' && (
            <ProjectDetailsPage
              orgProfile={store.orgProfile}
              onProfileUpdate={(updatedProfile) => {
                setStore(prev => ({
                  ...prev,
                  orgProfile: updatedProfile
                }));
              }}
              components={COMPONENTS}
              lenses={LENSES}
              store={store}
              getEntry={getEntry}
              onComponentClick={openComponentAssessment}
              onOpenOnboarding={() => setShowOnboarding(true)}
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
                setShowMatrix(prev => ({
                  ...prev,
                  [key]: !prev[key]
                }));
              }}
              onActionRemove={(componentId, lens, actionId) => {
                const entry = getEntry(componentId, lens);
                updateEntry(componentId, lens, {
                  ...entry,
                  actions: entry.actions.filter(a => a.id !== actionId).map(cloneAction)
                });
              }}
            />
          )}
          {view === 'action-plan' && (
            <ActionPlanTracker
              actions={actionRows}
              onComponentClick={openComponentAssessment}
            />
          )}
          {view === 'cm-guide' && (
            <ChangeManagementGuide />
          )}
          {view === 'guidance-builder' && (
            <GuidanceLinkMapBuilder defaultReportEmailTo={emailTo} />
          )}
          {view === 'roadmap-view' && (
            <GuidanceRoadmapView
              components={COMPONENTS}
              metrics={metrics}
              getEntry={getEntry}
              onComponentClick={openComponentAssessment}
              pathway={store.orgProfile.cst.pathway}
              pathwayChecks={store.pathwayChecks}
            />
          )}
          {view === 'highlight-builder' && (
            <HighlightBuilderTool
              store={store}
              metrics={metrics}
              lenses={LENSES}
              components={COMPONENTS}
              getEntry={getEntry}
              trustName={store.orgProfile.trustName}
              projectName={store.orgProfile.projectName}
              themeColor={userSettings.themeColor}
              onLayoutSaved={handleHighlightLayoutSaved}
            />
          )}
          {view === 'settings' && (
            <SettingsPanel
              userSettings={userSettings}
              onUserSettingsUpdate={handleUserSettingsUpdate}
              onLoadExampleData={handleLoadExampleData}
              onResetData={handleResetData}
              canUseCustomTheme={themeUnlocked}
              engagementGrade={engagementGrade}
              engagementLevel={engagement.level}
              engagementXp={engagement.xp}
            />
          )}
        </main>

        {activeLensInfo ? (
          <LensInfoModal lensName={activeLensInfo} onClose={() => setActiveLensInfo('')} />
        ) : null}

        <OnboardingIntro
          open={showOnboarding}
          onClose={dismissOnboarding}
          onNavigateToProjectDetails={() => {
            setView('project-details');
            dismissOnboarding();
          }}
        />
      </div>
    </div>
  );
}

export default AdoptionApp;
