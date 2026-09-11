import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ForceFieldAnalysisApp from './ForceFieldAnalysisApp';
import type { AssessmentComponent } from '@data/components';
import type { ComponentObjective, DraftEntry, TeamMember } from '@lib/adoptionState';

const TEAM_MEMBERS: TeamMember[] = [
  { id: 'member-1', name: 'Alex Morgan', role: 'Change Lead' },
  { id: 'member-2', name: 'Sam Patel', role: 'SRO' },
];

const COMPONENTS: AssessmentComponent[] = [
  { id: 'vision', label: 'Vision', lenses: ['Strategic Direction'], phase: 1, target: 4 },
];

function renderApp(overrides?: {
  onEntryUpdate?: (componentId: string, lens: string, entry: DraftEntry) => void;
  onObjectivesUpdate?: (componentId: string, objectives: ComponentObjective[]) => void;
}) {
  const getEntry = vi.fn(
    (): DraftEntry => ({ score: 2, justification: '', evidence: '', actions: [] })
  );
  const onEntryUpdate = overrides?.onEntryUpdate || vi.fn();
  const onObjectivesUpdate = overrides?.onObjectivesUpdate || vi.fn();

  render(
    <ForceFieldAnalysisApp
      embedded
      components={COMPONENTS}
      teamMembers={TEAM_MEMBERS}
      objectives={{}}
      getEntry={getEntry}
      onEntryUpdate={onEntryUpdate}
      onObjectivesUpdate={onObjectivesUpdate}
    />
  );

  return { getEntry, onEntryUpdate, onObjectivesUpdate };
}

function addForceAndAction() {
  fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));
  fireEvent.click(screen.getByRole('button', { name: '2. Actions & Mitigation' }));
  fireEvent.click(screen.getByRole('button', { name: '+ Add Action' }));
}

describe('ForceFieldAnalysisApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD list Side before Force in the Force Mitigation summary table header', () => {
    // arrange
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));
    fireEvent.click(screen.getByRole('button', { name: '2. Actions & Mitigation' }));

    // assert
    const headers = screen.getAllByRole('columnheader').map((header) => header.textContent);
    const sideIndex = headers.indexOf('Side');
    const forceIndex = headers.indexOf('Force');
    expect(sideIndex).toBeGreaterThanOrEqual(0);
    expect(sideIndex).toBeLessThan(forceIndex);
  });

  it('SHOULD offer team members as Owner options on a mitigation action', () => {
    // arrange
    renderApp();
    addForceAndAction();

    // assert
    const ownerSelect = screen.getByDisplayValue('Unassigned') as HTMLSelectElement;
    expect(within(ownerSelect).getByText(/Alex Morgan/)).toBeInTheDocument();
    expect(within(ownerSelect).getByText(/Sam Patel/)).toBeInTheDocument();
  });

  it('SHOULD show an impact preview on a mitigation action row regardless of its status', () => {
    // arrange
    renderApp();
    addForceAndAction();

    // act - status stays at the default (not Completed)
    const statusSelects = screen.getAllByRole('combobox');
    const statusSelect = statusSelects.find(
      (select) => (select as HTMLSelectElement).value === 'Planned'
    ) as HTMLSelectElement;
    expect(statusSelect.value).toBe('Planned');

    // assert - a preview of the mitigated score is still shown
    expect(screen.getByTitle(/mitigated score if this action were Completed/)).toBeInTheDocument();
  });

  it('SHOULD add a mitigation action to a real component/lens via the Apply screen', () => {
    // arrange
    const { onEntryUpdate } = renderApp();
    fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));
    fireEvent.click(screen.getByRole('button', { name: '2. Actions & Mitigation' }));
    fireEvent.click(screen.getByRole('button', { name: '+ Add Action' }));
    fireEvent.click(screen.getByRole('button', { name: '3. Apply to Project' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Add to project' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save Action' }));

    // assert
    expect(onEntryUpdate).toHaveBeenCalledWith(
      'vision',
      'Strategic Direction',
      expect.objectContaining({
        actions: expect.arrayContaining([expect.objectContaining({ text: expect.any(String) })]),
      })
    );
  });

  it('SHOULD add a force as an outcome on a real component via the Apply screen', () => {
    // arrange
    const { onObjectivesUpdate } = renderApp();
    fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));
    const forceInput = screen.getByPlaceholderText('e.g. Strong sponsor commitment');
    fireEvent.change(forceInput, { target: { value: 'Managers are not bought in' } });
    fireEvent.click(screen.getByRole('button', { name: '3. Apply to Project' }));

    // act - tweak the wording, then add
    const outcomeInput = screen.getByDisplayValue('Managers are not bought in');
    fireEvent.change(outcomeInput, { target: { value: 'Managers actively champion the change' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add outcome' }));

    // assert
    expect(onObjectivesUpdate).toHaveBeenCalledWith(
      'vision',
      expect.arrayContaining([
        expect.objectContaining({ text: 'Managers actively champion the change' }),
      ])
    );
  });
});
