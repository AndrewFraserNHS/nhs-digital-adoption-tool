import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ChangeManagementGuide } from './ChangeManagementGuide';
import { KEY_QUESTIONS } from '@data/key-questions';

function renderGuide(onComponentClick = vi.fn()) {
  return render(<ChangeManagementGuide onComponentClick={onComponentClick} />);
}

describe('ChangeManagementGuide', () => {
  it('SHOULD render all 6 key questions with their framework labels', () => {
    // arrange + act
    renderGuide();

    // assert
    expect(screen.getByText('The 6 Key Questions')).toBeInTheDocument();
    KEY_QUESTIONS.forEach((keyQuestion) => {
      expect(screen.getByText(keyQuestion.question)).toBeInTheDocument();
      expect(screen.getByText(keyQuestion.framework)).toBeInTheDocument();
    });
  });

  it('SHOULD navigate to the mapped component WHERE a "Go to" button is clicked', () => {
    // arrange
    const onComponentClick = vi.fn();

    // act
    renderGuide(onComponentClick);

    // assert
    fireEvent.click(screen.getByRole('button', { name: 'Go to Vision' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD two navigation buttons WHERE a two-component question', () => {
    // arrange + act
    renderGuide();

    // assert
    expect(
      screen.getByRole('button', { name: 'Go to Senior Sponsorship & Governance' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to Change Network' })).toBeInTheDocument();
  });

  it('SHOULD render toolkit links for a question', () => {
    // arrange + act
    renderGuide();

    // assert
    expect(screen.getByRole('link', { name: 'Change Vision Template' })).toHaveAttribute(
      'href',
      'https://future.nhs.uk/CMN/view?objectId=37515792'
    );
  });
});
