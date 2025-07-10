"use client";

import Input from "@/Components/Input";
import { validateEmail, validateName, validateNumber } from "@/lib/utils";
import { useState } from "react";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const submitHandler = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsEmailValid(true);
    setIsLastNameValid(true);
    setIsFirstNameValid(true);
    setIsPhoneValid(true);
    setPasswordMatch(true);
    setIsPasswordValid(true);

    if (!validateName(firstName)) {
      setIsFirstNameValid(false);
      return;
    }

    if (!validateName(lastName)) {
      setIsLastNameValid(false);
      return;
    }

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    if (!validateNumber(phone)) {
      setIsPhoneValid(false);
      return;
    }

    if (password.length < 8) {
      setIsPasswordValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        title="First Name"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
      />
      {!isFirstNameValid && (
        <p className="wrongInput">Type a valid first name</p>
      )}
      <Input
        title="Last Name"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
      />
      {!isLastNameValid && <p className="wrongInput">Type a valid last name</p>}
      <Input
        title="Email"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
      />
      {!isEmailValid && <p className="wrongInput">Type a valid email</p>}
      <Input
        title="Phone Number"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setPhone(event.target.value)}
      />
      {!isPhoneValid && <p className="wrongInput">Type a valid Number</p>}
      <Input
        title="Password"
        type="password"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
      />
      {!isPasswordValid && (
        <p className="wrongInput">Type a valid Password of length 8 at least</p>
      )}
      <Input
        title="Confirm Password"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
      />
      {!passwordMatch && (
        <p className="wrongInput">Confirm Password and Password don't match</p>
      )}

      <input type="submit" />
    </form>
  );
};

export default RegistrationForm;
