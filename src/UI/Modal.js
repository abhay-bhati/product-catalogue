import React, { useContext, useEffect, useState } from "react";
import "../styles/Modal.css";
import { Doughnut, Pie } from "react-chartjs-2";
import { ModalContext } from "../store/modal-context";

function Modal(props) {
  console.log(props);
  let labels;
  let pieData = [];

  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState([]);

  const ModalCtx = useContext(ModalContext);
  console.log(ModalCtx);

  const modalCloseHandler = () => {
    console.log("modal close");
    ModalCtx.setModalOpen(false);
  };

  return (
    <div className="modal">
      {isLoading && <p style={{ textAlign: "center" }}>Chart Loading...</p>}
      {!isLoading && (
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
      )}
      <div className="modal__cross" onClick={modalCloseHandler}>
        X
      </div>
    </div>
  );
}

export default Modal;
