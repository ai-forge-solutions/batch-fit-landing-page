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
        .cta-button { background: #FFE047; color: #1a1a1a; padding: 15px 30px; text-decoration: none; display: inline-block; margin: 20px 0; border-radius: 8px; font-weight: bold; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 ¡Bienvenido a BatchFit!</h1>
        </div>
        
        <div class="content">
          <h2>Hola ${name},</h2>
          <p>¡Gracias por tu compra! Tu pago ha sido procesado correctamente.</p>
          
          <div class="details">
            <h3>Detalles de la compra</h3>
            <div class="detail-row">
              <span><strong>Producto:</strong></span>
              <span>BatchFit Lifetime Access</span>
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

          <h3>¿Qué sigue?</h3>
          <ol>
            <li>Accede a tu cuenta de BatchFit</li>
            <li>Completa tu perfil nutricional</li>
            <li>Genera tu primer plan de comidas</li>
            <li>¡Empieza a comer saludable!</li>
          </ol>

          <center>
            <a href="https://batchfit.com/login" class="cta-button">Acceder a BatchFit</a>
          </center>

          <p>Si tienes alguna pregunta, responde a este email y te ayudaremos encantados.</p>
          
          <p>¡Bienvenido a la comunidad BatchFit! 🚀</p>
        </div>

        <div class="footer">
          <p>BatchFit - Tu sistema de nutrición inteligente</p>
          <p>Este es un email automático, por favor no respondas.</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: '✅ Confirmación de compra - BatchFit',
      html: emailHTML,
    })

    console.log('[BatchFit] Email sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('[BatchFit] Email error:', error)
    throw error
  }
}