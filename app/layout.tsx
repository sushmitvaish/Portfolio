import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://sushmitvaish.dev'),
  title: 'Sushmit Vaish - Software Engineer',
  description: 'Professional portfolio of Sushmit Vaish, Software Engineer specializing in full-stack development, data analysis, and cloud infrastructure. Currently pursuing MS in Software Engineering at Carnegie Mellon University.',
  keywords: 'Software Engineer, Full Stack Developer, Data Analyst, Carnegie Mellon, React, Node.js, AWS, Python, Portfolio',
  authors: [{ name: 'Sushmit Vaish' }],
  creator: 'Sushmit Vaish',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sushmitvaish.dev',
    siteName: 'Sushmit Vaish Portfolio',
    title: 'Sushmit Vaish - Software Engineer',
    description: 'Professional portfolio showcasing expertise in software engineering, data analysis, and innovative problem-solving.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushmit Vaish - Software Engineer',
    description: 'Professional portfolio showcasing expertise in software engineering, data analysis, and innovative problem-solving.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn(
        inter.className,
        "min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white antialiased"
      )}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}