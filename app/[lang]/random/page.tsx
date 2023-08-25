import { bible } from '../bible'
import path from 'path'
import { promises as fs } from 'fs'
import { langs } from '../api/locales'
import Link from 'next/link'

export default async function Page({ params: { lang } }) {

  const jsonDirectory = path.join(process.cwd(), 'app/bible/json')
  let _bible = await fs.readFile(jsonDirectory + `/${langs[lang]}.json`, 'utf8')
  _bible = JSON.parse(_bible.trim())

  const randomBook = Math.floor(Math.random() * _bible.length)
  const randomChapter = Math.floor(Math.random() * _bible[randomBook].chapters.length)
  const randomVerse = Math.floor(Math.random() * _bible[randomBook].chapters[randomChapter].length)
  console.log(lang)
  return (
    <>
      <h1><Link href={`/${lang}`}>KJV Bible</Link></h1>
      <section className='random-verse'>
        <p>{_bible[randomBook].chapters[randomChapter][randomVerse]}</p>
        <p><cite><Link href={`/${lang}/book/${_bible[randomBook].abbrev}#_${randomChapter + 1}_${randomVerse + 1}`}>{_bible[randomBook].name} {randomChapter + 1}:{randomVerse + 1}</Link></cite></p>
      </section>
    </>
  )
}