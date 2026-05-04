"use client"

import { AppStoreButtons } from "./app-store-buttons"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ShieldCheck, Clock, Infinity } from "lucide-react"

export function FinalCTA() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const guarantees = [
    { icon: ShieldCheck, text: "30 días de garantía" },
    { icon: Infinity, text: "Acceso de por vida" },
    { icon: Clock, text: "Configúralo en 5 minutos" },
  ]

  return (
    <section ref={ref} data-section="final-cta" className="bg-background py-20 sm:py-28 md:py-40 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-7 sm:mb-10"
        >
          Cocina una vez
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-7 sm:mb-10"
        >
          <Image
            src="/hero-page-v2026-03-10.webp"
            alt="BatchFit app"
            width={300}
            height={200}
            className="w-full max-w-xs h-auto rounded-xl mx-auto"
            style={{ backgroundColor: 'unset' }}
            priority
          />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-4 sm:mb-6"
        >
          Vive toda la semana
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground subtitle max-w-lg mx-auto mb-10 sm:mb-14"
        >
          Deja de improvisar cada comida. Empieza con un sistema que hace que comer bien sea automático.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <AppStoreButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {guarantees.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="w-4 h-4 text-primary/70" />
              <span className="text-sm subtitle">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
