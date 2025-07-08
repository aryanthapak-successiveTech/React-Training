import * as React from "react";
import TextField from "@mui/material/TextField";

interface OutlinedInputInterface {
  onChangeHandler?: (event:React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler?: (event:React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  isWrong: boolean;
  value?: string;
  type: string;
}

const OutlinedInput= React.forwardRef<HTMLInputElement,OutlinedInputInterface>((
  { onChangeHandler, onBlurHandler, label, isWrong, value, type },
  ref
)=> {
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
