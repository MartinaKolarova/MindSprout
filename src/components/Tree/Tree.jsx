import { Bubble } from "./Bubble/Bubble";
import styles from "./Tree.module.css";
import { useState, useEffect } from "react";

export const Tree = ({ category }) => {
  const [phase, setPhase] = useState("stabilization");
  const [selected, setSelected] = useState(null);
  const [exercises, setExercises] = useState([]);

  const currentPhaseExercises = exercises.filter((exercise) => {
    return exercise.targetId === phase;
  });

  useEffect(() => {
    if (category === 1) {
      const fetchExercises = async () => {
        const response = await fetch("/api/friends");
        const json = await response.json();
        setExercises(json);
      };

      fetchExercises();
    }
  }, [category]);

  if (category === null) {
    return null;
  }

  return (
    <div id="tree" className={styles.mainContainer}>
      {category === 1 ? (
        <>
          <div className={styles.tree}></div>
          <div className={styles.bubbles}>
            <Bubble />
          </div>
        </>
      ) : (
        <p className={styles.apology}>
          Omlouváme se, na obsahu se dále pracuje.
        </p>
      )}
    </div>
  );
};
