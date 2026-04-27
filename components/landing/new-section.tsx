"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export function NewSection() {
  const isMobile = useIsMobile()
  
  // Scroll to specific step function
  const scrollToStep = (stepNumber: number) => {
    const stepElement = document.querySelector(`[data-step="${stepNumber}"]`)
    if (stepElement) {
      stepElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }
  
  // Scroll to next section after step 3
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#problem-empathy')
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
    <div className="py-12 px-4 sm:py-20 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center relative">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8 sm:mb-12 leading-tight">
            Logra tus metas fitness con <span style={{color: '#4fe4b7', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>BatchFit</span> en tres sencillos pasos 🎯
          </h2>
          
          {/* Scroll indicator to first step */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div
              onClick={() => scrollToStep(1)}
              className="flex flex-col items-center text-dark cursor-pointer hover:text-dark/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-20 md:mt-24">
          {/* Product Demo - 3 steps */}
          <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
            
            {/* Step 1 */}
            <div className="text-center relative" data-step="1">
              <div className="max-w-xs mx-auto">
                <div className="relative" style={{filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.4))'}}>
                  <Image 
                    src="/batchfit-mockup-weekmeals.webp" 
                    alt="BatchFit plan semanal mockup" 
                    width={800} 
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: 'unset' }}
                    priority
                  />
                  <div className="absolute bottom-4 -left-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl py-8 px-6 pb-6 border border-white/20 shadow-xl cursor-pointer hover:bg-white/95 transition-colors" onClick={() => scrollToStep(2)}>
                    <div className="text-center mb-3 relative">
                      <span className="absolute top-0 left-0 text-black font-bold text-2xl">1</span>
                      <div>
                        <h4 className="font-bold text-2xl text-dark mb-2">BatchFit crea tu plan semanal</h4>
                        <p className="text-base text-dark/70">Menús personalizados según tus <span className="font-bold">macros y objetivos</span>, gustos y preferencias</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-dark/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative" data-step="2">
              <div className="max-w-xs mx-auto">
                <div className="relative" style={{filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.4))'}}>
                  <Image 
                    src="/batchfi-mockup-shoppinglist.webp" 
                    alt="Lista de compra optimizada" 
                    width={800} 
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: 'unset' }}
                    priority
                  />
                  <div className="absolute bottom-4 -left-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl py-8 px-6 pb-6 border border-white/20 shadow-xl cursor-pointer hover:bg-white/95 transition-colors" onClick={() => scrollToStep(3)}>
                    <div className="text-center mb-3 relative">
                      <span className="absolute top-0 left-0 text-black font-bold text-2xl">2</span>
                      <div>
                        <h4 className="font-bold text-2xl text-dark mb-2">Genera tu lista de la compra</h4>
                        <p className="text-base text-dark/70">Compra todo lo que necesitas para la semana <span className="font-bold">sin pensar</span> qué falta</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-dark/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative" data-step="3">
              <div className="max-w-xs mx-auto">
                <div className="relative" style={{filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.4))'}}>
                  <Image 
                    src="/batchfi-mockup-batchstep.webp" 
                    alt="Guía paso a paso sesión batchfit" 
                    width={800} 
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: 'unset' }}
                    priority
                  />
                  <div className="absolute bottom-4 -left-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl py-8 px-6 pb-6 border border-white/20 shadow-xl cursor-pointer hover:bg-white/95 transition-colors" onClick={scrollToNextSection}>
                    <div className="text-center mb-3 relative">
                      <span className="absolute top-0 left-0 text-black font-bold text-2xl">3</span>
                      <div>
                        <h4 className="font-bold text-2xl text-dark mb-2">Te guía paso a paso en tu batchcooking</h4>
                        <p className="text-base text-dark/70">Sigue instrucciones optimizadas para cocinar toda tu semana de forma <span className="font-bold">eficiente</span></p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-dark/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}