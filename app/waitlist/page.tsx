import { WaitlistSection } from '@/components/waitlist/waitlist-section'

export default function WaitlistPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  return (
    <main>
      <WaitlistSection searchParams={searchParams} />
    </main>
  )
}