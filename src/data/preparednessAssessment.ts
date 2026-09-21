export type PreparednessQuestionKind = 'scale' | 'select' | 'text';

export interface PreparednessQuestion {
  number: number;
  category: string;
  text: string;
  /** scale = a maturity scale (scored); select = pick-one context question (not scored); text = free text (not scored). */
  kind: PreparednessQuestionKind;
  /** Numbered answers: option n is at index n - 1. */
  options?: string[];
  /** 1-based option number that asks the user to describe "Other". */
  otherOption?: number;
}

const q = (
  number: number,
  category: string,
  kind: PreparednessQuestionKind,
  text: string,
  options?: string[],
  otherOption?: number
): PreparednessQuestion => ({ number, category, kind, text, options, otherOption });

const LG = 'Leadership and Governance';
const SE = 'Stakeholder Engagement';
const WF = 'Workflow Integration and Processes';
const TS = 'Training and User Support';
const AP = 'Adoption Planning and Improvement';
const BO = 'Benefits and Outcome Realisation';
const GN = 'General';

export const PREPAREDNESS_QUESTIONS: PreparednessQuestion[] = [
  q(1, LG, 'scale', 'Our organisation has identified an executive sponsor or Senior Responsible Owner (eg a board member or clinical director) who will be accountable for the AVT deployment.', [
    'No sponsor identified',
    'Potential sponsor identified but not agreed / not engaged',
    'Sponsor agreed but limited capacity or visibility',
    'Sponsor agreed, active, with authority and capacity',
  ]),
  q(2, LG, 'scale', 'We have identified an appropriate governance or oversight group that would oversee AVT deployment, adoption and benefits once started.', [
    'No governance group identified',
    'Governance group identified informally; membership or cadence unclear',
    'Governance group agreed; meetings planned or starting',
    'Governance group active with clear decision rights and regular cadence',
  ]),
  q(3, LG, 'scale', 'We have an early view on how AVT adoption and progress would be reviewed by senior leaders once implementation begins.', [
    'No approach identified',
    'Idea only',
    'Proposed forums or metrics discussed',
    'Review approach defined',
    'Reporting being set up',
    'Review cadence and measures agreed and owned',
  ]),
  q(4, LG, 'scale', 'There is an emerging case for change and vision for AVT that can be articulated to impacted staff.', [
    'No case for change',
    'Early intent only',
    'Draft narrative',
    'Tested with some stakeholders',
    'Clear and consistent',
    'Clear and tailored by audience',
  ]),
  q(5, LG, 'text', 'Please briefly describe your emerging AVT case for change.'),
  q(6, LG, 'text', 'Which role would be responsible for coordinating AVT adoption and benefits realisation once the programme begins?'),
  q(7, LG, 'text', 'Please briefly describe the main adoption risks you are already aware of at this early stage.'),

  q(8, SE, 'scale', 'We have identified the key stakeholder groups that would need to be involved as AVT planning progresses.', [
    'Not identified',
    'Partial list',
    'Most groups identified',
    'Stakeholders mapped',
    'Engagement plan agreed',
    'Engagement started',
  ]),
  q(9, SE, 'scale', 'We have an initial view on which clinical or operational staff could act as local champions during AVT rollout.', [
    'None identified',
    'Idea only',
    'Some names identified',
    'Named per area',
    'Time / backfill considered',
    'Champions agreed and enabled',
  ]),
  q(10, SE, 'scale', 'We recognise that staff may have concerns about AVT use and have considered how these would be explored and addressed.', [
    'Not considered',
    'Acknowledged only',
    'Common concerns listed',
    'Plan to address drafted',
    'Engagement underway',
    'Feedback loop active',
  ]),
  q(11, SE, 'text', 'What behaviours or ways of working do you expect may need to change over time for AVT to deliver benefits?'),
  q(12, SE, 'text', 'How do you anticipate involving staff in shaping how AVT would be used in day-to-day practice?'),
  q(13, SE, 'text', 'How do you anticipate involving or engaging patients as AVT planning develops?'),
  q(14, SE, 'scale', 'We expect to put in place a communications approach to keep staff informed as AVT planning and deployment progress.', [
    'No communications planned',
    'Intent only',
    'Messages drafted',
    'Channels and audiences defined',
    'Comms plan scheduled and owned',
    'Communications started',
  ]),
  q(15, SE, 'scale', 'We recognise the importance of feedback and learning once AVT use begins and have considered how this could be supported.', [
    'Not considered',
    'Intent only',
    'Ideas identified (e.g. huddles, surveys)',
    'Mechanism defined',
    'Mechanism being set up',
    'Mechanism active and acted on',
  ]),

  q(16, WF, 'scale', 'We have considered which existing workflows are likely to be impacted by AVT and would need to be reviewed.', [
    'Not considered',
    'Early awareness',
    'Some workflows listed',
    'Key workflows mapped',
    'Changes being designed',
    'Future-state agreed and documented',
  ]),
  q(17, WF, 'scale', 'We have an initial view on how some workflows or roles may need to change when AVT is introduced.', [
    'No view',
    'Early assumptions made',
    'Some impacts identified',
    'Role changes drafted',
    'Changes tested with teams',
    'Changes agreed and communicated',
  ]),
  q(18, WF, 'text', 'What is your early thinking on how AVT use might be encouraged or embedded into routine practice over time?'),
  q(19, WF, 'scale', 'We have considered how learning from early AVT use could inform ongoing improvement.', [
    'No approach',
    'Intent only',
    'Improvement ideas listed',
    'Review process defined',
    'Review cycles planned',
    'Continuous improvement embedded',
  ]),
  q(20, WF, 'scale', 'We recognise that variation in AVT use may occur and have considered how this might be identified or reviewed.', [
    'Not considered',
    'Aware only',
    'Likely variation described',
    'Measures defined',
    'Monitoring defined',
    'Monitoring and actions in place',
  ]),
  q(21, WF, 'scale', 'We have considered the need for business continuity arrangements if AVT is unavailable or unsuitable.', [
    'Not considered',
    'Aware only',
    'Informal fallbacks known',
    'Contingency drafted',
    'Contingency agreed',
    'Tested and communicated',
  ]),

  q(22, TS, 'scale', 'We have access to an appropriate training and support approach for AVT adoption, and can make time/capacity available for staff to use it', [
    'No agreed training/support approach and no access',
    'Training/support discussed; access or time unclear',
    'Approach agreed but limited capacity / time / backfill',
    'Approach agreed and deliverable with access and time/capacity confirmed',
  ]),
  q(23, TS, 'scale', 'We have considered how staff time and capacity could be supported to learn and adapt when AVT is introduced.', [
    'No plan to protect time or provide backfill',
    'Acknowledged; informal or local arrangements only',
    'Protected time/backfill agreed for pilot areas',
    'Protected time/backfill confirmed and scheduled across rollout',
  ]),
  q(24, TS, 'scale', 'We have an initial view on how local peer support (eg champions) could be provided during early rollout.', [
    'Not planned',
    'Idea only',
    'Some support identified',
    'Support model defined',
    'Support being mobilised',
    'Support active and sustained',
  ]),
  q(25, TS, 'scale', 'We recognise that post-go-live support will be important and have considered what this might look like.', [
    'Not planned',
    'Intent only',
    'Ideas listed',
    'Support model defined',
    'Support being set up',
    'Support model active and measured',
  ]),

  q(26, AP, 'scale', 'We have an outline view of how AVT rollout and adoption could be approached (eg phased, piloted, incremental).', [
    'No approach',
    'Intent only',
    'Approach chosen',
    'Phases defined',
    'Timeline/resources drafted',
    'Plan agreed and mobilisation started',
  ]),
  q(27, AP, 'scale', 'We have considered how learning from early AVT use could be reviewed and acted on as adoption progresses.', [
    'No learning loop',
    'Intent only',
    'Proposed reviews',
    'Review cadence defined',
    'Reviews scheduled',
    'Reviews happening and actions tracked',
  ]),
  q(28, AP, 'scale', 'How will change and adoption activity for AVT primarily be resourced?', [
    'No resource identified',
    'Resource expected but not defined',
    'External delivery partner leading',
    'Internal staff alongside substantive roles',
    'Int and ext resource with internal ownership',
    'Fully resourced internal team',
  ]),

  q(29, BO, 'scale', 'We have identified the priority outcomes AVT is expected to improve in our context (eg clinic flow, documentation timeliness, clinician workload or experience), grounded in local service pressures.', [
    'No priority outcomes identified',
    'Broad or generic outcomes identified',
    'Priority outcomes identified but not yet agreed or tested locally',
    'Clear, agreed priority outcomes grounded in local service pressures',
  ]),
  q(30, BO, 'select', 'Which best describes the current state of outpatient clinics and clinician workload in areas likely to use AVT? (Select one)', [
    'Current position not understood',
    'Significant workforce pressure limits additional activity',
    'Most Clinics routinely overbooked',
    'Admin outside contracted hours',
    'Most Clinics full but potential to increase activity',
  ]),
  q(31, BO, 'scale', 'We recognise the need to understand whether AVT contributes to improvements and have considered what might be measured', [
    'No measures identified',
    'Ideas only',
    'Draft measures',
    'Measures and data sources identified',
    'Baseline / collection plan drafted',
    'Baseline and review plan agreed',
  ]),
  q(32, BO, 'scale', 'We recognise AVT benefits may be realised in different ways (eg time savings, staff wellbeing, patient experience) and have considered how we would review and adapt if expected benefits are not realised', [
    'Not considered',
    'Intent only',
    'Triggers discussed',
    'Review approach defined',
    'Review cadence planned',
    'Review and adaptation mechanism active',
  ]),
  q(33, BO, 'select', 'If AVT reduces administrative time, how is that time most likely to be used in practice? (Select one)', [
    'Seeing additional patients',
    'Reducing backlog/overbooking and stabilising clinics',
    'Completing work within contracted hours (well-being/sustainability)',
    'Improving quality/safety/patient interaction',
    'Other (please describe)',
  ], 5),
  q(34, BO, 'text', 'Briefly describe your expected benefits from AVT (including whether you expect direct productivity, pressure relief, and/or wellbeing benefits) and any early measures you would consider'),

  q(35, GN, 'text', 'Any additional comments on your readiness to begin the AVT journey or areas where early support may be helpful?'),
];

