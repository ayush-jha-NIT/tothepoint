import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { CelestialArt } from "@/components/ui/celestial-art";
import { servicePreviews } from "@/config/home";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePreviews.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePreviews.find((item) => item.slug === slug);
  return {
    title: service?.title ?? "Consultation",
    description: service?.description,
    robots: { index: false, follow: false },
  };
}

/** Temporary functional destination; fully designed service pages belong to Part 5. */
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicePreviews.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="celestial-glow star-field py-16 sm:py-24">
      <Container className="grid min-h-[480px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-2xl">
          <p className="eyebrow">Astrology consultation · Service preview</p>
          <h1 className="mt-5 font-display text-5xl leading-tight text-cream sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{service.description}</p>
          <p className="mt-5 text-sm leading-7 text-muted">This page is a temporary preview. Full service information will be available in Part 5. Consultation availability and pricing are confirmed directly on WhatsApp.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink href={getConsultationWhatsAppUrl(service.title)} icon="message">Book Consultation</ActionLink>
            <ActionLink href="/services" variant="outline" icon="arrow-right">All Services</ActionLink>
          </div>
        </div>
        <CelestialArt className="max-w-[420px]" />
      </Container>
    </section>
  );
}
