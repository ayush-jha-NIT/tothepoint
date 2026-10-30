import { redirect } from "next/navigation";
import { getConsultationWhatsAppUrl } from "@/lib/whatsapp";

/** Backwards-compatible booking path. There is no onsite booking wizard. */
export default function LegacyBookingRedirect() {
  redirect(getConsultationWhatsAppUrl());
}
