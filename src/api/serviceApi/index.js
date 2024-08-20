import { axiosInstance } from "../axiosConfig";
import {
  FETCH_SERVICES_BEGIN,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
} from "../../stores/action";

export const getAllServices = async (dispatch) => {
  try {
    dispatch({ type: FETCH_SERVICES_BEGIN });
    const res = await axiosInstance.get("/service");
    const { results, totalPages, totalServices, limit, page } = res.data;
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      payload: {
        results, // Danh sách dịch vụ
        totalPages,
        totalServices,
        limit,
        page,
      },
    });
  } catch (error) {
    dispatch({ type: FETCH_SERVICES_ERROR, payload: error.message });
  }
};
