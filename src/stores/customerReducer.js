import {
  FETCH_CUSTOMER_BEGIN,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_SERVICES_ERROR,
  CREATE_CUSTOMERS,
  UPDATE_CUSTOMERS,
  DELETE_CUSTOMERS,
  CHANGE_PAGE,
} from "./action";

const customerReducer = (state, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_BEGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: action.payload.data,
        totalPages: action.payload.totalPages,
        totalCustomers: action.payload.totalCustomers,
        limit: action.payload.limit,
        page: action.payload.page,
        isLoading: false,
        isError: false,
      };
    case FETCH_SERVICES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CREATE_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case UPDATE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id ? action.payload : customer
        ),
      };
    case DELETE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload.id
        ),
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
export default customerReducer;
