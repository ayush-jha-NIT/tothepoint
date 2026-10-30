import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { aboutValues, aboutReasons, consultationSteps, areasOfInterest } from "../src/config/about.ts";
import { siteConfig } from "../src/config/site.ts";

const read = (file) => readFileSync(new URL("../" + file, import.meta.url), "utf8");

test("about data contains the four approved-value, benefit and process slots", () => {
  assert.equal(aboutValues.length, 4);
  assert.equal(aboutReasons.length, 4);
  assert.equal(consultationSteps.length, 4);
  assert.ok(consultationSteps.every((step) => step.title && step.description));
});

test("about service links map exactly to the six available services", () => {
  assert.equal(areasOfInterest.length, siteConfig.services.length);
  assert.deepEqual(new Set(areasOfInterest.map((item) => item.slug)), new Set(siteConfig.services.map((item) => item.slug)));
});

test("dedicated /about route exists with metadata, navigation, and WhatsApp CTAs", () => {
  const page = read("src/app/about/page.tsx");
  for (const s of ["export const metadata", "About Hariom Shrivastava", "href=\"/\"", "getConsultationWhatsAppUrl", "AboutCta", "consultationSteps", "areasOfInterest", "AstrologerVisual"]) {
    assert.ok(page.includes(s), "Missing About page requirement: " + s);
  }
  assert.ok(!page.includes("1000+"));
  assert.ok(!page.includes("10+"));
  assert.ok(!page.includes("4.9/5"));
});

test("About is no longer served as a generic placeholder", () => {
  const navigation = read("src/config/navigation.ts");
  assert.doesNotMatch(navigation, /\n\s*about: \{ title:/);
  const about = read("src/app/about/page.tsx");
  assert.match(about, /getConsultationWhatsAppUrl\(\)/);
});

test("biographical content does not invent formal qualifications or experience numbers", () => {
  const data = read("src/config/about.ts");
  assert.doesNotMatch(data, /\b(?:certified|graduated|10 years|twenty years|1000 clients|award-winning)\b/i);
  const visual = read("src/components/about/astrologer-visual.tsx");
  assert.match(visual, /Decorative stand-in/);
});
