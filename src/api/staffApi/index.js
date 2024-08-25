import {
  CHANGE_PAGE,
  CREATE_STAFFS,
  DELETE_STAFFS,
  FETCH_STAFF_BEGIN,
  FETCH_STAFF_ERROR,
  FETCH_STAFF_SUCCESS,
} from "../../stores/action";
import { axiosInstance } from "../axiosConfig";
import { handleError, successHandler } from "../../utils/notiHandler";

export const fetchStaffs = async (dispatch, page, limit) => {
  try {
    dispatch({ type: FETCH_STAFF_BEGIN });

    // Tạo URL với các tham số query
    const params = new URLSearchParams();
    if (page) params.append("page", page);
    if (limit) params.append("limit", limit);

    const res = await axiosInstance.get(`/staff?${params.toString()}`);
    dispatch({ type: FETCH_STAFF_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_STAFF_ERROR, payload: error.message });
    handleError(error);
  }
};

export const createStaff = async (dispatch, formData) => {
  try {
    const res = await axiosInstance.post("/staff", formData);
    const newStaff = res.data.data;
    dispatch({ type: CREATE_STAFFS, payload: newStaff });
    successHandler("Staff is created successfully!");
  } catch (error) {
    handleError(error);
  }
};

export const deleteStaff = async (dispatch, id) => {
  try {
    await axiosInstance.delete(`/staff/${id}`);
    dispatch({ type: DELETE_STAFFS, payload: { id } });
    successHandler("Staff deleted successfully!");
  } catch (error) {
    handleError(error);
  }
};

export const getPage = (dispatch, page) => {
  dispatch({ type: CHANGE_PAGE, payload: page });
};
