import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { NewSection } from "@/components/landing/new-section"
import { ProblemEmpathy } from "@/components/landing/problem-empathy"
import { WhatIsBatchFit } from "@/components/landing/what-is-batchfit"
// import { BeforeAfter } from "@/components/landing/before-after"
// import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { Benefits } from "@/components/landing/benefits"
import { Testimonials } from "@/components/landing/testimonials"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="pas">
        <NewSection />
      </section>
      <section id="problem-empathy">
        <ProblemEmpathy />
      </section>
      <section id="que-es">
        <WhatIsBatchFit />
      </section>
      {/* <section id="antes-despues">
        <BeforeAfter />
      </section>
      <section id="como-funciona">
        <HowItWorks />
      </section> */}
      <section id="beneficios">
        <Benefits />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="caracteristicas">
        <Features />
      </section>
      <section id="cta">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  )
}
