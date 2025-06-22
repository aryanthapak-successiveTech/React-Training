"use client";
import { useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { userPreferenceState, userReducer } from "../userPreferenceReducer";

const preferences = [
  {
    category: "Bed Room",
    option1: "1 Bed",
    option2: "2 Bed",
    option3: "3 Bed",
  },
  {
    category: "Food",
    option1: "Lunch",
    option2: "Dinner",
    option3: "Both",
  },
  {
    category: "Tenure",
    option1: "1 Day",
    option2: "2 Day",
    option3: "3 Day",
  },
];

const UserPreference = () => {
  const { storeData, removeData, getData } = useLocalStorage();
  const [ userPreference, dispatch ] = useReducer(
    userReducer,
    userPreferenceState
  );

  console.log(userPreference)
  return (
    <div className="form">
      {preferences.map((preference,idx) => (
        <div key={idx}>
          <h3>{preference.category}</h3>
          <input
            type="radio"
            name={preference.category}
            value={preference.option1}
            onClick={(event)=>dispatch({
              type: preference.category.toLowerCase().split(" ").join(""),
              payload:event.target.value
            })}
          />
          <label>{preference.option1}</label>
          <input
            type="radio"
            name={preference.category}
            value={preference.option2}
            onClick={(event)=>dispatch({
              type: preference.category.toLowerCase().split(" ").join(""),
              payload:event.target.value
            })}
          />
          <label>{preference.option2}</label>
          <input
            type="radio"
            name={preference.category}
            value={preference.option3}
            onClick={(event)=>dispatch({
              type: preference.category.toLowerCase().split(" ").join(""),
              payload:event.target.value
            })}
          />
          <label>{preference.option3}</label>
        </div>
      ))}
      <button onClick={()=>storeData("preference",JSON.stringify(userPreference))}>Save</button>
      <button onClick={()=>removeData("preference")}>Remove</button>
    </div>
  );
};

export default UserPreference;
