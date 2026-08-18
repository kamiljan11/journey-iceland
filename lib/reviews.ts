// Live Google reviews for Journey Iceland, fetched server-side from the
// Places API (New). Cached for 2 days via Next's fetch revalidation so we make
// ~15 requests/month (well inside Google's free tier).
//
// Place ID resolved from the Google Maps listing (rating 5.0, 9 reviews as of
// 2026-08). The API returns at most 5 reviews — that is a Google limitation.

const PLACE_ID = 'ChIJ86cUfPh31kgRAAaNNMRF9Qs';
const REVALIDATE_SECONDS = 60 * 60 * 24 * 2; // 2 days

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto: string | null;
  authorUri: string | null;
};

export type GoogleReviews = {
  rating: number | null;
  total: number | null;
  mapsUri: string | null;
  reviews: GoogleReview[];
};

// Returns live reviews, or null when the key is missing or the request fails —
// callers fall back to static content so the section never breaks the page.
export async function getGoogleReviews(): Promise<GoogleReviews | null> {
  const key = process.env.GOOGLE_PLACES_KEY;
  if (!key) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const data = await res.json();
    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r: any): GoogleReview => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        rating: typeof r.rating === 'number' ? r.rating : 5,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
        profilePhoto: r.authorAttribution?.photoUri ?? null,
        authorUri: r.authorAttribution?.uri ?? null,
      }))
      .filter((r: GoogleReview) => r.text.length > 0);

    if (reviews.length === 0) return null;

    return {
      rating: typeof data.rating === 'number' ? data.rating : null,
      total: typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
      mapsUri: data.googleMapsUri ?? null,
      reviews,
    };
  } catch {
    return null;
  }
}
