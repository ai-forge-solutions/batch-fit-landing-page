import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

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

    // Retrieve session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Pago no completado' },
        { status: 400 }
      )
    }

    // Prepare data for Google Sheets
    const purchaseData = {
      name: session.metadata?.customer_name || '',
      email: session.customer_email || session.metadata?.customer_email || '',
      paymentStatus: session.payment_status,
      transactionId: session.payment_intent as string,
      amount: (session.amount_total || 0) / 100, // Convert from cents
      currency: session.currency?.toUpperCase() || 'EUR',
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('es-ES'),
    }

    console.log('[BatchFit] Purchase data ready:', purchaseData)

    // TODO: Send to Google Sheets
    // When you provide the Google Sheets URL, we'll add the fetch call here
    // Similar to the waitlist implementation
    
    /*
    const params = new URLSearchParams()
    params.append('name', purchaseData.name)
    params.append('email', purchaseData.email)
    params.append('paymentStatus', purchaseData.paymentStatus)
    params.append('transactionId', purchaseData.transactionId)
    params.append('amount', purchaseData.amount.toString())
    params.append('currency', purchaseData.currency)
    params.append('timestamp', purchaseData.timestamp)
    params.append('date', purchaseData.date)
    
    await fetch('YOUR_GOOGLE_SHEETS_URL_HERE', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    })
    */

    return NextResponse.json({ success: true, data: purchaseData })
    
  } catch (error) {
    console.error('[BatchFit] Record purchase error:', error)
    return NextResponse.json(
      { error: 'Error al registrar la compra' },
      { status: 500 }
    )
  }
}