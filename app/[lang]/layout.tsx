import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Children } from 'react'

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

  console.log(params.lang)

  return (
    <html>
      <body className={inter.className}><h1><Link href={`/${params.lang}/`}>The Bible</Link></h1>{children}</body>
    </html>
  )
}
