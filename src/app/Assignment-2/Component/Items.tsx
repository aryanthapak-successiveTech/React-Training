import styles from "@/app/Assignment-2/Styles/Items.module.css"
import { translator } from "../Translation";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

interface ItemsInteface{
    name:string,
    desc:string,
    price:number,
    image:string,
    addHandler:()=>void
}


const Items:React.FC<ItemsInteface>=({name,desc,price,image,addHandler})=>{
    const {language}=useContext(LanguageContext);
    const translation=translator[language];
    return(
        <div className={styles["item"]}>
            <img src={image} className={styles["productImage"]}/>
            <div className={styles["data"]}>
                <h3>{translation?translation["Name"]:"Name"} :</h3>
                <p>{name}</p>
            </div>
            <div className={styles["data"]}>
                <h3>{translation?translation["Description"]:"Description"} :</h3>
                <p>{desc}</p>
            </div>
            <div className={styles["data"]}>
                <h3>{translation?translation["Price"]:"Price"} :</h3>
                <p>{price}.Rs</p>
            </div>
            <button className={styles["button"]} onClick={addHandler}>{translation?translation["Add_to_Cart"]:"Add to Cart"}</button>
        </div>
    )
}

export default Items;