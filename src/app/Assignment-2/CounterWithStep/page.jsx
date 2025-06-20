"use client";

import { useState } from "react";
import styles from "@/styles/counter.module.css";
import Input from "@/Components/Input";
const CounterWithStep = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [stepIsValid, setStepIsValid] = useState(true);
  const incrementHandler = () => {
    setCounter((prev) => prev + step);
  };

  const decrementHandler = () => {
    setCounter((prev) => prev - step);
  };

  const stepChangeHandler = (event) => {
    setStepIsValid(true);
    if (isNaN(event.target.value)) {
      setStepIsValid(false);
      return;
    }
    setStep(Number(event.target.value));
  };

  return (
    <div className={styles["counter"]}>
      <p>Count :{counter}</p>
      <Input
        type="Text"
        title="Enter Steps"
        onChangeHandler={stepChangeHandler}
      />
      {!stepIsValid && (
        <p className={styles["wrongInput"]}>Wrong input entered</p>
      )}
      <div className={styles["spacebuttons"]}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterWithStep;
