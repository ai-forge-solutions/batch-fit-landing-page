import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProblemBridge } from "@/components/landing/problem-bridge"
import { NewSection } from "@/components/landing/new-section"
import { RealPlansCarousel } from "@/components/landing/real-plans-carousel"
import { WhatIsBatchFit } from "@/components/landing/what-is-batchfit"
import { Features } from "@/components/landing/features"
import { Benefits } from "@/components/landing/benefits"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { LandingPageTracking } from "@/components/landing-page-tracking"

export default function Home() {
  return (
    <main>
      <LandingPageTracking />
      <Header />
      <section data-section="hero">
        <Hero />
      </section>
      <section id="problema" data-section="problema">
        <ProblemBridge />
      </section>
      <section id="what-is-batchfit" data-section="what-is-batchfit">
        <NewSection />
      </section>
      <section id="real-plans" data-section="real-plans">
        <RealPlansCarousel />
      </section>
      <section id="comparison" data-section="comparison">
        <WhatIsBatchFit />
      </section>
      <section id="beneficios" data-section="beneficios">
        <Benefits />
      </section>
      <section id="testimonials" data-section="testimonials">
        <Testimonials />
      </section>
      <section id="caracteristicas" data-section="caracteristicas">
        <Features />
      </section>
      <section id="faq" data-section="faq">
        <FAQ />
      </section>
      <section id="cta" data-section="cta">
        <FinalCTA />
      </section>
      <Footer />
    </main>
  )
}
