"use client";

import { useReducer, useState } from "react";
import {
  informationPageState,
  informationReducer,
} from "../InformationReducer";
import Input from "@/Components/Input";

const InformationPage = () => {
  const [currentInformationState, dispatch] = useReducer(
    informationReducer,
    informationPageState
  );

  const [isBreakfastChecked, setIsBreakfastChecked] = useState(false);
  const [isLunchChecked, setIsLunchChecked] = useState(false);
  const [isFirstNameValid,setIsFirstNameValid]= useState(true);
  const [isLastNameValid,setIsLastNameValid]= useState(true);
  const [isEmailValid,setIsEmailValid]= useState(true);

  const breakFastChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsBreakfastChecked(isChecked);
    dispatch({ type: "food", payload: event.target.value, isChecked });
  };

  const lunchChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsLunchChecked(isChecked);
    dispatch({ type: "food", payload: event.target.value, isChecked });
  };

  const submitHandler = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    setIsEmailValid(true);
    if(!currentInformationState.firstName.match(/^[a-zA-Z]+$/)){
        setIsFirstNameValid(false);
        return;
    }

    if(!currentInformationState.lastName.match(/^[a-zA-Z]+$/)){
        setIsLastNameValid(false);
        return;
    }

    if(!currentInformationState.email.match(/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)){
        setIsEmailValid(false);
        return;
    }
    console.log(currentInformationState);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        title="First Name"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "firstname", payload: event.target.value })
        }
        isRequired={true}
      />
      {!isFirstNameValid && <p className="wrongInput">First name is invalid</p>}
      <Input
        title="Last Name"
        type="text"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "lastname", payload: event.target.value })
        }
        isRequired={true}
      />
      {!isLastNameValid && <p className="wrongInput">Last name is invalid</p>}
      <Input
        title="Email"
        type="email"
        onChangeHandler={(event:React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: "email", payload: event.target.value })
        }
        isRequired={true}
      />
      {!isEmailValid && <p className="wrongInput">Email is invalid</p>}
      <div>
        <p className="text-center">Gender</p>
        <input
          type="radio"
          name="gender"
          value="Male"
          onSelect={(event:React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "gender", payload: event.target.value })
          }
          
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onSelect={(event:React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "gender", payload: event.target.value })
          }
        />
        <label>Female</label>
      </div>
      <div>
        <p>Food Options</p>
        <input
          type="checkbox"
          name="food"
          value="Breakfast"
          checked={isBreakfastChecked}
          onChange={breakFastChangeHandler}
        />
        <label>Breakfast</label>

        <input
          type="checkbox"
          name="food"
          value="Lunch"
          checked={isLunchChecked}
          onChange={lunchChangeHandler}
        />
        <label>Lunch</label>
      </div>
      <input type="submit" />
    </form>
  );
};

export default InformationPage;
