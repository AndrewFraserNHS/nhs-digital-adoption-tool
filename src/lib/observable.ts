/**
 * Observable Pattern for Reactive State Management
 * Provides a generic observable that notifies subscribers on state changes
 */

export type StateListener<T> = (state: T) => void;

/**
 * Generic Observable class for reactive state management
 * Allows components to subscribe to state changes and react automatically
 */
export class Observable<T> {
  private state: T;
  private listeners: Set<StateListener<T>> = new Set();

  constructor(initialState: T) {
    this.state = initialState;
  }

  /**
   * Get current state snapshot
   */
  getState(): T {
    return this.state;
  }

  /**
   * Update state and notify all subscribers
   */
  setState(updater: (current: T) => T): void {
    this.state = updater(this.state);
    this.notify();
  }

  /**
   * Subscribe to state changes
   * Returns unsubscribe function for cleanup
   */
  subscribe(listener: StateListener<T>): () => void {
    this.listeners.add(listener);

    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Notify all subscribers of state change
   */
  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener(this.state);
      } catch (error) {
        console.error('Error in state listener:', error);
      }
    });
  }

  /**
   * Get number of active subscribers (useful for debugging)
   */
  getSubscriberCount(): number {
    return this.listeners.size;
  }

  /**
   * Clear all subscribers (useful for cleanup)
   */
  clearSubscribers(): void {
    this.listeners.clear();
  }
}

/**
 * React Hook-like pattern for components
 * Manages subscription lifecycle
 */
export class Store<T> {
  private observable: Observable<T>;

  constructor(initialState: T) {
    this.observable = new Observable(initialState);
  }

  getState(): T {
    return this.observable.getState();
  }

  setState(updater: (current: T) => T): void {
    this.observable.setState(updater);
  }

  subscribe(listener: StateListener<T>): () => void {
    return this.observable.subscribe(listener);
  }

  getSubscriberCount(): number {
    return this.observable.getSubscriberCount();
  }

  clearSubscribers(): void {
    this.observable.clearSubscribers();
  }
}
