"use client"
import { useContext, useEffect, useState } from "react";
import styles from "@/app/Assignment-2/Styles/generateRandom.module.css"
import { LanguageContext } from "@/context/LanguageContext";
import { translator } from "../Translation";
const GenerateRandom=()=>{
    const [randomNumber,setRandomNumber]=useState<number>(0);
    const {language}=useContext(LanguageContext);
    const translation=translator[language];
    useEffect(()=>{
        setRandomNumber(Math.floor(Math.random()*100))
    },[])
    const generateRandomNumber=():void=>{
        setRandomNumber(Math.floor(Math.random()*100))
    }   

    return(
        <div className={styles["centerRandomNumber"]}>
            <h3>{translation?translation["Random_number"]:"Random Number"}</h3>
            <p>{randomNumber}</p>
            <button onClick={generateRandomNumber} className={styles["generateButton"]}>Generate Random Number</button>
        </div>
    )
}

export default GenerateRandom;