import type { AssessmentComponent } from '@data/components';
import { READINESS_REVIEW_REPORT_STORAGE_KEY, type ReadinessReviewReport } from '@data/readinessReview';
import { buildEml } from '@lib/eml';
import { save } from '@lib/storage';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import ReadinessReviewAnalysisApp from './ReadinessReviewAnalysisApp';

const COMPONENTS: AssessmentComponent[] = [
  { id: 'vision', label: 'Vision', lenses: ['Strategic Direction and Leadership'], phase: 1, target: 2 },
];

const REPORT: ReadinessReviewReport = {
  generatedAt: '2026-01-01T00:00:00.000Z',
  trustName: 'Test Trust',
  icbRegion: 'North West ICB',
  completedBy: 'Alex Morgan (Change Lead)',
  dateCompleted: '2026-01-01',
  programmeLead: 'Sam Patel',
  contactEmail: 'sam@example.nhs.uk',
  answers: [
    {
      nu: 1,
      componentId: 'vision',
      componentLabel: 'Vision',
      lens: 'Strategic Direction and Leadership',
      question: 'Q1',
      optionNumber: 5,
      optionText: '5. Top answer',
      impliedScore: 2,
    },
  ],
  outcome: { skipToPhase: 2, readyComponentIds: ['vision'] },
};

describe('ReadinessReviewAnalysisApp', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('SHOULD show an empty state on "My Answers" when no report has been saved', () => {
    render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);

    expect(screen.getByText(/Complete the Readiness Review first/)).toBeInTheDocument();
  });

  it('SHOULD render the saved report under "My Answers"', () => {
    save(READINESS_REVIEW_REPORT_STORAGE_KEY, REPORT);

    render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);

    expect(screen.getByText('Test Trust')).toBeInTheDocument();
    expect(screen.getByText('Q1')).toBeInTheDocument();
    expect(screen.getByText('5. Top answer')).toBeInTheDocument();
  });

  it('SHOULD import an external report, render it, and clear it without ever touching localStorage', async () => {
    render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Import External Answers' }));

    const file = new File([JSON.stringify(REPORT)], 'report.json', { type: 'application/json' });
    const input = screen.getByLabelText(/Import a Readiness Review report/) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => expect(screen.getByText('Test Trust')).toBeInTheDocument());
    expect(window.localStorage.getItem(READINESS_REVIEW_REPORT_STORAGE_KEY)).toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Clear imported report' }));
    expect(screen.queryByText('Test Trust')).not.toBeInTheDocument();
  });

  it('SHOULD reject a file that is not a Readiness Review report', async () => {
    render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);

    fireEvent.click(screen.getByRole('tab', { name: 'Import External Answers' }));

    const file = new File([JSON.stringify({ notAReport: true })], 'bad.json', {
      type: 'application/json',
    });
    const input = screen.getByLabelText(/Import a Readiness Review report/) as HTMLInputElement;
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() =>
      expect(screen.getByText(/does not look like a Readiness Review report/)).toBeInTheDocument()
    );
  });

  it('SHOULD import a report straight from a saved .eml attachment', async () => {
    render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Import External Answers' }));
    const eml = buildEml({
      to: 'a@b.c',
      subject: 'S',
      body: 'B',
      attachments: [
        { filename: 'r.json', contentType: 'application/json', data: JSON.stringify(REPORT) },
      ],
    });

    const input = screen.getByLabelText(/Import a Readiness Review report/) as HTMLInputElement;
    fireEvent.change(input, {
      target: { files: [new File([eml], 'report.eml', { type: 'message/rfc822' })] },
    });

    await waitFor(() => expect(screen.getByText('Test Trust')).toBeInTheDocument());
  });

  it('SHOULD warn about component lenses with no scored answer', () => {
    save(READINESS_REVIEW_REPORT_STORAGE_KEY, REPORT);
    const two: AssessmentComponent[] = [
      ...COMPONENTS,
      { id: 'case', label: 'Case for Change', lenses: ['Strategic Direction and Leadership'], phase: 1, target: 2 },
    ];

    render(<ReadinessReviewAnalysisApp components={two} />);

    expect(screen.getByRole('alert')).toHaveTextContent('Case for Change');
  });

  it('SHOULD hide the implied score column unless a mapping falls outside 0-4', () => {
    save(READINESS_REVIEW_REPORT_STORAGE_KEY, REPORT);
    const { unmount } = render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);
    expect(screen.queryByText('Implied score')).not.toBeInTheDocument();
    unmount();

    save(READINESS_REVIEW_REPORT_STORAGE_KEY, {
      ...REPORT,
      answers: [{ ...REPORT.answers[0], impliedScore: 5 }],
    });
    render(<ReadinessReviewAnalysisApp components={COMPONENTS} />);

    expect(screen.getByText('Implied score')).toBeInTheDocument();
  });
});
