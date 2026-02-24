"use client"

import { usePageViews } from '@/hooks/use-pageviews'

/**
 * Client component that handles GA4 pageview tracking for App Router
 * Must be rendered on the client side to access navigation hooks
 */
export function Analytics() {
  usePageViews()
  return null
}