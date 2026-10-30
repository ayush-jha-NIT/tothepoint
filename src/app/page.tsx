import type { Metadata } from "next";
import Link from "next/link";
import { HomeFaq } from "@/components/home/faq-list";
import { ServiceGlyph } from "@/components/home/service-glyph";
import { ActionLink } from "@/components/ui/action-link";
import { CelestialArt } from "@/components/ui/celestial-art";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { servicePreviews } from "@/config/home";
import { siteConfig } from "@/config/site";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Personal Astrology Consultations | Tothepoint Astrology",
  description:
    "Discover Kundli, relationship, career, numerology, Vastu and Muhurat consultations with Hariom Shrivastava. Contact Tothepoint Astrology directly on WhatsApp.",
  openGraph: {
    title: "Tothepoint Astrology | Guidance, Clarity, Better Tomorrow",
    description:
      "Explore traditional astrology consultations and contact Hariom Shrivastava directly through WhatsApp.",
    type: "website",
  },
};

function Hero() {
  return (
    <section
      aria-labelledby="home-title"
      className="celestial-glow star-field relative isolate overflow-hidden border-b border-gold/20 bg-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-12 size-[680px] rounded-full bg-[radial-gradient(circle,rgba(184,122,46,.16),transparent_66%)] blur-2xl"
      />
      <Container className="relative grid min-h-[630px] items-center gap-8 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:min-h-[670px] lg:grid-cols-[1.12fr_.88fr] lg:py-20">
        <div className="relative z-10 max-w-[670px]">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.27em] text-gold-light sm:text-xs">
            <span>Guided by ancient wisdom</span>
            <span className="h-px w-10 bg-gold/80" />
          </div>
          <h1 id="home-title" className="font-display text-[clamp(2.85rem,6vw,5.25rem)] leading-[1.08] tracking-[-.035em] text-cream">
            Traditional Astrological Wisdom.
            <span className="mt-2 block gold-gradient-text">Clear, Personal Guidance.</span>
          </h1>
          <p className="mt-7 max-w-[570px] text-[15px] leading-8 text-cream/75 sm:text-lg">
            Explore personal astrology consultations for life, relationships, career and the questions that matter to you.
            Connect directly with {siteConfig.astrologer} to discuss your next steps.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <ActionLink href={getConsultationWhatsAppUrl()} icon="arrow-right">
              Book Consultation
            </ActionLink>
            <ActionLink href={getConsultationWhatsAppUrl()} variant="outline" icon="message">
              Chat on WhatsApp
            </ActionLink>
          </div>
          <div className="mt-11 grid max-w-[580px] grid-cols-1 gap-4 border-t border-gold/15 pt-6 sm:grid-cols-3 sm:gap-3">
            {[
              { label: "Personalized conversation", icon: "star" },
              { label: "Direct contact on WhatsApp", icon: "message" },
              { label: "Six consultation topics", icon: "calendar" },
            ].map((item) => (
              <div className="flex items-center gap-3" key={item.label}>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy-soft/70 text-gold">
                  <Icon name={item.icon as "star" | "message" | "calendar"} size={17} />
                </div>
                <span className="text-xs leading-5 text-cream/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:translate-x-5" aria-label="Decorative celestial astrology illustration" role="img">
          <div className="absolute inset-[18%] rounded-full bg-gold/10 blur-3xl" />
          <CelestialArt className="relative max-w-none drop-shadow-[0_0_50px_rgba(207,158,75,.17)]" />
          <div className="absolute bottom-[8%] left-[8%] rounded-xl border border-gold/30 bg-navy-deep/85 px-5 py-3 shadow-xl backdrop-blur-md sm:left-[3%]">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-gold-light">Vedic astrology</p>
            <p className="mt-1 font-display text-lg text-cream">A tradition of reflection</p>
          </div>
          <div className="absolute right-[4%] top-[8%] flex size-11 items-center justify-center rounded-full border border-gold/35 bg-navy-deep/80 text-gold-light shadow-xl">
            <Icon name="sparkles" size={23} />
          </div>
        </div>
      </Container>
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-navy-deep py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-11 max-w-3xl text-center">
          <p className="eyebrow">Our services</p>
          <h2 id="services-title" className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">Consultation <span className="gold-gradient-text">Services</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Explore traditional astrology perspectives across six areas of life.
            Each consultation begins with a personal conversation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {servicePreviews.map((service) => (
            <article
              key={service.slug}
              className="group relative flex h-full flex-col rounded-xl border border-gold/30 bg-[linear-gradient(150deg,#0c1b31,#071326)] px-4 pb-5 pt-7 text-center shadow-[0_20px_40px_rgba(0,0,0,.15)] transition-colors hover:border-gold/70 hover:bg-navy-soft"
            >
              <div className="mx-auto flex size-17 items-center justify-center text-gold transition-transform duration-200 group-hover:-translate-y-1">
                <ServiceGlyph name={service.icon} size={57} />
              </div>
              <h3 className="mt-4 min-h-[50px] font-display text-[19px] leading-6 text-cream">{service.title}</h3>
              <p className="mt-3 flex-1 text-[12px] leading-[1.65] text-cream/70">{service.description}</p>
              <div className="relative z-10 mt-6 flex justify-center">
                <Link
                  href={"/services/" + service.slug}
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-semibold text-gold-light underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  Explore service <Icon name="arrow-right" size={14} />
                </Link>
              </div>
              <div className="relative z-10 mt-2">
                <Link
                  href={getConsultationWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center text-[11px] font-medium text-cream/75 underline-offset-4 hover:text-gold-light hover:underline"
                >Book on WhatsApp</Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AboutPreview() {
  return (
    <section id="about" aria-labelledby="about-title" className="celestial-glow star-field border-y border-gold/15 bg-navy py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_.8fr_.9fr] lg:gap-10">
        <div className="max-w-xl">
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-4 font-display text-4xl leading-[1.16] text-cream sm:text-5xl">
            Meet <span className="gold-gradient-text">Hariom Shrivastava</span>
          </h2>
          <p className="mt-7 text-[15px] leading-8 text-cream/75">
            At Tothepoint Astrology, conversations begin with listening.
            Explore traditional Vedic astrology perspectives with {siteConfig.astrologer}, tailored to the questions you bring.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Learn about the consultation approach, the available services and what to expect before getting in touch.
          </p>
          <div className="mt-8">
            <ActionLink href="/about" icon="arrow-right">Know More About Us</ActionLink>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[370px] items-center justify-center p-2">
          <div className="absolute -inset-2 rounded-[22px] border border-gold/15" />
          <div className="relative flex aspect-[.83] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gold/45 bg-[radial-gradient(ellipse_at_50%_20%,#314159_0%,#0b182b_65%,#060e1d_100%)] px-6 text-center shadow-[0_35px_80px_rgba(0,0,0,.3)]">
            <div className="absolute inset-0 opacity-55"><CelestialArt className="max-w-none" /></div>
            <div className="relative flex size-28 items-center justify-center rounded-full border border-gold/50 bg-navy-deep/85 shadow-[0_0_45px_rgba(236,182,91,.16)]">
              <span className="font-display text-5xl text-gold-light">HS</span>
            </div>
            <p className="relative mt-7 font-display text-2xl text-cream">Hariom Shrivastava</p>
            <p className="relative mt-2 text-[10px] font-semibold uppercase tracking-[.2em] text-gold-light">Tothepoint Astrology</p>
            <p className="relative mt-7 text-xs leading-6 text-cream/65">Portrait will be added after client approval</p>
          </div>
        </div>

        <div className="grid gap-6">
          {[
            { icon: "star", title: "Personalized Guidance", description: "A conversation centered on your specific questions and concerns." },
            { icon: "sparkles", title: "Traditional Perspective", description: "Explore ideas and interpretations from Vedic astrology." },
            { icon: "arrow-right", title: "Clear Next Steps", description: "Discuss the consultation process before making arrangements." },
            { icon: "shield", title: "Thoughtful Communication", description: "Know what information is being requested and why." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-navy-deep/65 text-gold">
                <Icon name={item.icon as "star" | "sparkles" | "arrow-right" | "shield"} size={23} />
              </div>
              <div>
                <h3 className="font-display text-lg text-cream">{item.title}</h3>
                <p className="mt-1 text-xs leading-6 text-cream/65">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step: "01", title: "Choose a Topic", description: "Browse the services and find the area you want to discuss.", icon: "star" },
    { step: "02", title: "Message on WhatsApp", description: "Use the consultation button to send your inquiry directly.", icon: "message" },
    { step: "03", title: "Arrange Your Consultation", description: "Confirm availability, format and any applicable fees in the conversation.", icon: "calendar" },
  ] as const;

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="star-field border-b border-gold/15 bg-navy-deep py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-11 text-center">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title" className="mt-4 font-display text-4xl text-cream sm:text-5xl">A Simple Path to <span className="gold-gradient-text">Clarity</span></h2>
        </div>
        <ol className="grid gap-5 lg:grid-cols-3">
          {steps.map((item, index) => (
            <li key={item.step} className="relative flex h-full items-start gap-4 rounded-xl border border-gold/25 bg-navy-soft/70 p-5 sm:p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-navy">{index + 1}</span>
              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-2.5 text-gold-light">
                  <Icon name={item.icon} size={25} />
                  <span className="text-[10px] font-semibold uppercase tracking-[.2em]">Step {item.step}</span>
                </div>
                <h3 className="font-display text-xl text-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep p-1 text-gold lg:flex">
                  <Icon name="arrow-right" size={22} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="celestial-glow bg-navy py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-title" className="mt-4 font-display text-4xl text-cream sm:text-5xl">What Clients <span className="gold-gradient-text">Say</span></h2>
          <div className="mx-auto mt-9 rounded-2xl border border-gold/30 bg-navy-deep/80 px-7 py-12 sm:px-12">
            <Icon name="star" size={37} className="mx-auto text-gold" />
            <h3 className="mt-5 font-display text-2xl text-cream">Real stories deserve real permission.</h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
              We will publish genuine client feedback once it has been verified and approved.
              No illustrative reviews or ratings are presented as actual experiences.
            </p>
            <div className="mt-7">
              <ActionLink href="/testimonials" variant="outline" icon="arrow-right">Testimonials Page</ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClosingCallToAction() {
  return (
    <section aria-labelledby="closing-title" className="celestial-glow star-field relative overflow-hidden border-y border-gold/25 bg-navy-soft py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(211,155,72,.16),transparent_55%)]" />
      <Container className="relative text-center">
        <p className="eyebrow">Connect with us</p>
        <h2 id="closing-title" className="mx-auto mt-3 max-w-4xl font-display text-3xl leading-tight text-cream sm:text-5xl">
          Ready for a Personal Astrology Consultation?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-cream/75 sm:text-base">
          Reach out with your questions, and arrange the details directly on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ActionLink href={getConsultationWhatsAppUrl()} icon="arrow-right">Book Your Consultation</ActionLink>
          <ActionLink href={getConsultationWhatsAppUrl()} variant="outline" icon="message">Contact on WhatsApp</ActionLink>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <HowItWorks />
      <TestimonialsPreview />
      <HomeFaq />
      <ClosingCallToAction />
    </>
  );
}
