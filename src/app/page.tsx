import { canonicalPath } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppBookingLink } from "@/components/booking/whatsapp-booking-link";
import { AstrologerVisual } from "@/components/about/astrologer-visual";
import { CelestialArt } from "@/components/ui/celestial-art";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icons";
import { ServiceGlyph } from "@/components/home/service-glyph";
import { consultationSteps } from "@/config/about";
import { servicePreviews } from "@/config/home";
import { siteConfig } from "@/config/site";
import "./homepage.css";

export const metadata: Metadata = {
  alternates: { canonical: canonicalPath("/") },
  title: "Tothepoint Astrology | Hariom Shrivastava",
  description:
    "Explore Tothepoint Astrology with Hariom Shrivastava. Learn about traditional Vedic astrology, six consultation areas and direct WhatsApp enquiries.",
  openGraph: {
    title: "Tothepoint Astrology | Guidance, Clarity, Better Tomorrow",
    description: "Explore the approach, consultation services and traditional perspectives at Tothepoint Astrology.",
    type: "website",
  },
};

const values = [
  { icon: "star", title: "Practical Guidance", text: "Clear conversations about your questions and personal priorities." },
  { icon: "sparkles", title: "Vedic Perspective", text: "Explore interpretations from traditional Indian astrology." },
  { icon: "message", title: "Personal Approach", text: "Every enquiry begins with the topic that matters to you." },
  { icon: "shield", title: "Your Growth Matters", text: "Reflect on choices with perspective, without promised outcomes." },
] as const;

const reasons = [
  { icon: "star", title: "In-depth Exploration", text: "Discuss birth charts and the symbolic ideas behind traditional interpretations." },
  { icon: "message", title: "Clear Communication", text: "Understand the consultation scope, format and fees before arranging a session." },
  { icon: "sparkles", title: "Personalized Discussion", text: "Focus on the questions and life topics you actually want to explore." },
  { icon: "shield", title: "Respectful Approach", text: "Guidance remains interpretive. Your decisions and wellbeing come first." },
] as const;

function HomeHero() {
  return (
    <section className="home-hero relative isolate overflow-hidden border-b border-gold/25 bg-[#041020]" aria-labelledby="home-title">
      <div aria-hidden="true" className="star-field absolute inset-0 opacity-35" />
      <div aria-hidden="true" className="home-hero-cloud pointer-events-none absolute inset-0" />
      <Container className="relative grid items-end gap-5 pb-0 pt-7 md:grid-cols-[1.02fr_.98fr] md:gap-0 md:pt-7 lg:min-h-[560px]">
        <div className="relative z-10 max-w-[670px] pb-10 sm:pb-14 md:pb-[88px]">
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-12">
            <ol className="flex items-center gap-2 text-xs text-gold-light/90 sm:text-sm">
              <li><Link href="/" aria-current="page" className="hover:text-cream">Home</Link></li>
              <li aria-hidden="true"><Icon name="chevron-right" size={15} /></li>
              <li>Welcome</li>
            </ol>
          </nav>
          <p className="home-kicker mb-4">Meet the person behind Tothepoint Astrology</p>
          <h1 id="home-title" className="font-display text-[clamp(3.15rem,5.6vw,5.6rem)] leading-[1.07] tracking-[-.045em] text-cream">
            About
            <span className="block text-gold-light">Hariom Shrivastava</span>
          </h1>
          <h2 className="mt-5 font-display text-lg leading-snug text-cream sm:text-2xl">
            Astrology with Purpose. Guidance for a Better Tomorrow.
          </h2>
          <p className="mt-4 max-w-[590px] text-sm leading-[1.8] text-cream/75 sm:text-base">
            At {siteConfig.name}, explore traditional Vedic astrology through a clear,
            personal conversation. Discuss relationships, career, life decisions and
            the questions that matter most to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppBookingLink icon="message">Book a Consultation</WhatsAppBookingLink>
            <ActionLink href="/services" variant="outline">Explore Services</ActionLink>
          </div>
        </div>
        <div className="home-hero-art relative z-0 mx-auto w-full max-w-[620px] self-end" role="img" aria-label="Decorative gold zodiac illustration with the initials HS; no verified portrait has been provided">
          <div aria-hidden="true" className="absolute inset-[5%_2%_8%] rounded-full bg-[radial-gradient(circle,rgba(215,146,55,.2),transparent_65%)] blur-xl" />
          <div aria-hidden="true" className="absolute bottom-[-20%] right-[-5%] w-[106%] opacity-80">
            <CelestialArt className="max-w-none" />
          </div>
          <div aria-hidden="true" className="home-hero-figure">
            <div className="home-hero-halo" />
            <span className="home-hero-monogram">HS</span>
            <div className="home-hero-figure-name">Tothepoint Astrology</div>
          </div>
          <div aria-hidden="true" className="home-hero-stars">✦ <span>✧</span> ✦</div>
        </div>
      </Container>
    </section>
  );
}

