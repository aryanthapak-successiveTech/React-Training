"use client";
import { useRouter } from "next/navigation";

const ProductsData = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
  
  
];

const Products = () => {
  const router = useRouter();
  return (
    <div className="items">
      {ProductsData.map((ele, idx) => (
        <div key={idx} >
          <h3>{ele.name}</h3>
          <button
            onClick={() => router.push(`/Assignment-3/Products/${ele.id}`)}
            className="subNavButton"
          >
            Check Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
