import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { NextStepsSection } from './NextStepsSection';
import type { NextStep } from '@lib/adoptionMetrics';

const steps: NextStep[] = [
  {
    componentId: 'vision',
    componentLabel: 'Vision',
    phase: 1,
    gapToTarget: 0,
    bragStatus: 'Red',
    bragReason: '1 action is overdue: "Draft vision statement".',
    summary: '1 action pending completion.',
    message: 'Vision: 1 action pending completion.',
    outstandingActions: [
      {
        id: 'action-1',
        text: 'Draft vision statement',
        lens: 'Strategic Direction',
        owner: 'Alex',
        status: 'Planned',
        dueDate: '2020-01-01',
      },
    ],
  },
];

describe('NextStepsSection', () => {
  it('SHOULD render a BRAG badge with a hover reason', () => {
    // arrange + act
    render(
      <NextStepsSection steps={steps} onComponentClick={vi.fn()} onActionView={vi.fn()} />
    );

    // assert
    const badge = screen.getByText('Red');
    expect(badge).toHaveAttribute('title', '1 action is overdue: "Draft vision statement".');
  });

  it('SHOULD show the outstanding actions table without a Timescale column and calls onActionView from View', () => {
    // arrange
    const onActionView = vi.fn();

    // act
    render(
      <NextStepsSection steps={steps} onComponentClick={vi.fn()} onActionView={onActionView} />
    );
    fireEvent.click(screen.getByRole('button', { name: /Show outstanding action/ }));

    // assert
    expect(screen.getByText('Lens')).toBeInTheDocument();
    expect(screen.getByText('Owner')).toBeInTheDocument();
    expect(screen.queryByText('Timescale')).not.toBeInTheDocument();
    expect(screen.getAllByText('View').length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole('button', { name: 'View' }));
    expect(onActionView).toHaveBeenCalledWith('vision', 'Strategic Direction', 'action-1');
  });

  it('SHOULD call onComponentClick WHERE the component name is clicked', () => {
    // arrange
    const onComponentClick = vi.fn();

    // act
    render(
      <NextStepsSection steps={steps} onComponentClick={onComponentClick} onActionView={vi.fn()} />
    );
    fireEvent.click(screen.getByText('Vision'));

    // assert
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD show an empty state WHERE there are no steps', () => {
    // arrange + act
    render(<NextStepsSection steps={[]} onComponentClick={vi.fn()} onActionView={vi.fn()} />);

    // assert
    expect(screen.getByText(/Nothing pending for your current phase/)).toBeInTheDocument();
  });
});
