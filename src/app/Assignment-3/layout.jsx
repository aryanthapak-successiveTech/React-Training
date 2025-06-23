import SideBar from "@/app/Assignment-3/Components/SideBar";
import styles from "@/app/Assignment-3/styles/assignment-3.module.css";
import { LoginContextProvider } from "./context/LoginContext";
export default function RootLayout({ children }) {
  return (
    <div className={styles["root"]}>
      <LoginContextProvider>
        <SideBar />
        <main className={styles["content"]}>{children}</main>
      </LoginContextProvider>
    </div>
  );
}
