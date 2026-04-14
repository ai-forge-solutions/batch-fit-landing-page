"use client"

import Image from "next/image"

export function NewSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-12">
            Todo lo que necesitas para lograr tus metas fitness, organizado para ti
          </h2>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-12">
            Batchfit crea tu plan semanal
          </h3>
          
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
              <div className="absolute bottom-8 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="font-bold text-xl text-dark mb-2">Plan Semanal Personalizado</h4>
                <p className="text-base text-dark/70">Menús adaptados a tus macros y preferencias</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          {/* Product Demo - 5 steps */}
          <div className="space-y-24">
            
            {/* Step 2 */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-12">
                Genera tu lista de la compra optimizada
              </h3>
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
                  <div className="absolute bottom-8 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h4 className="font-bold text-xl text-dark mb-2">Lista Inteligente</h4>
                    <p className="text-base text-dark/70">Optimizada por ingredientes y cantidades exactas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-12">
                Te guia paso a paso en una sesion batchfit
              </h3>
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
                  <div className="absolute bottom-8 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h4 className="font-bold text-xl text-dark mb-2">Guía Paso a Paso</h4>
                    <p className="text-base text-dark/70">Instrucciones claras para tu sesión de batch cooking</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}