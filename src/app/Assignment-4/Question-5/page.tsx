"use client";
import { useState } from "react";

const DropDownPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const options:string[] = ["Maggie", "Pasta", "Spagetti", "Garlic Bread", "Pizza"];
  return (
    <div className="form">
      <select onChange={(event:React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(event.target.value)}>
        {options.map((foodOption, idx) => (
          <option key={idx} value={foodOption}>
            {foodOption}
          </option>
        ))}
      </select>
      {options.length != 0 && <p>{selectedOption}</p>}
    </div>
  );
};

export default DropDownPage;
