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
    target: 4
  },
  {
    id: 'benefits',
    label: 'Benefits',
    lenses: ['Strategic Direction'],
    phase: 1,
    target: 3
  }
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
        status: 'In Progress'
      }
    ],
    ...overrides
  };
}

function createProps(overrides?: {
  showMatrix?: boolean;
  entry?: DraftEntry;
}) {
  const entryByKey: Record<string, DraftEntry> = {
    'vision:Strategic Direction': overrides?.entry || createEntry()
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
          phaseCapability: {}
        }
      },
      currentDraft: {
        vision: {
          'Strategic Direction': defaultEntry
        }
      },
      objectives: {},
      history: [],
      phaseOverrides: {},
      pathwayChecks: {},
      showMatrix: {
        'vision:Strategic Direction': Boolean(overrides?.showMatrix)
      }
    },
    components,
    activeComponentId: 'vision',
    getRubricText: (_componentId: string, _lens: string, score: number) => `Rubric for ${score}`,
    getEntry: (componentId: string, lens: string) => entryByKey[`${componentId}:${lens}`],
    onComponentChange: vi.fn(),
    onEntryUpdate: vi.fn(),
    onOpenLensInfo: vi.fn(),
    onMatrixToggle: vi.fn(),
    onActionRemove: vi.fn(),
    onObjectivesUpdate: vi.fn()
  };
}

