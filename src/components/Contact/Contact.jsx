import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <>
      <div className={`${styles.contact} ${styles.linkaBezpeci}`}>
        <a href="https://www.linkabezpeci.cz/">Linka Bezpečí</a>
        <p>116 111</p>
      </div>
      <div className={`${styles.contact} ${styles.locika}`}>
        <a href="https://www.detstvibeznasili.cz/jsem-dite-nebo-teenager">
          Linka centra Locika pro děti ohrožené domácím násilím:
        </a>
        <p>734 441 233</p>
      </div>
      <div className={`${styles.contact} ${styles.krizoveCentrum}`}>
        <a href="https://www.ditekrize.cz/">
          Linka důvěry Dětského krizového centra:
          <p>777 715 215, 241 484 149</p>
        </a>
      </div>
      <div className={`${styles.contact} ${styles.profem}`}>
        <a href="https://www.profem.cz">
          Linka pro oběti domácího a sexuálního násilí PROFEM
          <p>608 222 277</p>
        </a>
      </div>
      <div className={`${styles.contact} ${styles.spondea}`}>
        <a href="https://www.spondea.cz/cz/kontakt">
          Centrum pro zneužívané a týrané děti Spondea:
        </a>
        <p>541 235 511, 608 118 088</p>
      </div>
      <a href="https://linkaztracenedite.cz/chat/">Linka Ztracené dítě</a>
      <p>chat</p>
      <div className={`${styles.contact} ${styles.ztraceneDite}`}></div>
    </>
  );
};
