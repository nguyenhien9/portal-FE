import {
  CREATE_BOOKING,
  UPDATE_BOOKING,
  DELETE_BOOKING,
  FETCH_BOOKING_BEGIN,
  FETCH_BOOKING_SUCCESS,
  FETCH_BOOKING_ERROR,
  CHANGE_PAGE,
} from "./action";

const bookingReducer = (state, action) => {
  switch (action.type) {
    case FETCH_BOOKING_BEGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_BOOKING_SUCCESS:
      return {
        ...state,
        bookings: action.payload.data,
        totalPages: action.payload.totalPages,
        totalBookings: action.payload.totalBookings,
        limit: action.payload.limit,
        page: action.payload.page,
        isLoading: false,
        isError: false,
      };
    case FETCH_BOOKING_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CREATE_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case UPDATE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        ),
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default bookingReducer;
