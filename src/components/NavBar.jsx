import { AppBar, Toolbar, Button, Badge, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/auth";

export default function NavBar() {
  const favCount = useSelector((state) => state.favorites.items.length);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          MOVIE MATRIX
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          <Button color="inherit" component={Link} to="/favorites">
            <Badge badgeContent={favCount} color="error">
              Favorites
            </Badge>
          </Button>

          {!user ? (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>

              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>

              <Button
                color="inherit"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}