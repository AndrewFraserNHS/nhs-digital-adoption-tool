import type { JSX } from 'react';
import { useCallback } from 'react';
import { MATURITY_STAGES, STAGE_COLORS as STAGE_COLORS_PALETTE } from '@data/rubrics';
import { MATURITY_GUIDANCE_TARGETS, type MaturityGuidanceTarget } from '@data/maturity-guidance-links';
import { CONSTANTS } from '../../types/constants';

export interface MaturityOverviewProps {
  organisationName: string;
  projectName: string;
  projectPhase: string;
  guidanceTarget: MaturityGuidanceTarget;
  onOrganisationNameChange: (value: string) => void;
  onProjectNameChange: (value: string) => void;
  onProjectPhaseChange: (value: string) => void;
  onGuidanceTargetChange: (value: MaturityGuidanceTarget) => void;
  overallText: string;
  summaryView: 'dueDate' | 'status';
  onSummaryViewToggle: (view: 'dueDate' | 'status') => void;
  onSaveClick: () => void;
  onLoadClick: () => void;
  onResetClick: () => void;
  onReportsClick: () => void;
}

const PHASES = [
  'Phase 1: Pre-Discovery',
  'Phase 2: Solution Design',
  'Phase 3: Development',
  'Phase 4: Implementation',
  'Phase 5: Post Deployment'
];

const STAGES = MATURITY_STAGES;
const STAGE_COLORS = STAGE_COLORS_PALETTE;

export function MaturityOverview({
  organisationName,
  projectName,
  projectPhase,
  guidanceTarget,
  onOrganisationNameChange,
  onProjectNameChange,
  onProjectPhaseChange,
  onGuidanceTargetChange,
  overallText,
  summaryView,
  onSummaryViewToggle,
  onSaveClick,
  onLoadClick,
  onResetClick,
  onReportsClick
}: MaturityOverviewProps): JSX.Element {
  const handleSummaryViewToggle = useCallback(
    (view: 'dueDate' | 'status') => {
      onSummaryViewToggle(view);
    },
    [onSummaryViewToggle]
  );

  return (
    <div>
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6 py-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Change Maturity Assessment Tool</h1>
          <p className="text-xs text-slate-500 mt-0.5">{CONSTANTS.VERSION} — NHS Change Maturity Framework</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onReportsClick}
            className="text-sm px-4 py-2 bg-[#005eb8] text-white hover:bg-blue-700 rounded-md font-medium shadow-sm transition-colors"
          >
            Reports
          </button>
          <button
            onClick={onSaveClick}
            className="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors"
          >
            Save As...
          </button>
          <button
            onClick={onLoadClick}
            className="text-sm px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md font-medium transition-colors"
          >
            Load
          </button>
          <button
            onClick={onResetClick}
            className="text-sm px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Project Overview Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Input Fields */}
          <div className="space-y-4">
            <div>
              <label htmlFor="organisation-name" className="block text-sm font-medium text-gray-600 mb-1">
                Organisation Name
              </label>
              <input
                id="organisation-name"
                type="text"
                value={organisationName}
                onChange={(e) => onOrganisationNameChange(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter organisation name"
              />
            </div>
            <div>
              <label htmlFor="project-name" className="block text-sm font-medium text-gray-600 mb-1">
                Project Name
              </label>
              <input
                id="project-name"
                type="text"
                value={projectName}
                onChange={(e) => onProjectNameChange(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label htmlFor="project-phase-select" className="block text-sm font-medium text-gray-600 mb-1">
                Project Phase
              </label>
              <select
                id="project-phase-select"
                value={projectPhase}
                onChange={(e) => onProjectPhaseChange(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a phase to compare...</option>
                {PHASES.map((phase) => (
                  <option key={phase} value={phase}>
                    {phase}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="guidance-target-select" className="block text-sm font-medium text-gray-600 mb-1">
                Guidance Target
              </label>
              <select
                id="guidance-target-select"
                value={guidanceTarget}
                onChange={(e) => onGuidanceTargetChange(e.target.value as MaturityGuidanceTarget)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                {MATURITY_GUIDANCE_TARGETS.map((target) => (
                  <option key={target} value={target}>
                    {target}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Middle Column - Overall Maturity */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center flex flex-col items-center justify-center">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Overall Change Maturity
            </label>
            <p className="text-2xl font-bold text-blue-600">{overallText}</p>
          </div>

          {/* Right Column - Actions Summary Chart */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-600">Actions Summary</label>
              <div className="flex items-center text-xs bg-gray-200 rounded-full p-0.5">
                <button
                  onClick={() => handleSummaryViewToggle('dueDate')}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    summaryView === 'dueDate'
                      ? 'bg-white text-gray-800 shadow'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  By Due Date
                </button>
                <button
                  onClick={() => handleSummaryViewToggle('status')}
                  className={`px-2 py-0.5 rounded-full transition-all ${
                    summaryView === 'status'
                      ? 'bg-white text-gray-800 shadow'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  By Status
                </button>
              </div>
            </div>
            <div className="w-full h-48 flex items-center justify-center">
              <canvas
                id="actions-summary-chart"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Maturity Radar Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Maturity Radar</h2>
        <div style={{ position: 'relative', width: '100%', height: '520px', overflow: 'visible' }}>
          <canvas
            id="maturityRadar"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-gray-600">
          {STAGES.map((stage, i) => (
            <div key={i} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: STAGE_COLORS[i] }}
              />
              {i} = {stage}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}