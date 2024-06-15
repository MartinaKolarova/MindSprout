import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import styles from './Dialog.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '90vh',
    width: '90vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

Modal.setAppElement('#__next');
export const Dialog = ({ exercise, finishExercise, closeExercise }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleRight = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className={styles.mainDialog}>
      <Modal
        isOpen={!!exercise}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.dialogcontainer}>
          {exercise?.content.audio ? (
            <audio controls>
              <source src={exercise.content.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <div className={styles.exercisetitle}>{exercise?.keyWords}</div>
          )}
          <button className={styles.crossbutton} onClick={closeExercise}>
            X
          </button>
          <div className={styles.textContent}>
            {exercise?.content.text[currentIndex]}
          </div>
          <div className={styles.bottomBar}>
            {currentIndex > 0 && exercise?.content.text !== '' ? (
              <button className={styles.leftArrow} onClick={handleLeft}>
                left
              </button>
            ) : null}
            <button className={styles.finishbutton} onClick={finishExercise}>
              Relaxace ukončena
            </button>
            {currentIndex < exercise?.content.text.length - 1 &&
            exercise?.content.text !== '' ? (
              <button className={styles.rightArrow} onClick={handleRight}>
                right
              </button>
            ) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};
