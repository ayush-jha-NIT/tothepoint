import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { blogPosts } from "../src/config/blog.ts";
import { servicePreviews } from "../src/config/home.ts";
import {
  normalizeSiteOrigin, getSiteOrigin, canonicalPath, getIndexablePaths,
  organizationSchema, websiteSchema, serviceSchema, articleSchema, breadcrumbSchema,
} from "../src/lib/seo.ts";

const read = (path) => readFileSync(new URL("../"+path,import.meta.url), "utf8");

test("only explicit HTTPS public origins are accepted",()=>{
  assert.equal(normalizeSiteOrigin("https://tothepoint.example.com/"),"https://tothepoint.example.com");
  for(const x of ["http://localhost:3000","http://127.0.0.1:3000","https://localhost","https://your-website.example",
    "ftp://example.com","https://a.com/path","https://a.com/?test=1","https://a.com/#frag",
    "https://a.com@localhost", "https://example.test", "http://example.com"]) {
    assert.equal(normalizeSiteOrigin(x),null,x);
  }
  assert.equal(getSiteOrigin({NEXT_PUBLIC_SITE_URL:"http://localhost:3000"}),null);
  assert.equal(getSiteOrigin({VERCEL_ENV:"preview",VERCEL_PROJECT_PRODUCTION_URL:"example.vercel.app",SEO_ALLOW_VERCEL_DOMAIN:"true"}),null);
  assert.equal(getSiteOrigin({VERCEL_ENV:"production",VERCEL_PROJECT_PRODUCTION_URL:"real.vercel.app",SEO_ALLOW_VERCEL_DOMAIN:"true"}),"https://real.vercel.app");
});

test("canonical paths never point to localhost or include unsafe query parameters",()=>{
  assert.equal(canonicalPath("/services","https://tothepoint.com"),"https://tothepoint.com/services");
  assert.equal(canonicalPath("/",null),undefined);
  assert.equal(canonicalPath("//other.com","https://tothepoint.com"),undefined);
  assert.equal(canonicalPath("/blog?draft=true","https://tothepoint.com"),undefined);
});

test("sitemap coverage includes only the public 5 core routes and 12 detail pages",()=>{
  const paths=getIndexablePaths();
  assert.equal(paths.length,5+servicePreviews.length+blogPosts.length);
  assert.equal(new Set(paths).size,paths.length);
  for(const path of ["/","/about","/services","/blog","/contact",
    ...servicePreviews.map(item=>`/services/${item.slug}`),
    ...blogPosts.map(item=>`/blog/${item.slug}`)]) assert.ok(paths.includes(path),path);
  for(const path of ["/api/contact","/booking","/book-consultation","/privacy-policy","/terms-and-conditions","/refund-policy","/testimonials"]) {
    assert.ok(!paths.includes(path),path);
  }
});

test("structured data contains only confirmed site facts",()=>{
  const url="https://tothepoint.com";
  const organization=organizationSchema(url);
  assert.equal(organization.name,"Tothepoint Astrology");
  assert.equal(organization.email,"tothepointastrology@gmail.com");
  assert.equal(organization.contactPoint.telephone,"+917007962637");
  assert.ok(!JSON.stringify(organization).includes("AggregateRating"));
  assert.ok(!JSON.stringify(organization).includes("streetAddress"));
  const website=websiteSchema(url);
  assert.equal(website.url,url);
  const service=serviceSchema(url,servicePreviews[0]);
  assert.equal(service.url,`${url}/services/${servicePreviews[0].slug}`);
  const article=articleSchema(url,blogPosts[0]);
  assert.equal(article.headline,blogPosts[0].title);
  assert.ok(!JSON.stringify(article).includes("datePublished"));
  const breadcrumbs=breadcrumbSchema(url,[{name:"Home",path:"/"},{name:"Blog",path:"/blog"}]);
  assert.equal(breadcrumbs.itemListElement[1].position,2);
});

test("metadata, sitemap and robots are route-based and respect policy drafts",()=>{
  const layout=read("src/app/layout.tsx");
  const robots=read("src/app/robots.ts");
  const sitemap=read("src/app/sitemap.ts");
  assert.match(layout,/metadataBase: origin \? new URL\(origin\)/);
  assert.match(layout,/JsonLd/);
  assert.match(robots,/disallow: "\/"/);
  assert.match(robots,/hasVerifiedTestimonials/);
  assert.match(sitemap,/getIndexablePaths/);
  assert.match(sitemap,/if \(!origin\) return \[\]/);
  for(const path of ["src/app/page.tsx","src/app/about/page.tsx","src/app/services/page.tsx",
    "src/app/blog/page.tsx","src/app/contact/page.tsx","src/app/services/[slug]/page.tsx",
    "src/app/blog/[slug]/page.tsx"]) {
    assert.match(read(path),/canonicalPath/);
  }
});

test("SEO generator publishes a valid OG image implementation",()=>{
  const og=read("src/app/opengraph-image.tsx");
  assert.match(og,/ImageResponse/);
  assert.match(og,/1200/);
  assert.match(og,/630/);
  const json=read("src/components/seo/json-ld.tsx");
  assert.match(json,/dangerouslySetInnerHTML/);
  assert.match(json,/replace\(\/</);
});
