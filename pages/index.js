import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React responsive restaurant landing page</title>
        <meta
          name='description'
          content='React responsive restaurant landing page'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}
