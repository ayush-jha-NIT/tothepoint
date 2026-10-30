import type { HTMLAttributes } from "react";
import { Icon, type IconName } from "./icons";

type SurfaceCardProps = HTMLAttributes<HTMLElement> & { as?: "article" | "div"; highlighted?: boolean };

export function SurfaceCard({
  as: Component = "div", highlighted = false, className = "", children, ...props
}: SurfaceCardProps) {
  return <Component {...props} className={["surface-panel relative overflow-hidden rounded-2xl p-6 sm:p-8", highlighted ? "ring-1 ring-gold/45" : "", className].filter(Boolean).join(" ")}>{children}</Component>;
}

export function FeatureCard({ icon, eyebrow, title, description }: {
  icon: IconName; eyebrow?: string; title: string; description: string;
}) {
  return (
    <SurfaceCard as="article" className="group h-full transition-colors hover:border-gold/45">
      <div className="mb-7 flex size-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
        <Icon name={icon} size={23} />
      </div>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h3 className="font-display text-2xl text-cream">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </SurfaceCard>
  );
}
