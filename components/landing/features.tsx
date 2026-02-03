"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Tarjetas temporales vacías
  const features = [
    {
      id: 1,
      title: "Característica 1",
      description: "Descripción de la primera característica",
      image: "/placeholder.svg", // Placeholder hasta que tengas la imagen
    },
    {
      id: 2,
      title: "Característica 2", 
      description: "Descripción de la segunda característica",
      image: "/placeholder.svg", // Placeholder hasta que tengas la imagen
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Características que 
            <span style={{color: '#4fe4b7'}}> transforman</span> tu alimentación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BatchFit no es solo una app más. Es un sistema completo que convierte el caos alimentario en orden y simplicidad.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-12 shadow-lg border border-gray-200 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {/* Botón Anterior (desktop only) */}
              <button
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Contenido del Slide */}
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-2 sm:px-8 md:px-16">
                {/* Imagen */}
                <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-64 mb-4 md:mb-0 flex items-center justify-center">
                  <Image
                    src={features[currentSlide].image}
                    alt={features[currentSlide].title}
                    width={256}
                    height={256}
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
              </div>

              {/* Botón Siguiente (desktop only) */}
              <button
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            {/* Botones móviles debajo */}
            <div className="flex md:hidden justify-between mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}