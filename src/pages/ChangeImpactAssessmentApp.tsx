import { FilterBar } from '@components/common/FilterBar';
import { BinIcon, IconActionButton, PencilIcon } from '@components/common/IconButtons';
import type { BenefitItem } from '@lib/adoptionState';
import { bragBadgeClass, getBragStatus } from '@lib/brag';
import { load, save } from '@lib/storage';
import { downloadFile, toAbsoluteUrl } from '@lib/utils';
import { type ChangeEvent, JSX, type RefObject, useEffect, useMemo, useRef, useState } from 'react';

import { nhsButtonSecondary } from '../styles/nhsTheme';

const FUNCTION_OPTIONS = [
  'Finance',
  'HR',
  'IT & Digital',
  'Operations',
  'Clinical',
  'Estates & Facilities',
  'Procurement',
  'Communications',
  'Other',
];

type ScoreValue = 1 | 2 | 3 | 4;

interface ScoringOption {
  value: ScoreValue;
  label: string;
}

const SCORING_CRITERIA: Record<
  | 'complexity'
  | 'frequency'
  | 'distance'
  | 'attitude'
  | 'conditions'
  | 'resources'
  | 'network'
  | 'capability',
  ScoringOption[]
> = {
  complexity: [
    { value: 1, label: '1 - Simple, generalist activity' },
    { value: 2, label: '2 - Simple, specialist activity' },
    { value: 3, label: '3 - Complex, generalist activity' },
    { value: 4, label: '4 - Highly complex, specialist activity' },
  ],
  frequency: [
    { value: 1, label: '1 - Once a month or less' },
    { value: 2, label: '2 - Once a week or less' },
    { value: 3, label: '3 - Once a day or less' },
    { value: 4, label: '4 - Constantly' },
  ],
  distance: [
    { value: 1, label: '1 - Same or very similar to current' },
    { value: 2, label: '2 - Less than 20% change' },
    { value: 3, label: '3 - Less than 50% change' },
    { value: 4, label: '4 - More than 80% change' },
  ],
  attitude: [
    { value: 1, label: '1 - Resistant to change' },
    { value: 2, label: '2 - Resistant but can be convinced' },
    { value: 3, label: '3 - Positive but needs clear benefits' },
    { value: 4, label: '4 - Very positive (Pull not Push)' },
  ],
  conditions: [
    { value: 1, label: '1 - Conditions not conducive' },
    { value: 2, label: '2 - >2 minor or 1 major change affecting' },
    { value: 3, label: '3 - No more than 2 minor changes' },
    { value: 4, label: '4 - Nothing to divert attention' },
  ],
  resources: [
    { value: 1, label: '1 - Challenges prevent implementation' },
    { value: 2, label: '2 - Resource challenges likely to impact' },
    { value: 3, label: '3 - Sufficient to support change' },
    { value: 4, label: '4 - Fully resourced' },
  ],
  network: [
    { value: 1, label: '1 - Not resourced' },
    { value: 2, label: '2 - Champions but not Agents' },
    { value: 3, label: '3 - Agents but not Champions' },
    { value: 4, label: '4 - Fully resourced and active' },
  ],
  capability: [
    { value: 1, label: '1 - Unaware of new ways of working' },
    { value: 2, label: '2 - Awareness of new ways working' },
    { value: 3, label: '3 - Acquired knowledge/skills (Training)' },
    { value: 4, label: '4 - Confidence in using skills (Practice)' },
  ],
};

interface ChangeImpactAssessment {
  id: string;
  function: string;
  process: string;
  processRef: string;
  processRefUrl?: string;
  benefitsRef: string;
  /** FK into the shared Benefits Register (AdoptionStore.benefits). When set, the Ben # cell links in-app to that benefit instead of showing plain text. */
  benefitId?: string;
  peopleImpacted: number;
  impactDate: string;
  timestamp: string;
  complexity: ScoreValue;
  frequency: ScoreValue;
  distance: ScoreValue;
  attitude: ScoreValue;
  conditions: ScoreValue;
  resources: ScoreValue;
  network: ScoreValue;
  capability: ScoreValue;
}

type AssessmentFormState = Omit<ChangeImpactAssessment, 'id' | 'timestamp'> & { id: string | null };

const STORAGE_KEY = 'nhs-change-impact-assessment';

const INITIAL_FORM_STATE: AssessmentFormState = {
  id: null,
  function: '',
  process: '',
  processRef: '',
  processRefUrl: '',
  benefitsRef: '',
  benefitId: undefined,
  peopleImpacted: 0,
  impactDate: '',
  complexity: 1,
  frequency: 1,
  distance: 1,
  attitude: 2,
  conditions: 2,
  resources: 2,
  network: 1,
  capability: 1,
};

