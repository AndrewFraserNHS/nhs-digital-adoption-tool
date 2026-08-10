import { fireEvent, render, screen, within } from '@testing-library/react';
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
  objectives: {},
  phaseOverrides: {},
  pathwayChecks: {},
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
        pathway="pathway-1"
        pathwayChecks={{}}
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
        pathway="pathway-1"
        pathwayChecks={{}}
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
        pathway="pathway-1"
        pathwayChecks={{}}
      />
    );

    fireEvent.click(screen.getAllByText('Vision')[0]);
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('shows a getting-started empty state when nothing has been assessed', () => {
    const onNavigate = vi.fn();
    const onComponentClick = vi.fn();
    const emptyMetrics: Metrics = { ...metrics, assessedCount: 0 };

    render(
      <AdoptionDashboard
        store={store}
        components={components}
        lenses={['Strategic Lens']}
        metrics={emptyMetrics}
        getEntry={getEntry}
        onComponentClick={onComponentClick}
        pathway="pathway-1"
        pathwayChecks={{}}
        onNavigate={onNavigate}
      />
    );

    expect(screen.getByText('Getting started')).toBeInTheDocument();
    expect(screen.queryByText('Phase Progress (RAG)')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Set up your project details' }));
    expect(onNavigate).toHaveBeenCalledWith('project-details');

    fireEvent.click(screen.getByRole('button', { name: 'Start your first assessment' }));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('shows Blue for fully on-target, complete work in the dashboard focus list', () => {
    const completeMetrics: Metrics = {
      ...metrics,
      nextSteps: [
        {
          ...metrics.nextSteps[0],
          gapToTarget: 0,
          message: 'Benefits are fully on target and complete.'
        }
      ]
    };

    render(
      <AdoptionDashboard
        store={store}
        components={components}
        lenses={['Strategic Lens']}
        metrics={completeMetrics}
        getEntry={getEntry}
        onComponentClick={vi.fn()}
        pathway="pathway-1"
        pathwayChecks={{}}
      />
    );

    const focusCards = screen.getAllByRole('button', { name: /Benefits/i });
    const focusCard = focusCards.find((button) => button.textContent?.includes('Benefits are fully on target and complete.'));

    expect(focusCard).toBeTruthy();
    expect(focusCard && within(focusCard).getByText('Blue')).toBeInTheDocument();
    expect(focusCard && within(focusCard).queryByText('Green')).not.toBeInTheDocument();
  });

  it('calls onOpenLensInfo when the lens explainer is clicked', () => {
    const onOpenLensInfo = vi.fn();
    render(
      <AdoptionDashboard
        store={store}
        components={components}
        lenses={['Strategic Lens']}
        metrics={metrics}
        getEntry={getEntry}
        onComponentClick={vi.fn()}
        pathway="pathway-1"
        pathwayChecks={{}}
        onOpenLensInfo={onOpenLensInfo}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: "What's a lens?" }));
    expect(onOpenLensInfo).toHaveBeenCalledWith('Strategic Lens');
  });
});