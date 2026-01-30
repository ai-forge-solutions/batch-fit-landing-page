import { AppStoreButtons } from "./app-store-buttons"

export function FinalCTA() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
          Cocina una vez. Vive toda la semana.
        </h2>

        <div className="mt-10">
          <AppStoreButtons />
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-md mx-auto">
        </p>
      </div>
    </section>
  )
}
