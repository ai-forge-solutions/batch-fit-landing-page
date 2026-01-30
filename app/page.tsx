import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { AgitationSection } from "@/components/landing/agitation-section"
import { WhatIsBatchFit } from "@/components/landing/what-is-batchfit"
import { BeforeAfter } from "@/components/landing/before-after"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { Positioning } from "@/components/landing/positioning"
import { FinalCTA } from "@/components/landing/final-cta"

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <section id="problema">
        <ProblemSection />
      </section>
      <section id="agitacion">
        <AgitationSection />
      </section>
      <section id="que-es">
        <WhatIsBatchFit />
      </section>
      <section id="antes-despues">
        <BeforeAfter />
      </section>
      <section id="como-funciona">
        <HowItWorks />
      </section>
      <section id="caracteristicas">
        <Features />
      </section>
      <section id="beneficios">
        <Positioning />
      </section>
      <section id="cta">
        <FinalCTA />
      </section>
    </main>
  )
}
