import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { legalDrafts } from "../src/config/legal.ts";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const names=["privacy-policy","terms-and-conditions","refund-policy"];

test("three legal pages have dedicated routes and noindex draft metadata", () => {
  for(const name of names){
    const page=read(`src/app/${name}/page.tsx`);
    assert.match(page,/export const metadata/);
    assert.match(page,/index: false/);
    assert.ok(page.includes(`kind="${name}"`));
  }
});
test("draft policies contain meaningful accurate sections", () => {
  for(const name of names){
    const draft=legalDrafts[name];
    assert.ok(draft.title.length > 8);
    assert.ok(draft.warning.toLowerCase().includes("draft"));
    assert.ok(draft.sections.length >= 5);
    assert.ok(draft.sections.every(s=>s.title.length>4&&s.body.length>60));
  }
});
test("no invented refund deadlines or automatic reservations", () => {
  const refund=legalDrafts["refund-policy"];
  const all=refund.sections.map(s=>s.body).join(" ");
  assert.match(all,/before (?:paying|sending payment)/);
  assert.doesNotMatch(all,/7-day guarantee|refund within 24 hours|100% refundable/i);
  assert.match(legalDrafts["terms-and-conditions"].sections.map(s=>s.body).join(" "),/enquiry only/);
});
test("legal routes supersede placeholder sections", () => {
  const nav=read("src/config/navigation.ts");
  for (const p of names) assert.ok(!nav.includes(`  "${p}": { title:`));
  assert.match(read("src/components/legal/legal-page.tsx"),/Draft policy – not yet approved/);
});
