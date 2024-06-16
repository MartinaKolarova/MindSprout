import styles from "./style.module.css";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";

export const TreeNavigation = ({ onClick }) => {
  return (
    <div className={styles.choiceContainer}>
      <div className={styles.textContainer}>
        <p className={styles.introduction}>
          Tahle appka ti pomůže cítit se líp a naučit se řešit svoje problémy
          tak, aby tě příště nerozhodily
        </p>
        <br></br>
        <br></br>
        <p className={styles.guidance}>
          Vyber si oblast, kterou řešíš a projdi si tři kroky, díky kterým se
          nebudeš cítit líp jen ty, ale i strom, který nutně potřebuje pomoc.
        </p>
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
