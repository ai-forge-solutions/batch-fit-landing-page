"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, TrendingUp, PiggyBank, ShieldCheck } from "lucide-react"

export function Benefits() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const benefits = [
    {
      metric: "28h",
      label: "Recupera hasta 28 horas",
      description: "Para entrenar, trabajar, descansar... tú decides",
      icon: Clock,
    },
    {
      metric: "+Músculo",
      metricSuffix: "−Grasa",
      label: "Más músculo, menos grasa",
      description: "Tu entrenamiento empieza a notarse en el espejo",
      icon: TrendingUp,
    },
    {
      metric: "50€",
      label: "Ahorra hasta 50€",
      description: "Optimiza compra, cantidades e ingredientes para gastar menos cada semana",
      icon: PiggyBank,
    },
    {
      metric: "0",
      label: "Momentos de culpa",
      description: "Asegura tu semana el domingo, sin decisiones de última hora",
      icon: ShieldCheck,
    },
  ]

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-36 bg-[#060606] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(79,228,183,0.06)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_100%,_rgba(79,228,183,0.03)_0%,_transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
            Cómo cambia tu vida tras{" "}
            <span className="text-primary">30 días usando BatchFit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHero = index === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.1 }}
                className={`group relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-5 sm:p-7 md:p-9 overflow-hidden transition-all duration-500 hover:border-primary/15 ${
                  isHero ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-px -right-px w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-bl from-primary/[0.05] to-transparent rounded-bl-[3rem] transition-opacity duration-700 opacity-40 group-hover:opacity-100" />

                <div className={`relative ${isHero ? "md:flex md:items-center md:gap-10" : ""}`}>
                  <div className={isHero ? "md:flex-shrink-0" : ""}>
                    <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/[0.08]">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-white/25 tracking-[0.2em] uppercase subtitle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className={`font-title tracking-tight text-white leading-none ${
                        isHero
                          ? "text-[3.5rem] sm:text-6xl md:text-7xl"
                          : "text-[2.75rem] sm:text-5xl"
                      }`}
                    >
                      {benefit.metric}
                      {benefit.metricSuffix && (
                        <span className="text-primary/50 ml-1.5 sm:ml-2 text-[0.6em]">
                          {benefit.metricSuffix}
                        </span>
                      )}
                    </p>
                  </div>

                  <div
                    className={`mt-4 sm:mt-5 ${
                      isHero
                        ? "md:mt-0 md:border-l md:border-white/[0.06] md:pl-10"
                        : ""
                    }`}
                  >
                    <h3 className="text-[15px] sm:text-base md:text-lg text-white/80 mb-1.5 subtitle tracking-wide font-medium">
                      {benefit.label}
                    </h3>
                    <p className="text-[13px] sm:text-sm text-white/30 leading-relaxed max-w-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
