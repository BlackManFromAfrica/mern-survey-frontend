import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
const EntranceForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1 style={{ marginBottom: 20 }}>{props.text}</h1>

          <TextField
            color="success"
            size="small"
            label="Username"
            variant="standard"
            style={{ width: 300, marginBottom: 30 }}
          />
          <TextField
            color="secondary"
            size="small"
            style={{ width: 300, marginBottom: 30 }}
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"} // <-- This is where the magic happens
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button>{props.text}</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button class="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>{props.descr}</p>
            <NavLink to={props.link}>
              <button class="ghost" id="signUp">
                {props.textrev}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntranceForm;
