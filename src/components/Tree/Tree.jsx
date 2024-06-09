import { Bubble } from './Bubble/Bubble';
import { Dialog } from './Dialog/Dialog';
import styles from './Tree.module.css';
import { useState, useEffect } from 'react';

export const Tree = ({ category }) => {
  const [phase, setPhase] = useState('stabilization');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exercises, setExercises] = useState([]);

  const currentPhaseExercises = exercises.filter((exercise) => {
    return exercise.targetId === phase;
  });

  const getRandomSubset = (arr, size) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  const subset = getRandomSubset(currentPhaseExercises, 3);

  useEffect(() => {
    if (category === 1) {
      const fetchExercises = async () => {
        const response = await fetch('/api/friends');
        const json = await response.json();
        setExercises(json);
      };

      fetchExercises();
    }
  }, [category]);

  const handleFinishExercise = () => {
    if (phase === 'stabilization') {
      setPhase('selfperception');
    } else if (phase === 'selfperception') {
      setPhase('problemsolving');
    } else if (phase === 'problemsolving') {
      setPhase('userHasFinished');
    }
    setSelectedExercise(null);
  };

  if (category === null) {
    return null;
  } else if (category !== 1) {
    return (
      <p className={styles.apology}>Omlouváme se, na obsahu se dále pracuje.</p>
    );
  }

  const handleCloseExercise = () => {
    setSelectedExercise(null);
  };

  return (
    <div className={styles.mainContainer}>
      {phase === 'userHasFinished' ? (
        <>
          <div>
            <p>Ahoj</p>
            <button></button>
          </div>
          <div>
            <p></p>
            <button></button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.tree}></div>
          <div className={styles.bubbles}>
            {subset.map((exercise) => (
              <Bubble
                setSelectedExercise={setSelectedExercise}
                exercise={exercise}
                key={exercise.id}
              />
            ))}
          </div>
        </>
      )}
      <Dialog
        exercise={selectedExercise}
        closeExercise={handleCloseExercise}
        finishExercise={handleFinishExercise}
      />
    </div>
  );
};
