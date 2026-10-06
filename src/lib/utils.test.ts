import { describe, expect, it, vi } from 'vitest';

import { downloadFile, esc, escapeCsv, escapeHtml, formatHhmmDdmmyyyy } from './utils';

describe('utils', () => {
  it('SHOULD format a timestamp as hhmmDDMMYYYY', () => {
    // assert
    expect(formatHhmmDdmmyyyy(new Date(2026, 9, 2, 14, 5))).toBe('140502102026');
  });

  it('SHOULD escape html characters and handles nullish values', () => {
    // arrange + act + assert
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
    expect(escapeHtml('<div>"x" & y\'</div>')).toBe(
      '&lt;div&gt;&quot;x&quot; & y&#39;&lt;/div&gt;'
    );
    expect(esc('<b>ok</b>')).toBe('&lt;b&gt;ok&lt;/b&gt;');
  });

  it('SHOULD escape csv with and without special characters', () => {
    // arrange + act + assert
    expect(escapeCsv(null)).toBe('');
    expect(escapeCsv('plain')).toBe('plain');
    expect(escapeCsv('one,two')).toBe('"one,two"');
    expect(escapeCsv('say "hello"')).toBe('"say ""hello"""');
  });

  it('SHOULD trigger file download flow', () => {
    // arrange
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

    // act
    downloadFile('report.json', '{}', 'application/json');

    // assert
    expect(appendSpy).toHaveBeenCalled();
    expect((appendSpy.mock.calls[0][0] as HTMLAnchorElement).download).toBe('report.json');
    expect(clickSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();
    expect(revokeSpy).toHaveBeenCalledWith('blob:mock');
    expect(createUrlSpy.mock.calls[0][0]).toMatchObject({
      type: 'application/json;charset=utf-8',
    });

    // reset
    appendSpy.mockRestore();
    removeSpy.mockRestore();
    clickSpy.mockRestore();
    createUrlSpy.mockRestore();
    revokeSpy.mockRestore();
  });
});
