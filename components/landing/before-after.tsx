import { X, Check } from "lucide-react"
import Image from "next/image"

const beforeItems = [
  { text: "21 decisiones irrelevantes que agotan tu energía mental cada día", color: "#000000", indent: "ml-1" },
  { text: "Fatiga de decisión constante: Llegas al trabajo con el cerebro ya cansado", color: "#222222", indent: "ml-3" },
  { text: "Estrés en la cocina: Tiempo robado a tu descanso o a tu familia", color: "#000000", indent: "ml-0" },
  { text: "Fracaso en tus objetivos fit por falta de organización", color: "#222222", indent: "ml-2" }
]

const afterItems = [
  "Cero decisiones: Tu alimentación entra en piloto automático para que te centres en tu éxito",
  "Foco total: recuperas 60 minutos cada día para tus prioridades más importantes",
  "Ejecución mecánica: Una sola sesión de 60 min. y te olvidas de cocinar el resto de la semana",
  "Constancia garantizada: Ahora el espejo refleja tu esfuerzo en el gimnasio."
]

export function BeforeAfter() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-background rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-3 right-5">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center transform rotate-2">
                <X className="w-5 h-5 text-red-500 transform -rotate-1" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-6">Sin sistema</h3>
            
            {/* Foto de persona con problemas - girada */}
            <div className="mb-6 flex justify-center">
              <Image 
                src="/cons-person.png" 
                alt="Persona con problemas de organización"
                width={200} 
                height={200}
                className="rounded-lg transform -rotate-3"
              />
            </div>
            
            {/* Lista de inconvenientes con caos */}
            <div className="space-y-3">
              {beforeItems.map((item, index) => (
                <div key={index} className={`flex items-start gap-3 ${item.indent}`}>
                  <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                    <X className={`w-3 h-3 text-red-500 transform ${
                      index === 0 ? 'rotate-12' :
                      index === 1 ? '-rotate-6' :
                      index === 2 ? 'rotate-3' :
                      '-rotate-12'
                    }`} />
                  </div>
                  <p className="text-sm font-medium" style={{ color: item.color }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-background rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-6">Con BatchFit</h3>
            
            {/* Foto de persona exitosa */}
            <div className="mb-6 flex justify-center">
              <Image 
                src="/pros-person.png" 
                alt="Persona organizada y exitosa"
                width={200} 
                height={200}
                className="rounded-lg"
              />
            </div>
            
            {/* Lista de beneficios */}
            <div className="space-y-3">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xl md:text-2xl text-foreground font-medium text-center">
          Menos decisiones. Más control.
        </p>
      </div>
    </section>
  )
}
