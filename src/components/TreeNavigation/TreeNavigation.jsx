import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";

export const TreeNavigation = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.textContainer}>
        Tahle appka ti pomůže cítit se líp a naučit se řešit svoje problémy tak,
        aby tě příště nerozhodily. Vyber si oblast, která tě trápí a projdi si
        jednoduché kroky, díky kterým se nebudeš cítit líp jenom ty, ale i náš
        strom, který nutně potřebuje pomoc
      </div>
      <div className={styles.arrow}></div>
      <div className={styles.buttonsContainer}>
        <button className={styles.navButton}>Problém s vrstevníky</button>
        <button className={styles.navButton}>Problém s rodinou</button>
        <button className={styles.navButton}>Problém ve škole</button>
      </div>
    </div>
  );
};
