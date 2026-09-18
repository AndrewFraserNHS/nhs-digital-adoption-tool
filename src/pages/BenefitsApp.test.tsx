import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { BenefitItem, BenefitTrackerEntry } from '@lib/adoptionState';

import BenefitsApp, { type BenefitsAppProps } from './BenefitsApp';

/** BenefitsApp is a controlled component - this wrapper mimics AdoptionApp holding the benefits
 * and tracker in its own state, so tests can exercise Save/Delete/Expand the same way the real app does. */
function ControlledBenefits(
  props: Omit<
    BenefitsAppProps,
    'benefits' | 'onBenefitsChange' | 'tracker' | 'onTrackerChange'
  >
) {
  const [benefits, setBenefits] = useState<BenefitItem[]>([]);
  const [tracker, setTracker] = useState<Record<string, BenefitTrackerEntry>>({});
  return (
    <BenefitsApp
      {...props}
      embedded
      benefits={benefits}
      onBenefitsChange={setBenefits}
      tracker={tracker}
      onTrackerChange={setTracker}
    />
  );
}

describe('BenefitsApp', () => {
  it('SHOULD show the empty state by default', () => {
    // arrange
    render(<ControlledBenefits />);

    // assert
    expect(screen.getByText(/No benefits added yet/)).toBeInTheDocument();
  });

  it('SHOULD auto-generate the next Benefit No. when starting a new benefit', () => {
    // arrange
    render(<ControlledBenefits />);

    // act
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));

    // assert
    expect(screen.getByLabelText('Benefit No.')).toHaveValue('BEN-001');
  });

  it('SHOULD require a title before saving', () => {
    // arrange
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // assert
    expect(alertSpy).toHaveBeenCalledWith('Please enter a benefit title.');
    alertSpy.mockRestore();
  });

  it('SHOULD add a new benefit and list it in the register table', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));

    // act
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Reduced discharge delays' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // assert
    expect(screen.getByRole('cell', { name: 'Reduced discharge delays' })).toBeInTheDocument();
  });

  it('SHOULD offer a Unit of Measure list that depends on the selected Benefit Type', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));

    // act
    fireEvent.change(screen.getByLabelText('Benefit Type'), {
      target: { value: 'Quality & Safety' },
    });

    // assert
    const unitSelect = screen.getByLabelText('Unit of Measure') as HTMLSelectElement;
    expect(unitSelect.tagName).toBe('SELECT');
    expect(screen.getByText('Compliance rate (%)')).toBeInTheDocument();
  });

  it('SHOULD notify the parent of every change via onBenefitsChange (the parent owns persistence)', () => {
    // arrange
    const onBenefitsChange = vi.fn();
    render(
      <BenefitsApp
        embedded
        benefits={[]}
        onBenefitsChange={onBenefitsChange}
        tracker={{}}
        onTrackerChange={vi.fn()}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Faster triage' },
    });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // assert
    expect(onBenefitsChange).toHaveBeenCalledWith([
      expect.objectContaining({ title: 'Faster triage' }),
    ]);
  });

  it('SHOULD expand a register row to reveal the remaining fields inline', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.change(screen.getByLabelText('Assumptions'), {
      target: { value: 'Staffing levels remain stable' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Expand details' }));

    // assert
    expect(screen.getByText('Staffing levels remain stable')).toBeInTheDocument();
  });

  it('SHOULD expand a tracker row to reveal an editable Y0-Y3 quarterly periods grid', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));
    fireEvent.click(screen.getByRole('button', { name: 'Benefits Tracker' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Expand periods' }));

    // assert - Y0-Y3 quarterly periods are auto-generated
    expect(screen.getByText('Y0')).toBeInTheDocument();
    expect(screen.getByText('Y3')).toBeInTheDocument();
    expect(screen.getAllByText('Apr-Jun')).toHaveLength(4);
  });
});
