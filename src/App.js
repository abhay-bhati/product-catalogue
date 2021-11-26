import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import Analyze from "./components/Analyze";
import Modal from "./UI/Modal";
import { ModalContext } from "./store/modal-context";
import Backdrop from "./UI/Backdrop";

function App() {
  const ModalCtx = useContext(ModalContext);
  console.log(ModalCtx);

  const [chartData, setChartData] = useState([]);

  const chartHandler = (val) => {
    setChartData(val);
  };

  useEffect(() => {
    if (ModalCtx.modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [ModalCtx.modalOpen]);

  return (
    <div className="App">
      <Navbar />
      <AllProducts chart={chartHandler} />
      <Analyze />
      {ModalCtx.modalOpen && <Modal data={chartData} />}
      {ModalCtx.modalOpen && <Backdrop />}
    </div>
  );
}

export default App;
