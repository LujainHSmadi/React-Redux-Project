import { configureStore } from "@reduxjs/toolkit";
import adSlice from "../adSlice";

export const store = configureStore({
    reducer: {
        ad: adSlice,
        // user: userSlice,

    },
});
