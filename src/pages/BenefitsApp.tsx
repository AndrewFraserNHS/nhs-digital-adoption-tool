import { FilterBar } from '@components/common/FilterBar';
import { BinIcon, IconActionButton, PencilIcon } from '@components/common/IconButtons';
import { StakeholderPicker } from '@components/common/StakeholderPicker';
import type {
  BenefitItem,
  BenefitTrackerEntry,
  BenefitTrackerPeriod,
  Stakeholder,
} from '@lib/adoptionState';
import { bragBadgeClass, getBragStatus } from '@lib/brag';
import { Fragment, JSX, useEffect, useMemo, useState } from 'react';

type DisbenefitFlag = 'Yes' | 'No';

const BENEFIT_STATUS_OPTIONS = [
  'Identified',
  'Validating',
  'Planning',
  'Delivering',
  'Realised',
  'Partially Realised',
  'Not Realised',
];

const BENEFIT_TYPE_OPTIONS = [
  'Cashable Financial',
  'Non-Cashable Financial',
  'Efficiency / Productivity',
  'Quality & Safety',
  'Patient Experience',
  'Staff Experience / Workforce',
  'Operational Performance',
  'Compliance / Risk Reduction',
];

const SPECIALITY_OPTIONS = [
  'Trust-wide',
  'Emergency Medicine',
  'Surgery',
  'Medicine',
  'Diagnostics & Imaging',
  'Maternity',
  'Mental Health',
  'Community Services',
  'Outpatients',
  'Pharmacy',
  'Corporate / Back Office',
  'Other',
];

const BENEFICIARY_GROUP_OPTIONS = [
  'Patients',
  'Carers / Families',
  'Clinical Staff',
  'Nursing Staff',
  'Administrative Staff',
  'Management',
  'Trust (Organisation-wide)',
  'Wider Health System / ICS',
  'Commissioners',
  'Regulators',
];

const UNIT_OF_MEASURE_BY_TYPE: Record<string, string[]> = {
  'Cashable Financial': ['£ (GBP)', '£ per patient', '£ per episode', 'Cost per WTE'],
  'Non-Cashable Financial': [
    '£ (notional/GBP equivalent)',
    'Staff hours released',
    'WTE equivalent',
  ],
  'Efficiency / Productivity': [
    'Minutes/hours saved',
    'Number of process steps removed',
    'Throughput (activity per period)',
    'Length of stay (days)',
  ],
  'Quality & Safety': [
    'Incidents per 1,000 admissions',
    'Compliance rate (%)',
    'Number of harm events avoided',
  ],
  'Patient Experience': [
    'FFT score (%)',
    'Patient satisfaction score',
    'Complaints per 1,000 contacts',
  ],
  'Staff Experience / Workforce': [
    'Staff survey score (%)',
    'Turnover rate (%)',
    'Vacancy rate (%)',
    'Sickness/absence rate (%)',
  ],
  'Operational Performance': [
    'Waiting time (days/weeks)',
    'DNA rate (%)',
    'Utilisation rate (%)',
    'Activity volume',
  ],
  'Compliance / Risk Reduction': [
    'Audit compliance score (%)',
    'Number of risks mitigated',
    'CQC rating movement',
  ],
};

const TRACKER_YEARS = 4;
const QUARTERS: { key: string; label: string }[] = [
  { key: 'Q1', label: 'Apr-Jun' },
  { key: 'Q2', label: 'Jul-Sep' },
  { key: 'Q3', label: 'Oct-Dec' },
  { key: 'Q4', label: 'Jan-Mar' },
];

