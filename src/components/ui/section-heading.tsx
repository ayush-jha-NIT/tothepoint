import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description, centered = false, aside }: {
  eyebrow: string; title: string; description?: string; centered?: boolean; aside?: ReactNode;
}) {
  return (
    <div className={["mb-10 flex flex-wrap items-end justify-between gap-7", centered ? "text-center" : ""].join(" ")}>
      <div className={["max-w-2xl", centered ? "mx-auto" : ""].join(" ")}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>}
      </div>
      {aside}
    </div>
  );
}
