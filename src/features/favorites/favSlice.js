import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromStorage = () => {
    try {
        const stored = localStorage.getItem("user");
        if (!stored) return [];
        const user = JSON.parse(stored);
        return Array.isArray(user.favorites) ? user.favorites : [];
    } catch {
        return [];
    }
};
const saveFavoritesToStorage = (favorites) => {
    try {
        const stored = localStorage.getItem("user");
        if (!stored) return;
        const user = JSON.parse(stored);
        user.favorites = favorites;
        localStorage.setItem("user", JSON.stringify(user));
    } catch (err) {
        console.log(err);
    }
};

const favSlice = createSlice({
    name: "favorites",
    initialState: {
        items: loadFavoritesFromStorage(),
    },
    reducers: {
        addToFav: (state, action) => {
            const exists = state.items.find((m) => m.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
                saveFavoritesToStorage(state.items);
            }
        },
        removeFromFav: (state, action) => {
            state.items = state.items.filter((m) => m.id !== action.payload);
            saveFavoritesToStorage(state.items);
        },
    },
});

export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;
