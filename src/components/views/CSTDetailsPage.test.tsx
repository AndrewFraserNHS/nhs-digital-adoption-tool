import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProjectDetailsPage } from './CSTDetailsPage';
import type { AdoptionStore, DraftEntry, OrgProfile } from '@lib/adoptionState';
import type { AssessmentComponent } from '@data/components';

const orgProfile: OrgProfile = {
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
    phaseCapability: {},
  },
};

const components: AssessmentComponent[] = [
  {
    id: 'vision',
    label: 'Vision',
    lenses: ['Strategic Direction and Leadership'],
    phase: 1,
    target: 4,
  },
];

const store: AdoptionStore = {
  view: 'project-details',
  orgProfile,
  currentDraft: {
    vision: {
      'Strategic Direction and Leadership': {
        score: 2,
        justification: '',
        evidence: '',
        actions: [],
      },
    },
  },
  objectives: {},
  phaseOverrides: {},
  pathwayChecks: {},
  history: [],
};

function getEntry(componentId: string, lens: string): DraftEntry {
  return store.currentDraft[componentId][lens];
}

describe('ProjectDetailsPage', () => {
  it('propagates trust name updates', () => {
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        store={store}
        getEntry={getEntry}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
      />
    );

    fireEvent.change(screen.getByTestId('cst-trust-name-input'), {
      target: { value: 'Updated Trust' },
    });

    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ trustName: 'Updated Trust' })
    );
  });

  it('shows the hierarchy overview and jumps to a component on click', () => {
    const onComponentClick = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        store={store}
        getEntry={getEntry}
        onComponentClick={onComponentClick}
        onOpenOnboarding={vi.fn()}
      />
    );

    fireEvent.click(screen.getByTestId('cst-component-button-vision'));
    expect(onComponentClick).toHaveBeenCalledWith('vision');
  });

  it('reopens the onboarding intro', () => {
    const onOpenOnboarding = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        store={store}
        getEntry={getEntry}
        onComponentClick={vi.fn()}
        onOpenOnboarding={onOpenOnboarding}
      />
    );

    fireEvent.click(screen.getByTestId('cst-show-intro-button'));
    expect(onOpenOnboarding).toHaveBeenCalled();
  });
});
