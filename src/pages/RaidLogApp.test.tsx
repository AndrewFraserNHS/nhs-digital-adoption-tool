import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import RaidLogApp from './RaidLogApp';

const TEAM_MEMBERS = [
  { id: 'member-1', name: 'Alex Morgan', role: 'Change Lead' },
  { id: 'member-2', name: 'Sam Patel', role: 'SRO' },
];

describe('RaidLogApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show the empty state by default', () => {
    // arrange
    render(<RaidLogApp embedded />);

    // assert
    expect(screen.getByText(/No RAID items added yet/)).toBeInTheDocument();
  });

  it('SHOULD add a new Risk and compute its severity from likelihood x impact', () => {
    // arrange
    render(<RaidLogApp embedded />);
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
    render(<RaidLogApp embedded />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // assert
    expect(alertSpy).toHaveBeenCalledWith('Please enter a title.');
    alertSpy.mockRestore();
  });

  it('SHOULD offer the Owner field as a dropdown of team members', () => {
    // arrange
    render(<RaidLogApp embedded teamMembers={TEAM_MEMBERS} />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));

    // assert
    const ownerSelect = screen.getByLabelText('Owner') as HTMLSelectElement;
    expect(ownerSelect.tagName).toBe('SELECT');
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument();
    expect(screen.getByText('Sam Patel')).toBeInTheDocument();
  });

  it('SHOULD link a RAID item to a component/lens action and show it as linked in the table', () => {
    // arrange
    const components = [
      { id: 'vision', label: 'Vision', lenses: ['Lens A', 'Lens B'], phase: 1, target: 4 },
    ];
    const entry = {
      score: 3,
      rationale: '',
      evidence: '',
      actions: [
        { id: 'action-1', text: 'Mitigate vendor risk', owner: '', timescale: '', status: 'Planned' as const },
      ],
    };
    render(<RaidLogApp embedded components={components} getEntry={() => entry} />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Vendor risk' } });

    // act
    fireEvent.change(screen.getByLabelText('Component'), { target: { value: 'vision' } });
    fireEvent.change(screen.getByLabelText('Lens'), { target: { value: 'Lens A' } });
    fireEvent.change(screen.getByLabelText('Action'), { target: { value: 'action-1' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // assert
    const stored = JSON.parse(localStorage.getItem('nhs-raid-log') || '[]');
    expect(stored[0].linkedComponentId).toBe('vision');
    expect(stored[0].linkedLens).toBe('Lens A');
    expect(stored[0].linkedActionId).toBe('action-1');
    expect(screen.getByRole('cell', { name: 'Vision' })).toBeInTheDocument();
  });

  it('SHOULD persist RAID items to localStorage', () => {
    // arrange
    render(<RaidLogApp embedded />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Item' }));
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Missing sign-off' } });
    fireEvent.change(screen.getByLabelText('Type'), { target: { value: 'Issue' } });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Item' }));

    // assert
    const stored = JSON.parse(localStorage.getItem('nhs-raid-log') || '[]');
    expect(stored).toHaveLength(1);
    expect(stored[0].title).toBe('Missing sign-off');
    expect(stored[0].type).toBe('Issue');
  });
});
