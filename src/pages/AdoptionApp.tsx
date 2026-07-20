import React, { useState, useCallback, useEffect } from 'react';
import AppState from '@lib/state';
import { createRadarChart, createLineChart } from '@lib/charts';
import { escapeHtml } from '@lib/utils';
import { ASSESSMENT_LENSES as LENSES } from '@data/lenses';
import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
import { GENERIC_RUBRIC } from '@data/rubrics';
import { SPECIFIC_RUBRICS } from '@types/constants';
import type {
  View,
  DraftEntry,
  AdoptionStore
} from '@lib/adoptionState';
import { initializeStore, createEmptyEntry, cloneEntry } from '@lib/adoptionState';
import {
  getMetrics as computeMetrics,
  buildRadarChartData
} from '@lib/adoptionMetrics';
import { validateEntry } from '@lib/adoptionValidator';
import { AdoptionDashboard } from '@components/views/AdoptionDashboard';
import { SettingsPanel } from '@components/views/SettingsPanel';
import { ActionPlanTracker } from '@components/views/ActionPlanTracker';
import { AssessmentPanel } from '@components/views/AssessmentPanel';

function getRubricText(componentId: string, lensName: string, score: number): string {
  const rubricGroup = (SPECIFIC_RUBRICS as Record<string, any>)[componentId];
  return rubricGroup?.[lensName]?.[score] || GENERIC_RUBRIC[score] || GENERIC_RUBRIC[0];
}

export function AdoptionApp() {
  const COMPONENTS = ASSESSMENT_COMPONENTS;
  const [view, setView] = useState<View>('dashboard');
  const [activeComponentId, setActiveComponentId] = useState<string>(COMPONENTS[0].id);
  const [store, setStore] = useState<AdoptionStore>(() => {
    const state = AppState.getInstance();
    state.loadFromWindow();
    return initializeStore({
      view: 'dashboard',
      orgProfile: state.adoption?.orgProfile,
      currentDraft: state.adoption?.currentDraft,
      history: state.adoption?.history
    }) as AdoptionStore;
  });

  const [showMatrix, setShowMatrix] = useState<Record<string, boolean>>({});
  const dashboardRef = React.useRef<HTMLDivElement>(null);

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
              labels: store.history.map((_, i) => `Month ${i + 1}`),
              datasets: [{
                label: 'Adoption Score',
                data: store.history.map(h => h.score || 0),
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

  // Dashboard rendering now handled by React component below

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

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
      {/* Sidebar */}
      <div className="w-72 bg-[#005eb8] text-white flex flex-col shadow-xl z-20 flex-shrink-0">
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
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shrink-0 z-10 shadow-sm">
          <div className="flex items-center text-sm gap-4">
            <button onClick={() => window.location.href = '/'} className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">
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
            <button className="text-sm px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">
              Import
            </button>
            <button className="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors">
              Export JSON
            </button>
            <button className="text-sm px-4 py-2 bg-[#005eb8] text-white hover:bg-blue-700 rounded-md font-medium shadow-sm transition-colors">
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
              onEntryUpdate={(componentId, lens, entry) => {
                setStore(prev => ({
                  ...prev,
                  currentDraft: {
                    ...prev.currentDraft,
                    [componentId]: {
                      ...prev.currentDraft[componentId],
                      [lens]: entry
                    }
                  }
                }));
              }}
              onMatrixToggle={(key) => {
                setShowMatrix(prev => ({
                  ...prev,
                  [key]: !prev[key]
                }));
              }}
              onActionRemove={(componentId, lens, actionId) => {
                const entry = getEntry(componentId, lens);
                entry.actions = entry.actions.filter(a => a.id !== actionId);
                setStore(prev => ({
                  ...prev,
                  currentDraft: {
                    ...prev.currentDraft,
                    [componentId]: {
                      ...prev.currentDraft[componentId],
                      [lens]: entry
                    }
                  }
                }));
              }}
            />
          )}
          {view === 'action-plan' && (
            <ActionPlanTracker
              actions={[]}
              onComponentClick={(componentId) => {
                setActiveComponentId(componentId);
                setView('assessment');
              }}
            />
          )}
          {view === 'settings' && (
            <SettingsPanel
              orgProfile={store.orgProfile}
              onProfileUpdate={(updatedProfile) => {
                setStore(prev => ({
                  ...prev,
                  orgProfile: updatedProfile
                }));
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default AdoptionApp;
