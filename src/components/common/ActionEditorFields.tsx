import type { JSX } from 'react';
import type { DraftAction, TeamMember } from '@lib/adoptionState';
import { ACTION_TYPES, UNIFIED_ACTION_STATUSES, normalizeActionStatus } from '@lib/actionModel';

const STATUS_OPTIONS = UNIFIED_ACTION_STATUSES.filter(
  (status) => status !== 'Overdue start' && status !== 'Overdue completion'
);

export interface ActionEditorFieldsProps {
  action: DraftAction;
  onChange: (updates: Partial<DraftAction>) => void;
  teamMembers: TeamMember[];
  darkMode?: boolean;
}

/**
 * The core action fields (type, owner, status, dates, notes) shared between the component page's
 * action editor (AssessmentPanel.tsx) and any other tool that needs to create a DraftAction, so
 * the two stay consistent. Description is deliberately NOT included here - the component page
 * renders it separately (with its own sticky positioning); callers that need a description field
 * should render their own above/below this component. Evidence links, outcome linking and
 * component/lens targeting are also not part of this - those are specific to the component
 * page's editor and stay there.
 */
export function ActionEditorFields({
  action,
  onChange,
  teamMembers,
  darkMode = false,
}: ActionEditorFieldsProps): JSX.Element {
  const labelClass = `text-sm ${darkMode ? 'text-slate-100' : 'text-slate-700'}`;
  const inputClass = `w-full rounded-md border px-3 py-2 text-sm ${darkMode ? 'border-slate-600 bg-slate-900 text-slate-100' : 'border-slate-300 bg-white text-slate-900'}`;

  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label className={labelClass}>
          <span className="mb-1 block font-semibold">Action Type</span>
          <select
            value={action.actionType || 'Admin'}
            onChange={(event) =>
              onChange({ actionType: event.target.value as DraftAction['actionType'] })
            }
            className={inputClass}
          >
            {ACTION_TYPES.map((actionType) => (
              <option key={actionType} value={actionType}>
                {actionType}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          <span className="mb-1 block font-semibold">Owner</span>
          <select
            value={action.owner}
            onChange={(event) => onChange({ owner: event.target.value })}
            className={inputClass}
          >
            <option value="">Unassigned</option>
            {teamMembers.map((member) => (
              <option key={member.id} value={member.name}>
                {member.name}
                {member.role ? ` - ${member.role}` : ''}
              </option>
            ))}
            {action.owner && !teamMembers.some((member) => member.name === action.owner) ? (
              <option value={action.owner}>{action.owner} (not on roster)</option>
            ) : null}
          </select>
        </label>
        <label className={labelClass}>
          <span className="mb-1 block font-semibold">Status</span>
          <select
            value={action.status}
            onChange={(event) => {
              const nextStatus = event.target.value as DraftAction['status'];
              if (action.priority === 'must' && normalizeActionStatus(nextStatus) === 'Cancelled') {
                window.alert(
                  "You are trying to mark what we have classified as a MUST action as Cancelled, and it shouldn't be cancelled. Please re-review."
                );
                return;
              }
              onChange({ status: nextStatus });
            }}
            className={inputClass}
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className={labelClass}>
          <span className="mb-1 block font-semibold">Start Date</span>
          <input
            type="date"
            value={action.startDate || ''}
            onChange={(event) => onChange({ startDate: event.target.value })}
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          <span className="mb-1 block font-semibold">End Date</span>
          <input
            type="date"
            value={action.dueDate || ''}
            onChange={(event) => onChange({ dueDate: event.target.value })}
            className={inputClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        <span className="mb-1 block font-semibold">Notes</span>
        <textarea
          value={action.notes || ''}
          onChange={(event) => onChange({ notes: event.target.value })}
          className={`${inputClass} h-20`}
        />
      </label>
    </div>
  );
}
