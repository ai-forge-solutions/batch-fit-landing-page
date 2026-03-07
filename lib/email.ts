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
        .details { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .steps { background: white; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #FFE047; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .highlight { background: #FFE047; padding: 2px 6px; border-radius: 4px; color: #1a1a1a; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Ya eres parte de BatchFit</h1>
        </div>
        
        <div class="content">
          <h2>Hola ${name},</h2>
          <p>Estamos construyendo esto <strong>contigo</strong>.</p>
          
          <div class="details">
            <h3>Detalles de la compra</h3>
            <div class="detail-row">
              <span><strong>Producto:</strong></span>
              <span>BatchFit Acceso Fundador</span>
            </div>
            <div class="detail-row">
              <span><strong>Monto:</strong></span>
              <span>${amount} ${currency}</span>
            </div>
            <div class="detail-row">
              <span><strong>ID de transacción:</strong></span>
              <span>${transactionId}</span>
            </div>
            <div class="detail-row">
              <span><strong>Fecha:</strong></span>
              <span>${new Date().toLocaleDateString('es-ES')}</span>
            </div>
          </div>

          <div class="steps">
            <h3>📋 Próximos pasos</h3>
            <ol style="margin: 15px 0; padding-left: 20px;">
              <li style="margin: 10px 0;"><strong>Te contactaremos en 24-48h</strong></li>
              <li style="margin: 10px 0;"><strong>Te pediremos tus preferencias</strong></li>
              <li style="margin: 10px 0;"><strong>Recibirás tu primer plan personalizado</strong></li>
            </ol>
          </div>

          <p>Como miembro fundador, tienes garantizado:</p>
          <ul style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <li>✅ <span class="highlight">Acceso de por vida</span> en la versión final</li>
            <li>✅ Participación en el beta testing</li>
            <li>✅ Influencia directa en las características finales</li>
            <li>✅ Soporte prioritario</li>
          </ul>

          <p><strong>Estimado de lanzamiento:</strong> Q2 2026</p>
          
          <p>¿Preguntas o sugerencias? Escríbenos a <strong>support@batchfit.app</strong> - ¡nos encanta escuchar de nuestros miembros fundadores!</p>
          
          <p>¡Gracias por ser parte de los fundadores! 🚀</p>
        </div>

        <div class="footer">
          <p>BatchFit - Tu sistema de nutrición inteligente (próximamente)</p>
          <p>¿Dudas? Escríbenos a support@batchfit.app</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: '🎉 Ya eres parte de BatchFit',
      html: emailHTML,
    })

    console.log('[BatchFit] Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('[BatchFit] Email error:', error)
    throw error
  }
}