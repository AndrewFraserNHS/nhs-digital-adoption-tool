export type ToolkitOptionKey = 'avt-v2-2026' | 'change-management-v3-2023';

export interface ToolkitOption {
  key: ToolkitOptionKey;
  label: string;
  filename: string;
  path: string;
}

export const TOOLKIT_OPTIONS: ToolkitOption[] = [
  {
    key: 'avt-v2-2026',
    label: 'AVT Digital Adoption Toolkit (V2.1, Jul 2026)',
    filename: 'AVT Digital Adoption Toolkit - V2.1 July 2026.pdf',
    path: '/AVT%20Digital%20Adoption%20Toolkit%20-%20V2.1%20July%202026.pdf',
  },
  {
    key: 'change-management-v3-2023',
    label: 'Change Management Toolkit (V3.0, Sep 2023)',
    filename: 'Change Management Toolkit v3.0 September 2023.pdf',
    path: '/Change%20Management%20Toolkit%20v3.0%20September%202023.pdf',
  },
];

export const DEFAULT_TOOLKIT_KEY: ToolkitOptionKey = 'avt-v2-2026';

export function isToolkitOptionKey(value: unknown): value is ToolkitOptionKey {
  return TOOLKIT_OPTIONS.some((option) => option.key === value);
}

export function getToolkitByKey(key: ToolkitOptionKey): ToolkitOption {
  return TOOLKIT_OPTIONS.find((option) => option.key === key) || TOOLKIT_OPTIONS[0];
}
