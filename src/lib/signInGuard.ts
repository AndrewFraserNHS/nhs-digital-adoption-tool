import type { OrgProfile } from '@lib/adoptionState';

export const SIGN_IN_REQUIRED_MESSAGE =
  'Select who you are in Project Profile (You are signed in as) before making changes.';

/** True when two profiles differ only in their team roster - roster edits stay open so someone can add themselves and then sign in. */
export function isTeamRosterOnlyChange(previous: OrgProfile, next: OrgProfile): boolean {
  return (
    JSON.stringify({ ...previous, teamMembers: undefined }) ===
    JSON.stringify({ ...next, teamMembers: undefined })
  );
}

/**
 * Whether a profile edit may go ahead. While the project is still being set up (unconfigured) or
 * a user is signed in, everything is allowed; otherwise only team-roster edits are.
 */
export function canEditProfile(
  previous: OrgProfile,
  next: OrgProfile,
  { signedIn, configured }: { signedIn: boolean; configured: boolean }
): boolean {
  return signedIn || !configured || isTeamRosterOnlyChange(previous, next);
}
