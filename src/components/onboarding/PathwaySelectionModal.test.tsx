import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PathwaySelectionModal } from './PathwaySelectionModal';

describe('PathwaySelectionModal', () => {
  it('SHOULD render the three pathways with Pathway 1 in the middle', () => {
    render(
      <PathwaySelectionModal
        open
        initialPathway="pathway-1"
        onContinue={vi.fn()}
      />
    );

    const labels = screen.getAllByRole('radio').map((radio) => radio.parentElement?.textContent);
    expect(labels).toEqual([
      expect.stringContaining('Pathway 2'),
      expect.stringContaining('Pathway 1'),
      expect.stringContaining('Pathway 3'),
    ]);
  });

  it('SHOULD return the selected pathway on continue', () => {
    const onContinue = vi.fn();
    render(
      <PathwaySelectionModal
        open
        initialPathway="pathway-1"
        onContinue={onContinue}
      />
    );

    fireEvent.click(screen.getByRole('radio', { name: /Pathway 3/ }));
    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onContinue).toHaveBeenCalledWith('pathway-3');
  });
});
