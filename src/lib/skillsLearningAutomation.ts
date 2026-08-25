import skillsLearningActionsText from '../data/component-actions/skills-and-learning-actions.json?raw';
import type { AdoptionStore } from './adoptionState';
import {
  clearDerivedComponentContent,
  type DerivedComponentConfig,
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

const SKILLS_LEARNING_SOURCE = parseDerivedComponentSource(
  skillsLearningActionsText,
  SKILLS_LEARNING_CONFIG
);

export function syncSkillsLearningDerivedContent(store: AdoptionStore): AdoptionStore {
  return syncDerivedComponentContent(store, SKILLS_LEARNING_CONFIG, SKILLS_LEARNING_SOURCE);
}

export function clearSkillsLearningDerivedContent(store: AdoptionStore): AdoptionStore {
  return clearDerivedComponentContent(store, SKILLS_LEARNING_CONFIG);
}
