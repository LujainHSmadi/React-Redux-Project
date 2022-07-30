import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk('user/getuser', async()=>{

const response = await fetch('http://127.0.0.1:8000/api/users');
const result  = await response.json();
console.log(result);
return result;

})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        loading: false,
    },
    extraReducers: {
        // Reducer for fetching ads
        [getUsers.pending]: (state, action) => { 
            state.loading = true;
            console.log(action);
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
            console.log(state.users);
        },
        [getUsers.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.users);
        },
    

    }
});

export default userSlice.reducer;
