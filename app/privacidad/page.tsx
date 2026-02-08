import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function Privacidad() {
  return (
    <main>
      <Header />
      <section className="min-h-screen bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Responsable del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> Miguel Carmona Rodríguez</li>
                <li><strong>Correo:</strong> support@batchfit.app</li>
                <li><strong>Ubicación:</strong> A Coruña, España</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Datos personales recopilados</h2>
              <p>BatchFit puede recopilar:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Datos de navegación mediante Google Analytics 4</li>
              </ul>
              <p className="mt-4">Actualmente no se recopilan datos médicos sensibles ni datos de pago.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Finalidad del tratamiento</h2>
              <p>Los datos se utilizan para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Gestionar el acceso a la fase de prueba del servicio.</li>
                <li>Comunicaciones relacionadas con BatchFit.</li>
                <li>Análisis estadístico y mejora de la experiencia de usuario.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Base legal</h2>
              <p>La base jurídica para el tratamiento es:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>El consentimiento del usuario.</li>
                <li>El interés legítimo en mejorar el servicio ofrecido.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Conservación de los datos</h2>
              <p>Los datos se conservarán:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Mientras exista relación con el usuario.</li>
                <li>Hasta que el usuario solicite su supresión.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ubicación y transferencias internacionales</h2>
              <p>Los datos se almacenan en:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google Sheets</li>
                <li>Google Analytics 4</li>
              </ul>
              <p className="mt-4">Estos servicios pueden implicar transferencias internacionales de datos, amparadas en mecanismos legales válidos conforme al RGPD.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Derechos del usuario</h2>
              <p>El usuario puede ejercer sus derechos de:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Acceso</li>
                <li>Rectificación</li>
                <li>Supresión</li>
                <li>Oposición</li>
                <li>Limitación del tratamiento</li>
              </ul>
              <p className="mt-4">Escribiendo a: <strong>support@batchfit.app</strong></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}