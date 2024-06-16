import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Contact } from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Credits</title>
        <meta name="description" content="Kredity autorům" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainCredits}>
        <Header />

        <div>
          <h3>Děkujeme těmto autorům za poskytnutí jejich děl:</h3>
        </div>
        <div>
          <p>
            <br /> 1. The Things That Keep Us Here by Scott Buckley <br />
            <a href="https://soundcloud.com/scottbuckley">
              Scott Buckley Soundcloud
            </a>
            <br />
            Music promoted by:<> </>
            <a href="https://www.free-stock-music.com">
              https://www.free-stock-music.com
            </a>
            <br />
            Creative Commons / Attribution 4.0 International (CC BY 4.0) <br />{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">License</a>
          </p>
          <br />
          <p>
            2. Ethereal by Punch Deck <br />{" "}
            <a href="https://soundcloud.com/punch-deck ">
              Punch Deck Soundcloud
            </a>
            <br />
            Music promoted by:<> </>
            <a href="https://www.free-stock-music.com  /">
              <br /> https://www.free-stock-music.com
            </a>{" "}
            <br />
            Creative Commons / Attribution 3.0 Unported License (CC BY 3.0)
            <a href="https://creativecommons.org/licenses/by/3.0/deed.en_US">
              License
            </a>
          </p>
          <br />{" "}
          <p>
            3. Celestia by Ghostrifter Official <br />
            <a href="  https://soundcloud.com/ghostrifter-official">
              Ghostrifter Official SoundCloud
            </a>
            <br />
            Music promoted by <> </>{" "}
            <a href="https://www.free-stock-music.com">
              https://www.free-stock-music.com
            </a>{" "}
            <br />
            Creative Commons / Attribution-NoDerivs 3.0 Unported (CC BY-ND 3.0){" "}
            <a href="https://creativecommons.org/licenses/by-nd/3.0/">
              License
            </a>
          </p>
          <br />
          <p>
            4. Clouds by Alex-Productions <br />{" "}
            <a href="https://onsound.eu/">Onsound.eu</a> <br />
            Music promoted by<> </>
            <a href="https://www.free-stock">https://www.free-stock</a>
            <br />
            Creative Commons / Attribution 3.0 Unported License (CC BY 3.0){" "}
            <a href="https://creativecommons.org/licenses/by/3.0/deed.en_US">
              License
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
