import React from "react";
import TextField from "@mui/material/TextField";
const FormControlQuestion = () => {
  return (
      <TextField
        label="Question"
        color="secondary"
        size="small"
        style={{ width: "40%", marginBottom: 20 }}
        variant="standard"
        className="animationQuestion"
      />
  );
};

export default FormControlQuestion;
