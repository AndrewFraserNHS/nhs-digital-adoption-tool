import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AdoptionDashboard } from './AdoptionDashboard';
import type { AdoptionStore, DraftEntry } from '@lib/adoptionState';
import type { AssessmentComponent } from '@data/components';
import type { Metrics } from '@lib/adoptionMetrics';

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Strategic Lens'],
    phase: 1,
    target: 4
  },
  {
    id: 'benefits',
    label: 'Benefits',
    lenses: ['Strategic Lens'],
    phase: 1,
    target: 2
  }
];

const store: AdoptionStore = {
  view: 'dashboard',
  orgProfile: {
    trustName: 'Test Trust',
    region: 'North',
    trustType: 'Acute',
    projectName: 'Project',
    leadName: 'Lead'
  },
  currentDraft: {
    vision: {
      'Strategic Lens': {
        score: 5,
        justification: 'Complete',
        evidence: 'Deck',
        actions: []
      }
    },
    benefits: {
      'Strategic Lens': {
        score: 1,
        justification: 'Partial',
        evidence: 'Note',
        actions: []
      }
    }
  },
  phaseOverrides: {},
  history: [
    {
      monthLabel: 'Jul 2026',
      overallPercentage: 60,
      data: {}
    }
  ]
};

const metrics: Metrics = {
  totalCurrent: 6,
  assessedCount: 2,
  totalExpected: 2,
  overallPct: 60,
  totalActions: 0,
  completedActions: 0,
  actionCompletionPct: 0,
  currentPhase: 1,
  phaseSummaries: [
    {
      phase: 1,
      componentCount: 2,
      assessedLenses: 2,
      totalLenses: 2,
      onTrackComponents: 1,
      actionCompletionPct: 0,
      rag: 'Amber'
    }
  ],
  nextSteps: [
    {
      componentId: 'benefits',
      componentLabel: 'Benefits',
      phase: 1,
      gapToTarget: 1,
      message: 'Raise Benefits from 1.0 to target 2. Create at least one delivery action linked to this component.'
    }
  ]
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
}

describe('AdoptionDashboard', () => {
  it('renders summary cards from metrics and history', () => {
    render(
      <AdoptionDashboard
        store={store}
        components={components}
        lenses={['Strategic Lens']}
        metrics={metrics}
        getEntry={getEntry}
        onComponentClick={vi.fn()}
      />
    );

    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getAllByText('Phase 1').length).toBeGreaterThan(0);
    expect(screen.getByText('0 of 0 actions completed.')).toBeInTheDocument();
  });

  it('filters component cards by status', () => {
    render(
      <AdoptionDashboard
        store={store}
        components={components}
        lenses={['Strategic Lens']}
        metrics={metrics}
        getEntry={getEntry}
        onComponentClick={vi.fn()}
      />
    );

    const filters = screen.getAllByRole('combobox');
    fireEvent.change(filters[0], { target: { value: 'not-started' } });

    expect(screen.getByText('No components match the current filters.')).toBeInTheDocument();
  });

  it('calls onComponentClick when a component is selected', () => {
    const onComponentClick = vi.fn();
    render(
      <AdoptionDashboard
        store={store}
        components={components}
        lenses={['Strategic Lens']}
        metrics={metrics}
        getEntry={getEntry}
        onComponentClick={onComponentClick}
      />
    );

    fireEvent.click(screen.getAllByText('Vision')[0]);
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });
});