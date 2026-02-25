import { WaitlistSection } from '@/components/waitlist/waitlist-section'

export default async function WaitlistPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  // Await the searchParams Promise
  const resolvedSearchParams = await searchParams
  
  // Debug: Log what the page receives (now using resolved version)
  console.log('[BatchFit] Page received searchParams:', resolvedSearchParams)
  
  return (
    <main>
      <WaitlistSection searchParams={resolvedSearchParams} />
    </main>
  )
}