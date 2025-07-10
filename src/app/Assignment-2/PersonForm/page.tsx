"use client";

import Input from "@/Components/Input";
import { useContext, useState } from "react";
import styles from "@/app/Assignment-2/Styles/PersonForm.module.css";
import PersonDetails from "../Component/PersonDetails";
import { translator } from "../Translation";
import { LanguageContext } from "@/context/LanguageContext";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [ageIsValid, setAgeIsValid] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const {language}=useContext(LanguageContext);
  const translation=translator[language];

  const firstNameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setShowDetails(false);
    event.preventDefault();
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setShowDetails(false);
    event.preventDefault();
    setLastName(event.target.value);
  };

  const ageChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setShowDetails(false);
    event.preventDefault();

    setAge(Number(event.target.value));
  };

  const onSubmitHandler = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFirstNameIsValid(true);
    setLastNameIsValid(true);
    setAgeIsValid(true);
    setShowDetails(false);
    if (firstName.trim().length === 0 || !firstName.match(/^[A-Za-z]+$/)) {
      setFirstNameIsValid(false);
      return;
    }

    if (firstName.trim().length === 0 || !lastName.match(/^[A-Za-z]+$/)) {
      setLastNameIsValid(false);
      return;
    }

    if (firstName.trim().length === 0 || isNaN(age) || age < 0.5 || age > 100) {
      setAgeIsValid(false);
      return;
    }

    setShowDetails(true);
  };

  const fields = [
    {
      title: translation?translation["First_Name"]:"First Name",
      isRequired: true,
      type: "Text",
      onChangeHandler: firstNameChangeHandler,
    },
    {
      title: translation?translation["Last_Name"]:"Last Name",
      isRequired: true,
      type: "Text",
      onChangeHandler: lastNameChangeHandler,
    },
    {
      title: translation?translation["Age"]:"Age",
      isRequired: true,
      type: "Text",
      onChangeHandler: ageChangeHandler,
    },
  ];

  return (
    <form className={styles["formFields"]} onSubmit={onSubmitHandler}>
      {fields.map((el, idx) => (
        <Input
          key={idx}
          title={el.title}
          type={el.type}
          isRequired={el.isRequired}
          onChangeHandler={el.onChangeHandler}
        />
      ))}
      {!firstNameIsValid && (
        <p className={styles["wrongInput"]}>{translation?translation["First_Name_is_invalid"]:"First Name is invalid"}</p>
      )}
      {!lastNameIsValid && (
        <p className={styles["wrongInput"]}>{translation?translation["Last_Name_is_invalid"]:"Last Name is invalid"}</p>
      )}
      {!ageIsValid && (
        <p className={styles["wrongInput"]}>
          {translation?translation["Age_invalid"]:"Enter a valid age between 0.5 and 100"}
        </p>
      )}
      <input type="submit" className={styles["submitButton"]} />
      {showDetails && (
        <PersonDetails firstName={firstName} lastName={lastName} age={age} />
      )}
    </form>
  );
};

export default PersonForm;
