import { ActionEditorFields } from '@components/common/ActionEditorFields';
import {
  BinIcon,
  DuplicateIcon,
  IconActionButton,
  LockIcon,
  PencilIcon,
  PlusCircleIcon,
} from '@components/common/IconButtons';
import { FilterBar } from '@components/common/FilterBar';
import type { AssessmentComponent } from '@data/components';
import { createDoughnutChart } from '@lib/charts';
import {
  DEFAULT_STAKEHOLDER_REFERENCE_LISTS,
  type ComponentObjective,
  type DraftAction,
  type DraftEntry,
  type StakeholderReferenceLists,
  type TeamMember,
} from '@lib/adoptionState';
import { load, save } from '@lib/storage';
import { downloadFile } from '@lib/utils';
import { type ChangeEvent, JSX, useEffect, useMemo, useRef, useState } from 'react';

type Rating = 'Low' | 'Medium' | 'High' | 'Very High' | '';
type Commitment =
  'Resistant' | 'Opposed' | 'Ambivalent' | 'Complying' | 'Supporting' | 'Leading' | '';
type Capability = 'Unaware' | 'Aware' | 'Informed' | 'Equipped' | 'Practised' | 'Exemplary' | '';
type EngagementStatus = 'Planned' | 'In Progress' | 'Completed';
type ActivityRating = 'Low' | 'Medium' | 'High' | '';
type MapAxisKey = 'power' | 'influence' | 'interest' | 'impact';

interface Stakeholder {
  id: string;
  name: string;
  groupSize: string;
  group: string;
  subGroup: string;
  location: string;
  relationship: string;
  interest: Rating;
  impact: Rating;
  power: Rating;
  influence: Rating;
  currentCommitment: Commitment;
  targetCommitment: Commitment;
  capabilityCurrent: Capability;
  capabilityTarget: Capability;
  targetDate: string;
}

interface EngagementLog {
  id: string;
  stakeholderId: string;
  engagementActivity: string;
  activity: string;
  owner: string;
  dueDate: string;
  status: EngagementStatus;
  notes: string;
}

interface Activity {
  id: string;
  name: string;
  inform: ActivityRating;
  consult: ActivityRating;
  involve: ActivityRating;
  collaborate: ActivityRating;
  empower: ActivityRating;
}

interface ReferenceData {
  groups: string[];
  subGroups: string[];
  locations: string[];
  relationships: string[];
  commitments: string[];
  capabilities: string[];
  ratings: string[];
  engagementActivities: Activity[];
}

interface SortConfig {
  key: string;
  direction: 'ascending' | 'descending';
}

interface StakeholderAnalysisState {
  stakeholders: Stakeholder[];
  engagementLog: EngagementLog[];
  referenceData: ReferenceData;
  sortConfig: SortConfig;
  filterConfig: Record<string, string>;
  engagementSortConfig: SortConfig;
  engagementFilterConfig: Record<string, string>;
  mapFilterConfig: { group: string; subGroup: string; location: string; relationship: string };
  mapAxisConfig: { x: MapAxisKey; y: MapAxisKey };
  activitySortConfig: SortConfig;
  dashboardChartConfig: { chart1: string; chart2: string; chart3: string; chart4: string };
  guidanceRead: boolean;
}

const STORAGE_KEY = 'nhs-stakeholder-analysis';

const RATINGS_MAP: Record<string, number> = { Low: 1, Medium: 2, High: 3, 'Very High': 4 };
const COMMITMENTS_MAP: Record<string, number> = {
  Resistant: 1,
  Opposed: 2,
  Ambivalent: 3,
  Complying: 4,
  Supporting: 5,
  Leading: 6,
};
const CAPABILITIES_MAP: Record<string, number> = {
  Unaware: 1,
  Aware: 2,
  Informed: 3,
  Equipped: 4,
  Practised: 5,
  Exemplary: 6,
};

const COMMITMENT_DESCRIPTIONS: Record<string, string> = {
  Resistant: 'Actively opposes the change and may work against it.',
  Opposed: 'Disagrees with the change but is not actively undermining it.',
  Ambivalent: 'Neither supports nor opposes the change; not yet engaged.',
  Complying: 'Follows the change because required to, without genuine buy-in.',
  Supporting: 'Agrees with the change and cooperates willingly.',
  Leading: 'Actively champions the change and helps bring others along.',
};

const CAPABILITY_DESCRIPTIONS: Record<string, string> = {
  Unaware: 'Has not yet been informed the change is happening.',
  Aware: 'Knows the change is happening but not yet why or what it means for them.',
  Informed: 'Understands why the change is happening and what will be expected.',
  Equipped: 'Has the knowledge and skills needed to work in the new way.',
  Practised: 'Has started using the new way of working with growing confidence.',
  Exemplary: 'Fully proficient, and can support or coach others through the change.',
};

const GROUP_COLOR_PALETTE = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf',
];

