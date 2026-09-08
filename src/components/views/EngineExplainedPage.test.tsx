import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EngineExplainedPage } from './EngineExplainedPage';

describe('EngineExplainedPage', () => {
  it('SHOULD render all 3 pathways collapsed by default', () => {
    // arrange
    render(<EngineExplainedPage onGetStarted={vi.fn()} />);

    // assert
    expect(screen.getByText(/Starting for the First Time/)).toBeInTheDocument();
    expect(screen.getByText(/Piloted and Ready to Scale Up/)).toBeInTheDocument();
    expect(screen.getByText(/Gone Live but Adoption is Patchy/)).toBeInTheDocument();
    expect(screen.queryByText('Phase 1: Pre-Discovery')).not.toBeInTheDocument();
  });

  it('SHOULD expand a pathway to reveal its phases, then a phase to reveal its components', () => {
    // arrange
    render(<EngineExplainedPage onGetStarted={vi.fn()} />);

    // act - expand the first pathway
    fireEvent.click(screen.getByText(/Pathway 1 - Starting for the First Time/));

    // assert 1
    expect(screen.getByText('Phase 1: Pre-Discovery')).toBeInTheDocument();
    expect(screen.queryByText('Vision')).not.toBeInTheDocument();

    // act - expand phase 1
    fireEvent.click(screen.getByText('Phase 1: Pre-Discovery'));

    // assert 2
    expect(screen.getByText('Vision')).toBeInTheDocument();
  });

  it('SHOULD call onGetStarted WHEN the "Get started" button is clicked', () => {
    // arrange
    const onGetStarted = vi.fn();
    render(<EngineExplainedPage onGetStarted={onGetStarted} />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Get started' }));

    // assert
    expect(onGetStarted).toHaveBeenCalled();
  });
});
