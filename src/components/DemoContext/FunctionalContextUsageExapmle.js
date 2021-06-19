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
        //vajno: podawam user i serUser nadolu na vischko componenti, kojto e m/u Context.Provider tagovete!!!!
        //na praktika ot tuk nadolu, vsichki componenti prez state imat dostyp do user i setUser!!!!
        <Context.Provider value={[user, setUser]} >
            {props.children}
        </Context.Provider >
    )
}