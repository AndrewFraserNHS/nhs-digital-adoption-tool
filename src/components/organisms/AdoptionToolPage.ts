import AppState from '@lib/state';
import Charts from '@lib/charts';
import { escapeHtml } from '@lib/utils';
import { exportMaturityReportToCSV } from '@lib/reporting';
import { ASSESSMENT_LENSES as LENSES } from '@data/lenses';
import { ASSESSMENT_COMPONENTS, getComponentById } from '@data/components';
import { GENERIC_RUBRIC } from '@data/rubrics';
import { SPECIFIC_RUBRICS } from '../../types/constants';
import type {
  View,
  DraftEntry,
  AdoptionStore
} from '@lib/adoptionState';
import { initializeStore, createEmptyEntry, cloneEntry } from '@lib/adoptionState';
import {
  getMetrics as computeMetrics,
  computeRadarData as computeRadarDataFn,
  computeTargetRadarData as computeTargetRadarDataFn,
  flattenActions as flattenActionsFn,
  buildRadarChartData
} from '@lib/adoptionMetrics';
import { validateEntry } from '@lib/adoptionValidator';
import { mountDashboard } from '@components/views/AdoptionDashboard';
import { mountSettingsPanel } from '@components/views/SettingsPanel';
import { mountActionPlan } from '@components/views/ActionPlanTracker';
import { mountAssessmentPanel } from '@components/views/AssessmentPanel';
import { renderLensInfoModal, bindLensInfoModalEvents } from '@components/views/LensInfoModal';

function getRubricText(componentId: string, lensName: string, score: number): string {
  const rubricGroup = (SPECIFIC_RUBRICS as Record<string, any>)[componentId];
  return rubricGroup?.[lensName]?.[score] || GENERIC_RUBRIC[score] || GENERIC_RUBRIC[0];
}

