"use client";
import { useEffect, useState } from "react";
import styles from "@/app/Assignment-2/Styles/clock.module.css"
const ClockPage = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const currDate = new Date();

    let timer=setTimeout(() => {
      setHours(currDate.getHours());
      setMinutes(currDate.getMinutes());
      setSeconds(currDate.getSeconds());
    }, 1000);

    ()=>clearTimeout(timer);
  }, [seconds]);

  return (
    <div>
      <p className={styles["time"]}>
        {hours} : {minutes} : {seconds}
      </p>
    </div>
  );
};

export default ClockPage;
