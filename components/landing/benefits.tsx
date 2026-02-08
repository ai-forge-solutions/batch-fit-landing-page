"use client"

import { Settings2, Clock, RefreshCw, ShoppingCart, Activity } from 'lucide-react'

// Agregar fuente Inter
const interFont = { fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }

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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black" style={interFont}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beneficios que 
            <span style={{color: '#4fe4b7'}}> transforman</span> tu vida
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            es algo parecido a poner <strong className="text-white">tu nutrición en piloto automático</strong>: tú marcas el destino y el sistema se encarga del camino
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Primera fila - 3 elementos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.slice(0, 3).map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-600 hover:border-green-400 max-w-sm mx-auto"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icono */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-green-400"
                      style={{
                        backgroundColor: '#3BE6B2' + '15', // 15% opacity
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-colors group-hover:text-white" 
                        style={{color: '#3BE6B2'}}
                      />
                    </div>
                    
                    {/* Característica (título) */}
                    <h3 className="text-sm italic leading-relaxed px-2 text-gray-300">
                      {benefit.title}
                    </h3>
                    
                    {/* Beneficio (hook principal) */}
                    <div className="mb-2">
                      <span className="text-lg font-semibold" style={{color: '#3BE6B2'}}>
                        {benefit.benefit}
                      </span>
                    </div>
                    
                    {/* Significado (valor emocional) */}
                    <p className="text-base leading-relaxed text-gray-200">
                      {benefit.meaning.split('👉🏼')[0]}
                      <strong className="text-white">{benefit.meaning.split('👉🏼')[1]}</strong>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Segunda fila - 2 elementos centrados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {benefits.slice(3, 5).map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index + 3}
                  className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-600 hover:border-green-400 max-w-sm mx-auto"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icono */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-green-400"
                      style={{
                        backgroundColor: '#3BE6B2' + '15', // 15% opacity
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-colors group-hover:text-white" 
                        style={{color: '#3BE6B2'}}
                      />
                    </div>
                    
                    {/* Característica (título) */}
                    <h3 className="text-sm italic leading-relaxed px-2 text-gray-300">
                      {benefit.title}
                    </h3>
                    
                    {/* Beneficio (hook principal) */}
                    <div className="mb-2">
                      <span className="text-lg font-semibold" style={{color: '#3BE6B2'}}>
                        {benefit.benefit}
                      </span>
                    </div>
                    
                    {/* Significado (valor emocional) */}
                    <p className="text-base leading-relaxed text-gray-200">
                      {benefit.meaning.split('👉🏼')[0]}
                      <strong className="text-white">{benefit.meaning.split('👉🏼')[1]}</strong>
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