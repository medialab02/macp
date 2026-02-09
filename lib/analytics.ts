// Analytics Events Helper - Ready for integration with GA4, Segment, etc.

export type EventName =
  | "view_home"
  | "view_mac_landing"
  | "view_catalog"
  | "view_product"
  | "view_compare"
  | "search_used"
  | "filter_applied"
  | "compare_added"
  | "compare_removed"
  | "leadform_opened"
  | "leadform_submitted"
  | "contact_advisor_opened"
  | "cta_clicked"
  | "wizard_started"
  | "wizard_completed"
  | "faq_expanded";

export interface TrackingPayload {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track analytics events
 * TODO: Connect to actual analytics provider (GA4, Segment, Mixpanel, etc.)
 */
export function track(eventName: EventName, payload?: TrackingPayload): void {
  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, payload);
  }

  // TODO: Implement actual tracking
  // Example with GA4:
  // gtag('event', eventName, payload);
  
  // Example with Segment:
  // analytics.track(eventName, payload);
}

/**
 * Track page views
 */
export function trackPageView(pageName: string, path: string): void {
  track(`view_${pageName}` as EventName, { path });
}

/**
 * Track form interactions
 */
export function trackFormEvent(
  formName: string,
  action: "opened" | "submitted" | "error",
  payload?: TrackingPayload
): void {
  track(`${formName}_${action}` as EventName, payload);
}

/**
 * Generic event tracking - alias for track with flexible event names
 */
export function trackEvent(eventName: string, payload?: TrackingPayload): void {
  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${eventName}`, payload);
  }
  
  // TODO: Implement actual tracking
}
