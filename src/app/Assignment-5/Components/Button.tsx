import styles from "@/app/Assignment-5/styles/button.module.css";
import { ReactNode } from "react";

interface ButtonInterface{
    children:ReactNode,
    onClickHandler:()=>void,
    type:string
}

const Button:React.FC<ButtonInterface>=({children,onClickHandler,type})=>{
    const buttonClass=`${styles[type]} ${styles["button"]}`;

    return(
        <button className={buttonClass} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;