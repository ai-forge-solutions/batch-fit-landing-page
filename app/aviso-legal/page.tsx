import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function AvisoLegal() {
  return (
    <main>
      <Header />
      <section className="min-h-screen bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Aviso Legal</h1>
          
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Identificación del titular</h2>
              <p>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Titular:</strong> Miguel Carmona Rodríguez</li>
                <li><strong>NIF:</strong> 48118500Q</li>
                <li><strong>Domicilio:</strong> A Coruña, España</li>
                <li><strong>Correo electrónico de contacto:</strong> support@batchfit.app</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Finalidad del sitio web</h2>
              <p>El presente sitio web tiene como finalidad ofrecer información sobre BatchFit, una herramienta digital orientada a la generación de planes de alimentación personalizados, recetas de batchcooking, listas de la compra y recomendaciones nutricionales automatizadas.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propiedad intelectual</h2>
              <p>Todos los contenidos del sitio web, incluyendo textos, diseños, logotipos, funcionalidades, algoritmos y software, son titularidad de su propietario o cuentan con las licencias necesarias para su uso.</p>
              <p className="mt-3">Queda prohibida su reproducción, distribución o explotación sin autorización expresa.</p>
              <p className="mt-3">Los planes de alimentación generados por la herramienta están destinados exclusivamente a uso personal y no comercial, quedando prohibida su reventa o explotación económica sin consentimiento del titular.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitación de responsabilidad</h2>
              <p>El titular no se hace responsable de:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>El uso indebido del contenido del sitio web.</li>
                <li>Las decisiones alimentarias o de salud tomadas por el usuario.</li>
                <li>Posibles interrupciones del servicio, especialmente durante la fase de prueba del producto.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Legislación aplicable y jurisdicción</h2>
              <p>La relación entre el titular y el usuario se regirá por la legislación española.</p>
              <p className="mt-3">En caso de conflicto, las partes se someterán a los Juzgados y Tribunales de A Coruña, salvo que la normativa aplicable disponga otra cosa.</p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h1 className="text-3xl font-bold text-foreground mb-6">Términos y Condiciones de Uso</h1>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Naturaleza del servicio</h2>
                  <p>BatchFit es una herramienta digital que:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Genera planes de alimentación personalizados.</li>
                    <li>Propone recetas adaptadas al batchcooking.</li>
                    <li>Ofrece recomendaciones nutricionales orientativas.</li>
                    <li>Incluye listas de la compra asociadas.</li>
                  </ul>
                  <p className="mt-4 font-semibold">BatchFit no constituye un servicio médico ni nutricional profesional y no sustituye la consulta con profesionales sanitarios cualificados.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Estado actual del producto</h2>
                  <p>BatchFit se encuentra en fase de prueba y validación:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Los precios mostrados son simulados.</li>
                    <li>No existen cobros reales ni contratación efectiva en esta fase.</li>
                    <li>El servicio puede modificarse o interrumpirse sin previo aviso.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Responsabilidad del usuario</h2>
                  <p>El usuario declara que:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Utiliza el servicio bajo su propia responsabilidad.</li>
                    <li>Consultará con un profesional sanitario ante cualquier duda médica o nutricional relevante.</li>
                    <li>No empleará las recomendaciones como sustituto de asesoramiento sanitario profesional.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Exclusión de responsabilidad médica</h2>
                  <p>La información generada por BatchFit es orientativa y automatizada:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>No realiza diagnósticos.</li>
                    <li>No prescribe tratamientos.</li>
                    <li>No garantiza resultados de salud.</li>
                  </ul>
                  <p className="mt-4 font-semibold">El uso del servicio se realiza bajo la exclusiva responsabilidad del usuario.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Uso permitido</h2>
                  <p>Los contenidos generados están destinados únicamente a uso personal.</p>
                  <p className="mt-3">Queda prohibida su:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Reventa</li>
                    <li>Distribución comercial</li>
                    <li>Explotación económica</li>
                  </ul>
                  <p className="mt-3">sin autorización expresa del titular.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}