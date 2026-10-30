import { CelestialArt } from "@/components/ui/celestial-art";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { FeatureCard } from "@/components/ui/surface-card";
import { ActionLink } from "@/components/ui/action-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

/** Part 1 is a component showcase. The approved homepage is implemented in Part 2. */
export default function Home() {
  return (
    <>
      <section className="celestial-glow star-field relative overflow-hidden border-b border-gold/15">
        <Container className="grid min-h-[610px] items-center gap-9 pb-16 pt-16 lg:min-h-[680px] lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.17em] text-gold-light">
              <Icon name="sparkles" size={15} /> Tothepoint Astrology
            </div>
            <h1 className="font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.7rem]">
              A little guidance. <span className="gold-gradient-text">A clearer path.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-cream/75 sm:text-lg">
              Explore a thoughtful approach to astrology and connect directly to discuss a personal consultation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink href={getConsultationWhatsAppUrl()} icon="message">Book Consultation</ActionLink>
              <ActionLink href="/services" variant="outline" icon="arrow-right">Explore Services</ActionLink>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <Icon name="shield" size={20} className="text-gold" />
              <span>Consultations are arranged directly over WhatsApp.</span>
            </div>
          </div>
          <CelestialArt className="max-w-[460px] lg:max-w-[540px]" />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Design system preview · Part 1" title="One consistent experience, across every page." description="These reusable patterns establish the typography, cards, layout and interactive controls. The approved homepage design replaces this preview in Part 2." />
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard icon="sparkles" eyebrow="Discover" title="Traditional perspective" description="A consistent presentation of astrology services and educational content." />
            <FeatureCard icon="calendar" eyebrow="Connect" title="Simple consultation flow" description="A direct route to WhatsApp without an unnecessary booking or payment system." />
            <FeatureCard icon="shield" eyebrow="Explore" title="Clear and accessible" description="Responsive layouts, visible focus states and readable content from phone to desktop." />
          </div>
        </Container>
      </section>

      <section className="border-t border-gold/15 bg-navy py-16 sm:py-20">
        <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Your next step starts here.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">Reach out to discuss which consultation would fit your question.</p>
          </div>
          <ActionLink href={getConsultationWhatsAppUrl()} icon="arrow-up-right">Book Consultation</ActionLink>
        </Container>
      </section>
    </>
  );
}
