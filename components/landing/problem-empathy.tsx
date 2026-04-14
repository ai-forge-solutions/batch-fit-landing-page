"use client"

export function ProblemEmpathy() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Primera pantalla - Headline y Subtitle */}
        <div className="text-center min-h-screen flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Comer bien no suele fallar por falta de disciplina
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed">
            Suele fallar porque organizar toda tu alimentación cada semana acaba siendo otro trabajo más
          </p>
        </div>
        
        {/* Segunda pantalla - Lista de tiempo */}
        <div className="min-h-screen flex flex-col justify-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8 text-center">
              Cada semana, la mayoría dedica tiempo a:
            </h3>
          
          <div className="grid gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🧠</span>
                  <span className="text-lg sm:text-xl text-white">Pensar qué cocinar</span>
                </div>
                <span className="text-lg sm:text-xl text-white/80 font-medium">30–45 min</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🔍</span>
                  <span className="text-lg sm:text-xl text-white">Buscar recetas / ideas</span>
                </div>
                <span className="text-lg sm:text-xl text-white/80 font-medium">20–30 min</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🛒</span>
                  <span className="text-lg sm:text-xl text-white">Hacer la compra</span>
                </div>
                <span className="text-lg sm:text-xl text-white/80 font-medium">60–90 min</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🔪</span>
                  <span className="text-lg sm:text-xl text-white">Cocinar / preparar</span>
                </div>
                <span className="text-lg sm:text-xl text-white/80 font-medium">2–4 h</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">🧴🧼</span>
                  <span className="text-lg sm:text-xl text-white">Limpiar lo que ensucias</span>
                </div>
                <span className="text-lg sm:text-xl text-white/80 font-medium">Tiempo extra</span>
              </div>
            </div>
          </div>          </div>        </div>
      </div>
    </section>
  )
}