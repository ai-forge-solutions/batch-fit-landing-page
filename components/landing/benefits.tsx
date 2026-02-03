"use client"

import { TrendingUp, Heart, Zap, DollarSign, Smile, Trophy, Clock, Shield } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Plan semanal de 60 minutos",
      benefit: "Cocinas una sola vez",
      meaning: "Significa que la alimentación deja de ocupar tus domingos y tu cabeza."
    },
    {
      icon: TrendingUp,
      title: "Nutrición diseñada para recomposición corporal",
      benefit: "Comes lo que necesitas para ganar músculo o perder grasa",
      meaning: "Significa que tu entrenamiento empieza a notarse en el espejo."
    },
    {
      icon: Shield,
      title: "Sistema cerrado: qué comer, cuánto y cuándo",
      benefit: "No decides nada entre semana",
      meaning: "Significa que no gastas fuerza de voluntad en algo que ya debería estar resuelto."
    },
    {
      icon: Zap,
      title: "Recetas simples, repetibles y sin complicaciones",
      benefit: "Cocinas rápido y sin pensar",
      meaning: "Significa que puedes sostenerlo incluso en semanas caóticas."
    },
    {
      icon: Heart,
      title: "Batch cooking pensado para llevar en tupper",
      benefit: "Comes bien en casa, en el trabajo o donde toque",
      meaning: "Significa que no improvisas ni rompes el plan cuando sales de la rutina."
    },
    {
      icon: Smile,
      title: "Flexibilidad real (sin extremos ni dietas rígidas)",
      benefit: "No pesas, no mides, no vives a dieta",
      meaning: "Significa que puedes hacerlo meses, no dos semanas."
    },
    {
      icon: DollarSign,
      title: "Menos platos, menos compra, menos decisiones",
      benefit: "Todo está optimizado",
      meaning: "Significa menos fricción diaria y más energía para entrenar y trabajar."
    },
    {
      icon: Trophy,
      title: "Un sistema que se adapta a ti, no al revés",
      benefit: "Ajustas preferencias y restricciones",
      meaning: "Significa que no tienes que forzarte a encajar en un plan genérico."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  {/* Header con icono y título en la misma línea */}
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300"
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
                    
                    <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  {/* Beneficio */}
                  <div className="mb-3">
                    <span className="text-base font-semibold" style={{color: '#4fe4b7'}}>
                      → {benefit.benefit}
                    </span>
                  </div>
                  
                  {/* Significado */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-medium">→ </span>{benefit.meaning}
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