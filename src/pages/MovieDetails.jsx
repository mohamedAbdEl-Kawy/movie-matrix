import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../features/movies/movieThunks";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Button,
} from "@mui/material";
import { addToFav } from "../features/favorites/favSlice";

const imgPath = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selected, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id]);

  if (loading || !selected) return <CircularProgress />;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <img
            src={imgPath + selected.poster_path}
            alt={selected.title}
            width="100%"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4">{selected.title}</Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            ⭐ {selected.vote_average}
          </Typography>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Release: {selected.release_date}
          </Typography>

          <Typography sx={{ mt: 3 }}>
            {selected.overview}
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => dispatch(addToFav(selected))}
          >
            Add to Favorites
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}