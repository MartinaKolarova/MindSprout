import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Contact } from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Credits</title>
        <meta name="description" content="Kredity autorům" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h3>Děkujeme těmto autorům za poskytnutí jejich děl:</h3>
        </div>
        <div>
          <p>
            The Things That Keep Us Here by Scott Buckley |
            https://soundcloud.com/scottbuckley Music promoted by
            https://www.free-stock-music.com Creative Commons / Attribution 4.0
            International (CC BY 4.0)
            https://creativecommons.org/licenses/by/4.0/
          </p>
        </div>
      </main>
    </>
  );
}
