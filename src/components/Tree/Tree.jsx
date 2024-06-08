import { Bubble } from './Bubble/Bubble';
import styles from './Tree.module.css';

export const Tree = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.tree}></div>
      <div className={styles.bubbles}>
        <Bubble />
      </div>
    </div>
  );
};
