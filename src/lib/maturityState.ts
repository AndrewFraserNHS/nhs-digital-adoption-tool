/**
 * State management for Maturity Assessment
 * Manages responses, details, and UI state for component-based maturity assessment
 */

import { Store, type StateListener } from './observable';

export interface ActionItem {
  id: string;
  text: string;
  owner: string;
  startDate?: string;
  dueDate: string;
  status: string;
}

export interface ComponentDetail {
  justification: string;
  notes: string;
  links: string[];
  actions: ActionItem[];
}

export interface MaturityStore {
  activeComponent: string;
  summaryView: 'dueDate' | 'status';
  modal: '' | 'matrix' | 'guidance' | 'reportChoice' | 'report' | 'actionPlanReport' | 'help' | 'versionHistory';
  modalComp: string;
}

/**
 * Initialize maturity assessment store
 */
export function initializeMaturityStore(
  firstComponent: string = ''
): MaturityStore {
  return {
    activeComponent: firstComponent,
    summaryView: 'dueDate',
    modal: '',
    modalComp: ''
  };
}

/**
 * Create a reactive maturity store with observable pattern
 * Allows components to subscribe to state changes
 */
export function createReactiveMaturityStore(firstComponent: string = ''): {
  getState: () => MaturityStore;
  setState: (updater: (current: MaturityStore) => MaturityStore) => void;
  subscribe: (listener: StateListener<MaturityStore>) => () => void;
  getSubscriberCount: () => number;
} {
  const store = new Store(initializeMaturityStore(firstComponent));
  
  return {
    getState: () => store.getState(),
    setState: (updater) => store.setState(updater),
    subscribe: (listener) => store.subscribe(listener),
    getSubscriberCount: () => store.getSubscriberCount()
  };
}

/**
 * Initialize details storage for all components
 */
export function initializeDetails(): Record<string, ComponentDetail> {
  return {};
}

/**
 * Get or create detail record for a component
 */
export function getDetail(
  details: Record<string, ComponentDetail>,
  componentName: string
): ComponentDetail {
  if (!details[componentName]) {
    details[componentName] = {
      justification: '',
      notes: '',
      links: [],
      actions: []
    };
  }
  return details[componentName];
}

/**
 * Create a new action item
 */
export function createAction(
  text: string,
  owner: string = '',
  startDate: string = '',
  dueDate: string = '',
  status: string = 'Not Started'
): ActionItem {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    text,
    owner,
    startDate,
    dueDate,
    status
  };
}

/**
 * Clone an action to avoid mutations
 */
export function cloneAction(action: ActionItem): ActionItem {
  return { ...action };
}
