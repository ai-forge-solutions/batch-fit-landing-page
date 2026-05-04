"use client"

import Image from "next/image"
import { BatteryLow } from "lucide-react"
import { AppStoreButtons } from "./app-store-buttons"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function WhatIsBatchFit() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const rows = [
    { label: "Te ayuda con tus macros", other: true, batchfit: true },
    { label: "Se adapta a tu objetivo", other: true, batchfit: true },
    { label: "Reduce tu tiempo en la cocina", other: false, batchfit: true },
    { label: "Elimina el \"¿qué como hoy?\"", other: false, batchfit: true },
    { label: "Sostenible a largo plazo", other: false, batchfit: true },
    { label: "Encaja con agenda ocupada", other: "partial", batchfit: true },
  ]

  const renderIndicator = (value: boolean | string, isBatchfit: boolean) => {
    if (value === true) {
      return (
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
          isBatchfit
            ? 'bg-primary/20 text-primary'
            : 'bg-foreground/5 text-foreground/40'
        }`}>
          ✓
        </span>
      )
    }
    if (value === "partial") {
      return (
        <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-500/70 flex items-center justify-center text-sm font-medium">
          △
        </span>
      )
    }
    return (
      <span className="w-7 h-7 rounded-full bg-foreground/[0.03] text-foreground/20 flex items-center justify-center text-sm">
        ✗
      </span>
    )
  }

  return (
    <section ref={ref} data-section="what-is-batchfit" className="bg-background py-16 sm:py-24 md:py-36 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-title text-foreground tracking-tight leading-tight">
            Por qué elegir BatchFit
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto subtitle">
            Otras soluciones te ayudan a comer mejor.
            BatchFit hace que hacerlo sea realmente fácil.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="border border-border/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1fr_4rem_4rem] sm:grid-cols-[1fr_6rem_6rem] md:grid-cols-3 border-b border-border/50">
              <div className="p-3 sm:p-4 md:p-5" />
              <div className="p-3 sm:p-4 md:p-5 text-center">
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground tracking-wide uppercase subtitle">
                  Otras
                </span>
              </div>
              <div className="p-3 sm:p-4 md:p-5 text-center bg-primary/[0.04]">
                <span className="text-[10px] sm:text-xs font-semibold text-primary tracking-wide uppercase subtitle">
                  BatchFit
                </span>
              </div>
            </div>

            <div className="divide-y divide-border/30">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_4rem_4rem] sm:grid-cols-[1fr_6rem_6rem] md:grid-cols-3 hover:bg-foreground/[0.01] transition-colors duration-300">
                  <div className="p-3 sm:p-4 md:p-5 text-[13px] sm:text-sm text-foreground/80 flex items-center leading-snug">
                    {row.label}
                  </div>
                  <div className="p-3 sm:p-4 md:p-5 flex items-center justify-center">
                    {renderIndicator(row.other, false)}
                  </div>
                  <div className="p-3 sm:p-4 md:p-5 flex items-center justify-center bg-primary/[0.02]">
                    {renderIndicator(row.batchfit, true)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="space-y-2 sm:space-y-3 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium subtitle">
              BatchFit funciona incluso
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium subtitle">
              cuando baja tu motivación
            </p>
            <div className="flex justify-center py-1.5 sm:py-2">
              <BatteryLow className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-400/70" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium subtitle pt-5 sm:pt-8">
              pero tus metas siguen altas
            </p>
          </div>
        </motion.div>

        <div className="flex items-center justify-center relative">
          <Image
            src="/laurel_left.webp"
            alt=""
            width={48}
            height={48}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 md:w-14 pointer-events-none opacity-60"
            style={{ height: 'auto' }}
          />
          <AppStoreButtons />
          <Image
            src="/laurel_right.webp"
            alt=""
            width={48}
            height={48}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 md:w-14 pointer-events-none opacity-60"
            style={{ height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
