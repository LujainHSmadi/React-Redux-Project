import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// show comments





//delete comments
export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
    const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charest=UTF-8",
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
}
catch{
  return rejectWithValue(error.message);
}
}
);
const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
    },
    extraReducers: {

        //reducer for get comments
        [getPosts.pending]: (state, action) => {
            state.loading = true;
            
        },
        [getPosts.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.loading = false;
           
        },
        [getPosts.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            
        },


        //....
        // Reducer for fetching ads
        
        [deletePosts.pending]: (state, action) => { 
            state.loading = true;
        },
        [deletePosts.fulfilled]: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
            ;
        },
        [deletePosts.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    

    }
});

export default postSlice.reducer;