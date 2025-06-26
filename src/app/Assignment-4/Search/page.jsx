"use client";
import styles from "@/app/Assignment-2/Styles/Products.module.css";
import Items from "@/app/Assignment-2/Component/Items";
import Input from "@/Components/Input";
import { useState } from "react";

const ProductsArray = [
  {
    id: 1,
    name: "Laptop",
    desc: "Some Desc of Product 1",
    image: "/Laptop.jpeg",
    price: 200,
  },
  {
    id: 2,
    name: "Watch",
    desc: "Some Desc of Product 2",
    image: "/Watch.jpeg",
    price: 100,
  },
  {
    id: 3,
    name: "Mobile",
    desc: "Some Desc of Product 3",
    image: "/Mobile.jpeg",
    price: 150,
  },
  {
    id: 4,
    name: "Earphones",
    desc: "Some Desc of Product 4",
    image: "/Earphones.jpeg",
    price: 80,
  },
];

const SearchPage = () => {
  const [products, setProducts] = useState([...ProductsArray]);
  const searchHandler = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.trim().length === 0) {
      setProducts([...ProductsArray]);
      return;
    }

    console.log();
    setProducts(
      ProductsArray.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Input title="Search" type="text" onChangeHandler={searchHandler} />
      <div className={styles["products"]}>
        {products.map((product, idx) => (
          <Items
            key={idx}
            name={product.name}
            desc={product.desc}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
