'use client'

import { useState } from 'react'
import { langs, locales } from '../api/locales'
import { BibleBook } from '../types'
import * as i18nBooks from '../api/bible-i18n-book-names'

export default function Random({ lang, _bibleJSON }: { lang: string, _bibleJSON: BibleBook[] }) {
  const bookNames: { [index: string]: i18nBooks.BibleBookNames } = i18nBooks
  const randomBook = Math.floor(Math.random() * _bibleJSON.length)
  const randomChapter = Math.floor(Math.random() * _bibleJSON[randomBook].chapters.length)
  const randomVerse = Math.floor(Math.random() * _bibleJSON[randomBook].chapters[randomChapter].length)
  const randomVerseHTML = _bibleJSON[randomBook].chapters[randomChapter][randomVerse].replaceAll('{', '<em>').replaceAll('}', '</em>')
  const bookName = (lang=='en-US'||lang=='en-UK')?_bibleJSON[randomBook].name:bookNames[lang][_bibleJSON[randomBook].name]
  return (
    <>
      <aside className='random-verse'>
        <p dangerouslySetInnerHTML={{ __html: randomVerseHTML }} suppressHydrationWarning></p>
        <p><cite><a href={`/${lang}/book/${_bibleJSON[randomBook].abbrev}#_${randomChapter + 1}_${randomVerse + 1}`} suppressHydrationWarning>{bookName} {randomChapter + 1}:{randomVerse + 1}</a></cite></p>
      </aside>
    </>
  )
}

export async function generateStaticParams() {
  const staticParamsArr = locales.map(lang => {
    return { lang: lang }
  })

  return staticParamsArr
}