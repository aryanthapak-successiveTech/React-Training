"use client";

import { useRef, useState } from "react";
import OutlinedInput from "../Components/OutlinedInput";

const AddData = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  const [isLastNameValid, setIsLastNameValid] = useState(true);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [successful, setSuccessFul] = useState(false);

  const [error, setError] = useState(false);
  const submitHandler = async (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessFul(false);
    setError(false);
    setIsEmailValid(true);
    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    const firstName:string = firstNameRef.current?.value??"";
    const lastName:string = lastNameRef.current?.value??"";
    const email:string = emailRef.current?.value??"";

    if (firstName.length === 0 && !firstName.match(/^[a-zA-Z]+$/)) {
      setIsFirstNameValid(false);
      return;
    }

    if (lastName.length === 0 || !lastName.match(/^[a-zA-Z]+$/)) {
      setIsLastNameValid(false);
      return;
    }

    if (
      email.length === 0 &&
      !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z]+$/)
    ) {
      setIsEmailValid(false);
      return;
    }
    const data = {
      firstName,
      lastName,
      email,
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setError(true);
      return;
    }
    const parsedData = await res.json();

    console.log(parsedData);

    setSuccessFul(true);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <p className="text-center">
        {" "}
        Create a Component in Next.js that renders a form allowing the user to
        input data, such as a post title and content. On form submission, use
        Axios to send a POST request to a public API endpoint, submitting the
        user's input data. Handle success and error states appropriately in the
        UI.
      </p>
      <OutlinedInput
        ref={firstNameRef}
        type="text"
        label="First Name"
        isWrong={!isFirstNameValid}
      />
      {!isFirstNameValid && (
        <p className="wrongInput">Enter a valid First name</p>
      )}
      <OutlinedInput
        ref={lastNameRef}
        type="text"
        label="Last Name"
        isWrong={!isLastNameValid}
      />
      {!isLastNameValid && (
        <p className="wrongInput">Enter a valid Last name</p>
      )}
      <OutlinedInput ref={emailRef} label="Email" isWrong={!isEmailValid} type="email" />
      {!isEmailValid && <p className="wrongInput">Enter a valid email</p>}
      <button type="submit" className="button">Submit</button>
      {error && <p className="wrongInput">Something went wrong</p>}
      {successful && <p className="greenText">Data inserted successfully</p>}
    </form>
  );
};

export default AddData;
