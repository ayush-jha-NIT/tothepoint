import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { servicePreviews } from "../src/config/home.ts";
import { getConsultationWhatsAppUrlForSlug } from "../src/lib/whatsapp.ts";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("every built page uses the shared WhatsApp booking CTA", () => {
  for (const path of [
    "src/components/layout/site-header.tsx",
    "src/components/layout/site-footer.tsx",
    "src/app/page.tsx",
    "src/app/about/page.tsx",
    "src/components/about/about-cta.tsx",
    "src/app/services/page.tsx",
    "src/app/services/[slug]/page.tsx",
    "src/app/[page]/page.tsx",
  ]) {
    const code = read(path);
    assert.ok(code.includes("<WhatsAppBookingLink"), path);
    assert.doesNotMatch(code, /href=["']\/(?:checkout|booking-confirmation|book-consultation)["']/, path);
  }
});

test("service-specific CTAs preserve the selected service", () => {
  const pages = [
    read("src/app/page.tsx"),
    read("src/app/services/page.tsx"),
    read("src/app/services/[slug]/page.tsx"),
  ];
  for (const page of pages) {
    assert.match(page, /<WhatsAppBookingLink service=\{service.title\}/);
  }
});

test("legacy direct booking routes redirect with an allowlisted slug or generic enquiry", () => {
  const legacy = read("src/app/book-consultation/page.tsx");
  const fallback = read("src/app/booking/page.tsx");
  assert.match(legacy, /redirect\(getConsultationWhatsAppUrlForSlug\(slug\)\)/);
  assert.match(fallback, /redirect\(getConsultationWhatsAppUrl\(\)\)/);
  for (const service of servicePreviews) {
    const url = new URL(getConsultationWhatsAppUrlForSlug(service.slug));
    assert.equal(url.pathname, "/917007962637");
    assert.ok(url.searchParams.get("text")?.includes(service.title));
  }
});

test("there is no false automatic booking confirmation page", () => {
  assert.equal(existsSync(new URL("../src/app/booking-confirmation/page.tsx", import.meta.url)), false);
  assert.equal(existsSync(new URL("../src/app/checkout/page.tsx", import.meta.url)), false);
  const link = read("src/components/booking/whatsapp-booking-link.tsx");
  assert.match(link, /getConsultationWhatsAppUrl\(service\)/);
  const anchor = read("src/components/ui/action-link.tsx");
  assert.match(anchor, /noopener noreferrer/);
});
