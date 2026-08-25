import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DailyCheckIn } from './DailyCheckIn';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import type { AssessmentComponent } from '@data/components';
import type { Metrics } from '@lib/adoptionMetrics';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Strategic Direction'],
    phase: 1,
    target: 4,
  },
];

const store: AdoptionStore = {
  view: 'daily-checkin',
  orgProfile: {
    trustName: '',
    region: '',
    trustType: '',
    cst: {
      type: 'project',
      pathway: 'pathway-1',
      goLiveDate: '',
      fullAdoptionDate: '',
      benefitRealizationDate: '',
      toolkitChoice: 'avt-v2-2026',
      phaseCapability: {},
    },
  },
  currentDraft: {
    vision: {
      'Strategic Direction': {
        score: 0,
        justification: '',
        evidence: '',
        actions: [
          {
            id: 'action-1',
            text: 'Gather baseline evidence',
            owner: 'PMO',
            timescale: 'Q3',
            status: 'Planned',
            readinessScore: 0,
          },
        ],
      },
    },
  },
  objectives: {},
  suppressedAutoActions: {},
  auditLog: [],
  phaseOverrides: {},
  pathwayChecks: {},
  history: [],
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
}

const metrics: Metrics = {
  totalCurrent: 0,
  assessedCount: 0,
  totalExpected: 1,
  overallPct: 0,
  totalActions: 1,
  completedActions: 0,
  actionCompletionPct: 0,
  currentPhase: 1,
  phaseSummaries: [],
  nextSteps: [],
};

describe('DailyCheckIn', () => {
  it('SHOULD list current-phase outstanding actions and navigate to the component on view', () => {
    // arrange
    const onComponentClick = vi.fn();
    const onActionView = vi.fn();

    // act
    render(
      <DailyCheckIn
        store={store}
        components={components}
        metrics={metrics}
        getEntry={getEntry}
        onComponentClick={onComponentClick}
        onActionView={onActionView}
      />
    );

    // assert
    expect(screen.getByText('What To Do Next')).toBeInTheDocument();
    expect(screen.getByText('Programme Change Hierarchy')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Show outstanding action/ }));
    fireEvent.click(screen.getByRole('button', { name: 'View' }));
    expect(onActionView).toHaveBeenCalledWith('vision', 'Strategic Direction', 'action-1');

    fireEvent.click(screen.getByRole('button', { name: 'Open full assessment' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });
});
