import { AppStoreButtons } from "./app-store-buttons"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-title tracking-tight text-dark text-balance leading-tight">
          ¿Y si tu alimentación funcionara en piloto automático?
        </h1>
        
        <p className="mt-6 text-lg md:text-xl subtitle text-dark/80 max-w-2xl mx-auto text-balance">
          BatchFit convierte tu alimentación semanal en un sistema simple y guiado para comer bien sin pensar cada día.
        </p>
        
        <p className="mt-4 text-base text-dark/90 font-medium subtitle">
          No es una dieta. No es una app de recetas. Es orden.
        </p>
        
        <div className="mt-10">
          <AppStoreButtons />
        </div>
        
        <p className="mt-4 text-sm text-dark/60 subtitle">
          Acceso anticipado · MVP cerrado
        </p>
      </div>
    </section>
  )
}
