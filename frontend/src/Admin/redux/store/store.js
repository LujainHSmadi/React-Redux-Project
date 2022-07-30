import { configureStore } from "@reduxjs/toolkit";
import adSlice from "../adSlice";
<<<<<<< HEAD
import usersReducer from "../../../Store/Reducer/SignIn";

export const store = configureStore({
  reducer: {
    ad: adSlice,
    users: usersReducer,
    devTools: true,
  },
=======
import userSlice from "../userSlice";

export const store = configureStore({
    reducer: {
        ad: adSlice,
        user: userSlice,

    },
>>>>>>> 31608ed1343a288ed3f275bd00bc8fb459bc2d61
});
