import type { AssessmentComponent } from '@data/components';
import type { ComponentObjective, DraftEntry, TeamMember } from '@lib/adoptionState';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import ForceFieldAnalysisApp from './ForceFieldAnalysisApp';

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
  const getEntry = vi.fn((): DraftEntry => ({
    score: 2,
    rationale: '',
    evidence: '',
    actions: [],
  }));
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

  it('SHOULD migrate data saved before multi-version support into a single version', () => {
    // arrange - the old flat shape, saved before `versions` existed
    localStorage.setItem(
      'nhs-force-field-analysis',
      JSON.stringify({
        projectName: 'Legacy Project',
        forces: [{ id: 'f1', text: 'Old force', side: 'driving', score: 7 }],
        actions: [],
      })
    );

    // act
    renderApp();

    // assert - the legacy data survives, wrapped as "Version 1"
    expect(screen.getByDisplayValue('Legacy Project')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Old force')).toBeInTheDocument();
    expect(screen.getByLabelText('Version name')).toHaveValue('Version 1');
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

  it("SHOULD update the force's mitigated score as soon as an action is given a score, whatever its status", () => {
    // arrange
    renderApp();
    addForceAndAction();
    const mitigatedBadge = () =>
      screen.getByTitle("Force's current mitigated score (reflects all its scored actions)");

    // assert - before any impact is set, the mitigated score equals the original (default 5)
    expect(mitigatedBadge()).toHaveTextContent('5');

    // act - give the action a +2 impact while its status is still the default (Planned)
    const statusSelect = screen
      .getAllByRole('combobox')
      .find((select) => (select as HTMLSelectElement).value === 'Planned') as HTMLSelectElement;
    expect(statusSelect.value).toBe('Planned');
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '2' } });

    // assert - the mitigated score reflects the impact immediately, without needing Completed
    expect(mitigatedBadge()).toHaveTextContent('7');
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

  it('SHOULD export forces and actions as a CSV with escaped fields', async () => {
    // arrange
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));
    fireEvent.change(screen.getByPlaceholderText('e.g. Strong sponsor commitment'), {
      target: { value: 'Has, a comma' },
    });
    fireEvent.click(screen.getByRole('button', { name: '2. Actions & Mitigation' }));
    fireEvent.click(screen.getByRole('button', { name: '+ Add Action' }));
    let capturedBlob: Blob | null = null;
    (URL as unknown as { createObjectURL: (blob: Blob) => string }).createObjectURL = vi.fn(
      (blob: Blob) => {
        capturedBlob = blob;
        return 'blob:mock';
      }
    );
    (URL as unknown as { revokeObjectURL: (url: string) => void }).revokeObjectURL = vi.fn();
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Export CSV' }));

    // assert
    expect(capturedBlob).not.toBeNull();
    const text = await capturedBlob!.text();
    expect(text).toContain('Forces');
    expect(text).toContain('"Has, a comma"');
    expect(text).toContain('Actions');
  });

  it('SHOULD create a new version with its own data, without touching the original version', () => {
    // arrange
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));

    // act
    fireEvent.click(screen.getByRole('button', { name: '+ New version' }));

    // assert - the new version starts empty
    expect(screen.getByText('No driving forces added yet.')).toBeInTheDocument();

    // act - switch back to the original version
    fireEvent.change(screen.getByLabelText('Active version'), {
      target: { value: screen.getAllByRole('option')[0].getAttribute('value') },
    });

    // assert - its force is still there
    expect(screen.queryByText('No driving forces added yet.')).not.toBeInTheDocument();
  });

  it('SHOULD mark the active version as internal or external', () => {
    // arrange
    renderApp();

    // assert - defaults to internal
    expect(screen.getByRole('radio', { name: 'Internal (engine aligned)' })).toHaveAttribute(
      'aria-checked',
      'true'
    );

    // act
    fireEvent.click(screen.getByRole('radio', { name: 'External' }));

    // assert
    expect(screen.getByRole('radio', { name: 'External' })).toHaveAttribute('aria-checked', 'true');
  });

  it('SHOULD delete a version and switch to another one, but reset the last remaining version instead of deleting it', () => {
    // arrange
    renderApp();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    fireEvent.click(screen.getByRole('button', { name: '+ New version' }));
    expect(screen.getAllByRole('option')).toHaveLength(2);

    // act - delete the second (current) version
    fireEvent.click(screen.getByRole('button', { name: 'Delete version' }));

    // assert - back down to one version
    expect(screen.getAllByRole('option')).toHaveLength(1);

    // act - deleting the last version resets it instead of removing it
    fireEvent.click(screen.getByRole('button', { name: '+ Add Driving Force' }));
    fireEvent.click(screen.getByRole('button', { name: 'Delete version' }));

    // assert
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByText('No driving forces added yet.')).toBeInTheDocument();
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
