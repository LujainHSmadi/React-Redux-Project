import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../PostFeatures/api/apiSlice';

export const storePost = configureStore({
    
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})