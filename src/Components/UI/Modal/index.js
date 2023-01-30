import "./styles.css";
import React from "react";
import ReactDOM  from "react-dom";

const Backdrop = ({onClick}) => {
  return <div className="backdrop" onClick={onClick}/>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = ({ children,onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