const DEMO_DATA: ChangeImpactAssessment[] = [
  {
    id: 'demo1',
    function: 'Finance',
    process: 'Year End Close',
    processRef: 'FIN-001',
    benefitsRef: 'BEN-02',
    peopleImpacted: 15,
    impactDate: '2026-03-15',
    timestamp: '',
    complexity: 4,
    frequency: 1,
    distance: 3,
    attitude: 3,
    conditions: 3,
    resources: 2,
    network: 3,
    capability: 2,
  },
  {
    id: 'demo2',
    function: 'Finance',
    process: 'Invoice Processing',
    processRef: 'FIN-002',
    benefitsRef: 'BEN-05',
    peopleImpacted: 8,
    impactDate: '2026-04-01',
    timestamp: '',
    complexity: 2,
    frequency: 4,
    distance: 4,
    attitude: 2,
    conditions: 2,
    resources: 3,
    network: 2,
    capability: 2,
  },
  {
    id: 'demo3',
    function: 'HR',
    process: 'New Onboarding Flow',
    processRef: 'HR-101',
    benefitsRef: 'BEN-10',
    peopleImpacted: 50,
    impactDate: '2026-06-01',
    timestamp: '',
    complexity: 2,
    frequency: 2,
    distance: 3,
    attitude: 4,
    conditions: 4,
    resources: 4,
    network: 4,
    capability: 4,
  },
  {
    id: 'demo4',
    function: 'HR',
    process: 'Payroll Migration',
    processRef: 'HR-200',
    benefitsRef: 'BEN-11',
    peopleImpacted: 120,
    impactDate: '2026-01-25',
    timestamp: '',
    complexity: 4,
    frequency: 3,
    distance: 4,
    attitude: 1,
    conditions: 2,
    resources: 1,
    network: 1,
    capability: 1,
  },
  {
    id: 'demo5',
    function: 'IT',
    process: 'Security Patch 4.0',
    processRef: 'IT-900',
    benefitsRef: 'BEN-20',
    peopleImpacted: 200,
    impactDate: '2026-02-15',
    timestamp: '',
    complexity: 3,
    frequency: 1,
    distance: 2,
    attitude: 3,
    conditions: 4,
    resources: 4,
    network: 3,
    capability: 2,
  },
  {
    id: 'demo6',
    function: 'IT',
    process: 'Helpdesk Ticketing',
    processRef: 'IT-950',
    benefitsRef: 'BEN-22',
    peopleImpacted: 25,
    impactDate: '2026-05-10',
    timestamp: '',
    complexity: 2,
    frequency: 4,
    distance: 3,
    attitude: 2,
    conditions: 3,
    resources: 3,
    network: 2,
    capability: 2,
  },
  {
    id: 'demo7',
    function: 'Operations',
    process: 'Shift Scheduling',
    processRef: 'OPS-300',
    benefitsRef: 'BEN-30',
    peopleImpacted: 300,
    impactDate: '2026-04-20',
    timestamp: '',
    complexity: 3,
    frequency: 2,
    distance: 4,
    attitude: 1,
    conditions: 1,
    resources: 2,
    network: 2,
    capability: 1,
  },
  {
    id: 'demo8',
    function: 'Operations',
    process: 'Inventory Audit',
    processRef: 'OPS-400',
    benefitsRef: 'BEN-35',
    peopleImpacted: 40,
    impactDate: '2026-11-05',
    timestamp: '',
    complexity: 2,
    frequency: 1,
    distance: 1,
    attitude: 4,
    conditions: 4,
    resources: 4,
    network: 3,
    capability: 3,
  },
  {
    id: 'demo9',
    function: 'Marketing',
    process: 'Rebrand Launch',
    processRef: 'MKT-500',
    benefitsRef: 'BEN-40',
    peopleImpacted: 12,
    impactDate: '2026-09-01',
    timestamp: '',
    complexity: 4,
    frequency: 1,
    distance: 3,
    attitude: 4,
    conditions: 2,
    resources: 3,
    network: 4,
    capability: 3,
  },
  {
    id: 'demo10',
    function: 'Sales',
    process: 'CRM Upgrade',
    processRef: 'SLS-600',
    benefitsRef: 'BEN-45',
    peopleImpacted: 60,
    impactDate: '2026-07-15',
    timestamp: '',
    complexity: 3,
    frequency: 4,
    distance: 2,
    attitude: 2,
    conditions: 3,
    resources: 2,
    network: 2,
    capability: 2,
  },
  {
    id: 'demo11',
    function: 'Compliance',
    process: 'GDPR Audit',
    processRef: 'COM-700',
    benefitsRef: 'BEN-50',
    peopleImpacted: 5,
    impactDate: '2026-05-20',
    timestamp: '',
    complexity: 3,
    frequency: 1,
    distance: 2,
    attitude: 3,
    conditions: 4,
    resources: 3,
    network: 4,
    capability: 3,
  },
  {
    id: 'demo12',
    function: 'Legal',
    process: 'Contract Review Sys',
    processRef: 'LEG-800',
    benefitsRef: 'BEN-55',
    peopleImpacted: 10,
    impactDate: '2026-08-10',
    timestamp: '',
    complexity: 2,
    frequency: 3,
    distance: 3,
    attitude: 2,
    conditions: 3,
    resources: 2,
    network: 1,
    capability: 2,
  },
  {
    id: 'demo13',
    function: 'HR',
    process: 'Performance Review',
    processRef: 'HR-150',
    benefitsRef: 'BEN-12',
    peopleImpacted: 150,
    impactDate: '2026-11-01',
    timestamp: '',
    complexity: 2,
    frequency: 1,
    distance: 2,
    attitude: 3,
    conditions: 3,
    resources: 3,
    network: 3,
    capability: 3,
  },
  {
    id: 'demo14',
    function: 'Operations',
    process: 'Fleet Maintenance',
    processRef: 'OPS-450',
    benefitsRef: 'BEN-32',
    peopleImpacted: 20,
    impactDate: '2026-06-15',
    timestamp: '',
    complexity: 3,
    frequency: 2,
    distance: 2,
    attitude: 4,
    conditions: 4,
    resources: 4,
    network: 4,
    capability: 4,
  },
  {
    id: 'demo15',
    function: 'Finance',
    process: 'Budget Planning',
    processRef: 'FIN-005',
    benefitsRef: 'BEN-03',
    peopleImpacted: 10,
    impactDate: '2026-10-01',
    timestamp: '',
    complexity: 4,
    frequency: 1,
    distance: 2,
    attitude: 2,
    conditions: 1,
    resources: 2,
    network: 2,
    capability: 2,
  },
  {
    id: 'demo16',
    function: 'IT',
    process: 'Cloud Migration',
    processRef: 'IT-990',
    benefitsRef: 'BEN-25',
    peopleImpacted: 15,
    impactDate: '2026-12-01',
    timestamp: '',
    complexity: 4,
    frequency: 4,
    distance: 4,
    attitude: 3,
    conditions: 2,
    resources: 3,
    network: 3,
    capability: 2,
  },
];

