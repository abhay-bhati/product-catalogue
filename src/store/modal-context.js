import React, { useState } from "react";

export const ModalContext = React.createContext();

function ModalProvider(props) {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = (val) => {
    setIsModal(val);
  };

  const defValues = {
    modalOpen: isModal,
    setModalOpen: modalHandler,
  };

  return (
    <ModalContext.Provider value={defValues}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
