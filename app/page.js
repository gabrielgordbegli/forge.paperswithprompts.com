import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head >
        <title>Forge</title>
        <meta name="description" content="A Prompt Optimizer based on Research Papers" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className={styles['row']}>
        <div className={styles['left-text']}>
          <h1 className={styles['title']}>The Forge</h1>
          <p className={styles['description']}>a prompt optimizer based on <a className={styles['link']} href="https://www.paperswithprompts.com/">research&nbsp;papers</a></p>
          <button className={styles['button']}>Enter Prompt</button>
        </div>
        <Image className={styles['art']} src="/art.jpeg" alt="Vercel Logo" width={2048 / 6} height={3072 / 6} />
      </main>
    </>
  )
}
