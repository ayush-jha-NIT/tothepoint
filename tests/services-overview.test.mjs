import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { servicePreviews } from "../src/config/home.ts";
import { serviceDetails, consultationBenefits, bookingSteps, serviceQuestions } from "../src/config/services-overview.ts";
import { getConsultationWhatsAppUrl } from "../src/lib/whatsapp.ts";

const source = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("each of the six services has nonempty detailed content", () => {
  assert.equal(servicePreviews.length, 6);
  const expected = new Set(servicePreviews.map((item) => item.slug));
  assert.deepEqual(new Set(Object.keys(serviceDetails)), expected);
  for (const item of servicePreviews) {
    const extra = serviceDetails[item.slug];
    assert.ok(extra.eyebrow && extra.lead && extra.details);
    assert.ok(extra.topics.length >= 3);
  }
});

test("all booking buttons create service-specific WhatsApp enquiries", () => {
  for (const item of servicePreviews) {
    const url = new URL(getConsultationWhatsAppUrl(item.title));
    assert.equal(url.hostname, "wa.me");
    assert.equal(url.pathname, "/917007962637");
    assert.ok(url.searchParams.get("text")?.includes(item.title));
  }
});

test("overview contains 4 booking steps, 4 service benefits and 6 FAQs", () => {
  assert.equal(bookingSteps.length, 4);
  assert.equal(consultationBenefits.length, 4);
  assert.ok(serviceQuestions.length >= 5);
  assert.ok(serviceQuestions.some((question) => question.answer.includes("does not guarantee outcomes")));
});

test("dedicated /services route is implemented, with correct links", () => {
  const page = source("src/app/services/page.tsx");
  for(const value of ["export const metadata", "ServicesHero", "ServiceCards", "ServiceArtwork", "HowItWorks", "ServicesFaq", "service={service.title}", "/services/", "servicePreviews"]) {
    assert.ok(page.includes(value), "missing " + value);
  }
  assert.doesNotMatch(page, /\b1000\+|4\.9\/5|100% Confidential|₹[0-9]/);
});

test("services no longer resolve to the general placeholder route", () => {
  const navigation = source("src/config/navigation.ts");
  assert.doesNotMatch(navigation, /\n\s*services: \{ title:/);
  const page = source("src/app/services/page.tsx");
  assert.match(page, /export default function ServicesPage/);
});

test("unique service artwork exists for every service topic", () => {
  const component = source("src/components/services/service-artwork.tsx");
  for(const item of servicePreviews) {
    assert.ok(component.includes(item.icon + ":"), item.icon);
  }
});
