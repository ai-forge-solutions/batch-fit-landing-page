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
      description: "Organiza y gestiona tus sesiones de batch cooking con cronómetros inteligentes, listas de tareas y guías paso a paso para maximizar tu eficiencia en la cocina.",
      image: "/batchfi-mockup-batchsession.webp",
    },
    {
      id: 2,
      title: "Instrucciones Paso a Paso", 
      description: "Sigue cada paso de tus recetas con instrucciones detalladas y cronómetros integrados. Nunca te perderás en el proceso de preparación de tus comidas.",
      image: "/batchfi-mockup-batchstep.webp",
    },
    {
      id: 3,
      title: "Lista de Compras Inteligente",
      description: "Genera automáticamente tu lista de compras basada en tu planificación semanal. Organizada por categorías para hacer tu compra más eficiente y sin olvidar nada.",
      image: "/batchfi-mockup-shoppinglist.webp",
    },
    {
      id: 4,
      title: "Editor de Ingredientes",
      description: "Personaliza y ajusta los ingredientes de tus recetas según tus preferencias. Modifica cantidades, sustituye ingredientes y adapta las recetas a tu gusto.",
      image: "/batchfit-mockup-edit-recipe-ingredients.webp",
    },
    {
      id: 5,
      title: "Seguimiento de Progreso",
      description: "Visualiza tu evolución con gráficos detallados y estadísticas. Monitorea tu adherencia al plan, progreso hacia tus objetivos y logros conseguidos.",
      image: "/batchfit-mockup-progress.webp",
    },
    {
      id: 6,
      title: "Planificación Semanal",
      description: "Organiza todas tus comidas de la semana de un vistazo. Planifica desayunos, comidas, cenas y snacks con un calendario intuitivo y visual.",
      image: "/batchfit-mockup-weekmeals.webp",
    },
    {
      id: 7,
      title: "Editor de Recetas",
      description: "Crea, modifica y personaliza tus recetas favoritas. Ajusta porciones, tiempos de cocción y técnicas para que se adapten perfectamente a tu estilo de vida.",
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
            Características que
            <span style={{ color: '#4fe4b7' }}> transforman</span> tu alimentación
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            BatchFit no es solo una app más. Es un sistema completo que convierte el caos alimentario en orden y simplicidad.
          </motion.p>
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
                      className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
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
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed min-h-[3rem]">
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