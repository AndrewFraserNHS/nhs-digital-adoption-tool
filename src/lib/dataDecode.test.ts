import { describe, expect, it } from 'vitest';

// @ts-ignore - plain .mjs build script, no type declarations
import { encodeData } from '../../scripts/obfuscateDataPlugin.mjs';
import { decodeData, looksEncoded, parseMaybeEncodedJson } from './dataDecode';

describe('dataDecode', () => {
  it('SHOULD round-trip text WHERE it was encoded by the build plugin', () => {
    // arrange
    const text = JSON.stringify({ text: 'M Agree the vision – £5 “quoted”', n: 1 });

    // act
    const encoded = encodeData(text);

    // assert
    expect(encoded).not.toContain('vision');
    expect(looksEncoded(encoded)).toBe(true);
    expect(decodeData(encoded)).toBe(text);
  });

  it('SHOULD parse both plain and encoded JSON WHERE the same loader serves dev and production', () => {
    // arrange
    const text = JSON.stringify([{ id: 1 }]);

    // act / assert
    expect(looksEncoded(text)).toBe(false);
    expect(parseMaybeEncodedJson(text)).toEqual([{ id: 1 }]);
    expect(parseMaybeEncodedJson(encodeData(text))).toEqual([{ id: 1 }]);
  });
});
