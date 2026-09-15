import { BinIcon, IconActionButton, PencilIcon } from '@components/common/IconButtons';
import { FilterBar } from '@components/common/FilterBar';
import type { TeamMember } from '@lib/adoptionState';
import { bragBadgeClass, getBragStatus } from '@lib/brag';
import { load, save } from '@lib/storage';
import { JSX, useEffect, useMemo, useState } from 'react';

type RaidType = 'Risk' | 'Assumption' | 'Issue' | 'Dependency';
type RaidStatus = 'Open' | 'In Progress' | 'Closed';
type RatingValue = 1 | 2 | 3 | 4;

interface RaidItem {
  id: string;
  type: RaidType;
  title: string;
  description: string;
  owner: string;
  status: RaidStatus;
  dateRaised: string;
  targetDate: string;
  likelihood?: RatingValue;
  impact?: RatingValue;
  notes: string;
}

type RaidFormState = Omit<RaidItem, 'id'> & { id: string | null };

const STORAGE_KEY = 'nhs-raid-log';

const RAID_TYPES: RaidType[] = ['Risk', 'Assumption', 'Issue', 'Dependency'];
const RAID_STATUSES: RaidStatus[] = ['Open', 'In Progress', 'Closed'];

const TYPE_BADGE_CLASS: Record<RaidType, string> = {
  Risk: 'bg-red-100 text-red-800 border-red-300',
  Assumption: 'bg-blue-100 text-blue-800 border-blue-300',
  Issue: 'bg-amber-100 text-amber-800 border-amber-300',
  Dependency: 'bg-purple-100 text-purple-800 border-purple-300',
};

const STATUS_BADGE_CLASS: Record<RaidStatus, string> = {
  Open: 'bg-slate-100 text-slate-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  Closed: 'bg-green-100 text-green-700',
};

const INITIAL_FORM_STATE: RaidFormState = {
  id: null,
  type: 'Risk',
  title: '',
  description: '',
  owner: '',
  status: 'Open',
  dateRaised: new Date().toISOString().slice(0, 10),
  targetDate: '',
  likelihood: 2,
  impact: 2,
  notes: '',
};

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function riskSeverity(item: RaidItem): number | null {
  if (item.type !== 'Risk' || !item.likelihood || !item.impact) {
    return null;
  }
  return item.likelihood * item.impact;
}

