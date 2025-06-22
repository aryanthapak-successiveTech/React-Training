import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (totalSeconds <= 0) {
        setRemainingSeconds(0);
      clearInterval(intervalRef.current);
      return;
    }

    setRemainingHours(Math.floor(totalSeconds / 3600));
    setRemainingMinutes(Math.floor((totalSeconds % 3600) / 60));
    setRemainingSeconds(totalSeconds % 60);
   
  }, [totalSeconds]);

  const startTimer = (hrs, mins, secs) => {
    clearInterval(intervalRef.current); 
    const initialTotalSeconds = hrs * 3600 + mins * 60 + secs;
    setTotalSeconds(initialTotalSeconds);

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return {
    remainingHours,
    remainingMinutes,
    remainingSeconds,
    startTimer,
  };
};
