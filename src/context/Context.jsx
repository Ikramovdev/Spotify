import { createContext, useState } from "react";

export const Context = createContext()

export const UniContext = ({children}) => {
    const [accessToken,setaccessToken] = useState(null)
    const [play,setPlay] = useState([])
    const [playing,setPlaying] = useState(false)
    return(
        <Context.Provider value={{accessToken,setaccessToken,play,setPlay,playing,setPlaying}}>{children}</Context.Provider>
    )
}