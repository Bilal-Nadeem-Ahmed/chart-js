import Head from 'next/head';

import styles from '../styles/Home.module.css';

import Trending from '../components/trending';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Trending />
      </main>

      <footer className={styles.footer}>
        This is the footer
      </footer>
    </div>
  );
}
