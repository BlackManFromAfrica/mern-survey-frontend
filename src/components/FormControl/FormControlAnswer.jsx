import React from "react";
import TextField from "@mui/material/TextField";

const FormControlAnswer = () => {
  return (
    <TextField
      color="secondary"
      size="small"
      style={{ width: '40%' }}
      variant="standard"
      className="animationAnswer"
      label='Answer'
    />
  );
};

export default FormControlAnswer;
