export function save(key: string, value: unknown) {
  try {
    const s = JSON.stringify(value);
    localStorage.setItem(key, s);
  } catch (e) {
    console.warn('storage.save failed', e);
  }
}

export function load<T = unknown>(key: string): T | null {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : null;
  } catch (e) {
    console.warn('storage.load failed', e);
    return null;
  }
}

export function remove(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn('storage.remove failed', e);
  }
}

export default { save, load, remove };
