import { X, Check } from "lucide-react"
import Image from "next/image"

const beforeItems = [
  { text: "21 decisiones irrelevantes que agotan tu energía mental cada día", style: { color: "#000000 !important" }, indent: "ml-1" },
  { text: "Fatiga de decisión constante: Llegas al trabajo con el cerebro ya cansado", style: { color: "#FF5722 !important" }, indent: "ml-3" },
  { text: "Estrés en la cocina: Tiempo robado a tu descanso o a tu familia", style: { color: "#000000 !important" }, indent: "ml-0" },
  { text: "Fracaso en tus objetivos fit por falta de organización", style: { color: "#D32F2F !important" }, indent: "ml-2" }
]

const afterItems = [
  "Cero decisiones: Tu alimentación entra en piloto automático para que te centres en tu éxito",
  "Foco total: recuperas 60 minutos cada día para tus prioridades más importantes",
  "Ejecución mecánica: Una sola sesión de 60 min. y te olvidas de cocinar el resto de la semana",
  "Constancia garantizada: Ahora el espejo refleja tu esfuerzo en el gimnasio."
]

export function BeforeAfter() {
  return (
    <section className="bg-gradient-to-b md:bg-gradient-to-r from-secondary to-orange-100 py-20 px-6">
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
              <div className="flex items-start gap-3 ml-1">
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform rotate-12" />
                </div>
                <p className="text-sm font-medium transform rotate-2" style={{color: '#888888', fontWeight: 600}}>21 decisiones irrelevantes que agotan tu energía mental cada día</p>
              </div>
              
              <div className="flex items-start gap-3 ml-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform -rotate-6" />
                </div>
                <p className="text-sm font-medium transform -rotate-1" style={{color: '#666666', fontWeight: 600}}>Fatiga de decisión constante: Llegas al trabajo con el cerebro ya cansado</p>
              </div>
              
              <div className="flex items-start gap-3 ml-0">
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform rotate-3" />
                </div>
                <p className="text-sm font-medium transform rotate-3" style={{color: '#777777', fontWeight: 600}}>Estrés en la cocina: Tiempo robado a tu descanso o a tu familia</p>
              </div>
              
              <div className="flex items-start gap-3 ml-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 transform rotate-1">
                  <X className="w-3 h-3 text-red-500 transform -rotate-12" />
                </div>
                <p className="text-sm font-medium transform -rotate-2" style={{color: '#999999', fontWeight: 600}}>Fracaso en tus objetivos fit por falta de organización</p>
              </div>
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
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground text-sm font-bold" style={{color: '#1a1a1a', fontWeight: 700}}>Cero decisiones: Tu alimentación entra en piloto automático para que te centres en tu éxito</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground text-sm font-bold" style={{color: '#1a1a1a', fontWeight: 700}}>Foco total: recuperas 60 minutos cada día para tus prioridades más importantes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground text-sm font-bold" style={{color: '#1a1a1a', fontWeight: 700}}>Ejecución mecánica: Una sola sesión de 60 min. y te olvidas de cocinar el resto de la semana</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-foreground text-sm font-bold" style={{color: '#1a1a1a', fontWeight: 700}}>Constancia garantizada: Ahora el espejo refleja tu esfuerzo en el gimnasio.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl md:text-2xl text-foreground" style={{fontFamily: "'Bebas Neue', sans-serif"}}>
            menos decisiones
            <br />
            más control
          </p>
        </div>
      </div>
    </section>
  )
}
