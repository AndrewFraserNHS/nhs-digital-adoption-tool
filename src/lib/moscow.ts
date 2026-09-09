export type ActionPriority = 'must' | 'should' | 'could';

const PRIORITY_BY_LETTER: Record<string, ActionPriority> = { M: 'must', S: 'should', C: 'could' };
const LETTER_BY_PRIORITY: Record<ActionPriority, string> = { must: 'M', should: 'S', could: 'C' };

export interface ParsedMoscowPrefix {
  priority?: ActionPriority;
  needsRework: boolean;
  text: string;
}

/**
 * Matches an authored "M "/"S "/"C " priority marker at the start of an action's text, with an
 * optional "*" (with or without a following space) flagging content that still needs reworking.
 * The whitespace after the letter is mandatory so real words that happen to start with M/S/C
 * (Monitor, Secure, Support, Coordinate, ...) are never mistaken for a prefix.
 */
const PREFIX_RE = /^([MSC])\s+(\*\s*)?/;

/**
 * Splits an authored action description into its MoSCoW priority and the clean text with the
 * prefix removed. Must/Should/Could are kept as distinct values so re-exporting never silently
 * rewrites a "C" to an "S" - Could is only treated the same as Should for display purposes
 * (colouring, blocking rules), never in the stored data. Text with no recognised prefix passes
 * through unchanged.
 */
export function parseMoscowPrefix(rawText: string): ParsedMoscowPrefix {
  const trimmed = (rawText || '').trim();
  const match = trimmed.match(PREFIX_RE);
  if (!match) {
    return { priority: undefined, needsRework: false, text: trimmed };
  }

  return {
    priority: PRIORITY_BY_LETTER[match[1]],
    needsRework: Boolean(match[2]),
    text: trimmed.slice(match[0].length).trim(),
  };
}

/** The reverse of parseMoscowPrefix's letter mapping - used when re-embedding a priority into exported action text. */
export function moscowLetterForPriority(priority: ActionPriority): string {
  return LETTER_BY_PRIORITY[priority];
}

/** Could is visually/functionally treated the same as Should everywhere except the stored letter itself. */
export function isShouldLikePriority(priority: ActionPriority | undefined): boolean {
  return priority === 'should' || priority === 'could';
}
