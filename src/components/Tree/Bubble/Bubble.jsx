import styles from './Bubble.module.css';

export const Bubble = () => {
  return (
    <div className={styles.bubbleMain}>
      <div className={styles.bubblesAll}>
        <div className={styles.bubble}>
          <p className={styles.bubbleName}></p>
          <button></button>
        </div>
        <div className={styles.bubble}>
          <p className={styles.bubbleName}></p>
          <button></button>
        </div>
        <div className={styles.bubble}>
          <p className={styles.bubbleName}></p>
          <button></button>
        </div>
      </div>
      <div>
        <button className={styles.moreHelp}></button>
        <button className={styles.share}></button>
      </div>
    </div>
  );
};
