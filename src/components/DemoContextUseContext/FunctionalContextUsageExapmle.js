import { useState, useContext, createContext } from "react";

export const Context = createContext();

export const FunctionalContextUsageExapmle = (props) => {

    const [user, setUser] = useState({
        initialState: {
            id: '',
            username: '',
        }
    })

    return (
        <Context.Provider value={[user, setUser]} >
            {props.children}
        </Context.Provider >
    )
}