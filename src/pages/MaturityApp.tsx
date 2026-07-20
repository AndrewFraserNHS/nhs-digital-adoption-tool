import React, { useState, useCallback, useEffect } from 'react';
import AppState from '@lib/state';
import { createRadarChart } from '@lib/charts';
import { validateScore } from '@lib/adoptionValidator';
import { componentMatrix } from '@data/legacy-data';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import type { MaturityStore } from '@lib/maturityState';
import { initializeMaturityStore, initializeDetails } from '@lib/maturityState';
import { mountMaturityOverview } from '@components/views/MaturityOverview';
import { mountMaturityAssessmentPanel } from '@components/views/MaturityAssessmentPanel';
import { renderMaturityModals } from '@components/views/MaturityModalManager';

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;

export function MaturityApp() {
  const [state] = useState(() => {
    const s = AppState.getInstance();
    s.loadFromWindow();
    s.assessment.responses = s.assessment.responses || {};
    return s;
  });

  const [store, setStore] = useState<MaturityStore>(() =>
    initializeMaturityStore(Object.keys(componentMatrix)[0] || '')
  );

  const [details, setDetails] = useState(() => {
    const d = initializeDetails();
    Object.keys(componentMatrix).forEach(componentName => {
      if (!d[componentName]) {
        d[componentName] = {
          justification: '',
          notes: '',
          links: [],
          actions: []
        };
      }
    });
    return d;
  });

  const components = useCallback(() => Object.keys(componentMatrix || {}), []);

  const getScores = useCallback((): Record<string, number> => {
    const scores: Record<string, number> = {};
    components().forEach(n => {
      scores[n] = Number(state.assessment.responses?.[n] || 0);
    });
    return scores;
  }, [state, components]);

  const getScoreArray = useCallback(() => 
    components().map(n => Number(state.assessment.responses?.[n] || 0))
  , [state, components]);

  const overallText = useCallback(() => {
    const s = getScoreArray();
    const avg = s.length ? s.reduce((a, b) => a + b, 0) / s.length : 0;
    return `${avg.toFixed(2)} — ${STAGES[Math.round(avg)] || STAGES[0]}`;
  }, [getScoreArray]);

  const getSummaryData = useCallback(() => {
    const scores = getScores();
    const stage = Math.round((Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length) || 0);
    return { stage, color: STAGE_COLORS[stage] };
  }, [getScores]);

  const overviewRef = React.useRef<HTMLDivElement>(null);
  const assessmentRef = React.useRef<HTMLDivElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);

  // Mount overview and render charts
  useEffect(() => {
    if (!overviewRef.current) return;
    
    overviewRef.current.innerHTML = '';
    const container = document.createElement('div');
    overviewRef.current.appendChild(container);

    const componentList = components();
    const summaryData = { labels: componentList, values: componentList.map(() => 1), colors: ['#005EB8'] };

    mountMaturityOverview(container, {
      scores: getScores(),
      components: componentList,
      overallText: overallText(),
      summaryData,
      summaryView: store.summaryView,
      onSummaryViewToggle: (view) => {
        setStore(prev => ({ ...prev, summaryView: view }));
      },
      onSaveClick: () => {
        const org = (document.getElementById('organisation-name') as HTMLInputElement | null)?.value || '';
        const project = (document.getElementById('project-name') as HTMLInputElement | null)?.value || '';
        const phase = (document.getElementById('project-phase-select') as HTMLSelectElement | null)?.value || '';
        const blob = new Blob([JSON.stringify({ orgProfile: { org, project, phase }, responses: state.assessment.responses, details }, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `NHS_Maturity_${(org || 'export').replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      },
      onLoadClick: () => {
        (document.getElementById('load-file-input') as HTMLInputElement | null)?.click();
      },
      onResetClick: () => {
        if (!confirm('Reset all scores? This cannot be undone.')) return;
        state.assessment.responses = {};
      },
      onReportsClick: () => {
        setStore(prev => ({ ...prev, modal: 'report' }));
      }
    });

    // Render charts after DOM is ready
    setTimeout(() => {
      const scores = getScores();
      
      // Render Actions Summary chart
      const summaryCanvas = container.querySelector('#actions-summary-chart') as HTMLCanvasElement;
      if (summaryCanvas) {
        const parent = summaryCanvas.parentElement as HTMLElement;
        if (parent) {
          summaryCanvas.width = parent.offsetWidth;
          summaryCanvas.height = parent.offsetHeight;
        }
        const summaryChartData = {
          labels: componentList,
          datasets: [{
            label: 'Status',
            data: componentList.map(() => Math.random() * 5),
            backgroundColor: 'rgba(0, 94, 184, 0.8)',
            borderColor: '#005EB8',
            borderWidth: 1
          }]
        };
        createRadarChart(summaryCanvas, summaryChartData, {
          maintainAspectRatio: false,
          responsive: true
        });
      }

      // Render Maturity Radar chart
      const radarCanvas = container.querySelector('#maturityRadar') as HTMLCanvasElement;
      if (radarCanvas) {
        const parent = radarCanvas.parentElement as HTMLElement;
        if (parent) {
          radarCanvas.width = parent.offsetWidth;
          radarCanvas.height = parent.offsetHeight;
        }
        const radarData = {
          labels: Object.keys(scores),
          datasets: [{
            label: 'Current Maturity',
            data: Object.values(scores),
            borderColor: '#005EB8',
            backgroundColor: 'rgba(0, 94, 184, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        };
        createRadarChart(radarCanvas, radarData, {
          maintainAspectRatio: false,
          responsive: true
        });
      }
    }, 150);
  }, [store, getScores, components, overallText, state.assessment.responses, details]);

  // Mount assessment panel
  useEffect(() => {
    if (!assessmentRef.current) return;
    
    assessmentRef.current.innerHTML = '';
    const container = document.createElement('div');
    assessmentRef.current.appendChild(container);

    mountMaturityAssessmentPanel(container, {
      activeComponent: store.activeComponent,
      components: components(),
      scores: getScores(),
      details,
      componentMatrix,
      onComponentChange: (componentId) => {
        setStore(prev => ({ ...prev, activeComponent: componentId }));
      },
      onScoreChange: (componentId, score) => {
        const validation = validateScore(score);
        if (!validation.isValid) {
          console.warn(`Validation errors for ${componentId}:`, validation.errors);
        }
        state.assessment.responses[componentId] = score;
      },
      onOpenMatrix: (componentId) => {
        setStore(prev => ({ ...prev, modal: 'matrix', modalComp: componentId }));
      },
      onOpenGuidance: (componentId) => {
        setStore(prev => ({ ...prev, modal: 'guidance', modalComp: componentId }));
      },
      onDetailUpdate: () => {}
    });
  }, [store, components, getScores, details, state.assessment.responses]);

  // Mount modals
  useEffect(() => {
    if (!modalRef.current) return;
    
    modalRef.current.innerHTML = '';
    const container = document.createElement('div');
    modalRef.current.appendChild(container);

    renderMaturityModals(container, {
      modalType: store.modal as any,
      activeComponent: store.modalComp,
      scores: getScores(),
      componentMatrix,
      guidanceData: {},
      components: components(),
      onClose: () => {
        setStore(prev => ({ ...prev, modal: '', modalComp: '' }));
      },
      onSetScore: (componentId, score) => {
        state.assessment.responses[componentId] = score;
        setStore(prev => ({ ...prev, modal: '', modalComp: '' }));
      },
      onExportCsv: (data) => {
        // TODO: implement CSV export
      }
    });
  }, [store, getScores, components, state.assessment.responses]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full">
        <div className="mb-6 flex items-center">
          <button onClick={() => window.location.href = '/'} className="text-sm px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium transition-colors">
            ← Back to Home
          </button>
        </div>
        {/* Overview Section */}
        <div ref={overviewRef} className="mb-8" />

        {/* Assessment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-3">
            <div ref={assessmentRef} />
          </div>
          <div>
            {/* Sidebar info can go here */}
          </div>
        </div>

        {/* Modal Container */}
        <div ref={modalRef} />
      </div>
    </div>
  );
}

export default MaturityApp;
