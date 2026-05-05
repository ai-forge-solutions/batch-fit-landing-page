import dynamic from "next/dynamic"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { LandingPageTracking } from "@/components/landing-page-tracking"

const ProblemBridge = dynamic(() => import("@/components/landing/problem-bridge").then(m => m.ProblemBridge))
const NewSection = dynamic(() => import("@/components/landing/new-section").then(m => m.NewSection))
const RealPlansCarousel = dynamic(() => import("@/components/landing/real-plans-carousel").then(m => m.RealPlansCarousel))
const WhatIsBatchFit = dynamic(() => import("@/components/landing/what-is-batchfit").then(m => m.WhatIsBatchFit))
const Benefits = dynamic(() => import("@/components/landing/benefits").then(m => m.Benefits))
const Testimonials = dynamic(() => import("@/components/landing/testimonials").then(m => m.Testimonials))
const Features = dynamic(() => import("@/components/landing/features").then(m => m.Features))
const FAQ = dynamic(() => import("@/components/landing/faq").then(m => m.FAQ))
const FinalCTA = dynamic(() => import("@/components/landing/final-cta").then(m => m.FinalCTA))
const Footer = dynamic(() => import("@/components/landing/footer").then(m => m.Footer))

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
