import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { LensInfoModal } from './LensInfoModal';

describe('LensInfoModal', () => {
  it('SHOULD return null WHERE empty or unknown lens names', () => {
    // arrange + act 1
    const { container, rerender } = render(<LensInfoModal lensName="" onClose={vi.fn()} />);

    // assert 1
    expect(container.firstChild).toBeNull();

    // act 2
    rerender(<LensInfoModal lensName="Unknown Lens" onClose={vi.fn()} />);

    // assert 2
    expect(container.firstChild).toBeNull();
  });

  it('SHOULD render known lens content and closes WHERE overlay/cross click', () => {
    // arrange 1
    const onClose = vi.fn();

    // act 1
    const { container } = render(
      <LensInfoModal lensName="Strategic Direction and Leadership" onClose={onClose} />
    );

    // assert 1
    expect(screen.getByText('What Good Looks Like')).toBeInTheDocument();

    // arrange 2
    const overlay = container.querySelector('#lens-info-modal');
    if (!overlay) {
      throw new Error('Expected modal overlay to exist');
    }

    // act 2
    fireEvent.click(overlay);

    // assert 2
    expect(onClose).toHaveBeenCalledTimes(1);

    // act 3
    fireEvent.click(screen.getByRole('button'));

    // assert 3
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
