import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function Cookies() {
  return (
    <main>
      <Header />
      <section className="min-h-screen bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Cookies</h1>
          
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Uso de cookies</h2>
              <p>Este sitio web utiliza cookies analíticas de Google Analytics 4 con la finalidad de:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Analizar el comportamiento de navegación.</li>
                <li>Medir el uso del sitio web.</li>
                <li>Mejorar la experiencia del usuario.</li>
              </ul>
              <p className="mt-4">Estas cookies no permiten identificar personalmente al usuario.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Gestión de cookies</h2>
              <p>Al acceder al sitio web, el usuario puede:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Aceptar las cookies.</li>
                <li>Rechazarlas.</li>
                <li>Configurarlas desde el banner de consentimiento.</li>
              </ul>
              <p className="mt-4">El usuario también puede eliminar o bloquear cookies desde la configuración de su navegador.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}