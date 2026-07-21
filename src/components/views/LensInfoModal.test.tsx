import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { LensInfoModal } from './LensInfoModal';

describe('LensInfoModal', () => {
  it('returns null for empty or unknown lens names', () => {
    const { container, rerender } = render(<LensInfoModal lensName="" onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();

    rerender(<LensInfoModal lensName="Unknown Lens" onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders known lens content and closes on overlay/cross click', () => {
    const onClose = vi.fn();
    const { container } = render(
      <LensInfoModal
        lensName="Strategic Direction and Leadership"
        onClose={onClose}
      />
    );

    expect(screen.getByText('What Good Looks Like')).toBeInTheDocument();

    const overlay = container.querySelector('#lens-info-modal');
    if (!overlay) {
      throw new Error('Expected modal overlay to exist');
    }

    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});