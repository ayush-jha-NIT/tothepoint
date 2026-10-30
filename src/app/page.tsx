import { siteConfig } from "@/config/site";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

/** Part 0 placeholder; replace with approved homepage implementation in Part 2. */
export default function Home() {
  return (
    <main className="min-h-screen bg-navy px-6 py-12 text-cream sm:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-20">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-gold/25 pb-6">
          <p className="font-display text-xl text-gold">{siteConfig.name}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/70">Foundation · Part 0</p>
        </header>
        <section className="flex max-w-3xl flex-col items-start gap-7 py-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">{siteConfig.tagline}</p>
          <h1 className="font-display text-5xl leading-[1.1] sm:text-7xl">Clarity for a better tomorrow.</h1>
          <p className="max-w-xl text-base leading-8 text-cream/75">
            Website foundation is ready for the approved page designs. Consultation requests will open WhatsApp directly.
          </p>
          <a
            className="inline-flex min-h-12 items-center rounded-md bg-gold px-6 py-3 font-semibold text-navy transition hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            href={getConsultationWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation via WhatsApp
          </a>
        </section>
        <footer className="border-t border-gold/25 py-6 text-xs text-cream/60">
          Prototype setup only. Design implementation begins in Part 1.
        </footer>
      </div>
    </main>
  );
}
