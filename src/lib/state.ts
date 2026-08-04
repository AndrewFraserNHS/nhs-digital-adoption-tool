export interface AssessmentState {
  orgName?: string;
  createdAt?: string;
  responses?: Record<string, any>;
}

export interface AdoptionState {
  orgProfile?: {
    trustName: string;
    region?: string;
    trustType?: string;
    projectName?: string;
    leadName?: string;
  };
  currentDraft?: Record<string, Record<string, any>>;
  history?: Array<{
    monthLabel: string;
    overallPercentage: number;
    data: Record<string, Record<string, any>>;
  }>;
  phaseOverrides?: Record<string, string>;
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
