//1.Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
//Import and render the Greeting component in the App component.

"use client";
import Greeting from "./Component/Greeting";
import styles from "@/app/page.module.css"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className={styles["main"]}>
      <h2>Question-1</h2>
      <Greeting />
      <h2>Question-2</h2>
      <button
        onClick={() => {
          router.push("Users");
        }}
      >
        Click Me
      </button>
      <h2>Question-3</h2>
      <button
        onClick={() => {
          router.push("Weather");
        }}
      >
        Click Me
      </button>
      <h2>Question-4</h2>
      <button
        onClick={() => {
          router.push("Counter");
        }}
      >
        Click Me
      </button>
      <h2>Question-5</h2>
      <button
        onClick={() => {
          router.push("TaskList");
        }}
      >
        Click Me
      </button>
      <h2>Question-6</h2>
      <button
        onClick={() => {
          router.push("Button");
        }}
      >
        Click Me
      </button>
    </div>
  );
}
