import Head from 'next/head';

import styles from '../styles/Home.module.css';

import Trending from '../components/trending';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> Welcome to Cryptracker</h1>
        <Trending />
      </main>

      <footer className={styles.footer}>
        <p>Powered by <a href='https://www.coingecko.com/en'>CoinGecko</a></p>
      </footer>
    </div>
  );
}
