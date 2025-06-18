"use client";
import { useState } from "react";
import Button from "../Component/Button";

const ButtonPage = () => {
  const [color, setColor] = useState("");
  const [buttonText, setButtonText] = useState("");
  const colorSelectHandler = (event) => {
    setColor(event.target.value);
  };

  const buttonTextHandler = (event) => {
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
