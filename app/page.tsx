import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PASSection } from "@/components/landing/pas-section"
import { WhatIsBatchFit } from "@/components/landing/what-is-batchfit"
import { BeforeAfter } from "@/components/landing/before-after"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { Benefits } from "@/components/landing/benefits"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="pas">
        <PASSection />
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
        <Benefits />
      </section>
      <section id="cta">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  )
}
