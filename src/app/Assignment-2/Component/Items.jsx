import styles from "@/app/Assignment-2/Styles/Items.module.css"
const Items=({name,desc,price,image,addHandler})=>{
    return(
        <div className={styles["item"]}>
            <img src={image} className={styles["productImage"]}/>
            <div className={styles["data"]}>
                <h3>Name :</h3>
                <p>{name}</p>
            </div>
            <div className={styles["data"]}>
                <h3>Description :</h3>
                <p>{desc}</p>
            </div>
            <div className={styles["data"]}>
                <h3>Price :</h3>
                <p>{price}.Rs</p>
            </div>
            <button className={styles["button"]} onClick={addHandler}>Add to Cart</button>
        </div>
    )
}

export default Items;