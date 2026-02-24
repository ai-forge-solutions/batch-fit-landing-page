'use client'

import dynamic from 'next/dynamic'

// Dynamic import Analytics to prevent SSR issues with useSearchParams
const Analytics = dynamic(() => import('@/components/analytics'), { ssr: false })

export default function ClientAnalytics() {
  return <Analytics />
}