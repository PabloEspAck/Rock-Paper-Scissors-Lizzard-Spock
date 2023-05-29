import React from "react";
import modal from "../assets/images/image-rules-bonus.svg";
import close from "../assets/images/icon-close.svg";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="design-modal">
      <h1>RULES</h1>
      <img src={modal} alt="" />
      <button onClick={props.closeModal}>
        <img src={close} alt="" />
      </button>
    </div>
  );
};

export default Modal;
