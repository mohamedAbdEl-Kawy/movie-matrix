import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/movieThunks";
import MovieCard from "../components/MovieCard";
import { Grid, CircularProgress } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
  {list.map((movie) => (
    <Grid item xs={12} sm={6} md={3} key={movie.id}>
      <MovieCard movie={movie} />
    </Grid>
  ))}
</Grid>
  );
}