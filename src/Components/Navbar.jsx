"use client"
import styles from "@/styles/Navbar.module.css";
import ToggleLanguageButton from "./ToggleLanguage";
import ToggleButton from "./ToggleTheme";
import { useRouter } from "next/navigation";

const pathName = ["Assignment-1", "Assignment-2"];
const Navbar = () => {
  const router=useRouter();
  return (
    <div className={styles["buttons"]}>
      {pathName.map((el,idx) => (
        <button key={idx} onClick={()=>{
            router.push(`/${el}`)
        }}>{el}</button>
      ))}
      <ToggleButton />
      <ToggleLanguageButton />
    </div>
  );
};

export default Navbar;
