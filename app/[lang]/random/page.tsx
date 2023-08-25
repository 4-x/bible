import path from 'path'
import { promises as fs } from 'fs'
import { langs, locales } from '../api/locales'
import Link from 'next/link'
import { BibleBook } from '../types'
import Random from './_random'

export default async function Page({ params: { lang } }: { params: { lang: string } }) {

  const jsonDirectory = path.join(process.cwd(), 'app/bible/json')
  const _bible = await fs.readFile(jsonDirectory + `/${langs[lang]}.json`, 'utf8')
  const _bibleJSON: BibleBook[] = JSON.parse(_bible.trim())

  return (
    <>
      <Random lang={lang} />
    </>
  )
}

export async function generateStaticParams() {
  const staticParamsArr = locales.map(lang => {
    return { lang: lang }
  })

  return staticParamsArr
}