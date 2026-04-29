import { TextField, Button, Container, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/auth";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    const stored = localStorage.getItem("user");

    if (!stored) {
      setError("No account found. Please register first.");
      return;
    }

    const storedUser = JSON.parse(stored);

    if (storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    const { password: dummy, ...safeUser } = storedUser;
    dispatch(login(safeUser));

    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 3, mt: 2 }}>
        Login
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
      />

      <Button
        variant="contained"
        onClick={handleLogin}
        sx={{ mt: 2 }}
        fullWidth
      >
        Login
      </Button>

      <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }} >
        Don't have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </Typography>
    </Container>
  );
}