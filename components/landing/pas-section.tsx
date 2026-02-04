import { FluctuationChart } from "@/components/ui/fluctuation-chart"
import Image from "next/image"
import { Clock, CheckCircle } from "lucide-react"

const sections = [
  {
    icon: Clock,
    image: "/problem-img.png",
    title: "Problema",
    content: [
"Sabes exactamente qué macros necesitas para ganar músculo, pero...",
"🚫 Te bloqueas ante la nevera sin saber qué menú toca hoy", 
"📱 Acumulas recetas en Instagram que nunca cocinas por falta de un método real", 
"💔 Rompes tu dieta comiendo fuera porque no te dio tiempo a cocinar"
    ]
  },
  {
    icon: "chart",
    title: "Agitación",
    content: [
      "Esa fatiga de decisión no se queda en la cocina.",
      <>❓ Cada minuto que pasas pensando  <span className="font-bold text-lg text-gray-800">'qué toca hoy'</span> es energía que le robas a tu próximo entrenamiento o a la concentración que exige tu profesión.</>, 
      <>Estás pagando un precio de indecisión <span className="font-bold text-lg text-gray-800">altísimo</span>:</>, 
      <>tu foco se diluye en <span className="font-bold text-gray-800">21 decisiones irrelevantes</span> a la semana 📉</>,
    ]
  },
  {
    icon: CheckCircle,
    image: "/quiero-un-plan-nutricional-que-de-verdad-funcione.png",
    title: "Solución",
    content: [
      <>Por suerte, existe un sistema para poner tu nutrición en piloto automático.</>,
      <>Imagina liberar tu jornada y tu mente de la comida para siempre y dedicar ese <span className="font-bold text-gray-800">100% 💯 de energía</span> a tus metas fit y profesionales.</>,
      "No es falta de disciplina.",
      "Es falta de un sistema que encaje con tu vida."
    ]
  }
]

export function PASSection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-100 via-orange-100 via-green-50 to-white py-20 px-6">
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
                <div className="shrink-0 w-72 h-72 md:w-80 md:h-80 bg-transparent rounded-2xl flex items-center justify-center p-2">
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
                          {typeof text === 'string' ? text : text}
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