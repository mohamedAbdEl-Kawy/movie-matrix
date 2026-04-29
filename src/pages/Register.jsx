import { TextField, Button, Container, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }

    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      const parsed = JSON.parse(existingUser);
      if (parsed.email === email) {
        setError("An account with this email already exists.");
        return;
      }
    }

    const user = {
      name,
      email,
      password,
      favorites: [],
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 3, mt: 2 }}>
        Register
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
      />

      <Button
        variant="contained"
        onClick={handleRegister}
        sx={{ mt: 2 }}
        fullWidth
      >
        Register
      </Button>

      <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
        Already have an account?{" "}
        <span
          style={{ color: "#1976d2", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </Typography>
    </Container>
  );
}