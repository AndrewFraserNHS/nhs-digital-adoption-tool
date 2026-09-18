import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import BenefitsApp from './BenefitsApp';

describe('BenefitsApp', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('SHOULD show the empty state by default', () => {
    // arrange
    render(<BenefitsApp />);

    // assert
    expect(screen.getByText(/No benefits added yet/)).toBeInTheDocument();
  });

  it('SHOULD auto-generate the next Benefit No. when starting a new benefit', () => {
    // arrange
    render(<BenefitsApp />);

    // act
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));

    // assert
    expect(screen.getByLabelText('Benefit No.')).toHaveValue('BEN-001');
  });

  it('SHOULD require a title before saving', () => {
    // arrange
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BenefitsApp />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // assert
    expect(alertSpy).toHaveBeenCalledWith('Please enter a benefit title.');
    alertSpy.mockRestore();
  });

  it('SHOULD add a new benefit and list it in the register table', () => {
    // arrange
    render(<BenefitsApp />);
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
    render(<BenefitsApp />);
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

  it('SHOULD persist benefits to localStorage', () => {
    // arrange
    render(<BenefitsApp />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Faster triage' },
    });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // assert
    const stored = JSON.parse(window.localStorage.getItem('nhs-benefits-register') || '{}');
    expect(stored.benefits).toHaveLength(1);
    expect(stored.benefits[0].title).toBe('Faster triage');
  });

  it('SHOULD show saved benefits in the Tracker tab with an editable periods grid', () => {
    // arrange
    render(<BenefitsApp />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Benefit' }));
    fireEvent.change(screen.getByLabelText('Benefit Title/Name'), {
      target: { value: 'Shorter length of stay' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Benefit' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Benefits Tracker' }));
    fireEvent.click(screen.getByRole('button', { name: 'Edit tracker periods' }));

    // assert - Y0-Y3 quarterly periods are auto-generated
    expect(screen.getByText('Y0')).toBeInTheDocument();
    expect(screen.getByText('Y3')).toBeInTheDocument();
    expect(screen.getAllByText('Apr-Jun')).toHaveLength(4);
  });
});
