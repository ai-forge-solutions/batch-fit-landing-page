import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Barlow_Semi_Condensed, Geist, Space_Mono } from 'next/font/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import { CTAProvider } from '@/lib/cta-context'
import ClientAnalytics from '@/components/client-analytics'
import './globals.css'

// Barlow Semi Condensed from Google Fonts (keep optimized)
const barlowSemiCondensed = Barlow_Semi_Condensed({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  variable: '--font-subtitle'
});

const geist = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-body'
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  display: 'swap',
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'BatchFit - Tu alimentación en piloto automático',
  description: 'BatchFit convierte tu alimentación semanal en un sistema simple y guiado para comer bien sin pensar cada día. No es una dieta. No es una app de recetas. Es orden.',
  generator: 'v0.app',
  icons: {
    icon: '/batchfit_logo.png',
    apple: '/batchfit_logo.png',
  },
  other: {
    'facebook-domain-verification': 'j7a4xhxxbp1wuzv9bzj0ce9o1o56qq'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* DNS prefetch para dominios externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        
        {/* Performance Optimizations - Reduced Google Fonts dependency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="font" href="/bebas-neue-v16-latin-regular.woff2" type="font/woff2" crossOrigin="" />
        <link rel="preload" as="image" href="/hero-page.webp" fetchPriority="high" />
        
        {/* Reduce Element Render Delay optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Google tag (gtag.js) - Optimized loading */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TY6H1011EB"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TY6H1011EB', {
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>

        {/* Meta Pixel Code - Optimized loading */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '915438308012120');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=915438308012120&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${barlowSemiCondensed.variable} ${geist.variable} ${spaceMono.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <CTAProvider mode="pricing" single={true}>
          {children}
          <ClientAnalytics />
        </CTAProvider>
        <VercelAnalytics />
      </body>
    </html>
  )
}
