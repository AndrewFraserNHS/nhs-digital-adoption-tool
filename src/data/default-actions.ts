import type { AssessmentComponent } from './components';

export type ScoreLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface DefaultActionTemplate {
  id: string;
  text: string;
}

interface TransitionDefaults {
  from: ScoreLevel;
  to: ScoreLevel;
  actions: string[];
}

interface LensDefaults {
  lens: string;
  transitions: TransitionDefaults[];
}

interface ComponentDefaults {
  componentId: string;
  lenses: LensDefaults[];
}

const VISION_DEFAULTS: ComponentDefaults = {
  componentId: 'vision',
  lenses: [
    {
      lens: 'Strategic Direction and Leadership',
      transitions: [
        {
          from: 0,
          to: 1,
          actions: [
            'Facilitate an initial vision workshop with the SRO, sponsors, and key programme stakeholders to explore the future state.',
            'Gather information on organisational priorities, programme objectives, and expected outcomes to inform vision development.',
            'Document initial themes describing why the change is needed and what success may look like.',
            'Identify key leaders who need to contribute to and endorse the vision.',
            'Establish a process and timeline for drafting the vision statement.'
          ]
        },
        {
          from: 1,
          to: 2,
          actions: [
            'Draft a formal vision statement describing the future state and intended outcomes.',
            'Test the draft vision with senior leaders to ensure strategic alignment.',
            'Refine the vision using feedback from sponsors and governance groups.',
            'Validate how the vision aligns with organisational objectives and programme benefits.',
            'Develop a high-level vision narrative that can be used consistently across the programme.'
          ]
        },
        {
          from: 2,
          to: 3,
          actions: [
            'Secure formal approval of the vision through programme governance.',
            'Develop a leadership communication plan to support vision rollout.',
            'Equip sponsors with key messages, presentations, and briefing materials.',
            'Integrate the vision into programme governance documentation and reporting.',
            'Ensure leadership communications consistently reference the agreed vision.'
          ]
        },
        {
          from: 3,
          to: 4,
          actions: [
            'Ensure sponsors consistently communicate the vision during governance and operational meetings.',
            'Integrate the vision into programme decision-making and governance discussions.',
            'Review leadership communications regularly for alignment and consistency.',
            'Provide coaching to sponsors and leaders on vision-led leadership behaviours.',
            'Measure leadership engagement in promoting the vision.'
          ]
        },
        {
          from: 4,
          to: 5,
          actions: [
            'Embed the vision into organisational planning, governance, and decision-making processes.',
            'Ensure leaders consistently reference the vision when making strategic and operational decisions.',
            'Review organisational priorities regularly to ensure continued alignment with the vision.',
            'Use adoption and performance data to refine and strengthen how the vision is communicated.',
            'Establish mechanisms to continuously evaluate whether organisational behaviours remain aligned to the vision.'
          ]
        }
      ]
    },
    {
      lens: 'People Experience and Culture',
      transitions: [
        {
          from: 0,
          to: 1,
          actions: [
            'Conduct stakeholder listening sessions to understand current challenges and expectations.',
            'Gather feedback on people\'s perceptions of the proposed change.',
            'Identify common concerns, aspirations, and opportunities that should influence the vision.',
            'Create simple awareness messages explaining that a vision is being developed.',
            'Ensure representation from key stakeholder groups in early vision discussions.'
          ]
        },
        {
          from: 1,
          to: 2,
          actions: [
            'Run workshops with impacted stakeholder groups to test understanding of the draft vision.',
            'Collect structured feedback on whether the vision feels relevant and meaningful.',
            'Identify gaps or ambiguities in the vision from a staff perspective.',
            'Update the vision to reflect stakeholder insights and concerns.',
            'Begin developing people-centred messaging explaining how the vision affects different stakeholder groups.'
          ]
        },
        {
          from: 2,
          to: 3,
          actions: [
            'Develop audience-specific communications explaining what the vision means for different groups.',
            'Deliver engagement sessions to build understanding and awareness.',
            'Establish feedback channels to assess comprehension and acceptance.',
            'Use change agents and sponsors to reinforce the vision locally.',
            'Monitor stakeholder understanding through surveys, workshops, or feedback sessions.'
          ]
        },
        {
          from: 3,
          to: 4,
          actions: [
            'Deploy a formal vision communication campaign across all impacted stakeholder groups.',
            'Establish regular feedback loops to assess understanding and engagement.',
            'Monitor stakeholder awareness and adjust communications where necessary.',
            'Use case studies and practical examples to demonstrate the vision in action.',
            'Reinforce the vision through team meetings, departmental briefings, and change network activities.'
          ]
        },
        {
          from: 4,
          to: 5,
          actions: [
            'Measure how well staff understand and can articulate the vision.',
            'Capture and share success stories demonstrating delivery of the vision.',
            'Encourage teams to identify local improvements that support achievement of the vision.',
            'Maintain continuous engagement and listening activities to keep the vision relevant.',
            'Reinforce the vision through recognition programmes and celebration of achievements.',
            'Ensure the vision becomes part of everyday conversations, team objectives, and organisational culture.'
          ]
        }
      ]
    }
  ]
};

const COMPONENT_DEFAULTS: ComponentDefaults[] = [VISION_DEFAULTS];

function normalizeProductToken(value: string, productName: string): string {
  return value.replace(/\bproduct name\b/gi, productName || 'product name');
}

export function getDefaultActionsForTransition(
  componentId: string,
  lens: string,
  currentScore: number,
  productName: string
): { from: ScoreLevel; to: ScoreLevel; actions: DefaultActionTemplate[] } | null {
  const from = Math.max(0, Math.min(5, Math.floor(currentScore))) as ScoreLevel;
  if (from >= 5) {
    return null;
  }

  const componentDefaults = COMPONENT_DEFAULTS.find((item) => item.componentId === componentId);
  const lensDefaults = componentDefaults?.lenses.find((item) => item.lens === lens);
  const transition = lensDefaults?.transitions.find((item) => item.from === from);

  if (!transition) {
    return null;
  }

  return {
    from: transition.from,
    to: transition.to,
    actions: transition.actions.map((text, index) => ({
      id: `${componentId}:${lens}:${transition.from}-${transition.to}:${index + 1}`,
      text: normalizeProductToken(text, productName)
    }))
  };
}

export function getScoreLabel(score: number): string {
  const labels: Record<number, string> = {
    0: 'Not Started',
    1: 'Emerging',
    2: 'Developing',
    3: 'Embedding',
    4: 'Adopted',
    5: 'Thriving'
  };
  return labels[score] || `Level ${score}`;
}

export function getComponentHasDefaults(component: AssessmentComponent): boolean {
  return COMPONENT_DEFAULTS.some((item) => item.componentId === component.id);
}
