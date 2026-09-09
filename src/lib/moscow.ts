export type ActionPriority = 'must' | 'should';

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
 * Splits an authored action description into its MoSCoW priority (Could folds into Should - it's
 * rare enough that we don't track it separately) and the clean text with the prefix removed. Text
 * with no recognised prefix passes through unchanged.
 */
export function parseMoscowPrefix(rawText: string): ParsedMoscowPrefix {
  const trimmed = (rawText || '').trim();
  const match = trimmed.match(PREFIX_RE);
  if (!match) {
    return { priority: undefined, needsRework: false, text: trimmed };
  }

  return {
    priority: match[1] === 'M' ? 'must' : 'should',
    needsRework: Boolean(match[2]),
    text: trimmed.slice(match[0].length).trim(),
  };
}
