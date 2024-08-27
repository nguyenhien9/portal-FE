import {
  CREATE_BOOKING,
  FETCH_BOOKING_BEGIN,
  FETCH_BOOKING_ERROR,
  FETCH_BOOKING_SUCCESS,
} from "../../stores/action";
import { handleError, successHandler } from "../../utils/notiHandler";
import { axiosInstance } from "../axiosConfig";

export const fetchBookings = async (dispatch, page, limit) => {
  try {
    dispatch({ type: FETCH_BOOKING_BEGIN });
    const res = await axiosInstance.get("/bookings", {
      params: {
        page,
        limit,
      },
    });
    dispatch({ type: FETCH_BOOKING_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_BOOKING_ERROR, payload: error.message });
    handleError(error);
  }
};
export const createBookings = async (dispatch, data) => {
  try {
    const res = await axiosInstance.post("/bookings", data);
    const newBooking = res.data.data;
    dispatch({ type: CREATE_BOOKING, payload: newBooking });
    if (res.status === 201) {
      successHandler("Create booking successfully!");
    }
  } catch (error) {
    handleError(error);
  }
};
