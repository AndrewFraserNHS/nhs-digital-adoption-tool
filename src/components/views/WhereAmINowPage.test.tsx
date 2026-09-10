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
  it('SHOULD suggest the furthest checked phase and auto-apply it as soon as something is checked', () => {
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

    // assert - applied automatically, no button needed
    expect(screen.getAllByText(/Phase 3: Development/).length).toBeGreaterThan(0);
    expect(
      screen.queryByRole('button', { name: 'Set this as our current phase' })
    ).not.toBeInTheDocument();
    expect(onSetManualPhase).toHaveBeenLastCalledWith(3);
  });

  it('SHOULD show the Vision CTA and hint text', () => {
    // arrange
    const onComponentClick = vi.fn();
    render(
      <WhereAmINowPage
        components={components}
        getEntry={getEntry}
        effectivePhaseFocus={1}
        phaseFocusMode="auto"
        onComponentClick={onComponentClick}
        onSetManualPhase={vi.fn()}
        onResetToAuto={vi.fn()}
      />
    );

    // assert
    expect(screen.getByText(/picking up next at Vision/)).toBeInTheDocument();

    // act
    fireEvent.click(screen.getByRole('button', { name: "Let's check out our Vision component" }));

    // assert
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD link to the next component that has not yet reached full readiness, not always Vision', () => {
    // arrange - Vision is fully ready (every lens at 5), Sponsorship is not
    const mixedComponents: AssessmentComponent[] = [
      { id: 'vision', label: 'Vision', lenses: ['Lens A'], phase: 1, target: 4 },
      { id: 'sponsorship', label: 'Sponsorship', lenses: ['Lens A'], phase: 1, target: 4 },
    ];
    const onComponentClick = vi.fn();
    render(
      <WhereAmINowPage
        components={mixedComponents}
        getEntry={(componentId) => ({
          score: componentId === 'vision' ? 5 : 2,
          justification: '',
          evidence: '',
          actions: [],
        })}
        effectivePhaseFocus={1}
        phaseFocusMode="auto"
        onComponentClick={onComponentClick}
        onSetManualPhase={vi.fn()}
        onResetToAuto={vi.fn()}
      />
    );

    // assert - CTA points at Sponsorship, not Vision
    expect(
      screen.getByRole('button', { name: "Let's check out our Sponsorship component" })
    ).toBeInTheDocument();

    // act
    fireEvent.click(
      screen.getByRole('button', { name: "Let's check out our Sponsorship component" })
    );

    // assert
    expect(onComponentClick).toHaveBeenCalledWith('sponsorship');
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
