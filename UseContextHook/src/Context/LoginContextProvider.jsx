
import {createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({children})=>{
    const [userDetails, setUserDetails] = useState(true);

    return (
        <LoginContext.Provider value={userDetails}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider