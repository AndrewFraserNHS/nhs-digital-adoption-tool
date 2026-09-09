import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Toast } from './Toast';

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('SHOULD NOT auto-dismiss WHEN no durationMs is given', () => {
    // arrange
    const onDismiss = vi.fn();
    render(<Toast message="Moved to Embedding!" onDismiss={onDismiss} />);

    // act
    vi.advanceTimersByTime(60000);

    // assert
    expect(onDismiss).not.toHaveBeenCalled();
    expect(screen.getByText('Moved to Embedding!')).toBeInTheDocument();
  });

  it('SHOULD auto-dismiss WHEN durationMs is given', () => {
    // arrange
    const onDismiss = vi.fn();
    render(<Toast message="Saved" onDismiss={onDismiss} durationMs={4000} />);

    // act
    vi.advanceTimersByTime(4000);

    // assert
    expect(onDismiss).toHaveBeenCalled();
  });

  it('SHOULD render a confetti burst WHEN celebrate is set', () => {
    // arrange
    render(<Toast message="Moved to Embedding!" onDismiss={vi.fn()} celebrate />);

    // assert
    expect(document.querySelectorAll('[aria-hidden="true"] span').length).toBeGreaterThan(0);
  });
});
