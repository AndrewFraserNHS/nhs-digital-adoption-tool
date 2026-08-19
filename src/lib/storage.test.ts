import { describe, expect, it, vi } from 'vitest';

import { load, remove, save } from './storage';

describe('storage', () => {
  const memory = new Map<string, string>();

  const mockStorage = {
    getItem: (key: string) => (memory.has(key) ? (memory.get(key) ?? null) : null),
    setItem: (key: string, value: string) => {
      memory.set(key, value);
    },
    removeItem: (key: string) => {
      memory.delete(key);
    },
  };

  (globalThis as { localStorage?: unknown }).localStorage = mockStorage;

  it('SHOULD save, load, and removes values', () => {
    // arrange + act 1
    save('key-a', { value: 1 });

    // assert 1
    expect(load<{ value: number }>('key-a')).toEqual({ value: 1 });

    // act 2
    remove('key-a');

    // assert 2
    expect(load('key-a')).toBeNull();
  });

  it('SHOULD handles JSON parse failures gracefully', () => {
    // arrange
    memory.set('bad-json', '{bad');

    // act
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // assert
    expect(load('bad-json')).toBeNull();
    expect(warnSpy).toHaveBeenCalled();

    // reset
    warnSpy.mockRestore();
  });

  it('SHOULD handle storage set/remove failures gracefully', () => {
    // arrange
    const setSpy = vi.spyOn(mockStorage, 'setItem').mockImplementation(() => {
      throw new Error('set fail');
    });
    const removeSpy = vi.spyOn(mockStorage, 'removeItem').mockImplementation(() => {
      throw new Error('remove fail');
    });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    // act
    save('x', 'y');
    remove('x');

    // assert 1
    expect(warnSpy).toHaveBeenCalled();

    // reset
    setSpy.mockRestore();
    removeSpy.mockRestore();
    warnSpy.mockRestore();
  });
});
