"use client";
import { useState } from "react";
import OutlinedInput from "../Components/OutlinedInput";
import { validateEmail, validateName } from "@/lib/utils";

const ValidationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameIsWrong, setFirstNameIsWrong] = useState(false);

  const [lastNameIsWrong, setLastNameIsWrong] = useState(false);

  const [emailIsWrong, setEmailIsWrong] = useState(false);

  const inputFields = [
    {
      label: "First Name",
      isWrong: firstNameIsWrong,
      onChangeHandler: (event) => {
        setFirstNameIsWrong(false);
        if (!validateName(event.target.value)) {
          setFirstNameIsWrong(true);
        }
        setFirstName(event.target.value);
      },
    },
    {
      label: "Last Name",
      isWrong: lastNameIsWrong,
      onChangeHandler: (event) => {
        setLastNameIsWrong(false);
        if (!validateName(event.target.value)) {
          setLastNameIsWrong(true);
        }
        setLastName(event.target.value);
      },
    },
    {
      label: "Email",
      isWrong: emailIsWrong,
      onChangeHandler: (event) => {
        setEmailIsWrong(false);
        if (!validateEmail(email)) {
          setEmailIsWrong(true);
        }
        setEmail(event.target.value);
      },
    },
  ];

  return (
    <div>
      {inputFields.map((input, idx) => (
        <OutlinedInput
          key={idx}
          label={input.label}
          onChangeHandler={input.onChangeHandler}
          isWrong={input.isWrong}
        />
      ))}
    </div>
  );
};

export default ValidationForm;
