"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext"; 
import styles from "@/app/Assignment-2/Styles/Cart.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { LanguageContext } from "@/context/LanguageContext";
import { translator } from "../Translation";
import React from "react";



const Cart = () => {
  const { items, price, addItem, removeItem } = useContext(CartContext);
  const {theme}=useContext(ThemeContext);
  const {language}=useContext(LanguageContext);
  const translation=translator[language];
  
  const router=useRouter();
  return (
    <div className={`${styles[theme]} ${styles.cartContainer}`}>
      <h2>{translation?translation["Your_Cart"]:"Your Cart"}</h2>
      {items.length === 0 ? (
        <p>{translation?translation["Empty_Cart"]:"Your cart is empty."}</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemDetails}>
                {item.name} - ${item.price}{" "}
                <span className={styles.itemCount}>x {item.count}</span>
              </div>
              <div className={styles.buttonGroup}>
                <button onClick={() => addItem(item)}>+</button>
                <button onClick={() => removeItem(item.id)}>-</button>
              </div>
            </div>
          ))}
          <div className={styles.cartFooter}>Total: ${price.toFixed(2)}</div>
        </>
      )}

      <button onClick={()=>{router.push("/Assignment-2/Products")}} className={styles["backButton"]}>Back To Products</button>
    </div>
  );
};

export default Cart;
