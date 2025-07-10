import SideBar from "@/app/Assignment-3/Components/SideBar";
import styles from "@/app/Assignment-3/styles/assignment-3.module.css";
import { LoginContextProvider } from "./context/LoginContext";
import { ReactNode } from "react";
export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <div className={styles["root"]}>
      <LoginContextProvider>
        <SideBar />
        <main className={styles["content"]}>{children}</main>
      </LoginContextProvider>
    </div>
  );
}
