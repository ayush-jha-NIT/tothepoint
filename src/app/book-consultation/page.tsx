import { redirect } from "next/navigation";
import { getConsultationWhatsAppUrlForSlug } from "@/lib/whatsapp";

type Props = {
  searchParams: Promise<{ service?: string | string[] }>;
};

/**
 * Legacy/internal links resolve directly to WhatsApp. Only the six approved
 * service slugs are recognized; all other values create a generic enquiry.
 */
export default async function BookConsultationRedirect({ searchParams }: Props) {
  const params = await searchParams;
  const slug = typeof params.service === "string" ? params.service : undefined;
  redirect(getConsultationWhatsAppUrlForSlug(slug));
}
