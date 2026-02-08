"use client"

import { Check } from "lucide-react"
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
        delay: 1.5, // 1.5 segundos de delay
        ease: "easeOut" 
      }
    }
  }

  return (
    <section ref={ref} className="bg-gradient-to-b from-orange-100 to-white py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título principal centrado */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-foreground text-balance">
            BatchFit es un sistema, no una dieta
          </h1>
        </div>

        {/* Contenido dividido en dos subsecciones */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-20">
          {/* Subsección izquierda - Gráfico */}
          <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-center min-h-[200px] md:min-h-[300px]">
            <div className="relative w-full flex justify-center" style={{ top: '-20px' }}>
              <PositiveGrowthRechart className="w-[240px] h-[180px] md:w-[400px] md:h-[260px]" />
            </div>
          </div>
          
          {/* Subsección derecha - Subtítulo y CTA */}
          <div className="flex-1 w-full md:w-1/2 flex flex-col justify-center items-center text-center min-h-[200px] md:min-h-[300px]">
            <p className="text-base md:text-xl text-muted-foreground text-balance mb-6 md:mb-8">
              BatchFit elimina la carga mental de la alimentación semanal convirtiéndola en un proceso claro, predecible y repetible.
            </p>
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <AppStoreButtons />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
