"use client";

import Input from "@/Components/Input";
import { useState } from "react";

const ConversionTemperaturePage = () => {
  const [celciusTemperature, setCelciusTemperature] = useState(0);
  const [fahrenheitTemperature, setFahrenheitTemperature] = useState(0);
  const celciusChangeHandler=(event)=>{
    setCelciusTemperature(event.target.value);
    setFahrenheitTemperature((event.target.value*1.8)+32)
  }

  const fahrenheitChangeHandler=(event)=>{
    setFahrenheitTemperature(event.target.value);
    setCelciusTemperature((event.target.value-32)*5/9)
  }
  return (
    <div>
      <Input
        title="Enter a temperature in Celcius"
        type="Number"
        value={celciusTemperature}
        onChangeHandler={celciusChangeHandler}
      />

      <Input
        title="Enter a temperature in Fahrenheit"
        type="Number"
        value={fahrenheitTemperature}
        onChangeHandler={fahrenheitChangeHandler}
      />
    </div>
  );
};

export default ConversionTemperaturePage;
