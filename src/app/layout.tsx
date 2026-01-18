import React from "react"
import type { Metadata } from 'next'
import { Vast_Shadow, Adamina } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './styles/globals.css'

const vastShadow = Vast_Shadow({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-title'
});

const adamina = Adamina({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Jay's - American Breakfast | Classic Diner Experience",
  description: 'Autentica experiencia de comida americana en Buenos Aires',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${adamina.variable} ${vastShadow.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
