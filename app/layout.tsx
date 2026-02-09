import React from "react"
import type { Metadata, Viewport } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: 'MacPower | Mac para Empresas - Apple Business Partner',
  description: 'Soluciones IT empresariales con Apple y marcas globales. Implementación, gestión MDM, seguridad y soporte para empresas en Colombia.',
  keywords: ['Mac para empresas', 'Apple Business Partner', 'MDM', 'soluciones IT', 'MacBook Pro', 'Colombia'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e2a4a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${lato.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
