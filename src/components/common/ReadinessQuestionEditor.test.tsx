import { DEFAULT_READINESS_QUESTIONS } from '@data/readinessReview';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ReadinessQuestionEditor } from './ReadinessQuestionEditor';

describe('ReadinessQuestionEditor', () => {
  it('SHOULD reorder a question with the arrow buttons', () => {
    const onChange = vi.fn();
    render(<ReadinessQuestionEditor questions={DEFAULT_READINESS_QUESTIONS} onChange={onChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Move question 1 down' }));

    const next = onChange.mock.calls[0][0];
    expect(next[0].nu).toBe(DEFAULT_READINESS_QUESTIONS[1].nu);
    expect(next[1].nu).toBe(DEFAULT_READINESS_QUESTIONS[0].nu);
  });

  it('SHOULD add a free-text and a multiple-choice custom question with no scoring', () => {
    const onChange = vi.fn();
    render(<ReadinessQuestionEditor questions={DEFAULT_READINESS_QUESTIONS} onChange={onChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Add free-text question' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add multiple-choice question' }));

    const text = onChange.mock.calls[0][0].at(-1);
    const choice = onChange.mock.calls[1][0].at(-1);
    expect(text).toMatchObject({ kind: 'text', custom: true, progress: [] });
    expect(choice).toMatchObject({ kind: 'choice', custom: true, progress: [], answers: ['', ''] });
    expect(text.nu).toBeGreaterThan(1000);
  });

  it('SHOULD only allow deleting custom questions', () => {
    const custom = {
      ...DEFAULT_READINESS_QUESTIONS[0],
      nu: 1001,
      kind: 'text' as const,
      custom: true,
      answers: [],
    };
    const onChange = vi.fn();
    render(
      <ReadinessQuestionEditor
        questions={[...DEFAULT_READINESS_QUESTIONS, custom]}
        onChange={onChange}
      />
    );

    expect(screen.getAllByRole('button', { name: /^Delete question/ })).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: /^Delete question/ }));

    expect(onChange.mock.calls[0][0]).toHaveLength(DEFAULT_READINESS_QUESTIONS.length);
  });

  it('SHOULD edit a question and reset to the defaults', () => {
    const onChange = vi.fn();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    render(<ReadinessQuestionEditor questions={DEFAULT_READINESS_QUESTIONS} onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Question 2 text'), { target: { value: 'Reworded?' } });
    fireEvent.click(screen.getByRole('button', { name: 'Reset to defaults' }));

    expect(onChange.mock.calls[0][0][1].question).toBe('Reworded?');
    expect(onChange.mock.calls[1][0]).toBeUndefined();
  });

  it('SHOULD let each scored answer be aligned to a readiness level and mark the question edited', () => {
    const onChange = vi.fn();
    render(<ReadinessQuestionEditor questions={DEFAULT_READINESS_QUESTIONS} onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Question 2 answer 5 readiness level'), {
      target: { value: '3' },
    });

    const changed = onChange.mock.calls[0][0][1];
    expect(changed.progress).toEqual([...DEFAULT_READINESS_QUESTIONS[1].progress.slice(0, 4), 3]);
    expect(changed.edited).toBe(true);
  });

  it('SHOULD not offer level dropdowns on custom or pathway questions', () => {
    render(
      <ReadinessQuestionEditor
        questions={[
          DEFAULT_READINESS_QUESTIONS[0],
          {
            ...DEFAULT_READINESS_QUESTIONS[1],
            nu: 1001,
            id: '',
            progress: [],
            custom: true,
            answers: ['a', 'b'],
          },
        ]}
        onChange={vi.fn()}
      />
    );

    expect(screen.queryAllByLabelText(/readiness level/)).toHaveLength(0);
  });
});
