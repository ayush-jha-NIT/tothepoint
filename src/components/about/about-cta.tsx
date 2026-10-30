import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

export function AboutCta() {
  return (
    <section aria-labelledby="about-cta-heading" className="celestial-glow star-field relative isolate overflow-hidden border-y border-gold/25 bg-navy py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 size-[420px] rounded-full border border-gold/15 shadow-[0_0_85px_rgba(232,182,100,.09)]" />
      <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow">A conversation is the first step</p>
          <h2 id="about-cta-heading" className="mt-3 font-display text-4xl leading-tight text-cream sm:text-5xl">
            Let&apos;s Find <span className="gold-gradient-text">Clarity Together</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/75 sm:text-base">
            Share the questions on your mind and arrange a consultation directly on WhatsApp.
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto">
          <ActionLink href={getConsultationWhatsAppUrl()} icon="arrow-right">Book Consultation</ActionLink>
          <ActionLink href="/services" variant="outline" icon="arrow-right">Explore Services</ActionLink>
        </div>
        <Icon name="sparkles" size={24} className="absolute right-8 top-0 hidden text-gold/35 lg:block" />
      </Container>
    </section>
  );
}
