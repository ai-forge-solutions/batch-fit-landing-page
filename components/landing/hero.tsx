"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { AppStoreButtons } from "./app-store-buttons"
import { useIsMobile } from "@/hooks/use-mobile"
import { CountdownTimer } from "@/components/ui/countdown-timer"

export function Hero() {
  const isMobile = useIsMobile()
  
  // Scroll to next section function
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight * 0.85,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 pt-16 pb-6">
      {/* Container principal con layout responsive */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-8">
        {/* Contenido de texto */}
        <div className="flex-1 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-title tracking-tight text-dark text-balance leading-tight">
            Consigue tu objetivo fit<br />
            sin perder el foco ni tu tiempo en la cocina
          </h1>
          
          <p className="mt-4 text-base md:text-lg subtitle text-dark/80 max-w-2xl mx-auto text-balance">
            Tu nutrición de alto rendimiento <span className="font-bold text-lg md:text-xl text-dark">automatizada</span> en una sola sesión semanal de{" "}
            <span className="font-bold text-lg md:text-xl text-dark inline-flex items-center gap-1">
              60 minutos
              <span className="text-primary ml-1">✓</span>
            </span>
          </p>
          
          <div className="mt-6">
            <AppStoreButtons inView={true} />
          </div>

          {/* Countdown Timer */}
          <div className="mt-6">
            <p className="text-sm text-dark/70 mb-4 font-medium">
              Acceso fundador termina en:
            </p>
            <CountdownTimer 
              targetDate={new Date('2026-03-19T23:59:59')} 
              className=""
            />
          </div>
          
          {/* Imagen en mobile (debajo del CTA) */}
          <div className="mt-8 lg:hidden">
            <Image 
              src="/hero-page.webp" 
              alt="BatchFit App" 
              width={350} 
              height={265}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        
        {/* Imagen en desktop (a la derecha) */}
        <div className="hidden lg:block flex-shrink-0 mt-4">
          <Image 
            src="/hero-page.webp" 
            alt="BatchFit App" 
            width={380} 
            height={285}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
      
      {/* Scroll indicator - Desktop only */}
      {!isMobile && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-dark cursor-pointer hover:text-dark/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      )}
    </section>
  )
}
