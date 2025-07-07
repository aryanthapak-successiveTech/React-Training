"use client";
import { useState } from "react";
import Button from "../Component/Button";
import React from "react";

const ButtonPage = () => {
  const [color, setColor] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("");
  const colorSelectHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setColor(event.target.value);
  };

  const buttonTextHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setButtonText(event.target.value);
  };


  return (
    <>
      <form>
        <label>Enter text for Button</label>
        <input type="text" required onChange={buttonTextHandler} />
        <input
          type="radio"
          name="colors"
          value="Red"
          onChange={colorSelectHandler}
          checked={color == "Red"}
        />
        <label>Red</label>
        <input
          type="radio"
          name="colors"
          value="Blue"
          onChange={colorSelectHandler}
          checked={color == "Blue"}
        />
        <label>Blue</label>
        <input
          type="radio"
          name="colors"
          value="Green"
          onChange={colorSelectHandler}
          checked={color == "Green"}
        />
        <label>Green</label>
      </form>
      {<Button text={buttonText} color={color} />}
    </>
  );
};

export default ButtonPage;
