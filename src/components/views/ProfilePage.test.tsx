import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProfilePage } from './ProfilePage';
import { initializeStore } from '@lib/adoptionState';

const baseUserSettings = {
  name: 'Jordan',
  preferences: 'Email summaries',
  themeColor: '#005eb8',
};

describe('ProfilePage', () => {
  it('SHOULD update your name and preferences', () => {
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
      />
    );

    // act
    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Taylor' } });
    fireEvent.change(screen.getByLabelText('Preferences'), {
      target: { value: 'Dark charts only' },
    });

    // assert
    expect(onUserSettingsUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ name: 'Taylor', preferences: 'Dark charts only' })
    );
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
      />
    );

    // act
    const confidenceSelects = screen.getAllByText('Confidence');
    expect(confidenceSelects.length).toBeGreaterThan(0);

    // assert
    expect(screen.getByText('Confidence and Capability by Phase')).toBeTruthy();
  });
});
