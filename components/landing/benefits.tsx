"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Benefits() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const benefits = [
    {
      label: "01",
      benefit: "Recupera hasta 28 horas",
      meaning: "Para entrenar, trabajar, descansar... tú decides"
    },
    {
      label: "02",
      benefit: "Más músculo, menos grasa",
      meaning: "Tu entrenamiento empieza a notarse en el espejo"
    },
    {
      label: "03",
      benefit: "Ahorra hasta 50€",
      meaning: "Optimiza compra, cantidades e ingredientes para gastar menos cada semana"
    },
    {
      label: "04",
      benefit: "0 momentos de culpa",
      meaning: "Asegura tu semana el domingo, sin decisiones de última hora"
    }
  ]

  return (
    <section ref={ref} className="py-28 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Cómo cambia tu vida tras{" "}
            <span className="text-primary">30 días usando BatchFit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-10 md:p-12 hover:bg-[#0f0f0f] transition-colors duration-500"
            >
              <span className="inline-block text-xs font-medium text-primary/60 tracking-widest uppercase subtitle mb-5">
                {benefit.label}
              </span>
              <h3 className="text-xl md:text-2xl text-white mb-3 tracking-wide">
                {benefit.benefit}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {benefit.meaning}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
