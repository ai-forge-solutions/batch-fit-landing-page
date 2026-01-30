import { Check } from "lucide-react"

const highlights = [
  "Cocinas 1–2 veces por semana",
  "Comes el resto sin decidir nada",
  "Todo guiado paso a paso",
  "Flexible, sin rigidez ni extremos",
]

export function WhatIsBatchFit() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center text-balance">
          BatchFit es un sistema, no una dieta
        </h2>

        <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto text-balance">
          BatchFit elimina la carga mental de la alimentación semanal convirtiéndola en un proceso claro, predecible y repetible.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
