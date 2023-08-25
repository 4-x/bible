import Image from 'next/image'
import styles from './page.module.css'
import { bible } from './bible'
import Link from 'next/link'
import path from 'path'
import { promises as fs } from 'fs'
import { langs, locales } from './api/locales'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {

  return (
    <main className={styles.main}>
      <ul>
        {locales.map((language, i) => <li key={i}><Link href={language}>{language}</Link></li>)}
      </ul>
      <ol>{bible.map(book => {
        return (<li key={book.abbrev}><Link href={`${lang}/book/${book.abbrev}`}>{book.name}</Link></li>)
      })}</ol>
    </main>
  )
}
