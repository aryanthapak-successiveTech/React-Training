"use client";
import { useState } from "react";
import Button from "../Components/Button";

const ShowButtons = () => {
  const [isPrimaryClicked, setIsPrimaryClicked] = useState(false);
  const [isSecondaryClicked, setIsSecondaryClicked] = useState(false);
  const [isDangerClicked, setIsDangerClicked] = useState(false);

  const primaryClickHandler = () => {
    setIsSecondaryClicked(false);
    setIsPrimaryClicked(true);
    setIsDangerClicked(false);
  };

  const secondaryClickHandler = () => {
    setIsSecondaryClicked(true);
    setIsPrimaryClicked(false);
    setIsDangerClicked(false);
  };

  const dangerClickHandler = () => {
    setIsDangerClicked(true);
    setIsPrimaryClicked(false);
    setIsSecondaryClicked(false);
  };
  return (
    <div className="flex-col">
      <p>
        12. Create a reusable Button component that accepts props to apply
        different styles such as primary, secondary, and danger, along with
        click handlers. Demonstrate how to use this Button component within a
        sample Next.js application.
      </p>
      <Button type="primary" onClickHandler={primaryClickHandler}>
        Primary
      </Button>
      <Button type="secondary" onClickHandler={secondaryClickHandler}>
        Secondary
      </Button>
      <Button type="danger" onClickHandler={dangerClickHandler}>
        Danger
      </Button>
      {isPrimaryClicked && <p className="greenText">Primary is clicked</p>}
      {isSecondaryClicked && <p className="yellowText">Secondary is clicked</p>}
      {isDangerClicked && <p className="wrongInput">Danger is clicked</p>}
    </div>
  );
};

export default ShowButtons;
