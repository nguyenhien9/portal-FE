import { axiosInstance } from "../axiosConfig";
import { handleError, successHandler } from "../../utils/notiHandler";
import {
  FETCH_SERVICES_BEGIN,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
  CREATE_SERVICES,
  CHANGE_PAGE,
  DELETE_SERVICES,
} from "../../stores/action";

export const getAllServices = async (dispatch, page, limit) => {
  try {
    dispatch({ type: FETCH_SERVICES_BEGIN });
    const res = await axiosInstance.get("/service", {
      params: {
        page,
        limit,
      },
    });

    dispatch({
      type: FETCH_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SERVICES_ERROR, payload: error.message });
  }
};
export const createService = async (dispatch, formData) => {
  try {
    const res = await axiosInstance.post("/service", formData);
    const newService = res.data.data;

    dispatch({ type: CREATE_SERVICES, payload: newService });
    successHandler("Service created successfully!");
  } catch (error) {
    handleError(error);
  }
};

export const deleteService = async (dispatch, id) => {
  try {
    await axiosInstance.delete(`/service/${id}`);
    dispatch({ type: DELETE_SERVICES, payload: { id } });
  } catch (error) {
    handleError(error);
  }
};

export const getPage = (dispatch, pagination) => {
  dispatch({ type: CHANGE_PAGE, payload: pagination });
};
