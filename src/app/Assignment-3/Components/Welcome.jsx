"use client";
import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Input from "@/Components/Input";

const Welcome = () => {
  const { isLoggedIn, loginUser,logOutUser } = useContext(LoginContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserNameValid,setIsUserNameValid]=useState(true);
  const [isPasswordValid,setIsPasswordValid]=useState(true);
  const userNameChangeHandler = (event) => {
    logOutUser();
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    logOutUser();
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    setIsUserNameValid(true);
    setIsPasswordValid(true);

    if (userName.trim().length === 0 || !userName.match(/^[a-zA-Z]+$/)) {
        setIsUserNameValid(false);
      return;
    }
    if (password.length < 8) {
        setIsPasswordValid(false);
      return;
    }

    loginUser();
  };

  return (
    <div className="form">
      <Input
        title="Username"
        type="text"
        onChangeHandler={userNameChangeHandler}
        isRequired={true}
        
      />
      {!isUserNameValid && <p className="wrongInput">Enter a valid username without spaces</p>}
      <Input
        title="Password"
        type="password"
        onChangeHandler={passwordChangeHandler}
        isRequired={true}
      />
      {!isPasswordValid && <p className="wrongInput">Enter password of length 8 words or more</p>}
      <button className="button" onClick={loginHandler}>
        Login
      </button>
      {isLoggedIn ?
        <p>{`Welcome ${userName}`}</p>:<p>Please Login</p>
      }
      </div>
  );
};

export default Welcome;
