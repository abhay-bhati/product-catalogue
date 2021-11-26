import React, { useContext } from "react";
import "../styles/Analyze.css";
import { ModalContext } from "../store/modal-context";

function Analyze() {
  const ModalCtx = useContext(ModalContext);

  const modalHandler = () => {
    ModalCtx.setModalOpen(true);
  };

  return (
    <div className="analyze" onClick={modalHandler}>
      <p>ANALYSE</p>
    </div>
  );
}

export default Analyze;
