import Image from "next/image"
import { AppStoreButtons } from "./app-store-buttons"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background px-6 py-20">
      {/* Container principal con layout responsive */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Contenido de texto */}
        <div className="flex-1 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title tracking-tight text-dark text-balance leading-tight">
            Consigue tu objetivo fit<br />
            sin perder el foco ni tu tiempo en la cocina
          </h1>
          
          <p className="mt-6 text-lg md:text-xl subtitle text-dark/80 max-w-2xl mx-auto text-balance">
            Nutrición de alto rendimiento automatizada en una sola sesión semanal de 60 minutos.
          </p>
          
          {/* <p className="mt-4 text-base text-dark/90 font-medium subtitle">
            No es una dieta. No es una app de recetas. Es orden.
          </p> */}
          
          <div className="mt-10">
            <AppStoreButtons />
          </div>
          
          {/* <p className="mt-4 text-sm text-dark/60 subtitle">
            Acceso anticipado · MVP cerrado
          </p>
           */}
          {/* Imagen en mobile (debajo del CTA) */}
          <div className="mt-10 lg:hidden">
            <Image 
              src="/hero-page.png" 
              alt="BatchFit App" 
              width={400} 
              height={300}
              className="mx-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
        
        {/* Imagen en desktop (a la derecha) */}
        <div className="hidden lg:block flex-shrink-0">
          <Image 
            src="/hero-page.png" 
            alt="BatchFit App" 
            width={500} 
            height={375}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
