import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { legalDrafts, type LegalKey } from "@/config/legal";
import { siteConfig } from "@/config/site";

export function LegalPage({ kind }: { kind: LegalKey }) {
  const page = legalDrafts[kind];
  return (
    <>
      <section className="page-hero page-hero-legal celestial-glow star-field border-b border-gold/25 bg-navy-deep py-14 sm:py-20">
        <Container className="page-hero-inner">
          <nav aria-label="Breadcrumb" className="page-hero-breadcrumb mb-9 flex items-center gap-2 text-sm text-cream/75">
            <Link href="/" className="hover:text-gold-light">Home</Link><Icon name="chevron-right" size={16}/><span aria-current="page" className="text-gold-light">{page.title}</span>
          </nav>
          <p className="eyebrow">Legal information · Pending client approval</p>
          <h1 className="page-hero-title mt-4 font-display text-[clamp(3rem,6vw,5rem)] text-cream">{page.title}</h1>
          <p className="page-hero-lead mt-5 max-w-3xl text-base leading-8 text-muted">{page.subtitle}</p>
          <div role="note" className="page-hero-policy-note mt-7 max-w-3xl rounded-xl border border-gold/40 bg-gold/10 p-5">
            <h2 className="font-semibold text-gold-light">Draft policy – not yet approved</h2>
            <p className="mt-2 text-sm leading-7 text-cream/80">{page.warning}</p>
          </div>
        </Container>
      </section>
      <section className="bg-navy-deep py-16 sm:py-20">
        <Container className="grid items-start gap-9 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside aria-label="On this page" className="lg:sticky lg:top-28">
            <div className="rounded-xl border border-gold/25 bg-navy-soft/75 p-5">
              <h2 className="font-display text-xl text-cream">On This Page</h2>
              <ol className="mt-5 space-y-3">
                {page.sections.map((section,index)=>(
                  <li key={section.title}><a href={`#policy-${index+1}`} className="flex gap-3 text-sm leading-6 text-muted hover:text-gold-light">
                    <span className="text-gold">{String(index+1).padStart(2,"0")}</span>{section.title}
                  </a></li>
                ))}
              </ol>
            </div>
          </aside>
          <article className="max-w-3xl space-y-10">
            {page.sections.map((section,index)=>(
              <section id={`policy-${index+1}`} key={section.title} className="scroll-mt-28 border-b border-gold/15 pb-9 last:border-0">
                <h2 className="font-display text-2xl text-cream sm:text-3xl">{section.title}</h2>
                <p className="mt-4 text-sm leading-8 text-cream/80 sm:text-base">{section.body}</p>
                {section.bullets && <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-7 text-muted marker:text-gold">{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="rounded-xl border border-gold/30 bg-navy-soft/70 p-6">
              <h2 className="font-display text-xl text-cream">Need clarification?</h2>
              <p className="mt-3 text-sm leading-7 text-muted">Contact {siteConfig.name} to confirm applicable terms.</p>
              <a href={`mailto:${siteConfig.contactEmail}`} className="mt-4 inline-flex min-h-11 items-center gap-2 break-all text-sm font-semibold text-gold-light hover:underline">
                <Icon name="mail" size={18}/>{siteConfig.contactEmail}
              </a>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
