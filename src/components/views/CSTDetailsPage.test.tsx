import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProjectDetailsPage } from './CSTDetailsPage';
import type { OrgProfile } from '@lib/adoptionState';
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
    toolkitChoice: 'avt-v2-2026',
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

describe('ProjectDetailsPage', () => {
  it('SHOULD propagate trust name updates', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    
    // act
    fireEvent.change(screen.getByTestId('cst-trust-name-input'), {
      target: { value: 'Updated Trust' },
    });

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ trustName: 'Updated Trust' })
    );
  });

  it('SHOULD reopen the onboarding intro', () => {
    // arrange
    const onOpenOnboarding = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={onOpenOnboarding}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByTestId('cst-show-intro-button'));

    // assert
    expect(onOpenOnboarding).toHaveBeenCalled();
  });

  it('updates toolkit choice from CST Details', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.change(screen.getByLabelText('Default toolkit for assistant preview'), {
      target: { value: 'change-management-v3-2023' },
    });

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        cst: expect.objectContaining({ toolkitChoice: 'change-management-v3-2023' }),
      })
    );
  });
});
