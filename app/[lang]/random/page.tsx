// import { bible } from '../bible'
import path from 'path'
import { promises as fs } from 'fs'
import { langs, locales } from '../api/locales'
import Link from 'next/link'
import { BibleBook } from '../types'

export default async function Page({ params: { lang } }: { params: { lang: string } }) {

  const jsonDirectory = path.join(process.cwd(), 'app/bible/json')
  const _bible = await fs.readFile(jsonDirectory + `/${langs[lang]}.json`, 'utf8')
  const _bibleJSON: BibleBook[] = JSON.parse(_bible.trim())

  const randomBook = Math.floor(Math.random() * _bibleJSON.length)
  const randomChapter = Math.floor(Math.random() * _bibleJSON[randomBook].chapters.length)
  const randomVerse = Math.floor(Math.random() * _bibleJSON[randomBook].chapters[randomChapter].length)
  console.log(randomVerse)
  return (
    <>
      <section className='random-verse'>
        <p>{_bibleJSON[randomBook].chapters[randomChapter][randomVerse]}</p>
        <p><cite><Link href={`/${lang}/book/${_bibleJSON[randomBook].abbrev}#_${randomChapter + 1}_${randomVerse + 1}`}>{_bibleJSON[randomBook].name} {randomChapter + 1}:{randomVerse + 1}</Link></cite></p>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  const staticParamsArr = locales.map(lang=>{
    return {lang:lang}
  })

  return staticParamsArr
}