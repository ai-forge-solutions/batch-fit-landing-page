"use client"

import Image from "next/image"
import { Check, BatteryLow } from "lucide-react"
import { PositiveGrowthRechart } from "@/components/ui/positive-growth-rechart"
import { AppStoreButtons } from "./app-store-buttons"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const highlights = [
  "Cocina 1 vez por semana",
  "Comes el resto sin decidir nada",
  "Todo guiado paso a paso",
  "Flexible, sin rigidez ni extremos",
]

export function WhatIsBatchFit() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0, // Delay eliminado
        ease: "easeOut" 
      }
    }
  }

  return (
    <section ref={ref} className="bg-gradient-to-b from-orange-100 to-white py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título principal centrado */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-foreground text-balance leading-tight">
            BatchFit no te da otra dieta<br />
            te da el sistema que te falta
          </h1>
        </div>

        {/* Contenido centrado */}
        <div className="flex justify-center">
          {/* Subsección central - Subtítulo y CTA */}
          <div className="w-full max-w-2xl flex flex-col justify-center items-center text-center">
            <p className="text-base md:text-xl text-muted-foreground text-balance mb-8 md:mb-12 leading-relaxed">
              Otras soluciones te ayudan a comer mejor<br />
              BatchFit hace que hacerlo sea realmente fácil
            </p>
            
            {/* Tabla comparativa */}
            <div className="w-full max-w-4xl mb-8 md:mb-12">
              <div className="overflow-x-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}>
                  {/* Header */}
                  <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100">
                    <div className="p-4 md:p-6"></div>
                    <div className="p-4 md:p-6 text-center font-semibold text-gray-700 text-sm md:text-base">
                      Otras soluciones
                    </div>
                    <div className="p-4 md:p-6 text-center font-bold text-emerald-800 bg-gradient-to-r from-emerald-50 to-emerald-100 text-sm md:text-base">
                      BatchFit
                    </div>
                  </div>
                  
                  {/* Rows */}
                  <div className="divide-y divide-gray-100">
                    <div className="grid grid-cols-3 hover:bg-gray-50/50 transition-all duration-200 group">
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-800 font-medium flex items-center">
                        Te ayudan con tus macros
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-semibold">✓</span>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center bg-gradient-to-r from-emerald-50/30 to-emerald-50/60">
                        <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-sm">✓</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 hover:bg-gray-50/50 transition-all duration-200 group">
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-800 font-medium flex items-center">
                        Se adaptan a tus objetivos
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-semibold">✓</span>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center bg-gradient-to-r from-emerald-50/30 to-emerald-50/60">
                        <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-sm">✓</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 hover:bg-gray-50/50 transition-all duration-200 group">
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-800 font-medium flex items-center">
                        Reducen el tiempo que dedicas a organizar tu comida
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-lg font-semibold">✗</span>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center bg-gradient-to-r from-emerald-50/30 to-emerald-50/60">
                        <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-sm">✓</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 hover:bg-gray-50/50 transition-all duration-200 group">
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-800 font-medium flex items-center">
                        Eliminan la necesidad de pensar qué comer cada día
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-lg font-semibold">✗</span>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center bg-gradient-to-r from-emerald-50/30 to-emerald-50/60">
                        <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-sm">✓</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 hover:bg-gray-50/50 transition-all duration-200 group">
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-800 font-medium flex items-center">
                        Es sostenible a largo plazo
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-lg font-semibold">✗</span>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center bg-gradient-to-r from-emerald-50/30 to-emerald-50/60">
                        <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-sm">✓</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 hover:bg-gray-50/50 transition-all duration-200 group">
                      <div className="p-4 md:p-6 text-sm md:text-base text-gray-800 font-medium flex items-center">
                        Encajan con una agenda ocupada
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center">
                        <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-lg font-semibold">△</span>
                      </div>
                      <div className="p-4 md:p-6 flex items-center justify-center bg-gradient-to-r from-emerald-50/30 to-emerald-50/60">
                        <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-semibold shadow-sm">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copy motivacional */}
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center mb-12 mt-16 px-4"
            >
              <div className="space-y-3 max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-dark font-medium leading-relaxed">
                  BatchFit funciona incluso
                </p>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-dark font-medium leading-relaxed">
                    cuando baja tu motivación
                  </p>
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <BatteryLow className="w-12 h-12 md:w-16 md:h-16 text-red-500" />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-24">
                  <p className="text-xl md:text-2xl text-dark font-medium leading-relaxed text-center">
                    pero tus metas siguen altas
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="pb-8 relative w-full"
            >
              <div className="relative flex items-center justify-center">
                {/* Laurel izquierdo pegado al borde de la pantalla */}
                <Image 
                  src="/laurel_left.webp" 
                  alt="Laurel izquierdo" 
                  width={60} 
                  height={60}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 md:w-16 z-10 pointer-events-none"
                  style={{ imageRendering: 'auto', height: 'auto' }}
                />
                
                {/* CTA centrado */}
                <AppStoreButtons />
                
                {/* Laurel derecho pegado al borde de la pantalla */}
                <Image 
                  src="/laurel_right.webp" 
                  alt="Laurel derecho" 
                  width={60} 
                  height={60}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 md:w-16 z-10 pointer-events-none"
                  style={{ imageRendering: 'auto', height: 'auto' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
