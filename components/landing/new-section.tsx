"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function NewSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const scrollToStep = (stepNumber: number) => {
    const stepElement = document.querySelector(`[data-step="${stepNumber}"]`)
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#problem-empathy')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
    }
  }

  const steps = [
    {
      number: 1,
      image: "/batchfit-mockup-weekmeals.webp",
      alt: "BatchFit plan semanal mockup",
      title: "BatchFit crea tu plan semanal",
      description: <>Menús personalizados según tus <span className="font-semibold text-foreground">macros y objetivos</span>, gustos y preferencias</>,
      onClick: () => scrollToStep(2),
    },
    {
      number: 2,
      image: "/batchfi-mockup-shoppinglist.webp",
      alt: "Lista de compra optimizada",
      title: "Genera tu lista de la compra",
      description: <>Compra todo lo que necesitas para la semana <span className="font-semibold text-foreground">sin pensar</span> qué falta</>,
      onClick: () => scrollToStep(3),
    },
    {
      number: 3,
      image: "/batchfi-mockup-batchstep.webp",
      alt: "Guía paso a paso sesión batchfit",
      title: "Te guía paso a paso en tu batchcooking",
      description: <>Sigue instrucciones optimizadas para cocinar toda tu semana de forma <span className="font-semibold text-foreground">eficiente</span></>,
      onClick: scrollToNextSection,
    },
  ]

  return (
    <div ref={ref} className="py-16 sm:py-24 md:py-32 px-5 sm:px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight leading-tight">
            Así funciona <span className="text-primary">BatchFit</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground subtitle max-w-lg mx-auto">
            Tres pasos. Una sesión a la semana. Toda tu alimentación resuelta.
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-20 md:mt-28">
          <div className="space-y-16 sm:space-y-24 md:space-y-32 lg:space-y-40">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="text-center relative"
                data-step={step.number}
              >
                <div className="max-w-[260px] sm:max-w-xs mx-auto">
                  <div className="relative" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))' }}>
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                      style={{ backgroundColor: 'unset' }}
                      priority
                    />
                    <div
                      className="absolute bottom-3 sm:bottom-4 -left-2 -right-2 sm:-left-4 sm:-right-4 bg-white/95 backdrop-blur-sm rounded-xl py-5 px-4 sm:py-8 sm:px-6 pb-4 sm:pb-6 border border-border/30 shadow-sm cursor-pointer hover:bg-white transition-colors duration-300"
                      onClick={step.onClick}
                    >
                      <div className="text-center mb-2 sm:mb-3 relative">
                        <span className="absolute top-0 left-0 text-[10px] sm:text-xs font-medium text-primary tracking-widest subtitle">
                          {String(step.number).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="text-xl sm:text-2xl text-foreground mb-1.5 sm:mb-2">{step.title}</h4>
                          <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
