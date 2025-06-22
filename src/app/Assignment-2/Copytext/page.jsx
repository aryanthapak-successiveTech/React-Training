"use client"
import Input from "@/Components/Input";
import { useClipboard } from "../hooks/useClipboard";
import { useState } from "react";

const CopyText=()=>{
    const [text,setText]=useState("");
    const {isCopied,copy}=useClipboard();
    const textChangeHandler=(event)=>{
        setText(event.target.value);
    }
    console.log(isCopied)
    return(
        <div className="form">
            <Input title="Enter text to Copy" type="text" onChangeHandler={textChangeHandler}/>
            <button onClick={()=>copy(text)}>Copy Text</button>
            
            
        </div>
    )
}

export default CopyText;