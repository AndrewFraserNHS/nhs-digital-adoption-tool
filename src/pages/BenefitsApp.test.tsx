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

  it('SHOULD show a Variance Trend chip on the collapsed tracker row for each filled-in period', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));
    fireEvent.click(screen.getByRole('button', { name: 'Benefits Tracker' }));

    // assert - nothing filled in yet
    expect(screen.getByText('No data yet')).toBeInTheDocument();

    // act - fill in one period's forecast and actual
    fireEvent.click(screen.getByRole('button', { name: 'Expand periods' }));
    fireEvent.change(screen.getByLabelText('Forecast for Y0 Apr-Jun'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText('Actual for Y0 Apr-Jun'), {
      target: { value: '90' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Collapse periods' }));

    // assert - the collapsed row now shows a trend chip labelled with the date range and % variance
    expect(screen.queryByText('No data yet')).not.toBeInTheDocument();
    expect(screen.getAllByText(/Y0 Apr-Jun/).length).toBeGreaterThan(0);
    expect(screen.getByText('-10%')).toBeInTheDocument();
  });

  const QUARTER_LABELS = ['Apr-Jun', 'Jul-Sep', 'Oct-Dec', 'Jan-Mar'];

  /** Fills every quarter of the given years (0-indexed) with a matching forecast/actual (flat, no variance). */
  function fillYears(years: number[]) {
    years.forEach((year) => {
      QUARTER_LABELS.forEach((label) => {
        fireEvent.change(screen.getByLabelText(`Forecast for Y${year} ${label}`), {
          target: { value: '100' },
        });
        fireEvent.change(screen.getByLabelText(`Actual for Y${year} ${label}`), {
          target: { value: '100' },
        });
      });
    });
  }

  it('SHOULD collapse the first year into one average chip once more than 8 quarters are filled', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));
    fireEvent.click(screen.getByRole('button', { name: 'Benefits Tracker' }));
    fireEvent.click(screen.getByRole('button', { name: 'Expand periods' }));

    // act - fill years 0 and 1 completely (8 quarters), plus one quarter of year 2 (9th value)
    fillYears([0, 1]);
    fireEvent.change(screen.getByLabelText('Forecast for Y2 Apr-Jun'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText('Actual for Y2 Apr-Jun'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Collapse periods' }));

    // assert - year 0 is collapsed to a single average chip; year 1's quarters stay individual
    expect(screen.getByText('Y0 Avg')).toBeInTheDocument();
    expect(screen.queryByText('Y1 Avg')).not.toBeInTheDocument();
    expect(screen.getAllByText(/Y1 /).length).toBe(4);
    expect(screen.getAllByText(/Y2 Apr-Jun/).length).toBeGreaterThan(0);
  });

  it('SHOULD collapse the first two years once more than 12 quarters are filled', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));
    fireEvent.click(screen.getByRole('button', { name: 'Benefits Tracker' }));
    fireEvent.click(screen.getByRole('button', { name: 'Expand periods' }));

    // act - fill years 0, 1 and 2 completely (12 quarters), plus one quarter of year 3 (13th value)
    fillYears([0, 1, 2]);
    fireEvent.change(screen.getByLabelText('Forecast for Y3 Apr-Jun'), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText('Actual for Y3 Apr-Jun'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Collapse periods' }));

    // assert - years 0 and 1 are both collapsed; year 2's quarters stay individual
    expect(screen.getByText('Y0 Avg')).toBeInTheDocument();
    expect(screen.getByText('Y1 Avg')).toBeInTheDocument();
    expect(screen.queryByText('Y2 Avg')).not.toBeInTheDocument();
    expect(screen.getAllByText(/Y2 /).length).toBe(4);
    expect(screen.getAllByText(/Y3 Apr-Jun/).length).toBeGreaterThan(0);
  });

  it('SHOULD show one average chip per year once every quarter across all years is filled in', () => {
    // arrange
    render(<ControlledBenefits />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));
    fireEvent.click(screen.getByRole('button', { name: 'Benefits Tracker' }));
    fireEvent.click(screen.getByRole('button', { name: 'Expand periods' }));

    // act - fill every quarter of every year
    fillYears([0, 1, 2, 3]);
    fireEvent.click(screen.getByRole('button', { name: 'Collapse periods' }));

    // assert - one average chip per year, no individual quarter chips
    expect(screen.getByText('Y0 Avg')).toBeInTheDocument();
    expect(screen.getByText('Y1 Avg')).toBeInTheDocument();
    expect(screen.getByText('Y2 Avg')).toBeInTheDocument();
    expect(screen.getByText('Y3 Avg')).toBeInTheDocument();
    expect(screen.queryByText(/Apr-Jun/)).not.toBeInTheDocument();
  });
});
