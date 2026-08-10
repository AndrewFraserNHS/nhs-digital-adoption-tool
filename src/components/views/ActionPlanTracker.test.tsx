import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ActionPlanTracker } from './ActionPlanTracker';
import type { ActionRow } from '@lib/adoptionMetrics';

const actions: ActionRow[] = [
  {
    compId: 'vision',
    component: 'Vision',
    lens: 'Strategic Direction',
    action: {
      id: 'a1',
      text: 'Run clinical workshop',
      owner: 'Alice',
      timescale: 'Q3',
      status: 'In Progress'
    }
  },
  {
    compId: 'benefits',
    component: 'Benefits',
    lens: 'Benefits Management',
    action: {
      id: 'a2',
      text: 'Publish baseline metrics',
      owner: 'Bob',
      timescale: 'Q4',
      status: 'Completed'
    }
  }
];

describe('ActionPlanTracker', () => {
  it('filters rows by selected status', () => {
    render(<ActionPlanTracker actions={actions} onComponentClick={vi.fn()} />);

    const statusSelect = screen
      .getAllByRole('combobox')
      .find((combobox) => within(combobox).queryByRole('option', { name: 'All statuses' }));

    expect(statusSelect).toBeTruthy();
    fireEvent.change(statusSelect as HTMLSelectElement, { target: { value: 'Completed' } });

    expect(screen.getByText('Publish baseline metrics')).toBeInTheDocument();
    expect(screen.queryByText('Run clinical workshop')).not.toBeInTheDocument();
  });

  it('notifies parent when a component link is clicked', () => {
    const onComponentClick = vi.fn();
    render(<ActionPlanTracker actions={actions} onComponentClick={onComponentClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Vision' }));

    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });
});