import React from "react";
import styles from "@/app/Assignment-1/styles/button.module.css"

interface ButtonProps{
    text:string,
    color:string
}

const Button=(props:ButtonProps)=>{
    const {text,color}=props;
    return(
        <button className={styles[color]}>{text}</button>
    )
}

export default Button;