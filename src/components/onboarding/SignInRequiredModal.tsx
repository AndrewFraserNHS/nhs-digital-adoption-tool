import { useState } from 'react';
import type { TeamMember } from '@lib/adoptionState';

export interface SignInRequiredModalProps {
  open: boolean;
  teamMembers: TeamMember[];
  currentUserId: string;
  onCurrentUserChange: (id: string) => void;
  onClose: () => void;
  onNavigateToProjectDetails: () => void;
  darkMode?: boolean;
}

export function SignInRequiredModal({
  open,
  teamMembers,
  currentUserId,
  onCurrentUserChange,
  onClose,
  onNavigateToProjectDetails,
  darkMode,
}: SignInRequiredModalProps) {
  const [pendingUserId, setPendingUserId] = useState(currentUserId);

  if (!open) {
    return null;
  }

  const hasTeamMembers = teamMembers.length > 0;

  const handleSignIn = () => {
    if (!pendingUserId) {
      return;
    }
    onCurrentUserChange(pendingUserId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div
        className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} w-full max-w-lg rounded-xl border p-6 shadow-2xl`}
      >
        <h3 className={`text-lg font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
          No one is signed in
        </h3>
        <div className={`mt-3 space-y-2 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          <p>
            Every change recorded in this tool is attributed to whoever is signed in, so the audit
            log can show who did what. Sign in as a team member to continue.
          </p>
          {!hasTeamMembers && (
            <p>No team members have been added yet - add one on the Project Setup page first.</p>
          )}
        </div>

        {hasTeamMembers && (
          <div className="mt-4">
            <label
              htmlFor="sign-in-required-select"
              className={`block text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            >
              Sign in as
            </label>
            <select
              id="sign-in-required-select"
              value={pendingUserId}
              onChange={(event) => setPendingUserId(event.target.value)}
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                darkMode
                  ? 'bg-slate-900 border-slate-600 text-slate-100'
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              <option value="">Not selected</option>
              {teamMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name || 'Unnamed'}
                  {member.role ? ` - ${member.role}` : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              darkMode
                ? 'text-slate-300 hover:bg-slate-700'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Remind me later
          </button>
          <button
            type="button"
            onClick={onNavigateToProjectDetails}
            className={`rounded-md border px-4 py-2 text-sm font-medium ${
              darkMode
                ? 'border-slate-600 text-slate-200 hover:bg-slate-700'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Go to Project Setup
          </button>
          {hasTeamMembers && (
            <button
              type="button"
              onClick={handleSignIn}
              disabled={!pendingUserId}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
