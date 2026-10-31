import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/", "/about", "/services", "/services/kundli-analysis",
  "/blog", "/blog/understanding-kundli-basics", "/contact",
  "/testimonials", "/privacy-policy",
];

test("main pages are rendered with page headings and without horizontal overflow", async ({ page }) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of routes) {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status(), path).toBe(200);
      await expect(page.locator("main h1").first()).toBeVisible();
      const metrics = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        fullWidth: document.documentElement.scrollWidth,
      }));
      expect(metrics.fullWidth - metrics.viewport, `overflow at ${path} width ${width}`).toBeLessThanOrEqual(2);
    }
  }
});

test("mobile navigation can open, navigate and close using keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const open = page.getByRole("button", { name: "Open navigation menu" });
  await expect(open).toBeVisible();
  await open.click();
  const nav = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(nav.getByRole("link", { name: "Services" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(nav).toBeHidden();
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await nav.getByRole("link", { name: "Services" }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(nav).toBeHidden();
});

test("blog search and category filters update the displayed articles", async ({ page }) => {
  await page.goto("/blog");
  const search = page.getByRole("searchbox", { name: "Search articles" });
  await search.fill("numerology");
  await expect(page.getByText("1 article found")).toBeVisible();
  await page.getByRole("button", { name: "Career", exact: true }).click();
  await expect(page.getByText("0 articles found")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.getByText("6 articles found")).toBeVisible();
});

test("contact form reports validation errors without sending an unconfigured email", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByText("Check the highlighted fields.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
});

test("unverified legal pages and testimonials cannot be indexed", async ({ page }) => {
  for (const path of ["/privacy-policy", "/terms-and-conditions", "/refund-policy", "/testimonials"]) {
    await page.goto(path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  }
});

test("without a public canonical domain, robots blocks indexing and sitemap is empty", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const body = await sitemap.text();
  expect(body).not.toContain("<loc>");
});

test("key pages meet WCAG automated serious and critical checks", async ({ page }) => {
  for (const path of ["/", "/services", "/blog", "/contact", "/blog/understanding-kundli-basics"]) {
    await page.goto(path, { waitUntil: "networkidle" });
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const serious = result.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
    expect(serious.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.map((n) => n.target) })), path).toEqual([]);
  }
});

test("home page initial load stays under a basic asset transfer budget", async ({ page }) => {
  let transferred = 0;
  page.on("response", async (response) => {
    try {
      const headers = await response.allHeaders();
      const size = Number(headers["content-length"]);
      if (size > 0) transferred += size;
    } catch {
      // Failed network assets are caught by the basic page smoke tests.
    }
  });
  await page.goto("/", { waitUntil: "networkidle" });
  expect(transferred, "Header-reported transfer bytes should not exceed 3 MB").toBeLessThan(3_000_000);
  const fontCount = await page.evaluate(() => document.fonts.size);
  expect(fontCount, "Bundled external web fonts are not required").toBe(0);
});
