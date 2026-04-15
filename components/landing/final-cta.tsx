import { AppStoreButtons } from "./app-store-buttons"
import Image from "next/image"

export function FinalCTA() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline: Cocina vez */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-8">
          Cocina una vez
        </h2>

        {/* Photo */}
        <div className="mb-8">
          <Image
            src="/hero-page-v2026-03-10.webp"
            alt="BatchFit hero"
            width={300}
            height={200}
            className="w-full max-w-xs h-auto rounded-xl mx-auto"
            style={{ backgroundColor: 'unset' }}
            priority
          />
        </div>

        {/* Vive toda la semana */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-10">
          Vive toda la semana
        </h3>

        {/* CTA */}
        <div className="mt-10">
          <AppStoreButtons />
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-md mx-auto">
        </p>
      </div>
    </section>
  )
}
