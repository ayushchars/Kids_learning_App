import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./fetures/loginSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default store