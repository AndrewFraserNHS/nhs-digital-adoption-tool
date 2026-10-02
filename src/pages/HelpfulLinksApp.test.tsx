import type { AssessmentComponent } from '@data/components';
import { initializeStore } from '@lib/adoptionState';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HelpfulLinksApp from './HelpfulLinksApp';

const components: AssessmentComponent[] = [
  { id: 'vision', label: 'Vision', lenses: ['Strategic Direction and Leadership'], phase: 1, target: 4 },
];

const orgProfile = {
  ...initializeStore({}).orgProfile,
  coreLinks: [
    { key: 'c1', label: 'AVT Playbook', url: 'https://example.org/playbook', type: 'core' as const },
    { key: 'c2', label: 'AVT Sandpit', url: 'https://example.org/sandpit', type: 'core' as const },
  ],
};

describe('HelpfulLinksApp', () => {
  it('SHOULD show every link as a card under its section heading, opening in a new tab', () => {
    // act
    render(<HelpfulLinksApp orgProfile={orgProfile} components={components} />);

    // assert
    expect(screen.getByRole('heading', { name: 'Core links' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Phase links' })).toBeInTheDocument();
    const playbook = screen.getByRole('link', { name: /AVT Playbook/ });
    expect(playbook).toHaveAttribute('href', 'https://example.org/playbook');
    expect(playbook).toHaveAttribute('target', '_blank');
  });

  it('SHOULD filter as you type, and say so WHERE nothing matches', () => {
    // arrange
    render(<HelpfulLinksApp orgProfile={orgProfile} components={components} />);
    const search = screen.getByRole('searchbox', { name: 'Search links' });

    // act 1
    fireEvent.change(search, { target: { value: 'sandpit' } });

    // assert 1
    expect(screen.getByRole('link', { name: /AVT Sandpit/ })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /AVT Playbook/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Phase links' })).not.toBeInTheDocument();

    // act 2
    fireEvent.change(search, { target: { value: 'zzzz' } });

    // assert 2
    expect(screen.getByText('No links match your search.')).toBeInTheDocument();
  });
});
