import type { Metadata } from 'next'
import { Inter, Noto_Sans_Khmer } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const notoSansKhmer = Noto_Sans_Khmer({ 
  subsets: ["khmer"],
  weight: ['400', '700'],
  variable: '--font-noto-sans-khmer',
});

export const metadata: Metadata = {
  title: 'THMEY LAHOT NEWS | ព័ត៌មានថ្មីៗ',
  description: 'ប្រភពព័ត៌មានដែលអ្នកអាចទុកចិត្តបាន ផ្តល់ជូនព័ត៌មានថ្មីៗរហ័សទាន់ចិត្ត រៀងរាល់ថ្ងៃ។',
  generator: 'v0.app',
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
    <html lang="km" className={`${inter.variable} ${notoSansKhmer.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
