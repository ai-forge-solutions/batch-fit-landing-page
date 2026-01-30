import { Brain, ShoppingCart, ChefHat, Zap } from "lucide-react"

const problems = [
  { icon: ShoppingCart, text: "Pensar cada semana qué comprar" },
  { icon: ChefHat, text: "Decidir qué cocinar" },
  { icon: Zap, text: "Improvisar a diario" },
  { icon: Brain, text: "Sentir que comer bien consume demasiado foco" },
]

export function ProblemSection() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center text-balance">
          El problema no es saber qué comer
        </h2>

        <div className="mt-12 grid gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-background p-5 rounded-xl"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-lg text-foreground">{problem.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xl md:text-2xl text-foreground font-medium text-center text-balance">
          La gente no necesita más información. Necesita un sistema.
        </p>
      </div>
    </section>
  )
}
