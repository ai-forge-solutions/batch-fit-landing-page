"use client"

import { TrendingUp, Heart, Zap, DollarSign, Smile, Trophy } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Mejor salud",
      description: "Nutrición consistente y equilibrada que mejora tu energía y bienestar general.",
    },
    {
      icon: Zap,
      title: "Más energía",
      description: "Comidas planificadas que mantienen tus niveles de energía estables todo el día.",
    },
    {
      icon: TrendingUp,
      title: "Resultados visibles",
      description: "Progreso constante hacia tus objetivos físicos sin sacrificar sabor.",
    },
    {
      icon: DollarSign,
      title: "Ahorro económico",
      description: "Reduce desperdicios y gastos innecesarios con compras planificadas.",
    },
    {
      icon: Smile,
      title: "Menos estrés",
      description: "Elimina la ansiedad diaria de decidir qué comer y cómo prepararlo.",
    },
    {
      icon: Trophy,
      title: "Hábitos duraderos",
      description: "Crea rutinas alimentarias sostenibles que se mantienen a largo plazo.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Beneficios que 
            <span style={{color: '#4fe4b7'}}> transforman</span> tu vida
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que cambiar tu alimentación, BatchFit mejora tu calidad de vida completa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{'--hover-border': '#4fe4b7'}}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4fe4b7'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(243 244 246)'}
              >
                <div className="flex flex-col items-start">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                    style={{
                      backgroundColor: '#4fe4b7' + '20', // 20% opacity
                      '--hover-bg': '#4fe4b7'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4fe4b7'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#4fe4b7' + '20'
                    }}
                  >
                    <Icon 
                      className="w-6 h-6 group-hover:text-white transition-colors" 
                      style={{color: '#4fe4b7'}}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#4fe4b7'}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
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