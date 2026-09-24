import type { PreparednessAssessment } from '@data/readinessReview';
import { JSX } from 'react';

export interface ReadinessQuestionEditorProps {
  questions: PreparednessAssessment[];
  /** Called with the new list, or undefined to go back to the built-in defaults. */
  onChange: (questions: PreparednessAssessment[] | undefined) => void;
  darkMode?: boolean;
}

function describe(question: PreparednessAssessment): string {
  if (question.kind === 'pathway') {
    return 'Pathway question';
  }
  if (question.custom) {
    return question.kind === 'text' ? 'Custom - free text' : 'Custom - multiple choice';
  }
  return `${question.label} · ${question.lens}`;
}

export function ReadinessQuestionEditor({
  questions,
  onChange,
  darkMode = false,
}: ReadinessQuestionEditorProps): JSX.Element {
  const inputClass = `w-full rounded border p-2 text-sm outline-none ${
    darkMode
      ? 'border-slate-600 bg-slate-900 text-slate-100'
      : 'border-slate-300 bg-white text-slate-800'
  }`;
  const smallButton = `rounded border px-2 py-1 text-xs font-medium disabled:opacity-40 ${
    darkMode
      ? 'border-slate-600 text-slate-200 hover:bg-slate-700'
      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
  }`;

  const updateQuestion = (nu: number, updates: Partial<PreparednessAssessment>) =>
    onChange(questions.map((q) => (q.nu === nu ? { ...q, ...updates } : q)));

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= questions.length) {
      return;
    }
    const next = [...questions];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const addQuestion = (kind: 'choice' | 'text') => {
    const nextNu = Math.max(1000, ...questions.map((q) => q.nu)) + 1;
    onChange([
      ...questions,
      {
        nu: nextNu,
        id: '',
        label: 'Custom',
        lens: '',
        question: '',
        answers: kind === 'choice' ? ['', ''] : [],
        progress: [],
        phase: 0,
        target: 0,
        kind,
        custom: true,
      },
    ]);
  };

  const updateAnswer = (question: PreparednessAssessment, index: number, value: string) =>
    updateQuestion(question.nu, {
      answers: question.answers.map((answer, i) => (i === index ? value : answer)),
    });

  const removeQuestion = (nu: number) => onChange(questions.filter((q) => q.nu !== nu));

  const muted = darkMode ? 'text-slate-300' : 'text-slate-500';

  return (
    <div className="space-y-4">
      <ol className="space-y-3">
        {questions.map((question, index) => {
          const isCustomChoice = question.custom && question.kind !== 'text';
          const editableAnswers = question.kind !== 'text' && question.kind !== 'pathway';
          return (
            <li
              key={question.nu}
              className={`rounded-md border p-3 space-y-2 ${
                darkMode ? 'border-slate-700' : 'border-slate-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className={`text-xs font-semibold uppercase tracking-wide ${muted}`}>
                  {index + 1}. {describe(question)}
                </p>
                <div className="flex gap-1">
                  <button
                    type="button"
                    className={smallButton}
                    disabled={index === 0}
                    onClick={() => move(index, -1)}
                    aria-label={`Move question ${index + 1} up`}
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    className={smallButton}
                    disabled={index === questions.length - 1}
                    onClick={() => move(index, 1)}
                    aria-label={`Move question ${index + 1} down`}
                  >
                    ▼
                  </button>
                  {question.custom ? (
                    <button
                      type="button"
                      className={smallButton}
                      onClick={() => removeQuestion(question.nu)}
                      aria-label={`Delete question ${index + 1}`}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              </div>
              <textarea
                aria-label={`Question ${index + 1} text`}
                value={question.question}
                rows={2}
                onChange={(event) => updateQuestion(question.nu, { question: event.target.value })}
                className={inputClass}
              />
              {editableAnswers ? (
                <div className="space-y-1.5">
                  {question.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className="flex gap-2">
                      <input
                        aria-label={`Question ${index + 1} answer ${answerIndex + 1}`}
                        value={answer}
                        onChange={(event) => updateAnswer(question, answerIndex, event.target.value)}
                        className={inputClass}
                      />
                      {isCustomChoice && question.answers.length > 2 ? (
                        <button
                          type="button"
                          className={smallButton}
                          onClick={() =>
                            updateQuestion(question.nu, {
                              answers: question.answers.filter((_, i) => i !== answerIndex),
                            })
                          }
                          aria-label={`Remove answer ${answerIndex + 1} from question ${index + 1}`}
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  ))}
                  {isCustomChoice ? (
                    <button
                      type="button"
                      className={smallButton}
                      onClick={() =>
                        updateQuestion(question.nu, { answers: [...question.answers, ''] })
                      }
                    >
                      Add answer option
                    </button>
                  ) : null}
                </div>
              ) : null}
              {!question.custom && question.kind !== 'pathway' ? (
                <p className={`text-xs ${muted}`}>
                  Core question - its answers set the readiness level for this component lens, so it
                  can be reworded and reordered but not removed.
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={smallButton} onClick={() => addQuestion('choice')}>
          Add multiple-choice question
        </button>
        <button type="button" className={smallButton} onClick={() => addQuestion('text')}>
          Add free-text question
        </button>
        <button
          type="button"
          className={smallButton}
          onClick={() => {
            if (window.confirm('Reset to the built-in questions? Your custom questions and edits will be lost.')) {
              onChange(undefined);
            }
          }}
        >
          Reset to defaults
        </button>
      </div>
      <p className={`text-xs ${muted}`}>
        {questions.length} questions. Custom questions are recorded in the report but don&apos;t
        change any readiness score.
      </p>
    </div>
  );
}
