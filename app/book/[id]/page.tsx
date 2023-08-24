import { useEffect } from "react"
import { bible } from "../../bible"

export default function Page({ params }) {
  let loaded = false

  const regex = /\{[^{}]*Heb[^{}]*\}/g
  // let book
  const book = bible.find(book => book.abbrev == params.id)
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

  return (
    <div>
      <h2>{book?.name}</h2>
      {cleanedChapters?.map((chapter, i) => (
        <section key={i}>
          <h3>Chapter {i + 1}</h3>
          <ol>

            {chapter.map((verse, j) => {
              const verseText = verse.verse.replaceAll('{', '<em>').replaceAll('}', '</em>')
              const verseNote = verse.note ? verse.note[0].replaceAll('{', '').replaceAll('}', '') : null
              return (
                <li key={j} className="verse" id={`_${i+1}_${j+1}`}>
                  <p dangerouslySetInnerHTML={{ __html: verseText }}></p>
                  {verseNote ? <p><small>{verseNote}</small></p> : <></>}
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
  return bible.map(book => {
    return {
      id: book.abbrev,
      chapters: book.chapters,
      name: book.name
    }
  })
}

export const dynamicParams = false