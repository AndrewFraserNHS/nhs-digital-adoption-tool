/**
 * NHS.UK Frontend-inspired design tokens, expressed as Tailwind utility strings.
 * Tailwind is loaded via CDN in this project (no npm package, no config file),
 * so exact NHS colours use arbitrary-value bracket syntax rather than a theme config.
 */

export const nhsColors = {
  blue: '#005eb8',
  blueDark: '#003087',
  darkGrey: '#425563',
  midGrey: '#768692',
  paleGrey: '#f0f4f5',
  border: '#d8dde0',
  black: '#212b32',
  green: '#00703c',
  focusYellow: '#ffeb3b'
} as const;

const focusRing = 'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffeb3b] focus-visible:ring-offset-2';

export const nhsButtonPrimary =
  `inline-flex items-center justify-center rounded-md bg-[#005eb8] px-4 py-2 text-sm font-semibold text-white shadow-[0_3px_0_#003087] hover:bg-[#00417a] transition-colors ${focusRing}`;

export const nhsButtonSecondary =
  `inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#212b32] border border-[#768692] shadow-[0_3px_0_#d8dde0] hover:bg-[#f0f4f5] transition-colors ${focusRing}`;

export const nhsInput =
  `border border-[#768692] shadow-sm sm:text-sm ${focusRing} focus-visible:border-[#005eb8]`;

export const nhsCard = 'bg-white rounded-md border border-[#d8dde0] border-t-4 border-t-[#005eb8] shadow-sm';

export const nhsSectionHeading = 'text-2xl font-bold text-[#212b32]';

export const nhsFocusRing = focusRing;
