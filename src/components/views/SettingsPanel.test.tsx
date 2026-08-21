import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SettingsPanel } from './SettingsPanel';

const baseUserSettings = {
  name: 'Jordan',
  preferences: 'Email summaries',
  themeColor: '#005eb8',
};

describe('SettingsPanel', () => {
  it('SHOULD update user settings and triggers example data action', () => {
    // arrange
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

    // act
    fireEvent.change(screen.getByLabelText('Theme Colour'), { target: { value: '#00a499' } });
    fireEvent.click(screen.getByRole('button', { name: 'Example Data' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset Data' }));

    // assert
    expect(onUserSettingsUpdate).toHaveBeenCalled();
    expect(onUserSettingsUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        themeColor: '#00a499',
      })
    );
    expect(onLoadExampleData).toHaveBeenCalled();
    expect(onResetData).toHaveBeenCalled();
  });
});
