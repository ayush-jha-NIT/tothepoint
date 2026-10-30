"use client";

import { useState } from "react";
import { approvedReviews, filterReviews, testimonialCategories } from "@/config/testimonials";

type Category = (typeof testimonialCategories)[number]["slug"];

export function ReviewBrowser() {
  const [category, setCategory] = useState<Category>("all");
  const reviews = filterReviews(approvedReviews, category);

  return (
    <section id="client-reviews" aria-labelledby="review-list-title" className="scroll-mt-28 border-b border-gold/20 bg-navy-deep py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="eyebrow">Client feedback</p>
          <h2 id="review-list-title" className="mt-3 font-display text-4xl text-cream sm:text-5xl">
            Words From Our <span className="gold-gradient-text">Community</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Reviews are displayed only after verification and permission to publish.
          </p>
        </div>
        <div aria-label="Filter reviews by service" className="mb-10 flex flex-wrap justify-center gap-2.5">
          {testimonialCategories.map((item) => (
            <button
              type="button"
              key={item.slug}
              aria-pressed={category === item.slug}
              onClick={() => setCategory(item.slug)}
              className={[
                "min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light",
                category === item.slug
                  ? "border-gold bg-gold text-navy"
                  : "border-gold/35 bg-navy-soft text-cream/85 hover:border-gold/70 hover:bg-gold/10",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </div>
        {reviews.length === 0 ? (
          <div role="status" aria-live="polite" className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gold/30 bg-navy-soft/80 px-6 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,.19)] sm:px-12">
            <div className="star-field absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold-light">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M8 10h22v16H17l-8 6v-6H8z" />
                <path d="M14 16h10M14 21h7" />
              </svg>
            </div>
            <h3 className="relative mt-5 font-display text-2xl text-cream">
              {category === "all" ? "Verified reviews coming soon" : `No verified ${testimonialCategories.find((item) => item.slug === category)?.label} reviews yet`}
            </h3>
            <p className="relative mx-auto mt-3 max-w-lg text-sm leading-7 text-muted">
              We will show genuine testimonials once clients have approved their publication. No sample reviews or invented star ratings are displayed as real feedback.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.id} className="surface-panel flex flex-col rounded-xl p-7">
                {review.rating != null && (
                  <p aria-label={`${review.rating} out of 5 stars`} className="text-lg tracking-[.18em] text-gold">
                    {"★".repeat(review.rating)}<span className="text-gold/30">{"☆".repeat(5 - review.rating)}</span>
                  </p>
                )}
                <blockquote className="mt-5 flex-1 font-display text-xl leading-8 text-cream">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-gold/20 pt-5">
                  <p className="font-semibold text-cream">{review.name}</p>
                  <p className="mt-1 text-xs text-gold-light">
                    {testimonialCategories.find((item) => item.slug === review.category)?.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
