import styles from "@/app/Assignment-5/styles/button.module.css";

const Button=({children,onClickHandler,type})=>{
    const buttonClass=`${styles[type]} ${styles["button"]}`;

    return(
        <button className={buttonClass} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;