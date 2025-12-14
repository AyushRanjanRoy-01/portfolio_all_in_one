import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ayush Ranjan Roy | AI Engineer',
  description: 'AI Engineer building intelligent automation systems',
  metadataBase: new URL('https://portfolio.example.com'),
  openGraph: {
    title: 'Ayush Ranjan Roy | AI Engineer',
    description: 'AI Engineer building intelligent automation systems',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        <Header />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
