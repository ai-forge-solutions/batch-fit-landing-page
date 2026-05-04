"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const faqs = [
  {
    q: "¿Es otra app de dietas o de contar calorías?",
    a: "No. BatchFit no te da una dieta ni te pide que cuentes calorías. Es un sistema que organiza tu alimentación semanal: planifica los menús según tus objetivos, genera tu lista de la compra y te guía paso a paso para cocinar todo en una sesión. El resultado es que comer bien ocurre sin esfuerzo ni decisiones diarias.",
  },
  {
    q: "¿Cuánto tiempo tengo que dedicarle a la semana?",
    a: "Una sesión de 60 a 90 minutos el domingo (o el día que prefieras). En ese tiempo preparas entre 5 y 16 comidas para toda la semana. El resto de días simplemente calientas y comes. Sin pensar, sin improvisar, sin cocinar a diario.",
  },
  {
    q: "¿Y si no me gusta cocinar?",
    a: "Precisamente por eso existe BatchFit. No necesitas que te guste cocinar — necesitas un sistema que minimice el tiempo que pasas en la cocina. Las sesiones están optimizadas para que seas eficiente: instrucciones claras, tiempos paralelos y cero improvisación.",
  },
  {
    q: "¿Se adapta a mis macros y objetivos?",
    a: "Sí. Configuras tus calorías, macros y objetivos (ganar músculo, perder grasa, mantenimiento) y BatchFit genera menús personalizados. Puedes ajustar ingredientes, cantidades y recetas en cualquier momento.",
  },
  {
    q: "¿Qué incluye el acceso fundador?",
    a: "Acceso de por vida a la app con todas las funciones actuales y futuras. Menús semanales personalizados, lista de compra inteligente, sesiones de batch cooking guiadas, editor de macros y seguimiento de progreso. Sin suscripciones mensuales — un solo pago.",
  },
  {
    q: "¿Qué pasa si no me convence?",
    a: "Tienes 30 días para probarlo. Si no te funciona, te devolvemos el dinero sin preguntas. Creemos en el producto y en que los resultados hablan por sí solos.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-36 bg-background">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border/40 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-foreground/[0.02] transition-colors duration-200"
              >
                <span className="text-[15px] sm:text-base font-medium text-foreground pr-2 subtitle">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-foreground/40 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-5 pb-4 sm:px-6 sm:pb-5">
                  <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
