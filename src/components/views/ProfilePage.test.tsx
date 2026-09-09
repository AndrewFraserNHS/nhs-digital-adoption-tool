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
    const onProfileUpdate = vi.fn();
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
        onProfileUpdate={onProfileUpdate}
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
        onProfileUpdate={vi.fn()}
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

  it('SHOULD update phase capability and confidence', () => {
    // arrange
    const onUserSettingsUpdate = vi.fn();
    const onProfileUpdate = vi.fn();
    const orgProfile = initializeStore().orgProfile;

    render(
      <ProfilePage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        userSettings={baseUserSettings}
        onUserSettingsUpdate={onUserSettingsUpdate}
        currentUserId=""
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    const confidenceSelects = screen.getAllByText('Confidence');
    expect(confidenceSelects.length).toBeGreaterThan(0);

    // assert
    expect(screen.getByText('Confidence and Capability by Phase')).toBeTruthy();
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
        onProfileUpdate={vi.fn()}
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
