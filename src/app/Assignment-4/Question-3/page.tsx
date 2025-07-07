"use client"
import Input from "@/Components/Input";
import { useState } from "react";

const ShowInput=()=>{
    const [text,setText]=useState<string>("");
    const [showText,setShowText]=useState<boolean>(false);

    const textChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
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