import { siteConfig } from "../config/site.ts";

/** WhatsApp deep link. Booking is handled manually in WhatsApp, not onsite. */
export function getConsultationWhatsAppUrl(service?: string): string {
  const selectedService = service?.trim();
  const message = selectedService
    ? `Hello, I would like to book a ${selectedService} consultation with Tothepoint Astrology. Please share available slots.`
    : "Hello, I would like to book a consultation with Tothepoint Astrology. Please share available slots.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
