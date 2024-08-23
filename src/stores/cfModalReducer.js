import { OPEN_CONFIRM_MODAL, CLOSE_CONFIRM_MODAL } from "./action"

const cfModalReducer = (state, action) => {
    switch (action.type) {
        case OPEN_CONFIRM_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_CONFIRM_MODAL:
            return {
                ...state,
                isOpen: false
            }

        default:
            return state;
    }
}
export default cfModalReducer;