"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    number: "1",
    title: "Personaliza tu plan",
    description: "BatchFit crea tu plan según tu objetivo y preferencias",
  },
  {
    number: "2",
    title: "Recibe instrucciones claras",
    description: "Te dice exactamente qué preparar y en qué orden",
  },
  {
    number: "3",
    title: "Cocina en bloque",
    description: "Cocinas una o dos veces por semana, todo de una vez",
  },
  {
    number: "4",
    title: "Vive sin pensar",
    description: "Comes toda la semana sin tomar decisiones",
  },
]

// Variants para barrido elegante como en before-after
const titleVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

const stepVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2 + (index * 0.15), // Barrido secuencial elegante
      ease: "easeOut"
    }
  })
}

export function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  return (
    <section ref={ref} className="bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-foreground text-center text-balance"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Cómo funciona en la vida real
        </motion.h2>

        <div className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 p-6 rounded-xl bg-secondary"
              variants={stepVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
