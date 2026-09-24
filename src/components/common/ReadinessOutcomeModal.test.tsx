import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ReadinessOutcomeModal } from './ReadinessOutcomeModal';

describe('ReadinessOutcomeModal', () => {
  it('SHOULD show readiness level names, not numbers, in each suggested update', () => {
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
        }}
        onApply={vi.fn()}
        onDecline={vi.fn()}
      />
    );

    expect(screen.getByText(/Not Started/)).toHaveTextContent('Not Started → Emerging');
  });

  it('SHOULD offer the pathway switch and report it when applied', () => {
    const onApply = vi.fn();
    render(
      <ReadinessOutcomeModal
        open
        outcome={{ suggestions: [], skipToPhase: null, readyComponentIds: [] }}
        suggestedPathway="pathway-2"
        onApply={onApply}
        onDecline={vi.fn()}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Apply selected' }));

    expect(onApply).toHaveBeenCalledWith([], false, true);
  });
});
