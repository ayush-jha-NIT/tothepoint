import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" aria-label="Tothepoint Astrology, home" className="group inline-flex min-w-0 items-center gap-3">
      <svg aria-hidden="true" width="43" height="43" viewBox="0 0 48 48" className="shrink-0 text-gold">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeOpacity=".65" strokeWidth="1" />
        <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="1" />
        <path d="M24 5V43M5 24H43M10.6 10.6l26.8 26.8M37.4 10.6 10.6 37.4" stroke="currentColor" strokeWidth=".9" opacity=".6" />
        <path d="m24 11 2.8 9.2L36 23l-9.2 2.8L24 35l-2.8-9.2L12 23l9.2-2.8L24 11Z" fill="currentColor" />
        <circle cx="24" cy="24" r="2.4" fill="#061427" />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[19px] font-semibold tracking-[.025em] text-cream transition-colors group-hover:text-gold-light sm:text-[21px]">Tothepoint</span>
        {!compact && <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[.34em] text-gold sm:text-[10px]">Astrology</span>}
      </span>
    </Link>
  );
}
