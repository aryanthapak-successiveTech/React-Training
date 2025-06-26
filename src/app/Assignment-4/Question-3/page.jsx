"use client"
import Input from "@/Components/Input";
import { useState } from "react";

const ShowInput=()=>{
    const [text,setText]=useState("");
    const [showText,setShowText]=useState(false);

    const textChangeHandler=(event)=>{
        setText(event.target.value);
    }

    const showHandler=()=>{
        if(text==="show"){
            setShowText(true);
            return;
        }

        setShowText(false);
    }

    return(
        <div className="form">
            <Input title="Enter a word(show)" type="text" onChangeHandler={textChangeHandler}/>
            <button onClick={showHandler}>Submit</button>
            {showText && "Woah you found the secret"}
        </div>
    )
}

export default ShowInput;