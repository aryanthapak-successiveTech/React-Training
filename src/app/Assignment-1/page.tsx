"use client"
import React from "react";
import Greeting from "./Component/Greeting";
import styles from "@/app/Assignment-1/page.module.css";
import { usePathname, useRouter } from "next/navigation";
const Assignment1 = () => {
  const pathname=usePathname();
  const router=useRouter();
  return (
    <div className={styles["main"]}>
      <h2>Question-1</h2>
      <Greeting />
      <h2>Question-2</h2>
      <button
        onClick={() => {
          router.push(`${pathname}/Users`);
        }}
      >
        Click Me
      </button>
      <h2>Question-3</h2>
      <button
        onClick={() => {
          router.push(`${pathname}/Weather`);
        }}
      >
        Click Me
      </button>
      <h2>Question-4</h2>
      <button
        onClick={() => {
          router.push(`${pathname}/Counter`);
        }}
      >
        Click Me
      </button>
      <h2>Question-5</h2>
      <button
        onClick={() => {
          router.push(`${pathname}/TaskList`);
        }}
      >
        Click Me
      </button>
      <h2>Question-6</h2>
      <button
        onClick={() => {
          router.push(`${pathname}/Button`);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Assignment1;
