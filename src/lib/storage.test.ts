import { describe, expect, it, vi } from 'vitest';
import { load, remove, save } from './storage';

describe('storage', () => {
  const memory = new Map<string, string>();

  const mockStorage = {
    getItem: (key: string) => (memory.has(key) ? memory.get(key)! : null),
    setItem: (key: string, value: string) => {
      memory.set(key, value);
    },
    removeItem: (key: string) => {
      memory.delete(key);
    }
  };

  (globalThis as { localStorage?: unknown }).localStorage = mockStorage;

  it('saves, loads, and removes values', () => {
    save('key-a', { value: 1 });
    expect(load<{ value: number }>('key-a')).toEqual({ value: 1 });
    remove('key-a');
    expect(load('key-a')).toBeNull();
  });

  it('handles JSON parse failures gracefully', () => {
    memory.set('bad-json', '{bad');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    expect(load('bad-json')).toBeNull();
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });

  it('handles storage set/remove failures gracefully', () => {
    const setSpy = vi.spyOn(mockStorage, 'setItem').mockImplementation(() => {
      throw new Error('set fail');
    });
    const removeSpy = vi.spyOn(mockStorage, 'removeItem').mockImplementation(() => {
      throw new Error('remove fail');
    });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    save('x', 'y');
    remove('x');

    expect(warnSpy).toHaveBeenCalled();

    setSpy.mockRestore();
    removeSpy.mockRestore();
    warnSpy.mockRestore();
  });
});