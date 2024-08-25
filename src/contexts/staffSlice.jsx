/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../stores/staffReducer";
const initialState = {
  staffs: [],
  isLoading: false,
  isError: false,
  totalPages: null,
  totalStaffs: null,
  limit: null,
  page: null,
};

const StaffContext = createContext({});

export const StaffProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StaffContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StaffContext.Provider>
  );
};

export const useStaffContext = () => {
  return useContext(StaffContext);
};
