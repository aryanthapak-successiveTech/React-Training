"use client"
import { LanguageContext } from "@/context/LanguageContext";
import { ReactNode, useContext } from "react";

const HtmlWrapper=({children}:{children:ReactNode})=>{
    const {language}=useContext(LanguageContext);
    
    return(
        <html lang={`${language}`}>
            {children}
        </html>
    )
};

export default HtmlWrapper;