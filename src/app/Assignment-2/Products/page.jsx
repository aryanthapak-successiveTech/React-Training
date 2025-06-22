"use client";
import Items from "../Component/Items";
import styles from "@/app/Assignment-2/Styles/Products.module.css";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { translator } from "../Translation";
import { LanguageContext } from "@/context/LanguageContext";

const Products = () => {
  const { language } = useContext(LanguageContext);
  const translation=translator[language];

  const { addItem } = useContext(CartContext);
  const onAddHandler = (id) => {
    addItem(ProductsArray[id], id);
  };

  const ProductsArray = [
    {
      id: 1,
      name: translation?translation["Product_1"]:"Product 1",
      desc: translation?translation["Some_Desc_of_Product_1"]:"Some Desc of Product 1",
      image: "/image-1.jpeg",
      price: 200,
    },
    {
      id: 2,
      name: translation?translation["Product_2"]:"Product 2",
      desc: translation?translation["Some_Desc_of_Product_2"]:"Some Desc of Product 2",
      image: "/image-1.jpeg",
      price: 100,
    },
    {
      id: 3,
      name: translation?translation["Product_3"]:"Product 3",
      desc: translation?translation["Some_Desc_of_Product_3"]:"Some Desc of Product 3",
      image: "/image-1.jpeg",
      price: 150,
    },
    {
      id: 4,
      name: translation?translation["Product_4"]:"Product 4",
      desc: translation?translation["Some_Desc_of_Product_4"]:"Some Desc of Product 4",
      image: "/image-1.jpeg",
      price: 80,
    },
  ];

  return (
    <div>
      <div className={styles["products"]}>
        {ProductsArray.map((product, idx) => (
          <Items
            key={idx}
            name={product.name}
            desc={product.desc}
            image={product.image}
            price={product.price}
            addHandler={() => onAddHandler(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
