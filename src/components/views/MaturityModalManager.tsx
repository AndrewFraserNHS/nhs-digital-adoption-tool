import React, { JSX, useCallback } from 'react';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import { generateMaturityReport, generateActionPlanReport, type MaturityReportData, type ActionPlanReportData } from '@lib/reporting';
import { CONSTANTS, VERSION_HISTORY_ITEMS } from '../../types/constants';

export interface MaturityGuidance {
  purpose: string;
  inputs: string;
  indicators: string;
  deliverables: string;
  inputsHtml?: string;
  indicatorsHtml?: string;
  deliverablesHtml?: string;
}

export interface MaturityModalManagerProps {
  modalType: '' | 'matrix' | 'guidance' | 'reportChoice' | 'report' | 'actionPlanReport' | 'help' | 'versionHistory';
  activeComponent: string;
  scores: Record<string, number>;
  componentMatrix: Record<string, string[]>;
  guidanceData: Record<string, MaturityGuidance>;
  reportData?: MaturityReportData;
  actionPlanData?: ActionPlanReportData;
  components?: string[];
  onClose: () => void;
  onSetScore?: (componentId: string, score: number) => void;
  onSelectReport?: (type: 'maturity' | 'actionPlan') => void;
  onExportCsv?: (data: any) => void;
  onExportActionPlanCsv?: (rows: ActionPlanReportData['rows']) => void;
}

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;