const STATUS_BADGE_CLASS: Record<string, string> = {
  Identified: 'bg-slate-100 text-slate-700 border-slate-300',
  Validating: 'bg-purple-100 text-purple-800 border-purple-300',
  Planning: 'bg-blue-100 text-blue-800 border-blue-300',
  Delivering: 'bg-amber-100 text-amber-800 border-amber-300',
  Realised: 'bg-green-100 text-green-800 border-green-300',
  'Partially Realised': 'bg-amber-100 text-amber-800 border-amber-300',
  'Not Realised': 'bg-red-100 text-red-800 border-red-300',
};

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function nextBenefitNo(benefits: BenefitItem[]): string {
  const max = benefits.reduce((highest, item) => {
    const match = /^BEN-(\d+)$/.exec(item.benefitNo);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, 0);
  return `BEN-${String(max + 1).padStart(3, '0')}`;
}

function generatePeriods(): BenefitTrackerPeriod[] {
  const periods: BenefitTrackerPeriod[] = [];
  for (let year = 0; year < TRACKER_YEARS; year += 1) {
    QUARTERS.forEach((quarter) => {
      periods.push({ year, quarterKey: quarter.key, forecast: '', actual: '' });
    });
  }
  return periods;
}

function emptyTrackerEntry(benefitId: string): BenefitTrackerEntry {
  return { benefitId, varianceReason: '', periods: generatePeriods() };
}

const QUARTER_ORDER = QUARTERS.map((quarter) => quarter.key);
const VARIANCE_THRESHOLDS = { blue: 10, green: -5, amber: -20 };

/** The periods that have at least a forecast or actual value entered, in chronological order. */
function chronologicalFilledPeriods(entry: BenefitTrackerEntry): BenefitTrackerPeriod[] {
  return [...entry.periods]
    .filter((period) => period.forecast !== '' || period.actual !== '')
    .sort(
      (a, b) => a.year - b.year || QUARTER_ORDER.indexOf(a.quarterKey) - QUARTER_ORDER.indexOf(b.quarterKey)
    );
}

function quarterLabel(quarterKey: string): string {
  return QUARTERS.find((quarter) => quarter.key === quarterKey)?.label || quarterKey;
}

function computeVariance(
  forecast: string,
  actual: string
): { status: ReturnType<typeof getBragStatus>; percentDelta: number } | null {
  const f = Number(forecast);
  const a = Number(actual);
  if (!forecast || !actual || Number.isNaN(f) || Number.isNaN(a) || f === 0) {
    return null;
  }
  const percentDelta = ((a - f) / Math.abs(f)) * 100;
  return { status: getBragStatus(percentDelta, VARIANCE_THRESHOLDS), percentDelta };
}

/** Average of that year's per-quarter % variances (quarters missing forecast or actual are skipped). */
function yearAverageVariance(
  entry: BenefitTrackerEntry,
  year: number
): { status: ReturnType<typeof getBragStatus>; percentDelta: number } | null {
  const variances = entry.periods
    .filter((period) => period.year === year)
    .map((period) => computeVariance(period.forecast, period.actual))
    .filter((v): v is { status: ReturnType<typeof getBragStatus>; percentDelta: number } => v !== null);
  if (variances.length === 0) {
    return null;
  }
  const percentDelta = variances.reduce((sum, v) => sum + v.percentDelta, 0) / variances.length;
  return { status: getBragStatus(percentDelta, VARIANCE_THRESHOLDS), percentDelta };
}

type TrendDisplayItem =
  | { kind: 'period'; period: BenefitTrackerPeriod }
  | { kind: 'yearAverage'; year: number; variance: { status: ReturnType<typeof getBragStatus>; percentDelta: number } };

/**
 * Builds the row of trend chips shown on the collapsed tracker row:
 * - every quarter fully filled in -> one average-variance chip per year.
 * - otherwise, once more than 8 (2 years) or 12 (3 years) quarters are filled, the oldest
 *   complete year(s) collapse into an average-variance chip so the row stays scannable, while
 *   every filled quarter in the remaining year(s) is still shown individually.
 * - below that, simply the latest 6 filled quarters.
 */
function buildTrendDisplay(entry: BenefitTrackerEntry): TrendDisplayItem[] {
  const allFilled = entry.periods.every((period) => period.forecast !== '' && period.actual !== '');
  if (allFilled) {
    return Array.from({ length: TRACKER_YEARS }, (_, year) => year)
      .map((year) => {
        const variance = yearAverageVariance(entry, year);
        return variance ? ({ kind: 'yearAverage', year, variance } as TrendDisplayItem) : null;
      })
      .filter((item): item is TrendDisplayItem => item !== null);
  }

  const filled = chronologicalFilledPeriods(entry);
  const collapseYears = filled.length > 12 ? 2 : filled.length > 8 ? 1 : 0;

  if (collapseYears === 0) {
    return filled.slice(-6).map((period) => ({ kind: 'period', period }));
  }

  const items: TrendDisplayItem[] = [];
  for (let year = 0; year < collapseYears; year += 1) {
    const variance = yearAverageVariance(entry, year);
    if (variance) {
      items.push({ kind: 'yearAverage', year, variance });
    }
  }
  filled
    .filter((period) => period.year >= collapseYears)
    .forEach((period) => items.push({ kind: 'period', period }));
  return items;
}

function VarianceValue({
  variance,
}: {
  variance: { status: ReturnType<typeof getBragStatus>; percentDelta: number };
}): JSX.Element {
  return (
    <span className={`mt-0.5 rounded-full border px-1.5 font-bold ${bragBadgeClass(variance.status)}`}>
      {variance.percentDelta > 0 ? '+' : ''}
      {variance.percentDelta.toFixed(0)}%
    </span>
  );
}

function TrendChip({ item }: { item: TrendDisplayItem }): JSX.Element {
  if (item.kind === 'yearAverage') {
    return (
      <span className="inline-flex flex-col items-center rounded border border-slate-200 bg-white px-1.5 py-1 text-[10px] leading-tight whitespace-nowrap">
        <span className="font-medium text-slate-500">Y{item.year} Avg</span>
        <VarianceValue variance={item.variance} />
      </span>
    );
  }
  const { period } = item;
  const variance = computeVariance(period.forecast, period.actual);
  return (
    <span className="inline-flex flex-col items-center rounded border border-slate-200 bg-white px-1.5 py-1 text-[10px] leading-tight whitespace-nowrap">
      <span className="font-medium text-slate-500">
        Y{period.year} {quarterLabel(period.quarterKey)}
      </span>
      {variance ? (
        <VarianceValue variance={variance} />
      ) : (
        <span className="mt-0.5 text-slate-400">
          {period.forecast ? `F ${period.forecast}` : period.actual ? `A ${period.actual}` : '—'}
        </span>
      )}
    </span>
  );
}

const EMPTY_BENEFIT: Omit<BenefitItem, 'id' | 'benefitNo'> = {
  dateCreated: new Date().toISOString().slice(0, 10),
  dateReviewed: new Date().toISOString().slice(0, 10),
  title: '',
  details: '',
  status: BENEFIT_STATUS_OPTIONS[0],
  disbenefit: 'No',
  benefitType: BENEFIT_TYPE_OPTIONS[0],
  speciality: SPECIALITY_OPTIONS[0],
  beneficiaryGroups: [],
  strategicOwnerId: '',
  operationalOwnerId: '',
  trustObjectives: '',
  changeEnablers: '',
  measurementsUsed: '',
  unitOfMeasure: '',
  baselineValue: '',
  calculations: '',
  assumptions: '',
};

type BenefitFormState = Omit<BenefitItem, 'id'> & { id: string | null };

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }): JSX.Element {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700 mb-1">
      {children}
    </label>
  );
}

