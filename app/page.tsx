import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { WhatIsBatchFit } from "@/components/landing/what-is-batchfit"
import { BeforeAfter } from "@/components/landing/before-after"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Positioning } from "@/components/landing/positioning"
import { FinalCTA } from "@/components/landing/final-cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <WhatIsBatchFit />
      <BeforeAfter />
      <HowItWorks />
      <Positioning />
      <FinalCTA />
    </main>
  )
}
