import React from 'react';
import './modal.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;