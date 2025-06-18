//1.Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
//Import and render the Greeting component in the App component.

"use client";

import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className={styles["main"]}>
      <h2>Assingnment-1</h2>
      <button
        onClick={() => {
          router.push("Assignment-1");
        }}
      >
        Click me
      </button>
    </div>
  );
}