describe('AssessmentPanel', () => {
  it('notifies when the active component changes', () => {
    const props = createProps();
    render(<AssessmentPanel {...props} />);

    const componentSelect = screen.getAllByRole('combobox')[0];
    fireEvent.change(componentSelect, { target: { value: 'benefits' } });

    expect(props.onComponentChange).toHaveBeenCalledWith('benefits');
  });

  it('updates score and component justification through onEntryUpdate', () => {
    const props = createProps();
    render(<AssessmentPanel {...props} />);

    const controls = screen.getAllByRole('combobox');
    fireEvent.change(controls[1], { target: { value: '4' } });

    const areas = screen.getAllByRole('textbox');
    fireEvent.change(areas[0], { target: { value: 'Updated justification' } });

    const updatedEntries = props.onEntryUpdate.mock.calls.map((call) => call[2]);
    expect(updatedEntries.some((entry: DraftEntry) => entry.score === 4)).toBe(true);
    expect(updatedEntries.some((entry: DraftEntry) => entry.justification === 'Updated justification')).toBe(true);
  });

  it('toggles matrix and allows selecting score from matrix cards', () => {
    const props = createProps({ showMatrix: true });
    render(<AssessmentPanel {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Hide Full Guidance' }));
    expect(props.onMatrixToggle).toHaveBeenCalledWith('vision:Strategic Direction');

    const levelFiveLabel = screen.getAllByText('Level 5')[0];
    const levelFiveButton = levelFiveLabel.closest('button');
    if (!levelFiveButton) {
      throw new Error('Expected Level 5 matrix button to be present');
    }

    fireEvent.click(levelFiveButton);
    const updatedEntries = props.onEntryUpdate.mock.calls.map((call) => call[2]);
    expect(updatedEntries.some((entry: DraftEntry) => entry.score === 5)).toBe(true);
  });

  it('opens lens info when clicking the lens header button', () => {
    const props = createProps();
    render(<AssessmentPanel {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Strategic Direction' }));
    expect(props.onOpenLensInfo).toHaveBeenCalledWith('Strategic Direction');
  });

  it('adds and removes actions via callbacks', () => {
    const entry = createEntry();
    const props = createProps({ entry });
    render(<AssessmentPanel {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Created from modal' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save Action' }));
    expect(props.onEntryUpdate).toHaveBeenCalled();
    const lastUpdateEntry = props.onEntryUpdate.mock.calls.at(-1)[2] as DraftEntry;
    expect(lastUpdateEntry.actions.length).toBe(2);

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(props.onActionRemove).toHaveBeenCalledWith('vision', 'Strategic Direction', 'action-1');
  });

  it('filters lens actions by action type', () => {
    const entry = createEntry({
      actions: [
        {
          id: 'action-1',
          text: 'Run workshop',
          actionType: 'Meetings',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'In Progress'
        },
        {
          id: 'action-2',
          text: 'Write admin note',
          actionType: 'Admin',
          owner: 'PMO',
          timescale: 'Q3',
          status: 'Planned'
        }
      ]
    });
    const props = createProps({ entry });
    render(<AssessmentPanel {...props} />);

    fireEvent.change(screen.getByRole('combobox', { name: 'Filter Strategic Direction actions by type' }), { target: { value: 'Meetings' } });

    expect(screen.getByText('Run workshop')).toBeInTheDocument();
    expect(screen.queryByText('Write admin note')).toBeNull();
  });

  it('adds an evidence web link row in the action editor', () => {
    const props = createProps();
    render(<AssessmentPanel {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add web link' }));

    expect(screen.getByPlaceholderText('Link label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('https://...')).toBeInTheDocument();
  });

  it('renders linked actions on linked targets and removes from source lens', () => {
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
            { componentId: 'benefits', lens: 'Strategic Direction' }
          ]
        }
      ]
    });

    const props = createProps();
    props.activeComponentId = 'benefits';
    props.store.currentDraft = {
      vision: {
        'Strategic Direction': sourceEntry
      },
      benefits: {
        'Strategic Direction': createEntry({ actions: [] })
      }
    };
    props.getEntry = (componentId: string, lens: string) => props.store.currentDraft[componentId][lens];

    render(<AssessmentPanel {...props} />);

    expect(screen.getByText('Shared action')).toBeTruthy();
    expect(screen.getByText('Linked from Vision / Strategic Direction')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(props.onActionRemove).toHaveBeenCalledWith('vision', 'Strategic Direction', 'linked-vision-action');
  });

  it('opens outcome details modal with status and linked actions', () => {
    const props = createProps();
    props.store.objectives = {
      vision: [
        {
          id: 'obj-1',
          text: 'Vision objective',
          owner: '',
          timescale: '',
          linkedActions: [{ lens: 'Strategic Direction', actionId: 'action-1' }]
        }
      ]
    };
    render(<AssessmentPanel {...props} />);

    expect(screen.getByText('Vision objective')).toBeTruthy();
    expect(screen.getAllByText('In Progress').length).toBeGreaterThan(0);
    fireEvent.click(screen.getByText('Vision objective').closest('tr')!);

    const dialog = screen.getByRole('dialog', { name: 'Outcome Details' });
    expect(within(dialog).getByText('Run workshop')).toBeTruthy();
    expect(within(dialog).getAllByText('In Progress').length).toBeGreaterThan(0);
    fireEvent.click(within(dialog).getByRole('button', { name: 'Open Action' }));
    expect(screen.getByText(/Edit Action · Vision \/ Strategic Direction/)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByText('Outcome Details')).toBeNull();

    expect(screen.queryByRole('button', { name: 'Add Objective' })).toBeNull();
  });

  it('links actions to objectives from the action editor hierarchy section', () => {
    const props = createProps();
    props.store.objectives = {
      vision: [
        {
          id: 'obj-1',
          text: 'Vision objective',
          owner: '',
          timescale: '',
          linkedActions: []
        }
      ]
    };

    render(<AssessmentPanel {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Add Action' }));
    fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'New linked action' } });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Save Action' }));

    expect(props.onObjectivesUpdate).toHaveBeenCalledWith(
      'vision',
      expect.arrayContaining([
        expect.objectContaining({
          id: 'obj-1',
          linkedActions: expect.arrayContaining([
            expect.objectContaining({ lens: 'Strategic Direction' })
          ])
        })
      ])
    );
  });
});