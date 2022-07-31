
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Auth from "../Services/Auth";
const initialState = [];
export const login = createAsyncThunk(
  "login",
  async ({ email,password }) => {
    const res = await Auth.Login({ email, password });
    return res.data;
  }
);
export const Register = createAsyncThunk("register", async ({ name,email, password ,role,image}) => {
  const res = await Auth.Register({ name,email, password,role ,image});
  return res.data;
});
// export const getAll = createAsyncThunk(
//   "",
//   async () => {
//     const res = await Auth.getAll();
//     return res.data;
//   }
// );
export const updateUser = createAsyncThunk(
  "profile",
  async ({ id, data }) => {
    const res = await Auth.update(id, data);
    return res.data;
  }
);
// export const deleteUser = createAsyncThunk(
//   "",
//   async ({ id }) => {
//     await Auth.remove(id);
//     return { id };
//   }
// );
// export const deleteAllTutorials = createAsyncThunk(
//   "",
//   async () => {
//     const res = await Auth.removeAll();
//     return res.data;
//   }
// );
// export const findByTitle = createAsyncThunk(
//   "",
//   async ({ title }) => {
//     const res = await Auth.findByTitle(type);
//     return res.data;
//   }
// );
const AuthSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [Register.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    // [getAll.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
    [updateUser.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (user) => user.id === action.payload.id
      );
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    // [deleteUser.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
 
    // [findByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});
const { reducer } = AuthSlice;
export default reducer;