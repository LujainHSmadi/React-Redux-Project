import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAds = createAsyncThunk('ad/getAds', async () => {
    const response = await fetch('http://127.0.0.1:8000/api/ads');
    const data = await response.json();
    return data;
});

const adSlice = createSlice({
    name: 'ad',
    initialState: {
        ads: [],
        loading: false,
    },
    extraReducers: {
        [getAds.pending]: (state, action) => { 
            state.loading = true;
            console.log(action);
        },
        [getAds.fulfilled]: (state, action) => {
            state.ads = action.payload;
            state.loading = false;
            console.log(state.ads);
        },
        [getAds.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            console.log(state.ads);
        }
    }
});

export default adSlice.reducer;


