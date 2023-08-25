import path from 'path';
import { promises as fs } from 'fs';
import { langs, locales } from '../api/locales'
import { NextResponse } from 'next/server'
import { BibleBook } from '../types'
import { theBible } from './bible-i18n-book-names';

export async function GET(request: Request) {

  const { pathname } = new URL(request.url)
  const pathArr = pathname.split('/')
  const lang = pathArr[1]
  const jsonDirectory = path.join(process.cwd(), 'app/bible/json')
  const _bible = await fs.readFile(jsonDirectory + `/${langs[lang]}.json`, 'utf8')
  const _bibleJSON: BibleBook[] = JSON.parse(_bible.trim())

  const randomBook = Math.floor(Math.random() * _bibleJSON.length)
  const randomChapter = Math.floor(Math.random() * _bibleJSON[randomBook].chapters.length)
  const randomVerse = Math.floor(Math.random() * _bibleJSON[randomBook].chapters[randomChapter].length)

  const bookName = _bibleJSON[randomBook].name
  const abbrev = _bibleJSON[randomBook].abbrev
  const langRef = theBible.find(book => {
    return book.code == lang.substring(0, 2)
  })

  const verseData = {
    verseText: _bibleJSON[randomBook].chapters[randomChapter][randomVerse],
    bookName: langRef?.books[bookName],
    chapterNumber: randomChapter,
    verseNumber: randomVerse,
    abbrev
  }

  return NextResponse.json(verseData)
}

