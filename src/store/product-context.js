import React, { useState } from "react";

export const ProductContext = React.createContext();

function ProductProvider(props) {
  const [isResult, setIsResult] = useState("");

  const productFilterHandler = (val) => {
    setIsResult(val);
  };

  const defValues = {
    productresult: isResult,
    setProductResult: productFilterHandler,
  };

  return (
    <ProductContext.Provider value={defValues}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
