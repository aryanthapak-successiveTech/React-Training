import Sidebar from "./Components/Sidebar";
import styles from "@/app/Assignment-3/styles/assignment-3.module.css";
export default function RootLayout({ children }) {
  return (
    <div className={styles["root"]}>
      <Sidebar />
      <main className={styles["content"]}>{children}</main>
    </div>
  );
}
