"use client"
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

const HtmlWrapper=({children})=>{
    const {language}=useContext(LanguageContext);
    
    return(
        <html lang={`${language}`}>
            {children}
        </html>
    )
};

export default HtmlWrapper;