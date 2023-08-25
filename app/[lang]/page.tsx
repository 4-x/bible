import Image from 'next/image'
import styles from './page.module.css'
import { bible } from './bible'
import Link from 'next/link'
import path from 'path'
import { promises as fs } from 'fs'
import { langs, locales } from './api/locales'
import * as i18nBooks from './api/bible-i18n-book-names'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const bookNames: { [index:string]: i18nBooks.BibleBookNames } = i18nBooks

  return (
    <main className={styles.main}>
      <ol>{bible.map(book => {
        return (
          <li
            key={book.abbrev}
          >
            <Link href={`${lang}/book/${book.abbrev}`}>
              {(lang != 'en-US' && lang!= 'en-UK') ? bookNames[lang][book.name] : book.name}
            </Link>
          </li>
        )
      })}</ol>
    </main>
  )
}
