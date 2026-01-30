"use client"

import { Check, Clock, Brain, Target, Users, Shield } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Sin decisiones diarias",
      description: "Tu menú semanal planificado automáticamente. No más \"¿qué voy a comer hoy?\"",
    },
    {
      icon: Clock,
      title: "Ahorra tiempo",
      description: "Una sola sesión de batch cooking te da comidas para toda la semana.",
    },
    {
      icon: Target,
      title: "Objetivos nutricionales",
      description: "Cada menú está diseñado para cumplir tus metas específicas de alimentación.",
    },
    {
      icon: Shield,
      title: "Consistencia garantizada",
      description: "Sistema probado que elimina la improvisación y los malos hábitos.",
    },
    {
      icon: Users,
      title: "Para toda la familia",
      description: "Menús adaptables que funcionan para diferentes gustos y necesidades.",
    },
    {
      icon: Check,
      title: "Fácil de seguir",
      description: "Instrucciones paso a paso, listas de compra y tiempos de preparación incluidos.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Características que 
            <span className="text-blue-600"> transforman</span> tu alimentación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BatchFit no es solo una app más. Es un sistema completo que convierte el caos alimentario en orden y simplicidad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}