function SeverityBadge({ severity }: { severity: number }): JSX.Element {
  const status = getBragStatus(16 - severity, { blue: 13, green: 9, amber: 5 });
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${bragBadgeClass(status)}`}
    >
      {severity}
    </span>
  );
}

export interface RaidLogAppProps {
  embedded?: boolean;
  onBack?: () => void;
  trustName?: string;
  projectName?: string;
  teamMembers?: TeamMember[];
}

export default function RaidLogApp({
  embedded = false,
  trustName = '',
  projectName = '',
  teamMembers = [],
}: RaidLogAppProps = {}): JSX.Element {
  const [items, setItems] = useState<RaidItem[]>(() => load<RaidItem[]>(STORAGE_KEY) || []);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<RaidFormState>(INITIAL_FORM_STATE);
  const [typeFilter, setTypeFilter] = useState('');
  const [ownerFilter, setOwnerFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    save(STORAGE_KEY, items);
  }, [items]);

  const updateFormData = (updates: Partial<RaidFormState>) =>
    setFormData((current) => ({ ...current, ...updates }));

  const uniqueOwners = useMemo(
    () =>
      Array.from(new Set(items.map((item) => item.owner)))
        .filter(Boolean)
        .sort(),
    [items]
  );

  const filtered = useMemo(() => {
    let result = [...items];
    if (typeFilter) {
      result = result.filter((item) => item.type === typeFilter);
    }
    if (ownerFilter) {
      result = result.filter((item) => item.owner === ownerFilter);
    }
    if (statusFilter) {
      result = result.filter((item) => item.status === statusFilter);
    }
    return result;
  }, [items, typeFilter, ownerFilter, statusFilter]);

  const handleSave = () => {
    if (!formData.title.trim()) {
      window.alert('Please enter a title.');
      return;
    }
    const newItem: RaidItem = { ...formData, id: formData.id || createId() };
    setItems((current) =>
      formData.id
        ? current.map((item) => (item.id === formData.id ? newItem : item))
        : [...current, newItem]
    );
    setFormData(INITIAL_FORM_STATE);
    setShowForm(false);
  };

  const handleEdit = (item: RaidItem) => {
    setFormData({ ...item });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems((current) => current.filter((item) => item.id !== id));
    }
  };

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
          <h1 className="text-lg font-bold text-slate-800">RAID Log</h1>
          <p className="text-xs text-slate-500">
            Risks, Assumptions, Issues and Dependencies
            {trustName || projectName
              ? ` — ${trustName || 'Your Organisation'} / ${projectName || 'Your Project/Programme'}`
              : ''}
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-xl font-semibold text-slate-800">RAID Items</h2>
          <button
            type="button"
            onClick={() => {
              updateFormData(INITIAL_FORM_STATE);
              setFormData(INITIAL_FORM_STATE);
              setShowForm(!showForm);
            }}
            className="rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            {showForm ? 'Cancel' : '+ New Item'}
          </button>
        </div>

        {showForm ? (
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-4">
              {formData.id ? 'Edit Item' : 'New Item'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="raid-type"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Type
                </label>
                <select
                  id="raid-type"
                  value={formData.type}
                  onChange={(event) => updateFormData({ type: event.target.value as RaidType })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                >
                  {RAID_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="raid-title"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Title
                </label>
                <input
                  id="raid-title"
                  type="text"
                  value={formData.title}
                  onChange={(event) => updateFormData({ title: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="raid-owner"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Owner
                </label>
                <select
                  id="raid-owner"
                  value={formData.owner}
                  onChange={(event) => updateFormData({ owner: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                >
                  <option value="">Unassigned</option>
                  {teamMembers.map((member) => (
                    <option key={member.id} value={member.name}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="lg:col-span-3">
                <label
                  htmlFor="raid-description"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="raid-description"
                  value={formData.description}
                  onChange={(event) => updateFormData({ description: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none h-20"
                />
              </div>
              <div>
                <label
                  htmlFor="raid-status"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Status
                </label>
                <select
                  id="raid-status"
                  value={formData.status}
                  onChange={(event) => updateFormData({ status: event.target.value as RaidStatus })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                >
                  {RAID_STATUSES.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="raid-dateRaised"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Date Raised
                </label>
                <input
                  id="raid-dateRaised"
                  type="date"
                  value={formData.dateRaised}
                  onChange={(event) => updateFormData({ dateRaised: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="raid-targetDate"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Target Date
                </label>
                <input
                  id="raid-targetDate"
                  type="date"
                  value={formData.targetDate}
                  onChange={(event) => updateFormData({ targetDate: event.target.value })}
                  className="w-full p-2 border border-slate-300 rounded outline-none"
                />
              </div>
              {formData.type === 'Risk' ? (
                <>
                  <div>
                    <label
                      htmlFor="raid-likelihood"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Likelihood (1-4)
                    </label>
                    <select
                      id="raid-likelihood"
                      value={formData.likelihood}
                      onChange={(event) =>
                        updateFormData({ likelihood: Number(event.target.value) as RatingValue })
                      }
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      {[1, 2, 3, 4].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="raid-impact"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Impact (1-4)
                    </label>
                    <select
                      id="raid-impact"
                      value={formData.impact}
                      onChange={(event) =>
                        updateFormData({ impact: Number(event.target.value) as RatingValue })
                      }
                      className="w-full p-2 border border-slate-300 rounded outline-none"
                    >
                      {[1, 2, 3, 4].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : null}
              <div className="lg:col-span-3">
                <label
                  htmlFor="raid-notes"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Notes
                </label>
                <textarea
                  id="raid-notes"
                  value={formData.notes}
                  onChange={(event) => updateFormData({ notes: event.target.value })}
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
                Save Item
              </button>
            </div>
          </div>
        ) : null}

        <FilterBar
          selects={[
            {
              key: 'type',
              label: 'Filter by type',
              value: typeFilter,
              options: RAID_TYPES,
              onChange: setTypeFilter,
            },
            {
              key: 'owner',
              label: 'Filter by owner',
              value: ownerFilter,
              options: uniqueOwners,
              onChange: setOwnerFilter,
            },
            {
              key: 'status',
              label: 'Filter by status',
              value: statusFilter,
              options: RAID_STATUSES,
              onChange: setStatusFilter,
            },
          ]}
          onReset={() => {
            setTypeFilter('');
            setOwnerFilter('');
            setStatusFilter('');
          }}
        />

        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Target Date</th>
                <th className="px-4 py-3 text-center">Severity</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-slate-500 italic">
                    {items.length === 0
                      ? 'No RAID items added yet. Click "New Item" to begin.'
                      : 'No matching records found.'}
                  </td>
                </tr>
              ) : (
                filtered.map((item) => {
                  const severity = riskSeverity(item);
                  return (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${TYPE_BADGE_CLASS[item.type]}`}
                        >
                          {item.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-slate-800">{item.title}</td>
                      <td className="px-4 py-3 text-slate-600">{item.owner || 'Unassigned'}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_BADGE_CLASS[item.status]}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{item.targetDate}</td>
                      <td className="px-4 py-3 text-center">
                        {severity !== null ? <SeverityBadge severity={severity} /> : null}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <IconActionButton onClick={() => handleEdit(item)} title="Edit item">
                            <PencilIcon />
                          </IconActionButton>
                          <IconActionButton
                            onClick={() => handleDelete(item.id)}
                            title="Delete item"
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
    </div>
  );
}
