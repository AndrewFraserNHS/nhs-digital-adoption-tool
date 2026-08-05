import { fireEvent, render, screen } from '@testing-library/react';
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
      currentDraft: {},
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
    pathway: 'pathway-1' as const,
    pathwayChecks: {},
    onPathwayCheckToggle: vi.fn()
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

  it('updates score and text fields through onEntryUpdate', () => {
    const props = createProps();
    render(<AssessmentPanel {...props} />);

    const controls = screen.getAllByRole('combobox');
    fireEvent.change(controls[1], { target: { value: '4' } });

    const areas = screen.getAllByRole('textbox');
    fireEvent.change(areas[0], { target: { value: 'Updated justification' } });
    fireEvent.change(areas[1], { target: { value: 'Updated evidence' } });

    const updatedEntries = props.onEntryUpdate.mock.calls.map((call) => call[2]);
    expect(updatedEntries.some((entry: DraftEntry) => entry.score === 4)).toBe(true);
    expect(updatedEntries.some((entry: DraftEntry) => entry.justification === 'Updated justification')).toBe(true);
    expect(updatedEntries.some((entry: DraftEntry) => entry.evidence === 'Updated evidence')).toBe(true);
  });

  it('toggles matrix and allows selecting score from matrix cards', () => {
    const props = createProps({ showMatrix: true });
    render(<AssessmentPanel {...props} />);

    fireEvent.click(screen.getByRole('button', { name: 'Hide Matrix Guidance' }));
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
    expect(props.onEntryUpdate).toHaveBeenCalled();
    const lastUpdateEntry = props.onEntryUpdate.mock.calls.at(-1)[2] as DraftEntry;
    expect(lastUpdateEntry.actions.length).toBe(2);

    fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
    expect(props.onActionRemove).toHaveBeenCalledWith('vision', 'Strategic Direction', 'action-1');
  });
});