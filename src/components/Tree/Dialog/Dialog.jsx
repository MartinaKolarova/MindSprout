import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./Dialog.module.css";
import classNames from "classnames";
import { crossbuttononclick } from "./dialog.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "90vh",
    width: "90vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

Modal.setAppElement("#__next");
export const Dialog = ({ exercise, finishExercise, closeExercise }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleRight = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <Modal
        isOpen={!!exercise}
        style={customStyles}
        contentLabel="Example Modal"
        className={classNames(styles.modalContent, styles.grit)}
      >
        <div className={styles.dialogcontainer}>
          {exercise?.content.audio ? (
            <audio controls>
              <source src={exercise.content.audio} type="audio/mpeg" />
              Váš prohlížeč nepodporuje tento audio soubor{" "}
            </audio>
          ) : (
            <h2 className={styles.exercisetitle}>{exercise?.keyWords}</h2>
          )}
          <button
            className={classNames(styles.crossbutton)}
            onClick={closeExercise}
          >
            <span></span>
            <span></span>
          </button>
          <div className={styles.textContent}>
            {exercise?.content.text[currentIndex]}
          </div>
          <div className={styles.bottomBar}>
            {currentIndex > 0 && exercise?.content.text !== "" ? (
              <button className={styles.leftArrow} onClick={handleLeft}>
                <span></span>
                <span></span>
              </button>
            ) : null}
            <button className={styles.finishbutton} onClick={finishExercise}>
              Mám hotovo
            </button>
            {currentIndex < exercise?.content.text.length - 1 &&
            exercise?.content.text !== "" ? (
              <button className={styles.rightArrow} onClick={handleRight}>
                <span></span>
                <span></span>
              </button>
            ) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};
