import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieDetails } from "./movieThunks";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        list: [],
        selected: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchMovieDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(fetchMovieDetails.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to load movie";
            });
    },
});

export default movieSlice.reducer;
