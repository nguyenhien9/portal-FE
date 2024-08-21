import { OPEN_MODAL, CLOSE_MODAL } from "./action";

const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
export default modalReducer;
