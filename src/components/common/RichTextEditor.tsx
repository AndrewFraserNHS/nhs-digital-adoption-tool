import { useEffect, useRef, type JSX } from 'react';
import DOMPurify from 'dompurify';

export interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
}

function sanitizeHtml(value: string): string {
  return DOMPurify.sanitize(value, {
    USE_PROFILES: { html: true }
  });
}

interface ToolbarButton {
  label: string;
  command: string;
  icon: string;
}

const TOOLBAR_BUTTONS: ToolbarButton[] = [
  { label: 'Bold', command: 'bold', icon: 'B' },
  { label: 'Italic', command: 'italic', icon: 'I' },
  { label: 'Bullet list', command: 'insertUnorderedList', icon: '•' },
  { label: 'Numbered list', command: 'insertOrderedList', icon: '1.' }
];

export function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps): JSX.Element {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
    if (editor.innerHTML !== value) {
      editor.innerHTML = value;
    }
  }, [value]);

  const emitChange = () => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
    onChange(sanitizeHtml(editor.innerHTML));
  };

  const runCommand = (command: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false);
    emitChange();
  };

  const isEmpty = !value || value === '<br>';

  return (
    <div className={`rounded-md border border-slate-300 bg-white ${className || ''}`}>
      <div
        data-print-hide="true"
        className="flex items-center gap-1 border-b border-slate-200 bg-slate-50 px-1.5 py-1"
      >
        {TOOLBAR_BUTTONS.map((button) => (
          <button
            key={button.command}
            type="button"
            title={button.label}
            aria-label={button.label}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => runCommand(button.command)}
            className="flex h-6 min-w-[1.5rem] items-center justify-center rounded px-1 text-xs font-bold text-slate-600 hover:bg-slate-200"
          >
            {button.icon}
          </button>
        ))}
      </div>
      <div className="relative">
        {isEmpty && placeholder ? (
          <span className="pointer-events-none absolute left-2 top-1.5 text-sm text-slate-400">
            {placeholder}
          </span>
        ) : null}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={emitChange}
          onBlur={emitChange}
          className="min-h-[4.5rem] px-2 py-1.5 text-sm text-slate-800 outline-none [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
        />
      </div>
    </div>
  );
}
