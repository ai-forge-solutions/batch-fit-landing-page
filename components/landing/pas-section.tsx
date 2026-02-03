import { FluctuationChart } from "@/components/ui/fluctuation-chart"
import Image from "next/image"
import { Clock, CheckCircle } from "lucide-react"

const sections = [
  {
    icon: Clock,
    image: "/problem-img.png",
    title: "Problema",
    content: [
      "Entrenas, te cuidas, trabajas.",
      "Sabes perfectamente lo que hay que hacer."
    ]
  },
  {
    icon: "chart",
    title: "Agitación",
    content: [
      "Pero semana tras semana pasa lo mismo:",
      "la alimentación empieza a robarte foco, tiempo y energía.",
      "Decidir qué comer, organizarte, cocinar…",
      "y cuando todo se acumula, la constancia se resiente y el progreso se estanca."
    ]
  },
  {
    icon: CheckCircle,
    title: "Solución",
    content: [
      "No es falta de disciplina.",
      "Es falta de un sistema que encaje con tu vida."
    ]
  }
]

export function PASSection() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-12 md:gap-16">
          {sections.map((section, index) => {
            const Icon = section.icon
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                {/* Imagen */}
                <div className="flex-shrink-0 w-64 h-64 bg-transparent rounded-2xl flex items-center justify-center p-2">
                  {section.icon === "chart" ? (
                    <FluctuationChart className="w-full h-full" />
                  ) : section.image ? (
                    <Image 
                      src={section.image}
                      alt={section.title}
                      width={240} 
                      height={240}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <Icon className="w-24 h-24 text-gray-600" />
                  )}
                </div>
                
                {/* Caja de texto */}
                <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="text-center">
                    <div className="space-y-2">
                      {section.content.map((text, textIndex) => (
                        <p 
                          key={textIndex} 
                          className="text-gray-600 leading-relaxed"
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}