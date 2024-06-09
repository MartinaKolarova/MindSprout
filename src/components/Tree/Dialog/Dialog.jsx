import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');
export const Dialog = ({ exercise, finishExercise, closeExercise }) => {
  return (
    <div>
      <Modal
        isOpen={exercise}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>{exercise?.keyWords}</div>
        <button onClick={finishExercise}>Relaxace ukončena</button>
        <button onClick={closeExercise}>X</button>
      </Modal>
    </div>
  );
};
