import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <h1>Check Out!</h1>
          <p onClick={closeModal} className="close">
            &times;
          </p>
        </div>
        <div className="middle-section">
          <h3>Check the Projects!</h3>
          <p>I am currently learning react!</p>
          <p>So you can check out the cool projects on github</p>
        </div>
        <div className="lower-section">
          <a onClick={closeModal} className="modal-btn btn-red">
            Close
          </a>
          <a
            href="https://github.com/ritesh423"
            target="_blank"
            rel="noreferrer"
            className="modal-btn btn-green"
          >
            Check Out
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
