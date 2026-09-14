import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import StakeholderAnalysisApp from './StakeholderAnalysisApp';

function addStakeholder(name: string) {
  fireEvent.click(screen.getByRole('button', { name: 'Stakeholders' }));
  fireEvent.click(screen.getByRole('button', { name: 'Add Stakeholder' }));
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: name } });
}

describe('StakeholderAnalysisApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show the Dashboard tab by default with zero stakeholders', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);

    // assert
    expect(screen.getByText('Dashboard Overview')).toBeInTheDocument();
    const totalCard = screen.getByText('Total Stakeholders').closest('div') as HTMLElement;
    expect(totalCard).toHaveTextContent('0');
  });

  it('SHOULD add a stakeholder and show it in the Stakeholders table with a computed mapping', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);
    addStakeholder('Jane Smith');

    // act - power+influence=4+4=8 (>=5), interest+impact=4+4=8 (>=5) => Manage Closely
    fireEvent.change(screen.getByLabelText('Interest'), { target: { value: 'Very High' } });
    fireEvent.change(screen.getByLabelText('Impact'), { target: { value: 'Very High' } });
    fireEvent.change(screen.getByLabelText('Power'), { target: { value: 'Very High' } });
    fireEvent.change(screen.getByLabelText('Influence'), { target: { value: 'Very High' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Stakeholder' }));

    // assert
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getAllByText('Manage Closely').length).toBeGreaterThan(0);
  });

  it('SHOULD require a name before saving a stakeholder', () => {
    // arrange
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<StakeholderAnalysisApp embedded />);
    fireEvent.click(screen.getByRole('button', { name: 'Stakeholders' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add Stakeholder' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Stakeholder' }));

    // assert
    expect(alertSpy).toHaveBeenCalledWith('Please enter a name.');
    alertSpy.mockRestore();
  });

  it('SHOULD compute the commitment gap when current and target commitment are set', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);
    addStakeholder('Alex Chen');

    // act - Resistant (1) -> Supporting (5): gap = 4
    fireEvent.change(screen.getByLabelText('Current Commitment'), { target: { value: 'Resistant' } });
    fireEvent.change(screen.getByLabelText('Target Commitment'), { target: { value: 'Supporting' } });

    // assert - the modal's own "Commitment Gap" label is the last match (table column header is the other)
    const gapLabels = screen.getAllByText('Commitment Gap');
    const gapContainer = gapLabels[gapLabels.length - 1].parentElement as HTMLElement;
    expect(gapContainer).toHaveTextContent('4');
  });

  it('SHOULD switch between tabs', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Guidance' }));

    // assert
    expect(screen.getByText('Guidance for Using the Stakeholder Analysis Tool')).toBeInTheDocument();
  });

  it('SHOULD persist stakeholders to localStorage', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);
    addStakeholder('Priya Nair');

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Stakeholder' }));

    // assert
    const stored = JSON.parse(localStorage.getItem('nhs-stakeholder-analysis') || '{}');
    expect(stored.stakeholders).toHaveLength(1);
    expect(stored.stakeholders[0].name).toBe('Priya Nair');
  });
});
