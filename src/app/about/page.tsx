import { canonicalPath, getSiteOrigin, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppBookingLink } from "@/components/booking/whatsapp-booking-link";
import type { Metadata } from "next";
import Link from "next/link";
import { AboutCta } from "@/components/about/about-cta";
import { AstrologerVisual } from "@/components/about/astrologer-visual";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";
import { aboutReasons, aboutValues, areasOfInterest, consultationSteps } from "@/config/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: canonicalPath("/about") },
  title: "About Hariom Shrivastava",
  description:
    "Get to know Tothepoint Astrology and Hariom Shrivastava, explore our traditional astrology consultation approach and connect directly through WhatsApp.",
  openGraph: {
    title: "About Hariom Shrivastava | Tothepoint Astrology",
    description:
      "Learn about our personal approach to traditional astrology and how to arrange a consultation.",
    type: "website",
  },
};

function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="celestial-glow star-field relative overflow-hidden border-b border-gold/25 bg-navy-deep">
      <div aria-hidden="true" className="pointer-events-none absolute right-[-9%] top-[-25%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(209,147,68,.15),transparent_63%)] blur-xl" />
      <Container className="relative grid min-h-[620px] items-center gap-10 pb-16 pt-12 lg:grid-cols-[1.06fr_.94fr] lg:gap-14 lg:pb-20 lg:pt-14">
        <div className="max-w-2xl">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-cream/75">
              <li><Link href="/" className="transition-colors hover:text-gold-light">Home</Link></li>
              <li aria-hidden="true"><Icon name="chevron-right" size={15} className="text-gold" /></li>
              <li aria-current="page" className="text-gold-light">About</li>
            </ol>
          </nav>
          <p className="eyebrow">The person behind Tothepoint Astrology</p>
          <h1 id="about-heading" className="mt-4 font-display text-[clamp(2.9rem,5.2vw,5.15rem)] leading-[1.09] tracking-[-.035em] text-cream">
            About <span className="block gold-gradient-text">Hariom Shrivastava</span>
          </h1>
          <h2 className="mt-6 font-display text-xl leading-snug text-cream sm:text-2xl">
            Astrology with Purpose. Guidance for a Better Tomorrow.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-cream/75 sm:text-base">
            Welcome to {siteConfig.name}. Discover a place to explore traditional astrology perspectives
            on relationships, career, life decisions and personal questions, in conversation with {siteConfig.astrologer}.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
            Our aim is to make the consultation process approachable: start with a question,
            understand the service and arrange the details directly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppBookingLink icon="arrow-right">Book a Consultation</WhatsAppBookingLink>
            <ActionLink href="/services" variant="outline" icon="arrow-right">Explore Services</ActionLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden="true" className="absolute -inset-5 rounded-full border border-gold/10 blur-[2px]" />
          <AstrologerVisual />
          <div className="absolute -bottom-4 -left-2 z-20 hidden rounded-lg border border-gold/35 bg-navy-deep/90 px-5 py-4 shadow-xl backdrop-blur sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-gold-light">Guidance • Clarity</p>
            <p className="mt-1 font-display text-base text-cream">Better Tomorrow</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValuesStrip() {
  return (
    <section aria-label="Our values" className="bg-cream py-12 text-navy sm:py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {aboutValues.map((value, index) => (
            <article key={value.title} className={["flex flex-col items-center px-5 text-center", index > 0 ? "lg:border-l lg:border-[#d9c6ac]" : ""].join(" ")}>
              <span className="mb-4 flex size-14 items-center justify-center rounded-full border border-[#cf9a51]/40 bg-[#f4e8d6] text-[#ad772d]">
                <Icon name={value.icon} size={30} />
              </span>
              <h2 className="font-display text-xl font-semibold">{value.title}</h2>
              <p className="mt-2 max-w-[260px] text-sm leading-6 text-[#4e514e]">{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OurStory() {
  return (
    <section id="our-approach" aria-labelledby="story-heading" className="celestial-glow relative overflow-hidden border-y border-gold/20 bg-navy-deep py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <AstrologerVisual variant="journey" />
        <div className="max-w-2xl">
          <p className="eyebrow">Our perspective</p>
          <h2 id="story-heading" className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">
            A Thoughtful Approach to <span className="gold-gradient-text">Astrology</span>
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-cream/75">
            {siteConfig.name} brings together a range of consultation topics associated with
            traditional Indian astrology. From birth charts and compatibility to Vastu and Muhurat,
            each topic offers its own way of thinking about a question or situation.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-cream/75">
            With {siteConfig.astrologer}, the first step is a conversation about what you want to explore.
            We explain how to get in touch, what details may be useful and how the consultation can be arranged.
          </p>
          <div className="mt-9 grid gap-4 border-t border-gold/20 pt-7 sm:grid-cols-2">
            <div className="rounded-xl border border-gold/25 bg-navy-soft/55 p-5">
              <Icon name="message" size={25} className="text-gold-light" />
              <h3 className="mt-4 font-display text-lg text-cream">A personal conversation</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Start with your questions, not a one-size-fits-all formula.</p>
            </div>
            <div className="rounded-xl border border-gold/25 bg-navy-soft/55 p-5">
              <Icon name="shield" size={25} className="text-gold-light" />
              <h3 className="mt-4 font-display text-lg text-cream">Your decisions remain yours</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Astrology is interpretive guidance and does not guarantee results.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Reasons() {
  return (
    <section aria-labelledby="reasons-heading" className="bg-cream py-16 text-navy sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow !text-[#a16b2b]">Our commitment</p>
          <h2 id="reasons-heading" className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Why Choose <span className="text-[#ae7735]">Tothepoint Astrology?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4e514e] sm:text-base">
            A welcoming way to explore traditional astrology themes while keeping your choices and questions at the center.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {aboutReasons.map((reason) => (
            <article key={reason.title} className="flex h-full flex-col items-center rounded-xl border border-[#e3d5bf] bg-[#fffaf2] px-6 py-8 text-center shadow-[0_12px_28px_rgba(72,42,15,.07)]">
              <div className="flex size-14 items-center justify-center rounded-full bg-[#f6ead9] text-[#a9752c]">
                <Icon name={reason.icon} size={29} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#4e514e]">{reason.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ConsultationApproach() {
  return (
    <section aria-labelledby="process-heading" className="celestial-glow star-field border-y border-gold/25 bg-navy py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow">Our approach</p>
          <h2 id="process-heading" className="mt-4 font-display text-4xl text-cream sm:text-5xl">A Clear, Simple Process</h2>
          <p className="mt-4 text-sm leading-7 text-cream/75 sm:text-base">From your first question to the conversation itself, here is what to expect.</p>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {consultationSteps.map((step, index) => (
            <li key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative flex size-[78px] items-center justify-center rounded-full border-2 border-gold/80 bg-navy-deep/90 text-gold-light shadow-[0_0_32px_rgba(232,182,100,.1)]">
                <Icon name={step.icon} size={34} />
              </div>
              {index < consultationSteps.length - 1 && (
                <div aria-hidden="true" className="absolute left-[calc(50%+50px)] right-[-47%] top-[37px] hidden items-center lg:flex">
                  <div className="h-px w-full bg-gradient-to-r from-gold/70 to-gold/30" />
                  <Icon name="arrow-right" size={19} className="-ml-2 shrink-0 text-gold-light" />
                </div>
              )}
              <p className="mt-5 text-xs font-bold tracking-[.18em] text-gold-light">STEP {step.number}</p>
              <h3 className="mt-2 font-display text-xl text-cream">{step.title}</h3>
              <p className="mt-2 max-w-xs px-2 text-sm leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Disciplines() {
  return (
    <section id="disciplines" aria-labelledby="disciplines-heading" className="bg-cream py-16 text-navy sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow !text-[#a16b2b]">Topics to explore</p>
          <h2 id="disciplines-heading" className="mt-3 font-display text-4xl sm:text-5xl">Traditional Disciplines & Services</h2>
          <p className="mt-4 text-sm leading-7 text-[#4e514e] sm:text-base">
            Learn which kind of consultation relates to your questions. Detailed services and availability are confirmed directly.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areasOfInterest.map((area, index) => (
            <article key={area.slug} className="group flex flex-col rounded-xl border border-[#e1cbaa] bg-[#fffaf2] p-6 shadow-[0_12px_28px_rgba(72,42,15,.06)] transition-colors hover:border-[#ae7735] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-[#ad772d]">{String(index + 1).padStart(2, "0")}</span>
                <Icon name="sparkles" size={20} className="text-[#c99e67]" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#4e514e]">{area.description}</p>
              <Link href={`/services/${area.slug}`} className="mt-6 inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-[#965d1e] transition-colors hover:text-navy">
                Explore this service <Icon name="arrow-right" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {getSiteOrigin() && <JsonLd data={breadcrumbSchema(getSiteOrigin()!, [{ name: "Home", path: "/" }, { name: "About", path: "/about" }])}/>} 
      <AboutHero />
      <ValuesStrip />
      <OurStory />
      <Reasons />
      <ConsultationApproach />
      <Disciplines />
      <AboutCta />
    </>
  );
}
