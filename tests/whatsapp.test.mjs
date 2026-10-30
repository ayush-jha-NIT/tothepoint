import assert from "node:assert/strict";
import { test } from "node:test";
import { getConsultationWhatsAppUrl } from "../src/lib/whatsapp.ts";
import { siteConfig } from "../src/config/site.ts";

test("confirmed phone and recipient email", () => {
  assert.equal(siteConfig.whatsappNumber, "917007962637");
  assert.equal(siteConfig.contactEmail, "tothepointastrology@gmail.com");
});

test("general booking opens the expected number", () => {
  const url = new URL(getConsultationWhatsAppUrl());
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/917007962637");
  assert.match(url.searchParams.get("text") ?? "", /book a consultation/i);
});

test("service-specific booking contains the service name", () => {
  const url = new URL(getConsultationWhatsAppUrl("Kundli Analysis"));
  assert.match(url.searchParams.get("text") ?? "", /Kundli Analysis/);
});

test("blank service uses the general message", () => {
  const url = new URL(getConsultationWhatsAppUrl("  "));
  assert.doesNotMatch(url.searchParams.get("text") ?? "", /undefined/);
});

test("six unique, non-empty service slugs", () => {
  const slugs = siteConfig.services.map((service) => service.slug);
  assert.equal(slugs.length, 6);
  assert.equal(new Set(slugs).size, 6);
  assert.ok(slugs.every((slug) => slug.length > 0));
});
