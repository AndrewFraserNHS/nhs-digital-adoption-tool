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

  it('SHOULD show a "Default Toolkit Link" badge for an unmodified component link, and no "Custom" badge yet', () => {
    // act
    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert
    expect(screen.getAllByRole('link', { name: 'Default Toolkit Link' }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('link', { name: 'Custom' })).not.toBeInTheDocument();
  });

  it('SHOULD open the link edit modal via the pencil icon, save a custom URL, and show a "Custom" badge afterwards', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    const { rerender } = render(
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
    fireEvent.click(screen.getAllByRole('button', { name: /^Edit .* link$/ })[0]);
    const dialog = screen.getByRole('dialog');
    fireEvent.click(within(dialog).getByRole('radio', { name: /Custom URL/ }));
    fireEvent.change(within(dialog).getByPlaceholderText('https://...'), {
      target: { value: 'https://example.org/custom-link' },
    });
    fireEvent.click(within(dialog).getByRole('button', { name: 'Save' }));

    // assert
    const updatedProfile = onProfileUpdate.mock.calls.at(-1)[0] as OrgProfile;
    const updatedLinks = updatedProfile.linkOverrides?.links || {};
    const savedOverride = Object.values(updatedLinks)[0] as { url?: string };
    expect(savedOverride.url).toBe('https://example.org/custom-link');

    // act 2 - re-render with the saved profile
    rerender(
      <ProjectDetailsPage
        orgProfile={updatedProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onOpenOnboarding={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert 2
    expect(screen.getAllByRole('link', { name: 'Custom' }).length).toBeGreaterThan(0);
  });

  it('SHOULD add a match-text alias in the link edit modal', () => {
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
    fireEvent.click(screen.getAllByRole('button', { name: /^Edit .* link$/ })[0]);
    fireEvent.change(screen.getByPlaceholderText('Add text this link should also match...'), {
      target: { value: 'strategic vision doc' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    // assert
    const updatedLinks = onProfileUpdate.mock.calls.at(-1)[0].linkOverrides.links;
    const savedOverride = Object.values(updatedLinks)[0] as { matchAliases?: string[] };
    expect(savedOverride.matchAliases).toEqual(['strategic vision doc']);
  });

  it('SHOULD add a match-text alias to a Core Link via its match-text modal', () => {
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
    fireEvent.click(screen.getByRole('button', { name: /Edit match text for/ }));
    fireEvent.change(screen.getByPlaceholderText('Add text this link should also match...'), {
      target: { value: 'network link' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    // assert
    const updatedCoreLinks = onProfileUpdate.mock.calls.at(-1)[0].coreLinks;
    expect(updatedCoreLinks[0].matchAliases).toEqual(['network link']);
  });
});
