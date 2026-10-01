import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProjectDetailsPage } from './CSTDetailsPage';
import type { OrgProfile } from '@lib/adoptionState';
import type { AssessmentComponent } from '@data/components';
import { PHASE_LINKS } from '@data/maturity-guidance-links';

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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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
    const onGoToIntroduction = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={onGoToIntroduction}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByTestId('cst-show-intro-button'));

    // assert
    expect(onGoToIntroduction).toHaveBeenCalled();
  });

  it('SHOULD navigate to the Where am I now page from below the team members step', () => {
    // arrange
    const onGoToWhereAmINow = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={onGoToWhereAmINow}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Adoption Baseline' }));

    // assert
    expect(onGoToWhereAmINow).toHaveBeenCalled();
  });

  it('SHOULD update toolkit choice from CST Details', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act 1: selecting a new pathway does not commit it yet
    fireEvent.change(screen.getByLabelText('Pathway'), { target: { value: 'pathway-2' } });

    // assert 1
    expect(onProfileUpdate).not.toHaveBeenCalled();
    expect(
      screen.getByRole('heading', { name: /Change pathway to Pathway 2/ })
    ).toBeInTheDocument();

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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert 1
    expect(screen.queryByText('Phase linking')).not.toBeInTheDocument();
    expect(screen.getByText(/set up at project start/)).toBeInTheDocument();

    // act 2 - reshown via the per-device override
    rerender(
      <ProjectDetailsPage
        orgProfile={initiatedProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
        showExternalLinksSection
      />
    );

    // assert 2
    expect(screen.getByText('Phase linking')).toBeInTheDocument();
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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

  it('SHOULD collapse the Stakeholder Reference Data section once marked initiated, and reshow via the Settings override', () => {
    // arrange
    const initiatedProfile: OrgProfile = { ...orgProfile, stakeholderReferenceDataInitiated: true };

    // act 1 - collapsed by default
    const { rerender } = render(
      <ProjectDetailsPage
        orgProfile={initiatedProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert 1
    expect(screen.queryByText('Groups')).not.toBeInTheDocument();
    expect(
      screen.getByText(/Stakeholder reference data was set up at project start/)
    ).toBeInTheDocument();

    // act 2 - reshown via the per-device override
    rerender(
      <ProjectDetailsPage
        orgProfile={initiatedProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
        showStakeholderReferenceDataSection
      />
    );

    // assert 2
    expect(screen.getByText('Groups')).toBeInTheDocument();
  });

  it('SHOULD write stakeholderReferenceDataInitiated WHERE the "Stakeholder data initiated" checkbox is toggled', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByLabelText('Stakeholder data initiated'));

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ stakeholderReferenceDataInitiated: true })
    );
  });

  it('SHOULD link to the Stakeholder Analysis Tool from the Stakeholder Reference Data section', () => {
    // arrange
    const onGoToStakeholderAnalysis = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
        onGoToStakeholderAnalysis={onGoToStakeholderAnalysis}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Stakeholder Analysis Tool' }));

    // assert
    expect(onGoToStakeholderAnalysis).toHaveBeenCalled();
  });

  it('SHOULD ask for confirmation before removing a stakeholder reference group', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const profileWithGroup: OrgProfile = {
      ...orgProfile,
      stakeholderReferenceLists: {
        groups: ['Clinical'],
        subGroups: [],
        departments: [],
        relationships: [],
      },
    };
    vi.spyOn(window, 'confirm').mockReturnValue(false);

    render(
      <ProjectDetailsPage
        orgProfile={profileWithGroup}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act - declined
    fireEvent.click(screen.getByLabelText('Remove "Clinical"'));

    // assert - nothing removed
    expect(onProfileUpdate).not.toHaveBeenCalled();
    expect(window.confirm).toHaveBeenCalledWith('Remove "Clinical"?');

    // act - confirmed
    vi.mocked(window.confirm).mockReturnValue(true);
    fireEvent.click(screen.getByLabelText('Remove "Clinical"'));

    // assert - removed
    expect(onProfileUpdate).toHaveBeenCalled();
  });

  it('SHOULD show a "Default Change Management Link" badge for an unmodified component link, and no "Custom" badge yet', () => {
    // act
    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={vi.fn()}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert
    expect(
      screen.getAllByRole('link', { name: 'Default Change Management Link' }).length
    ).toBeGreaterThan(0);
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
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

    // assert - the wording variant is visible inline on the link row, without reopening the modal
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByText('network link')).toBeInTheDocument();
  });

  it('SHOULD add a custom link to a component', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByRole('button', { name: '+ Add Link' }));

    // assert
    const updatedProfile = onProfileUpdate.mock.calls.at(-1)[0] as OrgProfile;
    expect(updatedProfile.customComponentLinks?.vision).toEqual([
      expect.objectContaining({ label: '', url: '', type: 'additional' }),
    ]);
  });

  it('SHOULD edit and remove a custom component link', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const profileWithCustomLink: OrgProfile = {
      ...orgProfile,
      customComponentLinks: {
        vision: [{ key: 'custom-1', label: '', url: '', type: 'additional' }],
      },
    };

    render(
      <ProjectDetailsPage
        orgProfile={profileWithCustomLink}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    const customLinkContainer = screen.getByRole('button', { name: '+ Add Link' })
      .parentElement as HTMLElement;

    // act 1 - edit label
    fireEvent.change(within(customLinkContainer).getByPlaceholderText('Link name'), {
      target: { value: 'Change Adoption Playbook' },
    });

    // assert 1
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        customComponentLinks: {
          vision: [expect.objectContaining({ label: 'Change Adoption Playbook' })],
        },
      })
    );

    // act 2 - remove
    fireEvent.click(within(customLinkContainer).getByRole('button', { name: 'Remove' }));

    // assert 2
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ customComponentLinks: { vision: [] } })
    );
  });

  it('SHOULD mark a custom component link as optional', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const profileWithCustomLink: OrgProfile = {
      ...orgProfile,
      customComponentLinks: {
        vision: [{ key: 'custom-1', label: 'Playbook', url: 'https://example.org', type: 'additional' }],
      },
    };

    render(
      <ProjectDetailsPage
        orgProfile={profileWithCustomLink}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByLabelText('Optional (unticked = required)'));

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        customComponentLinks: {
          vision: [expect.objectContaining({ key: 'custom-1', optional: true })],
        },
      })
    );
  });

  it('SHOULD add a match-text alias to a Phase link via its match-text modal', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.click(screen.getByLabelText('Edit phase link match text for Phase 1'));
    fireEvent.change(screen.getByPlaceholderText('Add text this link should also match...'), {
      target: { value: 'kickoff phase' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ phaseLinkAliases: { 1: ['kickoff phase'] } })
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('SHOULD propagate an overridden Change Adoption Baseline mailbox', () => {
    // arrange
    const onProfileUpdate = vi.fn();

    render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // act
    fireEvent.change(screen.getByLabelText('Change Adoption Baseline mailbox'), {
      target: { value: 'custom@example.nhs.uk' },
    });

    // assert
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ avtMailbox: 'custom@example.nhs.uk' })
    );
  });

  it('SHOULD apply the AVT preset after confirming, and do nothing WHEN the confirm is declined', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const confirmSpy = vi.spyOn(window, 'confirm');

    render(
      <ProjectDetailsPage
        orgProfile={{
          ...orgProfile,
          coreLinks: [{ key: 'existing', label: 'Old link', url: 'https://old.example', type: 'core' }],
        }}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    const applyButton = screen.getByRole('button', { name: /Apply .*preset/ });

    // act 1 - decline
    confirmSpy.mockReturnValueOnce(false);
    fireEvent.click(applyButton);

    // assert 1
    expect(onProfileUpdate).not.toHaveBeenCalled();

    // act 2 - confirm
    confirmSpy.mockReturnValueOnce(true);
    fireEvent.click(applyButton);

    // assert 2
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({
        coreLinks: [expect.objectContaining({ key: 'avt-preset-toolkit' })],
        readinessQuestions: undefined,
      })
    );
    confirmSpy.mockRestore();
  });

  it('SHOULD show the bundled default for a Phase link until it is overridden, then allow resetting back to it', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const { rerender } = render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );

    // assert 1 - shows the bundled default, badged as such
    const phaseOneInput = screen.getByLabelText('Phase 1: Pre-Discovery') as HTMLInputElement;
    expect(phaseOneInput.value).toBe(PHASE_LINKS[1]);
    expect(within(phaseOneInput.parentElement as HTMLElement).getByText('Default')).toBeInTheDocument();

    // act - override it
    fireEvent.change(phaseOneInput, { target: { value: 'https://example.nhs.uk/phase-1' } });

    // assert 2
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ phaseLinks: expect.objectContaining({ 1: 'https://example.nhs.uk/phase-1' }) })
    );

    // act - reset back to default
    rerender(
      <ProjectDetailsPage
        orgProfile={{ ...orgProfile, phaseLinks: { 1: 'https://example.nhs.uk/phase-1' } }}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.click(
      within(screen.getByLabelText('Phase 1: Pre-Discovery').parentElement as HTMLElement).getByRole(
        'button',
        { name: 'Reset' }
      )
    );

    // assert 3
    expect(onProfileUpdate).toHaveBeenLastCalledWith(
      expect.objectContaining({ phaseLinks: expect.objectContaining({ 1: '' }) })
    );
  });

  it('SHOULD have no bundled Further Reading default, and fill it in once the AVT preset is applied', () => {
    // arrange
    const onProfileUpdate = vi.fn();
    const confirmSpy = vi.spyOn(window, 'confirm').mockReturnValue(true);
    const { rerender } = render(
      <ProjectDetailsPage
        orgProfile={orgProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.click(screen.getByText('Vision'));

    // assert 1 - no further reading default without a preset applied
    expect((document.getElementById('further-reading-vision') as HTMLInputElement).value).toBe('');

    // act - apply the AVT preset
    fireEvent.click(screen.getByRole('button', { name: /Apply .*preset/ }));
    const calls = onProfileUpdate.mock.calls;
    const updatedProfile = calls[calls.length - 1][0];
    rerender(
      <ProjectDetailsPage
        orgProfile={updatedProfile}
        onProfileUpdate={onProfileUpdate}
        components={components}
        lenses={['Strategic Direction and Leadership']}
        onComponentClick={vi.fn()}
        onGoToIntroduction={vi.fn()}
        onContinueToVision={vi.fn()}
        onGoToWhereAmINow={vi.fn()}
        onCurrentUserChange={vi.fn()}
      />
    );
    fireEvent.click(screen.getByText('Vision'));

    // assert 2
    expect((document.getElementById('further-reading-vision') as HTMLInputElement).value).toBe(
      'https://future.nhs.uk/CMN/view?objectId=74014704'
    );
    confirmSpy.mockRestore();
  });
});
