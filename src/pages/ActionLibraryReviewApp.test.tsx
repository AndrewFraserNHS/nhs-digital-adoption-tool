import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import ActionLibraryReviewApp from './ActionLibraryReviewApp';

describe('ActionLibraryReviewApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show Pathway 1 default outcomes for Vision and allow adding a new one', () => {
    // arrange
    render(<ActionLibraryReviewApp />);

    // assert 1 - default pathway is Pathway 1, with bundled Vision outcomes
    expect(
      screen.getByDisplayValue('A compelling future state has been defined')
    ).toBeInTheDocument();

    // act - add a new outcome
    fireEvent.click(screen.getByRole('button', { name: '+ Add outcome' }));

    // assert 2
    expect(screen.getByPlaceholderText('Describe the new outcome...')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('SHOULD keep each pathway\'s outcomes/actions separate, each with its own default content', () => {
    // arrange
    render(<ActionLibraryReviewApp />);
    expect(
      screen.getByDisplayValue('A compelling future state has been defined')
    ).toBeInTheDocument();

    // act - switch to Pathway 2
    fireEvent.click(screen.getByRole('button', { name: 'Piloted and Ready to Scale Up' }));

    // assert 1 - Pathway 2 has its own distinct default content, not Pathway 1's
    expect(
      screen.queryByDisplayValue('A compelling future state has been defined')
    ).not.toBeInTheDocument();
    expect(
      screen.getByDisplayValue('The vision has been refined based on pilot learnings')
    ).toBeInTheDocument();

    // act - add an outcome under Pathway 2
    fireEvent.click(screen.getByRole('button', { name: '+ Add outcome' }));
    fireEvent.change(screen.getByPlaceholderText('Describe the new outcome...'), {
      target: { value: 'Pathway 2 specific outcome' },
    });

    // act - switch back to Pathway 1
    fireEvent.click(screen.getByRole('button', { name: 'Starting for the First Time' }));

    // assert 2 - Pathway 1's original content is untouched, Pathway 2's addition isn't shown here
    expect(
      screen.getByDisplayValue('A compelling future state has been defined')
    ).toBeInTheDocument();
    expect(screen.queryByDisplayValue('Pathway 2 specific outcome')).not.toBeInTheDocument();

    // act - switch back to Pathway 2 to confirm the addition persisted
    fireEvent.click(screen.getByRole('button', { name: 'Piloted and Ready to Scale Up' }));
    expect(screen.getByDisplayValue('Pathway 2 specific outcome')).toBeInTheDocument();
  });

  it('SHOULD mark an edited outcome and allow resetting it back to the default', () => {
    // arrange
    render(<ActionLibraryReviewApp />);
    const input = screen.getByDisplayValue('A compelling future state has been defined');

    // act 1
    fireEvent.change(input, { target: { value: 'Edited outcome text' } });

    // assert 1
    expect(screen.getByText('Edited')).toBeInTheDocument();

    // act 2
    const row = screen.getByDisplayValue('Edited outcome text').closest('div') as HTMLElement;
    fireEvent.click(within(row).getByRole('button', { name: 'Reset' }));

    // assert 2
    expect(
      screen.getByDisplayValue('A compelling future state has been defined')
    ).toBeInTheDocument();
  });

  it('SHOULD remove and restore an outcome', () => {
    // arrange
    render(<ActionLibraryReviewApp />);
    const row = screen
      .getByDisplayValue('A compelling future state has been defined')
      .closest('div') as HTMLElement;

    // act 1
    fireEvent.click(within(row).getByRole('button', { name: 'Remove' }));

    // assert 1
    expect(
      screen.queryByDisplayValue('A compelling future state has been defined')
    ).not.toBeInTheDocument();
    expect(screen.getByText('Removed outcomes (1)')).toBeInTheDocument();

    // act 2
    fireEvent.click(screen.getByRole('button', { name: 'Restore' }));

    // assert 2
    expect(
      screen.getByDisplayValue('A compelling future state has been defined')
    ).toBeInTheDocument();
  });

  it('SHOULD show the parsed priority for a reviewed action and allow changing it', () => {
    // arrange
    render(<ActionLibraryReviewApp />);
    const description = screen.getByDisplayValue(
      'Gather information on organisational priorities, programme objectives and expected outcomes to inform vision development.'
    );
    const row = description.closest('div')?.parentElement?.parentElement as HTMLElement;

    // assert 1 - parsed as Must (the "M " prefix is stripped from the visible description)
    const prioritySelect = within(row).getByRole('combobox', { name: 'Priority' }) as HTMLSelectElement;
    expect(prioritySelect.value).toBe('must');
    expect(screen.queryByDisplayValue(/^M /)).not.toBeInTheDocument();

    // act - change it
    fireEvent.change(prioritySelect, { target: { value: 'should' } });

    // assert 2
    expect(prioritySelect.value).toBe('should');
    expect(within(row).getByText('Edited')).toBeInTheDocument();
  });

  it('SHOULD parse a "C " prefix as Could, distinct from Should', () => {
    // arrange
    render(<ActionLibraryReviewApp />);
    const description = screen.getByDisplayValue(
      'Create simple awareness messages explaining that a vision is being developed.'
    );
    const row = description.closest('div')?.parentElement?.parentElement as HTMLElement;

    // assert
    const prioritySelect = within(row).getByRole('combobox', { name: 'Priority' }) as HTMLSelectElement;
    expect(prioritySelect.value).toBe('could');
  });

  it('SHOULD reset the open readiness-level accordion back to Level 0 WHEN switching components', () => {
    // arrange
    render(<ActionLibraryReviewApp />);

    // act - open Level 4 for Vision
    fireEvent.click(screen.getByRole('button', { name: /Level 4/ }));
    expect(screen.getByRole('button', { name: /Level 4/ })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /Level 0/ })).toHaveAttribute('aria-expanded', 'false');

    // act - switch to a different component
    fireEvent.click(screen.getByRole('button', { name: 'Case for Change' }));

    // assert - Level 0 is open again for the new component, not still stuck on Level 4
    expect(screen.getByRole('button', { name: /Level 0/ })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /Level 4/ })).toHaveAttribute('aria-expanded', 'false');
  });

  it('SHOULD show no rework badges now every previously-flagged action has been resolved', () => {
    // arrange
    render(<ActionLibraryReviewApp />);
    fireEvent.click(screen.getByRole('button', { name: 'Change Network' }));
    fireEvent.click(screen.getByRole('button', { name: /Adopted → Thriving/ }));

    // assert
    expect(screen.queryByText('⚠ rework')).not.toBeInTheDocument();
  });
});
