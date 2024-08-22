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
    console.log(res.data)
    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      payload: res.data
    });

  } catch (error) {
    dispatch({ type: FETCH_SERVICES_ERROR, payload: error.message });
    console.log("error", error.message)
  }
};
export const createService = async (dispatch, formData) => {
  try {
    const res = await axiosInstance.post("/service", formData);
    const newService = res.data.data;
    dispatch({ type: CREATE_SERVICES, payload: newService });
  } catch (error) {
    console.log("Failed to create service:", error);
  }
};
