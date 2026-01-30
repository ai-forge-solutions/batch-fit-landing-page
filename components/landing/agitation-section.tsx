"use client"

import { TrendingDown, Clock, AlertTriangle, DollarSign } from "lucide-react"

const consequences = [
  {
    icon: TrendingDown,
    title: "Tu salud se resiente",
    description: "Cada comida rápida, cada pedido de emergencia, cada \"ya veré mañana\" se acumula. Tu energía baja, tu peso sube, tu bienestar se deteriora.",
    highlight: "No es solo una mala comida. Es un patrón destructivo."
  },
  {
    icon: Clock,
    title: "Pierdes horas cada semana",
    description: "Entre pensar qué comer, ir al super sin plan, cocinar sin sistema... Gastas 5-8 horas semanales en algo que podrías resolver en 2.",
    highlight: "Tiempo que nunca recuperas."
  },
  {
    icon: AlertTriangle,
    title: "El estrés se multiplica",
    description: "Cada día a las 2pm: \"¿qué voy a cenar?\". Cada domingo: \"¿qué compro?\". La ansiedad alimentaria consume tu energía mental para cosas importantes.",
    highlight: "Comer bien no debería ser una fuente de estrés."
  },
  {
    icon: DollarSign,
    title: "Tu dinero se esfuma",
    description: "Sin plan, compras de más y desperdicias. Con prisa, pides comida cara. Los caprichos del momento destrozan tu presupuesto.",
    highlight: "Gastás el doble para comer la mitad de bien."
  }
]

export function AgitationSection() {
  return (
    <section className="bg-neutral-100 py-20 px-6 border-y border-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-title text-dark text-balance mb-4">
            Y mientras tanto, cada día que pasa...
          </h2>
          <p className="text-xl subtitle text-dark/80 max-w-2xl mx-auto text-balance">
            El caos alimentario no es solo incómodo. Es costoso, agotador y perjudicial.
          </p>
        </div>

        {/* Consequences */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {consequences.map((consequence, index) => {
            const Icon = consequence.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-6 h-6 text-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-subtitle font-semibold text-dark mb-2">
                      {consequence.title}
                    </h3>
                    <p className="text-dark/70 mb-3 leading-relaxed">
                      {consequence.description}
                    </p>
                    <p className="text-dark font-medium text-sm font-subtitle">
                      {consequence.highlight}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Impact */}
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-title mb-4">
            ¿Cuánto tiempo más vas a seguir así?
          </h3>
          <p className="text-white/80 text-lg mb-2 subtitle">
            Cada semana que pasa sin un sistema es una semana perdida.
          </p>
          <p className="text-white font-semibold subtitle">
            La alimentación caótica no mejora sola. Solo empeora.
          </p>
        </div>
      </div>
    </section>
  )
}