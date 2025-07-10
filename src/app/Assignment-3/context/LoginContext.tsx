"use client"
import { createContext, ReactNode, useState } from "react";

export const LoginContext=createContext({
    isLoggedIn:false,
    loginUser:()=>{},
    logOutUser:()=>{}
});

export const LoginContextProvider=({children}:{children:ReactNode})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const loginUser=()=>{
        setIsLoggedIn(true);
    }

    const logOutUser=()=>{
        setIsLoggedIn(false);
    }
    return(
        <LoginContext.Provider  value={{isLoggedIn,loginUser,logOutUser}}>
            {children}
        </LoginContext.Provider>
    )

}