/** Change Score: (Complexity + Frequency + 2*Distance) / 16 * 100. Readiness Score: (Attitude + Conditions + Resources + Network + Capability) / 20 * 100. */
function calculateScores(item: ChangeImpactAssessment): {
  changeScore: number;
  readinessScore: number;
} {
  const changeScoreRaw = item.complexity + item.frequency + 2 * item.distance;
  const changeScore = (changeScoreRaw / 16) * 100;
  const readinessScoreRaw =
    item.attitude + item.conditions + item.resources + item.network + item.capability;
  const readinessScore = (readinessScoreRaw / 20) * 100;
  return { changeScore, readinessScore };
}

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function ScoreBadge({ score, type }: { score: number; type: 'change' | 'readiness' }): JSX.Element {
  let colorClass = 'bg-slate-100 text-slate-800 border-slate-200';
  if (type === 'change') {
    if (score >= 70) {
      colorClass = 'bg-red-100 text-red-800 border-red-200';
    } else if (score >= 40) {
      colorClass = 'bg-amber-100 text-amber-800 border-amber-200';
    } else {
      colorClass = 'bg-green-100 text-green-800 border-green-200';
    }
  } else {
    if (score >= 70) {
      colorClass = 'bg-green-100 text-green-800 border-green-200';
    } else if (score >= 40) {
      colorClass = 'bg-amber-100 text-amber-800 border-amber-200';
    } else {
      colorClass = 'bg-red-100 text-red-800 border-red-200';
    }
  }
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${colorClass}`}>
      {score.toFixed(0)}%
    </span>
  );
}

function AssessmentsTab({
  items,
  formData,
  showForm,
  onShowFormChange,
  onFormDataChange,
  onSave,
  onEdit,
  onDelete,
  onImportClick,
  onImportFile,
  onExport,
  onLoadDemo,
  fileInputRef,
  benefits,
  onNavigateToBenefit,
}: {
  items: ChangeImpactAssessment[];
  formData: AssessmentFormState;
  showForm: boolean;
  onShowFormChange: (show: boolean) => void;
  onFormDataChange: (updates: Partial<AssessmentFormState>) => void;
  onSave: () => void;
  onEdit: (item: ChangeImpactAssessment) => void;
  onDelete: (id: string) => void;
  onImportClick: () => void;
  onImportFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onExport: () => void;
  onLoadDemo: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  benefits: BenefitItem[];
  onNavigateToBenefit?: (benefitId: string) => void;
}): JSX.Element {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('ascending');
  const [functionFilter, setFunctionFilter] = useState('');
  const [processFilter, setProcessFilter] = useState('');

  const handleSort = (key: string) => {
    if (sortKey === key && sortDirection === 'ascending') {
      setSortDirection('descending');
    } else {
      setSortKey(key);
      setSortDirection('ascending');
    }
  };

  const sortedAndFiltered = useMemo(() => {
    let result = [...items];
    if (functionFilter) {
      result = result.filter((item) => item.function === functionFilter);
    }
    if (processFilter) {
      result = result.filter((item) => item.process === processFilter);
    }
    if (sortKey) {
      result.sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;
        if (sortKey === 'changeScore' || sortKey === 'readinessScore') {
          aValue = calculateScores(a)[sortKey];
          bValue = calculateScores(b)[sortKey];
        } else {
          aValue = a[sortKey as keyof ChangeImpactAssessment] as string | number;
          bValue = b[sortKey as keyof ChangeImpactAssessment] as string | number;
        }
        if (typeof aValue === 'string') {
          aValue = aValue.toLowerCase();
        }
        if (typeof bValue === 'string') {
          bValue = bValue.toLowerCase();
        }
        if (aValue < bValue) {
          return sortDirection === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortDirection === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return result;
  }, [items, sortKey, sortDirection, functionFilter, processFilter]);

  /** Ranks # Impacted within the currently filtered list: the most populous top 10% (or top 5,
   * whichever is more) are flagged red, the least populous bottom slice the same size is green,
   * everything else is amber. */
  const peopleImpactedStatusById = useMemo(() => {
    const n = sortedAndFiltered.length;
    const result: Record<string, 'red' | 'amber' | 'green'> = {};
    if (n === 0) {
      return result;
    }
    const thresholdCount =
      n > 2 ? Math.min(Math.max(Math.ceil(n * 0.1), 5), Math.floor(n / 2)) : 0;
    const byImpact = [...sortedAndFiltered].sort((a, b) => b.peopleImpacted - a.peopleImpacted);
    const redIds = new Set(byImpact.slice(0, thresholdCount).map((item) => item.id));
    const greenIds = new Set(byImpact.slice(n - thresholdCount).map((item) => item.id));
    sortedAndFiltered.forEach((item) => {
      result[item.id] = redIds.has(item.id) ? 'red' : greenIds.has(item.id) ? 'green' : 'amber';
    });
    return result;
  }, [sortedAndFiltered]);

  const uniqueFunctions = useMemo(
    () =>
      Array.from(new Set(items.map((item) => item.function)))
        .filter(Boolean)
        .sort(),
    [items]
  );
  const functionOptions = useMemo(
    () => Array.from(new Set([...FUNCTION_OPTIONS, ...uniqueFunctions])),
    [uniqueFunctions]
  );
  const uniqueProcesses = useMemo(
    () =>
      Array.from(new Set(items.map((item) => item.process)))
        .filter(Boolean)
        .sort(),
    [items]
  );

  const sortIndicator = (column: string) => {
    if (sortKey !== column) {
      return '';
    }
    return sortDirection === 'ascending' ? ' ▲' : ' ▼';
  };

  const columns: { key: string; label: string; center?: boolean }[] = [
    { key: 'function', label: 'Function' },
    { key: 'process', label: 'Process' },
    { key: 'processRef', label: 'Ref #' },
    { key: 'benefitsRef', label: 'Ben #' },
    { key: 'peopleImpacted', label: '# Impacted' },
    { key: 'impactDate', label: 'Date' },
    { key: 'changeScore', label: 'Change Score', center: true },
    { key: 'readinessScore', label: 'Readiness Score', center: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Detailed Impact Assessments</h2>
        <div className="flex flex-wrap gap-2">
          <input
            ref={fileInputRef}
            type="file"
            onChange={onImportFile}
            accept=".csv"
            className="hidden"
          />
          <button
            type="button"
            onClick={onLoadDemo}
            className="text-sm text-slate-500 hover:text-blue-600 px-3 py-2"
          >
            Load Demo Data
          </button>
          <button type="button" onClick={onImportClick} className={nhsButtonSecondary}>
            Import CSV
          </button>
          <button
            type="button"
            onClick={onExport}
            disabled={!items.length}
            className={`${nhsButtonSecondary} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Export CSV
          </button>
          <button
            type="button"
            onClick={() => {
              onFormDataChange(INITIAL_FORM_STATE);
              onShowFormChange(!showForm);
            }}
            className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            {showForm ? 'Cancel' : '+ New Assessment'}
          </button>
        </div>
      </div>

      {showForm ? (
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
          <h3 className="text-lg font-medium text-blue-900 mb-4">
            {formData.id ? 'Edit Assessment' : 'New Assessment'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                1. Process Details
              </h4>
              <div>
                <label
                  htmlFor="cia-function"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Business Function
                </label>
                <select
                  id="cia-function"
                  value={formData.function}
                  onChange={(event) => onFormDataChange({ function: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                >
                  <option value="">Select a function...</option>
                  {functionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Process Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Payroll Run"
                  value={formData.process}
                  onChange={(event) => onFormDataChange({ process: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Process Ref #{' '}
                    <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. P-101"
                    value={formData.processRef}
                    onChange={(event) => onFormDataChange({ processRef: event.target.value })}
                    className="w-full p-2 border border-slate-300 rounded outline-none"
                  />
                  <input
                    type="url"
                    placeholder="Link URL (optional)"
                    value={formData.processRefUrl || ''}
                    onChange={(event) => onFormDataChange({ processRefUrl: event.target.value })}
                    className="w-full mt-1 p-2 border border-slate-300 rounded outline-none text-xs"
                  />
                </div>
                <div>
                  <label
                    htmlFor="assessment-linked-benefit"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Linked Benefit{' '}
                    <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="assessment-linked-benefit"
                    value={formData.benefitId || ''}
                    onChange={(event) => {
                      const benefit = benefits.find((b) => b.id === event.target.value);
                      onFormDataChange({
                        benefitId: benefit?.id,
                        benefitsRef: benefit?.benefitNo || '',
                      });
                    }}
                    className="w-full p-2 border border-slate-300 rounded outline-none"
                  >
                    <option value="">None</option>
                    {benefits.map((benefit) => (
                      <option key={benefit.id} value={benefit.id}>
                        {benefit.benefitNo} — {benefit.title || '(untitled benefit)'}
                      </option>
                    ))}
                  </select>
                  {benefits.length === 0 ? (
                    <p className="mt-1 text-xs text-slate-400">
                      No benefits in the register yet - add one in the Benefits tool first.
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    # Impacted
                  </label>
                  <input
                    type="number"
                    value={formData.peopleImpacted}
                    onChange={(event) =>
                      onFormDataChange({ peopleImpacted: Number(event.target.value) })
                    }
                    className="w-full p-2 border border-slate-300 rounded outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Impact Date
                  </label>
                  <input
                    type="date"
                    value={formData.impactDate}
                    onChange={(event) => onFormDataChange({ impactDate: event.target.value })}
                    className="w-full p-2 border border-slate-300 rounded outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                2. Change Impact
              </h4>
              {(['complexity', 'frequency', 'distance'] as const).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-slate-700 mb-1 capitalize">
                    {field === 'distance' ? 'Distance (x2 Weight)' : field}
                  </label>
                  <select
                    value={formData[field]}
                    onChange={(event) =>
                      onFormDataChange({ [field]: Number(event.target.value) as ScoreValue })
                    }
                    className="w-full p-2 border border-slate-300 rounded outline-none text-sm"
                  >
                    {SCORING_CRITERIA[field].map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-800 border-b border-blue-200 pb-1">
                3. Business Readiness
              </h4>
              {(['attitude', 'conditions'] as const).map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-slate-700 mb-1 capitalize">
                    {field}
                  </label>
                  <select
                    value={formData[field]}
                    onChange={(event) =>
                      onFormDataChange({ [field]: Number(event.target.value) as ScoreValue })
                    }
                    className="w-full p-2 border border-slate-300 rounded outline-none text-sm"
                  >
                    {SCORING_CRITERIA[field].map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-2">
                {(['resources', 'network'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-slate-700 mb-1 capitalize">
                      {field}
                    </label>
                    <select
                      value={formData[field]}
                      onChange={(event) =>
                        onFormDataChange({ [field]: Number(event.target.value) as ScoreValue })
                      }
                      className="w-full p-2 border border-slate-300 rounded outline-none text-sm"
                    >
                      {SCORING_CRITERIA[field].map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Capability (ADKAR)
                </label>
                <select
                  value={formData.capability}
                  onChange={(event) =>
                    onFormDataChange({ capability: Number(event.target.value) as ScoreValue })
                  }
                  className="w-full p-2 border border-slate-300 rounded outline-none text-sm"
                >
                  {SCORING_CRITERIA.capability.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onShowFormChange(false)}
              className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSave}
              className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Save Assessment
            </button>
          </div>
        </div>
      ) : null}

      <FilterBar
        selects={[
          {
            key: 'function',
            label: 'Function',
            value: functionFilter,
            options: uniqueFunctions,
            onChange: setFunctionFilter,
          },
          {
            key: 'process',
            label: 'Process',
            value: processFilter,
            options: uniqueProcesses,
            onChange: setProcessFilter,
          },
        ]}
        onReset={() => {
          setFunctionFilter('');
          setProcessFilter('');
        }}
      />

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className={`px-4 py-3 cursor-pointer hover:bg-slate-100 ${col.center ? 'text-center' : ''}`}
                >
                  {col.label}
                  {sortIndicator(col.key)}
                </th>
              ))}
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedAndFiltered.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-slate-500 italic">
                  {items.length === 0
                    ? 'No assessments added yet. Click "New Assessment" to begin.'
                    : 'No matching records found.'}
                </td>
              </tr>
            ) : (
              sortedAndFiltered.map((item) => {
                const scores = calculateScores(item);
                const benefitStatus = getBragStatus(scores.readinessScore - scores.changeScore, {
                  blue: Infinity,
                  green: 10,
                  amber: -10,
                });
                return (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{item.function}</td>
                    <td className="px-4 py-3 text-slate-600">{item.process}</td>
                    <td className="px-2 py-3 text-xs">
                      {item.processRefUrl ? (
                        <a
                          href={toAbsoluteUrl(item.processRefUrl)}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          {item.processRef || '-'}
                        </a>
                      ) : (
                        <span className="text-slate-500">{item.processRef || '-'}</span>
                      )}
                    </td>
                    <td className="px-2 py-3 text-xs">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 ${bragBadgeClass(benefitStatus)}`}
                        title="Benefit status: readiness vs. change demand"
                      >
                        {item.benefitId && onNavigateToBenefit ? (
                          <button
                            type="button"
                            onClick={() => onNavigateToBenefit(item.benefitId as string)}
                            className="underline hover:no-underline"
                          >
                            {item.benefitsRef || '-'}
                          </button>
                        ) : (
                          item.benefitsRef || '-'
                        )}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${bragBadgeClass(peopleImpactedStatusById[item.id] || 'amber')}`}
                      >
                        {item.peopleImpacted}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{item.impactDate}</td>
                    <td className="px-4 py-3 text-center">
                      <ScoreBadge score={scores.changeScore} type="change" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ScoreBadge score={scores.readinessScore} type="readiness" />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <IconActionButton onClick={() => onEdit(item)} title="Edit assessment">
                          <PencilIcon />
                        </IconActionButton>
                        <IconActionButton
                          onClick={() => onDelete(item.id)}
                          title="Delete assessment"
                          variant="danger"
                        >
                          <BinIcon />
                        </IconActionButton>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DashboardTab({ items }: { items: ChangeImpactAssessment[] }): JSX.Element {
  const [filterFunction, setFilterFunction] = useState('All');
  const [weightedView, setWeightedView] = useState(false);
  const [heatmapOverlay, setHeatmapOverlay] = useState<
    'count' | 'changeScore' | 'readinessScore' | 'capability'
  >('readinessScore');
  const [readinessSort, setReadinessSort] = useState<'asc' | 'desc'>('desc');

  const uniqueFunctions = useMemo(
    () => ['All', ...new Set(items.map((item) => item.function).filter(Boolean))].sort(),
    [items]
  );

  const filteredItems = useMemo(
    () =>
      filterFunction === 'All' ? items : items.filter((item) => item.function === filterFunction),
    [items, filterFunction]
  );

  const functionGroups = useMemo(() => {
    const groups: Record<
      string,
      {
        count: number;
        totalReadiness: number;
        totalChange: number;
        totalImpacted: number;
        weightedReadinessSum: number;
        weightedChangeSum: number;
      }
    > = {};
    filteredItems.forEach((item) => {
      if (!groups[item.function]) {
        groups[item.function] = {
          count: 0,
          totalReadiness: 0,
          totalChange: 0,
          totalImpacted: 0,
          weightedReadinessSum: 0,
          weightedChangeSum: 0,
        };
      }
      const scores = calculateScores(item);
      const people = item.peopleImpacted || 0;
      const g = groups[item.function];
      g.count += 1;
      g.totalReadiness += scores.readinessScore;
      g.totalChange += scores.changeScore;
      g.totalImpacted += people;
      g.weightedReadinessSum += scores.readinessScore * people;
      g.weightedChangeSum += scores.changeScore * people;
    });

    const results = Object.keys(groups).map((key) => {
      const g = groups[key];
      const avgReadiness =
        weightedView && g.totalImpacted > 0
          ? g.weightedReadinessSum / g.totalImpacted
          : g.totalReadiness / g.count;
      const avgChange =
        weightedView && g.totalImpacted > 0
          ? g.weightedChangeSum / g.totalImpacted
          : g.totalChange / g.count;
      return { name: key, avgReadiness, avgChange, totalImpacted: g.totalImpacted };
    });

    return results.sort((a, b) =>
      readinessSort === 'asc' ? a.avgReadiness - b.avgReadiness : b.avgReadiness - a.avgReadiness
    );
  }, [filteredItems, weightedView, readinessSort]);

  const kpiMetrics = useMemo(() => {
    const totalProcesses = filteredItems.length;
    const totalPeople = filteredItems.reduce((acc, curr) => acc + (curr.peopleImpacted || 0), 0);
    let avgReadiness = 0;
    if (totalProcesses > 0) {
      if (weightedView && totalPeople > 0) {
        const weightedSum = filteredItems.reduce(
          (acc, curr) => acc + calculateScores(curr).readinessScore * (curr.peopleImpacted || 0),
          0
        );
        avgReadiness = weightedSum / totalPeople;
      } else {
        avgReadiness =
          filteredItems.reduce((acc, curr) => acc + calculateScores(curr).readinessScore, 0) /
          totalProcesses;
      }
    }
    return { totalProcesses, totalPeople, avgReadiness };
  }, [filteredItems, weightedView]);

  const heatmapData = useMemo(() => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const grid: Record<
      string,
      { count: number; changeSum: number; readinessSum: number; capabilitySum: number }[]
    > = {};
    const funcs = [...new Set(filteredItems.map((i) => i.function))];
    funcs.forEach((f) => {
      grid[f] = Array.from({ length: 12 }, () => ({
        count: 0,
        changeSum: 0,
        readinessSum: 0,
        capabilitySum: 0,
      }));
    });
    filteredItems.forEach((item) => {
      if (item.impactDate && item.function) {
        const date = new Date(item.impactDate);
        if (!Number.isNaN(date.getTime())) {
          const monthIdx = date.getMonth();
          const cell = grid[item.function]?.[monthIdx];
          if (cell) {
            const { changeScore, readinessScore } = calculateScores(item);
            cell.count += 1;
            cell.changeSum += changeScore;
            cell.readinessSum += readinessScore;
            cell.capabilitySum += item.capability;
          }
        }
      }
    });
    return { months, grid };
  }, [filteredItems]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="font-medium text-sm text-slate-600">Filter:</span>
          <select
            value={filterFunction}
            onChange={(event) => setFilterFunction(event.target.value)}
            className="p-2 border border-slate-300 rounded text-sm min-w-[200px] outline-none"
          >
            {uniqueFunctions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium ${!weightedView ? 'text-blue-600' : 'text-slate-500'}`}
          >
            Simple Avg
          </span>
          <button
            type="button"
            onClick={() => setWeightedView(!weightedView)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${weightedView ? 'bg-blue-600' : 'bg-slate-200'}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${weightedView ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
          <span
            className={`text-sm font-medium ${weightedView ? 'text-blue-600' : 'text-slate-500'}`}
          >
            Weighted by Impact
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="rounded-lg border border-slate-200 bg-white p-4"
          style={{ borderLeftWidth: 4, borderLeftColor: '#3b82f6' }}
        >
          <h3 className="text-slate-500 text-sm font-medium">Total Processes</h3>
          <p className="text-2xl font-bold text-slate-800">{kpiMetrics.totalProcesses}</p>
          <p className="text-xs text-slate-400 mt-1">Filtered View</p>
        </div>
        <div
          className="rounded-lg border border-slate-200 bg-white p-4"
          style={{ borderLeftWidth: 4, borderLeftColor: '#f59e0b' }}
        >
          <h3 className="text-slate-500 text-sm font-medium">Total People Impacted</h3>
          <p className="text-2xl font-bold text-slate-800">{kpiMetrics.totalPeople}</p>
          <p className="text-xs text-slate-400 mt-1">across all processes</p>
        </div>
        <div
          className="rounded-lg border border-slate-200 bg-white p-4"
          style={{ borderLeftWidth: 4, borderLeftColor: '#22c55e' }}
        >
          <h3 className="text-slate-500 text-sm font-medium">Avg Readiness</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-slate-800">
              {kpiMetrics.avgReadiness.toFixed(0)}%
            </p>
            {weightedView ? (
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1 rounded">
                Weighted
              </span>
            ) : null}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {weightedView ? 'Based on people count' : 'Simple average of scores'}
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h3 className="text-lg font-bold text-slate-800">Change Heatmap</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Overlay:</span>
            <select
              value={heatmapOverlay}
              onChange={(event) => setHeatmapOverlay(event.target.value as typeof heatmapOverlay)}
              className="p-1 border border-slate-300 rounded text-sm outline-none"
            >
              <option value="count">Count of Changes</option>
              <option value="changeScore">Avg Change Impact</option>
              <option value="readinessScore">Avg Readiness</option>
              <option value="capability">Avg Capability (ADKAR)</option>
            </select>
          </div>
        </div>
        <p className="text-sm text-slate-500 mb-6">
          {heatmapOverlay === 'count' && 'Visualizing periods of high change activity (count).'}
          {heatmapOverlay === 'changeScore' &&
            'Visualizing average impact scores (Higher % = More Impact).'}
          {heatmapOverlay === 'readinessScore' &&
            'Visualizing average readiness scores (Higher % = More Ready).'}
          {heatmapOverlay === 'capability' &&
            'Visualizing team capability scores on a 1-5 scale (Higher = More Capable).'}
        </p>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex border-b border-slate-200 pb-2">
              <div className="w-40 font-semibold text-sm text-slate-600 shrink-0">Function</div>
              {heatmapData.months.map((m) => (
                <div key={m} className="flex-1 text-center text-xs font-medium text-slate-500">
                  {m}
                </div>
              ))}
            </div>
            {Object.keys(heatmapData.grid).map((func) => (
              <div
                key={func}
                className="flex items-center border-b border-slate-100 py-2 hover:bg-slate-50"
              >
                <div className="w-40 text-sm font-medium text-slate-800 shrink-0 truncate pr-2">
                  {func}
                </div>
                {heatmapData.grid[func].map((cell, idx) => {
                  const { count, changeSum, readinessSum, capabilitySum } = cell;
                  let valueToDisplay: string | number = '-';
                  let bgClass = 'bg-slate-50';
                  let textClass = 'text-slate-300';

                  if (count > 0) {
                    textClass = 'text-white';
                    if (heatmapOverlay === 'count') {
                      valueToDisplay = count;
                      if (count === 1) {
                        bgClass = 'bg-blue-200';
                      } else if (count === 2) {
                        bgClass = 'bg-blue-400';
                      } else if (count >= 3) {
                        bgClass = 'bg-blue-600';
                      }
                      if (count >= 5) {
                        bgClass = 'bg-indigo-800';
                      }
                    } else if (heatmapOverlay === 'changeScore') {
                      const avgChange = changeSum / count;
                      valueToDisplay = `${avgChange.toFixed(0)}%`;
                      if (avgChange >= 70) {
                        bgClass = 'bg-red-500';
                      } else if (avgChange >= 40) {
                        bgClass = 'bg-amber-400';
                      } else {
                        bgClass = 'bg-green-500';
                      }
                    } else if (heatmapOverlay === 'readinessScore') {
                      const avgReady = readinessSum / count;
                      valueToDisplay = `${avgReady.toFixed(0)}%`;
                      if (avgReady >= 70) {
                        bgClass = 'bg-green-500';
                      } else if (avgReady >= 40) {
                        bgClass = 'bg-amber-400';
                      } else {
                        bgClass = 'bg-red-500';
                      }
                    } else if (heatmapOverlay === 'capability') {
                      const avgCap = capabilitySum / count;
                      valueToDisplay = avgCap.toFixed(1);
                      if (avgCap >= 3) {
                        bgClass = 'bg-green-500';
                      } else if (avgCap >= 2) {
                        bgClass = 'bg-amber-400';
                      } else {
                        bgClass = 'bg-red-500';
                      }
                    }
                  }

                  return (
                    <div key={idx} className="flex-1 flex justify-center">
                      <div
                        title={`${func} in ${heatmapData.months[idx]}: ${count} changes`}
                        className={`w-10 h-8 rounded flex items-center justify-center text-xs font-bold ${bgClass} ${textClass}`}
                      >
                        {valueToDisplay}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
            {Object.keys(heatmapData.grid).length === 0 ? (
              <div className="p-8 text-center text-slate-400 italic">
                No data available for heatmap
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">Readiness by Function</h3>
            <button
              type="button"
              onClick={() => setReadinessSort((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
              className="text-xs text-slate-500 hover:text-blue-600 bg-slate-50 px-2 py-1 rounded border border-slate-200"
            >
              {readinessSort === 'asc' ? 'Lowest First' : 'Highest First'}
            </button>
          </div>
          {functionGroups.length === 0 ? (
            <p className="text-slate-400 italic">No data available</p>
          ) : (
            <div className="space-y-4">
              {functionGroups.map((grp) => (
                <div key={grp.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{grp.name}</span>
                    <span className="text-slate-500">{grp.avgReadiness.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${grp.avgReadiness < 50 ? 'bg-red-500' : grp.avgReadiness < 70 ? 'bg-amber-400' : 'bg-green-500'}`}
                      style={{ width: `${grp.avgReadiness}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-2">
            Change Risk Matrix (Bubble Chart)
          </h3>
          <p className="text-xs text-slate-500 mb-6">Size of bubble = # People Impacted</p>
          <div className="relative h-64 border-l border-b border-slate-300 bg-slate-50">
            <div className="absolute top-2 right-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 rounded">
              Monitor
            </div>
            <div className="absolute top-2 left-2 text-xs font-bold text-red-600 bg-red-50 px-2 rounded">
              Critical
            </div>
            <div className="absolute bottom-2 left-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 rounded">
              Support
            </div>
            <div className="absolute bottom-2 right-2 text-xs font-bold text-green-600 bg-green-50 px-2 rounded">
              Safe
            </div>
            {filteredItems.map((item) => {
              const { changeScore, readinessScore } = calculateScores(item);
              const people = item.peopleImpacted || 10;
              const size = Math.min(Math.max(people / 5, 12), 48);
              return (
                <div
                  key={item.id}
                  title={`${item.process}: ${item.peopleImpacted} people impacted`}
                  className="absolute rounded-full bg-blue-600/80 border border-blue-700 shadow-sm transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                  style={{
                    left: `${readinessScore}%`,
                    bottom: `${changeScore}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                />
              );
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>Low Readiness</span>
            <span>High Readiness</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideTab(): JSX.Element {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="rounded-lg border border-slate-200 bg-white p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Assessment Criteria Guide</h2>
        <p className="text-slate-600 mb-8">
          The following criteria are used to calculate the Change Impact Score and the Readiness
          Score. Use this guide to ensure consistency across all process assessments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-900 border-b-2 border-blue-200 pb-2 mb-4">
              Change Impact Score
            </h3>
            <p className="text-xs text-slate-500 mb-4 italic">
              Formula: (Complexity + Frequency + (2 x Distance)) / 16
            </p>
            <div className="space-y-6">
              {(['complexity', 'frequency', 'distance'] as const).map((field) => (
                <div key={field}>
                  <h4 className="font-semibold text-slate-800 mb-2 capitalize">{field}</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {[...SCORING_CRITERIA[field]].reverse().map((opt) => (
                      <li key={opt.value}>
                        <strong className="text-slate-900">{opt.value}:</strong>{' '}
                        {opt.label.replace(/^\d+ - /, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-900 border-b-2 border-green-200 pb-2 mb-4">
              Readiness Score
            </h3>
            <p className="text-xs text-slate-500 mb-4 italic">
              Formula: (Attitude + Conditions + Resources + Network + Capability) / 20
            </p>
            <div className="space-y-6">
              {(['attitude', 'conditions', 'resources', 'network', 'capability'] as const).map(
                (field) => (
                  <div key={field}>
                    <h4 className="font-semibold text-slate-800 mb-2 capitalize">{field}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {[...SCORING_CRITERIA[field]].reverse().map((opt) => (
                        <li key={opt.value}>
                          <strong className="text-slate-900">{opt.value}:</strong>{' '}
                          {opt.label.replace(/^\d+ - /, '')}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface ChangeImpactAssessmentAppProps {
  embedded?: boolean;
  onBack?: () => void;
  benefits?: BenefitItem[];
  onNavigateToBenefit?: (benefitId: string) => void;
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const nextChar = line[i + 1];
    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        current += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

export default function ChangeImpactAssessmentApp({
  embedded = false,
  benefits = [],
  onNavigateToBenefit,
}: ChangeImpactAssessmentAppProps = {}): JSX.Element {
  const [items, setItems] = useState<ChangeImpactAssessment[]>(
    () => load<ChangeImpactAssessment[]>(STORAGE_KEY) || []
  );
  const [activeTab, setActiveTab] = useState<'assessment' | 'dashboard' | 'guide'>('assessment');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<AssessmentFormState>(INITIAL_FORM_STATE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    save(STORAGE_KEY, items);
  }, [items]);

  const handleFormDataChange = (updates: Partial<AssessmentFormState>) => {
    setFormData((current) => ({ ...current, ...updates }));
  };

  const handleSaveItem = () => {
    if (!formData.function || !formData.process) {
      window.alert('Please enter at least a Business Function and Process Name.');
      return;
    }
    const newItem: ChangeImpactAssessment = {
      ...formData,
      id: formData.id || createId(),
      peopleImpacted: Number(formData.peopleImpacted) || 0,
      timestamp: new Date().toISOString(),
    };
    if (formData.id) {
      setItems((current) => current.map((i) => (i.id === formData.id ? newItem : i)));
    } else {
      setItems((current) => [...current, newItem]);
    }
    setFormData(INITIAL_FORM_STATE);
    setShowForm(false);
  };

  const handleEdit = (item: ChangeImpactAssessment) => {
    setFormData({ ...item });
    setShowForm(true);
    setActiveTab('assessment');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this assessment?')) {
      setItems((current) => current.filter((i) => i.id !== id));
    }
  };

  const handleExportCsv = () => {
    const headers = [
      'Function',
      'Process',
      'Process Ref',
      'Benefit Ref',
      'People Impacted',
      'Impact Date',
      'Change Score',
      'Readiness Score',
      'Complexity',
      'Frequency',
      'Distance',
      'Attitude',
      'Conditions',
      'Resources',
      'Network',
      'Capability',
    ];
    const rows = items.map((item) => {
      const { changeScore, readinessScore } = calculateScores(item);
      return [
        `"${item.function}"`,
        `"${item.process}"`,
        `"${item.processRef || ''}"`,
        `"${item.benefitsRef || ''}"`,
        item.peopleImpacted,
        item.impactDate,
        `${changeScore.toFixed(2)}%`,
        `${readinessScore.toFixed(2)}%`,
        item.complexity,
        item.frequency,
        item.distance,
        item.attitude,
        item.conditions,
        item.resources,
        item.network,
        item.capability,
      ].join(',');
    });
    downloadFile(
      'change_impact_assessment.csv',
      [headers.join(','), ...rows].join('\n'),
      'text/csv'
    );
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImportFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = String(e.target?.result || '');
        const lines = text
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean);
        if (lines.length < 2) {
          return;
        }

        const newItems: ChangeImpactAssessment[] = [];
        for (let i = 1; i < lines.length; i += 1) {
          const row = parseCsvLine(lines[i]);
          if (row.length >= 16) {
            newItems.push({
              id: createId(),
              function: row[0],
              process: row[1],
              processRef: row[2] || '',
              benefitsRef: row[3] || '',
              peopleImpacted: parseInt(row[4], 10) || 0,
              impactDate: row[5],
              complexity: (parseInt(row[8], 10) || 1) as ScoreValue,
              frequency: (parseInt(row[9], 10) || 1) as ScoreValue,
              distance: (parseInt(row[10], 10) || 1) as ScoreValue,
              attitude: (parseInt(row[11], 10) || 2) as ScoreValue,
              conditions: (parseInt(row[12], 10) || 2) as ScoreValue,
              resources: (parseInt(row[13], 10) || 2) as ScoreValue,
              network: (parseInt(row[14], 10) || 1) as ScoreValue,
              capability: (parseInt(row[15], 10) || 1) as ScoreValue,
              timestamp: new Date().toISOString(),
            });
          }
        }

        if (newItems.length > 0) {
          if (
            window.confirm(
              `Found ${newItems.length} valid records. Append them to your current list? (Cancel to Replace)`
            )
          ) {
            setItems((current) => [...current, ...newItems]);
          } else {
            setItems(newItems);
          }
          window.alert('Import successful!');
        } else {
          window.alert(
            'Could not parse any valid records. Please ensure CSV matches the export format.'
          );
        }
      } catch (err) {
        console.error('Import Error:', err);
        window.alert('Failed to import CSV. Please check the file format.');
      } finally {
        event.target.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handleLoadDemo = () => {
    if (
      window.confirm(
        'This will load sample data for testing. Add to existing data? (Cancel to Replace)'
      )
    ) {
      setItems((current) => [
        ...current,
        ...DEMO_DATA.map((item) => ({ ...item, timestamp: new Date().toISOString() })),
      ]);
    } else {
      setItems(DEMO_DATA.map((item) => ({ ...item, timestamp: new Date().toISOString() })));
    }
  };

  const header = (
    <header
      className={
        embedded
          ? 'flex flex-wrap items-center justify-between gap-3 pb-4'
          : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3'
      }
    >
      <div>
        <h1 className="text-lg font-bold text-slate-800">Change Impact Assessment Tool</h1>
        <p className="text-xs text-slate-500">
          Process impact vs business readiness scoring and analysis
        </p>
      </div>
    </header>
  );

  const body = (
    <div className={embedded ? '' : 'max-w-7xl mx-auto p-4 md:p-8'}>
      <div className="flex gap-4 mb-6 border-b border-slate-200 pb-1 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('assessment')}
          className={`pb-2 px-2 font-medium whitespace-nowrap ${activeTab === 'assessment' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
        >
          Assessments
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('dashboard')}
          className={`pb-2 px-2 font-medium whitespace-nowrap ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
        >
          Dashboard & Analysis
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('guide')}
          className={`pb-2 px-2 font-medium whitespace-nowrap ${activeTab === 'guide' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
        >
          Scoring Guide
        </button>
      </div>

      {activeTab === 'assessment' ? (
        <AssessmentsTab
          items={items}
          formData={formData}
          showForm={showForm}
          onShowFormChange={setShowForm}
          onFormDataChange={handleFormDataChange}
          onSave={handleSaveItem}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onImportClick={handleImportClick}
          onImportFile={handleImportFile}
          onExport={handleExportCsv}
          onLoadDemo={handleLoadDemo}
          fileInputRef={fileInputRef}
          benefits={benefits}
          onNavigateToBenefit={onNavigateToBenefit}
        />
      ) : null}
      {activeTab === 'dashboard' ? <DashboardTab items={items} /> : null}
      {activeTab === 'guide' ? <GuideTab /> : null}
    </div>
  );

  if (embedded) {
    return (
      <div>
        {header}
        {body}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {header}
      {body}
    </div>
  );
}
