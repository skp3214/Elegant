import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticated: false,
    authtoken: null,
    user: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = action.payload.success;
            state.authtoken = action.payload.authtoken;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.authtoken = null;
            state.user = null;
        },
        setUser:(state,action)=>{
            state.user=action.payload.user;
        }
    },
});

export const { login, logout,setUser } = authSlice.actions;

export default authSlice.reducer