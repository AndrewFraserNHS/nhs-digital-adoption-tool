import { EMPTY_STAKEHOLDER, type Stakeholder } from '@lib/adoptionState';
import { JSX, useMemo, useState } from 'react';

const ADD_NEW_VALUE = '__add-new-stakeholder__';

function createStakeholderId(): string {
  return `sh-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

interface StakeholderPickerProps {
  id: string;
  label: string;
  stakeholders: Stakeholder[];
  departments: string[];
  value: string;
  onChange: (stakeholderId: string) => void;
  onAddStakeholder: (stakeholder: Stakeholder) => void;
}

/** Pick an existing stakeholder, or add a new one (name, role, department) that is saved into the shared stakeholder list. */
export function StakeholderPicker({
  id,
  label,
  stakeholders,
  departments,
  value,
  onChange,
  onAddStakeholder,
}: StakeholderPickerProps): JSX.Element {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');

  const sorted = useMemo(
    () => [...stakeholders].sort((a, b) => a.name.localeCompare(b.name)),
    [stakeholders]
  );

  const reset = () => {
    setAdding(false);
    setName('');
    setRole('');
    setDepartment('');
  };

  const handleAdd = () => {
    if (!name.trim()) {
      window.alert('Please enter a name for the new stakeholder.');
      return;
    }
    const stakeholder: Stakeholder = {
      ...EMPTY_STAKEHOLDER,
      id: createStakeholderId(),
      name: name.trim(),
      role: role.trim(),
      department,
    };
    onAddStakeholder(stakeholder);
    onChange(stakeholder.id);
    reset();
  };

  const inputClass = 'w-full p-2 border border-slate-300 rounded outline-none';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <select
        id={id}
        value={adding ? ADD_NEW_VALUE : value}
        onChange={(event) => {
          if (event.target.value === ADD_NEW_VALUE) {
            setAdding(true);
            return;
          }
          setAdding(false);
          onChange(event.target.value);
        }}
        className={inputClass}
      >
        <option value="">None</option>
        {sorted.map((stakeholder) => (
          <option key={stakeholder.id} value={stakeholder.id}>
            {stakeholder.name}
            {stakeholder.role ? ` — ${stakeholder.role}` : ''}
            {stakeholder.department ? ` (${stakeholder.department})` : ''}
          </option>
        ))}
        <option value={ADD_NEW_VALUE}>+ Add new stakeholder...</option>
      </select>
      {adding ? (
        <div className="mt-2 grid grid-cols-1 gap-2 rounded border border-blue-200 bg-white p-3">
          <div>
            <label htmlFor={`${id}-new-name`} className="block text-xs font-medium text-slate-600 mb-1">
              New stakeholder name
            </label>
            <input
              id={`${id}-new-name`}
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${id}-new-role`} className="block text-xs font-medium text-slate-600 mb-1">
              New stakeholder role
            </label>
            <input
              id={`${id}-new-role`}
              type="text"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor={`${id}-new-department`}
              className="block text-xs font-medium text-slate-600 mb-1"
            >
              New stakeholder department
            </label>
            <select
              id={`${id}-new-department`}
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              className={inputClass}
            >
              <option value="">Please choose</option>
              {departments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-md bg-[#005eb8] px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Add stakeholder
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
