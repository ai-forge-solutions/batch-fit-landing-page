import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendPurchaseConfirmation({
  to,
  name,
  transactionId,
  amount,
  currency = 'EUR',
}: {
  to: string
  name: string
  transactionId: string
  amount: number
  currency?: string
}) {
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: white; padding: 30px; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; }
        .section { background: white; padding: 25px; margin: 20px 0; border-radius: 8px; }
        .benefits { background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .highlight { background: #FFE047; padding: 2px 6px; border-radius: 4px; color: #1a1a1a; font-weight: bold; }
        .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Bienvenido a BatchFit 🚀</h1>
        </div>
        
        <div class="content">
          <h2>Hola ${name},</h2>
          
          <p>¡Gracias por confiar en BatchFit y formar parte de los miembros fundadores!</p>
          
          <p>BatchFit nace con una idea simple:<br>
          <strong>que no tengas que volver a perder tiempo cocinando cada semana.</strong></p>
          
          <p>Queremos ayudarte a comer bien sin que la nutrición se convierta en otra tarea más.</p>

          <div class="section">
            <h3>Qué pasará ahora</h3>
            <p>En los próximos días te enviaré un email con más detalles sobre el lanzamiento.</p>
            <p>La primera versión de BatchFit se abrirá el <strong>miércoles 18 a las 23:59</strong>, y como miembro fundador tendrás acceso desde el primer minuto.</p>
          </div>

          <div class="benefits">
            <h3>Como miembro fundador tendrás:</h3>
            <ul>
              <li>✅ Acceso de por vida a BatchFit</li>
              <li>✅ Soporte prioritario</li>
              <li>✅ Influencia directa en el desarrollo del producto</li>
            </ul>
            <p>La primera versión de BatchFit se abrirá el <strong>miércoles 18 a las 23:59</strong>, y como fundador tendrás acceso desde el primer minuto.</p>
          </div>

          <div class="section">
            <p><strong>Por cierto, me encantaría saber:</strong></p>
            <p>¿Qué fue lo que te hizo decidirte por BatchFit?</p>
            <p>Si te apetece, responde a este email y cuéntamelo.</p>
          </div>

          <div class="signature">
            <p>Gracias por formar parte del inicio de BatchFit 🚀</p>
            <p><strong>Miguel</strong><br>
            Founder — BatchFit</p>
          </div>
        </div>

        <div class="footer">
          <p>BatchFit - Tu sistema de nutrición inteligente</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: 'Bienvenido a BatchFit 🚀',
      html: emailHTML,
    })

    console.log('[BatchFit] Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('[BatchFit] Email error:', error)
    throw error
  }
}