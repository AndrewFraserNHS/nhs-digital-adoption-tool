/**
 * Utility functions - sanitization, formatting, and file operations
 */

/**
 * Escape HTML special characters to prevent XSS attacks
 */
export function escapeHtml(value: string | null | undefined): string {
  if (value == null) {
    return '';
  }
  return String(value)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Alias for escapeHtml for backward compatibility
 */
export const esc = escapeHtml;

/**
 * Escape values for CSV to prevent injection attacks
 */
export function escapeCsv(value: string | null | undefined): string {
  if (value == null) {
    return '';
  }
  const v = String(value);
  if (/[",\n]/.test(v)) {
    return '"' + v.replace(/"/g, '""') + '"';
  }
  return v;
}

/**
 * Ensures a user-entered external URL is absolute (e.g. "nhs.uk" -> "https://nhs.uk") so an <a
 * href> can't be resolved as a same-origin relative path and navigate inside the app. Leaves
 * values that already have a scheme (https:, mailto:, etc.) or are protocol-relative ("//...")
 * untouched.
 */
export function toAbsoluteUrl(url: string | null | undefined): string {
  const trimmed = (url || '').trim();
  if (!trimmed) {
    return trimmed;
  }
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

/**
 * Trigger file download in browser
 */
export function downloadFile(filename: string, content: string, mime = 'text/csv'): void {
  downloadBlob(filename, new Blob([content], { type: mime + ';charset=utf-8;' }));
}

export function downloadBlob(filename: string, blob: Blob): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
