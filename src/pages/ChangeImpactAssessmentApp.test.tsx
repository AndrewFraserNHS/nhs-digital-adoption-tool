import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ChangeImpactAssessmentApp from './ChangeImpactAssessmentApp';

describe('ChangeImpactAssessmentApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show the empty state on the Assessments tab by default', () => {
    // arrange
    render(<ChangeImpactAssessmentApp embedded />);

    // assert
    expect(screen.getByText(/No assessments added yet/)).toBeInTheDocument();
  });

  it('SHOULD add a new assessment and compute its change/readiness scores', () => {
    // arrange
    render(<ChangeImpactAssessmentApp embedded />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Assessment' }));

    // act
    fireEvent.change(screen.getByLabelText('Business Function'), {
      target: { value: 'Finance' },
    });
    fireEvent.change(screen.getByPlaceholderText('e.g. Payroll Run'), {
      target: { value: 'Year End Close' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Assessment' }));

    // assert - row appears with default 1/1/1/2/2/2/1/1 scores:
    // change = (1+1+2*1)/16*100 = 25%, readiness = (2+2+2+1+1)/20*100 = 40%
    expect(screen.getByRole('cell', { name: 'Finance' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Year End Close' })).toBeInTheDocument();
    expect(screen.getByText('25%')).toBeInTheDocument();
    expect(screen.getByText('40%')).toBeInTheDocument();
  });

  it('SHOULD require a function and process name before saving', () => {
    // arrange
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ChangeImpactAssessmentApp embedded />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Assessment' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Assessment' }));

    // assert
    expect(alertSpy).toHaveBeenCalledWith(
      'Please enter at least a Business Function and Process Name.'
    );
    alertSpy.mockRestore();
  });

  it('SHOULD load demo data and show it summarised on the Dashboard tab', () => {
    // arrange
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(false);
    render(<ChangeImpactAssessmentApp embedded />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Load Demo Data' }));
    fireEvent.click(screen.getByRole('button', { name: 'Dashboard & Analysis' }));

    // assert
    expect(screen.getByText('16')).toBeInTheDocument();
    confirmSpy.mockRestore();
  });

  it('SHOULD persist assessments to localStorage', () => {
    // arrange
    render(<ChangeImpactAssessmentApp embedded />);
    fireEvent.click(screen.getByRole('button', { name: '+ New Assessment' }));
    fireEvent.change(screen.getByLabelText('Business Function'), {
      target: { value: 'IT & Digital' },
    });
    fireEvent.change(screen.getByPlaceholderText('e.g. Payroll Run'), {
      target: { value: 'Cloud Migration' },
    });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Assessment' }));

    // assert
    const stored = JSON.parse(localStorage.getItem('nhs-change-impact-assessment') || '[]');
    expect(stored).toHaveLength(1);
    expect(stored[0].function).toBe('IT & Digital');
  });
});
