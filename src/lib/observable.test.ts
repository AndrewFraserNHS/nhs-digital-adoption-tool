import { describe, expect, it, vi } from 'vitest';

import { Observable, Store } from './observable';

describe('Observable', () => {
  it('SHOULD notify listeners and supports unsubscribe', () => {
    // arrange
    const observable = new Observable<number>(0);
    const listener = vi.fn();

    // act
    const unsubscribe = observable.subscribe(listener);
    observable.setState((current) => current + 1);
    unsubscribe();
    observable.setState((current) => current + 1);

    // assert
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(1);
    expect(observable.getSubscriberCount()).toBe(0);
  });

  it('SHOULD continue notifying after a listener throws', () => {
    // arrange
    const observable = new Observable<number>(5);
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const throwing = vi.fn(() => {
      throw new Error('listener failure');
    });
    const healthy = vi.fn();

    // act
    observable.subscribe(throwing);
    observable.subscribe(healthy);
    observable.setState((current) => current + 1);

    // assert
    expect(throwing).toHaveBeenCalled();
    expect(healthy).toHaveBeenCalledWith(6);
    expect(errorSpy).toHaveBeenCalled();

    // reset
    errorSpy.mockRestore();
  });

  it('SHOULD clear all subscribers', () => {
    // arrange
    const observable = new Observable<number>(1);

    // act 1
    observable.subscribe(() => {});
    observable.subscribe(() => {});

    // assert 1
    expect(observable.getSubscriberCount()).toBe(2);

    // act 2
    observable.clearSubscribers();

    // assert 2
    expect(observable.getSubscriberCount()).toBe(0);
  });
});

describe('Store', () => {
  it('SHOULD proxy state and subscriptions', () => {
    // arrange
    const store = new Store<{ count: number }>({ count: 0 });
    const listener = vi.fn();

    // act
    const unsubscribe = store.subscribe(listener);
    store.setState((current) => ({ count: current.count + 2 }));

    // assert
    expect(store.getState()).toEqual({ count: 2 });
    expect(listener).toHaveBeenCalledWith({ count: 2 });
    expect(store.getSubscriberCount()).toBe(1);

    // reset
    unsubscribe();
    store.clearSubscribers();
    expect(store.getSubscriberCount()).toBe(0);
  });
});
