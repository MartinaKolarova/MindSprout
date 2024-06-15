import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Header } from '@/components/Header/Header';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import { Tree } from '@/components/Tree/Tree';
import { TreeNavigation } from '@/components/TreeNavigation/TreeNavigation';
import { useState, useRef } from 'react';

export default function Home() {
  const [chosenCategory, setChosenCategory] = useState(null);
  const treeRef = useRef(null);

  const handleClick = (value) => {
    setChosenCategory(value);
    // scrollToTree();
  };
  console.log(chosenCategory);

  const handleBack = () => {
    setChosenCategory(null);
  };

  // const scrollToTree = () => {
  //   if (treeRef.current) {
  //     treeRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className={styles.appcontainer}>
      <Header></Header>
      <Head>
        <title>Mind Sprout</title>
        <meta
          name="description"
          content="Aplikace na podporu psychohygieny teenagerů"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {chosenCategory && <div className={styles.backgroundOverlay}></div>}
      <main className={styles.main}>
        {chosenCategory !== null && (
          <button className={styles.backButton} onClick={handleBack}>
            zpět
          </button>
        )}
        {chosenCategory === null && <TreeNavigation onClick={handleClick} />}
      </main>
      <div ref={treeRef}>
        <Tree category={chosenCategory} />
      </div>
      <Footer />
    </div>
  );
}
