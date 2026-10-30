import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");

test("shared brand colors are defined", () => {
  const css = read("src/app/globals.css");
  for (const token of ["--navy-deep", "--navy", "--gold", "--gold-light", "--cream", "--muted"]) {
    assert.ok(css.includes(token), "Missing token: " + token);
  }
});

test("global layout includes navigation, footer and skip link", () => {
  const layout = read("src/app/layout.tsx");
  for (const component of ["SiteHeader", "SiteFooter", "skip-link", "main-content"]) {
    assert.ok(layout.includes(component), "Missing component: " + component);
  }
});

test("mobile menu exposes its expanded state and uses accessible labels", () => {
  const header = read("src/components/layout/site-header.tsx");
  for (const attribute of ["aria-expanded", "aria-controls", "aria-current", "Mobile navigation", "Escape"]) {
    assert.ok(header.includes(attribute), "Missing accessible navigation pattern: " + attribute);
  }
});

test("future pages are noindex until implemented", () => {
  const placeholder = read("src/app/[page]/page.tsx");
  assert.match(placeholder, /index: false/);
  assert.match(placeholder, /notFound\(\)/);
});
