import { CheckCircle } from "lucide-react"
import { FluctuationChart } from "@/components/ui/fluctuation-chart"
import Image from "next/image"

const sections = [
  {
    icon: "image",
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
        <div className="grid gap-6 md:gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Icono */}
                  <div className="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center p-1">
                    {section.icon === "chart" ? (
                      <FluctuationChart className="w-full h-full" />
                    ) : section.icon === "image" ? (
                      <Image 
                        src="/problem-img.png" 
                        alt="Problem" 
                        width={120} 
                        height={120}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <Icon className="w-8 h-8 text-gray-600" />
                    )}
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-1 text-center">
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