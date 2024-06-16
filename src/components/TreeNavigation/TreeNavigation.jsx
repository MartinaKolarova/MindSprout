import styles from "./style.module.css";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";

export const TreeNavigation = ({ onClick }) => {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.textContainer}>
        <div className={styles.introduction}>
          <p className={styles.smallTitle}>POJĎ</p>
          <p className={styles.bigTitle}>
            POSÍLIT<br></br>
            MYSL<br></br>A NAJÍT KLID<br></br>
          </p>
        </div>
        <div className={styles.guidance}>
          <p className={styles.guidanceText}>
            Vyber si oblast, kterou řešíš a projdi si tři kroky, díky kterým se
            nebudeš cítit líp jen ty, ale i strom, který nutně potřebuje pomoc.
          </p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.navButton} onClick={() => onClick(1)}>
          Vztahy s vrstevníky
        </button>
        <button className={styles.navButton} onClick={() => onClick(2)}>
          Vztahy v rodině
        </button>
        <button className={styles.navButton} onClick={() => onClick(3)}>
          Škola
        </button>
      </div>
    </div>
  );
};
