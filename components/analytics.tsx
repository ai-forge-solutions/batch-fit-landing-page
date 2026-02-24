"use client"

import { usePageViews } from '@/hooks/use-pageviews'

/**
 * Client component that handles GA4 pageview tracking for App Router
 * Must be rendered on the client side to access navigation hooks
 */
function AnalyticsClient() {
  usePageViews()
  return null
}

export default AnalyticsClient