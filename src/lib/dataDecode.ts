/**
 * Decodes content that `scripts/obfuscateDataPlugin.mjs` masked at build time (XOR + base64).
 * Deterrence only - the key ships in the bundle. KEEP `KEY` IN SYNC with the plugin.
 */
const KEY = 'nda-6f1c';

export function looksEncoded(text: string): boolean {
  return !/^\s*[[{]/.test(text);
}

export function decodeData(text: string): string {
  const binary = atob(text.trim());
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i) ^ KEY.charCodeAt(i % KEY.length);
  }
  return new TextDecoder().decode(bytes);
}

/** Parses a fetched JSON file whether it was served plain (dev) or encoded (production build). */
export function parseMaybeEncodedJson(text: string): unknown {
  return JSON.parse(looksEncoded(text) ? decodeData(text) : text);
}
