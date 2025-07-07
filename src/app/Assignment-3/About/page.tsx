"use client"
import { useContext, useEffect} from "react";
import { LoginContext } from "../context/LoginContext";
import { useRouter } from "next/navigation";

const About = () => {
    const router=useRouter();
    const {isLoggedIn}=useContext(LoginContext);
    useEffect(()=>{
        if(!isLoggedIn){
            router.push("/Assignment-3/Login")
        }

        ()=>{};
    },[isLoggedIn])
    
  return (
    <div>
      <h2>About Us</h2>
      <p>
        This is about Page of Assignment-3 
      </p>
    </div>
  );
};

export default About;
