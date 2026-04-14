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
      title: "Interfaz Intuitiva",
      description: "Una pantalla principal clara y organizada donde puedes ver todas tus comidas planificadas, seguir tu progreso y acceder a todas las funcionalidades de manera sencilla.",
      image: "/feature-bacthscreen.png",
    },
    {
      id: 2,
      title: "Batch Cooking Inteligente", 
      description: "Planifica y organiza tu batch cooking de forma eficiente. Recibe guías paso a paso para preparar múltiples comidas de una vez y ahorrar tiempo durante toda la semana.",
      image: "/feature-batchcooking-step.png",
    },
    {
      id: 3,
      title: "Creación de Objetivos",
      description: "Define tus metas nutricionales personalizadas. Configura objetivos de peso, masa muscular, o bienestar general y recibe un plan alimentario adaptado a tus necesidades específicas.",
      image: "/feature-goals-creation.png",
    },
    {
      id: 4,
      title: "Seguimiento de Progreso",
      description: "Visualiza tu evolución con gráficos detallados y estadísticas. Monitorea tu peso, medidas, consumo nutricional y cómo te acercas a tus objetivos día a día.",
      image: "/feature-progress.png",
    },
    {
      id: 5,
      title: "Planificación Semanal",
      description: "Organiza todas tus comidas de la semana de un vistazo. Planifica desayunos, comidas, cenas y snacks con un calendario intuitivo que te ayuda a mantener una alimentación consistente.",
      image: "/feature-weekmeals.png",
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
                <div className="relative w-full max-w-3xl min-h-[400px] md:min-h-[500px]">
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
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-2xl"
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
                    className="absolute left-4 top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white/95 transition-all z-20 hover:scale-105"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % features.length)}
                    className="absolute right-4 top-[40%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200/50 flex items-center justify-center hover:bg-white/95 transition-all z-20 hover:scale-105"
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