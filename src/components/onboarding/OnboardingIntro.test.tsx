import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { OnboardingIntro } from './OnboardingIntro';

describe('OnboardingIntro', () => {
  it('SHOULD render nothing WHERE closed', () => {
    // arrange + act
    const { container } = render(<OnboardingIntro open={false} onClose={vi.fn()} />);

    // assert
    expect(container).toBeEmptyDOMElement();
  });

  it('SHOULD step through the intro and reach the final step', () => {
    // arrange + act 1
    render(<OnboardingIntro open onClose={vi.fn()} />);

    // assert 1
    expect(screen.getByText('What is the Adoption Engine?')).toBeInTheDocument();

    // act 2
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 2
    expect(screen.getByText('What benefit does this tool give me?')).toBeInTheDocument();

    // act 3
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 3
    expect(screen.getByText('What is a CST?')).toBeInTheDocument();


    // act 4
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert 4
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to dashboard' })).toBeInTheDocument();
  });

  it('SHOULD call onClose WHERE skipped', () => {
    // arrange
    const onClose = vi.fn();

    // act
    render(<OnboardingIntro open onClose={onClose} />);

    // assert
    fireEvent.click(screen.getByRole('button', { name: 'Skip' }));
    expect(onClose).toHaveBeenCalled();
  });

  it('SHOULD onNavigateToProjectDetails WHERE on the final step', () => {
    // arrange
    const onNavigateToProjectDetails = vi.fn();

    // act
    render(
      <OnboardingIntro
        open
        onClose={vi.fn()}
        onNavigateToProjectDetails={onNavigateToProjectDetails}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Set up your CST Personalisation' }));

    // assert
    expect(onNavigateToProjectDetails).toHaveBeenCalled();
  });

  it('calls onNavigateToGuide from the final step', () => {
    // arrange
    const onNavigateToGuide = vi.fn();

    // act
    render(<OnboardingIntro open onClose={vi.fn()} onNavigateToGuide={onNavigateToGuide} />);

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    fireEvent.click(screen.getByRole('button', { name: 'See the 6 Key Questions' }));

    // assert
    expect(onNavigateToGuide).toHaveBeenCalled();
  });
});
