"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogArtwork } from "@/components/blog/blog-artwork";
import { Icon } from "@/components/ui/icons";
import { blogCategories, filterBlogPosts, type BlogCategory } from "@/config/blog";

type Category = BlogCategory | "all";

export function BlogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const filtered = filterBlogPosts(query, category);

  return (
    <section id="articles" aria-labelledby="articles-heading" className="scroll-mt-24 bg-navy-deep py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Explore our articles</p>
            <h2 id="articles-heading" className="mt-3 font-display text-4xl text-cream sm:text-5xl">
              Astrology <span className="gold-gradient-text">Insights</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">Educational guides covering traditional astrology themes and the questions people commonly bring to a consultation.</p>
          </div>
          <div className="relative w-full max-w-md">
            <label htmlFor="blog-search" className="mb-2 block text-xs font-semibold uppercase tracking-[.15em] text-gold-light">Search articles</label>
            <Icon name="sparkles" size={19} className="pointer-events-none absolute bottom-3.5 left-3.5 text-gold"/>
            <input
              id="blog-search" type="search" autoComplete="off"
              placeholder="Search Kundli, career, Vastu..."
              value={query} onChange={(event) => setQuery(event.target.value)}
              className="min-h-12 w-full rounded-lg border border-gold/40 bg-navy-soft pl-11 pr-4 text-sm text-cream placeholder:text-muted focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
            />
          </div>
        </div>

        <div aria-label="Filter articles by topic" className="mt-8 flex flex-wrap gap-2.5">
          {blogCategories.map((item) => (
            <button type="button" key={item.slug} aria-pressed={category === item.slug} onClick={() => setCategory(item.slug)}
              className={["min-h-11 rounded-full border px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light sm:text-sm",
                category === item.slug ? "border-gold bg-gold text-navy" : "border-gold/30 bg-navy-soft text-cream/80 hover:border-gold/65 hover:bg-gold/10"
              ].join(" ")}
            >{item.label}</button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted" role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
        </p>

        {filtered.length > 0 ? (
          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <article key={post.slug} className="group flex flex-col overflow-hidden rounded-xl border border-gold/25 bg-navy-soft/70 shadow-[0_16px_35px_rgba(0,0,0,.14)] transition-colors hover:border-gold/60">
                <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
                  <BlogArtwork category={post.category}/>
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gold-light">
                    <span className="rounded-full border border-gold/25 px-2.5 py-1">{blogCategories.find((item) => item.slug === post.category)?.label}</span>
                    <span aria-hidden="true">·</span><span>{post.readingMinutes} min read</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-cream">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold-light">{post.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded text-sm font-semibold text-gold-light transition-colors hover:text-gold">
                    Read Article <Icon name="arrow-right" size={18}/>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-xl border border-gold/30 bg-navy-soft/80 px-6 py-14 text-center" role="status">
            <h3 className="font-display text-2xl text-cream">No matching articles</h3>
            <p className="mt-3 text-sm leading-7 text-muted">Try another search term or clear the selected category.</p>
            <button type="button" className="mt-6 min-h-11 rounded-md border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-light hover:bg-gold/10"
              onClick={() => { setQuery(""); setCategory("all"); }}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
