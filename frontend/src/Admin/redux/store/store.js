import { configureStore } from "@reduxjs/toolkit";
import adSlice from "../adSlice";
import Reducer from "../../../Store/Reducer/SignIn";
export const store = configureStore({
    reducer: {
        ad: adSlice,
        
    },
});
