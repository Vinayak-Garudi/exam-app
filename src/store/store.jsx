import { createSlice, configureStore } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "allSlice",
    initialState: {
        user: "",
        isLogin: false,
        welcome: true
    },
    reducers: {
        handleLogin(state, action) {
            state.isLogin = true
            state.user = "Vinayak Garudi"
        },
        handleLogout(state) {
            state.isLogin = false
            state.user = ""
        },
        toggleWelcome(state, action) {
            state.welcome = action.payload
        }
    }
})

export const actions = appSlice.actions

const store = configureStore({
    reducer: {
        allSlice: appSlice.reducer
    }
})

export default store