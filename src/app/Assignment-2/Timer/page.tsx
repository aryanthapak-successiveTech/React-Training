"use client";

import { useState } from "react";
import { useTimer } from "../hooks/useTimer";

const Timer = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const {remainingHours,remainingMinutes,remainingSeconds,startTimer} = useTimer();
  const onShowHandlder = () => {
    startTimer(hours,minutes,seconds)
    setShowTimer(true);
  };
  let hoursInput:number[] = new Array(25);
  hoursInput.fill(0);
  hoursInput = hoursInput.map((ele, idx) => idx);

  let minutesInput:number[] = new Array(61);
  minutesInput.fill(0);
  minutesInput = minutesInput.map((ele, idx) => idx);

  let secondsInput:number[] = new Array(61);
  secondsInput.fill(0);
  secondsInput = secondsInput.map((ele, idx) => idx);

  return (
    <div className="form">
        <h2>Select from Options</h2>
      <select className="options" onChange={(event) => setHours(Number(event.target.value))}>
        {hoursInput.map((ele, idx) => (
          <option key={idx} value={ele}>
            {ele} hrs
          </option>
        ))}
      </select>
      <select className="options" onChange={(event) => setMinutes(Number(event.target.value))}>
        {minutesInput.map((ele, idx) => (
          <option key={idx} value={ele}>
            {ele} mins
          </option>
        ))}
      </select>
      <select className="options" onChange={(event) => setSeconds(Number(event.target.value))}>
        {secondsInput.map((ele, idx) => (
          <option key={idx} value={ele}>
            {ele} seconds
          </option>
        ))}
      </select>
      <button onClick={onShowHandlder} className="button">Start Timer</button>
      {showTimer && <h3>{remainingHours} : {remainingMinutes} : {remainingSeconds}</h3>}
    </div>
  );
};

export default Timer;
