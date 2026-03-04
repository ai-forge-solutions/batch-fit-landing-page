import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

export const PRODUCT_CONFIG = {
  name: 'BatchFit Lifetime Access',
  price: 1900, // €19 in cents
  currency: 'eur',
  description: 'Acceso de por vida a BatchFit - Tu sistema de nutrición inteligente'
}