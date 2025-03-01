import React from 'react'
import './styles.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  description: 'Find and discover events in Galanta - concerts, nightlife, arts, and more.',
  title: 'Avenue - Events in Galanta',
  keywords: 'events, Galanta, concerts, nightlife, arts, culture, tickets',
  openGraph: {
    title: 'Avenue - Events in Galanta',
    description: 'Find and discover events in Galanta - concerts, nightlife, arts, and more.',
    images: ['/og-image.jpg'],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="h-full bg-background text-foreground antialiased dark">{children}</body>
    </html>
  )
}
