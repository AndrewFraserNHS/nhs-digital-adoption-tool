import type { AssessmentComponent } from '@data/components';
import { PREPAREDNESS_ASSESSMENT } from '@data/preparednessAssessment';
import type { DraftEntry } from '@lib/adoptionState';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import PreparednessAssessmentApp from './PreparednessAssessmentApp';

const TEAM_MEMBERS = [{ id: 'm1', name: 'Alex Morgan', role: 'Change Lead' }];

// Low phase-1 targets (2, matching the sample data's max implied score) so answering everything at
// its top option makes phase 1 "ready"; the phase-2 placeholder keeps a high target so it never is,
// which pins the offered skip to exactly phase 2.
const COMPONENTS: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture'],
    phase: 1,
    target: 2,
  },
  {
    id: 'case_for_change',
    label: 'Case for Change',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture'],
    phase: 1,
    target: 2,
  },
  {
    id: 'sponsorship',
    label: 'Senior Sponsorship & Governance',
    lenses: ['Strategic Direction and Leadership', 'People Experience and Culture', 'Planning and Risk'],
    phase: 2,
    target: 5,
  },
];

function goToQuestions() {
  fireEvent.click(screen.getByRole('button', { name: 'Next: Questions' }));
}

/** Answers a question by its 1-based option number using the radio's accessible label text. */
function answerQuestion(nu: number, optionNumber: number) {
  const question = PREPAREDNESS_ASSESSMENT.find((q) => q.nu === nu);
  if (!question) {
    throw new Error(`No question ${nu}`);
  }
  fireEvent.click(screen.getByLabelText(question.answers[optionNumber - 1]));
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

  it('SHOULD show one question at a time with a progress bar, and require an answer before Next', () => {
    // arrange
    render(<PreparednessAssessmentApp embedded />);
    goToQuestions();

    // assert - first question shown with a progress indicator
    expect(screen.getByText('Page 2 of 2')).toBeInTheDocument();
    expect(screen.getByText(`Question 1 of ${PREPAREDNESS_ASSESSMENT.length}`)).toBeInTheDocument();
    expect(screen.getByText(PREPAREDNESS_ASSESSMENT[0].question)).toBeInTheDocument();
    expect(screen.queryByText(PREPAREDNESS_ASSESSMENT[1].question)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();

    // act
    answerQuestion(1, 3);

    // assert
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(screen.getByText(`Question 2 of ${PREPAREDNESS_ASSESSMENT.length}`)).toBeInTheDocument();
  });

  it('SHOULD reach the last question and show a Finish assessment button', () => {
    // arrange
    render(<PreparednessAssessmentApp embedded />);
    goToQuestions();

    // act - answer every question
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 3);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });

    // assert
    expect(
      screen.getByText(`Question ${PREPAREDNESS_ASSESSMENT.length} of ${PREPAREDNESS_ASSESSMENT.length}`)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Finish assessment' })).toBeInTheDocument();
  });

  it('SHOULD open the readiness outcome modal on finishing, and log an audit event either way', () => {
    // arrange
    const onReadinessEvaluated = vi.fn();
    render(
      <PreparednessAssessmentApp embedded components={[]} onReadinessEvaluated={onReadinessEvaluated} />
    );
    goToQuestions();
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 1);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Finish assessment' }));

    // assert - no components passed in, so nothing to skip
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/we'd recommend starting at the beginning/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    expect(onReadinessEvaluated).toHaveBeenCalledWith({ skipToPhase: null, accepted: false });
    expect(screen.getByText('Assessment complete')).toBeInTheDocument();
  });

  it('SHOULD accept a skip offer by updating component scores and marking their actions Skipped', () => {
    // arrange
    const entries: Record<string, Record<string, DraftEntry>> = {
      vision: {
        'Strategic Direction and Leadership': {
          score: 1,
          rationale: '',
          evidence: '',
          actions: [
            { id: 'a1', text: 'Do a thing', owner: '', timescale: '', status: 'Planned' },
            { id: 'a2', text: 'Already done', owner: '', timescale: '', status: 'Completed' },
          ],
        },
        'People Experience and Culture': { score: 1, rationale: '', evidence: '', actions: [] },
      },
      case_for_change: {
        'Strategic Direction and Leadership': { score: 1, rationale: '', evidence: '', actions: [] },
        'People Experience and Culture': { score: 1, rationale: '', evidence: '', actions: [] },
      },
    };
    const getEntry = (componentId: string, lens: string) => entries[componentId][lens];
    const onEntryUpdate = vi.fn();
    const onReadinessEvaluated = vi.fn();

    render(
      <PreparednessAssessmentApp
        embedded
        components={COMPONENTS}
        getEntry={getEntry}
        onEntryUpdate={onEntryUpdate}
        onReadinessEvaluated={onReadinessEvaluated}
      />
    );
    goToQuestions();

    // act - answer every question with the top option (implied score 2, meeting the fixture's
    // phase-1 targets but not the deliberately-high phase-2 one)
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 5);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Finish assessment' }));

    // assert - the modal offers to skip to phase 2
    expect(screen.getByText(/skip straight to Phase 2/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Skip ahead' }));

    // assert - vision's first lens: score raised to its target (2), Planned action Skipped, Completed left alone
    expect(onEntryUpdate).toHaveBeenCalledWith(
      'vision',
      'Strategic Direction and Leadership',
      expect.objectContaining({
        score: 2,
        actions: [
          expect.objectContaining({ id: 'a1', status: 'Skipped' }),
          expect.objectContaining({ id: 'a2', status: 'Completed' }),
        ],
      })
    );
    expect(onReadinessEvaluated).toHaveBeenCalledWith({ skipToPhase: 2, accepted: true });
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
