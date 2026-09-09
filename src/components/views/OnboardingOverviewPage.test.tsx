import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ADOPTION_INTRODUCTION_COMPLETE_KEY, OnboardingOverviewPage } from './OnboardingOverviewPage';

describe('OnboardingOverviewPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD require stepping through every step before Get Started unlocks', () => {
    // arrange
    const onGetStarted = vi.fn();
    render(<OnboardingOverviewPage onGetStarted={onGetStarted} />);

    // assert 1 - starts on step 1, later steps locked
    expect(screen.getByRole('heading', { name: 'What is the Adoption Engine?' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /5.*Change Manager/ })).toBeDisabled();

    // act - step through every step
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    }

    // assert 2 - final step reached, Get Started enabled
    expect(screen.getByRole('heading', { name: 'The 6 Key Questions' })).toBeInTheDocument();
    const getStartedButton = screen.getByRole('button', { name: 'Get Started' });
    expect(getStartedButton).not.toBeDisabled();

    // act
    fireEvent.click(getStartedButton);

    // assert 3
    expect(onGetStarted).toHaveBeenCalled();
  });

  it('SHOULD place "What is Change Management?" after the CST step and before "What is a Change Manager?"', () => {
    // arrange
    render(<OnboardingOverviewPage onGetStarted={vi.fn()} />);

    // act - step to index 3 (4th step)
    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    }

    // assert
    expect(screen.getByRole('heading', { name: 'What is Change Management?' })).toBeInTheDocument();

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // assert
    expect(screen.getByRole('heading', { name: 'What is a Change Manager?' })).toBeInTheDocument();
  });

  it('SHOULD skip straight to the unlocked view WHEN the introduction was already completed', () => {
    // arrange
    localStorage.setItem(ADOPTION_INTRODUCTION_COMPLETE_KEY, 'true');

    // act
    render(<OnboardingOverviewPage onGetStarted={vi.fn()} />);

    // assert
    expect(screen.getByRole('heading', { name: 'What is the Adoption Engine?' })).toBeInTheDocument();
    for (const tab of screen.getAllByRole('tab')) {
      expect(tab).not.toBeDisabled();
    }
  });

  it('SHOULD not allow jumping ahead to a step that has not been unlocked yet', () => {
    // arrange
    render(<OnboardingOverviewPage onGetStarted={vi.fn()} />);

    // act - clicking a locked later tab does nothing
    fireEvent.click(screen.getByRole('tab', { name: /5.*Change Manager/ }));

    // assert - still on step 1
    expect(screen.getByRole('heading', { name: 'What is the Adoption Engine?' })).toBeInTheDocument();
  });
});
