"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const features = [
    {
      id: 1,
      title: "Sesiones de Batch Cooking",
      description: "Cocina toda tu semana con sesiones optimizadas, cronómetros inteligentes y flujo guiado paso a paso",
      image: "/batchfi-mockup-batchsession.webp",
    },
    {
      id: 2,
      title: "Instrucciones Paso a Paso",
      description: "Sigue instrucciones claras durante cada preparación sin perderte en la cocina",
      image: "/batchfi-mockup-batchstep.webp",
    },
    {
      id: 3,
      title: "Lista de Compras Inteligente",
      description: "Tu compra semanal generada automáticamente con cantidades exactas y todo organizado",
      image: "/batchfi-mockup-shoppinglist.webp",
    },
    {
      id: 4,
      title: "Editor de macros",
      description: "Adapta las sugerencias de calorías y macronutrientes",
      image: "/batchfit-mockup-edit-recipe-ingredients.webp",
    },
    {
      id: 5,
      title: "Seguimiento de Progreso",
      description: "Visualiza tu evolución y adaptamos el plan en base a tus resultados",
      image: "/batchfit-mockup-progress.webp",
    },
    {
      id: 6,
      title: "Planificación Semanal",
      description: "Visualiza y organiza toda tu semana nutricional de un vistazo",
      image: "/batchfit-mockup-weekmeals.webp",
    },
    {
      id: 7,
      title: "Editor de Recetas",
      description: "Edita recetas, ajusta ingredientes y adapta el sistema a tus preferencias",
      image: "/batchfitmockup-edit-recipes.webp",
    },
  ]

  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Todo lo que <span className="text-primary">BatchFit</span> ofrece
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="border border-border/40 rounded-2xl p-6 sm:p-10 md:p-14 overflow-hidden">
            <div className="flex flex-col items-center justify-between relative">
              <div className="w-full flex flex-col items-center justify-center gap-6 px-2 sm:px-8 md:px-16">
                <div className="min-h-[4rem] flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.h3
                      key={`title-${currentSlide}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl md:text-4xl lg:text-5xl text-foreground text-center"
                    >
                      {features[currentSlide].title}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                <div className="relative w-full max-w-md mx-auto aspect-[3/5] md:max-w-lg">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={400}
                        height={800}
                        className="w-full h-full object-contain rounded-2xl"
                        style={{ backgroundColor: 'unset' }}
                        priority={index === 0}
                      />

                      <div className="absolute bottom-8 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl py-5 px-5 border border-border/30">
                        <p className="text-sm md:text-base text-foreground/70 leading-relaxed min-h-[2.5rem] text-center">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)}
                    className="absolute -left-5 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border/40 flex items-center justify-center hover:border-border transition-colors duration-300 z-20"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground/60" />
                  </button>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % features.length)}
                    className="absolute -right-5 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border/40 flex items-center justify-center hover:border-border transition-colors duration-300 z-20"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground/60" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-foreground/15 hover:bg-foreground/25'
                  }`}
                  aria-label={`Ir a la característica ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
