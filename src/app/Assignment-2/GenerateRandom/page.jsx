"use client"
import { useEffect, useState } from "react";
import styles from "@/app/Assignment-2/Styles/generateRandom.module.css"
const GenerateRandom=()=>{
    const [randomNumber,setRandomNumber]=useState(0);
    useEffect(()=>{
        setRandomNumber(Math.floor(Math.random()*100))
    },[])
    const generateRandomNumber=()=>{
        setRandomNumber(Math.floor(Math.random()*100))
    }   

    return(
        <div className={styles["centerRandomNumber"]}>
            <h3>Random number</h3>
            <p>{randomNumber}</p>
            <button onClick={generateRandomNumber} className={styles["generateButton"]}>Generate Random Number</button>
        </div>
    )
}

export default GenerateRandom;