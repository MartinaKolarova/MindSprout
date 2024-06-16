import styles from "./style.module.css";
import Link from "next/link";
import ReactCurvedText from "react-curved-text";

export const TreeNavigation = ({ onClick }) => {
  return (
    <div className={styles.choiceContainer}>
      <div className={styles.textContainer}>
<<<<<<< HEAD
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
=======
        <div className={styles.introduction}>
          <p className={styles.textFocusIn}>
            Tahle appka ti pomůže cítit se líp a naučit se řešit svoje problémy
            tak, aby tě příště nerozhodily
          </p>
        </div>
        <div className={styles.guidance}>
          <p className={styles.textFocusIn}>
            Vyber si oblast, kterou řešíš a projdi si tři kroky, díky kterým se
            nebudeš cítit líp jen ty, ale i strom, který nutně potřebuje pomoc.
          </p>
        </div>
>>>>>>> 55a159802f128e41ea6af221cb053ef594938cba
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
