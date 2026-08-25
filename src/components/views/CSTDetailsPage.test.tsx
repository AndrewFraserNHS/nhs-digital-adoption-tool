import { fireEvent, render, screen, within } from '@testing-library/react';
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

  it('SHOULD ask for confirmation before applying a pathway change, and applies it on confirm', () => {
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

    // act 1: selecting a new pathway does not commit it yet
    fireEvent.change(screen.getByLabelText('Pathway'), { target: { value: 'pathway-2' } });

    // assert 1
    expect(onProfileUpdate).not.toHaveBeenCalled();
    expect(screen.getByRole('heading', { name: /Change pathway to Pathway 2/ })).toBeInTheDocument();

    // act 2
    fireEvent.click(screen.getByRole('button', { name: 'Confirm change' }));

    // assert 2
    expect(onProfileUpdate).toHaveBeenCalledWith(
      expect.objectContaining({ cst: expect.objectContaining({ pathway: 'pathway-2' }) })
    );
    expect(screen.queryByRole('heading', { name: /Change pathway to/ })).not.toBeInTheDocument();
  });

  it('SHOULD leave the pathway unchanged WHERE the confirmation is cancelled', () => {
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
    fireEvent.change(screen.getByLabelText('Pathway'), { target: { value: 'pathway-3' } });
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    // assert
    expect(onProfileUpdate).not.toHaveBeenCalled();
    expect(screen.getByLabelText('Pathway')).toHaveValue('pathway-1');
  });

  it('SHOULD collapse the External Links section once marked initiated, and reshow via the Settings override', () => {
    // arrange
    const initiatedProfile: OrgProfile = { ...orgProfile, externalLinksInitiated: true };

    // act 1 - collapsed by default
    const { rerender } = render(
      <ProjectDetailsPage
        orgProfile={initiatedProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert 1
    expect(screen.queryByText('Tool linking')).not.toBeInTheDocument();
    expect(screen.getByText(/set up at project start/)).toBeInTheDocument();

    // act 2 - reshown via the per-device override
    rerender(
      <ProjectDetailsPage
        orgProfile={initiatedProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
        showExternalLinksSection
      />
    );

    // assert 2
    expect(screen.getByText('Tool linking')).toBeInTheDocument();
  });

  it('SHOULD write externalLinksInitiated WHERE the "Links initiated" checkbox is toggled', () => {
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
    fireEvent.click(screen.getByLabelText('Links initiated'));

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ externalLinksInitiated: true })
    );
  });

  it('SHOULD add a Tool Linking entry', () => {
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
    fireEvent.click(screen.getByRole('button', { name: '+ Add Tool Link' }));

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        toolLinks: [
          expect.objectContaining({ tool: 'highlight-builder', matchText: 'Highlight Builder' }),
        ],
      })
    );
  });

  it('SHOULD remove a Tool Linking entry', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const profileWithToolLink: OrgProfile = {
      ...orgProfile,
      toolLinks: [{ key: 'tool-1', tool: 'highlight-builder', matchText: 'Highlight Builder' }],
    };

    render(
      <ProjectDetailsPage
        orgProfile={profileWithToolLink}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    const toolLinkingContainer = screen.getByRole('button', { name: '+ Add Tool Link' })
      .parentElement as HTMLElement;

    // act
    fireEvent.click(within(toolLinkingContainer).getByRole('button', { name: 'Remove' }));

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(expect.objectContaining({ toolLinks: [] }));
  });
});