function DetailField({ label, value }: { label: string; value: string }): JSX.Element {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-0.5 text-sm text-slate-700 whitespace-pre-wrap">{value || '—'}</p>
    </div>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }): JSX.Element {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export interface BenefitsAppProps {
  embedded?: boolean;
  onBack?: () => void;
  trustName?: string;
  projectName?: string;
  benefits?: BenefitItem[];
  onBenefitsChange?: (benefits: BenefitItem[]) => void;
  tracker?: Record<string, BenefitTrackerEntry>;
  onTrackerChange?: (tracker: Record<string, BenefitTrackerEntry>) => void;
  /** Deep-link into a specific benefit's edit form (e.g. navigated here from Change Impact Assessment). */
  focusBenefitId?: string | null;
  onFocusHandled?: () => void;
  /** Shared project stakeholders - Strategic/Operational owners are picked from (or added to) this list. */
  stakeholders?: Stakeholder[];
  onStakeholdersChange?: (stakeholders: Stakeholder[]) => void;
  /** Department dropdown options for newly-added stakeholders (from Project Details). */
  departments?: string[];
}

export default function BenefitsApp({
  embedded = false,
  trustName = '',
  projectName = '',
  benefits = [],
  onBenefitsChange,
  tracker = {},
  onTrackerChange,
  focusBenefitId,
  onFocusHandled,
  stakeholders = [],
  onStakeholdersChange,
  departments = [],
}: BenefitsAppProps = {}): JSX.Element {
  const [activeTab, setActiveTab] = useState<'register' | 'tracker'>('register');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<BenefitFormState>({
    id: null,
    benefitNo: '',
    ...EMPTY_BENEFIT,
  });
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [specialityFilter, setSpecialityFilter] = useState('');
  const [expandedRegisterIds, setExpandedRegisterIds] = useState<Set<string>>(new Set());
  const [expandedTrackerIds, setExpandedTrackerIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!focusBenefitId) {
      return;
    }
    const target = benefits.find((item) => item.id === focusBenefitId);
    if (target) {
      setActiveTab('register');
      setFormData({ ...target });
      setShowForm(true);
      setExpandedRegisterIds((current) => new Set(current).add(target.id));
    }
    onFocusHandled?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusBenefitId]);

  const stakeholderById = useMemo(
    () => Object.fromEntries(stakeholders.map((s) => [s.id, s])),
    [stakeholders]
  );
  const ownerLabel = (stakeholderId: string) => {
    const stakeholder = stakeholderById[stakeholderId];
    if (!stakeholder) {
      return '—';
    }
    return stakeholder.role ? `${stakeholder.name} (${stakeholder.role})` : stakeholder.name;
  };
  const addStakeholder = (stakeholder: Stakeholder) => {
    onStakeholdersChange?.([...stakeholders, stakeholder]);
  };

  const updateFormData = (updates: Partial<BenefitFormState>) =>
    setFormData((current) => ({ ...current, ...updates }));

  const filteredBenefits = useMemo(() => {
    let result = [...benefits];
    if (statusFilter) {
      result = result.filter((item) => item.status === statusFilter);
    }
    if (typeFilter) {
      result = result.filter((item) => item.benefitType === typeFilter);
    }
    if (specialityFilter) {
      result = result.filter((item) => item.speciality === specialityFilter);
    }
    return result;
  }, [benefits, statusFilter, typeFilter, specialityFilter]);

  const openNewForm = () => {
    setFormData({ id: null, benefitNo: nextBenefitNo(benefits), ...EMPTY_BENEFIT });
    setShowForm(true);
  };

  const handleEdit = (item: BenefitItem) => {
    setFormData({ ...item });
    setShowForm(true);
  };

  const toggleRegisterExpand = (id: string) => {
    setExpandedRegisterIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleTrackerExpand = (id: string) => {
    setExpandedTrackerIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDelete = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this benefit?')) {
      return;
    }
    onBenefitsChange?.(benefits.filter((item) => item.id !== id));
    const { [id]: _removed, ...restTracker } = tracker;
    onTrackerChange?.(restTracker);
  };

  const handleSave = () => {
    if (!formData.title.trim()) {
      window.alert('Please enter a benefit title.');
      return;
    }
    if (!formData.dateCreated || !formData.dateReviewed) {
      window.alert('Created and Reviewed dates must not be blank.');
      return;
    }
    const id = formData.id || createId();
    const newItem: BenefitItem = { ...formData, id };
    onBenefitsChange?.(
      formData.id
        ? benefits.map((item) => (item.id === id ? newItem : item))
        : [...benefits, newItem]
    );
    if (!tracker[id]) {
      onTrackerChange?.({ ...tracker, [id]: emptyTrackerEntry(id) });
    }
    setShowForm(false);
    setFormData({ id: null, benefitNo: '', ...EMPTY_BENEFIT });
  };

  const toggleBeneficiaryGroup = (group: string) => {
    updateFormData({
      beneficiaryGroups: formData.beneficiaryGroups.includes(group)
        ? formData.beneficiaryGroups.filter((g) => g !== group)
        : [...formData.beneficiaryGroups, group],
    });
  };

  const updateTrackerEntry = (benefitId: string, updates: Partial<BenefitTrackerEntry>) => {
    const entry = tracker[benefitId] || emptyTrackerEntry(benefitId);
    onTrackerChange?.({ ...tracker, [benefitId]: { ...entry, ...updates } });
  };

  const updateTrackerPeriod = (
    benefitId: string,
    year: number,
    quarterKey: string,
    field: 'forecast' | 'actual',
    value: string
  ) => {
    const entry = tracker[benefitId] || emptyTrackerEntry(benefitId);
    updateTrackerEntry(benefitId, {
      periods: entry.periods.map((period) =>
        period.year === year && period.quarterKey === quarterKey
          ? { ...period, [field]: value }
          : period
      ),
    });
  };

  const varianceStatus = (forecast: string, actual: string) => computeVariance(forecast, actual)?.status ?? null;

  return (
    <div>
      <header
        className={
          embedded
            ? 'flex flex-wrap items-center justify-between gap-3 pb-4'
            : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex flex-wrap items-center justify-between gap-3'
        }
      >
        <div>
          <h1 className="text-lg font-bold text-slate-800">Benefits Register &amp; Tracker</h1>
          <p className="text-xs text-slate-500">
            Capture, quantify and track realisation of programme benefits
            {trustName || projectName
              ? ` — ${trustName || 'Your Organisation'} / ${projectName || 'Your Project/Programme'}`
              : ''}
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <div className="flex gap-2 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab('register')}
            className={`px-4 py-2 text-sm font-semibold border-b-2 ${
              activeTab === 'register'
                ? 'border-[#005eb8] text-[#005eb8]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Benefits Register
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tracker')}
            className={`px-4 py-2 text-sm font-semibold border-b-2 ${
              activeTab === 'tracker'
                ? 'border-[#005eb8] text-[#005eb8]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Benefits Tracker
          </button>
        </div>

        {activeTab === 'register' ? (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-semibold text-slate-800">Benefits</h2>
              <button
                type="button"
                onClick={() => (showForm ? setShowForm(false) : openNewForm())}
                className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                {showForm ? 'Cancel' : '+ New Benefit'}
              </button>
            </div>

            {showForm ? (
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
                <h3 className="text-lg font-medium text-blue-900 mb-4">
                  {formData.id ? 'Edit Benefit' : 'New Benefit'}
                </h3>
                <div className="grid grid-cols-1 gap-4 max-w-2xl">
                  <div>
                    <FieldLabel htmlFor="benefit-no">Benefit No.</FieldLabel>
                    <input
                      id="benefit-no"
                      type="text"
                      value={formData.benefitNo}
                      onChange={(e) => updateFormData({ benefitNo: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <FieldLabel htmlFor="benefit-created">Created *</FieldLabel>
                      <input
                        id="benefit-created"
                        type="date"
                        value={formData.dateCreated}
                        onChange={(e) => updateFormData({ dateCreated: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded outline-none"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="benefit-reviewed">Reviewed *</FieldLabel>
                      <input
                        id="benefit-reviewed"
                        type="date"
                        value={formData.dateReviewed}
                        onChange={(e) => updateFormData({ dateReviewed: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-title">Benefit Title/Name</FieldLabel>
                    <input
                      id="benefit-title"
                      type="text"
                      value={formData.title}
                      onChange={(e) => updateFormData({ title: e.target.value })}
                      placeholder="Elevator pitch, including enabler"
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-details">Benefit Details</FieldLabel>
                    <textarea
                      id="benefit-details"
                      value={formData.details}
                      onChange={(e) => updateFormData({ details: e.target.value })}
                      placeholder="Describe current and future state"
                      className="w-full p-2 border border-slate-300 rounded outline-none h-20"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-status">Outcome Details Benefit Status</FieldLabel>
                    <select
                      id="benefit-status"
                      value={formData.status}
                      onChange={(e) => updateFormData({ status: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      {BENEFIT_STATUS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-disbenefit">Disbenefit?</FieldLabel>
                    <select
                      id="benefit-disbenefit"
                      value={formData.disbenefit}
                      onChange={(e) =>
                        updateFormData({ disbenefit: e.target.value as DisbenefitFlag })
                      }
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-type">Benefit Type</FieldLabel>
                    <select
                      id="benefit-type"
                      value={formData.benefitType}
                      onChange={(e) =>
                        updateFormData({ benefitType: e.target.value, unitOfMeasure: '' })
                      }
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      {BENEFIT_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-speciality">Speciality</FieldLabel>
                    <select
                      id="benefit-speciality"
                      value={formData.speciality}
                      onChange={(e) => updateFormData({ speciality: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      {SPECIALITY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-slate-700 mb-1">
                      Beneficiary Groups
                    </span>
                    <div className="grid grid-cols-2 gap-1 rounded border border-slate-300 bg-white p-3">
                      {BENEFICIARY_GROUP_OPTIONS.map((group) => {
                        const inputId = `benefit-group-${group.replace(/[^a-zA-Z0-9]/g, '-')}`;
                        return (
                          <label
                            key={group}
                            htmlFor={inputId}
                            className="flex items-center gap-2 text-sm text-slate-700"
                          >
                            <input
                              id={inputId}
                              type="checkbox"
                              checked={formData.beneficiaryGroups.includes(group)}
                              onChange={() => toggleBeneficiaryGroup(group)}
                            />
                            {group}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <StakeholderPicker
                    id="benefit-strategic-owner"
                    label="Strategic Owner"
                    stakeholders={stakeholders}
                    departments={departments}
                    value={formData.strategicOwnerId}
                    onChange={(strategicOwnerId) => updateFormData({ strategicOwnerId })}
                    onAddStakeholder={addStakeholder}
                  />
                  <StakeholderPicker
                    id="benefit-operational-owner"
                    label="Operational Owner"
                    stakeholders={stakeholders}
                    departments={departments}
                    value={formData.operationalOwnerId}
                    onChange={(operationalOwnerId) => updateFormData({ operationalOwnerId })}
                    onAddStakeholder={addStakeholder}
                  />
                  <div>
                    <FieldLabel htmlFor="benefit-objectives">Trust Objective(s)</FieldLabel>
                    <textarea
                      id="benefit-objectives"
                      value={formData.trustObjectives}
                      onChange={(e) => updateFormData({ trustObjectives: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded outline-none h-16"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-enablers">Change Enablers</FieldLabel>
                    <textarea
                      id="benefit-enablers"
                      value={formData.changeEnablers}
                      onChange={(e) => updateFormData({ changeEnablers: e.target.value })}
                      placeholder="Precursor to delivery of benefit"
                      className="w-full p-2 border border-slate-300 rounded outline-none h-16"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-measurements">Benefit measurement(s) used</FieldLabel>
                    <textarea
                      id="benefit-measurements"
                      value={formData.measurementsUsed}
                      onChange={(e) => updateFormData({ measurementsUsed: e.target.value })}
                      placeholder="Make specific to process/location/team"
                      className="w-full p-2 border border-slate-300 rounded outline-none h-16"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-unit">Unit of Measure</FieldLabel>
                    <select
                      id="benefit-unit"
                      value={formData.unitOfMeasure}
                      onChange={(e) => updateFormData({ unitOfMeasure: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      <option value="">Please choose</option>
                      {(UNIT_OF_MEASURE_BY_TYPE[formData.benefitType] || []).map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-baseline">Baseline Value</FieldLabel>
                    <input
                      id="benefit-baseline"
                      type="text"
                      value={formData.baselineValue}
                      onChange={(e) => updateFormData({ baselineValue: e.target.value })}
                      placeholder="Align with unit of measure/benefit type"
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-calculations">
                      Benefit/Outcome Calculations
                    </FieldLabel>
                    <textarea
                      id="benefit-calculations"
                      value={formData.calculations}
                      onChange={(e) => updateFormData({ calculations: e.target.value })}
                      placeholder="Breakdown of calculation and sources, activity year/time period, confidence & attribution %'s, ramp up rationale"
                      className="w-full p-2 border border-slate-300 rounded outline-none h-24"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="benefit-assumptions">Assumptions</FieldLabel>
                    <textarea
                      id="benefit-assumptions"
                      value={formData.assumptions}
                      onChange={(e) => updateFormData({ assumptions: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded outline-none h-16"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Save Benefit
                  </button>
                </div>
              </div>
            ) : null}

            <FilterBar
              selects={[
                {
                  key: 'status',
                  label: 'Filter by status',
                  value: statusFilter,
                  options: BENEFIT_STATUS_OPTIONS,
                  onChange: setStatusFilter,
                },
                {
                  key: 'type',
                  label: 'Filter by type',
                  value: typeFilter,
                  options: BENEFIT_TYPE_OPTIONS,
                  onChange: setTypeFilter,
                },
                {
                  key: 'speciality',
                  label: 'Filter by speciality',
                  value: specialityFilter,
                  options: SPECIALITY_OPTIONS,
                  onChange: setSpecialityFilter,
                },
              ]}
              onReset={() => {
                setStatusFilter('');
                setTypeFilter('');
                setSpecialityFilter('');
              }}
            />

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                  <tr>
                    <th className="px-2 py-3 w-8" aria-hidden="true" />
                    <th className="px-4 py-3">Benefit No.</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Speciality</th>
                    <th className="px-4 py-3">Owner (Strategic / Operational)</th>
                    <th className="px-4 py-3">Unit of Measure</th>
                    <th className="px-4 py-3">Baseline</th>
                    <th className="px-4 py-3">Created</th>
                    <th className="px-4 py-3">Reviewed</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredBenefits.length === 0 ? (
                    <tr>
                      <td colSpan={11} className="px-4 py-8 text-center text-slate-500 italic">
                        {benefits.length === 0
                          ? 'No benefits added yet. Click "New Benefit" to begin.'
                          : 'No matching records found.'}
                      </td>
                    </tr>
                  ) : (
                    filteredBenefits.map((item) => {
                      const expanded = expandedRegisterIds.has(item.id);
                      return (
                        <Fragment key={item.id}>
                          <tr className="hover:bg-slate-50">
                            <td className="px-2 py-3">
                              <button
                                type="button"
                                onClick={() => toggleRegisterExpand(item.id)}
                                title={expanded ? 'Collapse details' : 'Expand details'}
                                aria-label={expanded ? 'Collapse details' : 'Expand details'}
                                className="inline-flex h-6 w-6 items-center justify-center rounded text-slate-500 hover:bg-slate-200"
                              >
                                <ChevronIcon expanded={expanded} />
                              </button>
                            </td>
                            <td className="px-4 py-3 font-medium text-slate-800">
                              {item.benefitNo}
                            </td>
                            <td className="px-4 py-3 text-slate-600">{item.title}</td>
                            <td className="px-4 py-3 text-slate-600">{item.benefitType}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${
                                  STATUS_BADGE_CLASS[item.status] ||
                                  'bg-slate-100 text-slate-700 border-slate-300'
                                }`}
                              >
                                {item.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-600">{item.speciality}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">
                              {ownerLabel(item.strategicOwnerId)} / {ownerLabel(item.operationalOwnerId)}
                            </td>
                            <td className="px-4 py-3 text-slate-600">{item.unitOfMeasure || '—'}</td>
                            <td className="px-4 py-3 text-slate-600">{item.baselineValue || '—'}</td>
                            <td className="px-4 py-3 text-slate-600">{item.dateCreated}</td>
                            <td className="px-4 py-3 text-slate-600">{item.dateReviewed}</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <IconActionButton
                                  onClick={() => handleEdit(item)}
                                  title="Edit benefit"
                                >
                                  <PencilIcon />
                                </IconActionButton>
                                <IconActionButton
                                  onClick={() => handleDelete(item.id)}
                                  title="Delete benefit"
                                  variant="danger"
                                >
                                  <BinIcon />
                                </IconActionButton>
                              </div>
                            </td>
                          </tr>
                          {expanded ? (
                            <tr className="bg-slate-50">
                              <td />
                              <td colSpan={10} className="px-4 py-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <DetailField label="Disbenefit?" value={item.disbenefit} />
                                  <DetailField
                                    label="Beneficiary Groups"
                                    value={item.beneficiaryGroups.join(', ')}
                                  />
                                  <DetailField label="Trust Objective(s)" value={item.trustObjectives} />
                                  <div className="md:col-span-3">
                                    <DetailField label="Benefit Details" value={item.details} />
                                  </div>
                                  <div className="md:col-span-3">
                                    <DetailField label="Change Enablers" value={item.changeEnablers} />
                                  </div>
                                  <div className="md:col-span-3">
                                    <DetailField
                                      label="Benefit measurement(s) used"
                                      value={item.measurementsUsed}
                                    />
                                  </div>
                                  <div className="md:col-span-3">
                                    <DetailField
                                      label="Benefit/Outcome Calculations"
                                      value={item.calculations}
                                    />
                                  </div>
                                  <div className="md:col-span-3">
                                    <DetailField label="Assumptions" value={item.assumptions} />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : null}
                        </Fragment>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-800">Benefits Tracker</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                  <tr>
                    <th className="px-2 py-3 w-8" aria-hidden="true" />
                    <th className="px-4 py-3">Benefit No.</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Baseline Value</th>
                    <th className="px-4 py-3">Variance Trend</th>
                    <th className="px-4 py-3">Variance Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {benefits.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-500 italic">
                        Add a benefit in the Register tab to begin tracking it.
                      </td>
                    </tr>
                  ) : (
                    benefits.map((item) => {
                      const entry = tracker[item.id] || emptyTrackerEntry(item.id);
                      const expanded = expandedTrackerIds.has(item.id);
                      return (
                        <Fragment key={item.id}>
                          <tr className="hover:bg-slate-50">
                            <td className="px-2 py-3">
                              <button
                                type="button"
                                onClick={() => toggleTrackerExpand(item.id)}
                                title={expanded ? 'Collapse periods' : 'Expand periods'}
                                aria-label={expanded ? 'Collapse periods' : 'Expand periods'}
                                className="inline-flex h-6 w-6 items-center justify-center rounded text-slate-500 hover:bg-slate-200"
                              >
                                <ChevronIcon expanded={expanded} />
                              </button>
                            </td>
                            <td className="px-4 py-3 font-medium text-slate-800">
                              {item.benefitNo}
                            </td>
                            <td className="px-4 py-3 text-slate-600">{item.title}</td>
                            <td className="px-4 py-3 text-slate-600">{item.baselineValue || '—'}</td>
                            <td className="px-4 py-3">
                              {(() => {
                                const trend = buildTrendDisplay(entry);
                                if (trend.length === 0) {
                                  return <span className="text-slate-400 text-xs">No data yet</span>;
                                }
                                return (
                                  <div className="flex flex-wrap gap-1">
                                    {trend.map((trendItem) => (
                                      <TrendChip
                                        key={
                                          trendItem.kind === 'yearAverage'
                                            ? `avg-${trendItem.year}`
                                            : `${trendItem.period.year}-${trendItem.period.quarterKey}`
                                        }
                                        item={trendItem}
                                      />
                                    ))}
                                  </div>
                                );
                              })()}
                            </td>
                            <td className="px-4 py-3 text-slate-500 text-xs truncate max-w-xs">
                              {entry.varianceReason || '—'}
                            </td>
                          </tr>
                          {expanded ? (
                            <tr className="bg-slate-50">
                              <td />
                              <td colSpan={5} className="px-4 py-4 space-y-4">
                                <div>
                                  <FieldLabel htmlFor={`tracker-variance-${item.id}`}>
                                    Reason for variance between forecast and actual
                                  </FieldLabel>
                                  <textarea
                                    id={`tracker-variance-${item.id}`}
                                    value={entry.varianceReason}
                                    onChange={(e) =>
                                      updateTrackerEntry(item.id, { varianceReason: e.target.value })
                                    }
                                    className="w-full p-2 border border-slate-300 rounded outline-none h-16"
                                  />
                                </div>
                                <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                                  <table className="min-w-full text-sm text-left border-collapse">
                                    <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                                      <tr>
                                        <th className="px-3 py-2">Year</th>
                                        <th className="px-3 py-2">Period</th>
                                        <th className="px-3 py-2">Forecast</th>
                                        <th className="px-3 py-2">Actual</th>
                                        <th className="px-3 py-2 text-center">Variance</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                      {Array.from({ length: TRACKER_YEARS }).map((_, year) =>
                                        QUARTERS.map((quarter, quarterIndex) => {
                                          const period = entry.periods.find(
                                            (p) => p.year === year && p.quarterKey === quarter.key
                                          ) || { year, quarterKey: quarter.key, forecast: '', actual: '' };
                                          const status = varianceStatus(period.forecast, period.actual);
                                          return (
                                            <tr key={`${item.id}-${year}-${quarter.key}`}>
                                              {quarterIndex === 0 ? (
                                                <td
                                                  className="px-3 py-2 font-medium text-slate-700 align-top"
                                                  rowSpan={QUARTERS.length}
                                                >
                                                  Y{year}
                                                </td>
                                              ) : null}
                                              <td className="px-3 py-2 text-slate-600">{quarter.label}</td>
                                              <td className="px-3 py-2">
                                                <label
                                                  htmlFor={`forecast-${item.id}-${year}-${quarter.key}`}
                                                  className="sr-only"
                                                >
                                                  Forecast for Y{year} {quarter.label}
                                                </label>
                                                <input
                                                  id={`forecast-${item.id}-${year}-${quarter.key}`}
                                                  type="number"
                                                  value={period.forecast}
                                                  onChange={(e) =>
                                                    updateTrackerPeriod(
                                                      item.id,
                                                      year,
                                                      quarter.key,
                                                      'forecast',
                                                      e.target.value
                                                    )
                                                  }
                                                  className="w-28 p-1.5 border border-slate-300 rounded outline-none"
                                                />
                                              </td>
                                              <td className="px-3 py-2">
                                                <label
                                                  htmlFor={`actual-${item.id}-${year}-${quarter.key}`}
                                                  className="sr-only"
                                                >
                                                  Actual for Y{year} {quarter.label}
                                                </label>
                                                <input
                                                  id={`actual-${item.id}-${year}-${quarter.key}`}
                                                  type="number"
                                                  value={period.actual}
                                                  onChange={(e) =>
                                                    updateTrackerPeriod(
                                                      item.id,
                                                      year,
                                                      quarter.key,
                                                      'actual',
                                                      e.target.value
                                                    )
                                                  }
                                                  className="w-28 p-1.5 border border-slate-300 rounded outline-none"
                                                />
                                              </td>
                                              <td className="px-3 py-2 text-center">
                                                {status ? (
                                                  <span
                                                    className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${bragBadgeClass(status)}`}
                                                  >
                                                    {status.toUpperCase()}
                                                  </span>
                                                ) : (
                                                  <span className="text-slate-300">—</span>
                                                )}
                                              </td>
                                            </tr>
                                          );
                                        })
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          ) : null}
                        </Fragment>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
