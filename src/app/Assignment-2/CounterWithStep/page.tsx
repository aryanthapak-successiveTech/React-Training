"use client";

import React, { useContext, useState } from "react";
import styles from "@/styles/counter.module.css";
import Input from "@/Components/Input";
import { LanguageContext } from "@/context/LanguageContext";
import { translator } from "../Translation";
import ToggleButton from "@/Components/ToggleTheme";
import ToggleLanguageButton from "@/Components/ToggleLanguage";
const CounterWithStep = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [stepIsValid, setStepIsValid] = useState(true);
    const {language}=useContext(LanguageContext);
    const translation=translator[language]
  const incrementHandler = () => {
    setCounter((prev) => prev + step);
  };

  const decrementHandler = () => {
    setCounter((prev) => prev - step);
  };

  const stepChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setStepIsValid(true);
    if (isNaN(Number(event.target.value))) {
      setStepIsValid(false);
      return;
    }
    setStep(Number(event.target.value));
  };

  return (
    <div className={styles["counter"]}>
      <p>{translation?translation["Count"]:"Count"} :{counter}</p>
      <Input
        type="Text"
        title={translation?translation["Enter_Steps"]:"Enter Steps"}
        onChangeHandler={stepChangeHandler}
      />
      {!stepIsValid && (
        <p className={styles["wrongInput"]}>{translation?translation["Wrong_input_entered"]:"Wrong input entered"}</p>
      )}
      <div className={styles["spacebuttons"]}>
        <button onClick={incrementHandler}>{translation?translation["Increment"]:"Increment"}</button>
        <button onClick={decrementHandler}>{translation?translation["Decrement"]:"Decrement"}</button>
      </div>
      <ToggleButton />
      <ToggleLanguageButton />
      
    </div>
  );
};

export default CounterWithStep;
