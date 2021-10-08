import Head from 'next/head'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import styles from '@/styles/pages/Home.module.scss'

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
      <Header />
      <Main />
      <Footer />
      <Loader />
    </div>
  )
}
