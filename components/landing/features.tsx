"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// Variants para animación del header
const titleVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, delay: 1.2, ease: "easeOut" }
  }
}

export function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  // Características principales de BatchFit
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



  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Todo lo que
            <span style={{ color: '#4fe4b7' }}> BatchFit</span> ofrece
          </motion.h2>
        </div>
        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col items-center justify-between relative">
              {/* Contenido del Slide con animación */}
              <div className="w-full flex flex-col items-center justify-center gap-6 px-2 sm:px-8 md:px-16">
                {/* Título arriba */}
                <div className="min-h-[4rem] flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.h3 
                      key={`title-${currentSlide}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center"
                    >
                      {features[currentSlide].title}
                    </motion.h3>
                  </AnimatePresence>
                </div>
                
                {/* Contenedor de imágenes - todas precargadas */}
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
                        priority={index === 0} // Solo priority para la primera
                      />
                      
                      {/* Caja superpuesta con copy */}
                      <div className="absolute bottom-8 left-8 right-8 bg-white/95 rounded-lg py-6 px-6 border border-gray-200/50 shadow-xl">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed min-h-[3rem] text-center">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Flechas de navegación superpuestas */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)}
                    className="absolute -left-6 top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white/95 transition-all z-20 hover:scale-105"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % features.length)}
                    className="absolute -right-6 top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white/95 transition-all z-20 hover:scale-105"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicadores de página debajo */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? ''
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{
                    backgroundColor: index === currentSlide ? '#4fe4b7' : ''
                  }}
                  aria-label={`Ir a la característica ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}