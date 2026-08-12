import { describe, expect, it, vi } from 'vitest';

import { downloadFile, esc, escapeCsv, escapeHtml } from './utils';

describe('utils', () => {
  it('escapes html characters and handles nullish values', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
    expect(escapeHtml('<div>"x" & y\'</div>')).toBe(
      '&lt;div&gt;&quot;x&quot; &amp; y&#39;&lt;/div&gt;'
    );
    expect(esc('<b>ok</b>')).toBe('&lt;b&gt;ok&lt;/b&gt;');
  });

  it('escapes csv with and without special characters', () => {
    expect(escapeCsv(null)).toBe('');
    expect(escapeCsv('plain')).toBe('plain');
    expect(escapeCsv('one,two')).toBe('"one,two"');
    expect(escapeCsv('say "hello"')).toBe('"say ""hello"""');
  });

  it('triggers file download flow', () => {
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(HTMLAnchorElement.prototype, 'remove');
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    (URL as unknown as { createObjectURL: (blob: Blob) => string }).createObjectURL = vi.fn(
      () => 'blob:mock'
    );
    (URL as unknown as { revokeObjectURL: (url: string) => void }).revokeObjectURL = vi.fn();

    const createUrlSpy = vi.spyOn(
      URL as unknown as { createObjectURL: (blob: Blob) => string },
      'createObjectURL'
    );
    const revokeSpy = vi.spyOn(
      URL as unknown as { revokeObjectURL: (url: string) => void },
      'revokeObjectURL'
    );

    downloadFile('report.csv', 'a,b,c');

    expect(appendSpy).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();
    expect(revokeSpy).toHaveBeenCalledWith('blob:mock');

    appendSpy.mockRestore();
    removeSpy.mockRestore();
    clickSpy.mockRestore();
    createUrlSpy.mockRestore();
    revokeSpy.mockRestore();
  });
});
