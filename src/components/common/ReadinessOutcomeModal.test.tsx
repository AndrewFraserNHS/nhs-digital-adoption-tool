import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ReadinessOutcomeModal } from './ReadinessOutcomeModal';

describe('ReadinessOutcomeModal', () => {
  it('SHOULD show readiness level names, not numbers, in each suggested update', () => {
    // arrange + act
    render(
      <ReadinessOutcomeModal
        open
        outcome={{
          suggestions: [
            {
              componentId: 'vision',
              componentLabel: 'Vision',
              lens: 'Planning and Risk',
              currentScore: 0,
              impliedScore: 1,
            },
          ],
          skipToPhase: null,
          readyComponentIds: [],
          selfAssessedPhase: null,
          behindLenses: [],
        }}
        onApply={vi.fn()}
        onDecline={vi.fn()}
      />
    );

    // assert
    expect(screen.getByText(/Not Started/)).toHaveTextContent('Not Started → Emerging');
  });

  it('SHOULD offer the pathway switch and report it when applied', () => {
    // arrange
    const onApply = vi.fn();
    render(
      <ReadinessOutcomeModal
        open
        outcome={{
          suggestions: [],
          skipToPhase: null,
          readyComponentIds: [],
          selfAssessedPhase: null,
          behindLenses: [],
        }}
        suggestedPathway="pathway-2"
        onApply={onApply}
        onDecline={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Apply selected' }));

    // assert
    expect(onApply).toHaveBeenCalledWith([], false, true);
  });

  it('SHOULD show the self-assessed phase and what is still behind it', () => {
    // arrange + act
    render(
      <ReadinessOutcomeModal
        open
        outcome={{
          suggestions: [],
          skipToPhase: null,
          readyComponentIds: [],
          selfAssessedPhase: 3,
          behindLenses: [{ componentId: 'b1', componentLabel: 'B1', lens: 'Lens' }],
        }}
        onApply={vi.fn()}
        onDecline={vi.fn()}
      />
    );

    // assert
    expect(screen.getByText(/aligned to Phase 3/)).toBeInTheDocument();
    expect(screen.getByText('B1 · Lens')).toBeInTheDocument();
  });
});