function ValuesStrip() {
  return (
    <section aria-label="Guiding values" className="home-paper border-b border-[#e0d5c3] py-9 sm:py-11">
      <Container className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
        {values.map((item, index) => (
          <article key={item.title} className={["flex flex-col items-center px-3 text-center sm:px-7", index > 0 ? "lg:border-l lg:border-[#d9c7ae]" : ""].join(" ")}>
            <span className="text-[#93631c]"><Icon name={item.icon} size={42} strokeWidth={1.45}/></span>
            <h2 className="mt-3 font-display text-base font-semibold text-[#102032] sm:text-lg">{item.title}</h2>
            <p className="mt-2 max-w-[270px] text-xs leading-6 text-[#4c4b46] sm:text-sm">{item.text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}

function Journey() {
  return (
    <section id="about" aria-labelledby="journey-title" className="home-night relative overflow-hidden py-14 sm:py-20">
      <div aria-hidden="true" className="star-field absolute inset-0 opacity-20"/>
      <Container className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[480px]">
          <AstrologerVisual variant="journey"/>
        </div>
        <div>
          <p className="home-kicker">My Journey</p>
          <h2 id="journey-title" className="mt-3 max-w-3xl font-display text-3xl leading-tight text-cream sm:text-5xl">
            A Thoughtful Approach to <span className="text-gold-light">Astrology</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-cream/75 sm:text-[15px]">
            Traditional astrology has long been one way people explore questions of timing,
            relationships and direction. {siteConfig.name} offers a setting to discuss these
            ideas with {siteConfig.astrologer} in a personal conversation.
          </p>
          <p className="mt-4 text-sm leading-7 text-cream/75 sm:text-[15px]">
            From Kundli analysis to Vastu and Muhurat, the starting point is simple:
            share what you want to understand, discuss the approach, and decide which
            consultation is relevant to you.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { highlight: "6", title: "Consultation Areas" },
              { highlight: "Direct", title: "WhatsApp Enquiries" },
              { highlight: "Personal", title: "Discussion First" },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-gold/30 bg-[#0c2033]/65 px-2 py-5 text-center sm:px-3">
                <p className="font-display text-xl font-semibold text-gold-light sm:text-3xl">{item.highlight}</p>
                <p className="mt-2 text-[10px] leading-5 text-cream/75 sm:text-xs">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="home-paper border-y border-[#e3d6c6] py-13 sm:py-17">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="why-title" className="font-display text-3xl leading-tight text-[#112336] sm:text-[42px]">Why Choose Tothepoint Astrology?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#4e4d48]">
            Traditional perspectives and practical conversations, explained with care and clarity.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {reasons.map((item) => (
            <article key={item.title} className="home-reason-card flex min-h-[205px] flex-col items-center rounded-lg border border-[#e7daca] px-4 py-7 text-center sm:px-6">
              <span className="text-[#8b5d1c]"><Icon name={item.icon} size={39} strokeWidth={1.5}/></span>
              <h3 className="mt-4 font-display text-base font-semibold text-[#142538] sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-[#4f4a44] sm:text-sm">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="home-approach home-night relative overflow-hidden border-b border-gold/20 py-14 sm:py-19">
      <div aria-hidden="true" className="star-field absolute inset-0 opacity-20"/>
      <Container className="relative">
        <div className="mb-10 text-center">
          <h2 id="approach-title" className="font-display text-3xl text-cream sm:text-5xl">My Approach</h2>
          <p className="mt-3 text-sm text-cream/70">A balance of traditional perspectives and clear communication.</p>
        </div>
        <ol className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-4 md:gap-x-5">
          {consultationSteps.map((step, index) => (
            <li key={step.number} className="relative text-center">
              <div className="mx-auto flex size-[70px] items-center justify-center rounded-full border-2 border-[#d5ae73] bg-[#061427]/90 text-gold-light shadow-[0_0_0_4px_rgba(226,169,89,.06)]">
                <Icon name={step.icon} size={32}/>
              </div>
              {index < consultationSteps.length-1 && <span aria-hidden="true" className="home-step-connector hidden md:block"/>}
              <h3 className="mt-4 font-display text-lg font-semibold text-cream sm:text-xl">{index+1}. {["Understand","Interpret","Guide","Support"][index]}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-xs leading-6 text-cream/70 sm:text-sm">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Knowledge() {
  const items: { title:string; description:string; icon:IconName }[] = [
    { icon: "star", title: "Traditional Sources", description: "Explore themes associated with classical Vedic astrology." },
    { icon: "sparkles", title: "Learning & Reflection", description: "Understand the meaning and limits of traditional interpretations." },
    { icon: "calendar", title: "Six Service Areas", description: "Kundli, relationships, career, numerology, Vastu and Muhurat." },
    { icon: "shield", title: "Responsible Guidance", description: "No guaranteed predictions or replacement for qualified advice." },
  ];
  return (
    <section aria-labelledby="knowledge-title" className="home-paper py-12 sm:py-16">
      <Container>
        <div className="text-center">
          <h2 id="knowledge-title" className="font-display text-3xl text-[#102234] sm:text-[42px]">Knowledge &amp; Practice</h2>
          <p className="mt-2 text-sm text-[#514e47]">Traditional topics, presented clearly and thoughtfully.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-y-0">
          {items.map((item,index) => (
            <article key={item.title} className={["px-3 text-center sm:px-6",index>0?"lg:border-l lg:border-[#dbcbb6]":""].join(" ")}>
              <span className="inline-flex items-center justify-center text-[#95651e]"><Icon name={item.icon} size={34} strokeWidth={1.5}/></span>
              <h3 className="mt-3 font-display text-base font-semibold text-[#152538] sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-[#554d42] sm:text-sm">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-t border-[#e2d3bf] pt-7" aria-label="Explore the six consultation services">
          {servicePreviews.map((service) => (
            <Link key={service.slug} href={"/services/"+service.slug}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#d8c3a4] bg-[#fff9ef] px-4 py-2 text-xs font-semibold text-[#684317] transition-colors hover:border-[#916222] hover:bg-white">
              <ServiceGlyph name={service.icon} size={20}/>{service.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClosingCallToAction() {
  return (
    <section aria-labelledby="closing-title" className="home-final-sky star-field relative isolate overflow-hidden border-y border-gold/25 py-14 sm:py-17">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_85%,rgba(211,143,65,.33),transparent_42%)]"/>
      <svg aria-hidden="true" viewBox="0 0 1400 260" preserveAspectRatio="xMidYMax slice" className="pointer-events-none absolute bottom-0 left-0 h-[82%] w-full opacity-75">
        <path d="M0 250 80 204 164 220 270 165 356 213 450 166 534 212 636 133 700 158 791 102 880 168 966 134 1037 187 1156 108 1260 174 1345 129 1400 159V260H0Z" fill="#0b1725" />
        <path d="M0 250 130 228 234 237 351 206 458 243 570 225 663 234 749 194 827 224 926 202 1034 240 1142 209 1239 244 1324 213 1400 229V260H0Z" fill="#030d17" />
      </svg>
      <Container className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="closing-title" className="font-display text-3xl text-cream sm:text-5xl">Let’s Find Clarity Together</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-cream/80">
            Whether you are seeking perspective on a question or planning your next steps,
            begin with a conversation about traditional astrology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppBookingLink icon="message">Book Your Consultation Now</WhatsAppBookingLink>
            <ActionLink href="/services" variant="outline">View All Services</ActionLink>
          </div>
        </div>
        <span aria-hidden="true" className="hidden shrink-0 pb-5 font-display text-[5rem] leading-none text-gold/55 lg:block">✧</span>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero/>
      <ValuesStrip/>
      <Journey/>
      <WhyChoose/>
      <Approach/>
      <Knowledge/>
      <ClosingCallToAction/>
    </>
  );
}
