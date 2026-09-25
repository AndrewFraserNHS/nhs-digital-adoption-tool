import { initializeStore } from '@lib/adoptionState';
import { describe, expect, it } from 'vitest';

import { canEditProfile, isTeamRosterOnlyChange } from './signInGuard';

const profile = () => initializeStore({}).orgProfile;

describe('signInGuard', () => {
  it('SHOULD treat a team-roster-only change as such', () => {
    const before = profile();
    const rosterChange = {
      ...before,
      teamMembers: [{ id: 'm1', name: 'Alex', role: 'Lead' }],
    };
    const nameChange = { ...before, trustName: 'Changed Trust' };

    expect(isTeamRosterOnlyChange(before, rosterChange)).toBe(true);
    expect(isTeamRosterOnlyChange(before, nameChange)).toBe(false);
  });

  it('SHOULD allow profile edits WHEN signed in or still unconfigured, and only roster edits otherwise', () => {
    const before = profile();
    const edit = { ...before, trustName: 'Changed Trust' };
    const roster = { ...before, teamMembers: [{ id: 'm1', name: 'Alex', role: 'Lead' }] };

    expect(canEditProfile(before, edit, { signedIn: true, configured: true })).toBe(true);
    expect(canEditProfile(before, edit, { signedIn: false, configured: false })).toBe(true);
    expect(canEditProfile(before, edit, { signedIn: false, configured: true })).toBe(false);
    expect(canEditProfile(before, roster, { signedIn: false, configured: true })).toBe(true);
  });
});
