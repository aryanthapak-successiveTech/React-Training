import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface OutlinedInputInterface {
  onChangeHandler?: (event:React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler?: (event:React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  isWrong?: boolean;
  value?: string | number;
  type: string;
}

const OutlinedInput: React.FC<OutlinedInputInterface> = ({
  onChangeHandler,
  onBlurHandler,
  label,
  isWrong,
  value,
  type,
}) => {
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
      />
  );
};

export default OutlinedInput;
