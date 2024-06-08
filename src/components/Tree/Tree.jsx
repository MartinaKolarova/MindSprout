import { Bubble } from "./Bubble/Bubble";
import styles from "./Tree.module.css";
import { useState, useEffect } from "react";

export const Tree = () => {
  const [phase, setPhase] = useState(1);
  const [selected, setSelected] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("");
      const json = await response.json();
      setExercises(json.data);
    };

    fetchExercises();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tree}></div>
      <div className={styles.bubbles}>
        <Bubble />
      </div>
    </div>
  );
};
