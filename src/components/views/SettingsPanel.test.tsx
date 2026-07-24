import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SettingsPanel } from './SettingsPanel';

const baseUserSettings = {
  name: 'Jordan',
  preferences: 'Email summaries',
  themeColor: '#005eb8'
};

const baseOrgProfile = {
  trustName: 'Trust',
  region: 'North',
  trustType: 'Acute',
  projectName: 'Project',
  leadName: 'Lead'
};

describe('SettingsPanel', () => {
  it('propagates trust name updates', () => {
    const onProfileUpdate = vi.fn();

    render(
      <SettingsPanel
        orgProfile={{ ...baseOrgProfile, trustName: 'Initial Trust', projectName: 'Alpha', leadName: 'Alex' }}
        userSettings={baseUserSettings}
        onProfileUpdate={onProfileUpdate}
        onUserSettingsUpdate={vi.fn()}
        onLoadExampleData={vi.fn()}
        onResetData={vi.fn()}
      />
    );

    const textboxes = screen.getAllByRole('textbox');
    fireEvent.change(textboxes[0], { target: { value: 'Updated Trust' } });

    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ trustName: 'Updated Trust' })
    );
  });

  it('propagates project and lead updates', () => {
    const onProfileUpdate = vi.fn();

    render(
      <SettingsPanel
        orgProfile={{ ...baseOrgProfile, region: 'South', projectName: 'Initial Project', leadName: 'Initial Lead' }}
        userSettings={baseUserSettings}
        onProfileUpdate={onProfileUpdate}
        onUserSettingsUpdate={vi.fn()}
        onLoadExampleData={vi.fn()}
        onResetData={vi.fn()}
      />
    );

    const textboxes = screen.getAllByRole('textbox');
    fireEvent.change(textboxes[1], { target: { value: 'Replacement Project' } });
    fireEvent.change(textboxes[2], { target: { value: 'Replacement Lead' } });

    expect(onProfileUpdate).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ projectName: 'Replacement Project' })
    );
    expect(onProfileUpdate).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ leadName: 'Replacement Lead' })
    );
  });

  it('updates user settings and triggers example data action', () => {
    const onUserSettingsUpdate = vi.fn();
    const onLoadExampleData = vi.fn();
    const onResetData = vi.fn();

    render(
      <SettingsPanel
        orgProfile={baseOrgProfile}
        userSettings={baseUserSettings}
        onProfileUpdate={vi.fn()}
        onUserSettingsUpdate={onUserSettingsUpdate}
        onLoadExampleData={onLoadExampleData}
        onResetData={onResetData}
      />
    );

    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Taylor' } });
    fireEvent.change(screen.getByLabelText('Preferences'), { target: { value: 'Dark charts only' } });
    fireEvent.change(screen.getByLabelText('Theme Colour'), { target: { value: '#00a499' } });
    fireEvent.click(screen.getByRole('button', { name: 'Example Data' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset Data' }));

    expect(onUserSettingsUpdate).toHaveBeenCalled();
    expect(onUserSettingsUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        name: 'Taylor',
        preferences: 'Dark charts only',
        themeColor: '#00a499'
      })
    );
    expect(onLoadExampleData).toHaveBeenCalled();
    expect(onResetData).toHaveBeenCalled();
  });
});