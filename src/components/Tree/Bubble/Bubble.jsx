import styles from './Bubble.module.css';

export const Bubble = ({ exercise, setSelectedExercise }) => {
  return (
   
    <div
      onClick={() => setSelectedExercise(exercise)}
      className={styles.bubble}
    >
      <p className={styles.bubbleName}>{exercise.keyWords}</p>
    </div>
  );
};
