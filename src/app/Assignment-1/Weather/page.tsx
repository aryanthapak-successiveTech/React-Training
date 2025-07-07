"use client";
import { useState } from "react";
import Weather from "../Component/Weather";
import styles from "@/app/Assignment-1/styles/weather.module.css";
import React from "react";

const WeatherPage = () => {
  const [temperature, setTemperature] = useState<number>(null);

  const onTemperatureSelectHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(event.target.value));
  };

  return (
    <div className={styles["options"]}>
      <label>Select Temperature in °C.</label>
      
      <div>
        <input
          type="radio"
          name="temperature"
          id="temp-26"
          value={26}
          onChange={onTemperatureSelectHandler}
          checked={temperature == 26}
          className={styles["input"]}
        />
        <label htmlFor="temp-26">26°C</label>
      </div>

      <div>
        <input
          type="radio"
          name="temperature"
          id="temp-9"
          value={9}
          onChange={onTemperatureSelectHandler}
          checked={temperature == 9}
          className={styles["input"]}
        />
        <label htmlFor="temp-9">9°C</label>
      </div>

      <div>
        <input
          type="radio"
          name="temperature"
          id="temp-15"
          value={15}
          onChange={onTemperatureSelectHandler}
          checked={temperature == 15}
          className={styles["input"]}
        />
        <label htmlFor="temp-15">15°C</label>
      </div>

      {temperature && <Weather temperature={temperature} />}
    </div>
  );
};

export default WeatherPage;
