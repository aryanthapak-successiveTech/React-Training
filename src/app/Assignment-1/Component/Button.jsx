import styles from "@/app/Assignment-1/styles/button.module.css"
const Button=(props)=>{
    const {text,color}=props;
    return(
        <button className={styles[color]}>{text}</button>
    )
}

export default Button;