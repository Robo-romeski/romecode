import type { Metadata } from 'next'
import { validateEnvironment } from '@/lib/env'
import './globals.css'

// Validate environment variables on startup
validateEnvironment()

export const metadata: Metadata = {
  title: 'RomeCode - Your Consulting Partner for Digital Solutions',
  description: 'We help businesses architect, deploy, and manage full-stack systems with speed, resilience, and security at the core — from cloud to on-prem, app development to data protection.',
  keywords: ['cloud consulting', 'app development', 'cybersecurity', 'data protection', 'system architecture', 'IT consulting'],
  authors: [{ name: 'RomeCode' }],
  creator: 'RomeCode',
  publisher: 'RomeCode',
  metadataBase: new URL('https://www.romecode.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.romecode.com',
    title: 'RomeCode - Your Consulting Partner for Digital Solutions',
    description: 'We help businesses architect, deploy, and manage full-stack systems with speed, resilience, and security at the core.',
    siteName: 'RomeCode',
    images: [
      {
        url: '/romcode.png',
        width: 1200,
        height: 630,
        alt: 'RomeCode - Computing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RomeCode - Your Consulting Partner for Digital Solutions',
    description: 'We help businesses architect, deploy, and manage full-stack systems with speed, resilience, and security.',
    images: ['/romcode.png'],
    creator: '@romecode',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/romcode.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//calendly.com" />
        
        {/* Preconnect to critical third-parties */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 