function createId(prefix = ''): string {
  return `${prefix}${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function freshReferenceData(): ReferenceData {
  return {
    groups: ['Finance', 'HR', 'IT', 'Operations', 'External'],
    subGroups: ['Frontline', 'First line manager', 'Senior rank', 'Support'],
    locations: ['New York', 'London', 'Tokyo', 'Remote'],
    relationships: ['Customer', 'Provider', 'Influencer', 'Governance'],
    commitments: ['Resistant', 'Opposed', 'Ambivalent', 'Complying', 'Supporting', 'Leading'],
    capabilities: ['Unaware', 'Aware', 'Informed', 'Equipped', 'Practised', 'Exemplary'],
    ratings: ['Low', 'Medium', 'High', 'Very High'],
    engagementActivities: [
      {
        id: 'act-1a',
        name: 'Facebook',
        inform: 'High',
        consult: 'Medium',
        involve: '',
        collaborate: '',
        empower: '',
      },
      {
        id: 'act-1b',
        name: 'X',
        inform: 'High',
        consult: 'Medium',
        involve: '',
        collaborate: '',
        empower: '',
      },
      {
        id: 'act-1c',
        name: 'Instagram',
        inform: 'High',
        consult: 'Medium',
        involve: '',
        collaborate: '',
        empower: '',
      },
      {
        id: 'act-2',
        name: 'Roadshows',
        inform: 'High',
        consult: 'High',
        involve: 'Medium',
        collaborate: '',
        empower: '',
      },
      {
        id: 'act-3',
        name: 'Briefings',
        inform: 'High',
        consult: 'Medium',
        involve: '',
        collaborate: '',
        empower: '',
      },
      {
        id: 'act-4',
        name: 'Workshops',
        inform: 'Medium',
        consult: 'High',
        involve: 'High',
        collaborate: 'Medium',
        empower: '',
      },
      {
        id: 'act-5',
        name: 'Focus Groups',
        inform: 'Medium',
        consult: 'High',
        involve: 'Medium',
        collaborate: '',
        empower: '',
      },
      {
        id: 'act-6',
        name: 'Secondments',
        inform: '',
        consult: 'Medium',
        involve: 'High',
        collaborate: 'High',
        empower: 'Medium',
      },
      {
        id: 'act-7',
        name: 'Steering Committee',
        inform: 'Medium',
        consult: 'High',
        involve: 'High',
        collaborate: 'High',
        empower: 'High',
      },
    ],
  };
}

function freshState(): StakeholderAnalysisState {
  return {
    stakeholders: [],
    engagementLog: [],
    referenceData: freshReferenceData(),
    sortConfig: { key: 'name', direction: 'ascending' },
    filterConfig: {},
    engagementSortConfig: { key: 'stakeholderId', direction: 'ascending' },
    engagementFilterConfig: {},
    mapFilterConfig: { group: 'All', subGroup: 'All', location: 'All', relationship: 'All' },
    mapAxisConfig: { x: 'power', y: 'interest' },
    activitySortConfig: { key: 'name', direction: 'ascending' },
    dashboardChartConfig: {
      chart1: 'mapping',
      chart2: 'commitmentGap',
      chart3: 'group',
      chart4: 'capabilityGap',
    },
    guidanceRead: false,
  };
}

function calculateScores(s: Stakeholder) {
  const interest = RATINGS_MAP[s.interest] || 0;
  const impact = RATINGS_MAP[s.impact] || 0;
  const power = RATINGS_MAP[s.power] || 0;
  const influence = RATINGS_MAP[s.influence] || 0;
  return { interest, impact, power, influence, pi: power + influence, ii: interest + impact };
}

function getAxisValue(s: Stakeholder, axis: MapAxisKey): number {
  const scores = calculateScores(s);
  return scores[axis];
}

function getStakeholderMapping(pi: number, ii: number): string {
  if (pi >= 5 && ii >= 5) {
    return 'Manage Closely';
  }
  if (pi >= 5 && ii < 5) {
    return 'Keep Satisfied';
  }
  if (pi < 5 && ii >= 5) {
    return 'Keep Informed';
  }
  return 'Monitor';
}

const MAPPING_BADGE_CLASS: Record<string, string> = {
  'Manage Closely': 'bg-red-100 text-red-800',
  'Keep Satisfied': 'bg-blue-100 text-blue-800',
  'Keep Informed': 'bg-green-100 text-green-800',
  Monitor: 'bg-gray-200 text-gray-800',
};

function getGap(
  current: string,
  target: string,
  type: 'commitments' | 'capabilities'
): { gap: number | ''; colorClass: string } {
  const map = type === 'commitments' ? COMMITMENTS_MAP : CAPABILITIES_MAP;
  if (!map[current] || !map[target]) {
    return { gap: '', colorClass: '' };
  }
  const gap = map[target] - map[current];
  const styles: Record<number, string> = {
    0: 'bg-blue-100 text-blue-800',
    1: 'bg-green-100 text-green-800',
    2: 'bg-yellow-100 text-yellow-800',
    3: 'bg-red-100 text-red-800',
  };
  const colorClass = gap >= 4 || gap < 0 ? 'bg-red-200 text-red-900 font-bold' : styles[gap] || '';
  return { gap, colorClass };
}

function getTargetDateStatus(dateString: string): 'none' | 'red' | 'yellow' | 'green' {
  if (!dateString) {
    return 'none';
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.ceil(
    (new Date(dateString).getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diffDays < 0) {
    return 'red';
  }
  if (diffDays <= 30) {
    return 'yellow';
  }
  return 'green';
}

const DATE_STATUS_CLASS: Record<string, string> = {
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  green: 'bg-green-100 text-green-800',
  none: '',
};

function formatDisplayDate(ds: string): string {
  if (!ds) {
    return '';
  }
  const [y, m, d] = ds.split('-');
  return d && m && y ? `${d}/${m}/${y}` : ds;
}

function assignGroupColors(groups: string[]): Record<string, string> {
  return Object.fromEntries(
    groups.map((group, i) => [group, GROUP_COLOR_PALETTE[i % GROUP_COLOR_PALETTE.length]])
  );
}

const EMPTY_STAKEHOLDER: Omit<Stakeholder, 'id'> = {
  name: '',
  groupSize: '',
  group: '',
  subGroup: '',
  location: '',
  relationship: '',
  interest: '',
  impact: '',
  power: '',
  influence: '',
  currentCommitment: '',
  targetCommitment: '',
  capabilityCurrent: '',
  capabilityTarget: '',
  targetDate: '',
};

const EMPTY_ENGAGEMENT: Omit<EngagementLog, 'id'> = {
  stakeholderId: '',
  engagementActivity: '',
  activity: '',
  owner: '',
  dueDate: '',
  status: 'Planned',
  notes: '',
};

const EMPTY_ACTIVITY: Omit<Activity, 'id'> = {
  name: '',
  inform: '',
  consult: '',
  involve: '',
  collaborate: '',
  empower: '',
};

/** ---------- Stakeholder add/edit modal ---------- */
function StakeholderModal({
  stakeholder,
  referenceData,
  hasEngagementLogs,
  onSave,
  onCancel,
  onAddEngagement,
  onViewEngagements,
}: {
  stakeholder: Stakeholder;
  referenceData: ReferenceData;
  hasEngagementLogs: boolean;
  onSave: (s: Stakeholder) => void;
  onCancel: () => void;
  onAddEngagement: () => void;
  onViewEngagements: () => void;
}): JSX.Element {
  const [draft, setDraft] = useState<Stakeholder>(stakeholder);
  const isEdit = Boolean(stakeholder.id);

  const update = (updates: Partial<Stakeholder>) =>
    setDraft((current) => ({ ...current, ...updates }));

  const commitmentGap = getGap(draft.currentCommitment, draft.targetCommitment, 'commitments');
  const capabilityGap = getGap(draft.capabilityCurrent, draft.capabilityTarget, 'capabilities');

  const ratingSelect = (label: string, field: keyof Stakeholder) => (
    <div>
      <label htmlFor={`sh-${field}`} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <select
        id={`sh-${field}`}
        value={draft[field] as string}
        onChange={(event) => update({ [field]: event.target.value } as Partial<Stakeholder>)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      >
        <option value=""></option>
        {referenceData.ratings.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );

  const listSelect = (label: string, field: keyof Stakeholder, options: string[]) => (
    <div>
      <label htmlFor={`sh-${field}`} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <select
        id={`sh-${field}`}
        value={draft[field] as string}
        onChange={(event) => update({ [field]: event.target.value } as Partial<Stakeholder>)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      >
        <option value=""></option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );

  /** Like listSelect, but for the fixed Commitment/Capability scales - shows the selected level's meaning as helper text and a hover tooltip. */
  const scaleSelect = (
    label: string,
    field: keyof Stakeholder,
    options: string[],
    descriptions: Record<string, string>
  ) => {
    const selected = draft[field] as string;
    return (
      <div>
        <label htmlFor={`sh-${field}`} className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
        <select
          id={`sh-${field}`}
          value={selected}
          title={descriptions[selected] || undefined}
          onChange={(event) => update({ [field]: event.target.value } as Partial<Stakeholder>)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        >
          <option value=""></option>
          {options.map((o) => (
            <option key={o} value={o} title={descriptions[o]}>
              {o}
            </option>
          ))}
        </select>
        {selected && descriptions[selected] ? (
          <p className="mt-1 text-xs text-gray-500">{descriptions[selected]}</p>
        ) : null}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-lg bg-white shadow-xl p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-gray-900">
              {isEdit ? 'Edit Stakeholder' : 'Add New Stakeholder'}
            </h3>
            {hasEngagementLogs ? (
              <button
                type="button"
                onClick={onViewEngagements}
                className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full hover:bg-green-200"
              >
                Has Engagement Log
              </button>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5"
          >
            Close
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <label htmlFor="sh-name" className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              id="sh-name"
              type="text"
              required
              value={draft.name}
              onChange={(event) => update({ name: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label htmlFor="sh-groupSize" className="block mb-2 text-sm font-medium text-gray-900">
              Group Size
            </label>
            <input
              id="sh-groupSize"
              type="number"
              value={draft.groupSize}
              onChange={(event) => update({ groupSize: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          {listSelect('Group', 'group', referenceData.groups)}
          {listSelect('Sub-Group', 'subGroup', referenceData.subGroups)}
          {listSelect('Location/Organisation', 'location', referenceData.locations)}
          {listSelect('Relationship Category', 'relationship', referenceData.relationships)}
          {ratingSelect('Interest', 'interest')}
          {ratingSelect('Impact', 'impact')}
          {scaleSelect(
            'Current Commitment',
            'currentCommitment',
            referenceData.commitments,
            COMMITMENT_DESCRIPTIONS
          )}
          {scaleSelect(
            'Target Commitment',
            'targetCommitment',
            referenceData.commitments,
            COMMITMENT_DESCRIPTIONS
          )}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Commitment Gap</label>
            <div
              className={`w-full p-2.5 text-sm rounded-lg text-center font-bold ${commitmentGap.colorClass || 'bg-gray-100'}`}
            >
              {commitmentGap.gap}
            </div>
          </div>
          {ratingSelect('Influence', 'influence')}
          {scaleSelect(
            'Current Capability',
            'capabilityCurrent',
            referenceData.capabilities,
            CAPABILITY_DESCRIPTIONS
          )}
          {scaleSelect(
            'Target Capability',
            'capabilityTarget',
            referenceData.capabilities,
            CAPABILITY_DESCRIPTIONS
          )}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Capability Gap</label>
            <div
              className={`w-full p-2.5 text-sm rounded-lg text-center font-bold ${capabilityGap.colorClass || 'bg-gray-100'}`}
            >
              {capabilityGap.gap}
            </div>
          </div>
          {ratingSelect('Power', 'power')}
          <div>
            <label htmlFor="sh-targetDate" className="block mb-2 text-sm font-medium text-gray-900">
              Target Date
            </label>
            <input
              id="sh-targetDate"
              type="date"
              value={draft.targetDate}
              onChange={(event) => update({ targetDate: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            {isEdit ? (
              <button
                type="button"
                onClick={onAddEngagement}
                className="text-white bg-teal-600 hover:bg-teal-700 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Add Engagement Log
              </button>
            ) : null}
          </div>
          <div className="space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (!draft.name.trim()) {
                  window.alert('Please enter a name.');
                  return;
                }
                onSave(draft);
              }}
              className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Save Stakeholder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** ---------- Engagement log add/edit modal ---------- */
function EngagementModal({
  log,
  stakeholders,
  activities,
  teamMembers,
  onSave,
  onCancel,
}: {
  log: EngagementLog;
  stakeholders: Stakeholder[];
  activities: Activity[];
  teamMembers: TeamMember[];
  onSave: (log: EngagementLog) => void;
  onCancel: () => void;
}): JSX.Element {
  const [draft, setDraft] = useState<EngagementLog>(log);
  const isEdit = Boolean(log.id);
  const update = (updates: Partial<EngagementLog>) =>
    setDraft((current) => ({ ...current, ...updates }));

  const sortedStakeholders = useMemo(
    () => [...stakeholders].sort((a, b) => a.name.localeCompare(b.name)),
    [stakeholders]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-xl p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">
            {isEdit ? 'Edit Engagement Log' : 'Add Engagement Log'}
          </h3>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5"
          >
            Close
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="eng-stakeholder"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Stakeholder
            </label>
            <select
              id="eng-stakeholder"
              value={draft.stakeholderId}
              onChange={(event) => update({ stakeholderId: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">Select stakeholder...</option>
              {sortedStakeholders.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.group || 'N/A'} | {s.subGroup || 'N/A'} | {s.location || 'N/A'})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="eng-activity-select"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Engagement Activity
            </label>
            <select
              id="eng-activity-select"
              value={draft.engagementActivity}
              onChange={(event) => update({ engagementActivity: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">Select Activity...</option>
              {activities.map((act) => (
                <option key={act.id} value={act.name}>
                  {act.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="eng-description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Activity Description
            </label>
            <textarea
              id="eng-description"
              required
              value={draft.activity}
              onChange={(event) => update({ activity: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-20"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="eng-owner" className="block mb-2 text-sm font-medium text-gray-900">
                Owner
              </label>
              <select
                id="eng-owner"
                value={draft.owner}
                onChange={(event) => update({ owner: event.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Unassigned</option>
                {teamMembers.map((member) => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="eng-dueDate" className="block mb-2 text-sm font-medium text-gray-900">
                Due Date
              </label>
              <input
                id="eng-dueDate"
                type="date"
                value={draft.dueDate}
                onChange={(event) => update({ dueDate: event.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>
          <div>
            <label htmlFor="eng-status" className="block mb-2 text-sm font-medium text-gray-900">
              Status
            </label>
            <select
              id="eng-status"
              value={draft.status}
              onChange={(event) => update({ status: event.target.value as EngagementStatus })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label htmlFor="eng-notes" className="block mb-2 text-sm font-medium text-gray-900">
              Notes
            </label>
            <textarea
              id="eng-notes"
              value={draft.notes}
              onChange={(event) => update({ notes: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-20"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (!draft.stakeholderId || !draft.activity.trim()) {
                window.alert('Please select a stakeholder and enter an activity description.');
                return;
              }
              onSave(draft);
            }}
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Save Log
          </button>
        </div>
      </div>
    </div>
  );
}

/** ---------- Activity template add/edit modal ---------- */
function ActivityModal({
  activity,
  onSave,
  onCancel,
}: {
  activity: Activity;
  onSave: (activity: Activity) => void;
  onCancel: () => void;
}): JSX.Element {
  const [draft, setDraft] = useState<Activity>(activity);
  const isEdit = Boolean(activity.id);
  const update = (updates: Partial<Activity>) =>
    setDraft((current) => ({ ...current, ...updates }));

  const ratingSelect = (label: string, field: keyof Activity) => (
    <div>
      <label htmlFor={`act-${field}`} className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <select
        id={`act-${field}`}
        value={draft[field] as string}
        onChange={(event) => update({ [field]: event.target.value } as Partial<Activity>)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      >
        <option value="">N/A</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-xl p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">
            {isEdit ? 'Edit Activity' : 'Add Activity'}
          </h3>
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-900 rounded-lg text-sm p-1.5"
          >
            Close
          </button>
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="act-name" className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              id="act-name"
              type="text"
              value={draft.name}
              onChange={(event) => update({ name: event.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {ratingSelect('Inform', 'inform')}
            {ratingSelect('Consult', 'consult')}
            {ratingSelect('Involve', 'involve')}
            {ratingSelect('Collaborate', 'collaborate')}
            {ratingSelect('Empower', 'empower')}
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (!draft.name.trim()) {
                window.alert('Please enter a name.');
                return;
              }
              onSave(draft);
            }}
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Save Activity
          </button>
        </div>
      </div>
    </div>
  );
}

const DASHBOARD_CHART_OPTIONS: { key: string; label: string }[] = [
  { key: 'mapping', label: 'Stakeholder Mapping' },
  { key: 'group', label: 'Group' },
  { key: 'subGroup', label: 'Sub-Group' },
  { key: 'location', label: 'Location' },
  { key: 'relationship', label: 'Relationship' },
  { key: 'interest', label: 'Interest' },
  { key: 'impact', label: 'Impact' },
  { key: 'power', label: 'Power' },
  { key: 'influence', label: 'Influence' },
  { key: 'currentCommitment', label: 'Current Commitment' },
  { key: 'targetCommitment', label: 'Target Commitment' },
  { key: 'commitmentGap', label: 'Commitment Gap' },
  { key: 'capabilityCurrent', label: 'Current Capability' },
  { key: 'capabilityTarget', label: 'Target Capability' },
  { key: 'capabilityGap', label: 'Capability Gap' },
];

function getAggregatedValue(s: Stakeholder, key: string): string {
  if (key === 'mapping') {
    const scores = calculateScores(s);
    return getStakeholderMapping(scores.pi, scores.ii);
  }
  if (key === 'commitmentGap') {
    return `Gap: ${getGap(s.currentCommitment, s.targetCommitment, 'commitments').gap}`;
  }
  if (key === 'capabilityGap') {
    return `Gap: ${getGap(s.capabilityCurrent, s.capabilityTarget, 'capabilities').gap}`;
  }
  return (s as unknown as Record<string, string>)[key] || 'N/A';
}

function getChartColors(key: string, labels: string[]): string[] {
  const base = [
    '#3b82f6',
    '#10b981',
    '#f97316',
    '#8b5cf6',
    '#ef4444',
    '#f59e0b',
    '#14b8a6',
    '#6366f1',
    '#d946ef',
    '#0ea5e9',
  ];
  if (key === 'mapping') {
    const map: Record<string, string> = {
      'Manage Closely': '#ef4444',
      'Keep Satisfied': '#3b82f6',
      'Keep Informed': '#10b981',
      Monitor: '#6b7280',
    };
    return labels.map((l) => map[l] || '#6b7280');
  }
  if (key.includes('Gap')) {
    return labels.map((l) => {
      const gap = parseInt(l.replace('Gap: ', ''), 10);
      if (Number.isNaN(gap) || gap < 0) {
        return '#d1d5db';
      }
      if (gap === 0) {
        return '#60a5fa';
      }
      if (gap === 1) {
        return '#4ade80';
      }
      if (gap === 2) {
        return '#facc15';
      }
      if (gap === 3) {
        return '#f87171';
      }
      return '#dc2626';
    });
  }
  return labels.map((_, i) => base[i % base.length]);
}

/** One dashboard doughnut chart with its own metric picker, driving the details panel on click. */
function DashboardChart({
  chartKey,
  stakeholders,
  onMetricChange,
  onSegmentClick,
}: {
  chartKey: string;
  stakeholders: Stakeholder[];
  onMetricChange: (key: string) => void;
  onSegmentClick: (label: string, metricKey: string) => void;
}): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const label = DASHBOARD_CHART_OPTIONS.find((o) => o.key === chartKey)?.label || 'Select Data';

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const counts: Record<string, number> = {};
    stakeholders.forEach((s) => {
      const value = getAggregatedValue(s, chartKey);
      counts[value] = (counts[value] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const labels = sorted.map((entry) => entry[0]);
    const values = sorted.map((entry) => entry[1]);
    createDoughnutChart(
      canvasRef.current,
      {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: getChartColors(chartKey, labels),
            borderColor: '#ffffff',
            borderWidth: 2,
          },
        ],
      },
      {},
      (index) => onSegmentClick(labels[index], chartKey)
    );
  }, [chartKey, stakeholders]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">{label}</h3>
        <select
          value={chartKey}
          onChange={(event) => onMetricChange(event.target.value)}
          className="text-sm border-gray-300 rounded-md"
        >
          {DASHBOARD_CHART_OPTIONS.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="h-64 mx-auto" style={{ position: 'relative', maxWidth: 300 }}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

function DashboardTab({
  state,
  trustName,
  projectName,
  onChartConfigChange,
  onOpenStakeholder,
  onClearData,
  onSaveToFile,
  onLoadFromFile,
}: {
  state: StakeholderAnalysisState;
  trustName: string;
  projectName: string;
  onChartConfigChange: (chartId: 'chart1' | 'chart2' | 'chart3' | 'chart4', key: string) => void;
  onOpenStakeholder: (id: string) => void;
  onClearData: () => void;
  onSaveToFile: () => void;
  onLoadFromFile: (event: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [detailsTitle, setDetailsTitle] = useState('Stakeholder Details');
  const [detailsList, setDetailsList] = useState<Stakeholder[] | null>(null);

  const dateCounts = useMemo(() => {
    const counts = { red: 0, yellow: 0, green: 0 };
    state.stakeholders.forEach((s) => {
      const status = getTargetDateStatus(s.targetDate);
      if (status !== 'none') {
        counts[status] += 1;
      }
    });
    return counts;
  }, [state.stakeholders]);

  const handleSegmentClick = (label: string, metricKey: string) => {
    const filtered = state.stakeholders.filter((s) => getAggregatedValue(s, metricKey) === label);
    setDetailsTitle(`Filter: "${label}"`);
    setDetailsList(filtered);
  };

  const showDateFiltered = (status: 'red' | 'yellow' | 'green') => {
    const titles = { red: 'Overdue Target Dates', yellow: 'Due in <30 Days', green: 'On Track' };
    setDetailsTitle(titles[status]);
    setDetailsList(state.stakeholders.filter((s) => getTargetDateStatus(s.targetDate) === status));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={onLoadFromFile}
            className="hidden"
          />
          <button
            type="button"
            onClick={onClearData}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm"
          >
            Clear Data
          </button>
          <button
            type="button"
            onClick={onSaveToFile}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm"
          >
            Save to File
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Load from File
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Organisation</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {trustName || 'Your Organisation'}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Project / Programme</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {projectName || 'Your Project/Programme'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Total Stakeholders</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{state.stakeholders.length}</p>
        </div>
        <button
          type="button"
          onClick={() => showDateFiltered('red')}
          className="bg-red-100 p-4 rounded-lg shadow-sm text-left hover:bg-red-200"
        >
          <h3 className="text-sm font-medium text-red-800">Overdue Target Dates</h3>
          <p className="mt-1 text-2xl font-semibold text-red-900">{dateCounts.red}</p>
        </button>
        <button
          type="button"
          onClick={() => showDateFiltered('yellow')}
          className="bg-yellow-100 p-4 rounded-lg shadow-sm text-left hover:bg-yellow-200"
        >
          <h3 className="text-sm font-medium text-yellow-800">Due in &lt;30 Days</h3>
          <p className="mt-1 text-2xl font-semibold text-yellow-900">{dateCounts.yellow}</p>
        </button>
        <button
          type="button"
          onClick={() => showDateFiltered('green')}
          className="bg-green-100 p-4 rounded-lg shadow-sm text-left hover:bg-green-200"
        >
          <h3 className="text-sm font-medium text-green-800">On Track</h3>
          <p className="mt-1 text-2xl font-semibold text-green-900">{dateCounts.green}</p>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['chart1', 'chart2', 'chart3', 'chart4'] as const).map((chartId) => (
            <DashboardChart
              key={chartId}
              chartKey={state.dashboardChartConfig[chartId]}
              stakeholders={state.stakeholders}
              onMetricChange={(key) => onChartConfigChange(chartId, key)}
              onSegmentClick={handleSegmentClick}
            />
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 lg:col-span-1">
          <h3 className="font-semibold text-lg mb-2">
            {detailsList ? detailsTitle : 'Stakeholder Details'}
          </h3>
          {!detailsList ? (
            <p className="text-gray-500 text-sm">
              Click a segment on any chart to view the filtered list.
            </p>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setDetailsList(null)}
                className="text-sm text-indigo-600 hover:underline mb-3"
              >
                ← Clear Selection
              </button>
              <ul className="space-y-1 overflow-y-auto" style={{ maxHeight: '28rem' }}>
                {detailsList.length === 0 ? (
                  <li className="text-gray-500 text-center py-4">
                    No stakeholders in this category.
                  </li>
                ) : (
                  detailsList.map((s) => (
                    <li
                      key={s.id}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <div>
                        <button
                          type="button"
                          onClick={() => onOpenStakeholder(s.id)}
                          className="font-medium text-indigo-600 hover:underline text-left"
                        >
                          {s.name}
                        </button>
                        <p className="text-sm text-gray-500">
                          {s.group || 'N/A'} | {s.subGroup || 'N/A'} | {s.location || 'N/A'}
                        </p>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const STAKEHOLDER_COLUMNS: { key: string; label: string }[] = [
  { key: 'name', label: 'Name' },
  { key: 'group', label: 'Group / Sub-Group' },
  { key: 'location', label: 'Location' },
  { key: 'relationship', label: 'Relationship' },
  { key: 'mapping', label: 'Mapping' },
  { key: 'commitmentGap', label: 'Commitment' },
  { key: 'capabilityGap', label: 'Capability' },
  { key: 'targetDate', label: 'Target Date' },
];

function StakeholdersTab({
  state,
  onOpen,
  onDuplicate,
  onDelete,
  onSortChange,
  onFilterChange,
  onResetFilters,
}: {
  state: StakeholderAnalysisState;
  onOpen: (id: string | null) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onSortChange: (key: string) => void;
  onFilterChange: (key: string, value: string) => void;
  onResetFilters: () => void;
}): JSX.Element {
  const filtered = useMemo(() => {
    let result = [...state.stakeholders];
    Object.entries(state.filterConfig).forEach(([key, value]) => {
      const filterValue = value.toLowerCase();
      if (!filterValue) {
        return;
      }
      if (key === 'mapping') {
        result = result.filter((s) => {
          const scores = calculateScores(s);
          return getStakeholderMapping(scores.pi, scores.ii).toLowerCase() === filterValue;
        });
      } else {
        result = result.filter((s) =>
          ((s as unknown as Record<string, string>)[key] || '')
            .toString()
            .toLowerCase()
            .includes(filterValue)
        );
      }
    });

    const { key, direction } = state.sortConfig;
    result.sort((a, b) => {
      let valA: string | number;
      let valB: string | number;
      if (key === 'commitmentGap') {
        valA = getGap(a.currentCommitment, a.targetCommitment, 'commitments').gap || -Infinity;
        valB = getGap(b.currentCommitment, b.targetCommitment, 'commitments').gap || -Infinity;
      } else if (key === 'capabilityGap') {
        valA = getGap(a.capabilityCurrent, a.capabilityTarget, 'capabilities').gap || -Infinity;
        valB = getGap(b.capabilityCurrent, b.capabilityTarget, 'capabilities').gap || -Infinity;
      } else if (key === 'mapping') {
        valA = getStakeholderMapping(calculateScores(a).pi, calculateScores(a).ii);
        valB = getStakeholderMapping(calculateScores(b).pi, calculateScores(b).ii);
      } else {
        valA = (a as unknown as Record<string, string>)[key] || '';
        valB = (b as unknown as Record<string, string>)[key] || '';
      }
      if (valA < valB) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (valA > valB) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return result;
  }, [state.stakeholders, state.filterConfig, state.sortConfig]);

  const uniqueValues = (key: string) =>
    [...new Set(state.stakeholders.map((s) => (s as unknown as Record<string, string>)[key]))]
      .filter(Boolean)
      .sort();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Stakeholder Details</h2>
        <button
          type="button"
          onClick={() => onOpen(null)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm"
        >
          Add Stakeholder
        </button>
      </div>
      <FilterBar
        search={{
          label: 'Search name',
          value: state.filterConfig.name || '',
          placeholder: 'Search by name...',
          onChange: (value) => onFilterChange('name', value),
        }}
        selects={[
          {
            key: 'group',
            label: 'Filter by group',
            value: state.filterConfig.group || '',
            options: uniqueValues('group'),
            onChange: (v) => onFilterChange('group', v),
          },
          {
            key: 'subGroup',
            label: 'Filter by sub-group',
            value: state.filterConfig.subGroup || '',
            options: uniqueValues('subGroup'),
            onChange: (v) => onFilterChange('subGroup', v),
          },
          {
            key: 'location',
            label: 'Filter by location',
            value: state.filterConfig.location || '',
            options: uniqueValues('location'),
            onChange: (v) => onFilterChange('location', v),
          },
          {
            key: 'relationship',
            label: 'Filter by relationship',
            value: state.filterConfig.relationship || '',
            options: uniqueValues('relationship'),
            onChange: (v) => onFilterChange('relationship', v),
          },
          {
            key: 'mapping',
            label: 'Filter by mapping',
            value: state.filterConfig.mapping || '',
            options: ['Manage Closely', 'Keep Satisfied', 'Keep Informed', 'Monitor'],
            onChange: (v) => onFilterChange('mapping', v),
          },
        ]}
        onReset={onResetFilters}
      />
      <div className="overflow-auto" style={{ maxHeight: '70vh' }}>
        <table className="w-full text-sm text-left text-gray-500 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
            <tr>
              {STAKEHOLDER_COLUMNS.map((col) => {
                const isSorted = state.sortConfig.key === col.key;
                const icon = isSorted
                  ? state.sortConfig.direction === 'ascending'
                    ? '▲'
                    : '▼'
                  : '↕';
                return (
                  <th
                    key={col.key}
                    onClick={() => onSortChange(col.key)}
                    className="px-4 py-3 align-top cursor-pointer select-none"
                  >
                    {col.label} <span className="text-gray-400">{icon}</span>
                  </th>
                );
              })}
              <th className="px-4 py-3 align-top">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-4 text-gray-500">
                  No stakeholders match the current filters.
                </td>
              </tr>
            ) : (
              filtered.map((s) => {
                const commitmentGap = getGap(
                  s.currentCommitment,
                  s.targetCommitment,
                  'commitments'
                );
                const capabilityGap = getGap(
                  s.capabilityCurrent,
                  s.capabilityTarget,
                  'capabilities'
                );
                const scores = calculateScores(s);
                const mapping = getStakeholderMapping(scores.pi, scores.ii);
                const dateClass = DATE_STATUS_CLASS[getTargetDateStatus(s.targetDate)];
                return (
                  <tr
                    key={s.id}
                    onClick={() => onOpen(s.id)}
                    className="bg-white border-b cursor-pointer hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <span className="text-indigo-600 hover:underline">{s.name}</span>
                    </td>
                    <td className="px-4 py-3">
                      {s.group}
                      {s.subGroup ? <span className="text-gray-400"> / {s.subGroup}</span> : null}
                    </td>
                    <td className="px-4 py-3">{s.location}</td>
                    <td className="px-4 py-3">{s.relationship}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${MAPPING_BADGE_CLASS[mapping]}`}
                      >
                        {mapping}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-center ${commitmentGap.colorClass}`}>
                      <span className="font-medium">
                        {s.currentCommitment || '-'} → {s.targetCommitment || '-'}
                      </span>
                    </td>
                    <td className={`px-4 py-3 text-center ${capabilityGap.colorClass}`}>
                      <span className="font-medium">
                        {s.capabilityCurrent || '-'} → {s.capabilityTarget || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${dateClass}`}>
                        {formatDisplayDate(s.targetDate)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div
                        className="flex items-center gap-2"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <IconActionButton onClick={() => onOpen(s.id)} title="Edit stakeholder">
                          <PencilIcon />
                        </IconActionButton>
                        <IconActionButton
                          onClick={() => onDuplicate(s.id)}
                          title="Duplicate stakeholder"
                        >
                          <DuplicateIcon />
                        </IconActionButton>
                        <IconActionButton
                          onClick={() => onDelete(s.id)}
                          title="Delete stakeholder"
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

/** Converts an engagement log entry into a real DraftAction on a chosen component/lens - mirrors ForceFieldAnalysisApp's ApplyScreen. */
function ApplyToProjectModal({
  log,
  stakeholderName,
  components,
  teamMembers,
  getEntry,
  onConfirm,
  onCancel,
}: {
  log: EngagementLog;
  stakeholderName: string;
  components: AssessmentComponent[];
  teamMembers: TeamMember[];
  getEntry: (componentId: string, lens: string) => DraftEntry;
  onConfirm: (componentId: string, lens: string, action: DraftAction) => void;
  onCancel: () => void;
}): JSX.Element {
  const [componentId, setComponentId] = useState(components[0]?.id || '');
  const component = components.find((c) => c.id === componentId);
  const [lens, setLens] = useState(component?.lenses[0] || '');
  const [action, setAction] = useState<DraftAction>({
    id: createId('action-'),
    text: `${stakeholderName}: ${log.activity}`.trim(),
    owner: log.owner,
    timescale: log.dueDate,
    dueDate: log.dueDate,
    status: 'Planned',
  });

  const currentLenses = component?.lenses || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Add to Project Plan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="apply-component"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Component
            </label>
            <select
              id="apply-component"
              value={componentId}
              onChange={(event) => {
                const nextComponent = components.find((c) => c.id === event.target.value);
                setComponentId(event.target.value);
                setLens(nextComponent?.lenses[0] || '');
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              {components.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="apply-lens" className="block mb-2 text-sm font-medium text-gray-900">
              Lens
            </label>
            <select
              id="apply-lens"
              value={lens}
              onChange={(event) => setLens(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              {currentLenses.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label htmlFor="apply-text" className="block mb-2 text-sm font-medium text-gray-900">
          Action Text
        </label>
        <input
          id="apply-text"
          type="text"
          value={action.text}
          onChange={(event) => setAction((current) => ({ ...current, text: event.target.value }))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
        />
        <ActionEditorFields
          action={action}
          onChange={(updates) => setAction((current) => ({ ...current, ...updates }))}
          teamMembers={teamMembers}
        />
        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (!componentId || !lens) {
                window.alert('Please choose a component and lens.');
                return;
              }
              const entry = getEntry(componentId, lens);
              onConfirm(componentId, lens, { ...action, readinessScore: entry.score });
            }}
            className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Add to Project
          </button>
        </div>
      </div>
    </div>
  );
}

function EngagementTab({
  state,
  stakeholderMap,
  canApply,
  onOpen,
  onDelete,
  onApply,
  onSortChange,
  onFilterChange,
  onResetFilters,
}: {
  state: StakeholderAnalysisState;
  stakeholderMap: Record<string, string>;
  canApply: boolean;
  onOpen: (id: string | null) => void;
  onDelete: (id: string) => void;
  onApply: (log: EngagementLog) => void;
  onSortChange: (key: string) => void;
  onFilterChange: (key: string, value: string) => void;
  onResetFilters: () => void;
}): JSX.Element {
  const columns = [
    { key: 'stakeholderId', label: 'Stakeholder' },
    { key: 'engagementActivity', label: 'Engagement Activity' },
    { key: 'activity', label: 'Activity Description' },
    { key: 'owner', label: 'Owner' },
    { key: 'dueDate', label: 'Due Date' },
    { key: 'status', label: 'Status' },
    { key: 'notes', label: 'Notes' },
  ];

  const filtered = useMemo(() => {
    let result = [...state.engagementLog];
    Object.entries(state.engagementFilterConfig).forEach(([key, value]) => {
      const filterValue = value.toLowerCase();
      if (!filterValue) {
        return;
      }
      result = result.filter((log) => {
        const val =
          key === 'stakeholderId'
            ? stakeholderMap[log.stakeholderId] || ''
            : (log as unknown as Record<string, string>)[key] || '';
        return val.toString().toLowerCase().includes(filterValue);
      });
    });
    const { key, direction } = state.engagementSortConfig;
    result.sort((a, b) => {
      const valA =
        key === 'stakeholderId'
          ? stakeholderMap[a.stakeholderId] || ''
          : (a as unknown as Record<string, string>)[key] || '';
      const valB =
        key === 'stakeholderId'
          ? stakeholderMap[b.stakeholderId] || ''
          : (b as unknown as Record<string, string>)[key] || '';
      if (valA < valB) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (valA > valB) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return result;
  }, [
    state.engagementLog,
    state.engagementFilterConfig,
    state.engagementSortConfig,
    stakeholderMap,
  ]);

  const uniqueStakeholderNames = useMemo(
    () =>
      [
        ...new Set(
          state.engagementLog.map((log) => stakeholderMap[log.stakeholderId]).filter(Boolean)
        ),
      ].sort(),
    [state.engagementLog, stakeholderMap]
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Engagement Plan &amp; Log</h2>
        <button
          type="button"
          onClick={() => onOpen(null)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm"
        >
          Add Engagement Log
        </button>
      </div>
      <FilterBar
        selects={[
          {
            key: 'stakeholder',
            label: 'Stakeholder',
            value: state.engagementFilterConfig.stakeholderId || '',
            options: uniqueStakeholderNames,
            onChange: (v) => onFilterChange('stakeholderId', v),
          },
          {
            key: 'status',
            label: 'Status',
            value: state.engagementFilterConfig.status || '',
            options: ['Planned', 'In Progress', 'Completed'],
            onChange: (v) => onFilterChange('status', v),
          },
        ]}
        onReset={onResetFilters}
      />
      <div className="overflow-auto" style={{ maxHeight: '70vh' }}>
        <table className="w-full text-sm text-left text-gray-500 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
            <tr>
              {columns.map((col) => {
                const isSorted = state.engagementSortConfig.key === col.key;
                const icon = isSorted
                  ? state.engagementSortConfig.direction === 'ascending'
                    ? '▲'
                    : '▼'
                  : '↕';
                return (
                  <th
                    key={col.key}
                    onClick={() => onSortChange(col.key)}
                    className="px-4 py-3 align-top cursor-pointer select-none"
                  >
                    {col.label} <span className="text-gray-400">{icon}</span>
                  </th>
                );
              })}
              <th className="px-4 py-3 align-top">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No engagement logs match the current filters.
                </td>
              </tr>
            ) : (
              filtered.map((log) => {
                const dateClass = DATE_STATUS_CLASS[getTargetDateStatus(log.dueDate)];
                return (
                  <tr
                    key={log.id}
                    onClick={() => onOpen(log.id)}
                    className="bg-white border-b cursor-pointer hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {stakeholderMap[log.stakeholderId] || 'Unknown'}
                    </td>
                    <td className="px-4 py-3">{log.engagementActivity}</td>
                    <td className="px-4 py-3">{log.activity}</td>
                    <td className="px-4 py-3">{log.owner}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${dateClass}`}>
                        {formatDisplayDate(log.dueDate)}
                      </span>
                    </td>
                    <td className="px-4 py-3">{log.status}</td>
                    <td className="px-4 py-3 whitespace-pre-wrap">{log.notes}</td>
                    <td className="px-4 py-3">
                      <div
                        className="flex items-center gap-2"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <IconActionButton
                          onClick={() => onOpen(log.id)}
                          title="Edit engagement log"
                        >
                          <PencilIcon />
                        </IconActionButton>
                        {canApply ? (
                          <IconActionButton
                            onClick={() => onApply(log)}
                            title="Add to project plan"
                          >
                            <PlusCircleIcon />
                          </IconActionButton>
                        ) : null}
                        <IconActionButton
                          onClick={() => onDelete(log.id)}
                          title="Delete engagement log"
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

const MAP_AXIS_OPTIONS: { key: MapAxisKey; label: string }[] = [
  { key: 'power', label: 'Power' },
  { key: 'influence', label: 'Influence' },
  { key: 'interest', label: 'Interest' },
  { key: 'impact', label: 'Impact' },
];

function AnalysisMapTab({
  state,
  groups,
  groupColors,
  onFilterChange,
  onAxisChange,
  onResetFilters,
  onOpenStakeholder,
}: {
  state: StakeholderAnalysisState;
  groups: string[];
  groupColors: Record<string, string>;
  onFilterChange: (key: 'group' | 'subGroup' | 'location' | 'relationship', value: string) => void;
  onAxisChange: (axis: 'x' | 'y', value: MapAxisKey) => void;
  onResetFilters: () => void;
  onOpenStakeholder: (id: string) => void;
}): JSX.Element {
  const { group, subGroup, location, relationship } = state.mapFilterConfig;
  const { x: xAxis, y: yAxis } = state.mapAxisConfig;

  const filterCategories: {
    id: 'group' | 'subGroup' | 'location' | 'relationship';
    title: string;
    current: string;
  }[] = [
    { id: 'group', title: 'Group', current: group },
    { id: 'subGroup', title: 'Sub-Group', current: subGroup },
    { id: 'location', title: 'Location', current: location },
    { id: 'relationship', title: 'Relationship', current: relationship },
  ];

  const isDefaultView =
    ['power', 'influence'].includes(xAxis) && ['interest', 'impact'].includes(yAxis);
  const quadrantBgs = isDefaultView
    ? [
        'bg-green-50',
        'bg-green-50',
        'bg-red-50',
        'bg-red-50',
        'bg-green-50',
        'bg-green-50',
        'bg-red-50',
        'bg-red-50',
        'bg-gray-100',
        'bg-gray-100',
        'bg-blue-50',
        'bg-blue-50',
        'bg-gray-100',
        'bg-gray-100',
        'bg-blue-50',
        'bg-blue-50',
      ]
    : Array(16).fill('bg-white');

  const filteredStakeholders = state.stakeholders.filter((s) => {
    return (
      (group === 'All' || s.group === group) &&
      (subGroup === 'All' || s.subGroup === subGroup) &&
      (location === 'All' || s.location === location) &&
      (relationship === 'All' || s.relationship === relationship)
    );
  });

  const cellDots: Stakeholder[][] = Array.from({ length: 16 }, () => []);
  filteredStakeholders.forEach((s) => {
    const x = getAxisValue(s, xAxis);
    const y = getAxisValue(s, yAxis);
    if (x > 0 && y > 0) {
      const cellIndex = (4 - y) * 4 + (x - 1);
      cellDots[cellIndex]?.push(s);
    }
  });

  const xLabel = MAP_AXIS_OPTIONS.find((o) => o.key === xAxis)?.label || 'Power';

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Stakeholder Analysis Map</h2>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-sm text-indigo-600 hover:underline"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        {filterCategories.map(({ id, title, current }) => {
          const uniqueValues = [
            ...new Set(state.stakeholders.map((s) => s[id]).filter(Boolean)),
          ].sort();
          return (
            <div key={id}>
              <label className="block text-sm font-medium text-gray-700">{title}</label>
              <select
                value={current}
                onChange={(event) => onFilterChange(id, event.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
              >
                <option value="All">All</option>
                {uniqueValues.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Vertical Axis (Y)</label>
          <select
            value={yAxis}
            onChange={(event) => onAxisChange('y', event.target.value as MapAxisKey)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
          >
            {MAP_AXIS_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Horizontal Axis (X)</label>
          <select
            value={xAxis}
            onChange={(event) => onAxisChange('x', event.target.value as MapAxisKey)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
          >
            {MAP_AXIS_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-grow">
          <div className="grid grid-cols-5 text-center text-sm font-medium text-gray-600">
            <div></div>
            <div className="p-2 border-b-2 border-r-2 border-gray-300">Low</div>
            <div className="p-2 border-b-2 border-r-2 border-gray-300">Medium</div>
            <div className="p-2 border-b-2 border-r-2 border-gray-300">High</div>
            <div className="p-2 border-b-2 border-gray-300">Very High</div>
          </div>
          <div className="grid grid-cols-5" style={{ height: 400 }}>
            <div className="grid grid-rows-4 text-center font-medium text-gray-600">
              <div className="flex items-center justify-center p-2 border-r-2 border-gray-300">
                Very High
              </div>
              <div className="flex items-center justify-center p-2 border-r-2 border-gray-300">
                High
              </div>
              <div className="flex items-center justify-center p-2 border-r-2 border-gray-300">
                Medium
              </div>
              <div className="flex items-center justify-center p-2 border-r-2 border-gray-300">
                Low
              </div>
            </div>
            <div className="col-span-4 grid grid-cols-4 grid-rows-4 border-r border-b border-gray-300">
              {quadrantBgs.map((bg, idx) => (
                <div key={idx} className={`relative border-t border-l border-gray-300 ${bg}`}>
                  {cellDots[idx].map((s, dotIdx) => (
                    <div
                      key={s.id}
                      title={s.name}
                      onClick={() => onOpenStakeholder(s.id)}
                      className="absolute rounded-full cursor-pointer border-2 border-white shadow"
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: groupColors[s.group] || '#718096',
                        left: 10 + (dotIdx % 4) * 15,
                        top: 10 + Math.floor(dotIdx / 4) * 15,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-5 text-center text-xs mt-1 text-gray-500">
            <div></div>
            <div className="col-span-4 font-semibold">{xLabel} →</div>
          </div>
        </div>
        <div className="w-full md:w-64">
          <h4 className="font-semibold mb-2 text-gray-700">Legend</h4>
          <div className="space-y-1">
            {groups.map((g) => (
              <div key={g} className="flex items-center gap-2 px-1.5 py-0.5 rounded-md">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: groupColors[g] || '#718096' }}
                />
                <span className="text-sm text-gray-700">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ACTIVITY_RATING_CLASS: Record<string, string> = {
  Low: 'bg-slate-100 text-slate-700',
  Medium: 'bg-amber-100 text-amber-800',
  High: 'bg-indigo-100 text-indigo-800',
};

function ActivityRatingBadge({ value }: { value: ActivityRating }): JSX.Element | null {
  if (!value) {
    return null;
  }
  return (
    <span
      className={`px-2 py-0.5 text-xs font-medium rounded-full ${ACTIVITY_RATING_CLASS[value]}`}
    >
      {value}
    </span>
  );
}

function ActivitiesTab({
  activities,
  onOpen,
  onDelete,
}: {
  activities: Activity[];
  onOpen: (id: string | null) => void;
  onDelete: (id: string) => void;
}): JSX.Element {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Engagement Activities</h2>
        <button
          type="button"
          onClick={() => onOpen(null)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm"
        >
          Add Activity
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                'Engagement Activities',
                'Inform',
                'Consult',
                'Involve',
                'Collaborate',
                'Empower',
                'Actions',
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((act) => (
              <tr key={act.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {act.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <ActivityRatingBadge value={act.inform} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <ActivityRatingBadge value={act.consult} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <ActivityRatingBadge value={act.involve} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <ActivityRatingBadge value={act.collaborate} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <ActivityRatingBadge value={act.empower} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <IconActionButton onClick={() => onOpen(act.id)} title="Edit activity">
                      <PencilIcon />
                    </IconActionButton>
                    <IconActionButton
                      onClick={() => onDelete(act.id)}
                      title="Delete activity"
                      variant="danger"
                    >
                      <BinIcon />
                    </IconActionButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScaleReferenceTable({
  title,
  levels,
  descriptions,
}: {
  title: string;
  levels: string[];
  descriptions: Record<string, string>;
}): JSX.Element {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <h3 className="font-semibold mb-2 text-gray-800">{title}</h3>
      <table className="w-full text-sm text-left">
        <tbody className="divide-y divide-gray-200">
          {levels.map((level) => (
            <tr key={level}>
              <td className="py-2 pr-3 font-medium text-gray-800 align-top whitespace-nowrap">
                {level}
              </td>
              <td className="py-2 text-gray-600">{descriptions[level]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReferenceTab(): JSX.Element {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Reference Data</h2>
        <p className="text-sm text-gray-600">
          Groups, Sub-Groups, Locations and Relationships are shared across the Adoption Engine and
          are now managed from <strong>Project Details</strong>. The commitment and capability
          scales below are fixed and shown here for reference.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScaleReferenceTable
          title="Commitment levels"
          levels={Object.keys(COMMITMENTS_MAP)}
          descriptions={COMMITMENT_DESCRIPTIONS}
        />
        <ScaleReferenceTable
          title="Capability levels"
          levels={Object.keys(CAPABILITIES_MAP)}
          descriptions={CAPABILITY_DESCRIPTIONS}
        />
      </div>
    </div>
  );
}

function GuidanceTab({
  guidanceRead,
  onMarkRead,
}: {
  guidanceRead: boolean;
  onMarkRead: () => void;
}): JSX.Element {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="max-w-none text-gray-700 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Guidance for Using the Stakeholder Analysis Tool
        </h2>

        <h3 className="text-lg font-semibold">Introduction</h3>
        <p>
          Stakeholder analysis is a critical process for identifying individuals or groups who can
          impact or are impacted by a project. This tool helps you systematically analyse your
          stakeholders, devise engagement strategies, and track your progress.
        </p>

        <h3 className="text-lg font-semibold">Core Features: Managing Your Data</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Save to File:</strong> saves your entire analysis (stakeholders, engagement
            logs, reference data) to a single JSON file. Use a descriptive filename that includes
            the date.
          </li>
          <li>
            <strong>Load from File:</strong> loads a previously saved JSON file, replacing any data
            currently in the tool. You will be asked to confirm this, as it cannot be undone.
          </li>
          <li>
            <strong>Clear Data:</strong> resets the tool to a blank state. You will be asked to
            confirm, as this is irreversible.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">Step-by-Step Guide</h3>
        <h4 className="font-semibold">Step 1: Check Your Project (Dashboard Tab)</h4>
        <p>
          Your organisation and project name are shown on the Dashboard, pulled from Project
          Details.
        </p>

        <h4 className="font-semibold">Step 2: Check Your Terms (Reference Data Tab)</h4>
        <p>
          Groups, Sub-Groups, Locations and Relationships are set up once from Project Details and
          shared across the Adoption Engine. The Reference Data tab also shows what each Commitment
          and Capability level means.
        </p>

        <h4 className="font-semibold">Step 3: Add Your Stakeholders (Stakeholders Tab)</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>Interest, Impact, Power &amp; Influence:</strong> the foundation of the analysis
            map - assess each stakeholder from Low to Very High.
          </li>
          <li>
            <strong>Commitment (Current vs Target):</strong> where the stakeholder is now vs where
            you need them to be - the Commitment Gap is calculated automatically.
          </li>
          <li>
            <strong>Capability (Current vs Target):</strong> their current ability to adopt the
            change vs what they will need - the Capability Gap is calculated automatically.
          </li>
          <li>
            Sorting, filtering, editing, duplicating and deleting are all available on the main
            table.
          </li>
        </ul>

        <h4 className="font-semibold">Step 4: Create Your Action Plan (Engagement Plan Tab)</h4>
        <p>
          Log and track communications - select the stakeholder, set an owner, due date and status
          (Planned, In Progress, Completed) for each activity.
        </p>

        <h4 className="font-semibold">
          Step 5: Visualise and Prioritise (Analysis Map &amp; Dashboard)
        </h4>
        <p>
          The Analysis Map plots stakeholders on a grid based on power, influence, interest and
          impact - use the filters to narrow the view. The Dashboard&apos;s doughnut charts let you
          click a segment to drill into the matching stakeholders.
        </p>

        <h3 className="text-lg font-semibold">Good Practice Tips</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Stakeholder analysis is a living process - revisit it regularly as attitudes and
            situations change.
          </li>
          <li>
            Use Save to File / Load from File to share your analysis with team members for a more
            robust view.
          </li>
          <li>
            Focus on the gaps - the Commitment Gap and Capability Gap are your primary indicators
            for where an engagement or training effort is required.
          </li>
        </ul>

        {!guidanceRead ? (
          <div className="pt-2">
            <button
              type="button"
              onClick={onMarkRead}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-md hover:bg-indigo-700 text-sm font-medium"
            >
              I&apos;ve read this - continue
            </button>
          </div>
        ) : (
          <p className="text-sm text-green-700 font-medium">
            ✓ Guidance read - the rest of the tool is unlocked.
          </p>
        )}
      </div>
    </div>
  );
}

export interface StakeholderAnalysisAppProps {
  embedded?: boolean;
  onBack?: () => void;
  trustName?: string;
  projectName?: string;
  teamMembers?: TeamMember[];
  /** Groups/Sub-Groups/Locations/Relationships - now managed centrally on Project Details. */
  referenceLists?: StakeholderReferenceLists;
  components?: AssessmentComponent[];
  objectives?: Record<string, ComponentObjective[]>;
  getEntry?: (componentId: string, lens: string) => DraftEntry;
  onEntryUpdate?: (componentId: string, lens: string, entry: DraftEntry) => void;
  onObjectivesUpdate?: (componentId: string, objectives: ComponentObjective[]) => void;
}

type Tab =
  'guidance' | 'reference' | 'stakeholders' | 'activities' | 'dashboard' | 'engagement' | 'map';

export default function StakeholderAnalysisApp({
  embedded = false,
  onBack,
  trustName = '',
  projectName = '',
  teamMembers = [],
  referenceLists = DEFAULT_STAKEHOLDER_REFERENCE_LISTS,
  components = [],
  getEntry,
  onEntryUpdate,
}: StakeholderAnalysisAppProps = {}): JSX.Element {
  const [state, setState] = useState<StakeholderAnalysisState>(
    () => load<StakeholderAnalysisState>(STORAGE_KEY) || freshState()
  );
  const [activeTab, setActiveTab] = useState<Tab>(() =>
    load<StakeholderAnalysisState>(STORAGE_KEY)?.guidanceRead ? 'dashboard' : 'guidance'
  );
  const [stakeholderModal, setStakeholderModal] = useState<Stakeholder | null>(null);
  const [engagementModal, setEngagementModal] = useState<EngagementLog | null>(null);
  const [activityModal, setActivityModal] = useState<Activity | null>(null);
  const [applyModal, setApplyModal] = useState<EngagementLog | null>(null);
  const canApply = Boolean(getEntry && onEntryUpdate && components.length);

  useEffect(() => {
    save(STORAGE_KEY, state);
  }, [state]);

  const groupColors = useMemo(
    () => assignGroupColors(referenceLists.groups),
    [referenceLists.groups]
  );

  /** Merges the locally-stored reference data (ratings, activity templates) with the project-level
   * lists (groups/sub-groups/locations/relationships, now edited from Project Details) and the fixed
   * commitment/capability scales, into the single shape the modals/tables expect. */
  const effectiveReferenceData: ReferenceData = useMemo(
    () => ({
      ...state.referenceData,
      groups: referenceLists.groups,
      subGroups: referenceLists.subGroups,
      locations: referenceLists.locations,
      relationships: referenceLists.relationships,
      commitments: Object.keys(COMMITMENTS_MAP),
      capabilities: Object.keys(CAPABILITIES_MAP),
    }),
    [state.referenceData, referenceLists]
  );

  const stakeholderMap = useMemo(
    () => Object.fromEntries(state.stakeholders.map((s) => [s.id, s.name])),
    [state.stakeholders]
  );

  const updateState = (updates: Partial<StakeholderAnalysisState>) => {
    setState((current) => ({ ...current, ...updates }));
  };

  // --- Stakeholders ---
  const openStakeholderModal = (id: string | null) => {
    const existing = id ? state.stakeholders.find((s) => s.id === id) : null;
    setStakeholderModal(existing || { id: '', ...EMPTY_STAKEHOLDER });
  };
  const saveStakeholder = (s: Stakeholder) => {
    setState((current) => {
      if (s.id) {
        return {
          ...current,
          stakeholders: current.stakeholders.map((existing) =>
            existing.id === s.id ? s : existing
          ),
        };
      }
      return { ...current, stakeholders: [...current.stakeholders, { ...s, id: createId() }] };
    });
    setStakeholderModal(null);
  };
  const deleteStakeholder = (id: string) => {
    if (
      !window.confirm(
        'Are you sure you want to delete this stakeholder? This will also delete all associated engagement logs.'
      )
    ) {
      return;
    }
    setState((current) => ({
      ...current,
      stakeholders: current.stakeholders.filter((s) => s.id !== id),
      engagementLog: current.engagementLog.filter((log) => log.stakeholderId !== id),
    }));
  };
  const duplicateStakeholder = (id: string) => {
    const original = state.stakeholders.find((s) => s.id === id);
    if (!original) {
      return;
    }
    setState((current) => ({
      ...current,
      stakeholders: [
        ...current.stakeholders,
        { ...original, id: createId(), name: `${original.name} (copy)` },
      ],
    }));
  };

  // --- Engagement log ---
  const openEngagementModal = (id: string | null, preselectedStakeholderId?: string) => {
    const existing = id ? state.engagementLog.find((log) => log.id === id) : null;
    setEngagementModal(
      existing || { id: '', ...EMPTY_ENGAGEMENT, stakeholderId: preselectedStakeholderId || '' }
    );
  };
  const saveEngagementLog = (log: EngagementLog) => {
    setState((current) => {
      if (log.id) {
        return {
          ...current,
          engagementLog: current.engagementLog.map((existing) =>
            existing.id === log.id ? log : existing
          ),
        };
      }
      return {
        ...current,
        engagementLog: [...current.engagementLog, { ...log, id: createId('eng-') }],
      };
    });
    setEngagementModal(null);
  };
  const deleteEngagementLog = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this engagement log?')) {
      return;
    }
    setState((current) => ({
      ...current,
      engagementLog: current.engagementLog.filter((log) => log.id !== id),
    }));
  };

  // --- Activities ---
  const openActivityModal = (id: string | null) => {
    const existing = id ? state.referenceData.engagementActivities.find((a) => a.id === id) : null;
    setActivityModal(existing || { id: '', ...EMPTY_ACTIVITY });
  };
  const saveActivity = (activity: Activity) => {
    setState((current) => {
      const activities = activity.id
        ? current.referenceData.engagementActivities.map((existing) =>
            existing.id === activity.id ? activity : existing
          )
        : [...current.referenceData.engagementActivities, { ...activity, id: createId('act-') }];
      return {
        ...current,
        referenceData: { ...current.referenceData, engagementActivities: activities },
      };
    });
    setActivityModal(null);
  };
  const deleteActivity = (id: string) => {
    if (!window.confirm('Are you sure you want to delete this activity?')) {
      return;
    }
    setState((current) => ({
      ...current,
      referenceData: {
        ...current.referenceData,
        engagementActivities: current.referenceData.engagementActivities.filter((a) => a.id !== id),
      },
    }));
  };

  // --- Sort/filter helpers ---
  const updateSort = (key: string) => {
    setState((current) => ({
      ...current,
      sortConfig: {
        key,
        direction:
          current.sortConfig.key === key && current.sortConfig.direction === 'ascending'
            ? 'descending'
            : 'ascending',
      },
    }));
  };
  const updateFilter = (key: string, value: string) => {
    setState((current) => ({
      ...current,
      filterConfig: { ...current.filterConfig, [key]: value },
    }));
  };
  const updateEngagementSort = (key: string) => {
    setState((current) => ({
      ...current,
      engagementSortConfig: {
        key,
        direction:
          current.engagementSortConfig.key === key &&
          current.engagementSortConfig.direction === 'ascending'
            ? 'descending'
            : 'ascending',
      },
    }));
  };
  const updateEngagementFilter = (key: string, value: string) => {
    setState((current) => ({
      ...current,
      engagementFilterConfig: { ...current.engagementFilterConfig, [key]: value },
    }));
  };

  // --- File operations ---
  const handleSaveToFile = () => {
    const filename = `stakeholder-analysis-${new Date().toISOString().slice(0, 10)}.json`;
    downloadFile(filename, JSON.stringify(state, null, 2), 'application/json');
  };
  const handleLoadFromFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    if (
      !window.confirm(
        'Loading a file will replace all current data. This cannot be undone. Continue?'
      )
    ) {
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(
          String(e.target?.result || '')
        ) as Partial<StakeholderAnalysisState>;
        const fresh = freshState();
        setState({
          ...fresh,
          ...parsed,
          referenceData: { ...fresh.referenceData, ...(parsed.referenceData || {}) },
        });
      } catch (err) {
        console.error('Load error:', err);
        window.alert('Could not load this file. Please check it is a valid export from this tool.');
      } finally {
        event.target.value = '';
      }
    };
    reader.readAsText(file);
  };
  const handleClearData = () => {
    if (
      !window.confirm(
        'This will completely reset the tool to a blank state. This cannot be undone. Continue?'
      )
    ) {
      return;
    }
    setState(freshState());
  };

  const stakeholderHasLogs = stakeholderModal
    ? state.engagementLog.some((log) => log.stakeholderId === stakeholderModal.id)
    : false;

  const tabs: { key: Tab; label: string; gapBefore?: boolean }[] = [
    { key: 'guidance', label: 'Guidance' },
    { key: 'reference', label: 'Reference Data' },
    { key: 'stakeholders', label: 'Stakeholders' },
    { key: 'activities', label: 'Activities' },
    { key: 'dashboard', label: 'Dashboard', gapBefore: true },
    { key: 'engagement', label: 'Engagement Plan' },
    { key: 'map', label: 'Analysis Map' },
  ];

  return (
    <div>
      <header
        className={
          embedded
            ? 'flex flex-wrap items-center justify-between gap-3 pb-4'
            : 'bg-white border-b border-slate-200 shadow-sm px-6 py-4'
        }
      >
        <div>
          {embedded ? (
            <button
              type="button"
              onClick={onBack}
              className="text-sm px-3 py-2 -ml-3 text-slate-600 hover:bg-slate-100 rounded-md font-medium mb-1"
            >
              ← Back
            </button>
          ) : null}
          <h1 className="text-lg font-bold text-slate-800">
            Stakeholder Analysis and Management Tool
          </h1>
          <p className="text-xs text-slate-500">
            Analyse stakeholders and plan engagement activities
          </p>
        </div>
      </header>

      <div className="mb-6 border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            const locked = !state.guidanceRead && tab.key !== 'guidance';
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  if (!locked) {
                    setActiveTab(tab.key);
                  }
                }}
                disabled={locked}
                aria-disabled={locked}
                title={locked ? 'Read the Guidance tab first to unlock' : undefined}
                className={`whitespace-nowrap py-3 px-5 border-b-2 font-medium text-sm flex items-center gap-1.5 ${
                  tab.gapBefore ? 'ml-4' : ''
                } ${
                  locked
                    ? 'border-transparent text-gray-300 cursor-not-allowed'
                    : activeTab === tab.key
                      ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                      : 'border-transparent text-gray-500 hover:text-indigo-600 hover:border-indigo-300'
                }`}
              >
                {locked ? <LockIcon /> : null}
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {activeTab === 'dashboard' ? (
        <DashboardTab
          state={state}
          trustName={trustName}
          projectName={projectName}
          onChartConfigChange={(chartId, key) =>
            updateState({ dashboardChartConfig: { ...state.dashboardChartConfig, [chartId]: key } })
          }
          onOpenStakeholder={(id) => openStakeholderModal(id)}
          onClearData={handleClearData}
          onSaveToFile={handleSaveToFile}
          onLoadFromFile={handleLoadFromFile}
        />
      ) : null}
      {activeTab === 'stakeholders' ? (
        <StakeholdersTab
          state={state}
          onOpen={openStakeholderModal}
          onDuplicate={duplicateStakeholder}
          onDelete={deleteStakeholder}
          onSortChange={updateSort}
          onFilterChange={updateFilter}
          onResetFilters={() =>
            updateState({ filterConfig: {}, sortConfig: { key: 'name', direction: 'ascending' } })
          }
        />
      ) : null}
      {activeTab === 'engagement' ? (
        <EngagementTab
          state={state}
          stakeholderMap={stakeholderMap}
          canApply={canApply}
          onOpen={openEngagementModal}
          onDelete={deleteEngagementLog}
          onApply={setApplyModal}
          onSortChange={updateEngagementSort}
          onFilterChange={updateEngagementFilter}
          onResetFilters={() =>
            updateState({
              engagementFilterConfig: {},
              engagementSortConfig: { key: 'stakeholderId', direction: 'ascending' },
            })
          }
        />
      ) : null}
      {activeTab === 'map' ? (
        <AnalysisMapTab
          state={state}
          groups={referenceLists.groups}
          groupColors={groupColors}
          onFilterChange={(key, value) =>
            updateState({ mapFilterConfig: { ...state.mapFilterConfig, [key]: value } })
          }
          onAxisChange={(axis, value) =>
            updateState({ mapAxisConfig: { ...state.mapAxisConfig, [axis]: value } })
          }
          onResetFilters={() =>
            updateState({
              mapFilterConfig: {
                group: 'All',
                subGroup: 'All',
                location: 'All',
                relationship: 'All',
              },
            })
          }
          onOpenStakeholder={(id) => openStakeholderModal(id)}
        />
      ) : null}
      {activeTab === 'activities' ? (
        <ActivitiesTab
          activities={state.referenceData.engagementActivities}
          onOpen={openActivityModal}
          onDelete={deleteActivity}
        />
      ) : null}
      {activeTab === 'reference' ? <ReferenceTab /> : null}
      {activeTab === 'guidance' ? (
        <GuidanceTab
          guidanceRead={state.guidanceRead}
          onMarkRead={() => updateState({ guidanceRead: true })}
        />
      ) : null}

      {stakeholderModal ? (
        <StakeholderModal
          stakeholder={stakeholderModal}
          referenceData={effectiveReferenceData}
          hasEngagementLogs={stakeholderHasLogs}
          onSave={saveStakeholder}
          onCancel={() => setStakeholderModal(null)}
          onAddEngagement={() => {
            const id = stakeholderModal.id;
            setStakeholderModal(null);
            openEngagementModal(null, id);
          }}
          onViewEngagements={() => {
            setStakeholderModal(null);
            setActiveTab('engagement');
            updateState({ engagementFilterConfig: { stakeholderId: stakeholderModal.name } });
          }}
        />
      ) : null}
      {engagementModal ? (
        <EngagementModal
          log={engagementModal}
          stakeholders={state.stakeholders}
          activities={state.referenceData.engagementActivities}
          teamMembers={teamMembers}
          onSave={saveEngagementLog}
          onCancel={() => setEngagementModal(null)}
        />
      ) : null}
      {activityModal ? (
        <ActivityModal
          activity={activityModal}
          onSave={saveActivity}
          onCancel={() => setActivityModal(null)}
        />
      ) : null}
      {applyModal && getEntry && onEntryUpdate ? (
        <ApplyToProjectModal
          log={applyModal}
          stakeholderName={stakeholderMap[applyModal.stakeholderId] || 'Unknown'}
          components={components}
          teamMembers={teamMembers}
          getEntry={getEntry}
          onConfirm={(componentId, lens, action) => {
            const entry = getEntry(componentId, lens);
            onEntryUpdate(componentId, lens, { ...entry, actions: [...entry.actions, action] });
            setApplyModal(null);
          }}
          onCancel={() => setApplyModal(null)}
        />
      ) : null}
    </div>
  );
}
