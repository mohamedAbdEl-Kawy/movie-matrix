import {
  Container,
  Typography,
  Box,
  Avatar,
  Divider,
  Grid,
  Button,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../features/favorites/favSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/auth";

const imgPath = "https://image.tmdb.org/t/p/w500/";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  const { items: favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          You are not logged in.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Go to Login
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, mb: 5, borderRadius: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            sx={{
              width: 72,
              height: 72,
              bgcolor: "primary.main",
              fontSize: 28,
            }}
          >
            {user.name?.charAt(0).toUpperCase()}
          </Avatar>

          <Box>
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {user.email}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            color="error"
            sx={{ ml: "auto" }}
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Box>
      </Paper>

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        My Favorites ❤️{" "}
        <Typography component="span" color="text.secondary" variant="body1">
          ({favorites.length} {favorites.length === 1 ? "movie" : "movies"})
        </Typography>
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {favorites.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            You haven't added any favorites yet.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/")}>
            Browse Movies
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={3} key={movie.id}>
              <Paper
                elevation={2}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <Box
                  component="img"
                  src={imgPath + movie.poster_path}
                  alt={movie.title}
                  sx={{ width: 250, display: "block", cursor: "pointer" }}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                />
                <Box sx={{ p: 1.5 }}>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    fontWeight="bold"
                    gutterBottom
                  >
                    {movie.title}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => navigate(`/movie/${movie.id}`)}
                      sx={{ flex: 1 }}
                    >
                      Details
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => dispatch(removeFromFav(movie.id))}
                      sx={{ flex: 1 }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}