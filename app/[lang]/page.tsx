import Image from 'next/image'
import styles from './page.module.css'
import { bible } from './bible'
import Link from 'next/link'
import path from 'path'
import { promises as fs } from 'fs'
import { langs, locales } from './api/locales'
import * as i18nBooks from './api/bible-i18n-book-names'
import Random from './random/page'
import { theBible } from './api/bible-i18n-book-names'

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const langRef = theBible.find(book => {
    return book.code == lang.substring(0, 2)
  })


  return (
    <main className={styles.main}>
      <Random params={{ lang }} />
      <ol>{bible.map(book => {
        return (
          <li
            key={book.abbrev}
          >
            {langRef?.books ? <Link href={`${lang}/book/${book.abbrev}`}>
              {langRef.books[book.name]}
            </Link> : <></>}
          </li>
        )
      })}</ol>
    </main>
  )
}
