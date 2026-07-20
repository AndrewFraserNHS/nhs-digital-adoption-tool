import AppState from '@lib/state';
import Charts from '@lib/charts';
import { escapeHtml } from '@lib/utils';
import { componentMatrix } from '@data/legacy-data';
import { exportMaturityReportToCSV } from '@lib/reporting';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import type { MaturityStore } from '@lib/maturityState';
import { initializeMaturityStore, initializeDetails, getDetail } from '@lib/maturityState';
import { validateScore } from '@lib/adoptionValidator';
import { mountMaturityOverview } from '@components/views/MaturityOverview';
import { mountMaturityAssessmentPanel } from '@components/views/MaturityAssessmentPanel';
import { renderMaturityModals } from '@components/views/MaturityModalManager';

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;

export function mountMaturityAssessment(container: HTMLElement) {
  const state = AppState.getInstance();
  state.loadFromWindow();
  state.assessment.responses = state.assessment.responses || {};

  const store: MaturityStore = initializeMaturityStore(Object.keys(componentMatrix)[0] || '');
  const details = initializeDetails();
  
  // Ensure all components have detail records initialized
  Object.keys(componentMatrix).forEach(componentName => {
    if (!details[componentName]) {
      details[componentName] = {
        justification: '',
        notes: '',
        links: [],
        actions: []
      };
    }
  });

  let radarChart: any = null;
  let summaryChart: any = null;

  // Helper functions
  function components() { return Object.keys(componentMatrix || {}); }
  
  function getScores(): Record<string, number> {
    const scores: Record<string, number> = {};
    components().forEach(n => {
      scores[n] = Number(state.assessment.responses?.[n] || 0);
    });
    return scores;
  }
  
  function getScoreArray() { 
    return components().map(n => Number(state.assessment.responses?.[n] || 0)); 
  }

  
  function overallText() {
    const s = getScoreArray();
    const avg = s.length ? s.reduce((a, b) => a + b, 0) / s.length : 0;
    return `${avg.toFixed(2)} \u2014 ${STAGES[Math.round(avg)] || STAGES[0]}`;
  }

  function getSummaryData() {
    const s = getScoreArray();
    if (store.summaryView === 'status') return {
      labels: ['Planned', 'In Progress', 'Completed', 'Cancelled'],
      values: [s.filter(x => x <= 1).length, s.filter(x => x >= 2 && x <= 3).length, s.filter(x => x >= 4).length, 0],
      colors: ['#768692', '#FFB81C', '#00A499', '#AE2521']
    };
    return {
      labels: ['Overdue', 'Due in <30 Days', 'On Track'],
      values: [s.filter(x => x <= 1).length, s.filter(x => x >= 2 && x <= 3).length, s.filter(x => x >= 4).length],
      colors: ['#AE2521', '#FFB81C', '#00A499']
    };
  }

  function renderCharts() {
    if (radarChart?.destroy) radarChart.destroy();
    if (summaryChart?.destroy) summaryChart.destroy();

    const radarCanvas = document.getElementById('maturityRadar') as HTMLCanvasElement | null;
    if (radarCanvas) {
      const s = getScoreArray();
      radarChart = Charts.createRadarChart(radarCanvas, {
        labels: components(),
        datasets: [{
          label: 'Current Score',
          data: s,
          backgroundColor: 'rgba(0,94,184,0.2)',
          borderColor: '#005EB8',
          borderWidth: 2.5,
          pointBackgroundColor: s.map(v => STAGE_COLORS[Math.max(0, Math.min(5, v))]),
          pointBorderColor: '#fff',
          pointRadius: 5,
          pointHoverRadius: 8
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0, max: 5,
            angleLines: { color: 'rgba(0,0,0,0.1)' },
            grid: { color: 'rgba(0,0,0,0.1)' },
            pointLabels: { color: 'rgba(0,0,0,0.8)', font: { size: 11 } },
            ticks: { backdropColor: 'transparent', stepSize: 1 }
          }
        }
      });
    }

    const sumCanvas = document.getElementById('actions-summary-chart') as HTMLCanvasElement | null;
    if (sumCanvas) {
      const d = getSummaryData();
      summaryChart = Charts.createChart('doughnut', sumCanvas, {
        labels: d.labels,
        datasets: [{ data: d.values, backgroundColor: d.colors, borderColor: '#f0f4f5', borderWidth: 2 }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: { display: true, position: 'bottom', labels: { font: { size: 10 }, boxWidth: 10, padding: 10 } },
          centerText: {
            text: String(d.values.reduce((a, b) => a + b, 0)),
            color: '#005EB8', font: 'bold 20px Inter',
            subText: 'Total Actions', subColor: '#6b7280', subFont: '12px Inter'
          }
        }
      });
    }
  }

  function handleFileOperations(action: string) {
    if (action === 'save') {
      const org = (document.getElementById('organisation-name') as HTMLInputElement | null)?.value || '';
      const project = (document.getElementById('project-name') as HTMLInputElement | null)?.value || '';
      const phase = (document.getElementById('project-phase-select') as HTMLSelectElement | null)?.value || '';
      const blob = new Blob([JSON.stringify({ orgProfile: { org, project, phase }, responses: state.assessment.responses, details }, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `NHS_Maturity_${(org || 'export').replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    } else if (action === 'load') {
      (document.getElementById('load-file-input') as HTMLInputElement | null)?.click();
    } else if (action === 'reset') {
      if (!confirm('Reset all scores? This cannot be undone.')) return;
      state.assessment.responses = {};
      render();
    }
  }

  document.getElementById('load-file-input')?.addEventListener('change', function (this: HTMLInputElement) {
    const file = this.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || '{}'));
        state.assessment.responses = parsed.responses || parsed.assessment?.responses || {};
        if (parsed.details) Object.assign(details, parsed.details);
        if (parsed.orgProfile) {
          const orgEl = document.getElementById('organisation-name') as HTMLInputElement | null;
          const projEl = document.getElementById('project-name') as HTMLInputElement | null;
          const phaseEl = document.getElementById('project-phase-select') as HTMLSelectElement | null;
          if (orgEl) orgEl.value = parsed.orgProfile.org || '';
          if (projEl) projEl.value = parsed.orgProfile.project || '';
          if (phaseEl) phaseEl.value = parsed.orgProfile.phase || '';
        }
        render();
      } catch { alert('Invalid JSON file.'); }
    };
    reader.readAsText(file);
    this.value = '';
  });

  // Guidance data placeholder (can be populated from external source)
  const guidanceData: Record<string, any> = {};

  /**
   * Main render function - orchestrates the entire UI
   */
  function render() {
    container.innerHTML = `
      <div class="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
        <div id="overview-container"></div>
        <div id="assessment-container"></div>
        <div id="modal-container"></div>
      </div>
    `;

    // Mount view components
    const overviewContainer = document.getElementById('overview-container');
    if (overviewContainer) {
      mountMaturityOverview(overviewContainer, {
        scores: getScores(),
        components: components(),
        overallText: overallText(),
        summaryData: getSummaryData(),
        summaryView: store.summaryView,
        onSummaryViewToggle: (view) => {
          store.summaryView = view;
          render();
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
          document.body.appendChild(a); a.click(); a.remove();
          URL.revokeObjectURL(url);
        },
        onLoadClick: () => {
          (document.getElementById('load-file-input') as HTMLInputElement | null)?.click();
        },
        onResetClick: () => {
          if (!confirm('Reset all scores? This cannot be undone.')) return;
          state.assessment.responses = {};
          render();
        },
        onReportsClick: () => {
          store.modal = 'report';
          updateModal();
        }
      });
    }

    const assessmentContainer = document.getElementById('assessment-container');
    if (assessmentContainer) {
      mountMaturityAssessmentPanel(assessmentContainer, {
        activeComponent: store.activeComponent,
        components: components(),
        scores: getScores(),
        details,
        componentMatrix,
        onComponentChange: (componentId) => {
          store.activeComponent = componentId;
          render();
        },
        onScoreChange: (componentId, score) => {
          const validation = validateScore(score);
          if (!validation.isValid) {
            console.warn(`Validation errors for ${componentId}:`, validation.errors);
          }
          state.assessment.responses[componentId] = score;
          render();
        },
        onOpenMatrix: (componentId) => {
          store.modal = 'matrix';
          store.modalComp = componentId;
          updateModal();
        },
        onOpenGuidance: (componentId) => {
          store.modal = 'guidance';
          store.modalComp = componentId;
          updateModal();
        },
        onDetailUpdate: () => {
          // Details are updated in place, just re-render panel if needed
        }
      });
    }

    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
      renderMaturityModals(modalContainer, {
        modalType: store.modal as any,
        activeComponent: store.modalComp,
        scores: getScores(),
        componentMatrix,
        guidanceData,
        components: components(),
        onClose: () => {
          store.modal = '';
          store.modalComp = '';
          updateModal();
        },
        onSetScore: (componentId, score) => {
          state.assessment.responses[componentId] = score;
          store.modal = '';
          store.modalComp = '';
          render();
        },
        onExportCsv: (data) => {
          exportMaturityReportToCSV(data, 'maturity-assessment.csv');
        }
      });
    }

    renderCharts();
  }

  /**
   * Update modal display
   */
  function updateModal() {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
      renderMaturityModals(modalContainer, {
        modalType: store.modal as any,
        activeComponent: store.modalComp,
        scores: getScores(),
        componentMatrix,
        guidanceData,
        components: components(),
        onClose: () => {
          store.modal = '';
          store.modalComp = '';
          updateModal();
        },
        onSetScore: (componentId, score) => {
          state.assessment.responses[componentId] = score;
          store.modal = '';
          store.modalComp = '';
          render();
        },
        onExportCsv: (data) => {
          exportMaturityReportToCSV(data, 'maturity-assessment.csv');
        }
      });
    }
  }

  render();
}

export default { mountMaturityAssessment };
