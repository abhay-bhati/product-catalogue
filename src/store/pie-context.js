import React, { useState } from "react";

export const PieContext = React.createContext();

function PieProvider(props) {
  const [isData, setIsData] = useState([]);

  const dataHandler = (val) => {
    setIsData(val);
  };

  const defValues = {
    data: isData,
    setData: dataHandler,
  };

  return (
    <PieContext.Provider value={defValues}>
      {props.children}
    </PieContext.Provider>
  );
}

export default PieProvider;
