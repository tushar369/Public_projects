import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff, AccountCircle } from "@material-ui/icons";
import {
  Paper,
  IconButton,
  Typography,
  Grid,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  Divider,
} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 25,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
    },
  },
});

const LoginPage = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChangePassword = (e) => {
    setValues({ ...values, password: e.target.value });
    console.log(values.password);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChangeUser = (e) => {
    setValues({ ...values, username: e.target.value });
    console.log(values.username);
  };

  const handelLoginClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    };
    const res = await fetch("http://127.0.0.1:8000/api/login", requestOptions);
    const data = await res.json();
    console.log(data.token);
    data.token && props.history.push("/user");
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12} align="center" className="login-text">
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
          </Grid>

          <Grid item xs={12} align="center">
            <Divider variant="middle" orientation="horizontal" />
          </Grid>

          <Grid item xs={12} lg={5} align="center">
            <FormControl variant="outlined">
              <InputLabel htmlFor="input-with-icon-adornment">
                Username
              </InputLabel>
              <OutlinedInput
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                onChange={handleChangeUser}
                labelWidth={70}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} lg={6} align="center">
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={handleChangePassword}
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton onClick={handleClickShowPassword}>
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
            <Divider variant="middle" orientation="horizontal" />
          </Grid>

          <Grid item xs={12} align="center">
            <Button onClick={handelLoginClick}>Login</Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default LoginPage;
