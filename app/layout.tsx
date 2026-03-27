import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/LanguageContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Converge — Meet in the Middle',
  description:
    'Find the perfect spot for your friend group. No more arguing about where to go.',
  metadataBase: new URL('https://converge.app'),
  openGraph: {
    title: 'Converge — Meet in the Middle',
    description:
      'Find the perfect spot for your friend group. No more arguing about where to go.',
    url: 'https://converge.app',
    siteName: 'Converge',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Converge — Meet in the Middle',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Converge — Meet in the Middle',
    description:
      'Find the perfect spot for your friend group. No more arguing about where to go.',
    images: ['/og-image.png'],
  },
  keywords: [
    'meetup',
    'midpoint',
    'friend groups',
    'venue finder',
    'hangout planner',
    'group meeting',
    'punto medio',
    'amigos',
    'salir',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-background text-text-primary antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
