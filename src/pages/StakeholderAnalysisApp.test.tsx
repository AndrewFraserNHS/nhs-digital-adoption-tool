import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import StakeholderAnalysisApp from './StakeholderAnalysisApp';

function unlockGuidance() {
  fireEvent.click(screen.getByRole('button', { name: "I've read this - continue" }));
}

function addStakeholder(name: string) {
  unlockGuidance();
  fireEvent.click(screen.getByRole('button', { name: 'Stakeholders' }));
  fireEvent.click(screen.getByRole('button', { name: 'Add Stakeholder' }));
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: name } });
}

describe('StakeholderAnalysisApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD show the Guidance tab by default and lock the other tabs until it is read', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);

    // assert - locked
    expect(
      screen.getByText('Guidance for Using the Stakeholder Analysis Tool')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dashboard/ })).toBeDisabled();

    // act
    unlockGuidance();
    fireEvent.click(screen.getByRole('button', { name: 'Dashboard' }));

    // assert - unlocked
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
    unlockGuidance();
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
    fireEvent.change(screen.getByLabelText('Current Commitment'), {
      target: { value: 'Resistant' },
    });
    fireEvent.change(screen.getByLabelText('Target Commitment'), {
      target: { value: 'Supporting' },
    });

    // assert
    const gapContainer = screen.getByText('Commitment Gap').parentElement as HTMLElement;
    expect(gapContainer).toHaveTextContent('4');
  });

  it('SHOULD offer the Owner field as a dropdown of team members on an engagement log', () => {
    // arrange
    render(
      <StakeholderAnalysisApp
        embedded
        teamMembers={[
          { id: 'member-1', name: 'Alex Morgan', role: 'Change Lead' },
          { id: 'member-2', name: 'Sam Patel', role: 'SRO' },
        ]}
      />
    );
    unlockGuidance();
    fireEvent.click(screen.getByRole('button', { name: 'Stakeholders' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add Stakeholder' }));
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jane Smith' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Stakeholder' }));

    fireEvent.click(screen.getByRole('button', { name: 'Engagement Plan' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add Engagement Log' }));

    // assert
    const ownerSelect = screen.getByLabelText('Owner') as HTMLSelectElement;
    expect(ownerSelect.tagName).toBe('SELECT');
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument();
    expect(screen.getByText('Sam Patel')).toBeInTheDocument();
  });

  it('SHOULD switch between tabs once unlocked', () => {
    // arrange
    render(<StakeholderAnalysisApp embedded />);
    unlockGuidance();

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Dashboard' }));

    // assert
    expect(screen.getByText('Dashboard Overview')).toBeInTheDocument();
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

  it('SHOULD copy fields from another stakeholder when editing', () => {
    // arrange - create a source stakeholder with a distinctive group/relationship
    render(<StakeholderAnalysisApp embedded />);
    addStakeholder('Source Person');
    fireEvent.change(screen.getByLabelText('Group'), { target: { value: 'SRO' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Stakeholder' }));

    // act - add a second stakeholder and copy from the first
    fireEvent.click(screen.getByRole('button', { name: 'Add Stakeholder' }));
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Target Person' } });
    const copySelect = screen.getByLabelText(
      'Copy fields from another stakeholder'
    ) as HTMLSelectElement;
    const sourceOptionValue = (
      within(copySelect).getByText('Source Person') as HTMLOptionElement
    ).value;
    fireEvent.change(copySelect, { target: { value: sourceOptionValue } });
    fireEvent.click(screen.getByRole('button', { name: 'Copy' }));

    // assert
    expect((screen.getByLabelText('Group') as HTMLSelectElement).value).toBe('SRO');
  });

  it('SHOULD show the Groups/Sub-Groups/Departments/Relationships lists on the Reference Data tab and link back to Project Details', () => {
    // arrange
    const onGoToProjectDetails = vi.fn();
    render(
      <StakeholderAnalysisApp
        embedded
        onGoToProjectDetails={onGoToProjectDetails}
        referenceLists={{
          groups: ['Finance'],
          subGroups: ['Frontline'],
          departments: ['Ward 1'],
          relationships: ['Customer'],
        }}
      />
    );
    unlockGuidance();

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Reference Data' }));

    // assert
    expect(screen.getByText('Ward 1')).toBeInTheDocument();
    expect(screen.getByText('Finance')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Manage in Project Details →' }));
    expect(onGoToProjectDetails).toHaveBeenCalled();
  });

  it('SHOULD pre-populate the Engagement Plan from real Engagement-type actions and flag ones needing a stakeholder', () => {
    // arrange
    const components = [{ id: 'vision', label: 'Vision', lenses: ['Lens A'], phase: 1, target: 4 }];
    const entry = {
      score: 2,
      rationale: '',
      evidence: '',
      actions: [
        {
          id: 'action-1',
          text: 'Run stakeholder briefing',
          actionType: 'Engagement' as const,
          owner: 'PMO',
          timescale: '',
          status: 'Planned' as const,
        },
      ],
    };
    render(
      <StakeholderAnalysisApp
        embedded
        components={components}
        getEntry={() => entry}
        onEntryUpdate={vi.fn()}
      />
    );
    unlockGuidance();

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Engagement Plan' }));

    // assert - imported row shows, already linked, but needs a stakeholder
    expect(screen.getByText('Run stakeholder briefing')).toBeInTheDocument();
    expect(screen.getByText('Linked')).toBeInTheDocument();
    expect(screen.getByText('Needs stakeholder')).toBeInTheDocument();

    // assert - already linked, so the "Add to project plan" button should not be offered
    expect(screen.queryByTitle('Add to project plan')).not.toBeInTheDocument();
  });

  it('SHOULD read and write the shared project stakeholders (including Role) when they are provided', () => {
    // arrange
    const onStakeholdersChange = vi.fn();
    render(
      <StakeholderAnalysisApp
        embedded
        stakeholders={[]}
        onStakeholdersChange={onStakeholdersChange}
      />
    );
    addStakeholder('Jane Smith');
    fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'Chief Nurse' } });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Save Stakeholder' }));

    // assert - the new stakeholder is handed to the shared store rather than kept locally
    expect(onStakeholdersChange).toHaveBeenCalledWith([
      expect.objectContaining({ name: 'Jane Smith', role: 'Chief Nurse' }),
    ]);
  });

  it('SHOULD migrate stakeholders saved by an earlier version into the shared store once', () => {
    // arrange - legacy local-only data
    localStorage.setItem(
      'nhs-stakeholder-analysis',
      JSON.stringify({ stakeholders: [{ id: 'legacy-1', name: 'Legacy Person' }], guidanceRead: true })
    );
    const onStakeholdersChange = vi.fn();

    // act
    render(
      <StakeholderAnalysisApp
        embedded
        stakeholders={[]}
        onStakeholdersChange={onStakeholdersChange}
      />
    );

    // assert
    expect(onStakeholdersChange).toHaveBeenCalledWith([
      expect.objectContaining({ id: 'legacy-1', name: 'Legacy Person' }),
    ]);
  });
});
