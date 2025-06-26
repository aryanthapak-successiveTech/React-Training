export const informationPageState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  foodPreferences: [],
};

export const informationReducer = (state, action) => {
  if (action.type === "firstname") {
    return { ...state, firstName: action.payload };
  }

  if (action.type === "lastname") {
    return { ...state, lastName: action.payload };
  }

  if (action.type === "email") {
    return { ...state, email: action.payload };
  }

  if (action.type === "gender") {
    return { ...state, gender: action.payload };
  }

  if (action.type === "food") {
    if (action.isChecked == true) {
      return {
        ...state,
        foodPreferences: [...state.foodPreferences, action.payload],
      };
    }

    return {
      ...state,
      foodPreferences: state.foodPreferences.filter(
        (food) => food !== action.payload
      ),
    };
  } else {
    return state;
  }
};
