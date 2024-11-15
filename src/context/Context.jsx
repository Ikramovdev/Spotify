import { createContext, useState } from "react";

export const Context = createContext()

export const UniContext = ({children}) => {
    const [accessToken,setaccessToken] = useState(null)
    return(
        <Context.Provider value={{accessToken,setaccessToken}}>{children}</Context.Provider>
    )
}