"use client"

import { FluctuationChart } from "@/components/ui/fluctuation-chart"
import Image from "next/image"
import { Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
      "Esa fatiga de decisión no se queda en la cocina",
      <>❓ Cada minuto que pasas pensando  <span className="font-bold text-lg text-gray-800">'¿qué toca hoy?'</span> es energía que le robas a tu próximo entrenamiento o a la concentración que exige tu profesión</>, 
      <>El coste cognitivo es <span className="font-bold text-lg text-red-600">ALTÍSIMO</span></>, 
      <>tu foco se diluye en <span className="font-bold text-gray-800">21 decisiones irrelevantes</span> a la semana 📉</>,
    ]
  },
  {
    icon: CheckCircle,
    image: "/quiero-un-plan-nutricional-que-de-verdad-funcione.png",
    title: "Solución",
    content: [
      <>🍀 Por suerte, existe un sistema para poner tu nutrición en piloto automático</>,
      <>Imagina liberar tu jornada y tu mente de la comida para siempre y dedicar ese <span className="font-bold text-gray-800"> ⚡ 💯% de energía</span> a tus metas fit y profesionales</>,
      <>No es falta de <span className="font-bold text-lg text-gray-800">disciplina 💪</span></>,
      <>Es falta de un <span className="font-bold text-lg text-gray-800">sistema</span> que encaje con tu vida 🎯</>
    ]
  }
]

// Variants para fricción cognitiva - entrada desalineada
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

// Texto entra DESPUÉS de imagen (genera fricción)
const textCardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3, 
      delay: 0.15, // 150ms delay - sensación "algo no encaja"
      ease: "easeOut"
    }
  }
}

// Bullets aparecen secuencialmente (dolor acumulativo)
const bulletVariants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: { 
      duration: 0.2,
      delay: index * 0.1, // 100ms entre bullets
      ease: "linear" // Sin easing fancy
    }
  })
}

// SOLO para "21 decisiones irrelevantes" - golpe cognitivo
const impactTextVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.2,
      delay: 0.15, // +150ms efecto "Ah. Esto va en serio"
      ease: "easeOut"
    }
  }
}

// Chart se escala una sola vez desde abajo
const chartVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Componente para cada card PAS con trigger individual
function PASCard({ section, index }: { section: any, index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.4, // 40% visible
    triggerOnce: true, // Solo se anima una vez
  })
  
  const Icon = section.icon
  const isEven = index % 2 === 0
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
    >
      {/* Imagen - Entra ANTES que el texto */}
      <motion.div 
        className="shrink-0 w-72 h-72 md:w-80 md:h-80 bg-transparent rounded-2xl flex items-center justify-center p-2"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {section.icon === "chart" ? (
          <motion.div
            variants={chartVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ originY: 1 }} // Escala desde abajo
            className="w-full h-full"
          >
            <FluctuationChart className="w-full h-full" />
          </motion.div>
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
      </motion.div>
      
      {/* Caja de texto - Entra CON DELAY (fricción) */}
      <motion.div 
        className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
        variants={textCardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="text-center">
          <div className="space-y-2">
            {section.content.map((text: any, textIndex: number) => {
              // SOLO "21 decisiones irrelevantes" tiene micro-animación impactante
              const isImpactText = (typeof text !== 'string' && 
                text.props?.children?.toString().includes('21 decisiones irrelevantes'))
              
              return (
                <motion.p 
                  key={textIndex} 
                  className="text-gray-600 leading-relaxed"
                  variants={isImpactText ? impactTextVariants : bulletVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={textIndex}
                >
                  {typeof text === 'string' ? text : text}
                </motion.p>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function PASSection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-200 to-orange-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-12 md:gap-16">
          {sections.map((section, index) => (
            <PASCard key={index} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}