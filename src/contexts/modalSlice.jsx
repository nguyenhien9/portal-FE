/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../stores/modalReducer";
const initialState = {
  isModalOpen: false,
};

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <ModalContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
