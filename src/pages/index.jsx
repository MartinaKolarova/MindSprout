import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header/Header";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Tree } from "@/components/Tree/Tree";
import { TreeNavigation } from "@/components/TreeNavigation/TreeNavigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [phase, setPhase] = useState(1);
  const [selected, setSelected] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("");
      const json = await response.json();
      setRooms(json.data);
    };

    fetchExercises();
  }, []);

  return (
    <>
      <Header></Header>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <TreeNavigation />
      </main>
      <Footer />
      <Tree />
    </>
  );
}
