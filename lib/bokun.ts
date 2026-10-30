// Bókun booking widgets — booking channel "journeyiceland.is" (vendor 143543).
// These IDs are public (they end up in the page HTML); they are not API secrets.
export const BOKUN_CHANNEL_UUID = 'f0897b30-9299-4d6b-bad4-38b1421f5ef1';

export const BOKUN_LOADER_SRC =
  `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${BOKUN_CHANNEL_UUID}`;

// Booking-calendar widget for one Bókun experience (same URL the Bókun wizard generates).
export function bokunCalendarSrc(productId: number): string {
  return `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL_UUID}/experience-calendar/${productId}`;
}
