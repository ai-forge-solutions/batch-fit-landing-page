import { NextRequest, NextResponse } from 'next/server'
import { stripe, PRODUCT_CONFIG } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: PRODUCT_CONFIG.currency,
            product_data: {
              name: PRODUCT_CONFIG.name,
              description: PRODUCT_CONFIG.description,
            },
            unit_amount: PRODUCT_CONFIG.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        customer_name: name,
        customer_email: email,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment_success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
    })

    return NextResponse.json({ 
      url: session.url,
      sessionId: session.id 
    })
    
  } catch (error) {
    console.error('[BatchFit] Stripe session error:', error)
    return NextResponse.json(
      { error: 'Error al crear la sesión de pago' },
      { status: 500 }
    )
  }
}