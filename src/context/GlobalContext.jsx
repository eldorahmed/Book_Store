import { createContext, useReducer } from "react";

// Global kontekstni yaratish
export const globalContext = createContext();

// Reducer funksiyasini aniqlash
const changeState = (state, action) => {
        const {type, payload} = action
    switch (type) {
        
     
        default:
            return state;
    }
};

// GlobalContextProvider komponenti
export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(changeState, {
        user: null,
        books: [],
        isAuthReady: false,
    });

    return (
        <globalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </globalContext.Provider>
    );
};
