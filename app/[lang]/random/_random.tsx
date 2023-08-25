'use client'

import { useEffect, useState } from 'react'
import { langs, locales } from '../api/locales'
import { BibleBook } from '../types'

export default function Random({ lang }: { lang: string }) {
  const [bibleJSON, setBibleJSON] = useState({ verseText: '', bookName: '', chapterNumber: 0, verseNumber: 0, abbrev: '' })

  const getRandomVerse = () => {
    const someData = fetch(`/${lang}/api`).then(data => data.json()).then(json => setBibleJSON(json))
  }

  let randomVerseHTML
  useEffect(() => {
    getRandomVerse()
  }, [])

  return (
    <>
      {bibleJSON.verseNumber ?
        <aside className='random-verse'>
          <blockquote><p dangerouslySetInnerHTML={{ __html: bibleJSON.verseText.replaceAll('{', '<em>').replaceAll('}', '</em>') }} suppressHydrationWarning></p></blockquote>
          <p><cite><a href={`/${lang}/book/${bibleJSON.abbrev}#_${bibleJSON.chapterNumber + 1}_${bibleJSON.verseNumber + 1}`} suppressHydrationWarning>{bibleJSON.bookName} {bibleJSON.chapterNumber + 1}:{bibleJSON.verseNumber + 1}</a></cite></p>
          <button onClick={getRandomVerse}>⚡️</button>
        </aside> : <></>
      }
    </>
  )
}

export async function generateStaticParams() {
  const staticParamsArr = locales.map(lang => {
    return { lang: lang }
  })

  return staticParamsArr
}