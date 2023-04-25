import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles['flex-row']}>
      <div className={styles['left-text']}>
        <h1 className={styles['title']}>The Forge</h1>
        <p className={styles['description']}>a prompt optimizer based on <a className={styles['link']} href="https://www.paperswithprompts.com/">research&nbsp;papers</a></p>
        <button className={styles['button']}>Enter Prompt</button>
      </div>
      <Image className={styles['art']} src="/art.jpeg" alt="Vercel Logo" width={2048 / 6} height={3072 / 6} />
    </main>
  )
}
