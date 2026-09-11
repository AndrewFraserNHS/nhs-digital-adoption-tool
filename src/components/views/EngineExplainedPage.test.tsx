import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EngineExplainedPage } from './EngineExplainedPage';

/** Assigns an owner to and marks Completed every row of the notional actions table on the Actions step. */
function completeNotionalExercise() {
  screen.getAllByRole('button', { name: /^Change owner for/ }).forEach((ownerButton) => {
    fireEvent.click(ownerButton);
    const select = screen.getByRole('combobox', { name: /^Owner for/ });
    fireEvent.change(select, { target: { value: 'Alex Morgan' } });
  });
  screen.getAllByRole('combobox', { name: /^Status for/ }).forEach((select) => {
    fireEvent.change(select, { target: { value: 'Completed' } });
  });
}

describe('EngineExplainedPage', () => {
  it('SHOULD start on the pathway-picker step with all 3 pathways as cards', () => {
    // arrange
    render(<EngineExplainedPage onGetStarted={vi.fn()} onComponentClick={vi.fn()} />);

    // assert
    expect(
      screen.getByRole('heading', { name: 'Every programme starts with a pathway' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Starting for the First Time' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Piloted and Ready to Scale Up' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Gone Live but Adoption is Patchy' })
    ).toBeInTheDocument();
  });

  it('SHOULD show more detail about the selected pathway', () => {
    // arrange
    render(<EngineExplainedPage onGetStarted={vi.fn()} onComponentClick={vi.fn()} />);

    // assert 1 - default (Pathway 1) detail shown
    expect(screen.getByText(/For teams starting from scratch/)).toBeInTheDocument();

    // act - switch pathway
    fireEvent.click(screen.getByRole('button', { name: 'Gone Live but Adoption is Patchy' }));

    // assert 2 - detail updates
    expect(screen.getByText(/adoption is patchy or inconsistent/)).toBeInTheDocument();
  });

  it('SHOULD step through Phases, Components, Vision, Lens, Strat Direct, Readiness and Actions in order', () => {
    // arrange
    render(<EngineExplainedPage onGetStarted={vi.fn()} onComponentClick={vi.fn()} />);

    // act 1 - move to Phases
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 1
    expect(
      screen.getByRole('heading', { name: 'Each pathway is broken into the 5 change phases' })
    ).toBeInTheDocument();

    // act 2 - move to Components (generic, expandable, no links)
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 2
    expect(screen.getByRole('heading', { name: 'Change components' })).toBeInTheDocument();

    // act 3 - move to Vision (specific example component)
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 3
    expect(
      screen.getByRole('heading', { name: 'A component is a specific area of change to get right' })
    ).toBeInTheDocument();

    // act 4 - move to Lens
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 4 - every canonical lens is listed, not just one
    expect(
      screen.getByRole('heading', { name: 'A Lens is a different perspective of the same Change Component' })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Strategic Direction and Leadership/).length).toBeGreaterThan(0);
    expect(screen.getByText('Skills and Behaviour')).toBeInTheDocument();

    // act 5 - move to Strat Direct (specific example lens)
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 5
    expect(
      screen.getByRole('heading', { name: 'An example lens on our example component' })
    ).toBeInTheDocument();

    // act 6 - move to Readiness
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 6 - band list plus the two notional example radars
    expect(
      screen.getByRole('heading', {
        name: "Readiness is scored on a scale from 'Not Started', to 'Thriving' for every lens",
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Not Started')).toBeInTheDocument();
    expect(screen.getByText('Thriving')).toBeInTheDocument();
    expect(screen.getByText('At risk example')).toBeInTheDocument();
    expect(screen.getByText('Excelling example')).toBeInTheDocument();

    // act 7 - move to Actions
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 7
    expect(screen.getByRole('heading', { name: 'Actions' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();

    // act 8 - complete the notional exercise, then move to Overview
    completeNotionalExercise();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 8 - the full recap diagram, built from real data
    expect(screen.getByRole('heading', { name: 'The whole engine, one page' })).toBeInTheDocument();
    expect(screen.getByText('Starting for the First Time')).toBeInTheDocument();
    expect(screen.getByText('Pre-Discovery')).toBeInTheDocument();
    expect(screen.getByText('Senior Sponsorship & Governance')).toBeInTheDocument();
    expect(screen.getAllByText('Strategic Direction and Leadership').length).toBeGreaterThan(0);
    expect(screen.getByText('Thriving')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });

  it('SHOULD block leaving the Actions step until every notional action has an owner and is Completed, then unlock Next and Get started with a celebratory toast', () => {
    // arrange
    const onGetStarted = vi.fn();
    render(<EngineExplainedPage onGetStarted={onGetStarted} onComponentClick={vi.fn()} />);
    for (let i = 0; i < 7; i++) {
      fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    }
    expect(screen.getByRole('heading', { name: 'Actions' })).toBeInTheDocument();

    // assert 1 - can't leave the Actions step yet
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();

    // act - mark every action Completed WITHOUT assigning an owner
    screen.getAllByRole('combobox', { name: /^Status for/ }).forEach((select) => {
      fireEvent.change(select, { target: { value: 'Completed' } });
    });

    // assert 2 - still blocked, owners are required too
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
    expect(screen.queryByText(/moved to the next readiness level/)).not.toBeInTheDocument();

    // act - now assign an owner to every row
    screen.getAllByRole('button', { name: /^Change owner for/ }).forEach((ownerButton) => {
      fireEvent.click(ownerButton);
      fireEvent.change(screen.getByRole('combobox', { name: /^Owner for/ }), {
        target: { value: 'Alex Morgan' },
      });
    });

    // assert 3 - toast fires and Next unlocks
    expect(screen.getByText(/moved to the next readiness level/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled();

    // act - move to the final Overview step
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 4 - Get started is enabled there
    const getStartedButton = screen.getByRole('button', { name: 'Get started' });
    expect(getStartedButton).not.toBeDisabled();

    // act - click it
    fireEvent.click(getStartedButton);

    // assert 5
    expect(onGetStarted).toHaveBeenCalled();
  });

  it('SHOULD let the user pick a different pathway before stepping through', () => {
    // arrange
    render(<EngineExplainedPage onGetStarted={vi.fn()} onComponentClick={vi.fn()} />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Piloted and Ready to Scale Up' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert - breadcrumb uses the generic relationship heading
    expect(screen.getByText('Pathway')).toBeInTheDocument();
  });
});
