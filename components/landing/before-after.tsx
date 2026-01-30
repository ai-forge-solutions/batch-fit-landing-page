import { X, Check, Shuffle, LayoutGrid } from "lucide-react"

export function BeforeAfter() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-background rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-6">Sin sistema</h3>
            
            <div className="aspect-[4/3] bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="grid grid-cols-3 gap-2 p-4 opacity-60">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-lg bg-muted-foreground/20"
                    style={{
                      transform: `rotate(${Math.random() * 20 - 10}deg)`,
                    }}
                  />
                ))}
              </div>
              <Shuffle className="absolute w-16 h-16 text-muted-foreground/40" />
            </div>
            
            <p className="mt-4 text-muted-foreground text-center">Caos, decisiones diarias, estrés</p>
          </div>

          {/* After */}
          <div className="bg-background rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-6">Con BatchFit</h3>
            
            <div className="aspect-[4/3] bg-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="grid grid-cols-3 gap-3 p-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-lg bg-primary/30 border-2 border-primary/50"
                  />
                ))}
              </div>
              <LayoutGrid className="absolute w-16 h-16 text-primary/30" />
            </div>
            
            <p className="mt-4 text-foreground text-center font-medium">Orden, claridad, control</p>
          </div>
        </div>

        <p className="mt-10 text-xl md:text-2xl text-foreground font-medium text-center">
          Menos decisiones. Más control.
        </p>
      </div>
    </section>
  )
}
