import React, { useContext } from "react";
import "../styles/Modal.css";
import { Pie } from "react-chartjs-2";
import { ModalContext } from "../store/modal-context";

function Modal(props) {
  const ModalCtx = useContext(ModalContext);

  const modalCloseHandler = () => {
    ModalCtx.setModalOpen(false);
  };

  return (
    <div className="modal">
      <Pie
        className="modal__doughnut"
        data={{
          labels: [
            "electronics",
            "men's clothing",
            "women's clothing",
            "jewelry",
          ],
          datasets: [
            {
              label: "no. of products",
              data: props.data,
              backgroundColor: ["red", "blue", "green", "yellow"],
            },
          ],
        }}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
      <div className="modal__cross" onClick={modalCloseHandler}>
        X
      </div>
    </div>
  );
}

export default Modal;
