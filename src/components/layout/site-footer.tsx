import Link from "next/link";
import { policyNavigation, primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";
import { ActionLink } from "@/components/ui/action-link";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-[#03111e]">
      <Container>
        <div className="grid gap-11 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.85fr_1fr] lg:gap-10 lg:py-20">
          <div className="max-w-sm">
            <BrandMark />
            <p className="mt-6 text-sm leading-7 text-muted">
              Traditional astrology perspectives, presented with clarity and care.
              Connect with {siteConfig.astrologer} to discuss a consultation.
            </p>
            <ActionLink href={getConsultationWhatsAppUrl()} variant="outline" size="small" icon="message" className="mt-6">Chat on WhatsApp</ActionLink>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Explore</h2>
            <ul className="space-y-3">
              {primaryNavigation.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-cream/75 transition-colors hover:text-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Information</h2>
            <ul className="space-y-3">
              {policyNavigation.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-cream/75 transition-colors hover:text-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-5">Get in touch</h2>
            <div className="flex flex-col gap-4">
              <a href={getConsultationWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-cream/75 transition-colors hover:text-gold">
                <Icon name="message" size={19} className="mt-0.5 shrink-0 text-gold" /><span>+91 7007962637<span className="mt-1 block text-xs text-muted">Consultations via WhatsApp</span></span>
              </a>
              <a href={`mailto:${siteConfig.contactEmail}`} className="flex items-start gap-3 break-all text-sm text-cream/75 transition-colors hover:text-gold">
                <Icon name="mail" size={19} className="mt-0.5 shrink-0 text-gold" />{siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-gold/15 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Astrology is interpretive guidance, not a substitute for professional advice.</p>
        </div>
      </Container>
    </footer>
  );
}
