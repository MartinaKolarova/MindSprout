import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.contactMain}>
      <div className={`${styles.contact} ${styles.linkaBezpeci}`}>
        <a href="https://www.linkabezpeci.cz/">Linka Bezpečí: </a>
        <br />
        <a className={styles.phone} href="tel:116 111">
          116 111
        </a>
      </div>

      <div className={`${styles.contact} ${styles.locika}`}>
        <a href="https://www.detstvibeznasili.cz/jsem-dite-nebo-teenager">
          Linka centra Locika pro děti ohrožené domácím násilím:
        </a>
        <br />
        <a className={styles.phone} href="tel:734 441 233">
          734 441 233
        </a>
      </div>
      <div className={`${styles.contact} ${styles.krizoveCentrum}`}>
        <a href="https://www.ditekrize.cz/">
          <br />
          Linka důvěry Dětského krizového centra:
        </a>
        <br />
        <a className={styles.phone} href="tel:777 715 215">
          777 715 215
        </a>
      </div>
      <div className={`${styles.contact} ${styles.profem}`}>
        <a href="https://www.profem.cz">
          <br />
          Linka pro oběti domácího a sexuálního násilí PROFEM:
        </a>
        <br />
        <a className={styles.phone} href="tel:608 222 277">
          608 222 277
        </a>
      </div>

      <div className={`${styles.contact} ${styles.spondea}`}>
        <a href="https://www.spondea.cz/cz/kontakt">
          Centrum pro zneužívané a týrané děti Spondea:
        </a>
        <br />
        <a className={styles.phone} href="tel:608 118 088">
          608 118 088
        </a>
      </div>
      <div className={`${styles.contact} ${styles.ztraceneDite}`}>
        <a href="https://linkaztracenedite.cz/chat/">
          Linka Ztracené dítě (chat)
        </a>
      </div>
    </div>
  );
};
