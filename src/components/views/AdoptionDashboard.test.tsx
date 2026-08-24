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
    target: 4,
  },
  {
    id: 'benefits',
    label: 'Benefits',
    lenses: ['Strategic Lens'],
    phase: 1,
    target: 2,
  },
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
        toolkitChoice: 'avt-v2-2026',
      phaseCapability: {},
    },
  },
  currentDraft: {
    vision: {
      'Strategic Lens': {
        score: 5,
        justification: 'Complete',
        evidence: 'Deck',
        actions: [],
      },
    },
    benefits: {
      'Strategic Lens': {
        score: 1,
        justification: 'Partial',
        evidence: 'Note',
        actions: [],
      },
    },
  },
  objectives: {},
  phaseOverrides: {},
  pathwayChecks: {},
  history: [
    {
      monthLabel: 'Jul 2026',
      overallPercentage: 60,
      data: {},
    },
  ],
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
      rag: 'Amber',
    },
  ],
  nextSteps: [
    {
      componentId: 'benefits',
      componentLabel: 'Benefits',
      phase: 1,
      gapToTarget: 1,
      summary: 'No open actions at the current level - add one to keep moving.',
      message: 'Benefits: No open actions at the current level - add one to keep moving.',
      outstandingActions: [],
    },
  ],
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
}

describe('AdoptionDashboard', () => {
  it('SHOULD render summary cards from metrics and history', () => {
    // arrange + act
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

    // assert
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getAllByText('Pre-Discovery').length).toBeGreaterThan(0);
    expect(screen.getByText('0 of 0 actions completed.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Hide change component radar' })).toBeInTheDocument();
  });

  it('SHOULD filter component cards by status', () => {
    // arrange + act
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

    // assert
    expect(screen.getByText('No components match the current filters.')).toBeInTheDocument();
  });

  it('calls onComponentClick when a component is selected', () => {
    // arrange
    const onComponentClick = vi.fn();

    // act
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

    // assert
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD show a getting-started empty state WHERE nothing has been assessed', () => {
    // arrange
    const onNavigate = vi.fn();
    const onComponentClick = vi.fn();
    const emptyMetrics: Metrics = { ...metrics, assessedCount: 0 };

    // act
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

    // assert 1
    expect(screen.getByText('Getting started')).toBeInTheDocument();
    expect(screen.queryByText('Phase Progress (RAG)')).not.toBeInTheDocument();

    // act 2
    fireEvent.click(screen.getByRole('button', { name: 'Set up your CST Personalisation' }));

    // assert 2
    expect(onNavigate).toHaveBeenCalledWith('project-details');

    // act 3
    fireEvent.click(screen.getByRole('button', { name: 'Start your first assessment' }));

    // act 3
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('SHOULD show Green WHERE fully on-target work in the dashboard focus list', () => {
    // arrange
    const completeMetrics: Metrics = {
      ...metrics,
      nextSteps: [
        {
          ...metrics.nextSteps[0],
          gapToTarget: 0,
          summary: 'Benefits are fully on target and complete.',
          message: 'Benefits: Benefits are fully on target and complete.',
          outstandingActions: [],
        },
      ],
    };

    // act
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

    const benefitsButtons = screen.getAllByRole('button', { name: /^Benefits/ });
    const focusCard = benefitsButtons
      .map((button) => button.closest('div'))
      .find((card) => card?.textContent?.includes('Benefits are fully on target and complete.'));

    // assert
    expect(focusCard).toBeTruthy();
    expect(
      focusCard && within(focusCard).getByText('Benefits are fully on target and complete.')
    ).toBeInTheDocument();
    expect(focusCard && within(focusCard).getByText('Green')).toBeInTheDocument();
    expect(focusCard && within(focusCard).queryByText('Blue')).not.toBeInTheDocument();
  });

  it('SHOULD call onOpenLensInfo WHERE the lens explainer is clicked', () => {
    // arrange
    const onOpenLensInfo = vi.fn();

    // act
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

    // assert
    expect(onOpenLensInfo).toHaveBeenCalledWith('Strategic Lens');
  });
});
