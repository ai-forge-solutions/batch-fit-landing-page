"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { AppStoreButtons } from "./app-store-buttons"

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[85svh] sm:min-h-screen flex items-center justify-center bg-background px-5 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-title tracking-tight text-foreground leading-[1.08]"
          >
            Come bien toda la semana<br />
            sin pensar en ello
          </h1>

          <p
            className="animate-hero-1 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl subtitle text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            BatchFit planifica, organiza tu compra y te guía en la cocina. Toda tu semana resuelta en 60 minutos.
          </p>

          <div
            className="animate-hero-2 mt-5 sm:mt-8 flex items-center justify-center lg:justify-start"
          >
            <div className="flex items-center border border-border/60 rounded-full px-4 py-2">
              <div className="flex -space-x-2 mr-3">
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/social-proof-1.webp" alt="Usuario" width={24} height={24} className="w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/social-proof-2.webp" alt="Usuario" width={24} height={24} className="w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
                  <Image src="/social-proof-3.webp" alt="Usuario" width={24} height={24} className="w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
                </div>
              </div>
              <span className="text-sm font-medium text-foreground/70 subtitle">+30 fundadores ya dentro</span>
            </div>
          </div>

          <div className="animate-hero-3 mt-7 sm:mt-10">
            <AppStoreButtons inView={true} />
          </div>

          <div className="mt-8 sm:mt-10 lg:hidden w-full max-w-[280px] sm:max-w-sm mx-auto">
            <Image
              src="/hero-page.webp"
              alt="BatchFit App"
              width={450}
              height={340}
              className="w-full h-auto rounded-xl"
              style={{ backgroundColor: 'unset' }}
              priority
              sizes="(max-width: 640px) 280px, 384px"
            />
          </div>
        </div>

        <div className="animate-hero-img hidden lg:block shrink-0">
          <Image
            src="/hero-page.webp"
            alt="BatchFit App"
            width={400}
            height={300}
            className="rounded-xl"
            style={{ backgroundColor: 'unset' }}
            priority
            sizes="400px"
          />
        </div>
      </div>

      <div className="animate-hero-5 absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
        <button
          onClick={scrollToNextSection}
          className="text-foreground/25 hover:text-foreground/50 transition-colors duration-300"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  )
}
