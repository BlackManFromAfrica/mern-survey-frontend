import React from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/slices/auth";
export default function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert("Не удалось авторизоваться");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div class="animate__animated animate__fadeInUp bg-white rounded-lg shadow w-1/3 mx-auto mt-40 ">
      <div class="p-8">
        <form
          method="post"
          action="#"
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 class=" text-2xl font-bold">Sign In to your account</h1>
          <TextField
            error={Boolean(errors.username?.message)}
            helperText={errors.username?.message}
            {...register("username", {
              required: "Укажите имя пользователя",
            })}
            id="standard-basic"
            label="Username"
            variant="standard"
            sx={{ mt: 4 }}
          />
          <TextField
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register("password", {
              required: "Укажите пароль",
            })}
            sx={{ mt: 6 }}
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
          <div>
            <Button
              variant="contained"
              sx={{ mt: 10 }}
              className="w-1/2"
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
