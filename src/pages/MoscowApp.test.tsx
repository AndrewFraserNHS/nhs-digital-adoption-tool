import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import MoscowApp from './MoscowApp';

function addRequirement(title: string) {
  fireEvent.click(screen.getByRole('button', { name: '+ Add Requirement' }));
  const inputs = screen.getAllByLabelText('Requirement');
  fireEvent.change(inputs[inputs.length - 1], { target: { value: title } });
}

function importFile(name: string, content: string, type: string) {
  const input = document.querySelector('input[type="file"]') as HTMLInputElement;
  fireEvent.change(input, { target: { files: [new File([content], name, { type })] } });
}

describe('MoscowApp', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('SHOULD add requirements and count them by priority', () => {
    // arrange
    render(<MoscowApp embedded />);

    // act
    addRequirement('Single sign-on');
    fireEvent.change(screen.getByLabelText('MoSCoW priority'), { target: { value: 'Must' } });

    // assert
    expect(screen.getByDisplayValue('Single sign-on')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Must have 1/ })).toBeInTheDocument();
  });

  it('SHOULD pick the category and owner from dropdowns, offering team members and imported values', async () => {
    // arrange
    render(
      <MoscowApp embedded teamMembers={[{ id: 'm1', name: 'Alex Morgan', role: 'Lead' }]} />
    );
    addRequirement('Single sign-on');

    // act
    fireEvent.change(screen.getByLabelText('Category'), { target: { value: 'Security' } });
    fireEvent.change(screen.getByLabelText('Owner'), { target: { value: 'Alex Morgan' } });

    // assert
    expect((screen.getByLabelText('Category') as HTMLSelectElement).value).toBe('Security');
    expect((screen.getByLabelText('Owner') as HTMLSelectElement).value).toBe('Alex Morgan');

    // act - a CSV with a category and owner that aren't in the lists yet
    importFile(
      'reqs.csv',
      'Requirement,Category,Owner\nDark mode,Branding,Sam Patel\n',
      'text/csv'
    );
    await screen.findByDisplayValue('Dark mode');

    // assert - imported values become selectable options
    const categories = screen.getAllByLabelText('Category') as HTMLSelectElement[];
    expect(categories[1].value).toBe('Branding');
    expect((screen.getAllByLabelText('Owner') as HTMLSelectElement[])[1].value).toBe('Sam Patel');
  });

  it('SHOULD add a new category from the dropdown', () => {
    // arrange
    vi.spyOn(window, 'prompt').mockReturnValue('Branding');
    render(<MoscowApp embedded />);
    addRequirement('Dark mode');

    // act
    fireEvent.change(screen.getByLabelText('Category'), { target: { value: '__add-category__' } });

    // assert
    expect((screen.getByLabelText('Category') as HTMLSelectElement).value).toBe('Branding');
  });

  it('SHOULD keep each version separate WHERE a new one is created and switched back', () => {
    // arrange
    render(<MoscowApp embedded />);
    addRequirement('Original requirement');

    // act - new version starts empty
    fireEvent.click(screen.getByRole('button', { name: /^Version/ }));
    fireEvent.click(screen.getByRole('button', { name: '+ New version' }));
    expect(screen.getByText('No requirements yet.')).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('option')[0]);

    // assert
    expect(screen.getByDisplayValue('Original requirement')).toBeInTheDocument();
  });

  it('SHOULD mark a version external and delete extra versions, resetting the last one instead', () => {
    // arrange
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    render(<MoscowApp embedded />);

    // act 1
    fireEvent.click(screen.getByRole('button', { name: /^Version/ }));
    fireEvent.click(screen.getByRole('radio', { name: 'External' }));

    // assert 1
    expect(screen.getByRole('radio', { name: 'External' })).toHaveAttribute('aria-checked', 'true');

    // act 2
    fireEvent.click(screen.getByRole('button', { name: '+ New version' }));
    fireEvent.click(screen.getByRole('button', { name: 'Delete version' }));
    expect(screen.getAllByRole('option')).toHaveLength(1);
    addRequirement('To be reset');
    fireEvent.click(screen.getByRole('button', { name: 'Delete version' }));

    // assert 2
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByText('No requirements yet.')).toBeInTheDocument();
  });

  it('SHOULD export CSV with an hhmmDDMMYYYY file name', async () => {
    // arrange
    render(<MoscowApp embedded />);
    addRequirement('Has, a comma');
    let blob: Blob | null = null;
    let fileName = '';
    (URL as unknown as { createObjectURL: (b: Blob) => string }).createObjectURL = vi.fn((b: Blob) => {
      blob = b;
      return 'blob:mock';
    });
    (URL as unknown as { revokeObjectURL: (u: string) => void }).revokeObjectURL = vi.fn();
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
      fileName = this.download;
    });

    // act
    fireEvent.click(screen.getByRole('button', { name: 'Export CSV' }));

    // assert
    expect(fileName).toMatch(/^moscow-version-1-\d{12}\.csv$/);
    expect(await (blob as unknown as Blob).text()).toContain('"Has, a comma"');
  });

  it('SHOULD import a CSV straight into an empty version', async () => {
    // arrange
    render(<MoscowApp embedded />);

    // act
    importFile('reqs.csv', 'Requirement,MoSCoW\nDark mode,Could\n', 'text/csv');

    // assert
    expect(await screen.findByDisplayValue('Dark mode')).toBeInTheDocument();
  });

  it('SHOULD ask the user to resolve conflicts WHERE an imported row differs from an existing one', async () => {
    // arrange
    render(<MoscowApp embedded />);
    importFile(
      'a.json',
      JSON.stringify({ requirements: [{ id: 'r1', title: 'Mine', priority: 'Must' }] }),
      'application/json'
    );
    await screen.findByDisplayValue('Mine');

    // act
    importFile(
      'b.json',
      JSON.stringify({ requirements: [{ id: 'r1', title: 'Theirs', priority: 'Must' }] }),
      'application/json'
    );
    await screen.findByTestId('import-conflict-modal');
    fireEvent.click(screen.getByText(/Must - Theirs/));
    fireEvent.click(screen.getByTestId('import-conflict-apply'));

    // assert
    await waitFor(() => expect(screen.getByDisplayValue('Theirs')).toBeInTheDocument());
    expect(screen.queryByTestId('import-conflict-modal')).not.toBeInTheDocument();
  });

  it('SHOULD show an error WHERE the imported file is not valid', async () => {
    // arrange
    render(<MoscowApp embedded />);

    // act
    importFile('bad.csv', 'Owner\nAlex', 'text/csv');

    // assert
    expect(await screen.findByText(/Unable to import this file/)).toBeInTheDocument();
  });
});
