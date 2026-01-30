const steps = [
  {
    number: "1",
    title: "Personaliza tu plan",
    description: "BatchFit crea tu plan según tu objetivo y preferencias",
  },
  {
    number: "2",
    title: "Recibe instrucciones claras",
    description: "Te dice exactamente qué preparar y en qué orden",
  },
  {
    number: "3",
    title: "Cocina en bloque",
    description: "Cocinas una o dos veces por semana, todo de una vez",
  },
  {
    number: "4",
    title: "Vive sin pensar",
    description: "Comes toda la semana sin tomar decisiones",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center text-balance">
          Cómo funciona en la vida real
        </h2>

        <div className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 rounded-xl bg-secondary"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
