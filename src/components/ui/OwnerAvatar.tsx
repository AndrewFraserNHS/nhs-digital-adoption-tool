import { JSX } from 'react';

export interface OwnerAvatarProps {
  name: string;
  darkMode?: boolean;
  imageDataUrl?: string;
}

const AVATAR_COLORS = [
  '#005eb8',
  '#00a499',
  '#7c3aed',
  '#b45309',
  '#be123c',
  '#0369a1',
  '#0f766e',
  '#4d7c0f',
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) {
    return '?';
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

/** Small circular avatar for an owner name - shows their uploaded photo if provided, otherwise consistent-color initials, with the full name as a tooltip. */
export function OwnerAvatar({ name, darkMode = false, imageDataUrl }: OwnerAvatarProps): JSX.Element {
  const trimmed = name.trim();
  if (!trimmed) {
    return (
      <span
        title="Unassigned"
        aria-label="Unassigned"
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold ${darkMode ? 'border-slate-600 text-slate-500' : 'border-slate-300 text-slate-400'}`}
      >
        ?
      </span>
    );
  }

  if (imageDataUrl) {
    return (
      <img
        src={imageDataUrl}
        alt={trimmed}
        title={trimmed}
        className="h-7 w-7 shrink-0 rounded-full border border-slate-300 object-cover"
      />
    );
  }

  const color = AVATAR_COLORS[hashString(trimmed) % AVATAR_COLORS.length];

  return (
    <span
      title={trimmed}
      aria-label={trimmed}
      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {getInitials(trimmed)}
    </span>
  );
}
