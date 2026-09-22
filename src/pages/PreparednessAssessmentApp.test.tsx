import { PREPAREDNESS_QUESTIONS } from '@data/preparednessAssessment';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import PreparednessAssessmentApp from './PreparednessAssessmentApp';

const TEAM_MEMBERS = [{ id: 'm1', name: 'Alex Morgan', role: 'Change Lead' }];

function goToQuestions() {
  fireEvent.click(screen.getByRole('button', { name: 'Next: Questions' }));
}

function answerAllScored(pickOption: (max: number) => number) {
  PREPAREDNESS_QUESTIONS.filter((question) => question.kind === 'scale').forEach((question) => {
    const option = pickOption(question.options?.length || 0);
    fireEvent.click(document.getElementById(`prep-q-${question.number}-${option}`) as HTMLElement);
  });
}

describe('PreparednessAssessmentApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show the trust details page first, with the trust name auto-populated', () => {
    // arrange
    render(
      <PreparednessAssessmentApp
        embedded
        trustName="Test Trust"
        region="North West ICB"
        teamMembers={TEAM_MEMBERS}
      />
    );

    // assert
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
    expect(screen.getByText('Test Trust')).toBeInTheDocument();
    expect(screen.getByLabelText('ICB / Region')).toHaveValue('North West ICB');
    expect(screen.getByLabelText('Date completed')).toHaveAttribute('type', 'date');
    const completedBy = screen.getByLabelText('Completed by (name and role)');
    expect(completedBy.tagName).toBe('SELECT');
    expect(screen.getByText('Alex Morgan (Change Lead)')).toBeInTheDocument();
    expect(screen.getByLabelText('Executive sponsor / SRO').tagName).toBe('SELECT');
  });

  it('SHOULD show all 35 numbered questions on page 2, with numbered answers for the scored ones', () => {
    // arrange
    render(<PreparednessAssessmentApp embedded />);

    // act
    goToQuestions();

    // assert
    expect(screen.getByText('Page 2 of 2')).toBeInTheDocument();
    expect(screen.getByText('Q1.')).toBeInTheDocument();
    expect(screen.getByText('Q35.')).toBeInTheDocument();
    expect(screen.getByLabelText('1. No sponsor identified')).toBeInTheDocument();
    expect(
      screen.getByLabelText('4. Sponsor agreed, active, with authority and capacity')
    ).toBeInTheDocument();
    expect(document.getElementById('prep-q-5')?.tagName).toBe('TEXTAREA');
  });

  it('SHOULD withhold the grade until every scored question is answered', () => {
    // arrange
    render(<PreparednessAssessmentApp embedded />);
    goToQuestions();

    // act
    fireEvent.click(document.getElementById('prep-q-1-4') as HTMLElement);

    // assert
    expect(screen.getByText(/Answer all 24 scored questions/)).toBeInTheDocument();
    expect(screen.queryByText(/You are a grade/)).not.toBeInTheDocument();
  });

  it('SHOULD grade a fully top-scored assessment A* and a fully bottom-scored one D, ignoring free text', () => {
    // arrange
    const { unmount } = render(<PreparednessAssessmentApp embedded />);
    goToQuestions();

    // act
    answerAllScored((max) => max);

    // assert
    expect(screen.getByText('You are a grade A* (100%)')).toBeInTheDocument();
    unmount();

    // act - a fresh, bottom-scored assessment
    localStorage.clear();
    render(<PreparednessAssessmentApp embedded />);
    goToQuestions();
    answerAllScored(() => 1);

    // assert - free text left blank makes no difference
    expect(screen.getByText('You are a grade D (0%)')).toBeInTheDocument();
  });

  it('SHOULD ask for a description when Other is chosen on Q33', () => {
    // arrange
    render(<PreparednessAssessmentApp embedded />);
    goToQuestions();
    expect(screen.queryByLabelText('Q33 other - please describe')).not.toBeInTheDocument();

    // act
    fireEvent.click(document.getElementById('prep-q-33-5') as HTMLElement);

    // assert
    expect(screen.getByLabelText('Q33 other - please describe')).toBeInTheDocument();
  });

  it('SHOULD persist answers to localStorage', () => {
    // arrange
    render(<PreparednessAssessmentApp embedded />);
    goToQuestions();

    // act
    fireEvent.click(document.getElementById('prep-q-2-3') as HTMLElement);

    // assert
    const stored = JSON.parse(localStorage.getItem('nhs-avt-preparedness-assessment') || '{}');
    expect(stored.answers['2']).toBe(3);
  });

  it('SHOULD add a new stakeholder as the executive sponsor via the shared stakeholder list', () => {
    // arrange
    const onStakeholdersChange = vi.fn();
    render(
      <PreparednessAssessmentApp
        embedded
        stakeholders={[]}
        departments={['Nursing']}
        onStakeholdersChange={onStakeholdersChange}
      />
    );

    // act
    fireEvent.change(screen.getByLabelText('Executive sponsor / SRO'), {
      target: { value: '__add-new-stakeholder__' },
    });
    fireEvent.change(screen.getByLabelText('New stakeholder name'), {
      target: { value: 'Sam Patel' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add stakeholder' }));

    // assert
    expect(onStakeholdersChange).toHaveBeenCalledWith([
      expect.objectContaining({ name: 'Sam Patel' }),
    ]);
  });
});
