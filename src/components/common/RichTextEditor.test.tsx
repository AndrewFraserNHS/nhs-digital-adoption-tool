import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RichTextEditor } from './RichTextEditor';

describe('RichTextEditor', () => {
  it('SHOULD render the initial value and toolbar buttons WHERE valid', () => {
    // arrange + act
    render(<RichTextEditor value="<p>Hello</p>" onChange={vi.fn()} />);

    // assert
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Italic' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bullet list' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Numbered list' })).toBeInTheDocument();
  });

  it('SHOULD show the placeholder WHERE empty', () => {
    // arrange + act
    render(<RichTextEditor value="" onChange={vi.fn()} placeholder="Type here" />);

    // assert
    expect(screen.getByText('Type here')).toBeInTheDocument();
  });

  it('SHOULD call onChange with sanitised HTML on input WHERE valid', () => {
    // arrange
    const onChange = vi.fn();
    const { container } = render(<RichTextEditor value="" onChange={onChange} />);

    // act
    const editor = container.querySelector('[contenteditable="true"]') as HTMLDivElement;
    editor.innerHTML = '<p>New content</p><script>alert(1)</script>';
    fireEvent.input(editor);

    // assert
    expect(onChange).toHaveBeenCalled();
    const lastCallHtml = onChange.mock.calls.at(-1)[0] as string;
    expect(lastCallHtml).toContain('New content');
    expect(lastCallHtml).not.toContain('<script>');
  });
});
