'use client'

import { useEffect } from 'react'
import { initLandingPageTracking } from '@/lib/analytics'

/**
 * Client-side component to initialize scroll depth and section tracking
 * for the BatchFit landing page
 */
export function LandingPageTracking() {
  useEffect(() => {
    // Initialize tracking when component mounts
    const cleanup = initLandingPageTracking()
    
    // Cleanup when component unmounts
    return cleanup
  }, [])

  // This component doesn't render anything
  return null
}