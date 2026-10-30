import assert from "node:assert/strict";
import { test } from "node:test";
import { getConsultationWhatsAppUrl, getConsultationWhatsAppUrlForSlug } from "../src/lib/whatsapp.ts";
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

test("booking URLs safely encode service punctuation and whitespace", () => {
  const url = new URL(getConsultationWhatsAppUrl("  Marriage   &   Relationships  "));
  assert.match(url.searchParams.get("text") ?? "", /Marriage & Relationships/);
  assert.ok(getConsultationWhatsAppUrl("Marriage & Relationships").includes("%26"));
});

test("approved service slugs resolve to the selected consultation titles", () => {
  const kundli = new URL(getConsultationWhatsAppUrlForSlug("kundli-analysis"));
  assert.equal(kundli.pathname, "/917007962637");
  assert.ok(kundli.searchParams.get("text")?.includes("Kundli Analysis"));
  const marriage = new URL(getConsultationWhatsAppUrlForSlug("marriage-relationship"));
  assert.ok(marriage.searchParams.get("text")?.includes("Marriage & Relationships"));
});

test("unrecognized and missing slugs always use a generic message", () => {
  const generic = new URL(getConsultationWhatsAppUrlForSlug()).searchParams.get("text");
  for (const slug of ["invalid", "__proto__", "kundli-analysis%0Aextra", ""]) {
    const url = new URL(getConsultationWhatsAppUrlForSlug(slug));
    assert.equal(url.pathname, "/917007962637");
    assert.equal(url.searchParams.get("text"), generic);
  }
});
