"use client"
import Input from "@/Components/Input";
import { useState } from "react";

const ControlledInputPage = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const onEmailChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailValid(true);
    const enteredEmail = event.target.value;
    setEmail(event.target.value);
    if (!enteredEmail.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
      setIsEmailValid(false);
      return;
    }
  };
  return (
    <div>
      <Input
        type="email"
        title="Enter an Email"
        onChangeHandler={onEmailChangeHandler}
        value={email}
        isRequired={true}
      />
      {!isEmailValid && <p className="wrongInput text-center">Enter a valid email</p>}
    </div>
  );
};

export default ControlledInputPage;
