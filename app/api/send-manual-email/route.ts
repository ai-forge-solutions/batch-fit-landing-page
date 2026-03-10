import { NextRequest, NextResponse } from 'next/server'
import { sendPurchaseConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email, name, transactionId, amount = 17.90 } = await request.json()
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      )
    }

    console.log('[BatchFit] Enviando email manual a:', email)
    
    const result = await sendPurchaseConfirmation({
      to: email,
      name: name || 'Cliente BatchFit',
      transactionId: transactionId || `MANUAL_${Date.now()}`,
      amount,
      currency: 'EUR'
    })

    console.log('[BatchFit] Email manual enviado exitosamente:', result.messageId)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado correctamente',
      messageId: result.messageId,
      sentTo: email
    })
    
  } catch (error) {
    console.error('[BatchFit] Error enviando email manual:', error)
    
    return NextResponse.json({
      error: 'Error al enviar email',
      details: error.message
    }, { status: 500 })
  }
}