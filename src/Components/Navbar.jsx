"use client";
import styles from "@/styles/Navbar.module.css";
import ToggleLanguageButton from "./ToggleLanguage";
import ToggleButton from "./ToggleTheme";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const pathName = ["Assignment-1", "Assignment-2", "Assignment-3"];
const Navbar = () => {
  const { totalCount } = useContext(CartContext);
  const router = useRouter();
  return (
    <div className={styles["buttons"]}>
      {pathName.map((el, idx) => (
        <button
          key={idx}
          onClick={() => {
            router.push(`/${el}`);
          }}
        >
          {el}
        </button>
      ))}
      <ToggleButton />
      <ToggleLanguageButton />
      <button
        onClick={() => {
          router.push(`/Assignment-2/Cart`);
        }}
      >
        Cart Items {totalCount}
      </button>
    </div>
  );
};

export default Navbar;