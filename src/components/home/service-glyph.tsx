import type { ReactNode } from "react";

export type ServiceGlyphName = "kundli" | "marriage" | "career" | "numerology" | "vastu" | "muhurat";

export function ServiceGlyph({ name, size = 52 }: { name: ServiceGlyphName; size?: number }) {
  const drawing: Record<ServiceGlyphName, ReactNode> = {
    kundli: <>
      <circle cx="32" cy="32" r="23" /><circle cx="32" cy="32" r="17" strokeOpacity=".6"/>
      <path d="M32 9v46M9 32h46M16 16l32 32M48 16 16 48" strokeOpacity=".7"/>
      <circle cx="32" cy="32" r="5" fill="currentColor" stroke="none"/>
    </>,
    marriage: <>
      <path d="M30 50 13 33C3 22 16 9 28 22l4 4 4-4C48 9 61 22 51 33L34 50Z"/>
      <path d="M27 24c-7-8-17-2-13 7" strokeOpacity=".5"/>
    </>,
    career: <>
      <path d="M12 50h42M17 44V30h8v14M30 44V24h8v20M43 44V14h8v30"/>
      <path d="m13 22 12-8 9 4L50 7M44 7h6v6"/>
    </>,
    numerology: <>
      <circle cx="32" cy="32" r="24" strokeOpacity=".65"/>
      <path d="M12 15 32 6 52 15 58 32 52 49 32 58 12 49 6 32Z" strokeOpacity=".5"/>
      <text x="32" y="39" fontSize="23" fontFamily="Georgia, serif" fill="currentColor" stroke="none" textAnchor="middle">8</text>
    </>,
    vastu: <>
      <path d="M7 30 32 10l25 20M14 28v27h36V28M25 55V37h14v18"/>
      <path d="M22 28h20M32 13v15" strokeOpacity=".5"/>
    </>,
    muhurat: <>
      <rect x="11" y="14" width="42" height="41" rx="3"/><path d="M21 9v11M43 9v11M11 25h42"/>
      <path d="m22 39 7 7 14-14"/>
    </>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {drawing[name]}
    </svg>
  );
}
