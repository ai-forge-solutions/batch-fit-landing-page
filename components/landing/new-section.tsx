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
    <section className="py-12 px-4 sm:py-20 sm:px-6 bg-white" data-section="new-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center relative">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8 sm:mb-12 leading-tight">
            Todo lo que necesitas para lograr tus metas fitness, organizado para ti en tres sencillos pasos
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
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <Image 
                    src="/batchfit-mockup-weekmeals.webp" 
                    alt="BatchFit plan semanal mockup" 
                    width={800} 
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: 'unset' }}
                    priority
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm rounded-lg py-6 px-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <span className="text-black font-bold text-2xl shrink-0">1</span>
                      <div>
                        <h4 className="font-bold text-2xl text-dark mb-2">Plan Semanal Personalizado</h4>
                        <p className="text-base text-dark/70">Menús adaptados a tus macros y preferencias</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scroll indicator to step 2 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div
                  onClick={() => scrollToStep(2)}
                  className="flex flex-col items-center text-dark cursor-pointer hover:text-dark/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative" data-step="2">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <Image 
                    src="/batchfi-mockup-shoppinglist.webp" 
                    alt="Lista de compra optimizada" 
                    width={800} 
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: 'unset' }}
                    priority
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm rounded-lg py-6 px-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <span className="text-black font-bold text-2xl shrink-0">2</span>
                      <div>
                        <h4 className="font-bold text-2xl text-dark mb-2">Lista Inteligente</h4>
                        <p className="text-base text-dark/70">Optimizada por ingredientes y cantidades exactas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scroll indicator to step 3 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div
                  onClick={() => scrollToStep(3)}
                  className="flex flex-col items-center text-dark cursor-pointer hover:text-dark/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative" data-step="3">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <Image 
                    src="/batchfi-mockup-batchstep.webp" 
                    alt="Guía paso a paso sesión batchfit" 
                    width={800} 
                    height={600}
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: 'unset' }}
                    priority
                  />
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm rounded-lg py-6 px-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <span className="text-black font-bold text-2xl shrink-0">3</span>
                      <div>
                        <h4 className="font-bold text-2xl text-dark mb-2">Guía Paso a Paso</h4>
                        <p className="text-base text-dark/70">Instrucciones claras para tu sesión de batch cooking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scroll indicator to next section */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div
                  onClick={scrollToNextSection}
                  className="flex flex-col items-center text-dark cursor-pointer hover:text-dark/80 transition-colors bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}