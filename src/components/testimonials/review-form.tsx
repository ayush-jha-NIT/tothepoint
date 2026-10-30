"use client";

import { useState, type FormEvent } from "react";
import { testimonialCategories, type TestimonialCategory } from "@/config/testimonials";
import { createReviewEmailUrl, validateFeedback, type FeedbackDraft } from "@/lib/review-email";
import { siteConfig } from "@/config/site";

const initial: FeedbackDraft = {
  displayName: "",
  category: "",
  rating: 0,
  message: "",
  consentToPublish: false,
};

export function ReviewForm() {
  const [draft, setDraft] = useState<FeedbackDraft>(initial);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const problem = validateFeedback(draft);
    if (problem) {
      setError(problem);
      setNotice("");
      return;
    }
    setError("");
    setNotice("Your email app should open with a prepared message. You must press Send there. Your review has not been submitted or published by this website.");
    window.location.href = createReviewEmailUrl(draft);
  }

  const inputClass = "w-full min-h-12 rounded-lg border border-gold/30 bg-navy-deep px-4 py-3 text-sm text-cream placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="feedback-name" className="mb-2 block text-sm font-medium text-cream">Display name <span className="text-muted">(optional)</span></label>
          <input
            id="feedback-name" name="displayName" type="text" autoComplete="name" maxLength={70}
            className={inputClass} placeholder="How you'd like to be credited"
            value={draft.displayName} onChange={(e) => setDraft((old) => ({...old, displayName: e.target.value}))}
          />
        </div>
        <div>
          <label htmlFor="feedback-service" className="mb-2 block text-sm font-medium text-cream">Consultation category <span className="text-gold">*</span></label>
          <select
            id="feedback-service" name="category" required className={inputClass}
            value={draft.category}
            onChange={(e) => setDraft((old) => ({...old, category: e.target.value as TestimonialCategory | ""}))}
          >
            <option value="">Choose a service</option>
            {testimonialCategories.filter((item) => item.slug !== "all").map((item) => (
              <option value={item.slug} key={item.slug}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-cream">Your rating <span className="text-gold">*</span></legend>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Select a rating from 1 to 5">
          {[1,2,3,4,5].map((value) => (
            <button
              key={value} type="button" aria-label={`Rate ${value} out of 5`} aria-pressed={draft.rating === value}
              onClick={() => setDraft((old) => ({...old, rating: value}))}
              className={["size-11 rounded-lg border text-xl transition-colors",
                draft.rating === value ? "border-gold bg-gold text-navy" : "border-gold/30 bg-navy-deep text-gold-light hover:border-gold"].join(" ")}
            >★</button>
          ))}
          <span className="self-center pl-2 text-sm text-muted" aria-live="polite">{draft.rating ? `${draft.rating} / 5` : "Not rated"}</span>
        </div>
      </fieldset>
      <div>
        <label htmlFor="feedback-message" className="mb-2 block text-sm font-medium text-cream">Your feedback <span className="text-gold">*</span></label>
        <textarea
          id="feedback-message" name="message" rows={5} minLength={20} maxLength={800} required
          className={inputClass} placeholder="Describe your experience in your own words (20–800 characters)"
          value={draft.message} onChange={(e) => setDraft((old) => ({...old, message: e.target.value}))}
        />
        <p className="mt-2 text-right text-xs text-muted">{draft.message.length} / 800</p>
      </div>
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gold/20 bg-navy-deep/65 p-4 text-sm leading-6 text-cream/80">
        <input
          type="checkbox" className="mt-1 size-4 shrink-0 accent-[#e8b664]" checked={draft.consentToPublish}
          onChange={(e) => setDraft((old) => ({...old, consentToPublish: e.target.checked}))}
        />
        I give permission for my feedback and selected display name to appear publicly after verification. Leave unchecked for private feedback only.
      </label>
      <p className="text-xs leading-6 text-muted">
        This form prepares an email addressed to <a className="text-gold-light underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
        It does not send automatically, store your feedback or publish a review. Avoid including sensitive personal details.
      </p>
      {error && <p role="alert" className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</p>}
      {notice && <p role="status" className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-6 text-cream">{notice}</p>}
      <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light sm:w-auto">
        Prepare Feedback Email <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
