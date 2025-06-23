"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductsData = [
  {
    id: 1,
    name: "Product 1",
    desc: "Description of Product list item Product 1",
    price: 800,
    image: "/image-1.jpeg",
  },
  {
    id: 2,
    name: "Product 2",
    desc: "Description of Product list item Product 2",
    price: 500,
    image: "/image-2.jpeg",
  },
  {
    id: 3,
    name: "Product 3",
    desc: "Description of Product list item Product 3",
    price: 1400,
    image: "/image-3.jpeg",
  },
  {
    id: 4,
    name: "Product 4",
    desc: "Description of Product list item Product 4",
    price: 900,
    image: "/image-4.jpeg",
  },
];

const ProductDetails = () => {
  const router = useRouter();
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productIdx = ProductsData.findIndex(
      (prod) => prod.id === Number(productID)
    );
    if (productIdx !== -1) {
      setProduct(ProductsData[productIdx]);
    }
  }, [productID]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Image src={product.image} alt={product.name} width={300} height={200} />
      <h2>Name: {product.name}</h2>
      <p>Description: {product.desc}</p>
      <p>Price: {product.price} Rs</p>
      <button
        onClick={() => router.push("/Assignment-3/Products")}
        className="button"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
