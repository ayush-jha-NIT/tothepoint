import { ActionLink, type ActionLinkProps } from "@/components/ui/action-link";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppBookingLinkProps = Omit<ActionLinkProps, "href"> & {
  /** Optional approved service title, e.g. Kundli Analysis, for the prefilled message. */
  service?: string;
};

/**
 * Reusable consultation CTA. Never routes through a fake checkout or
 * booking-confirmation screen. The external target is opened safely.
 */
export function WhatsAppBookingLink({
  service,
  children = "Book Consultation",
  icon = "message",
  ...props
}: WhatsAppBookingLinkProps) {
  return (
    <ActionLink href={getConsultationWhatsAppUrl(service)} icon={icon} {...props}>
      {children}
    </ActionLink>
  );
}
