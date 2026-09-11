import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EngineExplainedPage } from './EngineExplainedPage';

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
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument();
  });

  it('SHOULD keep "Get started" disabled until the notional actions are all marked Completed, then enable it and show a celebratory toast', () => {
    // arrange
    const onGetStarted = vi.fn();
    render(<EngineExplainedPage onGetStarted={onGetStarted} onComponentClick={vi.fn()} />);
    for (let i = 0; i < 7; i++) {
      fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    }

    // assert 1 - disabled before the exercise is done
    const getStartedButton = screen.getByRole('button', { name: 'Get started' });
    expect(getStartedButton).toBeDisabled();

    // act - mark every notional action Completed
    const statusSelects = screen.getAllByRole('combobox', { name: /^Status for/ });
    statusSelects.forEach((select) => {
      fireEvent.change(select, { target: { value: 'Completed' } });
    });

    // assert 2 - toast fires and button enables
    expect(screen.getByText(/moved to the next readiness level/)).toBeInTheDocument();
    expect(getStartedButton).not.toBeDisabled();

    // act - click it
    fireEvent.click(getStartedButton);

    // assert 3
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
