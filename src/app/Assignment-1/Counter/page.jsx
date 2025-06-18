"use client";

import { useState } from "react";
import styles from "@/app/Assignment-1/styles/counter.module.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className={styles["counter"]}>
      <p>Count :{counter}</p>
      <div className={styles["spacebuttons"]}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
