import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { EvidenceWarningModal } from './EvidenceWarningModal';

describe('EvidenceWarningModal', () => {
  it('SHOULD return the dismissal choice when continuing', () => {
    const onContinue = vi.fn();
    render(<EvidenceWarningModal open onContinue={onContinue} onCancel={vi.fn()} />);

    fireEvent.click(screen.getByRole('checkbox', { name: /Don't show this message again/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onContinue).toHaveBeenCalledWith(true);
  });

  it('SHOULD notify cancellation without continuing', () => {
    const onCancel = vi.fn();
    const onContinue = vi.fn();
    render(<EvidenceWarningModal open onContinue={onContinue} onCancel={onCancel} />);

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalledOnce();
    expect(onContinue).not.toHaveBeenCalled();
  });
});
