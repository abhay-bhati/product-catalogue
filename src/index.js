import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CategoryProvider from "./store/category-context";
import ProductProvider from "./store/product-context";
import ModalProvider from "./store/modal-context";
import PieProvider from "./store/pie-context";

ReactDOM.render(
  <PieProvider>
    <ModalProvider>
      <ProductProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ProductProvider>
    </ModalProvider>
  </PieProvider>,
  document.getElementById("root")
);
