"use client"
import Items from "../Component/Items";
import styles from "@/app/Assignment-2/Styles/Products.module.css";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
const ProductsArray = [
  {
    id:1,
    name: "Product 1",
    desc: "Some Desc of Product 1",
    image: "/image-1.jpeg",
    price: 200,
  },
  {
    id:2,
    name: "Product 2",
    desc: "Some Desc of Product 2",
    image: "/image-1.jpeg",
    price: 100,
  },
  {
    id:3,
    name: "Product 3",
    desc: "Some Desc of Product 3",
    image: "/image-1.jpeg",
    price: 150,
  },
  {
    id:4,
    name: "Product 4",
    desc: "Some Desc of Product 4",
    image: "/image-1.jpeg",
    price: 80,
  },
  
];

const Products = () => {
    const {items,price,addItem,removeItem}=useContext(CartContext);
    console.log(items)
    const onAddHandler=(id)=>{
        addItem(ProductsArray[id],id)
    }
  return (
    <div className={styles["products"]}>
     { ProductsArray.map((product,idx)=>
      <Items
        key={idx}
        name={product.name}
        desc={product.desc}
        image={product.image}
        price={product.price}
        addHandler={()=>onAddHandler(idx)}
      />
      )}
    </div>
  );
};

export default Products;
