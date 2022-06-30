import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import logo from "../Pages/logo.png";
import NavbarSignIn from "../components/navbar/navbarSignin";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import Homepage from "./Homepage";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © Usahakuy.ID"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignIn() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [isValid, setIsValid] = useState<any>(false);
  const [home, setHome] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email = localStorage.getItem("Email")?.replace(/"/g, "");
    let password = localStorage.getItem("Password")?.replace(/"/g, "");

    if (!emailLogin || !passLogin) {
      setIsValid(true);
      console.log("Empty");
    } else if (passLogin !== password || emailLogin !== email) {
      setIsValid(true);
    } else {
      setHome(!home);
      setIsValid(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <NavbarSignIn />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" width={100} height={100} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {home ? (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmailLogin(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassLogin(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link to="/after">
                <Typography
                  sx={{ mb: 3, mt: 3 }}
                  className="btn btn-custom"
                  align="center"
                >
                  Sign In
                </Typography>
              </Link>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item>
                  <Link to="/signUp">
                    <Typography className="sign">
                      Belum Memiliki Akun? Daftar
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              {isValid && alert("Please fill all the fields")}
            </Box>
          ) : (
            <Homepage />
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
