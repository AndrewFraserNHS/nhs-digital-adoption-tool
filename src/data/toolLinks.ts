export const IN_APP_TOOLS = [
  'highlight-builder',
  'force-field-analysis',
  'compare',
  'change-impact-assessment',
  'stakeholder-analysis',
] as const;
export type InAppTool = (typeof IN_APP_TOOLS)[number];

/** Default label/matched-text pre-fill shown when a Tool Linking entry is set to this tool. */
export const DEFAULT_TOOL_LINK_TEXT: Record<InAppTool, { label: string; matchText: string }> = {
  'highlight-builder': { label: 'Highlight Builder', matchText: 'Highlight Builder' },
  'force-field-analysis': { label: 'Force Field Analysis', matchText: 'Force Field Analysis' },
  compare: { label: 'Assess & Compare', matchText: 'Assess & Compare' },
  'change-impact-assessment': {
    label: 'Change Impact Assessment',
    matchText: 'Change Impact Assessment',
  },
  'stakeholder-analysis': { label: 'Stakeholder Analysis', matchText: 'Stakeholder Analysis' },
};

export interface ToolLinkEntry {
  key: string;
  tool: InAppTool;
  matchText: string;
}
