import type { AssessmentComponent } from '@data/components';
import { PREPAREDNESS_ASSESSMENT } from '@data/readinessReview';
import type { DraftEntry } from '@lib/adoptionState';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ReadinessReviewApp from './ReadinessReviewApp';

const TEAM_MEMBERS = [{ id: 'm1', name: 'Alex Morgan', role: 'Change Lead' }];

// Today's questions only ever imply as high as 2 (progress[4], the top answer) - by design, they
// only cover the earliest part of the journey so far. Low phase-1 targets (2) are reachable at
// that top answer, so answering everything at its top option makes phase 1 "ready"; the phase-2
// placeholder's target (5) is above the maximum implied score so it never is, which pins the
// offered skip to exactly phase 2.
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

describe('ReadinessReviewApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show the trust details page first, with the trust name auto-populated', () => {
    // arrange
    render(
      <ReadinessReviewApp
        trustName="Test Trust"
        region="North West ICB"
        teamMembers={TEAM_MEMBERS}
      />
    );

    // assert
    expect(screen.getByText('Step 1 of 2')).toBeInTheDocument();
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
    render(<ReadinessReviewApp />);
    goToQuestions();

    // assert - first question shown with a progress indicator
    expect(screen.getByText('Step 2 of 2')).toBeInTheDocument();
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
    render(<ReadinessReviewApp />);
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
      <ReadinessReviewApp
        trustName="Test Trust"
        components={[]}
        onReadinessEvaluated={onReadinessEvaluated}
      />
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

    // assert - no components passed in, so nothing to suggest or skip
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByText(/Nothing to update yet/)
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));
    expect(onReadinessEvaluated).toHaveBeenCalledWith({
      skipToPhase: null,
      accepted: false,
      updatedCount: 0,
    });
    expect(screen.getByText('Assessment complete')).toBeInTheDocument();
  });

  it('SHOULD download a .eml with the full report JSON genuinely attached when sending', async () => {
    // arrange
    render(<ReadinessReviewApp trustName="Test Trust" components={[]} />);
    goToQuestions();
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 1);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });
<<<<<<< HEAD
    fireEvent.click(screen.getByRole('button', { name: 'Finish assessment' }));
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    const captured: { blob: Blob | null; anchor: HTMLAnchorElement | null } = {
      blob: null,
      anchor: null,
    };
    (URL as unknown as { createObjectURL: (blob: Blob) => string }).createObjectURL = vi.fn(
      () => 'blob:mock'
=======
    expect(mailLink).toHaveAttribute(
      'href',
      'mailto:england.digitaladoptionavt@nhs.net?subject=Test%20Trust%20-%20Assessment%20outcomes'
>>>>>>> 3224e545130f867ffcff922dc5bd21e89de852f8
    );
    (URL as unknown as { revokeObjectURL: (url: string) => void }).revokeObjectURL = vi.fn();
    const createObjectURLSpy = vi
      .spyOn(
        URL as unknown as { createObjectURL: (blob: Blob) => string },
        'createObjectURL'
      )
      .mockImplementation((blob: Blob) => {
        captured.blob = blob;
        return 'blob:mock';
      });
    const revokeObjectURLSpy = vi.spyOn(
      URL as unknown as { revokeObjectURL: (url: string) => void },
      'revokeObjectURL'
    );
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => {});
    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = vi
      .spyOn(document, 'createElement')
      .mockImplementation((tagName: string) => {
        const element = originalCreateElement(tagName);
        if (tagName === 'a') {
          captured.anchor = element as HTMLAnchorElement;
        }
        return element;
      });

    // act
    fireEvent.click(
      screen.getByRole('button', { name: /Now please send across your assessment scores/ })
    );

    // assert - downloads a .eml named for the trust
    expect(captured.anchor?.download).toBe('test-trust-readiness-review.eml');
    expect(clickSpy).toHaveBeenCalled();

    // assert - the .eml is addressed, subject-lined, and carries the report as a real base64 attachment
    const emlText = await captured.blob!.text();
    expect(emlText).toContain('To: england.da@test.net');
    expect(emlText).toContain('Subject: Test Trust - Assessment outcomes');
    expect(emlText).toContain('Content-Disposition: attachment; filename="test-trust-readiness-review.json"');
    const attachmentMatch = emlText.match(
      /Content-Disposition: attachment;[^\r\n]*\r\n\r\n([\s\S]*?)\r\n--/
    );
    const base64Payload = (attachmentMatch?.[1] || '').replace(/\r\n/g, '');
    const binary = atob(base64Payload);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const decodedAttachment = JSON.parse(new TextDecoder().decode(bytes));
    expect(decodedAttachment.trustName).toBe('Test Trust');
    expect(decodedAttachment.answers.length).toBe(PREPAREDNESS_ASSESSMENT.length);

    createObjectURLSpy.mockRestore();
    revokeObjectURLSpy.mockRestore();
    clickSpy.mockRestore();
    createElementSpy.mockRestore();
  });

  const DEFAULT_ENTRY: DraftEntry = { score: 5, rationale: '', evidence: '', actions: [] };

  it('SHOULD apply the phase skip when accepted, without double-applying its own components\' suggestions', () => {
    // arrange - vision/case_for_change lag behind (score 1); everything else already maxed (score 5)
    // so no other suggestions surface and sponsorship (target 5) never counts as ready.
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
    const getEntry = (componentId: string, lens: string) => entries[componentId]?.[lens] || DEFAULT_ENTRY;
    const onEntryUpdate = vi.fn();
    const onReadinessEvaluated = vi.fn();

    render(
      <ReadinessReviewApp
        components={COMPONENTS}
        getEntry={getEntry}
        onEntryUpdate={onEntryUpdate}
        onReadinessEvaluated={onReadinessEvaluated}
      />
    );
    goToQuestions();

    // act - answer every question with the top option
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 5);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Finish assessment' }));

    // assert - the modal offers to skip to phase 2, and lists the vision/case_for_change suggestions
    expect(screen.getByLabelText(/Skip straight to Phase 2/)).toBeInTheDocument();
    expect(screen.getAllByText('Vision').length).toBeGreaterThan(0);

    // act - accept everything as pre-checked
    fireEvent.click(screen.getByRole('button', { name: 'Apply selected' }));

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
    // assert - only the two phase-1 components (4 lenses total) were updated, not sponsorship
    expect(onEntryUpdate).toHaveBeenCalledTimes(4);
    expect(onReadinessEvaluated).toHaveBeenCalledWith({
      skipToPhase: 2,
      accepted: true,
      updatedCount: 2,
    });
  });

  it('SHOULD apply an unchecked-phase-skip scenario as individual suggestions only', () => {
    // arrange - same lagging vision/case_for_change scores, but the user declines the phase skip
    const entries: Record<string, Record<string, DraftEntry>> = {
      vision: {
        'Strategic Direction and Leadership': { score: 1, rationale: '', evidence: '', actions: [] },
        'People Experience and Culture': { score: 1, rationale: '', evidence: '', actions: [] },
      },
      case_for_change: {
        'Strategic Direction and Leadership': { score: 1, rationale: '', evidence: '', actions: [] },
        'People Experience and Culture': { score: 1, rationale: '', evidence: '', actions: [] },
      },
    };
    const getEntry = (componentId: string, lens: string) => entries[componentId]?.[lens] || DEFAULT_ENTRY;
    const onEntryUpdate = vi.fn();
    const onReadinessEvaluated = vi.fn();

    render(
      <ReadinessReviewApp
        components={COMPONENTS}
        getEntry={getEntry}
        onEntryUpdate={onEntryUpdate}
        onReadinessEvaluated={onReadinessEvaluated}
      />
    );
    goToQuestions();
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 5);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Finish assessment' }));

    // act - uncheck only the phase-skip checkbox, keep the individual suggestions checked
    fireEvent.click(screen.getByLabelText(/Skip straight to Phase 2/));
    fireEvent.click(screen.getByRole('button', { name: 'Apply selected' }));

    // assert - vision's first lens gets its own suggested score (2, the top answer's implied
    // score), not the skip's target-based mutation
    expect(onEntryUpdate).toHaveBeenCalledWith(
      'vision',
      'Strategic Direction and Leadership',
      expect.objectContaining({ score: 2 })
    );
    expect(onReadinessEvaluated).toHaveBeenCalledWith(
      expect.objectContaining({ skipToPhase: null, accepted: true })
    );
  });

  it("SHOULD mark a lens's below-threshold actions as Skipped when its own suggestion is applied (declining the phase skip)", () => {
    // arrange - vision's first lens starts at 0 with three actions at readiness levels 0, 1 and 2
    const entries: Record<string, Record<string, DraftEntry>> = {
      vision: {
        'Strategic Direction and Leadership': {
          score: 0,
          rationale: '',
          evidence: '',
          actions: [
            { id: 'below', text: 'Below the new score', owner: '', timescale: '', status: 'Planned', readinessScore: 1 },
            { id: 'at', text: 'At the new score', owner: '', timescale: '', status: 'Planned', readinessScore: 2 },
            {
              id: 'already-completed',
              text: 'Already done',
              owner: '',
              timescale: '',
              status: 'Completed',
              readinessScore: 0,
            },
          ],
        },
        'People Experience and Culture': { score: 0, rationale: '', evidence: '', actions: [] },
      },
      case_for_change: {
        'Strategic Direction and Leadership': { score: 0, rationale: '', evidence: '', actions: [] },
        'People Experience and Culture': { score: 0, rationale: '', evidence: '', actions: [] },
      },
    };
    const getEntry = (componentId: string, lens: string) => entries[componentId]?.[lens] || DEFAULT_ENTRY;
    const onEntryUpdate = vi.fn();

    render(
      <ReadinessReviewApp components={COMPONENTS} getEntry={getEntry} onEntryUpdate={onEntryUpdate} />
    );
    goToQuestions();
    PREPAREDNESS_ASSESSMENT.forEach((question, index) => {
      answerQuestion(question.nu, 5);
      if (index < PREPAREDNESS_ASSESSMENT.length - 1) {
        fireEvent.click(screen.getByRole('button', { name: 'Next' }));
      }
    });
    fireEvent.click(screen.getByRole('button', { name: 'Finish assessment' }));

    // act - decline the phase skip, keep the individual suggestions checked
    fireEvent.click(screen.getByLabelText(/Skip straight to Phase 2/));
    fireEvent.click(screen.getByRole('button', { name: 'Apply selected' }));

    // assert - only the action below the new score (2) is marked Skipped; the one already at that
    // level and the already-Completed one are left alone
    expect(onEntryUpdate).toHaveBeenCalledWith(
      'vision',
      'Strategic Direction and Leadership',
      expect.objectContaining({
        score: 2,
        actions: [
          expect.objectContaining({ id: 'below', status: 'Skipped' }),
          expect.objectContaining({ id: 'at', status: 'Planned' }),
          expect.objectContaining({ id: 'already-completed', status: 'Completed' }),
        ],
      })
    );
  });

  it('SHOULD add a new stakeholder as the executive sponsor via the shared stakeholder list', () => {
    // arrange
    const onStakeholdersChange = vi.fn();
    render(
      <ReadinessReviewApp
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
