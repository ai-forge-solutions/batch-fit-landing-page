"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

/**
 * Custom hook to track pageviews in Next.js App Router
 * Automatically tracks navigation changes and sends pageview events to GA4
 */
export function usePageViews() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Construct full path with search parameters
    const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    
    // Get page title from document (after it's rendered)
    const title = document?.title || 'BatchFit'
    
    // Track the pageview
    trackPageView(fullPath, title)
  }, [pathname, searchParams])
}