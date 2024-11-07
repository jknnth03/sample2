import React, { useState } from "react"; // Import useState from React
import "../Login/Login.scss";
import logo from "../../../assets/crystales.png";
import img from "../../../assets/bussiness.png";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

function Login() {
  // State hooks to manage username, password, and error states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Function to handle login logic
  const handleLogin = () => {
    // Reset error states first
    setUsernameError(false);
    setPasswordError(false);

    // Validate if username or password is empty
    if (!username) {
      setUsernameError(true); // Show error for username if it's empty
    }
    if (!password) {
      setPasswordError(true); // Show error for password if it's empty
    }

    // If both fields are filled, proceed with login logic
    if (username && password) {
      console.log("Logging in with", username, password);
      alert(`Logged in as ${username}`);

      // Optionally, clear the fields after login
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <Paper className="login-container__paper">
        <img src={logo} alt="Logo" className="login-container__logo" />
        <div className="login-container__text">Welcome to Crystales</div>
        <div className="login-container__text2">Sign in your Account</div>
        <br />
        <Box className="login-container__box">
          {/* Username field with error handling */}
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
            className="login-container__username"
            error={usernameError} // Show error if usernameError is true
            helperText={usernameError ? "Username is required" : ""} // Display error message if usernameError is true
          />

          {}
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-container__password"
            error={passwordError}
            helperText={passwordError ? "Password is required" : ""}
          />

          {}
          <Button
            variant="contained"
            className="login-container__loginbutton"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <img src={img} alt="Business" className="login-container__wallpaper" />
        <Stack className="login-container__text3">
          <p>Powered By MIS </p>
          <p>All rights reserved Copyrights © 2021</p>
        </Stack>
      </Paper>
    </div>
  );
}

export default Login;
