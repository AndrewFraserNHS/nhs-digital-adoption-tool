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
    fireEvent.click(screen.getByRole('button', { name: 'Progressing Example' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset Data' }));

    // assert
    expect(onUserSettingsUpdate).toHaveBeenCalled();
    expect(onUserSettingsUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        themeColor: '#00a499',
      })
    );
    expect(onLoadExampleData).toHaveBeenCalledWith('amber');
    expect(onResetData).toHaveBeenCalled();
  });

  it('SHOULD load the red and green example profiles', () => {
    // arrange
    const onLoadExampleData = vi.fn();

    render(
      <SettingsPanel
        userSettings={baseUserSettings}
        onUserSettingsUpdate={vi.fn()}
        onLoadExampleData={onLoadExampleData}
        onResetData={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Early Stage Example' }));
    fireEvent.click(screen.getByRole('button', { name: 'Exemplar Example' }));

    // assert
    expect(onLoadExampleData).toHaveBeenCalledWith('red');
    expect(onLoadExampleData).toHaveBeenCalledWith('green');
  });
});
