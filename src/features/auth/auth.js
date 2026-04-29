import { createSlice } from "@reduxjs/toolkit";

const loadUserFromStorage = () => {
    try {
        const stored = localStorage.getItem("user");
        if (!stored) return null;
        const { password: dummy, ...safeUser } = JSON.parse(stored);
        return safeUser;
    } catch {
        return null;
    }
};

const initialState = {
    user: loadUserFromStorage(),
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
