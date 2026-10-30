import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { servicePreviews } from "../src/config/home.ts";
import { serviceProfiles } from "../src/config/service-profiles.ts";
import { getConsultationWhatsAppUrl } from "../src/lib/whatsapp.ts";

const source = (file) => readFileSync(new URL("../" + file, import.meta.url), "utf8");

test("six routes each have complete, independent content", () => {
  assert.equal(servicePreviews.length, 6);
  assert.deepEqual(new Set(Object.keys(serviceProfiles)), new Set(servicePreviews.map((item) => item.slug)));
  const lines = new Set();
  for (const service of servicePreviews) {
    const profile = serviceProfiles[service.slug];
    assert.ok(profile.heroLine.length >= 20, service.slug + " hero");
    assert.ok(profile.introduction.length >= 65, service.slug + " introduction");
    assert.equal(profile.overview.length, 2);
    assert.ok(profile.overview.every((value) => value.length > 80));
    assert.equal(profile.focus.length, 6);
    assert.ok(profile.focus.every((focus) => focus.title && focus.description.length > 30));
    assert.ok(profile.preparation.length >= 3);
    assert.ok(profile.approachNote.length > 50);
    assert.ok(profile.questions.length >= 4);
    assert.ok(profile.questions.every((faq) => faq.question.length > 15 && faq.answer.length > 45));
    lines.add(profile.heroLine);
  }
  assert.equal(lines.size, 6, "Each service requires a distinctive hero");
});

test("all service booking URLs use confirmed WhatsApp number and include selected service", () => {
  for (const service of servicePreviews) {
    const url = new URL(getConsultationWhatsAppUrl(service.title));
    assert.equal(url.origin, "https://wa.me");
    assert.equal(url.pathname, "/917007962637");
    assert.ok(url.searchParams.get("text")?.includes(service.title));
  }
});

test("individual route renders useful sections, metadata, FAQ and related services", () => {
  const page = source("src/app/services/[slug]/page.tsx");
  for (const token of [
    "generateStaticParams", "generateMetadata", "dynamicParams = false", "serviceProfiles",
    "ServiceArtwork", "profile.focus", "profile.questions", "profile.preparation",
    "relatedServices", "Book Consultation", "Fees &", "notFound()",
  ]) {
    assert.ok(page.includes(token), token + " missing");
  }
  assert.doesNotMatch(page, /index: false, follow: false/);
  assert.doesNotMatch(page, /Temporary functional destination|Service preview|Full service information will be available in Part 5/);
});

test("service-specific FAQs and copy do not advertise unverified prices or guarantees", () => {
  const config = source("src/config/service-profiles.ts");
  const page = source("src/app/services/[slug]/page.tsx");
  assert.doesNotMatch(config + page, /₹\s*[0-9]|\b1000\+\b|4\.9\/5|10\+ Years/);
  assert.match(page, /not a confirmed booking/);
  assert.match(page, /not a guaranteed prediction/);
  assert.match(page, /professional medical, legal or financial advice/);
  for (const profile of Object.values(serviceProfiles)) {
    assert.ok(profile.questions.some(({ answer }) => /no\.|not|cannot/i.test(answer)));
  }
});

test("all service detail pages are reachable by the navigation data", () => {
  const page = source("src/app/services/[slug]/page.tsx");
  assert.match(page, /servicePreviews\.map\(\(\{ slug \}\) => \(\{ slug \}\)\)/);
  assert.match(page, /servicePreviews\.filter\(\(item\) => item\.slug !== service\.slug\)/);
});
