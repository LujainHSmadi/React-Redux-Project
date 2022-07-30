import { configureStore } from "@reduxjs/toolkit";
import adSlice from "../adSlice";
import usersReducer from "../../../Store/Reducer/SignIn";

export const store = configureStore({
  reducer: {
    ad: adSlice,
    users: usersReducer,
    devTools: true,
  },
});
