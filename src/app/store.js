import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import favReducer from "../features/favorites/favSlice";
import authReducer from "../features/auth/auth";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favReducer,
    auth: authReducer,
  },
});