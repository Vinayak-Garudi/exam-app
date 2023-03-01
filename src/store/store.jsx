import { createSlice, configureStore } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "allSlice",
    initialState: {
        user: "",
        isLogin: false,
        welcome: true,
        nameReqd: true
    },
    reducers: {
        handleLogin(state, action) {
            state.isLogin = true
        },
        handleLogout(state) {
            state.isLogin = false
            state.user = ""
        },
        toggleWelcome(state, action) {
            state.welcome = action.payload
        },
        nameReqd(state,action) {
            state.nameReqd = action.payload
        },
        addCred(state,action) {
            state.user = action.payload
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