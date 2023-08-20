import Image from 'next/image'
import styles from './page.module.css'
import { bible } from './bible'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>The King James Bible</h1>
      <ol>{bible.map(book => {
        return (<li key={book.abbrev}><Link href={`book/${book.abbrev}`}>{book.name}</Link></li>)
      })}</ol>
    </main>
  )
}
