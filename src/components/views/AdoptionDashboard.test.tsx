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
  overallPct: 60
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
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Months of tracked data available.')).toBeInTheDocument();
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
    fireEvent.change(filters[0], { target: { value: 'on-track' } });

    expect(screen.getAllByText('Vision').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Benefits')).toHaveLength(0);
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