export function mountAdoptionTool(container: HTMLElement) {
  // Data & State
  const COMPONENTS = ASSESSMENT_COMPONENTS;
  
  // Store initialization using module
  const state = AppState.getInstance();
  state.loadFromWindow();
  const store = initializeStore({
    view: 'dashboard',
    orgProfile: state.adoption?.orgProfile,
    currentDraft: state.adoption?.currentDraft,
    history: state.adoption?.history
  }) as AdoptionStore & { 
    activeComponentId?: string; 
    activeLensInfo?: string; 
    showMatrix: Record<string, boolean>;
  };

  // Initialize showMatrix tracking
  store.showMatrix = store.showMatrix || {};
  let lineChart: any;
  let radarChart: any;

  // Helper functions
  function getComponent(componentId: string = store.activeComponentId || '') {
    return getComponentById(componentId) || COMPONENTS[0];
  }

  function getEntry(componentId: string, lens: string): DraftEntry {
    if (!store.currentDraft[componentId]) {
      store.currentDraft[componentId] = {};
    }
    if (!store.currentDraft[componentId][lens]) {
      store.currentDraft[componentId][lens] = createEmptyEntry();
    }
    return store.currentDraft[componentId][lens];
  }

  function getMetrics() {
    return computeMetrics(store, COMPONENTS);
  }

  function computeRadarData() {
    return computeRadarDataFn(store, LENSES, COMPONENTS, getEntry);
  }

  function computeTargetRadarData() {
    return computeTargetRadarDataFn(LENSES, COMPONENTS);
  }

  function flattenActions() {
    return flattenActionsFn(store, getComponent, getEntry);
  }

  function exportJSON() {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      orgProfile: store.orgProfile,
      history: store.history,
      currentDraft: store.currentDraft
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', `NHS_Adoption_${(store.orgProfile.trustName || 'export').replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function handleImport(file: File) {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.orgProfile && parsed.currentDraft) {
          store.orgProfile = parsed.orgProfile;
          store.history = parsed.history || [];
          store.currentDraft = parsed.currentDraft;
          render();
        } else {
          alert('Invalid file format. Please use a valid NHS Adoption Tool JSON export.');
        }
      } catch (e) {
        alert('Error importing file. Please ensure it is a valid NHS Adoption Tool JSON export.');
      }
    };
    reader.readAsText(file);
  }

  function finaliseMonth() {
    const metrics = getMetrics();
    const monthLabel = new Date().toLocaleString('en-GB', { month: 'short', year: 'numeric' });
    store.history.push({
      monthLabel,
      overallPercentage: metrics.overallPct,
      data: JSON.parse(JSON.stringify(store.currentDraft))
    });
    render();
  }

  function updateEntry(componentId: string, lens: string, updater: (entry: DraftEntry) => DraftEntry) {
    const current = getEntry(componentId, lens);
    const updated = updater(cloneEntry(current));
    
    // Validate the updated entry
    const validation = validateEntry(updated);
    if (!validation.isValid) {
      console.warn(`Validation errors for ${componentId}/${lens}:`, validation.errors);
    }
    
    store.currentDraft[componentId][lens] = updated;
  }

  function renderCharts() {
    if (store.view !== 'dashboard') return;
    
    const radarCanvas = document.querySelector<HTMLCanvasElement>('#adoption-radar-chart');
    const lineCanvas = document.querySelector<HTMLCanvasElement>('#adoption-line-chart');
    
    if (radarChart) {
      radarChart.destroy();
      radarChart = null;
    }
    if (lineChart) {
      lineChart.destroy();
      lineChart = null;
    }
    
    if (radarCanvas && Charts) {
      const radarData = buildRadarChartData(store, LENSES, COMPONENTS, getEntry);
      radarChart = Charts.createRadarChart(radarCanvas, radarData);
    }
    
    if (lineCanvas && Charts && store.history.length > 0) {
      lineChart = Charts.createLineChart(lineCanvas, {
        labels: store.history.map(h => h.monthLabel),
        datasets: [{
          label: 'Adoption Readiness %',
          data: store.history.map(h => h.overallPercentage),
          borderColor: '#005EB8',
          backgroundColor: 'rgba(0, 94, 184, 0.1)',
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          tension: 0.2
        }]
      });
    }
  }

  function exportSummaryCsv() {
    const metrics = getMetrics();
    const rows = [
      ['NHS Adoption Tool - Summary Report'],
      ['Export Date', new Date().toLocaleString()],
      ['Trust', store.orgProfile.trustName],
      ['Project', store.orgProfile.projectName || ''],
      [],
      ['Component', 'Scored', 'Justified', 'Status'],
      ...COMPONENTS.map(comp => {
        let scored = 0;
        let justified = 0;
        comp.lenses.forEach(lens => {
          const entry = store.currentDraft[comp.id]?.[lens];
          if (entry && entry.score > 0) {
            scored++;
            if (entry.justification?.trim()) justified++;
          }
        });
        return [comp.label, scored, justified, scored === comp.lenses.length && scored === justified ? 'Complete' : scored > 0 ? 'In Progress' : 'Not Started'];
      })
    ];
    
    const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NHS_Adoption_Summary_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function bindEvents() {
    // Deprecated: Event binding now handled by view components and bindTopLevelEvents
  }

  // Helper functions calling modules

  function render() {
    container.innerHTML = `
      <div class="flex h-screen overflow-hidden bg-slate-50 text-slate-800">
        <!-- Sidebar -->
        <div class="w-72 bg-[#005eb8] text-white flex flex-col shadow-xl z-20 flex-shrink-0">
          <div class="p-6 border-b border-blue-700">
            <h1 class="text-xl font-bold tracking-tight">NHS Digital Adoption</h1>
            <p class="text-blue-200 text-xs mt-1 flex justify-between items-center">
              <span>Readiness Tracking Tool</span>
              <span class="opacity-80 font-medium">V6.6</span>
            </p>
          </div>
          <div class="flex-1 overflow-y-auto py-4">
            <div class="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">Navigation</div>
            <nav class="space-y-1 mb-8">
              <button data-view="dashboard" class="w-full flex items-center px-4 py-2.5 text-sm transition-colors ${store.view === 'dashboard' ? 'bg-blue-800 text-white font-medium border-l-4 border-white' : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'}">Dashboard</button>
              <button data-view="action-plan" class="w-full flex items-center px-4 py-2.5 text-sm transition-colors ${store.view === 'action-plan' ? 'bg-blue-800 text-white font-medium border-l-4 border-white' : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'}">Action Tracker</button>
              <button data-view="settings" class="w-full flex items-center px-4 py-2.5 text-sm transition-colors ${store.view === 'settings' ? 'bg-blue-800 text-white font-medium border-l-4 border-white' : 'text-blue-100 hover:bg-blue-800 border-l-4 border-transparent'}">Settings &amp; Profile</button>
            </nav>
            <div class="px-4 mb-2 text-xs font-semibold text-blue-300 uppercase tracking-wider">Assessment Components</div>
            <nav class="space-y-1">
              ${COMPONENTS.map((comp) => {
                const isActive = store.view === 'assessment' && store.activeComponentId === comp.id;
                let scoredCount = 0;
                let justifiedCount = 0;
                comp.lenses.forEach((l) => {
                  const e = store.currentDraft[comp.id]?.[l];
                  if (e && e.score > 0) {
                    scoredCount++;
                    if (e.justification && e.justification.trim()) justifiedCount++;
                  }
                });
                const expectedCount = comp.lenses.length;
                let textColor = isActive ? 'text-[#005eb8]' : 'text-blue-100';
                let statusIcon = '';
                if (scoredCount > 0) {
                  if (scoredCount > justifiedCount) {
                    textColor = isActive ? 'text-red-600' : 'text-red-300';
                    statusIcon = '<span class="text-xs flex-shrink-0">&#9888;</span>';
                  } else if (scoredCount < expectedCount) {
                    textColor = isActive ? 'text-amber-600' : 'text-amber-300';
                    statusIcon = '<span class="text-xs flex-shrink-0">&#9680;</span>';
                  } else {
                    textColor = isActive ? 'text-green-600' : 'text-green-300';
                    statusIcon = '<span class="text-xs flex-shrink-0">&#10003;</span>';
                  }
                }
                return `<button data-nav-component="${comp.id}" class="w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors ${isActive ? 'bg-white font-medium' : 'hover:bg-blue-800'} ${textColor}"><span class="truncate pr-2">${escapeHtml(comp.label)}</span>${statusIcon}</button>`;
              }).join('')}
            </nav>
            <div class="mt-8 px-4 pb-4 border-t border-blue-800 pt-6">
              <div class="text-[10px] font-semibold text-blue-300 uppercase tracking-wider mb-3">Status Legend</div>
              <div class="space-y-2 text-xs text-blue-200">
                <div>&#9711; Not Started</div>
                <div>&#9680; In Progress</div>
                <div>&#9888; Missing Justification</div>
                <div>&#10003; Completed</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Main Content -->
        <div class="flex-1 flex flex-col h-screen overflow-hidden">
          <!-- Top Navbar -->
          <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 shrink-0 z-10 shadow-sm">
            <div class="flex items-center text-sm">
              <span class="font-semibold text-slate-700 mr-2">${escapeHtml(store.orgProfile.trustName || 'Unconfigured Trust')}</span>
              <span class="text-slate-400">/</span>
              <span class="text-slate-600 ml-2">${escapeHtml(store.orgProfile.projectName || 'Unnamed Project')}</span>
            </div>
            <div class="flex items-center space-x-3">
              <input type="file" id="adoption-import-file" accept=".json" class="hidden">
              <button id="adoption-import-button" class="text-sm px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">Import</button>
              <button id="adoption-export-button" class="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors">Export JSON</button>
              <button id="adoption-finalise-button" class="text-sm px-4 py-2 bg-[#005eb8] text-white hover:bg-blue-700 rounded-md font-medium shadow-sm transition-colors">Finalise Month</button>
            </div>
          </header>
          <!-- Scrollable main area -->
          <main id="main-content" class="flex-1 overflow-y-auto p-8"></main>
        </div>
        <div id="modal-container"></div>
      </div>
    `;

    // Render view components
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (store.view === 'dashboard') {
        mountDashboard(mainContent, {
          store,
          components: COMPONENTS,
          lenses: LENSES,
          metrics: getMetrics(),
          getEntry,
          onComponentClick: (componentId) => {
            store.activeComponentId = componentId;
            store.view = 'assessment';
            render();
          }
        });
      } else if (store.view === 'assessment') {
        mountAssessmentPanel(mainContent, {
          store,
          components: COMPONENTS,
          activeComponentId: store.activeComponentId || COMPONENTS[0].id,
          getRubricText,
          getEntry,
          onComponentChange: (componentId) => {
            store.activeComponentId = componentId;
            render();
          },
          onEntryUpdate: (componentId, lens, entry) => {
            store.currentDraft[componentId][lens] = entry;
          },
          onMatrixToggle: (key) => {
            const [compId, lens] = key.split('::');
            const matrixKey = `${compId}:${lens}`;
            store.showMatrix[matrixKey] = !store.showMatrix[matrixKey];
            render();
          },
          onActionRemove: (componentId, lens, actionId) => {
            const entry = getEntry(componentId, lens);
            entry.actions = entry.actions.filter(a => a.id !== actionId);
            store.currentDraft[componentId][lens] = entry;
            render();
          }
        });
      } else if (store.view === 'action-plan') {
        mountActionPlan(mainContent, {
          actions: flattenActions(),
          onComponentClick: (componentId) => {
            store.activeComponentId = componentId;
            store.view = 'assessment';
            render();
          }
        });
      } else if (store.view === 'settings') {
        mountSettingsPanel(mainContent, {
          orgProfile: store.orgProfile,
          onProfileUpdate: (updatedProfile) => {
            store.orgProfile = updatedProfile;
            render();
          }
        });
      }
    }

    // Render modal if needed
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer && store.activeLensInfo) {
      modalContainer.innerHTML = renderLensInfoModal({ lensName: store.activeLensInfo, onClose: () => {} });
      bindLensInfoModalEvents(modalContainer, { lensName: store.activeLensInfo, onClose: () => {
        store.activeLensInfo = '';
        render();
      }});
    }

    bindTopLevelEvents();
    renderCharts();
  }

  /**
   * Bind top-level navigation and data operation events
   */
  function bindTopLevelEvents() {
    // View navigation
    container.querySelectorAll<HTMLElement>('[data-view]').forEach((button) => {
      button.addEventListener('click', () => {
        store.view = button.dataset.view as View;
        render();
      });
    });

    // Component navigation
    container.querySelectorAll<HTMLElement>('[data-nav-component]').forEach((button) => {
      button.addEventListener('click', () => {
        const componentId = button.dataset.navComponent;
        if (!componentId) return;
        store.activeComponentId = componentId;
        store.view = 'assessment';
        render();
      });
    });

    // File operations
    document.getElementById('adoption-finalise-button')?.addEventListener('click', finaliseMonth);
    document.getElementById('adoption-export-button')?.addEventListener('click', exportJSON);
    document.getElementById('adoption-import-button')?.addEventListener('click', () => {
      document.getElementById('adoption-import-file')?.click();
    });
    const importFileInput = document.getElementById('adoption-import-file') as HTMLInputElement | null;
    importFileInput?.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) { handleImport(file); (e.target as HTMLInputElement).value = ''; }
    });

    // Report modal operations
    document.getElementById('close-report-display-modal')?.addEventListener('click', () => document.getElementById('report-display-modal')?.classList.add('hidden'));
    document.getElementById('print-from-modal-button')?.addEventListener('click', () => window.print());
    document.getElementById('export-csv-button')?.addEventListener('click', exportSummaryCsv);

    // Lens info modal
    document.getElementById('close-lens-info-modal')?.addEventListener('click', () => {
      store.activeLensInfo = '';
      render();
    });
  }

  // Initial render
  render();
}

export default { mountAdoptionTool };
