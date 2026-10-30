import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/ui/action-link";
import { CelestialArt } from "@/components/ui/celestial-art";
import { Container } from "@/components/ui/container";
import { placeholderPages } from "@/config/navigation";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  return Object.keys(placeholderPages).map((page) => ({ page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const found = placeholderPages[page];
  return { title: found?.title ?? "Page", robots: { index: false, follow: false } };
}

/** Temporary navigation targets, to be replaced by real pages in later phases. */
export default async function PlaceholderPage({ params }: Props) {
  const { page } = await params;
  const found = placeholderPages[page];
  if (!found) notFound();

  return (
    <section className="celestial-glow star-field min-h-[60vh] py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <div className="max-w-2xl">
          <p className="eyebrow">Page development · {found.phase}</p>
          <h1 className="mt-5 font-display text-5xl text-cream sm:text-6xl">{found.title}</h1>
          <p className="mt-6 text-base leading-8 text-muted">{found.message}</p>
          <p className="mt-4 text-sm text-cream/60">This page is under construction. The final design and verified content will be added during its planned development phase.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink href={getConsultationWhatsAppUrl()} icon="message">Book Consultation</ActionLink>
            <ActionLink href="/" variant="outline" icon="arrow-right">Return Home</ActionLink>
          </div>
        </div>
        <CelestialArt className="max-w-[360px] opacity-65" />
      </Container>
    </section>
  );
}
