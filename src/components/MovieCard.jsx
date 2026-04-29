import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToFav } from "../features/favorites/favSlice";
import { useNavigate } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card sx={{width:250, borderRadius: 8, boxShadow: 3, transition: "0.3s", "&:hover": { transform: "scale(1.04)" } }}>
  <CardMedia
    component="img"
    height="300"
    image={imgPath + movie.poster_path}
  />

  <CardContent>
    <Typography variant="h6" gutterBottom noWrap>
      {movie.title}
    </Typography>

    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Button
        variant="contained"
        size="small"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        Details
      </Button>

      <Button
        variant="outlined"
        size="small"
        onClick={() => dispatch(addToFav(movie))}
      >
        ❤️
      </Button>
    </Box>
  </CardContent>
</Card>
  );
}