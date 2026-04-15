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
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 pt-24 pb-24 lg:pb-32">
      {/* Container principal con layout responsive */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-8">
        {/* Contenido de texto */}
        <div className="flex-1 text-left">
          <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-title tracking-tight text-dark text-balance leading-tight mt-8 lg:mt-0">
            Consigue tu <br />
            objetivo fitness<br />
            sin perder tiempo<br />
            en la cocina<br />
          </h1>
          
          <p className="mt-4 text-lg md:text-xl lg:text-2xl subtitle text-dark/80 max-w-2xl text-balance">
            Batchfit crea tu plan nutricional con instrucciones batch cooking para que cocines toda tu semana en 60 minutos          </p>
          
          {/* Prueba social */}
          <div className="mt-6 flex items-center justify-start">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm border border-gray-100">
              <div className="flex -space-x-2 mr-3">
                <div className="w-5 h-5 rounded-full border border-white overflow-hidden">
                  <Image src="/social-proof-1.webp" alt="Usuario" width={20} height={20} className="w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
                </div>
                <div className="w-5 h-5 rounded-full border border-white overflow-hidden">
                  <Image src="/social-proof-2.webp" alt="Usuario" width={20} height={20} className="w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
                </div>
                <div className="w-5 h-5 rounded-full border border-white overflow-hidden">
                  <Image src="/social-proof-3.webp" alt="Usuario" width={20} height={20} className="w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
                </div>
              </div>
              <span className="text-sm font-medium text-dark">+ 30 fundadores ya están dentro</span>
            </div>
          </div>
          

          <div className="mt-6 flex justify-start">
            <AppStoreButtons inView={true} />
          </div>
          
          {/* Texto de urgencia */}
          <div className="mt-3 flex justify-start">
            <p className="text-sm text-dark/70 italic">Plazas limitadas</p>
          </div>

          {/* Countdown Timer */}
          
          {/* Imagen en mobile (debajo del CTA) */}
          <div className="mt-8 lg:hidden -mx-6 w-screen relative left-1/2 -translate-x-1/2">
            <Image 
              src="/hero-page.webp" 
              alt="BatchFit App" 
              width={650} 
              height={490}
              className="w-[28rem] h-auto rounded-lg ml-6"
              style={{ 
                backgroundColor: 'unset',
                transform: 'translateX(-1rem)'
              }}
              priority
            />
          </div>
        </div>
        
        {/* Imagen en desktop (a la derecha) */}
        <div className="hidden lg:block shrink-0 mt-4">
          <Image 
            src="/hero-page.webp" 
            alt="BatchFit App" 
            width={450} 
            height={340}
            className="rounded-lg"
            style={{ backgroundColor: 'unset' }}
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
