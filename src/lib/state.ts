import type {
  ComponentObjective,
  DraftEntry,
  HistorySnapshot,
  OrgProfile,
  PathwayChecklistState
} from './adoptionState';

export interface AssessmentState {
  orgName?: string;
  createdAt?: string;
  responses?: Record<string, any>;
}

export interface AdoptionState {
  orgProfile?: OrgProfile;
  currentDraft?: Record<string, Record<string, DraftEntry>>;
  objectives?: Record<string, ComponentObjective[]>;
  history?: HistorySnapshot[];
  phaseOverrides?: Record<string, string>;
  pathwayChecks?: PathwayChecklistState;
}

class AppState {
  private static instance: AppState | null = null;
  public assessment: AssessmentState = {};
  public adoption: AdoptionState = {};

  private constructor() {}

  static getInstance(): AppState {
    if (!AppState.instance) {
AppState.instance = new AppState();
}
    return AppState.instance;
  }

  loadFromWindow() {
    // migrate legacy window.assessmentState if present
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const legacy: any = (window as any).assessmentState || (window as any).NHSDigitalAdoption?.AppState;
    if (legacy) {
this.assessment = { ...this.assessment, ...legacy };
}
  }
}

export default AppState;
