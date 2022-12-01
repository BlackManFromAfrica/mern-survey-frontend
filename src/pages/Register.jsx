import React from "react";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../redux/slices/auth";
import { selectIsAuth } from "../redux/slices/auth";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
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
      avatarUrl: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Не удалось зарегестрироваться");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div class="animate__animated animate__fadeInDown bg-white rounded-lg shadow w-1/3 mx-auto mt-40 ">
        <div class="p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            action="#"
            className="flex flex-col"
          >
            <h1 class=" text-2xl font-bold">Sign Up your account</h1>
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
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle
                      onClick={() => setOpen(true)}
                      sx={{ cursor: "pointer" }}
                    />
                  </InputAdornment>
                ),
              }}
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
                type="submit"
                variant="contained"
                sx={{ mt: 10 }}
                className="w-1/2"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <TextField
            error={Boolean(errors.avatarUrl?.message)}
            helperText={errors.avatarUrl?.message}
            {...register("avatarUrl")}
            id="standard-basic"
            label="Avatar Url"
            variant="standard"
            sx={{ mt: 4 }}

          />
        </Sheet>
      </Modal>
    </>
  );
}
