"use client"

import { Settings2, Clock, RefreshCw, ShoppingCart, Activity } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Settings2,
      title: "Menos platos, menos compra, menos decisiones",
      benefit: "Todo está optimizado",
      meaning: "👉🏼 Menos fricción diaria y más energía para entrenar y trabajar."
    },
    {
      icon: Clock,
      title: "Plan semanal de 60 minutos",
      benefit: "Cocinas una sola vez",
      meaning: "👉🏼 La alimentación deja de ocupar tus días y tu cabeza."
    },
    {
      icon: RefreshCw,
      title: "Flexibilidad real (sin extremos ni dietas rígidas)",
      benefit: "No pesas, no mides, no vives a dieta",
      meaning: "👉🏼 Puedes hacerlo meses, no dos semanas."
    },
    {
      icon: ShoppingCart,
      title: "Recetas simples, repetibles y sin complicaciones",
      benefit: "Cocinas rápido y sin pensar",
      meaning: "👉🏼 Puedes sostenerlo incluso en semanas caóticas"
    },
    {
      icon: Activity,
      title: "Nutrición diseñada para recomposición corporal",
      benefit: "Comes lo que necesitas para ganar músculo o perder grasa",
      meaning: "👉🏼 Tu entrenamiento empieza a notarse en el espejo"
    }
    // {
    //   icon: Shield,
    //   title: "Sistema cerrado: qué comer, cuánto y cuándo",
    //   benefit: "No decides nada entre semana",
    //   meaning: "No gastas fuerza de voluntad en algo que ya debería estar resuelto"
    // },
    // {
    //   icon: Heart,
    //   title: "Batch cooking pensado para llevar en tupper",
    //   benefit: "Comes bien en casa, en el trabajo o donde toque",
    //   meaning: "No improvisas ni rompes el plan cuando sales de la rutina"
    // },
    // {
    //   icon: Trophy,
    //   title: "Un sistema que se adapta a ti, no al revés",
    //   benefit: "Ajustas preferencias y restricciones",
    //   meaning: "No tienes que forzarte a encajar en un plan genérico."
    // },
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
            USAR ES ALGO PARECIDO A...Más que cambiar tu alimentación, BatchFit mejora tu calidad de vida completa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Primera fila - 3 elementos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {benefits.slice(0, 3).map((benefit, index) => {
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
                        {benefit.benefit}
                      </span>
                    </div>
                    
                    {/* Significado */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.meaning}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Segunda fila - 2 elementos centrados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {benefits.slice(3, 5).map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index + 3}
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
                        {benefit.benefit}
                      </span>
                    </div>
                    
                    {/* Significado */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.meaning}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}