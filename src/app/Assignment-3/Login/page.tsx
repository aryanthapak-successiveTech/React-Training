"use client"
import Input from "@/Components/Input";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const {isLoggedIn,loginUser}=useContext(LoginContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserNameValid,setIsUserNameValid]=useState(true);
  const [isPasswordValid,setIsPasswordValid]=useState(true);
  const [isWrongDetails,setIsWrongDetails]=useState(false);
  const router=useRouter();

  useEffect(()=>{
    if(isLoggedIn){
        router.push("/Assignment-3/Home");
    }
  },[isLoggedIn])

  const userNameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onLoginHandler=(event:React.ChangeEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setIsWrongDetails(false);
    setIsUserNameValid(true);
    setIsPasswordValid(true);

    if(!userName.match(/^[a-zA-Z]+$/)){
        setIsUserNameValid(false);
        return;
    }

    if(password.trim().length<8){
        setIsPasswordValid(false);
        return;
    }

    if(userName!=="AryanThapak" && password!=="Aryan@@@"){
        setIsWrongDetails(true);
        return;
    }

    loginUser();

  }


  return (
    <form className="form" onSubmit={onLoginHandler}>
      <Input
        title="Username"
        type="text"
        isRequired={true}
        onChangeHandler={userNameChangeHandler}
      />
      {!isUserNameValid && <p className="wrongInput">Enter a valid username</p>}
      <Input
        title="Password"
        type="password"
        isRequired={true}
        onChangeHandler={passwordChangeHandler}
      />
      {!isPasswordValid && <p className="wrongInput">Enter a password of length of 8 at least</p>}
      {isWrongDetails && <p className="wrongInput">Username or Password is wrong</p>}
      <button className="submitButton">Login</button>
      {isLoggedIn && <p>Login Successful</p>}
    </form>
  );
};

export default Login;
