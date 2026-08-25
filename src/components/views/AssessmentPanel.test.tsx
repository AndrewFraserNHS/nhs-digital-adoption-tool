import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AssessmentPanel } from './AssessmentPanel';
import type { DraftEntry } from '@lib/adoptionState';
import type { AssessmentComponent } from '@data/components';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Strategic Direction'],
    phase: 1,
    target: 4,
  },
  {
    id: 'benefits',
    label: 'Benefits',
    lenses: ['Strategic Direction'],
    phase: 1,
    target: 3,
  },
];

function createEntry(overrides?: Partial<DraftEntry>): DraftEntry {
  return {
    score: 2,
    justification: 'Existing rationale',
    evidence: 'Document link',
    actions: [
      {
        id: 'action-1',
        text: 'Run workshop',
        owner: 'PMO',
        timescale: 'Q3',
        status: 'In Progress',
      },
    ],
    ...overrides,
  };
}

function createProps(overrides?: {
  entry?: DraftEntry;
  teamMembers?: { id: string; name: string; role: string }[];
}) {
  const entryByKey: Record<string, DraftEntry> = {
    'vision:Strategic Direction': overrides?.entry || createEntry(),
  };
  const defaultEntry = entryByKey['vision:Strategic Direction'];

  return {
    store: {
      view: 'assessment' as const,
      orgProfile: {
        trustName: 'Trust',
        region: 'North',
        trustType: 'Acute',
        projectName: 'Programme',
        leadName: 'Lead',
        cst: {
          type: 'project',
          pathway: 'pathway-1',
          goLiveDate: '2026-10-01',
          fullAdoptionDate: '',
          benefitRealizationDate: '',
          toolkitChoice: 'avt-v2-2026',
          phaseCapability: {},
        },
        teamMembers: overrides?.teamMembers || [],
      },
      currentDraft: {
        vision: {
          'Strategic Direction': defaultEntry,
        },
      },
      objectives: {},
      history: [],
      phaseOverrides: {},
      pathwayChecks: {},
    },
    components,
    activeComponentId: 'vision',
    getRubricText: (_componentId: string, _lens: string, score: number) => `Rubric for ${score}`,
    getEntry: (componentId: string, lens: string) => entryByKey[`${componentId}:${lens}`],
    onComponentChange: vi.fn(),
    onEntryUpdate: vi.fn(),
    onOpenLensInfo: vi.fn(),
    onActionRemove: vi.fn(),
    onObjectivesUpdate: vi.fn(),
  };
}

