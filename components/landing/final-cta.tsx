"use client"

import { AppStoreButtons } from "./app-store-buttons"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FinalCTA() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

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
            alt="BatchFit hero"
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-10 sm:mb-14"
        >
          Vive toda la semana
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <AppStoreButtons />
        </motion.div>
      </div>
    </section>
  )
}
