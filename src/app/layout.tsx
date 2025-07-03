import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mrtbt.com - AI Otomasyon ve DevOps Uzmanı',
  description: '15 yıllık tecrübe ile yapay zeka, Kubernetes ve sistem mühendisliği çözümleri. AI otomasyon tasarlama, DevOps ve sistem mimarisi uzmanı.',
  keywords: 'AI otomasyon, DevOps, Kubernetes, sistem mühendisliği, yapay zeka, container orchestration, CI/CD, cloud architecture',
  authors: [{ name: 'Yavuzer', url: 'https://mrtbt.com' }],
  creator: 'Ali Yavuzer',
  publisher: 'mrtbt.com',
  robots: 'index, follow',
  openGraph: {
    title: 'mrtbt.com - AI Otomasyon ve DevOps Uzmanı',
    description: '15 yıllık tecrübe ile yapay zeka, Kubernetes ve sistem mühendisliği çözümleri',
    url: 'https://mrtbt.com',
    siteName: 'mrtbt.com',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mrtbt.com - AI Otomasyon ve DevOps Uzmanı',
    description: '15 yıllık tecrübe ile yapay zeka, Kubernetes ve sistem mühendisliği çözümleri',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mrtbt.com" />
        <meta name="google-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yavuzer",
              "jobTitle": "AI Otomasyon ve DevOps Uzmanı",
              "description": "15 yıllık tecrübe ile yapay zeka, Kubernetes ve sistem mühendisliği çözümleri",
              "url": "https://mrtbt.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yüksekalan mah. 519 sok no: daire: 10",
                "addressLocality": "Muratpaşa",
                "addressRegion": "Antalya",
                "addressCountry": "TR"
              },
              "email": "info@mrtbt.com",
              "telephone": "+90-850-840-94-12"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}