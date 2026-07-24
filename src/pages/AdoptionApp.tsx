import React, { useState, useCallback, useEffect } from 'react';
import AppState from '@lib/state';
import { createRadarChart, createLineChart } from '@lib/charts';
import { downloadFile, escapeHtml } from '@lib/utils';
import { ASSESSMENT_LENSES as LENSES } from '@data/lenses';
import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
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
  mergeImportedAdoptionState,
  type SavedAdoptionAssessment
} from '@lib/adoptionIO';
import { AdoptionDashboard } from '@components/views/AdoptionDashboard';
import { SettingsPanel, type AdoptionUserSettings } from '@components/views/SettingsPanel';
import { ActionPlanTracker } from '@components/views/ActionPlanTracker';
import { AssessmentPanel } from '@components/views/AssessmentPanel';

const ADOPTION_USER_SETTINGS_KEY = 'nhs-digital-adoption-user-settings';

const DEFAULT_USER_SETTINGS: AdoptionUserSettings = {
  name: '',
  preferences: '',
  themeColor: '#005eb8'
};

function cloneAction(action: DraftAction): DraftAction {
  return { ...action };
}

function getRubricText(componentId: string, lensName: string, score: number): string {
  const rubricGroup = (SPECIFIC_RUBRICS as Record<string, any>)[componentId];
  return rubricGroup?.[lensName]?.[score] || GENERIC_RUBRIC[score] || GENERIC_RUBRIC[0];
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
    const persisted = load<AdoptionStore>(ADOPTION_STORAGE_KEY);
    return initializeStore({
      view: 'dashboard',
      orgProfile: persisted?.orgProfile || state.adoption?.orgProfile,
      currentDraft: persisted?.currentDraft || state.adoption?.currentDraft,
      history: persisted?.history || state.adoption?.history
    }) as AdoptionStore;
  });

  const [showMatrix, setShowMatrix] = useState<Record<string, boolean>>({});
  const [userSettings, setUserSettings] = useState<AdoptionUserSettings>(() => {
    const persisted = load<Partial<AdoptionUserSettings>>(ADOPTION_USER_SETTINGS_KEY);
    return {
      ...DEFAULT_USER_SETTINGS,
      ...persisted
    };
  });
  const dashboardRef = React.useRef<HTMLDivElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const getEntry = useCallback((componentId: string, lens: string): DraftEntry => {
    if (!store.currentDraft[componentId]) {
      store.currentDraft[componentId] = {};
    }
    if (!store.currentDraft[componentId][lens]) {
      store.currentDraft[componentId][lens] = createEmptyEntry();
    }
    return store.currentDraft[componentId][lens];
  }, [store]);

  const metrics = computeMetrics(store, COMPONENTS);
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
      history: store.history
    };
  }, [store]);

  useEffect(() => {
    save(ADOPTION_USER_SETTINGS_KEY, userSettings);
  }, [userSettings]);

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

  const updateEntry = useCallback((componentId: string, lens: string, entry: DraftEntry) => {
    setStore((prev) => ({
      ...prev,
      currentDraft: {
        ...prev.currentDraft,
        [componentId]: {
          ...prev.currentDraft[componentId],
          [lens]: cloneEntry(entry)
        }
      }
    }));
  }, []);

  const handleExport = useCallback(() => {
    const payload = buildAdoptionExportPayload(store);

    downloadFile(
      `adoption-assessment-${(store.orgProfile.trustName || 'export').replace(/\s+/g, '_')}.json`,
      JSON.stringify(payload, null, 2),
      'application/json'
    );
  }, [store]);

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
    const snapshot = buildHistorySnapshot(store.currentDraft, metrics.overallPct);

    setStore((prev) => ({
      ...prev,
      history: [...prev.history, snapshot]
    }));
    setView('dashboard');
  }, [metrics.overallPct, store.currentDraft]);

  const handleLoadExampleData = useCallback(async () => {
    try {
      const response = await fetch('test-data/adoption-sample.json');
      if (!response.ok) {
        throw new Error(`Failed to load sample data: ${response.status}`);
      }

      const payload = (await response.json()) as Partial<SavedAdoptionAssessment>;
      setStore((prev) => mergeImportedAdoptionState(payload, prev));
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

    const resetStore = initializeStore();
    setStore(resetStore);
    setShowMatrix({});
    setView('dashboard');

    if (shouldAutoCloseSidebar()) {
      setIsSidebarOpen(false);
    }
  }, []);

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
          <h1 className="text-xl font-bold tracking-tight">NHS Digital Adoption</h1>
          <p className="text-blue-200 text-xs mt-1 flex justify-between items-center">
            <span>Readiness Tracking Tool</span>
            <span className="opacity-80 font-medium">V6.6</span>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">Navigation</div>
          <nav className="space-y-1 mb-8">
            {(['dashboard', 'action-plan', 'settings'] as View[]).map(v => (
              <button
                key={v}
                onClick={() => handleViewChange(v)}
                className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors ${
                  view === v
                    ? 'bg-blue-800 text-white font-medium border-l-4 border-white'
                    : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'
                }`}
              >
                {v === 'dashboard' ? 'Dashboard' : v === 'action-plan' ? 'Action Tracker' : 'Settings & Profile'}
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
                    setActiveComponentId(comp.id);
                    setView('assessment');
                    if (shouldAutoCloseSidebar()) {
                      setIsSidebarOpen(false);
                    }
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
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleImportClick}
              className="text-sm px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors"
            >
              Import
            </button>
            <button
              onClick={handleExport}
              className="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors"
            >
              Export JSON
            </button>
            <button
              onClick={handleFinaliseMonth}
              className="text-sm px-4 py-2 text-white rounded-md font-medium shadow-sm transition-colors"
              style={{ backgroundColor: userSettings.themeColor }}
            >
              Finalise Month
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {view === 'dashboard' && (
            <div ref={dashboardRef}>
              <AdoptionDashboard
                store={store}
                components={COMPONENTS}
                lenses={LENSES}
                metrics={metrics}
                getEntry={getEntry}
                onComponentClick={(componentId) => {
                  setActiveComponentId(componentId);
                  setView('assessment');
                  if (shouldAutoCloseSidebar()) {
                    setIsSidebarOpen(false);
                  }
                }}
              />
            </div>
          )}
          {view === 'assessment' && (
            <AssessmentPanel
              store={{ ...store, showMatrix }}
              components={COMPONENTS}
              activeComponentId={activeComponentId}
              getRubricText={getRubricText}
              getEntry={getEntry}
              onComponentChange={setActiveComponentId}
              onEntryUpdate={updateEntry}
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
              onComponentClick={(componentId) => {
                setActiveComponentId(componentId);
                setView('assessment');
                if (shouldAutoCloseSidebar()) {
                  setIsSidebarOpen(false);
                }
              }}
            />
          )}
          {view === 'settings' && (
            <SettingsPanel
              orgProfile={store.orgProfile}
              userSettings={userSettings}
              onProfileUpdate={(updatedProfile) => {
                setStore(prev => ({
                  ...prev,
                  orgProfile: updatedProfile
                }));
              }}
              onUserSettingsUpdate={setUserSettings}
              onLoadExampleData={handleLoadExampleData}
              onResetData={handleResetData}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default AdoptionApp;
