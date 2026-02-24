// GA4 Analytics utilities for BatchFit
// Measurement ID: G-TY6H1011EB
// Meta Pixel ID: 915438308012120

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        page_path?: string
        page_title?: string
        [key: string]: any
      }
    ) => void
    dataLayer: any[]
    fbq: (command: string, eventName: string, parameters?: Record<string, any>) => void
  }
}

/**
 * Track custom events in both GA4 and Meta Pixel
 * @param eventName - The event name (e.g., 'cta_click', 'lead_submit')
 * @param parameters - Event parameters object
 */
export const trackEvent = (
  eventName: string, 
  parameters: Record<string, string | number | boolean> = {}
) => {
  // Track in GA4
  if (window.gtag) {
    console.log('[Analytics] GA4 Tracking event:', eventName, parameters)
    window.gtag('event', eventName, parameters)
  } else {
    console.warn('[Analytics] gtag not available - GA4 event not tracked:', eventName, parameters)
  }

  // Track in Meta Pixel
  if (window.fbq) {
    console.log('[Analytics] Meta Pixel Tracking event:', eventName, parameters)
    
    // Use consistent event names across both platforms
    window.fbq('trackCustom', eventName, parameters)
  } else {
    console.warn('[Analytics] fbq not available - Meta Pixel event not tracked:', eventName, parameters)
  }
}

/**
 * Track page views for App Router navigation in both GA4 and Meta Pixel
 * @param path - The page path
 * @param title - Optional page title
 */
export const trackPageView = (path: string, title?: string) => {
  // Track in GA4
  if (window.gtag) {
    console.log('[Analytics] GA4 Tracking pageview:', path, title || 'No title')
    window.gtag('config', 'G-TY6H1011EB', {
      page_path: path,
      page_title: title
    })
  } else {
    console.warn('[Analytics] gtag not available - GA4 pageview not tracked:', path)
  }

  // Track in Meta Pixel
  if (window.fbq) {
    console.log('[Analytics] Meta Pixel Tracking pageview:', path)
    window.fbq('track', 'PageView')
  } else {
    console.warn('[Analytics] fbq not available - Meta Pixel pageview not tracked:', path)
  }
}

/**
 * Track CTA clicks with standard parameters in both GA4 and Meta Pixel
 * @param ctaId - Unique identifier for the CTA
 * @param ctaText - Visible text of the CTA
 * @param ctaLocation - Location/section where CTA appears
 * @param additionalParams - Any additional parameters
 */
export const trackCtaClick = (
  ctaId: string,
  ctaText: string,
  ctaLocation: string,
  additionalParams: Record<string, string | number | boolean> = {}
) => {
  trackEvent('cta_click', {
    cta_id: ctaId,
    cta_text: ctaText,
    cta_location: ctaLocation,
    ...additionalParams
  })
}

/**
 * Track form submissions in both GA4 and Meta Pixel
 * @param formId - Unique identifier for the form
 * @param leadType - Type of lead (waitlist, demo, etc.)
 * @param additionalParams - Any additional parameters
 */
export const trackLeadSubmit = (
  formId: string,
  leadType: string,
  additionalParams: Record<string, string | number | boolean> = {}
) => {
  trackEvent('lead_submit', {
    form_id: formId,
    lead_type: leadType,
    ...additionalParams
  })
}

/**
 * Enhanced measurement events are handled automatically by GA4:
 * - scroll (90% page scroll)
 * - outbound_click (clicks to external domains)
 * - file_download (clicks on file extensions)
 * - video_play, video_progress, video_complete (HTML5 videos)
 * - site_search (URL parameter tracking)
 * 
 * Enable these in GA4 dashboard under:
 * Admin > Data Streams > Web > Enhanced measurement
 */