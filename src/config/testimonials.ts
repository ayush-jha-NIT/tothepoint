/** Publish only reviews with recorded client approval and publication consent.
 * Empty by design until genuine reviews are supplied and verified.
 */
export const testimonialCategories = [
  { slug: "all", label: "All Reviews" },
  { slug: "kundli", label: "Kundli" },
  { slug: "relationships", label: "Relationships" },
  { slug: "career", label: "Career" },
  { slug: "numerology", label: "Numerology" },
  { slug: "vastu", label: "Vastu" },
  { slug: "muhurat", label: "Muhurat" },
] as const;

export type TestimonialCategory = Exclude<(typeof testimonialCategories)[number]["slug"], "all">;

export type ApprovedReview = {
  id: string;
  name: string; // Public display name authorized by the client
  category: TestimonialCategory;
  quote: string;
  rating?: 1 | 2 | 3 | 4 | 5; // Optional; never infer ratings
  approved: true;
  consentToPublish: true;
};

export type ApprovedVideoReview = {
  id: string;
  name: string;
  category: TestimonialCategory;
  caption: string;
  videoPath: string; // Locally hosted, authorized video /videos/...
  approved: true;
  consentToPublish: true;
};

/** Do not create fictitious reviews to fill a template. */
export const approvedReviews: readonly ApprovedReview[] = [];
export const approvedVideoReviews: readonly ApprovedVideoReview[] = [];

export function filterReviews(
  reviews: readonly ApprovedReview[],
  category: (typeof testimonialCategories)[number]["slug"],
): ApprovedReview[] {
  return reviews.filter(
    (review) => review.approved && review.consentToPublish && (category === "all" || review.category === category),
  );
}

export function getPublicVideoReviews(reviews: readonly ApprovedVideoReview[]): ApprovedVideoReview[] {
  return reviews.filter(
    (review) =>
      review.approved &&
      review.consentToPublish &&
      review.videoPath.startsWith("/videos/") &&
      !review.videoPath.includes("..") &&
      /\.(?:mp4|webm)$/i.test(review.videoPath),
  );
}
