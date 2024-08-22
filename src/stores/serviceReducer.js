import {
  FETCH_SERVICES_BEGIN,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_ERROR,
  CREATE_SERVICES,
  UPDATE_SERVICES,
  DELETE_SERVICES,
} from "./action";

const serviceReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SERVICES_BEGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload.services,
        totalPages: action.payload.totalPages,
        totalServices: action.payload.totalServices,
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

    case CREATE_SERVICES:
      return {
        ...state,
        services: [...state.services, action.payload],
      };

    case UPDATE_SERVICES:
      return {
        ...state,
        services: state.services.map((service) =>
          service.id === action.payload.id ? action.payload : service
        ),
      };
    case DELETE_SERVICES:
      return {
        ...state,
        services: state.services.filter(
          (service) => service.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default serviceReducer;
