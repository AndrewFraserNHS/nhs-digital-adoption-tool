import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MaturityOverview } from './MaturityOverview';

function buildProps() {
  return {
    organisationName: 'Example Trust',
    projectName: 'Digital Programme',
    projectPhase: '2 Solution Design',
    guidanceTarget: 'Default' as const,
    availableGuidanceTargets: ['Default', 'EPR'],
    onOrganisationNameChange: vi.fn(),
    onProjectNameChange: vi.fn(),
    onProjectPhaseChange: vi.fn(),
    onGuidanceTargetChange: vi.fn(),
    overallText: '2.75 - Developing',
    summaryView: 'dueDate' as const,
    onSummaryViewToggle: vi.fn(),
    onSaveClick: vi.fn(),
    onLoadClick: vi.fn(),
    onResetClick: vi.fn(),
    onReportsClick: vi.fn(),
  };
}

describe('MaturityOverview', () => {
  it('renders key project overview details', () => {
    const props = buildProps();
    render(<MaturityOverview {...props} />);

    expect(screen.getByText('Change Maturity Assessment Tool')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Example Trust')).toBeInTheDocument();
    expect(screen.getByText('2.75 - Developing')).toBeInTheDocument();
  });

  it('propagates input and phase changes', () => {
    const props = buildProps();
    render(<MaturityOverview {...props} />);

    fireEvent.change(screen.getByLabelText('Organisation Name'), {
      target: { value: 'Updated Trust' },
    });
    fireEvent.change(screen.getByLabelText('Project Name'), {
      target: { value: 'Updated Project' },
    });
    fireEvent.change(screen.getByLabelText('Project Phase'), {
      target: { value: '3 Development' },
    });
    fireEvent.change(screen.getByLabelText('Guidance Target'), { target: { value: 'EPR' } });

    expect(props.onOrganisationNameChange).toHaveBeenCalledWith('Updated Trust');
    expect(props.onProjectNameChange).toHaveBeenCalledWith('Updated Project');
    expect(props.onProjectPhaseChange).toHaveBeenCalledWith('3 Development');
    expect(props.onGuidanceTargetChange).toHaveBeenCalledWith('EPR');
  });

  it('triggers toolbar and summary toggle actions', () => {
    const props = buildProps();
    render(<MaturityOverview {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Reports' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save As...' }));
    fireEvent.click(screen.getByRole('button', { name: 'Load' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    fireEvent.click(screen.getByRole('button', { name: 'By Status' }));

    expect(props.onReportsClick).toHaveBeenCalled();
    expect(props.onSaveClick).toHaveBeenCalled();
    expect(props.onLoadClick).toHaveBeenCalled();
    expect(props.onResetClick).toHaveBeenCalled();
    expect(props.onSummaryViewToggle).toHaveBeenCalledWith('status');
  });
});
