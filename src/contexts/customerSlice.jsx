/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import reducer from "../stores/customerReducer";
const initialState = {
  customers: [],
  isLoading: false,
  isError: false,
  totalPages: null,
  totalStaffs: null,
  limit: null,
  page: null,
};

const CustomerContext = createContext();
export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CustomerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  return useContext(CustomerContext);
};
