"use client";
import Input from "@/Components/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isWrongDetails, setIsWrongDetails] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus);
    if (loginStatus) {
      router.push("/Assignment-6/Question-1");
    }
  }, [router]);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onLoginHandler = (event) => {
    event.preventDefault();
    setIsWrongDetails(false);
    setIsUserNameValid(true);
    setIsPasswordValid(true);

    if (!userName.match(/^[a-zA-Z]+$/)) {
      setIsUserNameValid(false);
      return;
    }

    if (password.trim().length < 8) {
      setIsPasswordValid(false);
      return;
    }

    if (userName !== "AryanThapak" && password !== "Aryan@@@") {
      setIsWrongDetails(true);
      return;
    }

    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    router.push("/Assignment-6/Question-1");
  };

  return (
    <form className="form" onSubmit={onLoginHandler}>
      <Input
        title="Username"
        type="text"
        isRequired={true}
        name="username"
        onChangeHandler={userNameChangeHandler}
      />
      {!isUserNameValid && <p className="wrongInput">Enter a valid username</p>}
      <Input
        title="Password"
        type="password"
        name="password"
        isRequired={true}
        onChangeHandler={passwordChangeHandler}
      />
      {!isPasswordValid && (
        <p className="wrongInput">Enter a password of length of 8 at least</p>
      )}
      {isWrongDetails && (
        <p className="wrongInput">Username or Password is wrong</p>
      )}
      <button className="submitButton">Login</button>
      {isLoggedIn && <p>Login Successful</p>}
    </form>
  );
};

export default Login;
