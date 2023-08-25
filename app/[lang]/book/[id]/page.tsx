import { useEffect } from "react"
import { bible } from "../../bible"
import path from "path"
import { promises as fs } from 'fs'
import { langs, locales } from '../../api/locales'
import { BibleBook } from "../../types"
import { theBible } from "../../api/bible-i18n-book-names"

type Params = {
  params: {
    id: string,
    lang: string
  }
}

export default async function Page({ params: { lang, id } }: Params) {
  let loaded = false
  const jsonDirectory = path.join(process.cwd(), 'app/bible/json')
  let _bible = await fs.readFile(jsonDirectory + `/${langs[lang]}.json`, 'utf8')
  let _bibleJSON: BibleBook[] = JSON.parse(_bible.trim())

  const regex = /\{[^{}]*(\.\.\.|Heb\.)[^{}]*\}/g
  const book = _bibleJSON.find(book => book.abbrev == id)
  const cleanedChapters = book?.chapters.map(chapter => {
    return chapter.map(verse => {
      const note = verse.match(regex)
      const cleanVerse = verse.replace(regex, '')
      return {
        note,
        verse: cleanVerse
      }
    })
  })

  const langRef = theBible.find(book => {
    return book.code == lang.substring(0, 2)
  })

  return (
    <div className="book">
      <h2>{langRef && book ? langRef.books[book.name] : <></>}</h2>
      {cleanedChapters?.map((chapter, i) => (
        <section key={i}>
          <h3>Chapter {i + 1}</h3>
          <ol>

            {chapter.map((verse, j) => {
              const verseText = verse.verse.replaceAll('{', '<em>').replaceAll('}', '</em>')
              const verseNote = verse.note?.map(_note => _note.replaceAll('{', '').replaceAll('}', ''))

              return (
                <li key={j} className="verse" id={`_${i + 1}_${j + 1}`}>
                  <p dangerouslySetInnerHTML={{ __html: verseText }}></p>
                  {verseNote ? <p>{verseNote.map((_note, k) => <small key={k}>{_note}</small>)}</p> : <></>}
                </li>
              )
            })}
          </ol>
        </section>
      )
      )
      }
    </div>
  )
}

export async function generateStaticParams() {
  const staticParamsArr = bible.flatMap(book => {
    return locales.map(lang => {
      return {
        id: book.abbrev,
        lang: lang
      }
    })
  })

  return staticParamsArr
}

export const dynamicParams = false