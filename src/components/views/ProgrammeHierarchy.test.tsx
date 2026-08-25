import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProgrammeHierarchy } from './ProgrammeHierarchy';
import type { AssessmentComponent } from '@data/components';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import { initializeStore } from '@lib/adoptionState';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    phase: 1,
    target: 3,
    lenses: ['Leadership', 'Risk'],
  } as AssessmentComponent,
];

function makeEntry(actions: DraftEntry['actions'] = []): DraftEntry {
  return { score: 2, justification: '', evidence: '', actions };
}

describe('ProgrammeHierarchy', () => {
  it('SHOULD NOT navigate WHERE the component card itself is clicked', () => {
    const onComponentClick = vi.fn();
    const store: AdoptionStore = initializeStore();
    render(
      <ProgrammeHierarchy
        components={components}
        store={store}
        getEntry={() => makeEntry()}
        onComponentClick={onComponentClick}
      />
    );

    fireEvent.click(screen.getByText('Vision'));
    expect(onComponentClick).not.toHaveBeenCalled();
  });

  it('SHOULD call onComponentClick WHERE "Open full assessment" is clicked', () => {
    const onComponentClick = vi.fn();
    const store: AdoptionStore = initializeStore();
    render(
      <ProgrammeHierarchy
        components={components}
        store={store}
        getEntry={() => makeEntry()}
        onComponentClick={onComponentClick}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open full assessment' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD expand a lens actions table WHERE the lens badge is clicked', () => {
    const store: AdoptionStore = initializeStore();
    render(
      <ProgrammeHierarchy
        components={components}
        store={store}
        getEntry={(_, lens) =>
          makeEntry(
            lens === 'Leadership'
              ? [
                  {
                    id: 'a1',
                    text: 'Agree sponsor cadence',
                    owner: 'Alex',
                    timescale: '',
                    status: 'Planned',
                  },
                ]
              : []
          )
        }
        onComponentClick={vi.fn()}
      />
    );

    expect(screen.queryByText('Agree sponsor cadence')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Leadership: 2/3' }));

    expect(screen.getByText('Agree sponsor cadence')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Leadership: 2/3' }));
    expect(screen.queryByText('Agree sponsor cadence')).not.toBeInTheDocument();
  });

  it('SHOULD show the target stage label instead of a raw number', () => {
    const store: AdoptionStore = initializeStore();
    render(
      <ProgrammeHierarchy
        components={components}
        store={store}
        getEntry={() => makeEntry()}
        onComponentClick={vi.fn()}
      />
    );

    expect(screen.getByText('Target readiness: Maturing')).toBeInTheDocument();
  });
});