describe('AssessmentPanel', () => {
  it('SHOULD notify WHERE the active component changes', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} />);

    const componentSelect = screen.getAllByRole('combobox')[0];
    fireEvent.change(componentSelect, { target: { value: 'benefits' } });

    // assert
    expect(props.onComponentChange).toHaveBeenCalledWith('benefits');
  });

  it('SHOULD update score and component justification through onEntryUpdate', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    const controls = screen.getAllByRole('combobox');
    fireEvent.change(controls[1], { target: { value: '4' } });

    const areas = screen.getAllByRole('textbox');
    fireEvent.change(areas[0], { target: { value: 'Updated justification' } });

    const updatedEntries = props.onEntryUpdate.mock.calls.map((call) => call[2]);

    // assert
    expect(updatedEntries.some((entry: DraftEntry) => entry.score === 4)).toBe(true);
    expect(
      updatedEntries.some((entry: DraftEntry) => entry.justification === 'Updated justification')
    ).toBe(true);
  });

  it('SHOULD show the current-level guidance text for a lens without a toggle button', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    // assert
    expect(screen.getByText('Rubric for 2')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Full Guidance/ })).not.toBeInTheDocument();
  });

  it('SHOULD open lens info WHERE clicking the lens header button', () => {
    // arrange
    const props = createProps();
    
    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));
    fireEvent.click(screen.getByRole('button', { name: 'Strategic Direction' }));

    // assert
    expect(props.onOpenLensInfo).toHaveBeenCalledWith('Strategic Direction');
  });

  it('SHOULD open the edit modal for a focusAction and call onFocusActionHandled', () => {
    // arrange
    const entry = createEntry();
    const props = createProps({ entry });
    const onFocusActionHandled = vi.fn();

    // act
    render(
      <AssessmentPanel
        {...props}
        focusAction={{ lens: 'Strategic Direction', actionId: 'action-1' }}
        onFocusActionHandled={onFocusActionHandled}
      />
    );

    // assert
    expect(screen.getByDisplayValue('Run workshop')).toBeInTheDocument();
    expect(onFocusActionHandled).toHaveBeenCalled();
  });

  it('SHOULD add and remove actions via callbacks', () => {
    // arrange
    const entry = createEntry();
    const props = createProps({ entry });

    // act 1
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: 'Created from modal' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Action' }));

    // assert 1
    expect(props.onEntryUpdate).toHaveBeenCalled();

    // act 2
    const lastUpdateEntry = props.onEntryUpdate.mock.calls.at(-1)[2] as DraftEntry;

    // assert 3
    expect(lastUpdateEntry.actions.length).toBe(2);

    // act 4
    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));

    // assert 4
    expect(props.onActionRemove).toHaveBeenCalledWith('vision', 'Strategic Direction', 'action-1');
  });

  it('SHOULD filter lens actions by action type', () => {
    // arrange
    const entry = createEntry({
      actions: [
        {
          id: 'action-1',
          text: 'Run workshop',
          actionType: 'Engagement',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'In Progress',
        },
        {
          id: 'action-2',
          text: 'Write admin note',
          actionType: 'Governance',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'Planned',
        },
      ],
    });
    const props = createProps({ entry });

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    fireEvent.change(
      screen.getByRole('combobox', { name: 'Filter Strategic Direction actions by type' }),
      { target: { value: 'Engagement' } }
    );

    // assert
    expect(screen.getByText('Run workshop')).toBeInTheDocument();
    expect(screen.queryByText('Write admin note')).toBeNull();
  });

  it('SHOULD filter lens actions by owner', () => {
    // arrange
    const entry = createEntry({
      actions: [
        {
          id: 'action-1',
          text: 'Run workshop',
          owner: 'Andy Fraser',
          timescale: 'Q3',
          status: 'In Progress',
        },
        {
          id: 'action-2',
          text: 'Write admin note',
          owner: 'Sam Patel',
          timescale: 'Q3',
          status: 'Planned',
        },
      ],
    });
    const props = createProps({
      entry,
      teamMembers: [
        { id: '1', name: 'Andy Fraser', role: 'Change Lead' },
        { id: '2', name: 'Sam Patel', role: 'SRO' },
      ],
    });

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    fireEvent.change(
      screen.getByRole('combobox', { name: 'Filter Strategic Direction actions by owner' }),
      { target: { value: 'Andy Fraser' } }
    );

    // assert
    expect(screen.getByText('Run workshop')).toBeInTheDocument();
    expect(screen.queryByText('Write admin note')).toBeNull();
  });

  it('SHOULD populate the action editor owner select from the CST team roster', () => {
    // arrange
    const props = createProps({
      teamMembers: [{ id: '1', name: 'Andy Fraser', role: 'Change Lead' }],
    });

    // act 1
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: 'Created from modal' },
    });

    const ownerSelect = screen.getByLabelText('Owner') as HTMLSelectElement;

    // assert 1
    expect(within(ownerSelect).getByText('Andy Fraser - Change Lead')).toBeInTheDocument();

    // act 2
    fireEvent.change(ownerSelect, { target: { value: 'Andy Fraser' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Action' }));

    const lastUpdateEntry = props.onEntryUpdate.mock.calls.at(-1)[2] as DraftEntry;

    // assert 2
    expect(lastUpdateEntry.actions.at(-1)?.owner).toBe('Andy Fraser');
  });

  it('SHOULD add an evidence web link row in the action editor', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add web link' }));

    // assert
    expect(screen.getByPlaceholderText('Link label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('https://...')).toBeInTheDocument();
  });

  it('renders linked actions on linked targets and removes from source lens', () => {
    // arrange
    const sourceEntry = createEntry({
      actions: [
        {
          id: 'linked-vision-action',
          text: 'Shared action',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'Planned',
          linkedTargets: [
            { componentId: 'vision', lens: 'Strategic Direction' },
            { componentId: 'benefits', lens: 'Strategic Direction' },
          ],
        },
      ],
    });

    const props = createProps();
    props.activeComponentId = 'benefits';
    props.store.currentDraft = {
      vision: {
        'Strategic Direction': sourceEntry,
      },
      benefits: {
        'Strategic Direction': createEntry({ actions: [] }),
      },
    };
    props.getEntry = (componentId: string, lens: string) =>
      props.store.currentDraft[componentId][lens];


    // act 1
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));


    // assert 1
    expect(screen.getByText('Shared action')).toBeTruthy();
    expect(screen.getByText('Linked from Vision / Strategic Direction')).toBeTruthy();

    // act 2 
    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));

    // assert 2
    expect(props.onActionRemove).toHaveBeenCalledWith(
      'vision',
      'Strategic Direction',
      'linked-vision-action'
    );
  });

  it('SHOULD open outcome details modal with status and linked actions', () => {
    // arrange
    const props = createProps();
    props.store.objectives = {
      vision: [
        {
          id: 'obj-1',
          text: 'Vision objective',
          owner: '',
          timescale: '',
          linkedActions: [{ lens: 'Strategic Direction', actionId: 'action-1' }],
        },
      ],
    };

    // act 1
    render(<AssessmentPanel {...props} />);

    // assert 1
    expect(screen.getByText('Vision objective')).toBeTruthy();
    expect(screen.getAllByText('In Progress').length).toBeGreaterThan(0);

    // act 2
    fireEvent.click(screen.getByText('Vision objective').closest('tr')!);

    const dialog = screen.getByRole('dialog', { name: 'Outcome Details' });
    expect(within(dialog).getByText('Run workshop')).toBeTruthy();
    expect(within(dialog).getAllByText('In Progress').length).toBeGreaterThan(0);
    fireEvent.click(within(dialog).getByRole('button', { name: 'Open Action' }));

    // assert 2
    expect(screen.getByText(/Edit Action · Vision \/ Strategic Direction/)).toBeTruthy();

    // act 3
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    // assert 3
    expect(screen.queryByText('Outcome Details')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Add Objective' })).toBeNull();
  });

  it('links actions to objectives from the action editor hierarchy section', () => {
    // arrange
    const props = createProps();
    props.store.objectives = {
      vision: [
        {
          id: 'obj-1',
          text: 'Vision objective',
          owner: '',
          timescale: '',
          linkedActions: [],
        },
      ],
    };

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.change(screen.getByLabelText('Description'), {
      target: { value: 'New linked action' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Save Action' }));

    // assert
    expect(props.onObjectivesUpdate).toHaveBeenCalledWith(
      'vision',
      expect.arrayContaining([
        expect.objectContaining({
          id: 'obj-1',
          linkedActions: expect.arrayContaining([
            expect.objectContaining({ lens: 'Strategic Direction' }),
          ]),
        }),
      ])
    );
  });

  it('SHOULD substitute the project name into the component overview text', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: /What is this\?/ }));

    // assert
    expect(screen.getByText(/Programme landed best/)).toBeTruthy();
  });

  it('SHOULD fall back to a placeholder project name WHERE none is set', () => {
    // arrange
    const props = createProps();
    props.store.orgProfile.projectName = '';

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: /What is this\?/ }));

    // assert
    expect(screen.getByText(/Your Project landed best/)).toBeTruthy();
  });

  it('SHOULD render a matching CST toolkit link inside an action description', () => {
    // arrange
    const sponsorshipComponents: AssessmentComponent[] = [
      ...components,
      { id: 'sponsorship', label: 'Senior Sponsorship & Governance', lenses: ['Planning and Risk'], phase: 1, target: 4 },
    ];
    const entry = createEntry({
      actions: [
        {
          id: 'action-1',
          text: 'Prepare a RACI/RASCI Matrix for this workstream.',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'Planned',
        },
      ],
    });
    const props = createProps({ entry });
    props.components = sponsorshipComponents;
    props.activeComponentId = 'sponsorship';
    props.store.currentDraft = { sponsorship: { 'Planning and Risk': entry } };
    props.getEntry = () => entry;

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    // assert
    const link = screen.getByRole('link', { name: 'RACI/RASCI Matrix' });
    expect(link).toHaveAttribute('href', 'https://future.nhs.uk/CMN/view?objectId=34040240');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('SHOULD hide additional guidance links from action descriptions WHERE showAdditionalGuidanceLinks is false', () => {
    // arrange
    const sponsorshipComponents: AssessmentComponent[] = [
      ...components,
      { id: 'sponsorship', label: 'Senior Sponsorship & Governance', lenses: ['Planning and Risk'], phase: 1, target: 4 },
    ];
    const entry = createEntry({
      actions: [
        {
          id: 'action-1',
          text: 'Use the Stakeholder Analysis Tool and RACI/RASCI Matrix for this workstream.',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'Planned',
        },
      ],
    });
    const props = createProps({ entry });
    props.components = sponsorshipComponents;
    props.activeComponentId = 'sponsorship';
    props.store.currentDraft = { sponsorship: { 'Planning and Risk': entry } };
    props.getEntry = () => entry;

    // act 1: additional links shown by default
    const { unmount } = render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    // assert 1
    expect(screen.getByRole('link', { name: 'Stakeholder Analysis Tool' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'RACI/RASCI Matrix' })).toBeTruthy();
    unmount();

    // act 2: additional links hidden
    render(<AssessmentPanel {...props} showAdditionalGuidanceLinks={false} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));

    // assert 2
    expect(screen.queryByRole('link', { name: 'Stakeholder Analysis Tool' })).toBeNull();
    expect(screen.getByRole('link', { name: 'RACI/RASCI Matrix' })).toBeTruthy();
  });

  it('SHOULD dismiss the guided workflow box and offer to hide it permanently', () => {
    // arrange
    const props = createProps();
    const onHideGuidedWorkflow = vi.fn();

    // act
    render(
      <AssessmentPanel {...props} onHideGuidedWorkflow={onHideGuidedWorkflow} />
    );

    // assert 1
    expect(screen.getByText('Guided workflow')).toBeTruthy();

    // act 2
    fireEvent.click(screen.getByRole('button', { name: "Don't show this again" }));

    // assert 2
    expect(onHideGuidedWorkflow).toHaveBeenCalled();

    // act 3
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss guided workflow' }));

    // assert 3
    expect(screen.queryByText('Guided workflow')).toBeNull();
  });

  it('SHOULD render a tool-link match as a button that calls onNavigateToTool', () => {
    // arrange
    const entry = createEntry({
      actions: [
        {
          id: 'action-1',
          text: 'Run workshop',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'In Progress',
        },
      ],
    });
    const props = createProps({ entry });
    props.store.orgProfile.toolLinks = [
      { key: 'tool-1', tool: 'highlight-builder', matchText: 'workshop' },
    ];
    const onNavigateToTool = vi.fn();

    // act
    render(<AssessmentPanel {...props} onNavigateToTool={onNavigateToTool} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));
    fireEvent.click(screen.getByRole('button', { name: 'workshop' }));

    // assert
    expect(onNavigateToTool).toHaveBeenCalledWith('highlight-builder');
  });

  it('SHOULD hide the guided workflow box WHERE hideGuidedWorkflow is set', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} hideGuidedWorkflow />);

    // assert
    expect(screen.queryByText('Guided workflow')).toBeNull();
  });

  it('SHOULD show Delete Action only in edit mode and call onActionRemove', () => {
    // arrange
    const entry = createEntry();
    const props = createProps({ entry });

    // act 1: create mode has no Delete button
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Show' }));
    fireEvent.click(screen.getByRole('button', { name: /Add Action/ }));

    // assert 1
    expect(screen.queryByRole('button', { name: 'Delete Action' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    // act 2: edit mode (via focusAction) has a Delete button
    render(
      <AssessmentPanel
        {...props}
        focusAction={{ lens: 'Strategic Direction', actionId: 'action-1' }}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Delete Action' }));

    // assert 2
    expect(props.onActionRemove).toHaveBeenCalledWith('vision', 'Strategic Direction', 'action-1');
  });

  it('SHOULD add a custom outcome via the Add Outcome modal', () => {
    // arrange
    const props = createProps();

    // act
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Add Outcome' }));
    fireEvent.change(screen.getByLabelText('Outcome description'), {
      target: { value: 'Agree new outcome' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Save Outcome' }));

    // assert
    expect(props.onObjectivesUpdate).toHaveBeenCalledWith(
      'vision',
      expect.arrayContaining([
        expect.objectContaining({
          text: 'Agree new outcome',
          id: expect.stringMatching(/^custom-outcome:/),
        }),
      ])
    );
  });

  it('SHOULD show Edit/Delete for a custom outcome but not for an auto-generated one', () => {
    // arrange
    const props = createProps();
    props.store.objectives = {
      vision: [
        {
          id: 'auto:vision-1',
          text: 'Auto-generated outcome',
          owner: '',
          timescale: '',
          linkedActions: [],
        },
        {
          id: 'custom-outcome:1',
          text: 'My custom outcome',
          owner: '',
          timescale: '',
          linkedActions: [],
        },
      ],
    };

    // act 1: auto-generated outcome has no Edit/Delete
    render(<AssessmentPanel {...props} />);
    fireEvent.click(screen.getByText('Auto-generated outcome').closest('tr')!);

    // assert 1
    expect(screen.queryByRole('button', { name: 'Edit' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Delete' })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    // act 2: custom outcome has Edit/Delete
    fireEvent.click(screen.getByText('My custom outcome').closest('tr')!);

    // assert 2
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(props.onObjectivesUpdate).toHaveBeenCalledWith(
      'vision',
      expect.not.arrayContaining([expect.objectContaining({ id: 'custom-outcome:1' })])
    );
  });
});
