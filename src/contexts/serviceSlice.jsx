/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useReducer } from "react";
import reducer from "../stores/serviceReducer";

const initialState = {
  services: [],
  totalPages: null,
  totalServices: null,
  limit: null,
  page: null,
  isLoading: false,
  isError: false,
};

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ServiceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ServiceContext.Provider>
  );
};
export const useServiceContext = () => {
  return useContext(ServiceContext);
};
