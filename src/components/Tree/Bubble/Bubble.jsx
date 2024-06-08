import styles from './Bubble.module.css';

export const Bubble = ({ exercise }) => {
  return (
    <div className={styles.bubbleMain}>
      <div className={styles.bubble}>
        <p className={styles.bubbleName}>{exercise.keyWords}</p>
        <button></button>
      </div>
    </div>
  );
};
