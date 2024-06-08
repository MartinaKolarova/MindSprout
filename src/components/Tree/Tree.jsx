import { Bubble } from './Bubble/Bubble';
import styles from './Tree.module.css';
import { useState, useEffect } from 'react';

export const Tree = () => {
  const [phase, setPhase] = useState('stabilization');
  const [selected, setSelected] = useState(null);
  const [exercises, setExercises] = useState([]);

  const currentPhaseExercises = exercises.filter((exercise) => {
    return exercise.targetId === phase;
  });
  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch('/api/friends');
      const json = await response.json();
      setExercises(json);
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
