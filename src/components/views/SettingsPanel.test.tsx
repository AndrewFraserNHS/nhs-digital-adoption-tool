import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SettingsPanel } from './SettingsPanel';

const baseUserSettings = {
  name: 'Jordan',
  preferences: 'Email summaries',
  themeColor: '#005eb8',
};

describe('SettingsPanel', () => {
  it('updates user settings and triggers example data action', () => {
    const onUserSettingsUpdate = vi.fn();
    const onLoadExampleData = vi.fn();
    const onResetData = vi.fn();

    render(
      <SettingsPanel
        userSettings={baseUserSettings}
        onUserSettingsUpdate={onUserSettingsUpdate}
        onLoadExampleData={onLoadExampleData}
        onResetData={onResetData}
      />
    );

    fireEvent.change(screen.getByLabelText('Your Name'), { target: { value: 'Taylor' } });
    fireEvent.change(screen.getByLabelText('Preferences'), {
      target: { value: 'Dark charts only' },
    });
    fireEvent.change(screen.getByLabelText('Theme Colour'), { target: { value: '#00a499' } });
    fireEvent.click(screen.getByRole('button', { name: 'Example Data' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset Data' }));

    expect(onUserSettingsUpdate).toHaveBeenCalled();
    expect(onUserSettingsUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        name: 'Taylor',
        preferences: 'Dark charts only',
        themeColor: '#00a499',
      })
    );
    expect(onLoadExampleData).toHaveBeenCalled();
    expect(onResetData).toHaveBeenCalled();
  });
});
