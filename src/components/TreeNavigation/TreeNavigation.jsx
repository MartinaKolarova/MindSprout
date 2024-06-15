import styles from './style.module.css';
import Link from 'next/link';
import ReactCurvedText from 'react-curved-text';

export const TreeNavigation = ({ onClick }) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.textContainer}>
        <p className={styles.introduction}>
          Tahle appka ti pomůže cítit se líp a naučit se řešit svoje problémy
          tak, aby tě příště nerozhodily
        </p>
        <p className={styles.guidance}>
          Vyber si oblast, kterou řešíš a projdi si tři kroky, díky
          kterým se nebudeš cítit líp jen ty, ale i strom, který nutně
          potřebuje pomoc.
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.navButton} onClick={() => onClick(1)}>
          Problém s vrstevníky
        </button>
        <button className={styles.navButton} onClick={() => onClick(2)}>
          Problém s rodinou
        </button>
        <button className={styles.navButton} onClick={() => onClick(3)}>
          Problém ve škole
        </button>
      </div>
    </div>
  );
};
