import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EvidenceWarningModal } from './EvidenceWarningModal';

describe('EvidenceWarningModal', () => {
  it('SHOULD return the dismissal choice WHERE continuing', () => {
    // arrange
    const onContinue = vi.fn();
    render(<EvidenceWarningModal open onContinue={onContinue} onCancel={vi.fn()} />);

    // act
    fireEvent.click(screen.getByRole('checkbox', { name: /Don't show this message again/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    // assert
    expect(onContinue).toHaveBeenCalledWith(true);
  });

  it('SHOULD notify cancellation without continuing', () => {
    // arrange
    const onCancel = vi.fn();
    const onContinue = vi.fn();
    render(<EvidenceWarningModal open onContinue={onContinue} onCancel={onCancel} />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    // assert
    expect(onCancel).toHaveBeenCalledOnce();
    expect(onContinue).not.toHaveBeenCalled();
  });
});
