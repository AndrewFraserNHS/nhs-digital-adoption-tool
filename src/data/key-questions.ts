/**
 * The six underlying change-management questions a programme should keep coming back to,
 * each mapped to the framework/toolkit model that answers it and the assessment
 * component(s) it lives under.
 */

export interface KeyQuestion {
  id: string;
  question: string;
  framework: string;
  description: string;
  componentIds: string[];
}

export const KEY_QUESTIONS: KeyQuestion[] = [
  {
    id: 'why',
    question: 'Why are we doing this?',
    framework: 'Force Field Analysis - Driving Forces',
    description: 'The forces pushing for change - the case that makes it worth doing.',
    componentIds: ['case_for_change']
  },
  {
    id: 'future',
    question: 'What will the future look like?',
    framework: 'Vision',
    description: 'A clear picture of the destination, understood and shared by everyone.',
    componentIds: ['vision']
  },
  {
    id: 'barriers',
    question: 'What might prevent us from achieving the vision?',
    framework: 'Force Field Analysis - Restraining Forces',
    description: 'The forces working against change - risks, resistance and blockers to plan for.',
    componentIds: ['case_for_change', 'resistance']
  },
  {
    id: 'impacted',
    question: "Who's going to be impacted by the change?",
    framework: 'Stakeholder Analysis & Change Impact Analysis',
    description: 'Everyone affected by the change, and how deeply it affects them.',
    componentIds: ['stakeholder', 'change_impact']
  },
  {
    id: 'leading',
    question: "Who's leading the change?",
    framework: 'Sponsor Coalition & Change Network',
    description: 'The visible leaders and the network of champions carrying the change day to day.',
    componentIds: ['sponsorship', 'change_network']
  },
  {
    id: 'persuade',
    question: 'How will we persuade people to change?',
    framework: 'Case for Change',
    description: 'The compelling narrative that wins hearts and minds.',
    componentIds: ['case_for_change']
  }
];
