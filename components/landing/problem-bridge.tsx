"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ProblemBridge() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const painPoints = [
    {
      time: "30–45 min",
      label: "decidiendo qué comer",
    },
    {
      time: "60–90 min",
      label: "comprando ingredientes",
    },
    {
      time: "2–4 h",
      label: "cocinando y limpiando",
    },
  ]

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-[#060606] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(79,228,183,0.04)_0%,transparent_60%)]" />

      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Comer bien no falla por disciplina
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/50 subtitle max-w-xl mx-auto">
            Falla porque organizar tu alimentación cada semana es otro trabajo más
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-sm sm:text-base text-white/30 text-center subtitle tracking-wide uppercase mb-6 sm:mb-8">
            Cada semana pierdes tiempo en
          </p>
          <div className="space-y-3 sm:space-y-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-between gap-4 border border-white/[0.06] rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-white/[0.02]"
              >
                <span className="text-[15px] sm:text-base text-white/70">
                  {point.label}
                </span>
                <span className="text-base sm:text-lg text-white font-title tracking-wide shrink-0">
                  {point.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 subtitle font-medium">
            Y cuando la semana se complica,
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 subtitle font-medium mt-1">
            la alimentación es lo primero que cae.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
