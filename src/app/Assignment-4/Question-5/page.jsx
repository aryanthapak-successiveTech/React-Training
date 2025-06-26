"use client";
import { useState } from "react";

const DropDownPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Maggie", "Pasta", "Spagetti", "Garlic Bread", "Pizza"];
  return (
    <div className="form">
      <select onChange={(event) => setSelectedOption(event.target.value)}>
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
