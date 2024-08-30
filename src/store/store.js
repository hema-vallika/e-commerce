import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import globalSlice from "./globalSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        global: globalSlice,

    }
})

export default store