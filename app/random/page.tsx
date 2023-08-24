import { bible } from '../bible'

export default function Page({ params }) {
  const randomBook = Math.floor(Math.random() * bible.length)
  const randomChapter = Math.floor(Math.random() * bible[randomBook].chapters.length)
  const randomVerse = Math.floor(Math.random() * bible[randomBook].chapters[randomChapter].length)

  return (
    <section>
      <p>{bible[randomBook].chapters[randomChapter][randomVerse]}</p>
      <p><cite><a href={`/book/${bible[randomBook].abbrev}#_${randomChapter+1}_${randomVerse+1}`}>{bible[randomBook].name} {randomChapter+1}:{randomVerse+1}</a></cite></p>
    </section>
  )
}