export const PREPAREDNESS_CATEGORIES: string[] = Array.from(
  new Set(PREPAREDNESS_QUESTIONS.map((question) => question.category))
);

export type PreparednessGrade = 'A*' | 'A' | 'B' | 'C' | 'D';

/** Minimum overall percentage for each grade (notional, highest first). Anything below the last is a D. */
export const PREPAREDNESS_GRADE_THRESHOLDS: { grade: PreparednessGrade; min: number }[] = [
  { grade: 'A*', min: 90 },
  { grade: 'A', min: 75 },
  { grade: 'B', min: 60 },
  { grade: 'C', min: 40 },
  { grade: 'D', min: 0 },
];

export const PREPAREDNESS_GRADE_DESCRIPTIONS: Record<PreparednessGrade, string> = {
  'A*': 'Excellent preparedness - governance, engagement, workflows, support, planning and benefits are all well developed. You are well placed to begin.',
  A: 'Strong preparedness - most of the foundations are in place, with a few areas still to firm up before or during early rollout.',
  B: 'Good foundations - clear progress in several areas, but some gaps that should be closed as planning progresses.',
  C: 'Developing - some areas are underway but significant gaps remain. Targeted early support would help.',
  D: 'Early stage - most preparation is still to do. Focus on sponsorship, governance and a clear case for change first, and seek early support.',
};

