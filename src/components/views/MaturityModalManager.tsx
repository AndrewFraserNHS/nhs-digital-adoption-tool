import React, { JSX, useCallback } from 'react';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import { generateMaturityReport, type MaturityReportData } from '@lib/reporting';

export interface MaturityGuidance {
  purpose: string;
  inputs: string;
  indicators: string;
  deliverables: string;
}

export interface MaturityModalManagerProps {
  modalType: '' | 'matrix' | 'guidance' | 'report';
  activeComponent: string;
  scores: Record<string, number>;
  componentMatrix: Record<string, string[]>;
  guidanceData: Record<string, MaturityGuidance>;
  reportData?: MaturityReportData;
  components?: string[];
  onClose: () => void;
  onSetScore?: (componentId: string, score: number) => void;
  onExportCsv?: (data: any) => void;
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
  components = [],
  onClose,
  onSetScore,
  onExportCsv
}: MaturityModalManagerProps): JSX.Element | null {
  const handlePrint = useCallback(() => {
    window.print();
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
          <div>{theme.inputs || ''}</div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-600 mb-1">Indicators for success</h4>
          <div>{theme.indicators || ''}</div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-600 mb-1">Deliverables</h4>
          <div>{theme.deliverables || ''}</div>
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

  if (modalType === 'report') {
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
            <h2 className="text-xl font-bold text-gray-900">Assessment Report</h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
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

  return null;
}