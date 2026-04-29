import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../features/favorites/favSlice";
import {
  Button,
  Grid,
  Typography,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

export default function Favorites() {
  const { items } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Typography variant="h4" fontWeight="bold">
          Your Favorites ❤️
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
          ({items.length} {items.length === 1 ? "movie" : "movies"})
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {items.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No favorites yet!
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Go and add your favourite movies
          </Typography>
          <Button variant="contained" onClick={() => navigate("/")}>
            Browse Movies
          </Button>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {items.map((movie) => (
            <Grid item xs={12} sm={6} md={3} key={movie.id}>
              <Paper
                elevation={3}
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
                    fontWeight="bold"
                    noWrap
                    title={movie.title}
                    gutterBottom
                  >
                    {movie.title}
                  </Typography>

                  {movie.vote_average && (
                    <Typography variant="caption" color="text.secondary">
                      ⭐ {movie.vote_average?.toFixed(1)}
                    </Typography>
                  )}

                  <Box sx={{ display: "flex", gap: 1, mt: 1.5 }}>
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
    </>
  );
}