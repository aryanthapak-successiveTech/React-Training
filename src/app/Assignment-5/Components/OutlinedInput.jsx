import * as React from "react";
import TextField from "@mui/material/TextField";

const OutlinedInput = React.forwardRef(function OutlinedInput(
  { onChangeHandler, onBlurHandler, label, isWrong, value, type },
  ref
) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      error={isWrong}
      type={type}
      inputRef={ref}
    />
  );
});

export default OutlinedInput;
