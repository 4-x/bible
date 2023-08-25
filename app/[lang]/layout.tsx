import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Children } from 'react'
import { locales } from './api/locales'
import LangControl from './langcontrol'

const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KJV Bible',
  description: '',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <header>
          <h1>
            <Link href={`/${params.lang}/`}>The Bible</Link>
          </h1>
          <LangControl lang={params.lang} />
        </header>
        {children}
      </body>
    </html>
  )
}
