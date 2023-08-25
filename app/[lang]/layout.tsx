import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Children } from 'react'
import { locales } from './api/locales'
import LangControl from './langcontrol'
import { theBible } from './api/bible-i18n-book-names'

const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Bible',
  description: '',
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const langRef = theBible.find(book => {
    return book.code == params.lang.substring(0, 2)
  })
  const title = langRef?.name

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <header>
          <h1>
            <Link href={`/${params.lang}/`}>{title}</Link>
          </h1>
          <LangControl lang={params.lang} />
        </header>
        {children}
      </body>
    </html>
  )
}
