"use client";
import { useState } from "react";
import OutlinedInput from "../Components/OutlinedInput";
import { validateEmail, validateName } from "@/lib/utils";

const ValidationForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [firstNameIsWrong, setFirstNameIsWrong] = useState<boolean>(false);

  const [lastNameIsWrong, setLastNameIsWrong] = useState<boolean>(false);

  const [emailIsWrong, setEmailIsWrong] = useState<boolean>(false);

  const inputFields = [
    {
      label: "First Name",
      isWrong: firstNameIsWrong,
      onChangeHandler: (event:React.ChangeEvent<HTMLInputElement>) => {
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
      onChangeHandler: (event:React.ChangeEvent<HTMLInputElement>) => {
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
      onChangeHandler: (event:React.ChangeEvent<HTMLInputElement>) => {
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
          type="string"
          isWrong={input.isWrong}
        />
      ))}
    </div>
  );
};

export default ValidationForm;
