export type CstType = 'project' | 'program' | 'initiative';

export type CstPathwayKey = 'pathway-1' | 'pathway-2' | 'pathway-3';

export type CompetenceGrade = 'A' | 'B' | 'C' | 'D' | 'E';

export type ConfidenceScore = 1 | 2 | 3 | 4 | 5;

export type OverarchingPhase = 1 | 2 | 3 | 4 | 5;

export interface PhaseCapabilityAssessment {
  competence: CompetenceGrade;
  confidence: ConfidenceScore;
  assessedAt?: string;
  reason?: 'initial' | 'phase-change' | 'manual';
}

export type PhaseCapabilityProfile = Partial<Record<OverarchingPhase, PhaseCapabilityAssessment>>;

export interface CstProfile {
  type: CstType;
  pathway: CstPathwayKey;
  goLiveDate: string;
  fullAdoptionDate: string;
  benefitRealizationDate: string;
  phaseCapability: PhaseCapabilityProfile;
}

export const OVERARCHING_PHASES: OverarchingPhase[] = [1, 2, 3, 4, 5];

export const COMPETENCE_OPTIONS: CompetenceGrade[] = ['A', 'B', 'C', 'D', 'E'];

export const CONFIDENCE_OPTIONS: ConfidenceScore[] = [1, 2, 3, 4, 5];

const COMPETENCE_SCORE_MAP: Record<CompetenceGrade, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1
};

export function getCombinedCapabilityScore(assessment: PhaseCapabilityAssessment): number {
  const competenceScore = COMPETENCE_SCORE_MAP[assessment.competence];
  const confidenceScore = assessment.confidence;
  return Math.round((((competenceScore / 5) + (confidenceScore / 5)) / 2) * 100);
}

export function getOverallCapabilityScore(profile: PhaseCapabilityProfile): number | null {
  const assessments = OVERARCHING_PHASES
    .map((phase) => profile[phase])
    .filter((item): item is PhaseCapabilityAssessment => Boolean(item));

  if (!assessments.length) {
    return null;
  }

  const total = assessments.reduce((sum, assessment) => sum + getCombinedCapabilityScore(assessment), 0);
  return Math.round(total / assessments.length);
}

export const CST_TYPE_OPTIONS: Array<{ value: CstType; label: string }> = [
  { value: 'project', label: 'Project' },
  { value: 'program', label: 'Program' },
  { value: 'initiative', label: 'Initiative' }
];

export const PATHWAY_OPTIONS: Array<{ value: CstPathwayKey; label: string }> = [
  { value: 'pathway-1', label: 'Pathway 1 - Pilot' },
  { value: 'pathway-2', label: 'Pathway 2 - Scale up' },
  { value: 'pathway-3', label: 'Pathway 3 - Reassess' }
];

export const PATHWAY_LABELS: Record<CstPathwayKey, string> = PATHWAY_OPTIONS.reduce(
  (labels, option) => {
    labels[option.value] = option.label;
    return labels;
  },
  {} as Record<CstPathwayKey, string>
);

export const DEFAULT_CST_PROFILE: CstProfile = {
  type: 'project',
  pathway: 'pathway-1',
  goLiveDate: '',
  fullAdoptionDate: '',
  benefitRealizationDate: '',
  phaseCapability: {}
};
