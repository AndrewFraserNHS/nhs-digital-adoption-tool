import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { WhereAmINowPage } from './WhereAmINowPage';
import type { AssessmentComponent } from '@data/components';
import type { DraftEntry } from '@lib/adoptionState';

const components: AssessmentComponent[] = [
  { id: 'vision', label: 'Vision', lenses: ['Lens A', 'Lens B'], phase: 1, target: 4 },
];

function getEntry(): DraftEntry {
  return { score: 1, justification: '', evidence: '', actions: [] };
}

describe('WhereAmINowPage', () => {
  it('SHOULD suggest the furthest checked phase and apply it on click', () => {
    // arrange
    const onSetManualPhase = vi.fn();
    render(
      <WhereAmINowPage
        components={components}
        getEntry={getEntry}
        effectivePhaseFocus={1}
        phaseFocusMode="auto"
        onComponentClick={vi.fn()}
        onSetManualPhase={onSetManualPhase}
        onResetToAuto={vi.fn()}
      />
    );

    // act - check phase 1 and phase 3 statements
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[2]);

    // assert
    expect(screen.getAllByText(/Phase 3: Development/).length).toBeGreaterThan(0);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Set this as our current phase' }));

    // assert
    expect(onSetManualPhase).toHaveBeenCalledWith(3);
  });

  it('SHOULD offer a reset-to-auto control only WHILE the phase is manually set', () => {
    // arrange
    const onResetToAuto = vi.fn();
    render(
      <WhereAmINowPage
        components={components}
        getEntry={getEntry}
        effectivePhaseFocus={2}
        phaseFocusMode="manual"
        onComponentClick={vi.fn()}
        onSetManualPhase={vi.fn()}
        onResetToAuto={onResetToAuto}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Reset to auto' }));

    // assert
    expect(onResetToAuto).toHaveBeenCalled();
  });
});
