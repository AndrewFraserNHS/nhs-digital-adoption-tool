import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ChangeManagementGuide } from './ChangeManagementGuide';
import { KEY_QUESTIONS } from '@data/key-questions';

describe('ChangeManagementGuide', () => {
  it('renders all 6 key questions with their framework labels', () => {
    render(<ChangeManagementGuide onComponentClick={vi.fn()} />);

    expect(screen.getByText('The 6 Key Questions')).toBeInTheDocument();
    KEY_QUESTIONS.forEach((keyQuestion) => {
      expect(screen.getByText(keyQuestion.question)).toBeInTheDocument();
      expect(screen.getByText(keyQuestion.framework)).toBeInTheDocument();
    });
  });

  it('navigates to the mapped component when a "Go to" button is clicked', () => {
    const onComponentClick = vi.fn();
    render(<ChangeManagementGuide onComponentClick={onComponentClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Go to Vision' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('renders two navigation buttons for a two-component question', () => {
    render(<ChangeManagementGuide onComponentClick={vi.fn()} />);

    expect(screen.getByRole('button', { name: 'Go to Senior Sponsorship & Governance' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to Change Network' })).toBeInTheDocument();
  });

  it('renders toolkit links for a question', () => {
    render(<ChangeManagementGuide onComponentClick={vi.fn()} />);

    expect(screen.getByRole('link', { name: 'Change Vision Template' })).toHaveAttribute(
      'href',
      'https://future.nhs.uk/CMN/view?objectId=37515792'
    );
  });
});
