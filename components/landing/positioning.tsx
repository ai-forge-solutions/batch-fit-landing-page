const statements = [
  "No te pedimos motivación",
  "Te damos estructura",
  "La nutrición como un sistema, no como una decisión diaria",
]

export function Positioning() {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {statements.map((statement, index) => (
            <p
              key={index}
              className={`text-xl md:text-2xl text-center font-medium ${
                index === statements.length - 1
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {statement}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
