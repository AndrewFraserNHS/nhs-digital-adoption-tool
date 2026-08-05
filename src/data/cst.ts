export type CstType = 'project' | 'program' | 'initiative';

export type CstPathwayKey = 'pathway-1' | 'pathway-2' | 'pathway-3';

export interface CstProfile {
  type: CstType;
  pathway: CstPathwayKey;
  goLiveDate: string;
  fullAdoptionDate: string;
  benefitRealizationDate: string;
}

export const CST_TYPE_OPTIONS: Array<{ value: CstType; label: string }> = [
  { value: 'project', label: 'Project' },
  { value: 'program', label: 'Program' },
  { value: 'initiative', label: 'Initiative' }
];

export const PATHWAY_OPTIONS: Array<{ value: CstPathwayKey; label: string }> = [
  { value: 'pathway-1', label: 'Pathway 1 - We are starting product for the first time' },
  { value: 'pathway-2', label: 'Pathway 2 - We have piloted product and need to scale up' },
  { value: 'pathway-3', label: 'Pathway 3 - Product is live but adoption is patchy' }
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
  benefitRealizationDate: ''
};
