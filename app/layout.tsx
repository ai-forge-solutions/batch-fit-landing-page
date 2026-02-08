import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CTAProvider } from '@/lib/cta-context'
import './globals.css'

const bebasNeue = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-title'
});

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BatchFit - Tu alimentación en piloto automático',
  description: 'BatchFit convierte tu alimentación semanal en un sistema simple y guiado para comer bien sin pensar cada día. No es una dieta. No es una app de recetas. Es orden.',
  generator: 'v0.app',
  icons: {
    icon: '/batchfit_logo.png',
    apple: '/batchfit_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <CTAProvider mode="pricing" single={true}>
          {children}
        </CTAProvider>
        <Analytics />
      </body>
    </html>
  )
}
