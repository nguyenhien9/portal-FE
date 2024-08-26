import {
  FETCH_CUSTOMER_BEGIN,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_ERROR,
  CREATE_CUSTOMERS,
  UPDATE_CUSTOMERS,
  DELETE_CUSTOMERS,
  CHANGE_PAGE,
} from "../../stores/action";
import { axiosInstance } from "../axiosConfig";
import { handleError, successHandler } from "../../utils/notiHandler";

export const fetchCustomers = async (dispatch, page, limit) => {
  try {
    dispatch({ type: FETCH_CUSTOMER_BEGIN });
    const res = await axiosInstance.get("/customer", {
      params: {
        page,
        limit,
      },
    });
    dispatch({ type: FETCH_CUSTOMER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_CUSTOMER_ERROR, payload: error.message });
    handleError(error);
  }
};
