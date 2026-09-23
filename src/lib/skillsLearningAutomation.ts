import type { CstPathwayKey } from '@data/cst';

import skillsLearningActionsText from '../data/component-actions/skills-and-learning-actions.json?raw';
import skillsLearningActionsTextPathway2 from '../data/component-actions/skills-and-learning-actions-pathway2.json?raw';
import skillsLearningActionsTextPathway3 from '../data/component-actions/skills-and-learning-actions-pathway3.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
  type DerivedComponentSource,
  parseDerivedComponentSource,
  syncDerivedComponentContent,
} from './componentDerivedAutomation';

export const SKILLS_LEARNING_CONFIG: DerivedComponentConfig = {
  componentId: 'skills_learning',
  actionPrefix: 'skills-learning-action',
  outcomePrefix: 'skills-learning:outcome',
  fallbackOutcomes: [
    {
      id: 'skills-learning:outcome:o1',
      text: 'Future learning and capability requirements have been identified',
    },
    {
      id: 'skills-learning:outcome:o2',
      text: 'Learning interventions have been designed and delivered',
    },
    {
      id: 'skills-learning:outcome:o3',
      text: 'Learning outcomes are achieved and sustained',
    },
  ],
  lensAliases: {
    'People Experience and Culture': 'People Experience and Culture',
    'Skills and Behaviour': 'Skills and Behaviour',
    'Strategic Direction and Leadership': 'Skills and Behaviour',
    'Planning and Risk': 'Skills and Behaviour',
    'Process and Sustainment': 'Skills and Behaviour',
    Governance: 'Skills and Behaviour',
    Communication: 'People Experience and Culture',
    Reinforcement: 'Skills and Behaviour',
    Design: 'Skills and Behaviour',
    'Dependency Management': 'Skills and Behaviour',
    'Measurement and Evaluation': 'Skills and Behaviour',
    'Testing and Validation': 'Skills and Behaviour',
  },
};

const SKILLS_LEARNING_SOURCE_BY_PATHWAY: Record<CstPathwayKey, DerivedComponentSource> = {
  'pathway-1': parseDerivedComponentSource(skillsLearningActionsText, SKILLS_LEARNING_CONFIG),
  'pathway-2': parseDerivedComponentSource(skillsLearningActionsTextPathway2, SKILLS_LEARNING_CONFIG),
  'pathway-3': parseDerivedComponentSource(skillsLearningActionsTextPathway3, SKILLS_LEARNING_CONFIG),
};

export function syncSkillsLearningDerivedContent(store: AdoptionStore): AdoptionStore {
  const pathway = store.orgProfile.cst.pathway || 'pathway-1';
  return syncDerivedComponentContent(store, SKILLS_LEARNING_CONFIG, SKILLS_LEARNING_SOURCE_BY_PATHWAY[pathway]);
}

export function clearSkillsLearningDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, SKILLS_LEARNING_CONFIG);
}
