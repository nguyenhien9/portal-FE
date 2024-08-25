import {
  FETCH_STAFF_BEGIN,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_ERROR,
  CREATE_STAFFS,
  UPDATE_STAFFS,
  DELETE_STAFFS,
  CHANGE_PAGE,
} from "./action";

const staffReducer = (state, action) => {
  switch (action.type) {
    case FETCH_STAFF_BEGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_STAFF_SUCCESS:
      return {
        ...state,
        staffs: action.payload.data,

        totalPages: action.payload.totalPages,
        totalStaffs: action.payload.totalStaffs,
        limit: action.payload.limit,
        page: action.payload.page,
        isLoading: false,
        isError: false,
      };
    case FETCH_STAFF_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CREATE_STAFFS:
      return {
        ...state,
        staffs: [...state.staffs, action.payload],
      };
    case UPDATE_STAFFS:
      return {
        ...state,
        staffs: state.staffs.map((staff) => {
          return staff.id === action.payload.id ? action.payload : staff;
        }),
      };
    case DELETE_STAFFS:
      return {
        ...state,
        staffs: state.staffs.filter((staff) => {
          return staff.id !== action.payload.id;
        }),
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
export default staffReducer;
