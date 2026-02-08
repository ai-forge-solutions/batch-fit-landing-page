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
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {/* Contenido del Slide con animación */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-2 sm:px-8 md:px-16 min-h-[300px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
                  >
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-full md:w-96 h-80 md:h-96 mb-4 md:mb-0 flex items-center justify-center">
                      <Image
                        src={features[currentSlide].image}
                        alt={features[currentSlide].title}
                        width={400}
                        height={400}
                        className="w-auto h-full object-contain rounded-2xl"
                      />
                    </div>
                    {/* Texto */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {features[currentSlide].title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {features[currentSlide].description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* Botones de navegación fuera del slider */}
          <div className="flex justify-center gap-8 mt-6">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
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
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % features.length)}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}