export function MaturityModalManager({
  modalType,
  activeComponent,
  scores,
  componentMatrix,
  guidanceData,
  reportData,
  actionPlanData,
  components = [],
  onClose,
  onSetScore,
  onSelectReport,
  onExportCsv,
  onExportActionPlanCsv
}: MaturityModalManagerProps): JSX.Element | null {
  const renderGuidanceContent = useCallback((plainText: string, html?: string): JSX.Element => {
    if (html) {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <div>{plainText || ''}</div>;
  }, []);

  // Opens a blank window containing only report HTML so print output is clean and full-width
  const handlePrint = useCallback((html: string, title: string) => {
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 1.5cm; font-family: Arial, Helvetica, sans-serif; font-size: 11pt; color: #1f2937; }
  @page { margin: 0; size: A4 portrait; }
  img { max-width: 100%; height: auto; display: block; }
  table { width: 100%; border-collapse: collapse; }
  th, td { border: 1px solid #e5e7eb; padding: 8px; vertical-align: top; }
  thead { background-color: #f9fafb; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  h1, h2, h3 { margin: 0 0 0.25rem; }
  span[style*="border-radius"] { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  a { color: #2563eb; word-break: break-all; }
</style>
</head>
<body>${html}</body>
</html>`);
    win.document.close();
    win.addEventListener('load', () => { win.focus(); win.print(); win.close(); });
  }, []);

  const handleExportCsv = useCallback(() => {
    if (onExportCsv && reportData?.rows?.length) {
      onExportCsv(reportData.rows);
      return;
    }

    if (onExportCsv && components) {
      onExportCsv(
        components.map((n) => ({
          id: n,
          label: n,
          value: scores[n] || 0
        }))
      );
    }
  }, [components, reportData, scores, onExportCsv]);

  const handleSetScore = useCallback(
    (score: number) => {
      if (onSetScore) {
        onSetScore(activeComponent, score);
      }
    },
    [activeComponent, onSetScore]
  );

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!modalType) {
    return null;
  }

  if (modalType === 'matrix') {
    const sc = scores[activeComponent] || 0;
    const rows = componentMatrix[activeComponent] || [];

    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">{activeComponent} — Matrix</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto space-y-3">
            {STAGES.map((stage, i) => (
              <button
                key={i}
                onClick={() => handleSetScore(i)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  i === sc ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="font-semibold mb-1" style={{ color: STAGE_COLORS[i] }}>
                  {i} — {stage}
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {rows[i] || 'N/A'}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (modalType === 'guidance') {
    const theme = guidanceData[activeComponent];
    const body = theme ? (
      <div className="space-y-3 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold text-gray-600 mb-1">Purpose</h4>
          <p>{theme.purpose || ''}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-600 mb-1">Inputs, tools and templates</h4>
          {renderGuidanceContent(theme.inputs || '', theme.inputsHtml)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-600 mb-1">Indicators for success</h4>
          {renderGuidanceContent(theme.indicators || '', theme.indicatorsHtml)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-600 mb-1">Deliverables</h4>
          {renderGuidanceContent(theme.deliverables || '', theme.deliverablesHtml)}
        </div>
      </div>
    ) : (
      <p className="text-sm text-gray-600">No guidance available.</p>
    );

    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">{activeComponent} — Guidance</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto">{body}</div>
        </div>
      </div>
    );
  }

  if (modalType === 'help') {
    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">How to Use This Tool</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">1. Fill in Project Details</h3>
              <p>Start by entering the <span className="font-medium">Organisation Name</span> and <span className="font-medium">Project Name</span>. You can also select a <span className="font-medium">Project Phase</span> to compare your current scores with the expected maturity for that phase.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">2. Assess Each Theme</h3>
              <p>Use the tabs to navigate between the 12 change maturity themes. For each theme, select the <span className="font-medium">Maturity Stage</span> that best describes your project’s current state. Click <span className="font-medium">View Matrix</span> for detailed descriptions of each stage, or <span className="font-medium">View Guidance</span> for theme-specific advice.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">3. Provide Context & Actions</h3>
              <p>In the text boxes, add your <span className="font-medium">Justification</span> for the score, any <span className="font-medium">Additional information and notes</span>, and add supporting links with <span className="font-medium">Add Supporting Link</span>. Use the <span className="font-medium">Actions to Improve Maturity</span> section to add trackable actions with owners and dates.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">4. Track Your Progress</h3>
              <p>The <span className="font-medium">Maturity Radar</span> and <span className="font-medium">Overall Change Maturity</span> score update in real time as you work. The <span className="font-medium">Actions Summary</span> chart gives a quick view of your action plan, and your progress is automatically saved in your browser.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">5. Save, Load & Report</h3>
              <p>Use the buttons in the header to <span className="font-medium">Save As...</span> to save your assessment as a file, <span className="font-medium">Load</span> a previous assessment, generate <span className="font-medium">Reports</span> (Maturity or Action Plan), or <span className="font-medium">Reset</span> the tool.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (modalType === 'versionHistory') {
    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">Version History</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-6 overflow-y-auto space-y-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">CADAS - Change Maturity Assessment Tool {CONSTANTS.VERSION}</p>
            </div>
            <div className="space-y-4">
              {VERSION_HISTORY_ITEMS.map((item) => (
                <div key={item.version} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-slate-900">Version {item.version}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {item.notes.map((note) => (
                      <li key={note} className="leading-6">• {note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (modalType === 'reportChoice') {
    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">Select a Report</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-6 flex flex-col gap-3">
            <button
              onClick={() => onSelectReport?.('maturity')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 text-white rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: '#005EB8' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>Maturity Assessment Report</span>
            </button>
            <button
              onClick={() => onSelectReport?.('actionPlan')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 text-white rounded-lg transition-colors hover:opacity-90"
              style={{ backgroundColor: '#00A499' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>Action Plan Report</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (modalType === 'report') {
    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-[80vw] max-w-[80vw] max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">Assessment Report</h2>
            <div className="flex gap-2">
              <button
                onClick={() => handlePrint(generateMaturityReport(reportData), 'Maturity Assessment Report')}
                className="px-4 py-2 bg-[#005eb8] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Print / Save PDF
              </button>
              <button
                onClick={handleExportCsv}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                Export CSV
              </button>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
              >
                ×
              </button>
            </div>
          </div>
          <div
            className="p-8 overflow-y-auto print-area"
            dangerouslySetInnerHTML={{ __html: generateMaturityReport(reportData) }}
          />
        </div>
      </div>
    );
  }

  if (modalType === 'actionPlanReport') {
    return (
      <div
        className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
      >
        <div
          className="bg-white rounded-2xl shadow-xl w-[80vw] max-w-[80vw] max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h2 className="text-xl font-bold text-gray-900">Action Plan Report</h2>
            <div className="flex gap-2">
              <button
                onClick={() => handlePrint(generateActionPlanReport(actionPlanData ?? { orgName: '', rows: [] }), 'Action Plan Report')}
                className="px-4 py-2 bg-[#005eb8] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Print / Save PDF
              </button>
              <button
                onClick={() => onExportActionPlanCsv?.(actionPlanData?.rows ?? [])}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                Export CSV
              </button>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
              >
                ×
              </button>
            </div>
          </div>
          <div
            className="p-8 overflow-y-auto print-area"
            dangerouslySetInnerHTML={{ __html: generateActionPlanReport(actionPlanData ?? { orgName: '', rows: [] }) }}
          />
        </div>
      </div>
    );
  }

  return null;
}