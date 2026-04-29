import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: "5fe474fa924d3ade8f6b7de91b569cf9",
            include_adult: false,
            sort_by: "popularity.desc",
        },
    });
    return res.data.results;
});

export const fetchMovieDetails = createAsyncThunk(
    "movies/fetchMovieDetails",
    async (id) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=5fe474fa924d3ade8f6b7de91b569cf9`,
        );
        return res.data;
    },
);
