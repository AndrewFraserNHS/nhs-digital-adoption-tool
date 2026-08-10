import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { OnboardingIntro } from './OnboardingIntro';

describe('OnboardingIntro', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<OnboardingIntro open={false} onClose={vi.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('steps through the intro and reaches the final step', () => {
    render(<OnboardingIntro open onClose={vi.fn()} />);

    expect(screen.getByText('What is the Adoption Engine?')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText('What is a CST?')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to dashboard' })).toBeInTheDocument();
  });

  it('calls onClose when skipped', () => {
    const onClose = vi.fn();
    render(<OnboardingIntro open onClose={onClose} />);

    fireEvent.click(screen.getByRole('button', { name: 'Skip' }));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onNavigateToProjectDetails from the final step', () => {
    const onNavigateToProjectDetails = vi.fn();
    render(<OnboardingIntro open onClose={vi.fn()} onNavigateToProjectDetails={onNavigateToProjectDetails} />);

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    fireEvent.click(screen.getByRole('button', { name: 'Set up your project details' }));
    expect(onNavigateToProjectDetails).toHaveBeenCalled();
  });

  it('calls onNavigateToGuide from the final step', () => {
    const onNavigateToGuide = vi.fn();
    render(<OnboardingIntro open onClose={vi.fn()} onNavigateToGuide={onNavigateToGuide} />);

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    fireEvent.click(screen.getByRole('button', { name: 'See the 6 Key Questions' }));
    expect(onNavigateToGuide).toHaveBeenCalled();
  });
});
