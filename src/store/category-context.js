import React, { useState } from "react";

export const CategoryContext = React.createContext();

function CategoryProvider(props) {
  const [isResult, setIsResult] = useState("");

  const categoryFilterHandler = (val) => {
    setIsResult(val);
  };

  const defValues = {
    categoryresult: isResult,
    setCategoryResult: categoryFilterHandler,
  };

  return (
    <CategoryContext.Provider value={defValues}>
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
