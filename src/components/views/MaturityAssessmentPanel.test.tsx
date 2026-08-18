import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MaturityAssessmentPanel } from './MaturityAssessmentPanel';
import type { ComponentDetail } from '@lib/maturityState';

function buildDetail(overrides?: Partial<ComponentDetail>): ComponentDetail {
  return {
    justification: 'Initial justification',
    notes: 'Initial notes',
    links: ['https://alpha.example', 'https://beta.example'],
    actions: [
      {
        id: 'a1',
        text: 'Plan workshops',
        owner: 'Amy',
        dueDate: '2026-08-10',
        status: 'In Progress',
        readinessScore: 2,
      },
      { 
        id: 'a2', 
        text: 'Publish comms', 
        owner: 'Ben', 
        dueDate: '2026-09-01', 
        status: 'Completed',
        readinessScore: 2,
      },
    ],
    ...overrides,
  };
}

function buildProps(overrides?: {
  activeComponent?: string;
  details?: Record<string, ComponentDetail>;
  scores?: Record<string, number>;
}) {
  return {
    activeComponent: overrides?.activeComponent || 'Vision',
    components: ['Vision', 'Benefits'],
    scores: overrides?.scores || { Vision: 2, Benefits: 1 },
    details: overrides?.details || {
      Vision: buildDetail(),
      Benefits: buildDetail({ links: [], actions: [] }),
    },
    componentMatrix: {
      Vision: ['', 'Stage 1 text', 'Stage 2 text', 'Stage 3 text'],
      Benefits: ['', 'Benefits stage 1'],
    },
    onComponentChange: vi.fn(),
    onScoreChange: vi.fn(),
    onOpenMatrix: vi.fn(),
    onOpenGuidance: vi.fn(),
    onDetailUpdate: vi.fn(),
  };
}

describe('MaturityAssessmentPanel', () => {
  it('SHOULD render active component details and triggers top-level callbacks', () => {
    // arrange
    const props = buildProps();

    // act 1
    render(<MaturityAssessmentPanel {...props} />);

    // assert 1
    expect(screen.getAllByText('Vision').length).toBeGreaterThan(0);
    expect(screen.getByText('Stage 2 text')).toBeInTheDocument();

    // act 2
    fireEvent.change(screen.getByLabelText('Current Maturity Stage'), { target: { value: '3' } });
    fireEvent.click(screen.getByRole('button', { name: 'View Matrix' }));
    fireEvent.click(screen.getByRole('button', { name: 'View Guidance' }));
    const benefitsLabels = screen.getAllByText('Benefits');
    const benefitsButton = benefitsLabels
      .map((label) => label.closest('button'))
      .find((candidate) => candidate);
    if (!benefitsButton) {
      throw new Error('Expected Benefits tab button');
    }
    fireEvent.click(benefitsButton);

    // assert 2
    expect(props.onScoreChange).toHaveBeenCalledWith('Vision', 3);
    expect(props.onOpenMatrix).toHaveBeenCalledWith('Vision');
    expect(props.onOpenGuidance).toHaveBeenCalledWith('Vision');
    expect(props.onComponentChange).toHaveBeenCalledWith('Benefits');
  });

  it('SHOULD update justification, notes, links, and actions through onDetailUpdate', () => {
    // arrange
    const props = buildProps();
    render(<MaturityAssessmentPanel {...props} />);

    // act 
    fireEvent.change(screen.getByLabelText(/Justification/), {
      target: { value: 'Updated justification' },
    });
    fireEvent.change(screen.getByLabelText('Additional information and notes'), {
      target: { value: 'Updated notes' },
    });

    fireEvent.click(screen.getByRole('button', { name: '+ Add Supporting Link' }));
    fireEvent.click(screen.getAllByTitle('Remove')[0]);

    fireEvent.click(screen.getByRole('button', { name: '+ Add Action' }));
    fireEvent.change(screen.getAllByPlaceholderText('Describe the action...')[0], {
      target: { value: 'Updated action text' },
    });

    // assert
    expect(props.onDetailUpdate).toHaveBeenCalled();
    const allUpdates = props.onDetailUpdate.mock.calls.map((call) => call[1] as ComponentDetail);
    expect(allUpdates.some((detail) => detail.justification === 'Updated justification')).toBe(
      true
    );
    expect(allUpdates.some((detail) => detail.notes === 'Updated notes')).toBe(true);
    expect(
      allUpdates.some((detail) =>
        detail.actions.some((action) => action.text === 'Updated action text')
      )
    ).toBe(true);
  });

  it('SHOULD exercises filter branches for links and actions', () => {
    // arrange
    const props = buildProps({
      details: {
        Vision: buildDetail({
          actions: [
            {
              id: 'a1',
              text: 'Plan workshops',
              owner: 'Amy',
              dueDate: '2026-08-10',
              status: 'In Progress',
            },
          ],
        }),
        Benefits: buildDetail({ links: [], actions: [] }),
      },
    });
    render(<MaturityAssessmentPanel {...props} />);

    // act 1
    fireEvent.change(screen.getByPlaceholderText('Filter links...'), {
      target: { value: 'missing' },
    });

    // assert 1
    expect(screen.getByText('No supporting links match the current filter.')).toBeInTheDocument();

    // act 2
    fireEvent.change(screen.getByPlaceholderText('Search actions...'), {
      target: { value: 'nothing' },
    });

    // assert 2
    expect(screen.getByText('No actions match the current filters.')).toBeInTheDocument();
  });

  it('shows no component match and empty details state branches', () => {
    // arrange 
    const props = buildProps({
      activeComponent: 'Missing',
      details: {
        Vision: buildDetail(),
        Benefits: buildDetail({ links: [], actions: [] }),
      },
      scores: { Vision: 2, Benefits: 1 },
    });

    // act
    render(<MaturityAssessmentPanel {...props} />);
    fireEvent.change(screen.getByPlaceholderText('Search themes...'), { target: { value: 'zzz' } });

    // assert
    expect(screen.getByText('No components match the current filters.')).toBeInTheDocument();
    expect(screen.getByText('Select a component to view details')).toBeInTheDocument();
  });

  it('toggles component and action sort direction controls', () => {
    // arrange
    const props = buildProps();
    render(<MaturityAssessmentPanel {...props} />);

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Asc' }));
    fireEvent.click(screen.getByRole('button', { name: 'Ascending' }));

    // assert
    expect(screen.getByRole('button', { name: 'Desc' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Descending' })).toBeInTheDocument();
  });
});
