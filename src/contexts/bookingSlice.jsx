/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../stores/bookingReducer";
const initialState = {
  bookings: [],
  isLoading: false,
  isError: false,
  totalPages: null,
  totalBookings: null,
  limit: null,
  page: null,
};

const BookingContext = createContext({});

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useBookingContext = () => {
  return useContext(BookingContext);
};
