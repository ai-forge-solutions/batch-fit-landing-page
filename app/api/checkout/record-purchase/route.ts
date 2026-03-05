import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { sendPurchaseConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId } = body

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID requerido' },
        { status: 400 }
      )
    }

    // Retrieve session details from Stripe with custom fields
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['custom_fields']
    })

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Pago no completado' },
        { status: 400 }
      )
    }

    // Get name from custom fields
    let customerName = 'Cliente'
    if (session.custom_fields && session.custom_fields.length > 0) {
      const nameField = session.custom_fields.find(
        field => field.key === 'nombre_completo'
      )
      if (nameField && nameField.text) {
        customerName = nameField.text.value
      }
    }

    // Get email from Stripe session
    const customerEmail = session.customer_email || session.customer_details?.email || ''

    // Prepare data for Google Sheets
    const purchaseData = {
      name: customerName,
      email: customerEmail,
      paymentStatus: session.payment_status,
      transactionId: session.payment_intent as string,
      amount: (session.amount_total || 0) / 100,
      currency: session.currency?.toUpperCase() || 'EUR',
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('es-ES'),
    }

    console.log('[BatchFit] Purchase data ready:', purchaseData)

    // Send confirmation email
    try {
      await sendPurchaseConfirmation({
        to: purchaseData.email,
        name: purchaseData.name,
        transactionId: purchaseData.transactionId,
        amount: purchaseData.amount,
        currency: purchaseData.currency,
      })
      console.log('[BatchFit] Confirmation email sent to:', purchaseData.email)
    } catch (emailError) {
      console.error('[BatchFit] Failed to send email:', emailError)
      // Don't fail the whole request if email fails
    }

    // TODO: Send to Google Sheets

    // IMPORTANT: Return both data and customer objects
    return NextResponse.json({ 
      success: true, 
      data: purchaseData,
      customer: {
        name: customerName,
        email: customerEmail
      }
    })
    
  } catch (error) {
    console.error('[BatchFit] Record purchase error:', error)
    return NextResponse.json(
      { error: 'Error al registrar la compra' },
      { status: 500 }
    )
  }
}