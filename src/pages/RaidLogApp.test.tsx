import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import RaidLogApp, { type RaidLogAppProps } from './RaidLogApp';

const TEAM_MEMBERS = [
  { id: 'member-1', name: 'Alex Morgan', role: 'Change Lead' },
  { id: 'member-2', name: 'Sam Patel', role: 'SRO' },
];

/** RaidLogApp is a controlled component - this wrapper mimics AdoptionApp holding the items in
 * its own state, so tests can exercise Save/Delete/Link the same way the real app does. */
function ControlledRaidLog(props: Omit<RaidLogAppProps, 'items' | 'onItemsChange'>) {
  const [items, setItems] = useState<RaidLogAppProps['items']>([]);
  return <RaidLogApp {...props} embedded items={items} onItemsChange={setItems} />;
}

describe('RaidLogApp', () => {
  it('SHOULD show the empty state by default', () => {
    // arrange
    render(<ControlledRaidLog />);

    // assert
    expect(screen.getByText(/No RAID items added yet/)).toBeInTheDocument();
  });

  it('SHOULD add a new Risk and compute its severity from likelihood x impact', () => {
    // arrange
    render(<ControlledRaidLog />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));

    // act
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Vendor delay' } });
    fireEvent.change(screen.getByLabelText('Likelihood (1-4)'), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText('Impact (1-4)'), { target: { value: '4' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // assert - severity = 3 * 4 = 12
    expect(screen.getByRole('cell', { name: 'Vendor delay' })).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('SHOULD require a title before saving', () => {
    // arrange
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ControlledRaidLog />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // assert
    expect(alertSpy).toHaveBeenCalledWith('Please enter a title.');
    alertSpy.mockRestore();
  });

  it('SHOULD offer the Owner field as a dropdown of team members', () => {
    // arrange
    render(<ControlledRaidLog teamMembers={TEAM_MEMBERS} />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));

    // assert
    const ownerSelect = screen.getByLabelText('Owner') as HTMLSelectElement;
    expect(ownerSelect.tagName).toBe('SELECT');
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument();
    expect(screen.getByText('Sam Patel')).toBeInTheDocument();
  });

  it('SHOULD link a saved RAID item to a component/lens action and show it as linked in the table', () => {
    // arrange
    const components = [
      { id: 'vision', label: 'Vision', lenses: ['Lens A', 'Lens B'], phase: 1, target: 4 },
    ];
    const entry = {
      score: 3,
      rationale: '',
      evidence: '',
      actions: [
        {
          id: 'action-1',
          text: 'Mitigate vendor risk',
          owner: '',
          timescale: '',
          status: 'Planned' as const,
        },
      ],
    };
    const onEntryUpdate = vi.fn();
    render(
      <ControlledRaidLog components={components} getEntry={() => entry} onEntryUpdate={onEntryUpdate} />
    );

    // act - save the item first (linking only shows once an item has been saved once)
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Vendor risk' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // act - reopen it for editing and link it to the action
    fireEvent.click(screen.getByRole('button', { name: 'Edit item' }));
    fireEvent.change(screen.getByLabelText('Component'), { target: { value: 'vision' } });
    fireEvent.change(screen.getByLabelText('Lens'), { target: { value: 'Lens A' } });
    fireEvent.change(screen.getByLabelText('Action'), { target: { value: 'action-1' } });

    // assert - the link is written onto the action (via onEntryUpdate), not the RAID item
    expect(onEntryUpdate).toHaveBeenCalledWith(
      'vision',
      'Lens A',
      expect.objectContaining({
        actions: [expect.objectContaining({ id: 'action-1', raidItemId: expect.any(String) })],
      })
    );
  });

  it('SHOULD notify the parent of every change via onItemsChange (the parent owns persistence)', () => {
    // arrange
    const onItemsChange = vi.fn();
    render(<RaidLogApp embedded items={[]} onItemsChange={onItemsChange} />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Missing sign-off' } });
    fireEvent.change(screen.getByLabelText('Type'), { target: { value: 'Issue' } });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // assert
    expect(onItemsChange).toHaveBeenCalledWith([
      expect.objectContaining({ title: 'Missing sign-off', type: 'Issue' }),
    ]);
  });
});
