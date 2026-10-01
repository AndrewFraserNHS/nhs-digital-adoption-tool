import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProfilePage } from './ProfilePage';
import { initializeStore } from '@lib/adoptionState';

const baseUserSettings = {
  name: 'Jordan',
  themeColor: '#005eb8',
};

describe('ProfilePage', () => {
  it('SHOULD let you pick which team member you are signed in as', () => {
    // arrange
    const onUserSettingsUpdate = vi.fn();
    const onCurrentUserChange = vi.fn();
    const orgProfile = {
      ...initializeStore().orgProfile,
      teamMembers: [
        { id: 'member-1', name: 'Taylor', role: 'Change Lead' },
        { id: 'member-2', name: 'Jordan', role: 'SRO' },
      ],
    };

    render(
      <ProfilePage
        orgProfile={orgProfile}
        userSettings={baseUserSettings}
        onUserSettingsUpdate={onUserSettingsUpdate}
        currentUserId="member-1"
        onCurrentUserChange={onCurrentUserChange}
      />
    );

    // act
    fireEvent.change(screen.getByLabelText('You are signed in as'), {
      target: { value: 'member-2' },
    });

    // assert
    expect(onCurrentUserChange).toHaveBeenLastCalledWith('member-2');
  });

  it('SHOULD prompt to add a team member when the roster is empty', () => {
    // arrange
    const orgProfile = { ...initializeStore().orgProfile, teamMembers: [] };

    render(
      <ProfilePage
        orgProfile={orgProfile}
        userSettings={baseUserSettings}
        onUserSettingsUpdate={vi.fn()}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert
    expect(screen.queryByLabelText('You are signed in as')).not.toBeInTheDocument();
    expect(screen.getByText(/No team members have been added yet/)).toBeInTheDocument();
  });

  it('SHOULD offer a manual progress-update export WHEN a handler is given, and hide it otherwise', () => {
    // arrange
    const onSendProgressUpdate = vi.fn();
    const orgProfile = initializeStore().orgProfile;

    // act 1 - no handler: nothing shown
    const { rerender } = render(
      <ProfilePage
        orgProfile={orgProfile}
        userSettings={baseUserSettings}
        onUserSettingsUpdate={vi.fn()}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert 1
    expect(screen.queryByText('Update anyone on progress')).not.toBeInTheDocument();

    // act 2 - with a handler: button shown and wired up
    rerender(
      <ProfilePage
        orgProfile={orgProfile}
        userSettings={baseUserSettings}
        onUserSettingsUpdate={vi.fn()}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
        onSendProgressUpdate={onSendProgressUpdate}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /Export JSON CST/ }));

    // assert 2
    expect(onSendProgressUpdate).toHaveBeenCalled();
  });

  it('SHOULD show only the first few objectives, expanding to show the rest', () => {
    // arrange
    const orgProfile = initializeStore().orgProfile;
    const objectives = Array.from({ length: 6 }, (_, i) => ({
      id: `obj-${i}`,
      category: 'Phase' as const,
      label: `Objective ${i}`,
      description: `Description ${i}`,
      completed: false,
    }));

    render(
      <ProfilePage
        orgProfile={orgProfile}
        userSettings={baseUserSettings}
        onUserSettingsUpdate={vi.fn()}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
        objectives={objectives}
      />
    );

    // assert 1 - only the first 4 shown by default
    expect(screen.getByText('Objective 0')).toBeInTheDocument();
    expect(screen.getByText('Objective 3')).toBeInTheDocument();
    expect(screen.queryByText('Objective 4')).not.toBeInTheDocument();

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Show 2 more' }));

    // assert 2 - the rest are now visible
    expect(screen.getByText('Objective 4')).toBeInTheDocument();
    expect(screen.getByText('Objective 5')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Show fewer' })).toBeInTheDocument();
  });
});
