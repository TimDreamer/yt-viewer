import React from "react";
import ReactDOM from "react-dom";
import style from "../sass/components/_modal.module.scss";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className={`${style.modal__backdrop} ${
        props.showModal ? "" : style.hidden
      }`}
      onClick={() => props.closeModalAction()}
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${props.bgImg})`,
        }}
      >
        {props.children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
