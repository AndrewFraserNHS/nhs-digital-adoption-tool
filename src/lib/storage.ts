export const STORAGE_ERROR_EVENT = 'nhs-storage-error';
const STORAGE_WARN_SIZE_BYTES = 4_500_000;

type StorageOperation = 'save' | 'load' | 'remove';

function emitStorageError(operation: StorageOperation, key: string, error: unknown) {
  if (typeof window === 'undefined' || typeof window.dispatchEvent !== 'function') {
    return;
  }

  const message = error instanceof Error ? error.message : String(error);
  window.dispatchEvent(
    new CustomEvent(STORAGE_ERROR_EVENT, {
      detail: {
        operation,
        key,
        message,
      },
    })
  );
}

export function save(key: string, value: unknown): boolean {
  try {
    const s = JSON.stringify(value);
    if (s.length > STORAGE_WARN_SIZE_BYTES) {
      const sizeError = new Error(
        `Serialized payload for key "${key}" exceeds ${STORAGE_WARN_SIZE_BYTES} bytes.`
      );
      console.warn('storage.save payload too large', sizeError);
      emitStorageError('save', key, sizeError);
      return false;
    }
    localStorage.setItem(key, s);
    return true;
  } catch (e) {
    console.warn('storage.save failed', e);
    emitStorageError('save', key, e);
    return false;
  }
}

export function load<T = unknown>(key: string): T | null {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : null;
  } catch (e) {
    console.warn('storage.load failed', e);
    emitStorageError('load', key, e);
    return null;
  }
}

export function remove(key: string) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.warn('storage.remove failed', e);
    emitStorageError('remove', key, e);
    return false;
  }
}

export default { save, load, remove };
