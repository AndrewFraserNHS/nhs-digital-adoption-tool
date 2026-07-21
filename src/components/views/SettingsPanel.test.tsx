import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SettingsPanel } from './SettingsPanel';

describe('SettingsPanel', () => {
  it('propagates trust name updates', () => {
    const onProfileUpdate = vi.fn();

    render(
      <SettingsPanel
        orgProfile={{
          trustName: 'Initial Trust',
          region: 'North',
          trustType: 'Acute',
          projectName: 'Alpha',
          leadName: 'Alex'
        }}
        onProfileUpdate={onProfileUpdate}
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
        orgProfile={{
          trustName: 'Trust',
          region: 'South',
          trustType: 'Acute',
          projectName: 'Initial Project',
          leadName: 'Initial Lead'
        }}
        onProfileUpdate={onProfileUpdate}
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
});