export function gradeForPercentage(percentage: number): PreparednessGrade {
  return (
    PREPAREDNESS_GRADE_THRESHOLDS.find((threshold) => percentage >= threshold.min)?.grade || 'D'
  );
}

export interface PreparednessScore {
  percentage: number;
  grade: PreparednessGrade;
  answered: number;
  total: number;
}

/**
 * Scores the maturity-scale questions only (free-text and the two pick-one context questions are
 * excluded). Each answer is normalised to 0-1 across its own scale ((n - 1) / (max - 1)) so 4- and
 * 6-point scales carry equal weight, and the percentage is the mean over the answered questions.
 */
export function scorePreparedness(
  answers: Record<number, number | undefined>,
  questions: PreparednessQuestion[] = PREPAREDNESS_QUESTIONS
): PreparednessScore {
  const scored = questions.filter((question) => question.kind === 'scale' && question.options);
  const normalised = scored
    .map((question) => {
      const answer = answers[question.number];
      const max = question.options?.length || 0;
      return answer && max > 1 ? (answer - 1) / (max - 1) : null;
    })
    .filter((value): value is number => value !== null);
  const percentage =
    normalised.length === 0
      ? 0
      : (normalised.reduce((total, value) => total + value, 0) / normalised.length) * 100;
  return {
    percentage,
    grade: gradeForPercentage(percentage),
    answered: normalised.length,
    total: scored.length,
  };
}
