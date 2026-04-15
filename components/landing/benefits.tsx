"use client"

// Agregar fuente Inter
const interFont = { fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }

export function Benefits() {
  const benefits = [
    {
      emoji: "⏳",
      benefit: "Recupera hasta 28 horas",
      meaning: "Para entrenar, trabajar, descansar... tú decides"
    },
    {
      emoji: "💪",
      benefit: "Más músculo | Menos grasa",
      meaning: "Tu entrenamiento empieza a notarse en el espejo"
    },
    {
      emoji: "💶",
      benefit: "Ahorra hasta 50€",
      meaning: "Optimiza compra, cantidades e ingredientes para gastar menos cada semana"
    },
    {
      emoji: "📈",
      benefit: "0 momentos de culpa",
      meaning: "Asegura tu semana el domingo, sin decisiones de última hora"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black" style={interFont}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cómo cambia tu vida tras <span style={{color: '#4fe4b7'}}>30 días usando BatchFit</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Primera fila - 3 elementos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.slice(0, 3).map((benefit, index) => {
              return (
                <div 
                  key={index}
                  className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-600 hover:border-green-400 max-w-sm mx-auto"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Emoji */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 text-4xl"
                      style={{
                        backgroundColor: '#3BE6B2' + '15', // 15% opacity
                      }}
                    >
                      {benefit.emoji}
                    </div>
                    
                    {/* Beneficio (hook principal) */}
                    <div className="mb-2">
                      <span className="text-lg font-semibold" style={{color: '#3BE6B2'}}>
                        {benefit.benefit}
                      </span>
                    </div>
                    
                    {/* Significado (valor emocional) */}
                    <p className="text-base leading-relaxed text-gray-200">
                      {benefit.meaning}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Segunda fila - 2 elementos centrados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {benefits.slice(3, 5).map((benefit, index) => {
              return (
                <div 
                  key={index + 3}
                  className="group p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-600 hover:border-green-400 max-w-sm mx-auto"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Emoji */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 text-4xl"
                      style={{
                        backgroundColor: '#3BE6B2' + '15', // 15% opacity
                      }}
                    >
                      {benefit.emoji}
                    </div>
                    
                    {/* Beneficio (hook principal) */}
                    <div className="mb-2">
                      <span className="text-lg font-semibold" style={{color: '#3BE6B2'}}>
                        {benefit.benefit}
                      </span>
                    </div>
                    
                    {/* Significado (valor emocional) */}
                    <p className="text-base leading-relaxed text-gray-200">
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