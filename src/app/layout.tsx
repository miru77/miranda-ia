import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jorge Miranda — Automatización, IA y Ciberseguridad',
  description:
    'Más de 10 años de experiencia en IT y operaciones. Especialista en automatización, IA aplicada y ciberseguridad.',
  metadataBase: new URL('https://miranda-ia.net.ar'),
  // THE CANONICAL EXISTS BECAUSE www SERVES A BYTE-IDENTICAL COPY. Verified on
  // 2026-09-16: https://www.miranda-ia.net.ar/ answered 200, not a 301, so the
  // same document lives at two addresses and Google has to pick one. This tag
  // stops it guessing. The redirect rule on the Cloudflare zone is the other
  // half of the fix, and neither half replaces the other.
  alternates: { canonical: '/' },
  // Next already derived og:title and og:description from the two fields above,
  // and the card image comes from opengraph-image.png. What was missing is the
  // context around them: type, language, site name and the canonical url.
  // NOT VISIBLE ON THE PAGE — this only changes the share card and what
  // crawlers read.
  openGraph: {
    type: 'profile',
    locale: 'es_AR',
    siteName: 'Jorge Miranda',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} motion-safe:scroll-smooth`}
    >
      <body id="inicio">{children}</body>
    </html>
  )
}
