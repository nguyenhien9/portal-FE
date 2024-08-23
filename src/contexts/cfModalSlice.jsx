/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../stores/cfModalReducer"
import { CLOSE_CONFIRM_MODAL, OPEN_CONFIRM_MODAL } from "../stores/action";
const initialState = {
    isOpen: false
}


const CfModalContext = createContext({});

export const CfModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const openCfModal = () => {
        dispatch({ type: OPEN_CONFIRM_MODAL })
    }

    const closeCfModal = () => {
        dispatch({ type: CLOSE_CONFIRM_MODAL })
    }
    return <CfModalContext.Provider value={{ ...state, openCfModal, closeCfModal }}>
        {children}
    </CfModalContext.Provider>
}

export const useCfModalContext = () => {
    return useContext(CfModalContext)
}