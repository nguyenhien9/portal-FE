import { axiosInstance } from "../axiosConfig";
import {
  FETCH_SERVICES_BEGIN,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
  CREATE_SERVICES,
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
export const createService = async (dispatch, formData) => {
  try {
    const res = await axiosInstance.post("/service", formData);
    if (res.status === 201) {
      dispatch({ type: CREATE_SERVICES, payload: res.formData });
    }
  } catch (error) {
    console.error("Failed to create service:", error);
  }
};
