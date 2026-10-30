import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { servicePreviews, frequentlyAskedQuestions } from "../src/config/home.ts";
import { getConsultationWhatsAppUrl } from "../src/lib/whatsapp.ts";

const source = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("all six service previews have unique slugs and descriptions", () => {
  assert.equal(servicePreviews.length, 6);
  assert.equal(new Set(servicePreviews.map((s) => s.slug)).size, 6);
  assert.ok(servicePreviews.every((s) => s.title.length && s.description.length));
});

test("every service resolves to the confirmed WhatsApp number", () => {
  for (const service of servicePreviews) {
    const url = new URL(getConsultationWhatsAppUrl(service.title));
    assert.equal(url.pathname, "/917007962637");
    assert.ok(url.searchParams.get("text")?.includes(service.title));
  }
});

test("FAQ includes direct booking guidance and appropriate limitations", () => {
  assert.ok(frequentlyAskedQuestions.length >= 4);
  assert.ok(frequentlyAskedQuestions.some((item) => item.answer.includes("7007962637")));
  assert.ok(frequentlyAskedQuestions.some((item) => item.answer.includes("does not guarantee outcomes")));
});

test("homepage uses the shared design system and direct booking integration", () => {
  const page = source("src/app/page.tsx");
  for (const tag of ["Container", "ActionLink", "CelestialArt", "HomeFaq", "servicePreviews", "getConsultationWhatsAppUrl"]) {
    assert.ok(page.includes(tag), tag);
  }
  assert.ok(!page.includes("Priya Sharma"));
  assert.ok(!page.includes("1000+"));
});

test("service preview routes are available without premature indexing", () => {
  const page = source("src/app/services/[slug]/page.tsx");
  assert.match(page, /generateStaticParams/);
  assert.match(page, /index: false/);
  assert.match(page, /getConsultationWhatsAppUrl\(service.title\)/);
});
