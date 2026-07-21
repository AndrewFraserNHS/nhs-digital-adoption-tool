import { describe, expect, it, vi } from 'vitest';
import { Observable, Store } from './observable';

describe('Observable', () => {
  it('notifies listeners and supports unsubscribe', () => {
    const observable = new Observable<number>(0);
    const listener = vi.fn();

    const unsubscribe = observable.subscribe(listener);
    observable.setState((current) => current + 1);
    unsubscribe();
    observable.setState((current) => current + 1);

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(1);
    expect(observable.getSubscriberCount()).toBe(0);
  });

  it('continues notifying after a listener throws', () => {
    const observable = new Observable<number>(5);
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const throwing = vi.fn(() => {
      throw new Error('listener failure');
    });
    const healthy = vi.fn();

    observable.subscribe(throwing);
    observable.subscribe(healthy);
    observable.setState((current) => current + 1);

    expect(throwing).toHaveBeenCalled();
    expect(healthy).toHaveBeenCalledWith(6);
    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });

  it('clears all subscribers', () => {
    const observable = new Observable<number>(1);
    observable.subscribe(() => {});
    observable.subscribe(() => {});
    expect(observable.getSubscriberCount()).toBe(2);
    observable.clearSubscribers();
    expect(observable.getSubscriberCount()).toBe(0);
  });
});

describe('Store', () => {
  it('proxies state and subscriptions', () => {
    const store = new Store<{ count: number }>({ count: 0 });
    const listener = vi.fn();

    const unsubscribe = store.subscribe(listener);
    store.setState((current) => ({ count: current.count + 2 }));

    expect(store.getState()).toEqual({ count: 2 });
    expect(listener).toHaveBeenCalledWith({ count: 2 });
    expect(store.getSubscriberCount()).toBe(1);

    unsubscribe();
    store.clearSubscribers();
    expect(store.getSubscriberCount()).toBe(0);
  });
});