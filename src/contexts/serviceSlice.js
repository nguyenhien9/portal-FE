/* eslint-disable react/prop-types */
import { useContext, createContext, useReducer } from "react";
import reducer from "../stores/serviceReducer";
const initialState = {
    services: [],
    isLoading: false,
    isError: false
}

const ServiceContext = createContext(undefined);

export const ServiceProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <ServiceContext.Provider value={{ ...state, dispatch }}>
        {children}
    </ServiceContext.Provider>
}
export const useServiceContext = () => {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error("useServiceContext must be used within a ServiceProvider")
    }
    return context
}